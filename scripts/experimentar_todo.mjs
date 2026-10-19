/** OptiLab: resultados experimentales unificados. Node >= 20.
 * Uso: node scripts/experimentar_todo.mjs --smoke
 *      node scripts/experimentar_todo.mjs --problemas mochila,grafos,reinas,eggholder
 *      node scripts/experimentar_todo.mjs --problemas reinas,eggholder
 * Opcional Excel: npm install -D exceljs
 * Para N-Reinas/Eggholder los solvers legados pueden superar 10k evaluaciones;
 * se documenta y excluye la corrida del análisis conforme al presupuesto.
 */
import fs from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "resultados", "unificado");
const WORKER = path.join(ROOT, "scripts", "worker_experimento.mjs");
const SEEDS = [11, 22, 33, 44, 55],
  BUDGET = { maxEvals: 10000, maxSeconds: 10 };
const allowed = ["mochila", "grafos", "reinas", "eggholder"];
const getArg = (k) => {
  const i = process.argv.indexOf(k);
  return i >= 0 ? process.argv[i + 1] : null;
};
const smoke = process.argv.includes("--smoke");
const selected = (getArg("--problemas") ?? allowed.join(",")).split(",");
if (selected.some((x) => !allowed.includes(x)))
  throw Error("Problemas admitidos: " + allowed.join(","));
const config = {
  mochila: {
    bt: { ...BUDGET, nodeLimit: 100000 },
    sa: {
      ...BUDGET,
      initialTemperature: 50,
      coolingRate: 0.995,
      minTemperature: 0.001,
      maxIterations: 10000,
    },
    ga: {
      ...BUDGET,
      populationSize: 30,
      maxGenerations: 300,
      crossoverRate: 0.8,
      mutationRate: 0.2,
      elitism: 1,
      tournamentSize: 3,
    },
  },
  grafos: {
    bt: { ...BUDGET, nodeLimit: 100000 },
    sa: {
      ...BUDGET,
      maxIterations: 10000,
      initialTemperature: 5,
      coolingRate: 0.999,
      minTemperature: 0.001,
    },
    ga: {
      ...BUDGET,
      populationSize: 30,
      maxGenerations: 150,
      tournamentSize: 3,
      elitism: 2,
      crossoverRate: 0.8,
      mutationRate: 0.02,
    },
  },
  reinas: {
    bt: { ...BUDGET, nodeLimit: 100000 },
    sa: { ...BUDGET, T0: 2, alpha: 0.9999, Tmin: 0.05, maxIter: 9999 },
    ga: { ...BUDGET, pop: 100, gens: 90, pc: 0.9, pm: 0.2, elit: 2, tk: 3 },
  },
  eggholder: {
    sa: {
      ...BUDGET,
      T0: 100,
      alpha: 0.9995,
      Tmin: 0.01,
      maxIter: 9999,
      step: 150,
    },
    ga: {
      ...BUDGET,
      pop: 60,
      gens: 160,
      pc: 0.9,
      pm: 0.2,
      elit: 2,
      tk: 3,
      blx: 0.3,
      sigma: 20,
    },
  },
};
const sha = (x) => crypto.createHash("sha256").update(x).digest("hex");
function parseVector(s) {
  if (!/^\s*\[.*\]\s*$/.test(s)) throw Error("Vector inválido");
  return s.slice(1, -1).replaceAll(",", " ").trim().split(/\s+/).map(Number);
}
async function instances(problem) {
  if (problem === "reinas")
    return [8, 50, 100].map((n) => ({ id: `reinas_${n}`, n }));
  if (problem === "eggholder")
    return [
      {
        id: "eggholder_estandar",
        bounds: [
          [-512, 512],
          [-512, 512],
        ],
      },
    ];
  if (problem === "grafos") {
    const p = path.join(ROOT, "data", "graph-instances.js");
    const source = await fs.readFile(p, "utf8");
    const match = source.match(
      /export\s+const\s+GRAPH_INSTANCES\s*=\s*(\[[\s\S]*?\]);?\s*(?:\/\/[^\n]*)?\s*$/,
    );
    // Import the project module normally; it must be ES module as used by Next.js.
    const m = await import("file://" + p.replaceAll("\\", "/"));
    if (!Array.isArray(m.GRAPH_INSTANCES) || m.GRAPH_INSTANCES.length !== 6)
      throw Error("Seis grafos esperados");
    return m.GRAPH_INSTANCES;
  }
  const bytes = await fs.readFile(
    path.join(ROOT, "data", "knapsack_5_items.csv"),
  );
  const expected =
    "55b98b9d9d2fc743100f8e48f168e0504b39bee18aad37712d3ccb9d516f044c";
  if (sha(bytes) !== expected)
    throw Error("SHA256 de mochila no coincide con plantilla");
  const lines = bytes
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trim()
    .split(/\r?\n/);
  if (!lines[0].startsWith("Weights,Prices,Capacity"))
    throw Error("Encabezado de mochila incorrecto");
  return Array.from({ length: 10 }, (_, i) => {
    const f = lines[i + 1]?.split(",");
    if (!f) throw Error("Falta fila " + i);
    const pesos = parseVector(f[0]),
      valores = parseVector(f[1]),
      capacidad = Number(f[2]);
    if (
      pesos.length !== 5 ||
      valores.length !== 5 ||
      !Number.isFinite(capacidad)
    )
      throw Error("Datos inválidos");
    return { id: `kaggle_opcion1_fila_${i}`, pesos, valores, capacidad };
  });
}
function execute(problem, algo, inst, params, seed, timeoutMs) {
  return new Promise((resolve) => {
    const child = spawn(
      process.execPath,
      [
        WORKER,
        ROOT,
        problem,
        algo,
        JSON.stringify(inst),
        JSON.stringify(params),
        String(seed),
      ],
      { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] },
    );
    let out = "",
      err = "",
      timedOut = false,
      oversize = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, timeoutMs);
    child.stdout.on("data", (b) => {
      out += b.toString();
      if (out.length > 15e6) {
        oversize = true;
        child.kill("SIGKILL");
      }
    });
    child.stderr.on("data", (b) => {
      err += b.toString().slice(0, 10000);
    });
    child.on("error", (e) => {
      err += e.message;
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (timedOut)
        return resolve({
          error:
            "Tiempo excedido: ejecución interrumpida por proceso supervisor",
          timeout: true,
        });
      if (oversize) return resolve({ error: "Resultado demasiado grande" });
      if (code !== 0) return resolve({ error: err || `Salida ${code}` });
      try {
        resolve({ data: JSON.parse(out) });
      } catch (e) {
        resolve({ error: `JSON inválido: ${e.message}; ${err}` });
      }
    });
  });
}
function csvEscape(v) {
  if (v === null || v === undefined) return "";
  const s = typeof v === "object" ? JSON.stringify(v) : String(v);
  return /[",\r\n]/.test(s) ? '"' + s.replaceAll('"', '""') + '"' : s;
}
function csv(rows, cols) {
  return (
    "\uFEFF" +
    [
      cols.join(","),
      ...rows.map((r) => cols.map((k) => csvEscape(r[k])).join(",")),
    ].join("\r\n") +
    "\r\n"
  );
}
const median = (a) => {
  if (!a.length) return null;
  let s = [...a].sort((a, b) => a - b);
  return (s[(s.length - 1) >> 1] + s[s.length >> 1]) / 2;
};
const mean = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : null);
function summaries(rows) {
  let groups = new Map();
  for (const r of rows) {
    const k = [r.problema, r.instancia, r.algoritmo].join("|");
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(r);
  }
  return [...groups.values()].map((a) => {
    const valid = a.filter(
      (x) => x.estado === "ok" && x.factible && x.dentro_presupuesto,
    );
    const vv = valid.map((x) => x.objetivo),
      m = mean(vv);
    return {
      problema: a[0].problema,
      instancia: a[0].instancia,
      algoritmo: a[0].algoritmo,
      corridas: a.length,
      validas: valid.length,
      errores: a.filter((x) => x.estado === "error").length,
      fuera_presupuesto: a.filter((x) => !x.dentro_presupuesto).length,
      tasa_factible_dentro: valid.length / a.length,
      objetivo_mediana: median(vv),
      objetivo_media: m,
      objetivo_std:
        vv.length > 1
          ? Math.sqrt(
              vv.reduce((s, v) => s + (v - m) ** 2, 0) / (vv.length - 1),
            )
          : null,
      tiempo_mediana_ms: median(valid.map((x) => x.tiempo_ms)),
      evaluaciones_mediana: median(valid.map((x) => x.evaluaciones)),
    };
  });
}
async function excel(sheets) {
  let X;
  try {
    ({ default: X } = await import("exceljs"));
  } catch {
    return false;
  }
  const book = new X.Workbook();
  book.creator = "OptiLab";
  for (const [name, rows] of Object.entries(sheets)) {
    const sh = book.addWorksheet(name, {
      views: [{ state: "frozen", ySplit: 1 }],
    });
    if (!rows.length) continue;
    const keys = Object.keys(rows[0]);
    sh.columns = keys.map((k) => ({
      header: k,
      key: k,
      width: Math.min(44, Math.max(15, k.length + 3)),
    }));
    for (const r of rows)
      sh.addRow(
        Object.fromEntries(
          keys.map((k) => [
            k,
            typeof r[k] === "object" && r[k] !== null
              ? JSON.stringify(r[k])
              : (r[k] ?? ""),
          ]),
        ),
      );
    sh.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    sh.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF225478" },
    };
    sh.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: rows.length + 1, column: keys.length },
    };
  }
  await book.xlsx.writeFile(path.join(OUT, "experimentos_unificados.xlsx"));
  return true;
}
async function main() {
  const runid = new Date().toISOString().replace(/[:.]/g, "-");
  const runs = [],
    curves = [],
    manifest = [];
  for (const p of selected) {
    const ins = await instances(p);
    for (const inst of smoke ? ins.slice(0, 1) : ins) {
      manifest.push({
        problema: p,
        instancia: inst.id,
        tamano: inst.n ?? inst.pesos?.length ?? 2,
        aristas: inst.aristas?.length ?? null,
        datos_sha256: sha(JSON.stringify(inst)),
      });
      for (const a of Object.keys(config[p]))
        for (const seed of smoke ? [11] : SEEDS) {
          const params = { ...config[p][a] };
          if (smoke) {
            params.maxSeconds = 0.25;
            params.maxEvals = 150;
            if (params.nodeLimit) params.nodeLimit = 500;
            if (params.maxIter) params.maxIter = Math.min(params.maxIter, 100);
            if (params.gens) params.gens = 2;
            if (params.maxIterations) params.maxIterations = 100;
            if (params.maxGenerations) params.maxGenerations = 2;
          }
          const r = {
            lote: runid,
            problema: p,
            instancia: inst.id,
            tamano: inst.n ?? inst.pesos?.length ?? 2,
            algoritmo: a,
            semilla: seed,
            parametros: JSON.stringify(params),
            presupuesto_evaluaciones: params.maxEvals,
            presupuesto_s: params.maxSeconds,
            estado: "error",
            factible: false,
            dentro_presupuesto: false,
            objetivo: null,
            tiempo_ms: null,
            evaluaciones: null,
            iteraciones: null,
            motivo_parada: null,
            optimo_demostrado: false,
            conflictos: null,
            colores: null,
            peso: null,
            valor_inicial: null,
            mejoras: null,
            solucion: null,
            error: "",
          };
          const outcome = await execute(
            p,
            a,
            inst,
            params,
            seed,
            Math.round(params.maxSeconds * 1000) + 1500,
          );
          if (outcome.error) {
            r.error = outcome.error;
            r.motivo_parada = outcome.timeout
              ? "max_tiempo_supervisor"
              : "error";
          } else {
            const { output: o, check: e, timeMs } = outcome.data;
            r.factible = e.feasible;
            r.objetivo = e.objective;
            r.tiempo_ms = timeMs;
            r.evaluaciones = o.evals;
            r.iteraciones = o.iters;
            r.motivo_parada = o.stopReason ?? "no_reportado";
            r.optimo_demostrado = o.optimal === true;
            r.conflictos = e.conflicts;
            r.colores = e.colorsUsed;
            r.peso = e.totalWeight;
            r.valor_inicial = o.initialValue ?? null;
            r.mejoras = o.improvements ?? null;
            r.solucion = JSON.stringify(o.solution);
            r.dentro_presupuesto =
              timeMs <= params.maxSeconds * 1000 && o.evals <= params.maxEvals;
            r.estado = "ok";
            if (Array.isArray(o.historyPoints))
              for (const x of o.historyPoints) {
                curves.push({
                  lote: runid,
                  problema: p,
                  instancia: inst.id,
                  algoritmo: a,
                  semilla: seed,
                  evaluaciones: x.evaluaciones,
                  objetivo: x.objetivo,
                  origen: "evaluaciones_exactas",
                });
              }
            else if (Array.isArray(o.history) && o.history.length) {
              for (let j = 0; j < o.history.length; j++)
                curves.push({
                  lote: runid,
                  problema: p,
                  instancia: inst.id,
                  algoritmo: a,
                  semilla: seed,
                  evaluaciones: null,
                  objetivo: o.history[j],
                  origen: "muestra_por_iteracion_no_comparable",
                });
            }
          }
          runs.push(r);
          console.log(
            `${p}/${inst.id}/${a}/${seed}: ${r.estado} obj=${r.objetivo ?? "-"} eval=${r.evaluaciones ?? "-"} ${r.tiempo_ms?.toFixed(1) ?? "-"} ms ${r.error ? r.error.slice(0, 120) : ""}`,
          );
        }
    }
  }
  await fs.mkdir(OUT, { recursive: true });
  const summary = summaries(runs);
  const sheets = {
    Corridas: runs,
    Resumen: summary,
    Instancias: manifest,
    Convergencia: curves,
  };
  for (const [name, data] of Object.entries(sheets))
    await fs.writeFile(
      path.join(OUT, name.toLowerCase() + ".csv"),
      csv(data, data.length ? Object.keys(data[0]) : ["sin_datos"]),
      "utf8",
    );
  await fs.writeFile(
    path.join(OUT, "experimento.json"),
    JSON.stringify(
      {
        lote: runid,
        smoke,
        semillas: smoke ? [11] : SEEDS,
        config,
        manifiesto: manifest,
        corridas: runs,
        resumen: summary,
        convergencia: curves,
      },
      null,
      2,
    ),
  );
  const xlsx = await excel(sheets);
  console.log(
    `TOTAL ${runs.length} | correctas ${runs.filter((x) => x.estado === "ok").length} | Excel ${xlsx ? "creado" : "opcional: npm install -D exceljs"} | ${OUT}`,
  );
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
