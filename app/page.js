import Link from "next/link";
import { PROBLEMS } from "../lib/registry";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">Búsqueda y optimización</h1>
      <p className="mt-2 text-pastel-700 max-w-xl">
        Elige un problema y compara cómo lo resuelven la búsqueda sistemática,
        el recocido simulado y el algoritmo genético.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {Object.entries(PROBLEMS).map(([id, p]) => (
          <Link
            key={id}
            href={`/problema/${id}`}
            className="panel p-6 block hover:bg-pastel-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pastel-500"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-pastel-600 mt-1">{p.tag}</p>
            <p className="mt-4 text-sm">{p.desc}</p>
            <p className="mt-4 text-xs text-pastel-700">
              {Object.keys(p.algos).length
                ? `${Object.keys(p.algos).length} algoritmos disponibles`
                : "Algoritmos pendientes de integrar"}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
