/** Experimentos reproducibles de Mochila 0/1 para OptiLab.
 * Ejecutar desde la raíz: node scripts/experimentar_mochila.mjs
 * Requiere Node 22+, lib/knapsack.js, data/knapsack_5_items.csv.
 * CSV y JSON sin dependencias. XLSX opcional: npm install -D exceljs.
 */
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";
import { backtracking, annealing, genetic, evaluate } from "../lib/knapsack.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CSV = path.join(ROOT, "data", "knapsack_5_items.csv");
const OUTPUT = path.join(ROOT, "resultados", "mochila");
const SHA256 =
  "55b98b9d9d2fc743100f8e48f168e0504b39bee18aad37712d3ccb9d516f044c";
const SEEDS = [11, 22, 33, 44, 55];
const ROWS = Array.from({ length: 10 }, (_, i) => i);
const BUDGET = { maxEvals: 10_000, maxSeconds: 10 };
const CONFIG = {
  bt: { ...BUDGET, nodeLimit: 100_000 },
  sa: {
    ...BUDGET,
    initialTemperature: 50,
    coolingRate: 0.995,
    minTemperature: 0.001,
    maxIterations: 10_000,
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
};
const METHODS = { bt: backtracking, sa: annealing, ga: genetic };

function rng(seed) {
  let state = seed >>> 0;
  return () =>
    (state = (Math.imul(state, 1664525) + 1013904223) >>> 0) / 4294967296;
}
function parseVector(s) {
  if (!/^\s*\[.*\]\s*$/.test(s)) throw Error(`Vector incorrecto: ${s}`);
  const parts = s.trim().slice(1, -1).replaceAll(",", " ").trim().split(/\s+/);
  const nums = parts.map(Number);
  if (!nums.length || nums.some((x) => !Number.isFinite(x)))
    throw Error("Vector no numérico");
  return nums;
}
async function loadInstances() {
  const bytes = await fs.readFile(CSV);
  const sha = crypto.createHash("sha256").update(bytes).digest("hex");
  if (sha !== SHA256)
    throw Error(`SHA-256 inesperado: ${sha}\nEsperado: ${SHA256}`);
  const lines = bytes
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trim()
    .split(/\r?\n/);
  if (lines[0].trim() !== "Weights,Prices,Capacity,Best picks,Best price") {
    throw Error("Encabezado inesperado en el CSV");
  }
  return ROWS.map((i) => {
    // Las tres columnas que importan no contienen comas (vectores delimitados por espacios).
    const fields = lines[i + 1]?.split(",");
    if (!fields || fields.length < 3) throw Error(`Falta fila ${i}`);
    const pesos = parseVector(fields[0]);
    const valores = parseVector(fields[1]);
    const capacidad = Number(fields[2]);
    if (
      pesos.length !== 5 ||
      valores.length !== 5 ||
      !Number.isFinite(capacidad) ||
      capacidad < 0 ||
      pesos.some((x) => x < 0)
    )
      throw Error(`Fila inválida ${i}`);
    return {
      id: `kaggle_opcion1_fila_${i}`,
      fila: i,
      pesos,
      valores,
      capacidad,
    };
  });
}
function exactOptimum(instance) {
  const n = instance.pesos.length;
  let best = { value: -Infinity, solution: null, totalWeight: null };
  for (let mask = 0; mask < 2 ** n; mask++) {
    const bits = Array.from({ length: n }, (_, i) => (mask >> i) & 1);
    const ev = evaluate(instance, bits);
    if (ev.feasible && ev.value > best.value)
      best = { value: ev.value, solution: bits, totalWeight: ev.totalWeight };
  }
  return best;
}
function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const string =
    typeof value === "object" ? JSON.stringify(value) : String(value);
  return /[",\r\n]/.test(string)
    ? '"' + string.replaceAll('"', '""') + '"'
    : string;
}
function toCsv(rows, columns) {
  return (
    "\uFEFF" +
    [
      columns.join(","),
      ...rows.map((r) => columns.map((k) => csvEscape(r[k])).join(",")),
    ].join("\r\n") +
    "\r\n"
  );
}
function summarize(rows) {
  const groups = new Map();
  for (const r of rows) {
    const key = `${r.instancia}::${r.algoritmo}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  return [...groups.values()].map((g) => {
    const ok = g.filter(
      (r) => r.estado === "ok" && r.factible && !r.excedio_presupuesto,
    );
    const mean = (a) =>
      a.length ? a.reduce((s, v) => s + v, 0) / a.length : null;
    const median = (a) => {
      if (!a.length) return null;
      const v = [...a].sort((x, y) => x - y);
      return (
        (v[Math.floor((v.length - 1) / 2)] + v[Math.floor(v.length / 2)]) / 2
      );
    };
    const objectives = ok.map((r) => r.objetivo);
    const avg = mean(objectives);
    const std =
      objectives.length > 1
        ? Math.sqrt(
            objectives.reduce((s, v) => s + (v - avg) ** 2, 0) /
              (objectives.length - 1),
          )
        : null;
    return {
      instancia: g[0].instancia,
      fila: g[0].fila,
      algoritmo: g[0].algoritmo,
      corridas: g.length,
      corridas_validas: ok.length,
      tasa_factible: ok.length / g.length,
      tasa_optimo: ok.filter((r) => r.alcanzo_optimo).length / g.length,
      objetivo_mediana: median(objectives),
      objetivo_media: avg,
      objetivo_desviacion: std,
      tiempo_mediana_ms: median(
        g.filter((r) => r.tiempo_ms !== null).map((r) => r.tiempo_ms),
      ),
      evaluaciones_mediana: median(ok.map((r) => r.evaluaciones)),
      errores: g.filter((r) => r.estado === "error").length,
      fuera_presupuesto: g.filter((r) => r.excedio_presupuesto).length,
    };
  });
}
async function exportExcel(corridas, resumen, instancias, historiales) {
  let ExcelJS;
  try {
    ({ default: ExcelJS } = await import("exceljs"));
  } catch {
    console.log(
      "Excel no generado: ejecuta npm install -D exceljs para habilitar XLSX. CSV y JSON completos disponibles.",
    );
    return;
  }
  const wb = new ExcelJS.Workbook();
  wb.creator = "OptiLab";
  const sheets = [
    ["Corridas", corridas],
    ["Resumen", resumen],
    [
      "Instancias",
      instancias.map((x) => ({
        ...x,
        pesos: JSON.stringify(x.pesos),
        valores: JSON.stringify(x.valores),
      })),
    ],
    ["Convergencia", historiales],
  ];
  for (const [name, data] of sheets) {
    const ws = wb.addWorksheet(name, {
      views: [{ state: "frozen", ySplit: 1 }],
    });
    if (!data.length) continue;
    const keys = Object.keys(data[0]);
    ws.columns = keys.map((k) => ({
      header: k,
      key: k,
      width: Math.min(38, Math.max(14, k.length + 3)),
    }));
    for (const row of data)
      ws.addRow(
        Object.fromEntries(
          Object.entries(row).map(([k, v]) => [
            k,
            Array.isArray(v) || (v && typeof v === "object")
              ? JSON.stringify(v)
              : v,
          ]),
        ),
      );
    ws.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    ws.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF254F6D" },
    };
    ws.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: data.length + 1, column: keys.length },
    };
  }
  await wb.xlsx.writeFile(path.join(OUTPUT, "experimentos_mochila.xlsx"));
}

async function main() {
  const instances = await loadInstances();
  const corridas = [],
    histories = [];
  const batch = new Date().toISOString().replace(/[:.]/g, "-");
  const sols = new Map(instances.map((x) => [x.id, exactOptimum(x)]));
  for (const instance of instances) {
    for (const [algoritmo, solver] of Object.entries(METHODS)) {
      for (const seed of SEEDS) {
        const params = structuredClone(CONFIG[algoritmo]);
        const row = {
          lote: batch,
          problema: "mochila",
          instancia: instance.id,
          fila: instance.fila,
          algoritmo,
          semilla: seed,
          parametros: JSON.stringify(params),
          presupuesto_evaluaciones: params.maxEvals,
          presupuesto_segundos: params.maxSeconds,
          estado: "error",
          error: "",
          factible: false,
          objetivo: null,
          peso_total: null,
          capacidad: instance.capacidad,
          seleccion: "",
          optimo_exacto: sols.get(instance.id).value,
          alcanzo_optimo: false,
          optimo_demostrado: false,
          evaluaciones: null,
          iteraciones: null,
          tiempo_ms: null,
          motivo_parada: "",
          excedio_presupuesto: false,
        };
        try {
          const start = performance.now();
          const result = solver(instance, params, rng(seed));
          row.tiempo_ms = performance.now() - start;
          const ev = evaluate(instance, result.solution);
          if (
            !Number.isSafeInteger(result.evals) ||
            result.evals < 0 ||
            !Number.isSafeInteger(result.iters) ||
            result.iters < 0
          )
            throw Error("Contadores inválidos");
          if (!Array.isArray(result.historyPoints))
            throw Error("Falta historyPoints");
          if (ev.feasible !== result.feasible || ev.value !== result.value)
            throw Error(
              "Resultado inconsistente con el evaluador independiente",
            );
          row.evaluaciones = result.evals;
          row.iteraciones = result.iters;
          row.factible = ev.feasible;
          row.objetivo = ev.value;
          row.peso_total = ev.totalWeight;
          row.seleccion = JSON.stringify(result.solution);
          row.motivo_parada = String(result.stopReason ?? "");
          row.optimo_demostrado = result.optimal === true;
          row.alcanzo_optimo =
            ev.feasible && ev.value === sols.get(instance.id).value;
          row.excedio_presupuesto =
            result.evals > params.maxEvals ||
            row.tiempo_ms > params.maxSeconds * 1000;
          row.estado = "ok";
          for (const point of result.historyPoints) {
            histories.push({
              lote: batch,
              instancia: instance.id,
              algoritmo,
              semilla: seed,
              evaluaciones: point.evaluaciones,
              objetivo: point.objetivo,
            });
          }
        } catch (error) {
          row.error = `${error.name}: ${error.message}`;
        }
        corridas.push(row);
        console.log(
          `${instance.id} ${algoritmo} seed=${seed}: ${row.estado} objetivo=${row.objetivo ?? "-"} eval=${row.evaluaciones ?? "-"} tiempo=${row.tiempo_ms?.toFixed(2) ?? "-"} ms`,
        );
      }
    }
  }
  const resumen = summarize(corridas);
  await fs.mkdir(OUTPUT, { recursive: true });
  await Promise.all([
    fs.writeFile(
      path.join(OUTPUT, "corridas.csv"),
      toCsv(corridas, Object.keys(corridas[0])),
    ),
    fs.writeFile(
      path.join(OUTPUT, "resumen.csv"),
      toCsv(resumen, Object.keys(resumen[0])),
    ),
    fs.writeFile(
      path.join(OUTPUT, "convergencia.csv"),
      toCsv(histories, Object.keys(histories[0])),
    ),
    fs.writeFile(
      path.join(OUTPUT, "experimento.json"),
      JSON.stringify(
        {
          lote: batch,
          semillas: SEEDS,
          filas: ROWS,
          dataset_sha256: SHA256,
          config: CONFIG,
          instancias: instances,
          optimos: Object.fromEntries(sols),
          corridas,
          resumen,
          historiales: histories,
        },
        null,
        2,
      ),
    ),
  ]);
  await exportExcel(corridas, resumen, instances, histories);
  console.log(
    `\n${corridas.length} corridas; ${corridas.filter((x) => x.estado === "ok").length} exitosas; ${corridas.filter((x) => x.estado === "error").length} errores. Archivos: ${OUTPUT}`,
  );
}
main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
