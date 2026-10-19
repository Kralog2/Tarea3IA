import fs from "node:fs/promises";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";

const [root, problem, algo, instanceJSON, paramsJSON, seedText] =
  process.argv.slice(2);
const instance = JSON.parse(instanceJSON),
  params = JSON.parse(paramsJSON),
  seed = Number(seedText);
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
async function load(name) {
  if (name === "nqueens" || name === "eggholder") {
    // Node ESM no resuelve el import legado './rng' sin extensión; no cambiamos el repositorio.
    const rngSource = await fs.readFile(`${root}/lib/rng.js`, "utf8");
    const rngURL =
      "data:text/javascript;base64," +
      Buffer.from(rngSource).toString("base64");
    const source = (
      await fs.readFile(`${root}/lib/${name}.js`, "utf8")
    ).replace(/from ['"]\.\/rng(?:\.js)?['"]/g, `from '${rngURL}'`);
    return import(
      "data:text/javascript;base64," + Buffer.from(source).toString("base64")
    );
  }
  return import(pathToFileURL(`${root}/lib/${name}.js`).href);
}
try {
  const moduleName = {
    mochila: "knapsack",
    grafos: "graphcoloring",
    reinas: "nqueens",
    eggholder: "eggholder",
  }[problem];
  const M = await load(moduleName);
  const method = { bt: "backtracking", sa: "annealing", ga: "genetic" }[algo];
  const arg =
    problem === "reinas" ? instance.n : problem === "eggholder" ? 2 : instance;
  const start = performance.now();
  const output = M[method](arg, params, rng(seed));
  const timeMs = performance.now() - start;
  const solution = output.solution;
  let check = {
    feasible: false,
    objective: null,
    conflicts: null,
    colorsUsed: null,
    totalWeight: null,
  };
  if (problem === "mochila") {
    const e = M.evaluate(instance, solution);
    check = {
      ...check,
      feasible: e.feasible,
      objective: e.value,
      totalWeight: e.totalWeight,
    };
  } else if (problem === "grafos") {
    const e = M.evaluate(instance, solution);
    check = {
      ...check,
      feasible: e.feasible,
      objective: e.value,
      colorsUsed: e.colorsUsed,
      conflicts: e.conflicts,
    };
  } else if (problem === "reinas") {
    const valid =
      Array.isArray(solution) &&
      solution.length === instance.n &&
      solution.every((x) => Number.isInteger(x) && x >= 0 && x < instance.n) &&
      new Set(solution).size === instance.n;
    const c = valid ? M.conflicts(solution) : null;
    check = {
      ...check,
      feasible: valid && c === 0,
      objective: c,
      conflicts: c,
    };
  } else {
    const valid =
      Array.isArray(solution) &&
      solution.length === 2 &&
      solution.every((x) => Number.isFinite(x) && x >= -512 && x <= 512);
    check = {
      ...check,
      feasible: valid,
      objective: valid ? M.f(solution) : null,
    };
  }
  if (output.feasible !== check.feasible)
    throw Error(
      `Factibilidad inconsistente: algoritmo=${output.feasible} evaluador=${check.feasible}`,
    );
  if (
    check.objective !== null &&
    (!Number.isFinite(output.value) ||
      Math.abs(check.objective - output.value) >
        1e-7 * Math.max(1, Math.abs(check.objective)))
  )
    throw Error("Objetivo inconsistente con evaluación independiente");
  if (
    !Number.isSafeInteger(output.evals) ||
    output.evals < 0 ||
    !Number.isSafeInteger(output.iters) ||
    output.iters < 0
  )
    throw Error("Contadores inválidos");
  const limits = {
    budgetEvaluations: params.maxEvals ?? 10000,
    budgetTime: params.maxSeconds ?? 10,
  };
  // La implementación legada de N-Reinas y Eggholder no garantiza presupuestos cooperativos.
  const out = { check, output, timeMs, limits };
  process.stdout.write(JSON.stringify(out));
} catch (e) {
  process.stderr.write(`${e.stack || e}`);
  process.exitCode = 1;
}
