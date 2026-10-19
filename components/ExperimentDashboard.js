"use client";
import { useMemo, useState } from "react";
import ProblemInsights from "./ProblemInsights";

const NAMES = {
  reinas: "N-Reinas",
  mochila: "Mochila 0/1",
  grafos: "Coloreado de grafos",
  eggholder: "Eggholder",
};
const ALGORITHMS = {
  bt: "Backtracking",
  sa: "Recocido simulado",
  ga: "Algoritmo genético",
};
const fmt = (n, digits = 2) =>
  n == null || !Number.isFinite(Number(n))
    ? "—"
    : Number(n).toLocaleString("es-MX", { maximumFractionDigits: digits });
const median = (xs) => {
  const a = xs.filter(Number.isFinite).sort((x, y) => x - y);
  return a.length
    ? (a[Math.floor((a.length - 1) / 2)] + a[Math.floor(a.length / 2)]) / 2
    : null;
};
const valid = (x) =>
  x.estado === "ok" &&
  x.factible === true &&
  x.dentro_presupuesto === true &&
  x.objetivo != null &&
  Number.isFinite(Number(x.objetivo));
const palette = { bt: "#2c64a0", sa: "#059669", ga: "#a855a4" };

function LinePlot({ series, maximize, title }) {
  const W = 700,
    H = 248,
    l = 57,
    r = 17,
    t = 17,
    b = 35;
  const points = series.flatMap((s) => s.points);
  if (!points.length)
    return (
      <p className="text-sm text-pastel-700">
        No hay datos de convergencia para esta selección.
      </p>
    );
  const X = Math.max(1, ...points.map((p) => p.x));
  const ys = points.map((p) => p.y),
    mn = Math.min(...ys),
    mx = Math.max(...ys);
  const lo = mn === mx ? mn - 1 : mn,
    hi = mn === mx ? mx + 1 : mx;
  const x = (n) => l + (n / X) * (W - l - r),
    y = (n) => t + ((hi - n) / (hi - lo)) * (H - t - b);
  return (
    <div>
      <svg
        role="img"
        aria-label={title}
        className="w-full"
        viewBox={`0 0 ${W} ${H}`}
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const val = lo + ((hi - lo) * i) / 4;
          return (
            <g key={i}>
              <line
                x1={l}
                x2={W - r}
                y1={y(val)}
                y2={y(val)}
                stroke="#d6e6f7"
              />
              <text
                x={l - 7}
                y={y(val) + 4}
                textAnchor="end"
                fontSize="11"
                fill="#2c64a0"
              >
                {fmt(val, 1)}
              </text>
            </g>
          );
        })}
        {[0, 0.25, 0.5, 0.75, 1].map((q) => (
          <g key={q}>
            <text
              x={x(q * X)}
              y={H - 12}
              textAnchor="middle"
              fontSize="11"
              fill="#2c64a0"
            >
              {fmt(q * X, 0)}
            </text>
          </g>
        ))}
        {series.map((s) => (
          <polyline
            key={s.key}
            points={s.points.map((p) => `${x(p.x)},${y(p.y)}`).join(" ")}
            fill="none"
            stroke={palette[s.key]}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
        <text
          x={W / 2}
          y={H - 1}
          fontSize="11"
          textAnchor="middle"
          fill="#2c64a0"
        >
          Evaluaciones acumuladas
        </text>
      </svg>
      <div className="flex flex-wrap gap-4 text-xs mt-1">
        {series.map((s) => (
          <span key={s.key} className="flex items-center gap-2">
            <span
              className="inline-block w-4 h-1"
              style={{ backgroundColor: palette[s.key] }}
            />
            {ALGORITHMS[s.key]}
          </span>
        ))}
      </div>
      <p className="text-xs text-pastel-700 mt-2">
        Mejor objetivo factible hasta cada evaluación.{" "}
        {maximize ? "Mayor es mejor." : "Menor es mejor."} No implica
        optimalidad demostrada.
      </p>
    </div>
  );
}

function BarCompare({ rows, field, label }) {
  const vals = rows.map((r) => ({
    name: ALGORITHMS[r.algoritmo] ?? r.algoritmo,
    val: median(r.runs.map((x) => Number(x[field])).filter(Number.isFinite)),
    algo: r.algoritmo,
  }));
  const max = Math.max(1, ...vals.map((x) => x.val ?? 0));
  return (
    <div className="space-y-3">
      {vals.map((x) => (
        <div key={x.algo} className="text-sm">
          <div className="flex justify-between gap-3 mb-1">
            <span>{x.name}</span>
            <strong>{fmt(x.val)}</strong>
          </div>
          <div className="h-3 bg-pastel-100">
            <div
              className="h-full"
              style={{
                width: `${((x.val ?? 0) / max) * 100}%`,
                backgroundColor: palette[x.algo] ?? "#2c64a0",
              }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-pastel-700">
        {label} (mediana de ejecuciones válidas dentro del presupuesto).
      </p>
    </div>
  );
}

export default function Dashboard({ corridas, convergencia, lote }) {
  const available = [...new Set(corridas.map((x) => x.problema))];
  const [problem, setProblem] = useState(available[0] ?? "mochila");
  const instances = useMemo(
    () =>
      [
        ...new Set(
          corridas
            .filter((x) => x.problema === problem)
            .map((x) => x.instancia),
        ),
      ].sort((a, b) => {
        const A = corridas.find((x) => x.instancia === a)?.tamano ?? 0,
          B = corridas.find((x) => x.instancia === b)?.tamano ?? 0;
        return A - B || a.localeCompare(b, undefined, { numeric: true });
      }),
    [corridas, problem],
  );
  const [chosen, setChosen] = useState("");
  const instance = instances.includes(chosen) ? chosen : instances[0];
  const selected = corridas.filter(
    (x) => x.problema === problem && x.instancia === instance,
  );
  const seeds = [...new Set(selected.map((x) => x.semilla))].sort(
    (a, b) => a - b,
  );
  const [seed, setSeed] = useState(11);
  const selectedSeed = seeds.includes(seed) ? seed : seeds[0];
  const byAlgo = [...new Set(selected.map((x) => x.algoritmo))].map(
    (algoritmo) => ({
      algoritmo,
      runs: selected.filter((x) => x.algoritmo === algoritmo),
      good: selected.filter((x) => x.algoritmo === algoritmo && valid(x)),
    }),
  );
  const series = byAlgo.map((group) => ({
    key: group.algoritmo,
    points: convergencia
      .filter(
        (x) =>
          x.problema === problem &&
          x.instancia === instance &&
          x.algoritmo === group.algoritmo &&
          x.semilla === selectedSeed &&
          x.objetivo != null &&
          x.evaluaciones != null &&
          Number.isFinite(Number(x.objetivo)) &&
          Number.isFinite(Number(x.evaluaciones)),
      )
      .sort((a, b) => a.evaluaciones - b.evaluaciones)
      .map((p) => ({ x: Number(p.evaluaciones), y: Number(p.objetivo) })),
  }));
  const total = corridas.length,
    ok = corridas.filter(valid).length,
    failed = corridas.filter((x) => x.estado !== "ok").length,
    outside = corridas.filter((x) => x.dentro_presupuesto !== true).length;
  const maximize = problem === "mochila";
  const summary = byAlgo.map((g) => ({
    ...g,
    objective: median(g.good.map((x) => Number(x.objetivo))),
    time: median(g.good.map((x) => Number(x.tiempo_ms))),
    evaluations: median(g.good.map((x) => Number(x.evaluaciones))),
    success: g.runs.length ? (100 * g.good.length) / g.runs.length : 0,
  }));
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ["Corridas registradas", total],
          ["Válidas dentro del presupuesto", ok],
          ["Fuera de presupuesto", outside],
          ["Con errores", failed],
        ].map(([label, n]) => (
          <div key={label} className="panel p-4">
            <p className="text-xs text-pastel-700">{label}</p>
            <p className="text-2xl font-semibold mt-1">{fmt(n, 0)}</p>
          </div>
        ))}
      </section>
      <section className="panel p-5 space-y-4">
        <h2 className="font-semibold text-lg">Seleccionar experimento</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="text-sm">
            Problema
            <select
              className="field mt-2"
              value={problem}
              onChange={(e) => {
                setProblem(e.target.value);
                setChosen("");
              }}
            >
              {available.map((p) => (
                <option key={p} value={p}>
                  {NAMES[p] ?? p}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Instancia
            <select
              className="field mt-2"
              value={instance ?? ""}
              onChange={(e) => setChosen(e.target.value)}
            >
              {instances.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Semilla de convergencia
            <select
              className="field mt-2"
              value={selectedSeed ?? ""}
              onChange={(e) => setSeed(Number(e.target.value))}
            >
              {seeds.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="text-xs text-pastel-700">
          Lote: {lote} · {selected.length} corridas para la instancia elegida
        </p>
      </section>
      <section className="panel p-5 overflow-x-auto space-y-3">
        <h2 className="text-lg font-semibold">Resultados por algoritmo</h2>
        <table className="w-full text-sm text-left">
          <thead className="bg-pastel-100">
            <tr>
              {[
                "Algoritmo",
                "Corridas válidas",
                "Objetivo mediano",
                "Tiempo mediano (ms)",
                "Evaluaciones medianas",
                "Factibilidad válida",
              ].map((h) => (
                <th key={h} className="p-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {summary.map((g) => (
              <tr key={g.algoritmo} className="border-b border-pastel-200">
                <td className="p-3">
                  {ALGORITHMS[g.algoritmo] ?? g.algoritmo}
                </td>
                <td className="p-3">
                  {g.good.length}/{g.runs.length}
                </td>
                <td className="p-3">{fmt(g.objective)}</td>
                <td className="p-3">{fmt(g.time)}</td>
                <td className="p-3">{fmt(g.evaluations, 0)}</td>
                <td className="p-3">{fmt(g.success, 1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-pastel-700">
          Los objetivos se comparan solo dentro de una misma instancia. No se
          confunde una solución factible con optimalidad demostrada.
        </p>
      </section>
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="panel p-5">
          <h2 className="font-semibold mb-4">Tiempo de ejecución</h2>
          <BarCompare
            rows={byAlgo.map((x) => ({ ...x, runs: x.good }))}
            field="tiempo_ms"
            label="Tiempo en milisegundos"
          />
        </div>
        <div className="panel p-5">
          <h2 className="font-semibold mb-4">Número de evaluaciones</h2>
          <BarCompare
            rows={byAlgo.map((x) => ({ ...x, runs: x.good }))}
            field="evaluaciones"
            label="Evaluaciones contabilizadas según cada algoritmo"
          />
        </div>
      </section>
      <section className="panel p-5">
        <h2 className="font-semibold text-lg mb-3">Curvas de convergencia</h2>
        <LinePlot
          series={series}
          maximize={maximize}
          title={`Convergencia de ${NAMES[problem]} en ${instance}`}
        />
        <p className="text-xs text-pastel-700 mt-2">
          Los puntos proceden del historial exportado. Si un algoritmo solo
          registra mejoras, sus segmentos no representan evaluaciones
          intermedias observadas.
        </p>
      </section>
      {(problem === "grafos" || problem === "reinas") && (
        <section className="panel p-5 space-y-3">
          <h2 className="text-lg font-semibold">Escalabilidad</h2>
          <p className="text-sm text-pastel-700">
            Mediana de tiempo (ms) para cada tamaño de problema, agregando las
            instancias del mismo tamaño; solo corridas factibles dentro del
            presupuesto.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-pastel-100">
                  <th className="p-2 text-left">Tamaño</th>
                  {byAlgo.map((g) => (
                    <th className="p-2 text-right" key={g.algoritmo}>
                      {ALGORITHMS[g.algoritmo]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ...new Set(
                    corridas
                      .filter((x) => x.problema === problem)
                      .map((x) => x.tamano),
                  ),
                ]
                  .sort((a, b) => a - b)
                  .map((size) => (
                    <tr className="border-b border-pastel-200" key={size}>
                      <td className="p-2">{size}</td>
                      {byAlgo.map((g) => (
                        <td className="p-2 text-right" key={g.algoritmo}>
                          {fmt(
                            median(
                              corridas
                                .filter(
                                  (x) =>
                                    x.problema === problem &&
                                    x.tamano === size &&
                                    x.algoritmo === g.algoritmo &&
                                    valid(x),
                                )
                                .map((x) => Number(x.tiempo_ms)),
                            ),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      <ProblemInsights
        corridas={corridas}
        problem={problem}
        instance={instance}
      />
      <p className="text-xs text-pastel-700">
        Este panel es de solo lectura. Para actualizarlo, vuelve a ejecutar el
        módulo de experimentación y recarga esta página. Una corrida con error o
        fuera de presupuesto no se considera válida en las estadísticas de
        calidad.
      </p>
    </div>
  );
}
