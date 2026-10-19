module.exports = [
"[project]/components/ExperimentDashboard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const NAMES = {
    reinas: "N-Reinas",
    mochila: "Mochila 0/1",
    grafos: "Coloreado de grafos",
    eggholder: "Eggholder"
};
const ALGORITHMS = {
    bt: "Backtracking",
    sa: "Recocido simulado",
    ga: "Algoritmo genético"
};
const fmt = (n, digits = 2)=>n == null || !Number.isFinite(Number(n)) ? "—" : Number(n).toLocaleString("es-MX", {
        maximumFractionDigits: digits
    });
const median = (xs)=>{
    const a = xs.filter(Number.isFinite).sort((x, y)=>x - y);
    return a.length ? (a[Math.floor((a.length - 1) / 2)] + a[Math.floor(a.length / 2)]) / 2 : null;
};
const valid = (x)=>x.estado === "ok" && x.factible === true && x.dentro_presupuesto === true && Number.isFinite(Number(x.objetivo));
const palette = {
    bt: "#2c64a0",
    sa: "#059669",
    ga: "#a855a4"
};
function LinePlot({ series, maximize, title }) {
    const W = 700, H = 248, l = 57, r = 17, t = 17, b = 35;
    const points = series.flatMap((s)=>s.points);
    if (!points.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-pastel-700",
        children: "No hay datos de convergencia para esta selección."
    }, void 0, false, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 14,
        columnNumber: 30
    }, this);
    const X = Math.max(1, ...points.map((p)=>p.x));
    const ys = points.map((p)=>p.y), mn = Math.min(...ys), mx = Math.max(...ys);
    const lo = mn === mx ? mn - 1 : mn, hi = mn === mx ? mx + 1 : mx;
    const x = (n)=>l + n / X * (W - l - r), y = (n)=>t + (hi - n) / (hi - lo) * (H - t - b);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                role: "img",
                "aria-label": title,
                className: "w-full",
                viewBox: `0 0 ${W} ${H}`,
                children: [
                    [
                        0,
                        1,
                        2,
                        3,
                        4
                    ].map((i)=>{
                        const val = lo + (hi - lo) * i / 4;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: l,
                                    x2: W - r,
                                    y1: y(val),
                                    y2: y(val),
                                    stroke: "#d6e6f7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 21,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: l - 7,
                                    y: y(val) + 4,
                                    textAnchor: "end",
                                    fontSize: "11",
                                    fill: "#2c64a0",
                                    children: fmt(val, 1)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 21,
                                    columnNumber: 135
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 21,
                            columnNumber: 60
                        }, this);
                    }),
                    [
                        0,
                        .25,
                        .5,
                        .75,
                        1
                    ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x(q * X),
                                y: H - 12,
                                textAnchor: "middle",
                                fontSize: "11",
                                fill: "#2c64a0",
                                children: fmt(q * X, 0)
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 22,
                                columnNumber: 43
                            }, this)
                        }, q, false, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 22,
                            columnNumber: 32
                        }, this)),
                    series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: s.points.map((p)=>`${x(p.x)},${y(p.y)}`).join(" "),
                            fill: "none",
                            stroke: palette[s.key],
                            strokeWidth: "2.5",
                            strokeLinejoin: "round",
                            strokeLinecap: "round"
                        }, s.key, false, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 23,
                            columnNumber: 22
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: W / 2,
                        y: H - 1,
                        fontSize: "11",
                        textAnchor: "middle",
                        fill: "#2c64a0",
                        children: "Evaluaciones acumuladas"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 text-xs mt-1",
                children: series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-4 h-1",
                                style: {
                                    backgroundColor: palette[s.key]
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 26,
                                columnNumber: 125
                            }, this),
                            ALGORITHMS[s.key]
                        ]
                    }, s.key, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 26,
                        columnNumber: 71
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700 mt-2",
                children: [
                    "Mejor objetivo factible hasta cada evaluación. ",
                    maximize ? "Mayor es mejor." : "Menor es mejor.",
                    " No implica optimalidad demostrada."
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 27,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function BarCompare({ rows, field, label }) {
    const vals = rows.map((r)=>({
            name: ALGORITHMS[r.algoritmo] ?? r.algoritmo,
            val: median(r.runs.map((x)=>Number(x[field])).filter(Number.isFinite)),
            algo: r.algoritmo
        }));
    const max = Math.max(1, ...vals.map((x)=>x.val ?? 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            vals.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: x.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 34,
                                    columnNumber: 137
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: fmt(x.val)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 34,
                                    columnNumber: 158
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 34,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-pastel-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full",
                                style: {
                                    width: `${(x.val ?? 0) / max * 100}%`,
                                    backgroundColor: palette[x.algo] ?? "#2c64a0"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 34,
                                columnNumber: 228
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 34,
                            columnNumber: 193
                        }, this)
                    ]
                }, x.algo, true, {
                    fileName: "[project]/components/ExperimentDashboard.js",
                    lineNumber: 34,
                    columnNumber: 50
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700",
                children: [
                    label,
                    " (mediana de ejecuciones válidas dentro del presupuesto)."
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 34,
                columnNumber: 353
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
function Dashboard({ corridas, convergencia, lote }) {
    const available = [
        ...new Set(corridas.map((x)=>x.problema))
    ];
    const [problem, setProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(available[0] ?? "mochila");
    const instances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...new Set(corridas.filter((x)=>x.problema === problem).map((x)=>x.instancia))
        ].sort((a, b)=>{
            const A = corridas.find((x)=>x.instancia === a)?.tamano ?? 0, B = corridas.find((x)=>x.instancia === b)?.tamano ?? 0;
            return A - B || a.localeCompare(b, undefined, {
                numeric: true
            });
        }), [
        corridas,
        problem
    ]);
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const instance = instances.includes(chosen) ? chosen : instances[0];
    const selected = corridas.filter((x)=>x.problema === problem && x.instancia === instance);
    const seeds = [
        ...new Set(selected.map((x)=>x.semilla))
    ].sort((a, b)=>a - b);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(11);
    const selectedSeed = seeds.includes(seed) ? seed : seeds[0];
    const byAlgo = [
        ...new Set(selected.map((x)=>x.algoritmo))
    ].map((algoritmo)=>({
            algoritmo,
            runs: selected.filter((x)=>x.algoritmo === algoritmo),
            good: selected.filter((x)=>x.algoritmo === algoritmo && valid(x))
        }));
    const series = byAlgo.map((group)=>({
            key: group.algoritmo,
            points: convergencia.filter((x)=>x.problema === problem && x.instancia === instance && x.algoritmo === group.algoritmo && x.semilla === selectedSeed && Number.isFinite(Number(x.objetivo)) && Number.isFinite(Number(x.evaluaciones))).sort((a, b)=>a.evaluaciones - b.evaluaciones).map((p)=>({
                    x: Number(p.evaluaciones),
                    y: Number(p.objetivo)
                }))
        }));
    const total = corridas.length, ok = corridas.filter(valid).length, failed = corridas.filter((x)=>x.estado !== "ok").length, outside = corridas.filter((x)=>x.dentro_presupuesto !== true).length;
    const maximize = problem === "mochila";
    const summary = byAlgo.map((g)=>({
            ...g,
            objective: median(g.good.map((x)=>Number(x.objetivo))),
            time: median(g.good.map((x)=>Number(x.tiempo_ms))),
            evaluations: median(g.good.map((x)=>Number(x.evaluaciones))),
            success: g.runs.length ? 100 * g.good.length / g.runs.length : 0
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                children: [
                    [
                        "Corridas registradas",
                        total
                    ],
                    [
                        "Válidas dentro del presupuesto",
                        ok
                    ],
                    [
                        "Fuera de presupuesto",
                        outside
                    ],
                    [
                        "Con errores",
                        failed
                    ]
                ].map(([label, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-pastel-700",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 52,
                                columnNumber: 248
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-semibold mt-1",
                                children: fmt(n, 0)
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 52,
                                columnNumber: 298
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 52,
                        columnNumber: 209
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 52,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-lg",
                        children: "Seleccionar experimento"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 53,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm",
                                children: [
                                    "Problema",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field mt-2",
                                        value: problem,
                                        onChange: (e)=>{
                                            setProblem(e.target.value);
                                            setChosen("");
                                        },
                                        children: available.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p,
                                                children: NAMES[p] ?? p
                                            }, p, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 53,
                                                columnNumber: 312
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 53,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 53,
                                columnNumber: 155
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm",
                                children: [
                                    "Instancia",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field mt-2",
                                        value: instance ?? "",
                                        onChange: (e)=>setChosen(e.target.value),
                                        children: instances.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: i,
                                                children: i
                                            }, i, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 53,
                                                columnNumber: 525
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 53,
                                        columnNumber: 415
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 53,
                                columnNumber: 379
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm",
                                children: [
                                    "Semilla de convergencia",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field mt-2",
                                        value: selectedSeed ?? "",
                                        onChange: (e)=>setSeed(Number(e.target.value)),
                                        children: seeds.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 53,
                                                columnNumber: 748
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 53,
                                        columnNumber: 632
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 53,
                                columnNumber: 582
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 53,
                        columnNumber: 112
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700",
                        children: [
                            "Lote: ",
                            lote,
                            " · ",
                            selected.length,
                            " corridas para la instancia elegida"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 53,
                        columnNumber: 811
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 overflow-x-auto space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Resultados por algoritmo"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 54,
                        columnNumber: 62
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-pastel-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        "Algoritmo",
                                        "Corridas válidas",
                                        "Objetivo mediano",
                                        "Tiempo mediano (ms)",
                                        "Evaluaciones medianas",
                                        "Factibilidad válida"
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-3 font-semibold",
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/components/ExperimentDashboard.js",
                                            lineNumber: 54,
                                            columnNumber: 338
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 54,
                                    columnNumber: 206
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 54,
                                columnNumber: 173
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: summary.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-pastel-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: ALGORITHMS[g.algoritmo] ?? g.algoritmo
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 487
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: [
                                                    g.good.length,
                                                    "/",
                                                    g.runs.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 550
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: fmt(g.objective)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 606
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: fmt(g.time)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 649
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: fmt(g.evaluations, 0)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 687
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: [
                                                    fmt(g.success, 1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 734
                                            }, this)
                                        ]
                                    }, g.algoritmo, true, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 54,
                                        columnNumber: 426
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 54,
                                columnNumber: 403
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 54,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700",
                        children: "Los objetivos se comparan solo dentro de una misma instancia. No se confunde una solución factible con optimalidad demostrada."
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 54,
                        columnNumber: 801
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold mb-4",
                                children: "Tiempo de ejecución"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 55,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BarCompare, {
                                rows: byAlgo.map((x)=>({
                                        ...x,
                                        runs: x.good
                                    })),
                                field: "tiempo_ms",
                                label: "Tiempo en milisegundos"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 55,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 55,
                        columnNumber: 52
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold mb-4",
                                children: "Número de evaluaciones"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 55,
                                columnNumber: 277
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BarCompare, {
                                rows: byAlgo.map((x)=>({
                                        ...x,
                                        runs: x.good
                                    })),
                                field: "evaluaciones",
                                label: "Evaluaciones contabilizadas según cada algoritmo"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 55,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 55,
                        columnNumber: 250
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-lg mb-3",
                        children: "Curvas de convergencia"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 56,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinePlot, {
                        series: series,
                        maximize: maximize,
                        title: `Convergencia de ${NAMES[problem]} en ${instance}`
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 56,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700 mt-2",
                        children: "Los puntos proceden del historial exportado. Si un algoritmo solo registra mejoras, sus segmentos no representan evaluaciones intermedias observadas."
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 56,
                        columnNumber: 213
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 56,
                columnNumber: 5
            }, this),
            (problem === "grafos" || problem === "reinas") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Escalabilidad"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 57,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-pastel-700",
                        children: "Mediana de tiempo (ms) para cada tamaño de problema, agregando las instancias del mismo tamaño; solo corridas factibles dentro del presupuesto."
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 57,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-pastel-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-left",
                                                children: "Tamaño"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 57,
                                                columnNumber: 435
                                            }, this),
                                            byAlgo.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 text-right",
                                                    children: ALGORITHMS[g.algoritmo]
                                                }, g.algoritmo, false, {
                                                    fileName: "[project]/components/ExperimentDashboard.js",
                                                    lineNumber: 57,
                                                    columnNumber: 491
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 57,
                                        columnNumber: 405
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 57,
                                    columnNumber: 398
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        ...new Set(corridas.filter((x)=>x.problema === problem).map((x)=>x.tamano))
                                    ].sort((a, b)=>a - b).map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-pastel-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: size
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ExperimentDashboard.js",
                                                    lineNumber: 57,
                                                    columnNumber: 746
                                                }, this),
                                                byAlgo.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 text-right",
                                                        children: fmt(median(corridas.filter((x)=>x.problema === problem && x.tamano === size && x.algoritmo === g.algoritmo && valid(x)).map((x)=>Number(x.tiempo_ms))))
                                                    }, g.algoritmo, false, {
                                                        fileName: "[project]/components/ExperimentDashboard.js",
                                                        lineNumber: 57,
                                                        columnNumber: 792
                                                    }, this))
                                            ]
                                        }, size, true, {
                                            fileName: "[project]/components/ExperimentDashboard.js",
                                            lineNumber: 57,
                                            columnNumber: 692
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 57,
                                    columnNumber: 585
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 57,
                            columnNumber: 364
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 57,
                        columnNumber: 331
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 57,
                columnNumber: 48
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700",
                children: "Este panel es de solo lectura. Para actualizarlo, vuelve a ejecutar el módulo de experimentación y recarga esta página. Una corrida con error o fuera de presupuesto no se considera válida en las estadísticas de calidad."
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 58,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=components_ExperimentDashboard_0dfuu5ied_o38.js.map