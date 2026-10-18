import { gauss } from './rng';
export const LO = -512, HI = 512, GLOBAL_MIN = -959.6407;
// f(x,y) = -(y+47) sin(sqrt|x/2+y+47|) - x sin(sqrt|x-(y+47)|)
export const f = ([x, y]) => -(y + 47) * Math.sin(Math.sqrt(Math.abs(x / 2 + y + 47))) - x * Math.sin(Math.sqrt(Math.abs(x - (y + 47))));
const clip = (v) => Math.min(HI, Math.max(LO, v));
const sample = (h, max) => (h.length < max ? h : h.filter((_, i) => i % Math.ceil(h.length / max) === 0));
const rpt = (r) => [LO + r() * (HI - LO), LO + r() * (HI - LO)];

export function annealing(_, params, rnd) {
  const { T0, alpha, Tmin, maxIter, step } = params;
  let x = rpt(rnd), cur = f(x), T = T0, best = x, bestV = cur, evals = 1;
  const h = [];
  for (let it = 0; it < maxIter; it++) {
    const s = Math.max(1, step * (T / T0));
    const y = [clip(x[0] + gauss(rnd) * s), clip(x[1] + gauss(rnd) * s)];
    const v = f(y); evals++;
    const d = v - cur;
    if (d <= 0 || rnd() < Math.exp(-d / T)) { x = y; cur = v; if (v < bestV) { bestV = v; best = y; } }
    T = Math.max(Tmin, T * alpha);
    if (it % 20 === 0) h.push(bestV);
  }
  h.push(bestV);
  return { solution: best, value: bestV, feasible: true, evals, iters: maxIter, history: sample(h, 200) };
}

// AG con codificación real, cruza BLX-α y mutación gaussiana
export function genetic(_, params, rnd) {
  const { pop: P, gens, pc, pm, elit, tk, blx, sigma } = params;
  let pop = Array.from({ length: P }, () => rpt(rnd)), fit = pop.map(f), evals = P;
  const h = [];
  const tour = () => { let b = (rnd() * P) | 0; for (let k = 1; k < tk; k++) { const c = (rnd() * P) | 0; if (fit[c] < fit[b]) b = c; } return b; };
  for (let g = 0; g < gens; g++) {
    const order = fit.map((_, i) => i).sort((a, b) => fit[a] - fit[b]);
    h.push(fit[order[0]]);
    const next = order.slice(0, elit).map((i) => pop[i]);
    while (next.length < P) {
      const a = pop[tour()], b = pop[tour()];
      let c = a.slice();
      if (rnd() < pc) c = c.map((_, k) => { const lo = Math.min(a[k], b[k]), hi = Math.max(a[k], b[k]), d = hi - lo; return clip(lo - blx * d + rnd() * d * (1 + 2 * blx)); });
      if (rnd() < pm) c = c.map((v) => clip(v + gauss(rnd) * sigma));
      next.push(c);
    }
    pop = next; fit = pop.map(f); evals += P;
  }
  const bi = fit.indexOf(Math.min(...fit));
  h.push(fit[bi]);
  return { solution: pop[bi], value: fit[bi], feasible: true, evals, iters: gens, history: sample(h, 200) };
}
