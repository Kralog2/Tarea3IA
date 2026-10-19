"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PROBLEMS } from "../../../lib/registry";
import { makeRng } from "../../../lib/rng";
import Chart from "../../../components/Chart";
import Board from "../../../components/Board";

const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
const std = (a) => Math.sqrt(mean(a.map((v) => (v - mean(a)) ** 2)));

export default function ProblemPage() {
  const { id } = useParams();
  const prob = PROBLEMS[id];
  const algoIds = Object.keys(prob?.algos ?? {});
  const [algoId, setAlgoId] = useState(algoIds[0]);
  const [size, setSize] = useState(prob?.sizes?.[0]);
  const [runs, setRuns] = useState(10);
  const [seed, setSeed] = useState(1);
  const [vals, setVals] = useState({});
  const [out, setOut] = useState(null);
  const [busy, setBusy] = useState(false);
  const algo = prob?.algos[algoId];
  const params = useMemo(
    () =>
      Object.fromEntries(
        (algo?.params ?? []).map((p) => [
          p.key,
          Number(vals[`${algoId}.${p.key}`] ?? p.def),
        ]),
      ),
    [algo, algoId, vals],
  );

  if (!prob)
    return (
      <main className="p-8">
        Problema no encontrado.{" "}
        <Link href="/" className="underline">
          Volver
        </Link>
      </main>
    );

  function run() {
    setBusy(true);
    setTimeout(() => {
      const n = algo.deterministic ? 1 : runs,
        rows = [];
      for (let i = 0; i < n; i++) {
        const s = seed + i,
          t0 = performance.now();
        const r = algo.run(size, params, makeRng(s));
        rows.push({ run: i + 1, seed: s, ms: performance.now() - t0, ...r });
      }
      setOut({ rows, algoName: algo.name, size, params });
      setBusy(false);
    }, 30);
  }
  function csv() {
    const head =
      "problema,algoritmo,instancia,ejecucion,semilla,parametros,valor,factible,iteraciones,evaluaciones,tiempo_ms";
    const lines = out.rows.map((r) =>
      [
        prob.title,
        out.algoName,
        out.size,
        r.run,
        r.seed,
        `"${JSON.stringify(out.params).replace(/"/g, "'")}"`,
        r.value,
        r.feasible,
        r.iters,
        r.evals,
        r.ms.toFixed(2),
      ].join(","),
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([[head, ...lines].join("\n")], { type: "text/csv" }),
    );
    a.download = `${id}_${algoId}_${out.size}.csv`;
    a.click();
  }

  const done = out?.rows.filter((r) => r.value !== null) ?? [];

  const valid = done.filter((r) => r.feasible);

  const best = valid.length
    ? valid.reduce((b, r) => {
        if (prob.objective === "max") {
          return r.value > b.value ? r : b;
        }

        return r.value < b.value ? r : b;
      })
    : null;

  const succ = out
    ? out.rows.filter((r) =>
        id === "eggholder" ? r.value < prob.globalMin + 1 : r.feasible,
      ).length
    : 0;

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <Link href="/" className="text-sm text-pastel-700 underline">
        ← Todos los problemas
      </Link>
      <h1 className="text-2xl font-semibold mt-2">{prob.title}</h1>
      <p className="text-pastel-700 text-sm">{prob.desc}</p>

      {!algoIds.length ? (
        <div className="panel p-6 mt-6">
          Este problema aún no tiene algoritmos integrados. Agrega sus funciones
          en <code>lib/</code> y regístralas en <code>lib/registry.js</code>.
        </div>
      ) : (
        <div className="grid gap-6 mt-6 lg:grid-cols-[320px_1fr]">
          <section className="panel p-5 space-y-5 self-start">
            <div>
              <h2 className="font-semibold mb-2">Algoritmo</h2>
              <div className="space-y-2">
                {algoIds.map((k) => (
                  <button
                    key={k}
                    onClick={() => {
                      setAlgoId(k);
                      setOut(null);
                    }}
                    className={`w-full text-left border p-3 ${k === algoId ? "border-pastel-600 bg-pastel-100" : "border-pastel-200 hover:bg-pastel-50"}`}
                  >
                    <span className="block font-medium">
                      {prob.algos[k].name}
                    </span>
                    <span className="block text-xs text-pastel-700">
                      {prob.algos[k].note}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">{prob.sizeLabel}</label>
              <div className="flex gap-2 mt-1">
                {prob.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 border py-1 ${s === size ? "border-pastel-600 bg-pastel-100" : "border-pastel-200"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {!algo.deterministic && (
                <>
                  <label className="text-sm">
                    Ejecuciones
                    <input
                      className="field mt-1"
                      type="number"
                      min="1"
                      max="100"
                      value={runs}
                      onChange={(e) => setRuns(+e.target.value)}
                    />
                  </label>
                  <label className="text-sm">
                    Semilla base
                    <input
                      className="field mt-1"
                      type="number"
                      value={seed}
                      onChange={(e) => setSeed(+e.target.value)}
                    />
                  </label>
                </>
              )}
              {algo.params.map((p) => (
                <label key={p.key} className="text-sm">
                  {p.label}
                  <input
                    className="field mt-1"
                    type="number"
                    step={p.step}
                    value={vals[`${algoId}.${p.key}`] ?? p.def}
                    onChange={(e) =>
                      setVals({
                        ...vals,
                        [`${algoId}.${p.key}`]: e.target.value,
                      })
                    }
                  />
                </label>
              ))}
            </div>
            <button
              onClick={run}
              disabled={busy}
              className="w-full bg-pastel-600 hover:bg-pastel-700 text-white py-2 font-medium disabled:opacity-60"
            >
              {busy ? "Ejecutando…" : "Ejecutar"}
            </button>
          </section>

          <section className="space-y-6">
            {!out && (
              <div className="panel p-6 text-pastel-700">
                Configura los parámetros y pulsa Ejecutar. Cada ejecución usa
                una semilla distinta (base + índice) para poder reproducirla.
              </div>
            )}
            {out && (
              <>
                <div className="panel p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold">
                      Resumen · {out.algoName} · {out.size}
                    </h2>
                    <button
                      onClick={csv}
                      className="text-sm border border-pastel-600 text-pastel-700 px-3 py-1 hover:bg-pastel-100"
                    >
                      Descargar CSV
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
                    {[
                      [
                        "Mejor " + prob.metric,
                        best
                          ? best.value.toFixed(id === "eggholder" ? 4 : 0)
                          : "—",
                      ],
                      [
                        "Media ± desv.",
                        done.length
                          ? `${mean(done.map((r) => r.value)).toFixed(2)} ± ${std(done.map((r) => r.value)).toFixed(2)}`
                          : "—",
                      ],
                      ["Éxito", `${succ}/${out.rows.length}`],
                      [
                        "Evaluaciones (prom.)",
                        Math.round(
                          mean(out.rows.map((r) => r.evals)),
                        ).toLocaleString(),
                      ],
                      [
                        "Tiempo (prom.)",
                        `${mean(out.rows.map((r) => r.ms)).toFixed(1)} ms`,
                      ],
                    ].map(([a, b]) => (
                      <div
                        key={a}
                        className="bg-pastel-50 border border-pastel-200 p-3"
                      >
                        <div className="text-xs text-pastel-700">{a}</div>
                        <div className="font-semibold">{b}</div>
                      </div>
                    ))}
                  </div>
                  {id === "nreinas" && succ === 0 && algo.deterministic && (
                    <p className="mt-3 text-sm text-red-700">
                      Se alcanzó el límite de nodos sin hallar solución.
                    </p>
                  )}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="panel p-5">
                    <h2 className="font-semibold mb-3">Convergencia</h2>
                    <Chart
                      series={out.rows.map((r) => r.history)}
                      label={prob.metric}
                    />
                  </div>
                  <div className="panel p-5">
                    <h2 className="font-semibold mb-3">Mejor solución</h2>

                    {best?.solution && id === "mochila" && (
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-pastel-700">Valor total:</span>
                          <p className="font-semibold text-lg">
                            {best.totalValue}
                          </p>
                        </div>
                        <div>
                          <span className="text-pastel-700">
                            Peso utilizado:
                          </span>
                          <p className="font-semibold">
                            {best.totalWeight} / {best.capacity}
                          </p>
                        </div>
                        <div>
                          <p className="text-pastel-700 mb-2">
                            Objetos seleccionados:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {best.solution.map((selected, index) => (
                              <div
                                key={index}
                                className={`border px-3 py-2 ${
                                  selected
                                    ? "border-pastel-600 bg-pastel-100"
                                    : "border-pastel-200 bg-pastel-50"
                                }`}
                              >
                                Objeto {index + 1}
                                <span className="block text-xs">
                                  {selected
                                    ? "Seleccionado"
                                    : "No seleccionado"}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-pastel-700">
                          {best.optimal
                            ? "Optimalidad demostrada"
                            : "Mejor solución encontrada"}
                        </p>
                      </div>
                    )}
                    
                    {best?.solution && id === "nreinas" && (
                      <Board p={best.solution} />
                    )}
                    {best?.solution && id === "eggholder" && (
                      <p className="text-sm">
                        x = {best.solution[0].toFixed(4)}
                        <br />y = {best.solution[1].toFixed(4)}
                        <br />f = {best.value.toFixed(4)}
                        <br />
                        <span className="text-pastel-700">
                          Óptimo global: f(512, 404.2319) = {prob.globalMin}
                        </span>
                      </p>
                    )}
                    {!best?.solution && (
                      <p className="text-sm text-pastel-700">Sin solución.</p>
                    )}
                  </div>
                </div>
                <div className="panel p-5 overflow-x-auto">
                  <h2 className="font-semibold mb-3">Ejecuciones</h2>
                  <table className="w-full text-sm text-left">
                    <thead className="text-pastel-700">
                      <tr>
                        {[
                          "#",
                          "Semilla",
                          prob.metric,
                          "Factible",
                          "Iter.",
                          "Evaluaciones",
                          "ms",
                        ].map((h) => (
                          <th key={h} className="py-1 pr-4 font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {out.rows.map((r) => (
                        <tr key={r.run} className="border-t border-pastel-200">
                          <td className="py-1 pr-4">{r.run}</td>
                          <td className="pr-4">{r.seed}</td>
                          <td className="pr-4">
                            {r.value === null
                              ? "—"
                              : r.value.toFixed(id === "eggholder" ? 4 : 0)}
                          </td>
                          <td className="pr-4">{r.feasible ? "Sí" : "No"}</td>
                          <td className="pr-4">{r.iters}</td>
                          <td className="pr-4">{r.evals}</td>
                          <td>{r.ms.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
