import { backtracking, annealing, genetic, evaluate } from "./lib/knapsack.js";

const instancia = {
  id: "prueba_mochila",
  pesos: [2, 3, 4, 5],
  valores: [3, 4, 5, 8],
  capacidad: 5,
};

// Generador pseudoaleatorio reproducible.
function crearRng(seed) {
  let estado = seed >>> 0;

  return () => {
    estado = (Math.imul(estado, 1664525) + 1013904223) >>> 0;

    return estado / 4294967296;
  };
}

const algoritmos = [
  ["Backtracking", backtracking],
  ["Recocido Simulado", annealing],
  ["Algoritmo Genético", genetic],
];

for (const [nombre, algoritmo] of algoritmos) {
  const resultado = algoritmo(
    instancia,
    {
      maxEvals: 10000,
      maxSeconds: 10,
    },
    crearRng(11),
  );

  console.log(`\n${nombre}`);
  console.log("Solución:", resultado.solution);
  console.log("Valor:", resultado.value);
  console.log("Evaluaciones:", resultado.evals);
  console.log("Iteraciones:", resultado.iters);
  console.log("Parada:", resultado.stopReason);
  console.log("Verificación:", evaluate(instancia, resultado.solution));
}
