/**
 * Mochila 0/1 — OptiLab.
 * Objetivo: maximizar el valor de una selección binaria factible.
 * Contrato público conservado: validateInstance, evaluate, backtracking,
 * annealing, genetic. Los tres solvers aceptan (instancia, params, rnd).
 *
 * Convención experimental:
 * - evals: número de candidatos COMPLETOS evaluados (incluye la mochila
 *   vacía inicial cuando se utiliza). No incluye cálculos de cotas ni nodos.
 * - iters: nodos visitados en BT, movimientos en SA y generaciones COMPLETAS en GA.
 * - history: mejor valor factible (numérico) tras cada iteración registrada;
 *   BT registra las mejoras para respetar la interfaz ya existente.
 * - historyPoints: puntos {evaluaciones, objetivo} de mejora y punto final.
 * - optimal solo es verdadero si BT terminó la búsqueda sin interrupción.
 * El tiempo es cooperativo; no se puede interrumpir trabajo síncrono a mitad
 * de una operación. No se modifica la instancia recibida.
 */

const now = () => performance.now();
const tolerance = (capacity) => 1e-9 * Math.max(1, capacity);

export function validateInstance(instance) {
  if (!instance || typeof instance !== "object") {
    throw new TypeError("Se requiere una instancia de Mochila 0/1.");
  }
  const weights = instance.pesos ?? instance.weights;
  const values = instance.valores ?? instance.values;
  const capacity = instance.capacidad ?? instance.capacity;
  if (
    !Array.isArray(weights) ||
    !Array.isArray(values) ||
    !weights.length ||
    weights.length !== values.length
  ) {
    throw new TypeError(
      "pesos y valores deben ser arreglos no vacíos de igual longitud.",
    );
  }
  if (!Number.isFinite(capacity) || capacity < 0) {
    throw new RangeError("La capacidad debe ser un número finito no negativo.");
  }
  for (let i = 0; i < weights.length; i++) {
    if (!Number.isFinite(weights[i]) || weights[i] < 0) {
      throw new RangeError(`Peso inválido en el objeto ${i}.`);
    }
    if (!Number.isFinite(values[i]) || values[i] < 0) {
      throw new RangeError(`Valor inválido en el objeto ${i}.`);
    }
  }
  return {
    id: instance.id ?? null,
    weights: [...weights],
    values: [...values],
    capacity,
  };
}

function totals(bits, weights, values) {
  let weight = 0,
    value = 0,
    count = 0;
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 1) {
      weight += weights[i];
      value += values[i];
      count++;
    }
  }
  return { weight, value, count };
}

export function evaluate(instance, selection) {
  const { weights, values, capacity } = validateInstance(instance);
  if (
    !Array.isArray(selection) ||
    selection.length !== weights.length ||
    !selection.every((x) => x === 0 || x === 1)
  ) {
    return {
      feasible: false,
      value: null,
      totalWeight: null,
      totalValue: null,
      selectedCount: null,
      reason: "La solución debe ser un vector binario completo.",
    };
  }
  const t = totals(selection, weights, values);
  const feasible = t.weight <= capacity + tolerance(capacity);
  return {
    feasible,
    value: feasible ? t.value : null,
    totalWeight: t.weight,
    totalValue: t.value,
    selectedCount: t.count,
    reason: feasible ? null : "La selección supera la capacidad.",
  };
}

function positiveInt(x, name, min = 1) {
  if (!Number.isSafeInteger(x) || x < min) {
    throw new RangeError(`${name} debe ser entero seguro >= ${min}.`);
  }
  return x;
}
function probability(x, name) {
  if (!Number.isFinite(x) || x < 0 || x > 1) {
    throw new RangeError(`${name} debe estar entre 0 y 1.`);
  }
  return x;
}
function commonLimits(params) {
  const maxEvals = positiveInt(params.maxEvals ?? 10000, "maxEvals");
  const maxSeconds = params.maxSeconds ?? 10;
  if (!Number.isFinite(maxSeconds) || maxSeconds <= 0) {
    throw new RangeError("maxSeconds debe ser positivo.");
  }
  return { maxEvals, maxSeconds };
}
function draw(rnd) {
  const x = rnd();
  if (!Number.isFinite(x) || x < 0 || x >= 1) {
    throw new RangeError("rnd debe devolver un número en [0, 1).");
  }
  return x;
}
function makeHistory() {
  return { history: [0], historyPoints: [{ evaluaciones: 1, objetivo: 0 }] };
}
function recordPoint(points, evals, bestValue) {
  const last = points.at(-1);
  if (last?.evaluaciones === evals) {
    last.objetivo = bestValue;
  } else {
    points.push({ evaluaciones: evals, objetivo: bestValue });
  }
}
function result(
  best,
  evals,
  iters,
  history,
  historyPoints,
  stopReason,
  weights,
  values,
  capacity,
  extras = {},
) {
  const t = totals(best, weights, values);
  recordPoint(historyPoints, evals, t.value);
  return {
    solution: best.slice(),
    value: t.value,
    feasible: true,
    evals,
    iters,
    history,
    historyPoints,
    totalWeight: t.weight,
    totalValue: t.value,
    selectedCount: t.count,
    capacity,
    optimal: false,
    stopReason,
    ...extras,
  };
}

/** Backtracking exacto con orden valor/peso, filtrado y cota fraccionaria. */
export function backtracking(instance, params = {}, _rnd) {
  const { weights, values, capacity } = validateInstance(instance);
  const n = weights.length;
  const { maxEvals, maxSeconds } = commonLimits(params);
  const nodeLimit = positiveInt(
    params.nodeLimit ?? Number.MAX_SAFE_INTEGER,
    "nodeLimit",
  );
  const start = now();
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => {
    const ratio = (i) =>
      weights[i] === 0
        ? values[i] > 0
          ? Infinity
          : 0
        : values[i] / weights[i];
    const ra = ratio(a),
      rb = ratio(b);
    if (ra === rb) return a - b; // evita Infinity-Infinity => NaN
    return ra > rb ? -1 : 1;
  });
  const chosen = Array(n).fill(0);
  let best = chosen.slice(),
    bestValue = 0;
  let evals = 1,
    iters = 0,
    prunedCapacity = 0,
    prunedBound = 0;
  let interrupted = null;
  const { history, historyPoints } = makeHistory();

  function budgetReason() {
    if ((now() - start) / 1000 >= maxSeconds) return "max_tiempo";
    if (iters >= nodeLimit) return "max_nodos";
    return null;
  }
  function upperBound(pos, usedWeight, obtainedValue) {
    let remaining = capacity - usedWeight;
    let bound = obtainedValue;
    for (let j = pos; j < n; j++) {
      const i = order[j];
      if (values[i] <= 0) continue;
      if (weights[i] === 0) {
        bound += values[i];
        continue;
      }
      if (weights[i] <= remaining) {
        bound += values[i];
        remaining -= weights[i];
      } else {
        bound += values[i] * Math.max(0, remaining / weights[i]);
        break;
      }
    }
    return bound + 1e-10 * Math.max(1, Math.abs(bound));
  }
  function dfs(pos, weight, value) {
    if (interrupted) return;
    const reason = budgetReason();
    if (reason) {
      interrupted = reason;
      return;
    }
    iters++;
    // Una hoja completa cuenta como evaluación, solo si queda presupuesto.
    if (pos === n) {
      if (evals >= maxEvals) {
        interrupted = "max_evaluaciones";
        return;
      }
      evals++;
      if (value > bestValue) {
        bestValue = value;
        best = chosen.slice();
        history.push(bestValue);
        recordPoint(historyPoints, evals, bestValue);
      }
      return;
    }
    if (upperBound(pos, weight, value) <= bestValue) {
      prunedBound++;
      return;
    }
    const i = order[pos];
    if (weight + weights[i] <= capacity + tolerance(capacity)) {
      chosen[i] = 1;
      dfs(pos + 1, weight + weights[i], value + values[i]);
      chosen[i] = 0;
    } else {
      prunedCapacity++;
    }
    if (!interrupted) dfs(pos + 1, weight, value);
  }
  dfs(0, 0, 0);
  // La igualdad exacta al presupuesto NO implica interrupción si ya terminó el árbol.
  const out = result(
    best,
    evals,
    iters,
    history,
    historyPoints,
    interrupted ?? "busqueda_completa",
    weights,
    values,
    capacity,
    { optimal: interrupted === null, prunedCapacity, prunedBound },
  );
  return out;
}

/** Reparación determinista: elimina el objeto seleccionado de peor valor/peso. */
function repair(bits, weights, values, capacity) {
  const candidate = bits.slice();
  let { weight } = totals(candidate, weights, values);
  while (weight > capacity + tolerance(capacity)) {
    let worst = -1,
      worstRatio = Infinity;
    for (let i = 0; i < candidate.length; i++) {
      if (candidate[i] !== 1) continue;
      const ratio = weights[i] === 0 ? Infinity : values[i] / weights[i];
      if (worst === -1 || ratio < worstRatio) {
        worst = i;
        worstRatio = ratio;
      }
    }
    if (worst < 0) throw new Error("No se pudo reparar la mochila.");
    candidate[worst] = 0;
    weight -= weights[worst];
  }
  return candidate;
}

/** Recocido simulado: intercambio de un bit, reparación, Metropolis. */
export function annealing(instance, params = {}, rnd = Math.random) {
  const { weights, values, capacity } = validateInstance(instance);
  const { maxEvals, maxSeconds } = commonLimits(params);
  const maxIterations = positiveInt(
    params.maxIterations ?? 10000,
    "maxIterations",
  );
  const initialTemperature = params.initialTemperature ?? 50;
  const minTemperature = params.minTemperature ?? 0.001;
  const coolingRate = params.coolingRate ?? 0.995;
  if (
    !Number.isFinite(initialTemperature) ||
    initialTemperature <= 0 ||
    !Number.isFinite(minTemperature) ||
    minTemperature <= 0 ||
    !Number.isFinite(coolingRate) ||
    coolingRate <= 0 ||
    coolingRate >= 1
  ) {
    throw new RangeError("Temperaturas > 0 y coolingRate en (0, 1).");
  }
  const start = now(),
    n = weights.length;
  let current = Array(n).fill(0),
    currentValue = 0;
  let best = current.slice(),
    bestValue = 0;
  let evals = 1,
    iters = 0,
    acceptedWorse = 0,
    improvements = 0;
  let temperature = initialTemperature,
    stopReason = "max_iteraciones";
  const { history, historyPoints } = makeHistory();
  while (iters < maxIterations) {
    if ((now() - start) / 1000 >= maxSeconds) {
      stopReason = "max_tiempo";
      break;
    }
    if (evals >= maxEvals) {
      stopReason = "max_evaluaciones";
      break;
    }
    if (temperature <= minTemperature) {
      stopReason = "temperatura_minima";
      break;
    }
    const candidate = current.slice();
    const index = Math.floor(draw(rnd) * n);
    candidate[index] = 1 - candidate[index];
    const neighbor = repair(candidate, weights, values, capacity);
    const neighborValue = totals(neighbor, weights, values).value;
    evals++;
    iters++;
    const delta = neighborValue - currentValue;
    if (delta >= 0 || draw(rnd) < Math.exp(delta / temperature)) {
      if (delta < 0) acceptedWorse++;
      current = neighbor;
      currentValue = neighborValue;
    }
    if (neighborValue > bestValue) {
      best = neighbor.slice();
      bestValue = neighborValue;
      improvements++;
      recordPoint(historyPoints, evals, bestValue);
    }
    history.push(bestValue);
    temperature *= coolingRate;
  }
  return result(
    best,
    evals,
    iters,
    history,
    historyPoints,
    stopReason,
    weights,
    values,
    capacity,
    { acceptedWorse, improvements, finalTemperature: temperature },
  );
}

/** GA: torneo, cruza de un punto, mutación binaria y elitismo. */
export function genetic(instance, params = {}, rnd = Math.random) {
  const { weights, values, capacity } = validateInstance(instance);
  const { maxEvals, maxSeconds } = commonLimits(params);
  const populationSize = positiveInt(
    params.populationSize ?? 30,
    "populationSize",
    2,
  );
  const maxGenerations = positiveInt(
    params.maxGenerations ?? 300,
    "maxGenerations",
  );
  const tournamentSize = positiveInt(
    params.tournamentSize ?? 3,
    "tournamentSize",
  );
  const elitism = positiveInt(params.elitism ?? 1, "elitism", 0);
  const crossoverRate = probability(
    params.crossoverRate ?? 0.8,
    "crossoverRate",
  );
  const mutationRate = probability(
    params.mutationRate ?? 1 / weights.length,
    "mutationRate",
  );
  if (elitism >= populationSize || tournamentSize > populationSize) {
    throw new RangeError(
      "Parámetros de población, torneo o elitismo inválidos.",
    );
  }
  const start = now(),
    n = weights.length;
  let evals = 0,
    iters = 0,
    best = Array(n).fill(0),
    bestValue = 0;
  let stopReason = "max_generaciones";
  let population = [];
  const history = [],
    historyPoints = [];
  const timedOut = () => (now() - start) / 1000 >= maxSeconds;
  function evaluateCandidate(bits) {
    const solution = repair(bits, weights, values, capacity);
    const value = totals(solution, weights, values).value;
    evals++;
    if (evals === 1 || value > bestValue) {
      best = solution.slice();
      bestValue = value;
      recordPoint(historyPoints, evals, bestValue);
    }
    return { solution, value };
  }
  function parent() {
    let winner = population[Math.floor(draw(rnd) * population.length)];
    for (let k = 1; k < tournamentSize; k++) {
      const opponent = population[Math.floor(draw(rnd) * population.length)];
      if (opponent.value > winner.value) winner = opponent;
    }
    return winner;
  }
  function mutate(bits) {
    for (let i = 0; i < bits.length; i++) {
      if (draw(rnd) < mutationRate) bits[i] = 1 - bits[i];
    }
  }
  // La mochila vacía es el primer individuo, y garantiza un resultado factible.
  while (
    population.length < populationSize &&
    evals < maxEvals &&
    !timedOut()
  ) {
    const bits =
      population.length === 0
        ? Array(n).fill(0)
        : Array.from({ length: n }, () => Number(draw(rnd) < 0.5));
    population.push(evaluateCandidate(bits));
  }
  if (evals === 0) {
    // tiempo consumido antes de evaluar el primer individuo
    const zero = Array(n).fill(0);
    // No contabilizar como evaluada una solución que nunca se evaluó.
    return {
      ...result(
        zero,
        0,
        0,
        [0],
        [{ evaluaciones: 0, objetivo: 0 }],
        "max_tiempo",
        weights,
        values,
        capacity,
      ),
      populationEvaluated: 0,
    };
  }
  history.push(bestValue);
  if (population.length < populationSize) {
    stopReason = timedOut() ? "max_tiempo" : "max_evaluaciones";
    return result(
      best,
      evals,
      iters,
      history,
      historyPoints,
      stopReason,
      weights,
      values,
      capacity,
      {
        populationEvaluated: population.length,
        partialGenerationEvaluations: 0,
      },
    );
  }
  let partialGenerationEvaluations = 0;
  while (iters < maxGenerations) {
    if (timedOut()) {
      stopReason = "max_tiempo";
      break;
    }
    if (evals >= maxEvals) {
      stopReason = "max_evaluaciones";
      break;
    }
    const sorted = [...population].sort((a, b) => b.value - a.value);
    const next = sorted.slice(0, elitism).map((x) => ({
      solution: x.solution.slice(),
      value: x.value,
    }));
    const evalsBefore = evals;
    while (next.length < populationSize && evals < maxEvals && !timedOut()) {
      const p1 = parent(),
        p2 = parent();
      let child = p1.solution.slice();
      if (n > 1 && draw(rnd) < crossoverRate) {
        const cut = 1 + Math.floor(draw(rnd) * (n - 1));
        child = p1.solution.slice(0, cut).concat(p2.solution.slice(cut));
      }
      mutate(child);
      next.push(evaluateCandidate(child));
    }
    if (next.length < populationSize) {
      partialGenerationEvaluations = evals - evalsBefore;
      stopReason = timedOut() ? "max_tiempo" : "max_evaluaciones";
      break;
    }
    population = next;
    iters++;
    history.push(bestValue);
  }
  return result(
    best,
    evals,
    iters,
    history,
    historyPoints,
    stopReason,
    weights,
    values,
    capacity,
    { populationEvaluated: population.length, partialGenerationEvaluations },
  );
}
