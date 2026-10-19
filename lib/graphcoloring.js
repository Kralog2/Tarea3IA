/** OptiLab — Coloreado de grafos. Objetivo: minimizar colores entre coloraciones válidas.
 * solver(instancia, params={}, rnd=Math.random) -> {solution,value,feasible,evals,iters,history,historyPoints,...}
 * evals cuenta asignaciones COMPLETAS revisadas por el evaluador de conflictos.
 * Backtracking contabiliza también nodos visitados por separado; las podas no son evaluaciones completas.
 * No se afirma optimalidad salvo si se demuestra por búsqueda exhaustiva o cota inferior.
 */
const clock = () => performance.now();
const int = (v, name, min = 1) => {
  if (!Number.isSafeInteger(v) || v < min)
    throw new RangeError(`${name} debe ser entero >= ${min}`);
  return v;
};
const prob = (v, name) => {
  if (!Number.isFinite(v) || v < 0 || v > 1)
    throw new RangeError(`${name} debe estar entre 0 y 1`);
  return v;
};
const rand = (r) => {
  const v = r();
  if (!Number.isFinite(v) || v < 0 || v >= 1)
    throw new Error("rnd debe estar en [0,1)");
  return v;
};
const elapsed = (t) => (clock() - t) / 1000;
function config(p) {
  const maxEvals = int(p.maxEvals ?? 10000, "maxEvals");
  const maxSeconds = p.maxSeconds ?? 10;
  if (!Number.isFinite(maxSeconds) || maxSeconds <= 0)
    throw new RangeError("maxSeconds inválido");
  return { maxEvals, maxSeconds };
}

export function validateInstance(instance) {
  const n = instance?.n,
    raw = instance?.aristas ?? instance?.edges;
  int(n, "n", 1);
  if (!Array.isArray(raw)) throw new TypeError("aristas debe ser un arreglo");
  const edges = [],
    seen = new Set(),
    adj = Array.from({ length: n }, () => []);
  for (const edge of raw) {
    if (!Array.isArray(edge) || edge.length !== 2)
      throw new TypeError("Arista inválida");
    const [a, b] = edge;
    if (
      !Number.isInteger(a) ||
      !Number.isInteger(b) ||
      a < 0 ||
      b < 0 ||
      a >= n ||
      b >= n ||
      a === b
    )
      throw new RangeError("Arista fuera de rango o lazo");
    const key = `${Math.min(a, b)}:${Math.max(a, b)}`;
    if (seen.has(key)) throw new Error("Arista duplicada");
    seen.add(key);
    edges.push([a, b]);
    adj[a].push(b);
    adj[b].push(a);
  }
  return { id: instance.id ?? null, n, edges, adj };
}
function metrics(g, bits) {
  let conflicts = 0;
  for (const [u, v] of g.edges) if (bits[u] === bits[v]) conflicts++;
  return conflicts;
}
export function evaluate(instance, colors) {
  const g = validateInstance(instance);
  if (
    !Array.isArray(colors) ||
    colors.length !== g.n ||
    !colors.every((c) => Number.isSafeInteger(c) && c >= 0)
  )
    return {
      feasible: false,
      value: null,
      conflicts: null,
      colorsUsed: null,
      reason: "Se requiere un color entero no negativo por nodo",
    };
  const conflicts = metrics(g, colors),
    colorsUsed = new Set(colors).size;
  return {
    feasible: conflicts === 0,
    value: conflicts === 0 ? colorsUsed : null,
    conflicts,
    colorsUsed,
    reason: conflicts ? "Hay aristas con extremos del mismo color" : null,
  };
}
function greedy(g) {
  // DSATUR determinista como cota superior válida, no como prueba de óptimo.
  const colors = Array(g.n).fill(-1),
    degree = g.adj.map((x) => x.length);
  for (let count = 0; count < g.n; count++) {
    let node = -1,
      sat = -1,
      deg = -1;
    for (let v = 0; v < g.n; v++)
      if (colors[v] < 0) {
        const s = new Set(g.adj[v].map((w) => colors[w]).filter((c) => c >= 0))
          .size;
        if (s > sat || (s === sat && degree[v] > deg)) {
          node = v;
          sat = s;
          deg = degree[v];
        }
      }
    const used = new Set(
      g.adj[node].map((w) => colors[w]).filter((c) => c >= 0),
    );
    let c = 0;
    while (used.has(c)) c++;
    colors[node] = c;
  }
  return colors;
}
function compact(colors) {
  const map = new Map();
  return colors.map((c) => {
    if (!map.has(c)) map.set(c, map.size);
    return map.get(c);
  });
}
function result(g, best, evals, iters, history, points, reason, extra = {}) {
  const solution = compact(best),
    value = new Set(solution).size;
  const conflicts = metrics(g, solution);
  if (conflicts !== 0)
    throw new Error("Error interno: se devolvió una coloración inválida");
  if (points.at(-1)?.evaluaciones !== evals)
    points.push({ evaluaciones: evals, objetivo: value });
  return {
    solution,
    value,
    feasible: true,
    conflicts,
    colorsUsed: value,
    evals,
    iters,
    history,
    historyPoints: points,
    stopReason: reason,
    optimal: false,
    initialValue: extra.initialValue ?? value,
    improvements: points.filter(
      (p, i) => i > 0 && p.objetivo < points[i - 1].objetivo,
    ).length,
    ...extra,
  };
}
function updateBest(candidate, g, state) {
  if (metrics(g, candidate) !== 0) return false;
  const k = new Set(candidate).size;
  if (k >= state.value) return false;
  state.best = compact(candidate);
  state.value = k;
  state.points.push({ evaluaciones: state.evals, objetivo: k });
  return true;
}

/** Backtracking DSATUR con forward checking y búsqueda exacta de k-colorabilidad. */
export function backtracking(instance, params = {}, _rnd) {
  const g = validateInstance(instance),
    { maxEvals, maxSeconds } = config(params);
  const nodeLimit = int(params.nodeLimit ?? 100000, "nodeLimit");
  const start = clock();
  const baseline = greedy(g),
    state = {
      best: compact(baseline),
      value: new Set(baseline).size,
      evals: 1,
      points: [{ evaluaciones: 1, objetivo: new Set(baseline).size }],
    };
  let nodes = 0,
    pruned = 0,
    iters = 0,
    reason = "busqueda_completa",
    proved = false;
  const history = [state.value];
  if (g.edges.length === 0) {
    return {
      ...result(g, state.best, state.evals, 0, history, state.points, reason, {
        nodes,
        pruned,
        initialValue: state.value,
      }),
      optimal: true,
    };
  }
  // Con una arista, al menos dos colores son necesarios.
  if (state.value === 2) {
    return {
      ...result(g, state.best, state.evals, 0, history, state.points, reason, {
        nodes,
        pruned,
        initialValue: state.value,
      }),
      optimal: true,
    };
  }
  const colors = Array(g.n).fill(-1),
    deg = g.adj.map((x) => x.length);
  function dfs(remaining, k) {
    if (elapsed(start) >= maxSeconds) {
      reason = "max_tiempo";
      return null;
    }
    if (nodes >= nodeLimit) {
      reason = "max_nodos";
      return null;
    }
    nodes++;
    iters++;
    if (remaining === 0) {
      if (state.evals >= maxEvals) {
        reason = "max_evaluaciones";
        return null;
      }
      state.evals++;
      return colors.slice();
    }
    let chosen = -1,
      saturation = -1,
      degree = -1,
      allowed = null;
    for (let v = 0; v < g.n; v++)
      if (colors[v] === -1) {
        const forbidden = new Set();
        for (const u of g.adj[v]) if (colors[u] >= 0) forbidden.add(colors[u]);
        const options = [];
        for (let c = 0; c < k; c++) if (!forbidden.has(c)) options.push(c);
        if (!options.length) {
          pruned++;
          return false;
        }
        if (
          forbidden.size > saturation ||
          (forbidden.size === saturation && deg[v] > degree)
        ) {
          chosen = v;
          saturation = forbidden.size;
          degree = deg[v];
          allowed = options;
        }
      }
    for (const c of allowed) {
      colors[chosen] = c;
      const out = dfs(remaining - 1, k);
      colors[chosen] = -1;
      if (out === null || out !== false) return out;
    }
    return false;
  }
  // Reducir de a un color. Probar que k no es factible demuestra optimalidad de k+1.
  while (state.value > 2) {
    const k = state.value - 1;
    const found = dfs(g.n, k);
    if (found === null) break;
    if (found === false) {
      proved = true;
      break;
    }
    updateBest(found, g, state);
    history.push(state.value);
  }
  if (state.value === 2) proved = true;
  return {
    ...result(
      g,
      state.best,
      state.evals,
      iters,
      history,
      state.points,
      reason,
      { nodes, pruned, initialValue: new Set(baseline).size },
    ),
    optimal: proved,
  };
}

/** Recocido simulado: recolorear vértices con k colores y minimizar conflictos; al lograr cero bajar k. */
export function annealing(instance, params = {}, rnd = Math.random) {
  const g = validateInstance(instance),
    { maxEvals, maxSeconds } = config(params),
    start = clock();
  const maxIterations = int(params.maxIterations ?? 10000, "maxIterations");
  const T0 = params.initialTemperature ?? 5,
    alpha = params.coolingRate ?? 0.999,
    Tmin = params.minTemperature ?? 0.001;
  if (
    !Number.isFinite(T0) ||
    T0 <= 0 ||
    !Number.isFinite(Tmin) ||
    Tmin <= 0 ||
    !Number.isFinite(alpha) ||
    alpha <= 0 ||
    alpha >= 1
  )
    throw new RangeError("Parámetros de temperatura inválidos");
  const base = greedy(g),
    state = {
      best: compact(base),
      value: new Set(base).size,
      evals: 1,
      points: [{ evaluaciones: 1, objetivo: new Set(base).size }],
    };
  let iters = 0,
    acceptedWorse = 0,
    temperature = T0,
    reason = "max_iteraciones";
  const history = [state.value];
  let k = state.value - 1;
  let current = state.best.map((c) =>
    c >= k ? Math.floor(rand(rnd) * Math.max(1, k)) : c,
  );
  if (k < 1)
    return result(
      g,
      state.best,
      state.evals,
      iters,
      history,
      state.points,
      "cota_inferior",
      {
        acceptedWorse,
        finalTemperature: temperature,
        initialValue: new Set(base).size,
      },
    );
  // La propuesta inicial con k colores es un candidato completo y cuenta como evaluación.
  let cost = null;
  if (state.evals < maxEvals && elapsed(start) < maxSeconds) {
    cost = metrics(g, current);
    state.evals++;
    if (cost === 0) {
      updateBest(current, g, state);
      k = state.value - 1;
    }
  }
  if (cost === 0) {
    history.push(state.value);
    if (k >= 1 && state.evals < maxEvals && elapsed(start) < maxSeconds) {
      current = state.best.map((c) => (c >= k ? Math.floor(rand(rnd) * k) : c));
      cost = metrics(g, current);
      state.evals++;
    }
  }
  if (cost === null || (cost === 0 && k < 1)) {
    return result(
      g,
      state.best,
      state.evals,
      iters,
      history,
      state.points,
      cost === null
        ? elapsed(start) >= maxSeconds
          ? "max_tiempo"
          : "max_evaluaciones"
        : "cota_inferior",
      {
        acceptedWorse,
        finalTemperature: temperature,
        initialValue: new Set(base).size,
      },
    );
  }
  while (iters < maxIterations) {
    if (elapsed(start) >= maxSeconds) {
      reason = "max_tiempo";
      break;
    }
    if (state.evals >= maxEvals) {
      reason = "max_evaluaciones";
      break;
    }
    if (temperature <= Tmin) {
      reason = "temperatura_minima";
      break;
    }
    const candidate = current.slice(),
      v = Math.floor(rand(rnd) * g.n);
    candidate[v] = Math.floor(rand(rnd) * k);
    const next = metrics(g, candidate);
    state.evals++;
    iters++;
    const delta = next - cost;
    if (delta <= 0 || rand(rnd) < Math.exp(-delta / temperature)) {
      if (delta > 0) acceptedWorse++;
      current = candidate;
      cost = next;
    }
    if (next === 0) {
      if (updateBest(candidate, g, state)) {
        k = state.value - 1;
        if (k < 1) {
          reason = "cota_inferior";
          history.push(state.value);
          break;
        }
        current = state.best.map((c) =>
          c >= k ? Math.floor(rand(rnd) * k) : c,
        );
        if (state.evals >= maxEvals) {
          reason = "max_evaluaciones";
          history.push(state.value);
          break;
        }
        if (elapsed(start) >= maxSeconds) {
          reason = "max_tiempo";
          history.push(state.value);
          break;
        }
        cost = metrics(g, current);
        state.evals++;
        temperature = T0;
      }
    }
    history.push(state.value);
    temperature *= alpha;
  }
  return result(
    g,
    state.best,
    state.evals,
    iters,
    history,
    state.points,
    reason,
    {
      acceptedWorse,
      finalTemperature: temperature,
      initialValue: new Set(base).size,
    },
  );
}

/** Genético: torneo, cruce uniforme, mutación por vértice, elitismo; fitness=conflictos con k fijo. */
export function genetic(instance, params = {}, rnd = Math.random) {
  const g = validateInstance(instance),
    { maxEvals, maxSeconds } = config(params),
    start = clock();
  const popSize = int(params.populationSize ?? 30, "populationSize", 2);
  const maxGenerations = int(params.maxGenerations ?? 150, "maxGenerations");
  const tournamentSize = int(params.tournamentSize ?? 3, "tournamentSize");
  const elitism = int(params.elitism ?? 2, "elitism", 0);
  const pc = prob(params.crossoverRate ?? 0.8, "crossoverRate");
  const pm = prob(params.mutationRate ?? 0.02, "mutationRate");
  if (elitism >= popSize || tournamentSize > popSize)
    throw new RangeError("Elitismo/torneo inválidos");
  const base = greedy(g),
    state = {
      best: compact(base),
      value: new Set(base).size,
      evals: 1,
      points: [{ evaluaciones: 1, objetivo: new Set(base).size }],
    };
  let k = state.value - 1,
    iters = 0,
    reason = "max_generaciones",
    partialGenerationEvaluations = 0;
  const history = [state.value];
  if (k < 1)
    return result(
      g,
      state.best,
      state.evals,
      iters,
      history,
      state.points,
      "cota_inferior",
    );
  let population = [];
  function randomBits() {
    return state.best
      .map((c) => (c >= k ? Math.floor(rand(rnd) * k) : c))
      .map((c) => (rand(rnd) < 0.15 ? Math.floor(rand(rnd) * k) : c));
  }
  function score(bits) {
    if (state.evals >= maxEvals || elapsed(start) >= maxSeconds) return null;
    const conflicts = metrics(g, bits);
    state.evals++;
    return { bits, conflicts };
  }
  function seedPopulation() {
    population = [];
    while (population.length < popSize) {
      const evaluated = score(randomBits());
      if (!evaluated) break;
      population.push(evaluated);
    }
  }
  function choose() {
    let win = population[Math.floor(rand(rnd) * population.length)];
    for (let i = 1; i < tournamentSize; i++) {
      const other = population[Math.floor(rand(rnd) * population.length)];
      if (other.conflicts < win.conflicts) win = other;
    }
    return win;
  }
  seedPopulation();
  // Un individuo inicial con cero conflictos también es una mejora válida.
  const initialZero = population.find((x) => x.conflicts === 0);
  if (initialZero && updateBest(initialZero.bits, g, state)) {
    k = state.value - 1;
    history.push(state.value);
    if (k >= 1 && state.evals < maxEvals && elapsed(start) < maxSeconds)
      seedPopulation();
  }
  if (population.length < popSize) {
    reason = elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
    return result(
      g,
      state.best,
      state.evals,
      iters,
      history,
      state.points,
      reason,
      {
        partialGenerationEvaluations: population.length,
        initialValue: new Set(base).size,
      },
    );
  }
  while (iters < maxGenerations) {
    if (elapsed(start) >= maxSeconds) {
      reason = "max_tiempo";
      break;
    }
    if (state.evals >= maxEvals) {
      reason = "max_evaluaciones";
      break;
    }
    const zero = population.find((x) => x.conflicts === 0);
    if (zero && updateBest(zero.bits, g, state)) {
      history.push(state.value);
      k = state.value - 1;
      if (k < 1) {
        reason = "cota_inferior";
        break;
      }
      seedPopulation();
      if (population.length < popSize) {
        reason =
          elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
        break;
      }
      continue;
    }
    const sorted = [...population].sort((a, b) => a.conflicts - b.conflicts);
    const next = sorted
      .slice(0, elitism)
      .map((x) => ({ bits: x.bits.slice(), conflicts: x.conflicts }));
    let generated = 0;
    while (next.length < popSize) {
      if (state.evals >= maxEvals || elapsed(start) >= maxSeconds) break;
      const p1 = choose(),
        p2 = choose(),
        child = Array.from({ length: g.n }, (_, i) =>
          rand(rnd) < pc
            ? rand(rnd) < 0.5
              ? p1.bits[i]
              : p2.bits[i]
            : p1.bits[i],
        );
      for (let i = 0; i < g.n; i++)
        if (rand(rnd) < pm) child[i] = Math.floor(rand(rnd) * k);
      const e = score(child);
      if (!e) break;
      next.push(e);
      generated++;
    }
    if (next.length < popSize) {
      partialGenerationEvaluations = generated;
      reason = elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
      break;
    }
    population = next;
    iters++;
    history.push(state.value);
    // Incluir la última generación incluso si se agota maxGenerations.
    const generationZero = population.find((x) => x.conflicts === 0);
    if (generationZero && updateBest(generationZero.bits, g, state)) {
      history[history.length - 1] = state.value;
      k = state.value - 1;
      if (k < 1) {
        reason = "cota_inferior";
        break;
      }
      seedPopulation();
      if (population.length < popSize) {
        reason =
          elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
        break;
      }
    }
  }
  return result(
    g,
    state.best,
    state.evals,
    iters,
    history,
    state.points,
    reason,
    { partialGenerationEvaluations, initialValue: new Set(base).size },
  );
}
