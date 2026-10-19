import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Dashboard from "../../components/ExperimentDashboard";

export const dynamic = "force-dynamic";

export default function AnalysisPage() {
  const filename = path.join(
    process.cwd(),
    "resultados",
    "unificado",
    "experimento.json",
  );
  let experiment;
  try {
    experiment = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (
      !Array.isArray(experiment.corridas) ||
      !Array.isArray(experiment.convergencia)
    ) {
      throw new Error("Faltan los arreglos corridas o convergencia");
    }
  } catch (error) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-5">
        <Link className="text-pastel-700 underline text-sm" href="/">
          ← Inicio
        </Link>
        <section className="panel p-6 space-y-3">
          <h1 className="text-2xl font-semibold">Análisis experimental</h1>
          <p>
            No se pudo cargar <code>resultados/unificado/experimento.json</code>
            .
          </p>
          <p className="text-sm text-pastel-700">
            Ejecuta <code>node scripts/experimentar_todo.mjs</code> para generar
            los resultados.
          </p>
          <p className="text-xs break-all">Detalle: {error.message}</p>
        </section>
      </main>
    );
  }
  // Enviar solo los campos que necesita el panel, no las soluciones de 1000 nodos.
  const corridas = experiment.corridas.map(
    ({ solucion, parametros, ...row }) => row,
  );
  const convergencia = experiment.convergencia;
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Link className="text-sm text-pastel-700 underline" href="/">
        ← Todos los problemas
      </Link>
      <div className="mt-3 mb-8">
        <h1 className="text-3xl font-semibold">Análisis experimental</h1>
        <p className="text-pastel-700 mt-2">
          Comparaciones reproducibles a partir de los archivos guardados por
          OptiLab.
        </p>
      </div>
      <Dashboard
        corridas={corridas}
        convergencia={convergencia}
        lote={experiment.lote}
      />
    </main>
  );
}
