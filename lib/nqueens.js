import { shuffled } from "./rng";

// Representación: permutación p[fila] = columna (una reina por fila y por columna).
// Solo pueden existir conflictos diagonales. Conflictos = pares de reinas que se atacan.
export function conflicts(p) {
  const n = p.length,
    d1 = new Int16Array(2 * n),
    d2 = new Int16Array(2 * n);
  let c = 0;
  for (let i = 0; i < n; i++) c += d1[i + p[i]]++ + d2[i - p[i] + n]++;
  return c;
}

const sample = (h, max) =>
  h.length < max ? h : h.filter((_, i) => i % Math.ceil(h.length / max) === 0);

// ---- Backtracking + forward checking + MRV + orden de valores desde el centro ----
export function backtracking(n, params) {
  const limit = params.nodeLimit;
  const cols = new Uint8Array(n),
    d1 = new Uint8Array(2 * n),
    d2 = new Uint8Array(2 * n);
  const board = Array(n).fill(-1);
  let nodes = 0,
    backtracks = 0;
  const free = (r, c) => !cols[c] && !d1[r + c] && !d2[r - c + n];
  const mark = (r, c, v) => {
    cols[c] = d1[r + c] = d2[r - c + n] = v;
  };
  function solve(placed) {
    if (placed === n) return true;
    if (nodes++ > limit) return false;
    // MRV: fila no asignada con menos columnas disponibles (poda si alguna llega a 0)
    let best = -1,
      bestDom = null;
    for (let r = 0; r < n; r++) {
      if (board[r] !== -1) continue;
      const dom = [];
      for (let c = 0; c < n; c++) if (free(r, c)) dom.push(c);
      if (dom.length === 0) {
        backtracks++;
        return false;
      }
      if (!bestDom || dom.length < bestDom.length) {
        best = r;
        bestDom = dom;
      }
    }
    const mid = (n - 1) / 2;
    bestDom.sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid));
    for (const c of bestDom) {
      board[best] = c;
      mark(best, c, 1);
      if (solve(placed + 1)) return true;
      mark(best, c, 0);
      board[best] = -1;
    }
    backtracks++;
    return false;
  }
  const ok = solve(0);
  const sol = ok ? board.slice() : null;
  return {
    solution: sol,
    value: ok ? conflicts(sol) : null,
    feasible: ok,
    evals: nodes,
    iters: backtracks,
    history: [],
  };
}

// ---- Recocido simulado: vecindario = intercambiar dos filas ----
export function annealing(n, params, rnd) {
  const { T0, alpha, Tmin, maxIter } = params;
  let p = shuffled(n, rnd),
    cur = conflicts(p),
    T = T0,
    evals = 1,
    it = 0;
  let best = p.slice(),
    bestC = cur;
  const h = [];
  for (; it < maxIter && bestC > 0; it++) {
    const i = (rnd() * n) | 0,
      j = (rnd() * n) | 0;
    if (i === j) continue;
    [p[i], p[j]] = [p[j], p[i]];
    const nc = conflicts(p);
    evals++;
    const d = nc - cur;
    if (d <= 0 || rnd() < Math.exp(-d / T)) {
      cur = nc;
      if (cur < bestC) {
        bestC = cur;
        best = p.slice();
      }
    } else [p[i], p[j]] = [p[j], p[i]];
    T = Math.max(Tmin, T * alpha);
    if (it % 50 === 0) h.push(bestC);
  }
  h.push(bestC);
  return {
    solution: best,
    value: bestC,
    feasible: bestC === 0,
    evals,
    iters: it,
    history: sample(h, 200),
  };
}

// ---- Algoritmo genético: permutaciones + OX + mutación por intercambio ----
function ox(a, b, rnd) {
  const n = a.length;
  let i = (rnd() * n) | 0,
    j = (rnd() * n) | 0;
  if (i > j) [i, j] = [j, i];
  const ch = Array(n).fill(-1),
    used = new Uint8Array(n);
  for (let k = i; k <= j; k++) {
    ch[k] = a[k];
    used[a[k]] = 1;
  }
  let pos = (j + 1) % n;
  for (let k = 0; k < n; k++) {
    const v = b[(j + 1 + k) % n];
    if (!used[v]) {
      ch[pos] = v;
      pos = (pos + 1) % n;
    }
  }
  return ch;
}
export function genetic(n, params, rnd) {
  const { pop: P, gens, pc, pm, elit, tk } = params;
  let pop = Array.from({ length: P }, () => shuffled(n, rnd));
  let fit = pop.map(conflicts),
    evals = P,
    g = 0;
  const h = [];
  const tour = () => {
    let b = (rnd() * P) | 0;
    for (let k = 1; k < tk; k++) {
      const c = (rnd() * P) | 0;
      if (fit[c] < fit[b]) b = c;
    }
    return b;
  };
  for (; g < gens; g++) {
    const order = fit.map((f, i) => i).sort((a, b) => fit[a] - fit[b]);
    h.push(fit[order[0]]);
    if (fit[order[0]] === 0) break;
    const next = order.slice(0, elit).map((i) => pop[i]);
    while (next.length < P) {
      const a = pop[tour()],
        b = pop[tour()];
      let c = rnd() < pc ? ox(a, b, rnd) : a.slice();
      if (rnd() < pm) {
        const i = (rnd() * n) | 0,
          j = (rnd() * n) | 0;
        [c[i], c[j]] = [c[j], c[i]];
      }
      next.push(c);
    }
    pop = next;
    fit = pop.map(conflicts);
    evals += P;
  }
  const bi = fit.indexOf(Math.min(...fit));
  return {
    solution: pop[bi],
    value: fit[bi],
    feasible: fit[bi] === 0,
    evals,
    iters: g,
    history: sample(h, 200),
  };
}
