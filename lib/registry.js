import * as Q from './nqueens';
import * as E from './eggholder';

const P = (key, label, def, step = 1) => ({ key, label, def, step });
const sa = (T0, alpha, Tmin, maxIter, extra = []) => [P('T0', 'Temperatura inicial', T0, 0.1), P('alpha', 'Factor de enfriamiento α', alpha, 0.0001), P('Tmin', 'Temperatura mínima', Tmin, 0.01), P('maxIter', 'Iteraciones máximas', maxIter, 1000), ...extra];
const ga = (pop, gens, pc, pm, extra = []) => [P('pop', 'Tamaño de población', pop), P('gens', 'Generaciones', gens, 10), P('pc', 'Prob. de cruza', pc, 0.05), P('pm', 'Prob. de mutación', pm, 0.05), P('elit', 'Elitismo (individuos)', 2), P('tk', 'Tamaño de torneo', 3), ...extra];

export const PROBLEMS = {
  nreinas: {
    title: 'N-Reinas', tag: 'Satisfacción de restricciones',
    desc: 'Coloca N reinas en un tablero NxN sin que se ataquen.',
    sizeLabel: 'N (tamaño del tablero)', sizes: [8, 50, 100], metric: 'Conflictos',
    algos: {
      bt: { name: 'Backtracking', note: 'Forward checking + MRV + valores desde el centro', deterministic: true, params: [P('nodeLimit', 'Límite de nodos', 500000, 1000)], run: Q.backtracking },
      sa: { name: 'Recocido simulado', note: 'Permutación, intercambio de filas, enfriamiento geométrico', params: sa(2, 0.9999, 0.05, 200000), run: Q.annealing },
      ga: { name: 'Algoritmo genético', note: 'Permutaciones, torneo, cruza OX, mutación por intercambio', params: ga(100, 500, 0.9, 0.2), run: Q.genetic },
    },
  },
  mochila: { title: 'Mochila 0/1', tag: 'Optimización con restricción de capacidad', desc: 'Elige objetos que maximicen el valor sin exceder la capacidad.', algos: {} },
  grafos: { title: 'Coloreado de grafos', tag: 'Escalabilidad (50 y 1000 nodos)', desc: 'Asigna colores a los nodos sin que dos vecinos coincidan.', algos: {} },
  eggholder: {
    title: 'Función Eggholder', tag: 'Optimización continua global',
    desc: 'Minimiza una superficie con muchísimos mínimos locales.',
    sizeLabel: 'Dimensión', sizes: [2], metric: 'f(x, y)', globalMin: E.GLOBAL_MIN,
    algos: {
      sa: { name: 'Recocido simulado', note: 'Vecino gaussiano con paso decreciente', params: sa(100, 0.9995, 0.01, 20000, [P('step', 'Paso máximo', 150, 10)]), run: E.annealing },
      ga: { name: 'Algoritmo genético', note: 'Real-codificado, torneo, BLX-α, mutación gaussiana', params: ga(60, 200, 0.9, 0.2, [P('blx', 'α de BLX', 0.3, 0.05), P('sigma', 'σ de mutación', 20, 1)]), run: E.genetic },
    },
  },
};
