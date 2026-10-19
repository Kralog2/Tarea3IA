/** OptiLab: 6 grafos x 3 algoritmos x 5 semillas = 90 corridas.
 * Desde la raíz: node scripts/experimentar_grafos.mjs
 * Prueba rápida: node scripts/experimentar_grafos.mjs --smoke
 * Opcional: npm install -D exceljs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";
import crypto from "node:crypto";
import * as G from "../lib/graphcoloring.js";
import { GRAPH_INSTANCES } from "../data/graph-instances.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "resultados", "grafos");
const SEEDS = [11, 22, 33, 44, 55];
const BUDGET = { maxEvals: 10000, maxSeconds: 10 };
// Parametrización explícita: documentar y conservar fija en las comparaciones.
const CONFIG = {
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
};
const METHODS = { bt: G.backtracking, sa: G.annealing, ga: G.genetic };
const smoke = process.argv.includes("--smoke");
const instances = smoke ? [GRAPH_INSTANCES[0]] : GRAPH_INSTANCES;
const seeds = smoke ? [11] : SEEDS;
function rng(seed) {
  let s = seed >>> 0;
  return () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
}
function csvValue(x) {
  if (x === null || x === undefined) return "";
  const s = typeof x === "object" ? JSON.stringify(x) : String(x);
  return /[",\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
}
function csv(rows, fields) {
  return (
    "\uFEFF" +
    [
      fields.join(","),
      ...rows.map((row) => fields.map((f) => csvValue(row[f])).join(",")),
    ].join("\r\n") +
    "\r\n"
  );
}
function mean(v) {
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
}
function median(v) {
  if (!v.length) return null;
  v = [...v].sort((a, b) => a - b);
  return (v[Math.floor((v.length - 1) / 2)] + v[Math.floor(v.length / 2)]) / 2;
}
function summary(rows) {
  const groups = new Map();
  for (const r of rows) {
    const k = `${r.instancia}/${r.algoritmo}`;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(r);
  }
  return [...groups.values()].map((a) => {
    const ok = a.filter(
      (r) => r.estado === "ok" && r.factible && !r.excedio_presupuesto,
    );
    const obj = ok.map((r) => r.objetivo);
    const m = mean(obj);
    return {
      lote: a[0].lote,
      problema: "grafos",
      instancia: a[0].instancia,
      nodos: a[0].nodos,
      algoritmo: a[0].algoritmo,
      corridas: a.length,
      corridas_validas: ok.length,
      errores: a.filter((r) => r.estado === "error").length,
      fuera_presupuesto: a.filter((r) => r.excedio_presupuesto).length,
      tasa_factible: ok.length / a.length,
      colores_mediana: median(obj),
      colores_media: m,
      colores_desviacion:
        obj.length > 1
          ? Math.sqrt(
              obj.reduce((s, x) => s + (x - m) ** 2, 0) / (obj.length - 1),
            )
          : null,
      tiempo_mediana_ms: median(
        a.map((r) => r.tiempo_ms).filter(Number.isFinite),
      ),
      evaluaciones_mediana: median(ok.map((r) => r.evaluaciones)),
      mejoras_mediana: median(ok.map((r) => r.mejoras)),
    };
  });
}
async function excel(sheets) {
  let X;
  try {
    ({ default: X } = await import("exceljs"));
  } catch {
    console.log("Excel opcional: npm install -D exceljs");
    return;
  }
  const book = new X.Workbook();
  book.creator = "OptiLab";
  for (const [name, data] of Object.entries(sheets)) {
    const sh = book.addWorksheet(name, {
      views: [{ state: "frozen", ySplit: 1 }],
    });
    if (!data.length) continue;
    const fields = Object.keys(data[0]);
    sh.columns = fields.map((k) => ({
      header: k,
      key: k,
      width: Math.min(40, Math.max(14, k.length + 3)),
    }));
    for (const item of data)
      sh.addRow(
        Object.fromEntries(
          Object.entries(item).map(([k, v]) => [
            k,
            typeof v === "object" && v !== null ? JSON.stringify(v) : v,
          ]),
        ),
      );
    sh.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    sh.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF254F6D" },
    };
    sh.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: data.length + 1, column: fields.length },
    };
  }
  await book.xlsx.writeFile(path.join(OUT, "experimentos_grafos.xlsx"));
}
function checkHistory(points, evals, value) {
  if (!Array.isArray(points) || !points.length)
    throw Error("Historial ausente");
  let last = 0,
    previous = Infinity;
  for (const p of points) {
    if (
      !Number.isSafeInteger(p.evaluaciones) ||
      p.evaluaciones < 0 ||
      p.evaluaciones > evals ||
      p.evaluaciones < last ||
      !Number.isFinite(p.objetivo) ||
      p.objetivo > previous
    )
      throw Error("Historial inconsistente");
    last = p.evaluaciones;
    previous = p.objetivo;
  }
  if (last !== evals || previous !== value)
    throw Error("Último punto de convergencia inconsistente");
}
async function main() {
  if (instances.length !== (smoke ? 1 : 6))
    throw Error("Se esperaban seis instancias");
  const lote = new Date().toISOString().replace(/[:.]/g, "-");
  const runs = [],
    curves = [];
  const manifest = [];
  for (const inst of instances) {
    G.validateInstance(inst);
    const encoded = JSON.stringify({
      id: inst.id,
      n: inst.n,
      aristas: inst.aristas,
    });
    const hash = crypto.createHash("sha256").update(encoded).digest("hex");
    manifest.push({
      id: inst.id,
      n: inst.n,
      aristas: inst.aristas.length,
      seed_instancia: inst.seed_instancia,
      grado_esperado: inst.grado_esperado,
      sha256: hash,
    });
    for (const [algoritmo, solver] of Object.entries(METHODS))
      for (const seed of seeds) {
        const params = structuredClone(CONFIG[algoritmo]);
        if (smoke) {
          params.maxSeconds = 2;
          params.nodeLimit = 2000;
          params.maxEvals = 150;
          params.maxGenerations = 2;
          params.maxIterations = 150;
        }
        const row = {
          lote,
          problema: "grafos",
          instancia: inst.id,
          nodos: inst.n,
          aristas: inst.aristas.length,
          semilla_instancia: inst.seed_instancia,
          algoritmo,
          semilla: seed,
          parametros: JSON.stringify(params),
          presupuesto_evaluaciones: params.maxEvals,
          presupuesto_segundos: params.maxSeconds,
          estado: "error",
          error: "",
          factible: false,
          objetivo: null,
          colores_iniciales: null,
          colores_utilizados: null,
          conflictos: null,
          mejoras: null,
          solucion: "",
          evaluaciones: null,
          iteraciones: null,
          nodos_explorados: null,
          podas: null,
          tiempo_ms: null,
          motivo_parada: "",
          optimo_demostrado: false,
          excedio_presupuesto: false,
        };
        try {
          const start = performance.now();
          const result = solver(inst, params, rng(seed));
          row.tiempo_ms = performance.now() - start;
          const ev = G.evaluate(inst, result.solution);
          if (
            !Number.isSafeInteger(result.evals) ||
            result.evals < 0 ||
            !Number.isSafeInteger(result.iters) ||
            result.iters < 0
          )
            throw Error("Contadores inválidos");
          if (
            !ev.feasible ||
            !result.feasible ||
            ev.value !== result.value ||
            ev.conflicts !== result.conflicts ||
            ev.colorsUsed !== result.colorsUsed
          )
            throw Error("Evaluación independiente no coincide");
          checkHistory(result.historyPoints, result.evals, ev.value);
          Object.assign(row, {
            factible: true,
            objetivo: ev.value,
            colores_iniciales: result.initialValue ?? null,
            colores_utilizados: ev.colorsUsed,
            conflictos: ev.conflicts,
            mejoras: result.improvements ?? null,
            solucion: JSON.stringify(result.solution),
            evaluaciones: result.evals,
            iteraciones: result.iters,
            nodos_explorados: result.nodes ?? null,
            podas: result.pruned ?? null,
            motivo_parada: result.stopReason ?? "",
            optimo_demostrado: result.optimal === true,
            excedio_presupuesto:
              result.evals > params.maxEvals ||
              row.tiempo_ms > params.maxSeconds * 1000,
            estado: "ok",
          });
          for (const point of result.historyPoints)
            curves.push({
              lote,
              problema: "grafos",
              instancia: inst.id,
              algoritmo,
              semilla: seed,
              evaluaciones: point.evaluaciones,
              objetivo: point.objetivo,
            });
        } catch (e) {
          row.error = `${e.name}: ${e.message}`;
        }
        runs.push(row);
        console.log(
          `${inst.id} ${algoritmo} seed=${seed} ${row.estado} colores=${row.objetivo ?? "-"} evals=${row.evaluaciones ?? "-"} ${row.tiempo_ms?.toFixed(1) ?? "-"}ms ${row.motivo_parada}`,
        );
      }
  }
  const sums = summary(runs);
  await fs.mkdir(OUT, { recursive: true });
  const sheets = {
    Corridas: runs,
    Resumen: sums,
    Instancias: manifest,
    Convergencia: curves,
  };
  await Promise.all([
    ...Object.entries(sheets).map(([name, rows]) =>
      fs.writeFile(
        path.join(OUT, name.toLowerCase() + ".csv"),
        csv(rows, Object.keys(rows[0])),
      ),
    ),
    fs.writeFile(
      path.join(OUT, "experimento.json"),
      JSON.stringify(
        {
          lote,
          semillas: seeds,
          smoke,
          config: CONFIG,
          instancias: manifest,
          corridas: runs,
          resumen: sums,
          convergencia: curves,
        },
        null,
        2,
      ),
    ),
  ]);
  await excel(sheets);
  console.log(
    `\n${runs.length} corridas, ${runs.filter((x) => x.estado === "ok").length} correctas, ${runs.filter((x) => x.estado === "error").length} errores. Resultados en: ${OUT}`,
  );
}
main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
