import { conflicts } from "../lib/nqueens";
// Tablero de N-Reinas; las reinas en conflicto diagonal se marcan en rojo
export default function Board({ p }) {
  const n = p.length;
  const bad = new Set();
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (Math.abs(i - j) === Math.abs(p[i] - p[j])) {
        bad.add(i);
        bad.add(j);
      }
  return (
    <svg
      viewBox={`0 0 ${n} ${n}`}
      className="w-full max-w-md border border-pastel-300"
    >
      {Array.from({ length: n * n }, (_, k) => {
        const r = (k / n) | 0,
          c = k % n;
        return (
          <rect
            key={k}
            x={c}
            y={r}
            width="1"
            height="1"
            fill={(r + c) % 2 ? "#d6e6f7" : "#f7fafd"}
          />
        );
      })}
      {p.map((c, r) => (
        <circle
          key={r}
          cx={c + 0.5}
          cy={r + 0.5}
          r="0.36"
          fill={bad.has(r) ? "#d9534f" : "#1f3a5c"}
        />
      ))}
    </svg>
  );
}
