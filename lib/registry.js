import * as Q from "./nqueens";
import * as E from "./eggholder";
import * as K from "./knapsack";
import * as G from "./graphcoloring";

import { KNAPSACK_INSTANCES } from "../data/knapsack-instances";
import { GRAPH_INSTANCES } from "../data/graph-instances";

const P = (key, label, def, step = 1) => ({
  key,
  label,
  def,
  step,
});

const sa = (T0, alpha, Tmin, maxIter, extra = []) => [
  P("T0", "Temperatura inicial", T0, 0.1),
  P("alpha", "Factor de enfriamiento α", alpha, 0.0001),
  P("Tmin", "Temperatura mínima", Tmin, 0.01),
  P("maxIter", "Iteraciones máximas", maxIter, 1000),
  ...extra,
];

const ga = (pop, gens, pc, pm, extra = []) => [
  P("pop", "Tamaño de población", pop),
  P("gens", "Generaciones", gens, 10),
  P("pc", "Prob. de cruza", pc, 0.05),
  P("pm", "Prob. de mutación", pm, 0.05),
  P("elit", "Elitismo (individuos)", 2),
  P("tk", "Tamaño de torneo", 3),
  ...extra,
];

const knapsackInstance = (index) => {
  const instance = KNAPSACK_INSTANCES[index];

  if (!instance) {
    throw new Error(`Instancia de mochila desconocida: ${index}`);
  }

  return instance;
};

const budget = [
  P("maxEvals", "Máximo de evaluaciones", 10000, 100),
  P("maxSeconds", "Tiempo máximo (s)", 10, 1),
];

export const PROBLEMS = {
  // ========================================
  // N REINAS
  // ========================================

  nreinas: {
    title: "N-Reinas",
    tag: "Satisfacción de restricciones",
    desc: "Coloca N reinas en un tablero NxN sin que se ataquen.",
    sizeLabel: "N (tamaño del tablero)",
    sizes: [8, 50, 100],
    metric: "Conflictos",
    algos: {
      bt: {
        name: "Backtracking",
        note: "Forward checking + MRV + valores desde el centro",
        deterministic: true,
        params: [P("nodeLimit", "Límite de nodos", 500000, 1000)],
        run: Q.backtracking,
      },
      sa: {
        name: "Recocido simulado",
        note: "Permutación, intercambio de filas, enfriamiento geométrico",
        params: sa(2, 0.9999, 0.05, 200000),
        run: Q.annealing,
      },
      ga: {
        name: "Algoritmo genético",
        note: "Permutaciones, torneo, cruza OX, mutación por intercambio",
        params: ga(100, 500, 0.9, 0.2),
        run: Q.genetic,
      },
    },
  },

  // ========================================
  // MOCHILA 0/1
  // ========================================
  mochila: {
    title: "Mochila 0/1",
    tag: "Optimización con restricción de capacidad",
    desc: "Elige objetos que maximicen el valor sin exceder la capacidad.",
    sizeLabel: "Instancia Kaggle (fila 0 a 9)",
    sizes: Array.from({ length: 10 }, (_, i) => i),
    metric: "Valor total",
    objective: "max",

    algos: {
      bt: {
        name: "Backtracking",
        note: "Filtrado por capacidad, orden por valor/peso y poda Branch and Bound",
        deterministic: true,

        params: [...budget, P("nodeLimit", "Límite de nodos", 100000, 1000)],

        run: (id, params, rnd) =>
          K.backtracking(knapsackInstance(id), params, rnd),
      },

      sa: {
        name: "Recocido simulado",
        note: "Vecindario por cambio de bit, reparación y enfriamiento geométrico",

        params: [
          P("initialTemperature", "Temperatura inicial", 50, 1),
          P("coolingRate", "Factor de enfriamiento", 0.995, 0.0001),
          P("minTemperature", "Temperatura mínima", 0.001, 0.001),
          P("maxIterations", "Iteraciones máximas", 10000, 100),
          ...budget,
        ],

        run: (id, params, rnd) =>
          K.annealing(knapsackInstance(id), params, rnd),
      },

      ga: {
        name: "Algoritmo genético",
        note: "Cromosoma binario, torneo, cruza de un punto, mutación y elitismo",

        params: [
          P("populationSize", "Tamaño de población", 30),
          P("maxGenerations", "Generaciones", 300, 10),
          P("crossoverRate", "Prob. de cruza", 0.8, 0.05),
          P("mutationRate", "Prob. de mutación", 0.2, 0.05),
          P("elitism", "Elitismo", 1),
          P("tournamentSize", "Tamaño de torneo", 3),
          ...budget,
        ],

        run: (id, params, rnd) => K.genetic(knapsackInstance(id), params, rnd),
      },
    },
  },

  // ========================================
  // COLOREADO DE GRAFOS
  // ========================================
  grafos: {
    title: "Coloreado de grafos",
    tag: "Escalabilidad (50 y 1000 nodos)",
    desc: "Minimiza el número de colores entre coloraciones completas sin conflictos.",
    sizeLabel: "Instancia del grafo",
    sizes: [0, 1, 2, 3, 4, 5],
    metric: "Colores utilizados",
    objective: "min",
    algos: {
      bt: {
        name: "Backtracking",
        deterministic: true,
        note: "DSATUR, forward checking y búsqueda exacta por k colores",
        params: [
          P("maxEvals", "Máximo de evaluaciones", 10000, 100),
          P("maxSeconds", "Tiempo máximo (s)", 10, 1),
          P("nodeLimit", "Límite de nodos", 100000, 1000),
        ],
        run: (i, p, r) => G.backtracking(GRAPH_INSTANCES[i], p, r),
      },
      sa: {
        name: "Recocido simulado",
        note: "Recoloración local, criterio de Metropolis y reducción gradual de colores",
        params: [
          P("initialTemperature", "Temperatura inicial", 5, 0.1),
          P("coolingRate", "Enfriamiento", 0.999, 0.0001),
          P("minTemperature", "Temperatura mínima", 0.001, 0.001),
          P("maxIterations", "Iteraciones máximas", 10000, 100),
          P("maxEvals", "Máximo de evaluaciones", 10000, 100),
          P("maxSeconds", "Tiempo máximo (s)", 10, 1),
        ],
        run: (i, p, r) => G.annealing(GRAPH_INSTANCES[i], p, r),
      },
      ga: {
        name: "Algoritmo genético",
        note: "Selección por torneo, cruce uniforme, mutación y elitismo",
        params: [
          P("populationSize", "Población", 30),
          P("maxGenerations", "Generaciones", 150, 10),
          P("tournamentSize", "Torneo", 3),
          P("elitism", "Elitismo", 2),
          P("crossoverRate", "Prob. cruza", 0.8, 0.05),
          P("mutationRate", "Prob. mutación", 0.02, 0.01),
          P("maxEvals", "Máximo de evaluaciones", 10000, 100),
          P("maxSeconds", "Tiempo máximo (s)", 10, 1),
        ],
        run: (i, p, r) => G.genetic(GRAPH_INSTANCES[i], p, r),
      },
    },
  },

  // ========================================
  // EGGHOLDER
  // ========================================
  eggholder: {
    title: "Función Eggholder",
    tag: "Optimización continua global",
    desc: "Minimiza una superficie con muchísimos mínimos locales.",
    sizeLabel: "Dimensión",
    sizes: [2],
    metric: "f(x, y)",
    globalMin: E.GLOBAL_MIN,

    algos: {
      sa: {
        name: "Recocido simulado",
        note: "Vecino gaussiano con paso decreciente",
        params: sa(100, 0.9995, 0.01, 20000, [
          P("step", "Paso máximo", 150, 10),
        ]),
        run: E.annealing,
      },

      ga: {
        name: "Algoritmo genético",
        note: "Real-codificado, torneo, BLX-α, mutación gaussiana",
        params: ga(60, 200, 0.9, 0.2, [
          P("blx", "α de BLX", 0.3, 0.05),
          P("sigma", "σ de mutación", 20, 1),
        ]),
        run: E.genetic,
      },
    },
  },
};
