// Curvas de convergencia (mejor valor vs. progreso) para varias ejecuciones
export default function Chart({ series, label }) {
  const W = 560, H = 220, m = 40;
  const all = series.flat();
  if (!all.length) return <p className="text-sm text-pastel-700">Este algoritmo no genera curva de convergencia.</p>;
  const lo = Math.min(...all), hi = Math.max(...all), span = hi - lo || 1;
  const pts = (s) => s.map((v, i) => `${m + (i / Math.max(1, s.length - 1)) * (W - m - 10)},${10 + (1 - (v - lo) / span) * (H - 10 - 25)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-pastel-50 border border-pastel-200">
      <line x1={m} y1={10} x2={m} y2={H - 25} stroke="#b5d2ef" />
      <line x1={m} y1={H - 25} x2={W - 10} y2={H - 25} stroke="#b5d2ef" />
      <text x={4} y={18} fontSize="10" fill="#2c64a0">{hi.toFixed(1)}</text>
      <text x={4} y={H - 28} fontSize="10" fill="#2c64a0">{lo.toFixed(1)}</text>
      <text x={W / 2} y={H - 6} fontSize="10" textAnchor="middle" fill="#2c64a0">progreso de la búsqueda → ({label})</text>
      {series.map((s, i) => <polyline key={i} points={pts(s)} fill="none" stroke="#3b82c4" strokeOpacity={series.length > 1 ? 0.45 : 1} strokeWidth="1.5" />)}
    </svg>
  );
}
