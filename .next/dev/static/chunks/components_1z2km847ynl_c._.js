(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ExperimentDashboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProblemInsights$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProblemInsights.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const valid = (x)=>x.estado === "ok" && x.factible === true && x.dentro_presupuesto === true && x.objetivo != null && Number.isFinite(Number(x.objetivo));
const palette = {
    bt: "#2c64a0",
    sa: "#059669",
    ga: "#a855a4"
};
function LinePlot({ series, maximize, title }) {
    const W = 700, H = 248, l = 57, r = 17, t = 17, b = 35;
    const points = series.flatMap((s)=>s.points);
    if (!points.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-pastel-700",
        children: "No hay datos de convergencia para esta selección."
    }, void 0, false, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 15,
        columnNumber: 30
    }, this);
    const X = Math.max(1, ...points.map((p)=>p.x));
    const ys = points.map((p)=>p.y), mn = Math.min(...ys), mx = Math.max(...ys);
    const lo = mn === mx ? mn - 1 : mn, hi = mn === mx ? mx + 1 : mx;
    const x = (n)=>l + n / X * (W - l - r), y = (n)=>t + (hi - n) / (hi - lo) * (H - t - b);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: l,
                                    x2: W - r,
                                    y1: y(val),
                                    y2: y(val),
                                    stroke: "#d6e6f7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 22,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: l - 7,
                                    y: y(val) + 4,
                                    textAnchor: "end",
                                    fontSize: "11",
                                    fill: "#2c64a0",
                                    children: fmt(val, 1)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 22,
                                    columnNumber: 135
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 22,
                            columnNumber: 60
                        }, this);
                    }),
                    [
                        0,
                        .25,
                        .5,
                        .75,
                        1
                    ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x(q * X),
                                y: H - 12,
                                textAnchor: "middle",
                                fontSize: "11",
                                fill: "#2c64a0",
                                children: fmt(q * X, 0)
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 23,
                                columnNumber: 43
                            }, this)
                        }, q, false, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 23,
                            columnNumber: 32
                        }, this)),
                    series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: s.points.map((p)=>`${x(p.x)},${y(p.y)}`).join(" "),
                            fill: "none",
                            stroke: palette[s.key],
                            strokeWidth: "2.5",
                            strokeLinejoin: "round",
                            strokeLinecap: "round"
                        }, s.key, false, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 24,
                            columnNumber: 22
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: W / 2,
                        y: H - 1,
                        fontSize: "11",
                        textAnchor: "middle",
                        fill: "#2c64a0",
                        children: "Evaluaciones acumuladas"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 text-xs mt-1",
                children: series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-4 h-1",
                                style: {
                                    backgroundColor: palette[s.key]
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 27,
                                columnNumber: 125
                            }, this),
                            ALGORITHMS[s.key]
                        ]
                    }, s.key, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 27,
                        columnNumber: 71
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700 mt-2",
                children: [
                    "Mejor objetivo factible hasta cada evaluación. ",
                    maximize ? "Mayor es mejor." : "Menor es mejor.",
                    " No implica optimalidad demostrada."
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_c = LinePlot;
function BarCompare({ rows, field, label }) {
    const vals = rows.map((r)=>({
            name: ALGORITHMS[r.algoritmo] ?? r.algoritmo,
            val: median(r.runs.map((x)=>Number(x[field])).filter(Number.isFinite)),
            algo: r.algoritmo
        }));
    const max = Math.max(1, ...vals.map((x)=>x.val ?? 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            vals.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: x.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 35,
                                    columnNumber: 137
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: fmt(x.val)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 35,
                                    columnNumber: 158
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 35,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-pastel-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full",
                                style: {
                                    width: `${(x.val ?? 0) / max * 100}%`,
                                    backgroundColor: palette[x.algo] ?? "#2c64a0"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 35,
                                columnNumber: 228
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 35,
                            columnNumber: 193
                        }, this)
                    ]
                }, x.algo, true, {
                    fileName: "[project]/components/ExperimentDashboard.js",
                    lineNumber: 35,
                    columnNumber: 50
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700",
                children: [
                    label,
                    " (mediana de ejecuciones válidas dentro del presupuesto)."
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 35,
                columnNumber: 353
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
_c1 = BarCompare;
function Dashboard({ corridas, convergencia, lote }) {
    _s();
    const available = [
        ...new Set(corridas.map((x)=>x.problema))
    ];
    const [problem, setProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(available[0] ?? "mochila");
    const instances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[instances]": ()=>[
                ...new Set(corridas.filter({
                    "Dashboard.useMemo[instances]": (x)=>x.problema === problem
                }["Dashboard.useMemo[instances]"]).map({
                    "Dashboard.useMemo[instances]": (x)=>x.instancia
                }["Dashboard.useMemo[instances]"]))
            ].sort({
                "Dashboard.useMemo[instances]": (a, b)=>{
                    const A = corridas.find({
                        "Dashboard.useMemo[instances]": (x)=>x.instancia === a
                    }["Dashboard.useMemo[instances]"])?.tamano ?? 0, B = corridas.find({
                        "Dashboard.useMemo[instances]": (x)=>x.instancia === b
                    }["Dashboard.useMemo[instances]"])?.tamano ?? 0;
                    return A - B || a.localeCompare(b, undefined, {
                        numeric: true
                    });
                }
            }["Dashboard.useMemo[instances]"])
    }["Dashboard.useMemo[instances]"], [
        corridas,
        problem
    ]);
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const instance = instances.includes(chosen) ? chosen : instances[0];
    const selected = corridas.filter((x)=>x.problema === problem && x.instancia === instance);
    const seeds = [
        ...new Set(selected.map((x)=>x.semilla))
    ].sort((a, b)=>a - b);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(11);
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
            points: convergencia.filter((x)=>x.problema === problem && x.instancia === instance && x.algoritmo === group.algoritmo && x.semilla === selectedSeed && x.objetivo != null && x.evaluaciones != null && Number.isFinite(Number(x.objetivo)) && Number.isFinite(Number(x.evaluaciones))).sort((a, b)=>a.evaluaciones - b.evaluaciones).map((p)=>({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                ].map(([label, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-pastel-700",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 53,
                                columnNumber: 248
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-semibold mt-1",
                                children: fmt(n, 0)
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 53,
                                columnNumber: 298
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 53,
                        columnNumber: 209
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-lg",
                        children: "Seleccionar experimento"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 54,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm",
                                children: [
                                    "Problema",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field mt-2",
                                        value: problem,
                                        onChange: (e)=>{
                                            setProblem(e.target.value);
                                            setChosen("");
                                        },
                                        children: available.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p,
                                                children: NAMES[p] ?? p
                                            }, p, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 312
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 54,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 54,
                                columnNumber: 155
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm",
                                children: [
                                    "Instancia",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field mt-2",
                                        value: instance ?? "",
                                        onChange: (e)=>setChosen(e.target.value),
                                        children: instances.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: i,
                                                children: i
                                            }, i, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 525
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 54,
                                        columnNumber: 415
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 54,
                                columnNumber: 379
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm",
                                children: [
                                    "Semilla de convergencia",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field mt-2",
                                        value: selectedSeed ?? "",
                                        onChange: (e)=>setSeed(Number(e.target.value)),
                                        children: seeds.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 54,
                                                columnNumber: 748
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 54,
                                        columnNumber: 632
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 54,
                                columnNumber: 582
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 54,
                        columnNumber: 112
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 54,
                        columnNumber: 811
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 overflow-x-auto space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Resultados por algoritmo"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 55,
                        columnNumber: 62
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-pastel-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        "Algoritmo",
                                        "Corridas válidas",
                                        "Objetivo mediano",
                                        "Tiempo mediano (ms)",
                                        "Evaluaciones medianas",
                                        "Factibilidad válida"
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-3 font-semibold",
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/components/ExperimentDashboard.js",
                                            lineNumber: 55,
                                            columnNumber: 338
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 55,
                                    columnNumber: 206
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 55,
                                columnNumber: 173
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: summary.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-pastel-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: ALGORITHMS[g.algoritmo] ?? g.algoritmo
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 55,
                                                columnNumber: 487
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: [
                                                    g.good.length,
                                                    "/",
                                                    g.runs.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 55,
                                                columnNumber: 550
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: fmt(g.objective)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 55,
                                                columnNumber: 606
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: fmt(g.time)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 55,
                                                columnNumber: 649
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: fmt(g.evaluations, 0)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 55,
                                                columnNumber: 687
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: [
                                                    fmt(g.success, 1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 55,
                                                columnNumber: 734
                                            }, this)
                                        ]
                                    }, g.algoritmo, true, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 55,
                                        columnNumber: 426
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 55,
                                columnNumber: 403
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 55,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700",
                        children: "Los objetivos se comparan solo dentro de una misma instancia. No se confunde una solución factible con optimalidad demostrada."
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 55,
                        columnNumber: 801
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold mb-4",
                                children: "Tiempo de ejecución"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 56,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BarCompare, {
                                rows: byAlgo.map((x)=>({
                                        ...x,
                                        runs: x.good
                                    })),
                                field: "tiempo_ms",
                                label: "Tiempo en milisegundos"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 56,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 56,
                        columnNumber: 52
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold mb-4",
                                children: "Número de evaluaciones"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 56,
                                columnNumber: 277
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BarCompare, {
                                rows: byAlgo.map((x)=>({
                                        ...x,
                                        runs: x.good
                                    })),
                                field: "evaluaciones",
                                label: "Evaluaciones contabilizadas según cada algoritmo"
                            }, void 0, false, {
                                fileName: "[project]/components/ExperimentDashboard.js",
                                lineNumber: 56,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 56,
                        columnNumber: 250
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 56,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-lg mb-3",
                        children: "Curvas de convergencia"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 57,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinePlot, {
                        series: series,
                        maximize: maximize,
                        title: `Convergencia de ${NAMES[problem]} en ${instance}`
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 57,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700 mt-2",
                        children: "Los puntos proceden del historial exportado. Si un algoritmo solo registra mejoras, sus segmentos no representan evaluaciones intermedias observadas."
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 57,
                        columnNumber: 213
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 57,
                columnNumber: 5
            }, this),
            (problem === "grafos" || problem === "reinas") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Escalabilidad"
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 58,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-pastel-700",
                        children: "Mediana de tiempo (ms) para cada tamaño de problema, agregando las instancias del mismo tamaño; solo corridas factibles dentro del presupuesto."
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 58,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-pastel-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-left",
                                                children: "Tamaño"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExperimentDashboard.js",
                                                lineNumber: 58,
                                                columnNumber: 435
                                            }, this),
                                            byAlgo.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 text-right",
                                                    children: ALGORITHMS[g.algoritmo]
                                                }, g.algoritmo, false, {
                                                    fileName: "[project]/components/ExperimentDashboard.js",
                                                    lineNumber: 58,
                                                    columnNumber: 491
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExperimentDashboard.js",
                                        lineNumber: 58,
                                        columnNumber: 405
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 58,
                                    columnNumber: 398
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        ...new Set(corridas.filter((x)=>x.problema === problem).map((x)=>x.tamano))
                                    ].sort((a, b)=>a - b).map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-pastel-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: size
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ExperimentDashboard.js",
                                                    lineNumber: 58,
                                                    columnNumber: 746
                                                }, this),
                                                byAlgo.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 text-right",
                                                        children: fmt(median(corridas.filter((x)=>x.problema === problem && x.tamano === size && x.algoritmo === g.algoritmo && valid(x)).map((x)=>Number(x.tiempo_ms))))
                                                    }, g.algoritmo, false, {
                                                        fileName: "[project]/components/ExperimentDashboard.js",
                                                        lineNumber: 58,
                                                        columnNumber: 792
                                                    }, this))
                                            ]
                                        }, size, true, {
                                            fileName: "[project]/components/ExperimentDashboard.js",
                                            lineNumber: 58,
                                            columnNumber: 692
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ExperimentDashboard.js",
                                    lineNumber: 58,
                                    columnNumber: 585
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExperimentDashboard.js",
                            lineNumber: 58,
                            columnNumber: 364
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ExperimentDashboard.js",
                        lineNumber: 58,
                        columnNumber: 331
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 58,
                columnNumber: 48
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProblemInsights$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                corridas: corridas,
                problem: problem,
                instance: instance
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 59,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700",
                children: "Este panel es de solo lectura. Para actualizarlo, vuelve a ejecutar el módulo de experimentación y recarga esta página. Una corrida con error o fuera de presupuesto no se considera válida en las estadísticas de calidad."
            }, void 0, false, {
                fileName: "[project]/components/ExperimentDashboard.js",
                lineNumber: 60,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExperimentDashboard.js",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
_s(Dashboard, "9v3nKnfUmVRWvTGLUrcNcOBJngw=");
_c2 = Dashboard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LinePlot");
__turbopack_context__.k.register(_c1, "BarCompare");
__turbopack_context__.k.register(_c2, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProblemInsights.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemInsights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const labels = {
    bt: "Backtracking",
    sa: "Recocido simulado",
    ga: "Algoritmo genético"
};
const colors = {
    bt: "#2c64a0",
    sa: "#059669",
    ga: "#a855a4"
};
const fmt = (n, d = 2)=>n == null || !Number.isFinite(n) ? "—" : n.toLocaleString("es-MX", {
        maximumFractionDigits: d
    });
const median = (values)=>{
    const v = values.filter(Number.isFinite).sort((a, b)=>a - b);
    return v.length ? (v[v.length - 1 >> 1] + v[v.length >> 1]) / 2 : null;
};
const good = (r)=>r.estado === "ok" && r.dentro_presupuesto === true && r.factible === true && Number.isFinite(Number(r.objetivo));
const numeric = (v)=>v == null || v === "" ? null : Number.isFinite(Number(v)) ? Number(v) : null;
function Scatter({ rows, metric, title, description }) {
    const plotted = rows.filter((r)=>numeric(r[metric]) !== null);
    if (!plotted.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-pastel-700",
        children: "Sin datos registrados para esta métrica."
    }, void 0, false, {
        fileName: "[project]/components/ProblemInsights.js",
        lineNumber: 12,
        columnNumber: 29
    }, this);
    const W = 720, H = 254, L = 62, R = 22, T = 20, B = 45;
    const vals = plotted.map((r)=>Number(r[metric]));
    const lo = Math.min(...vals), hi = Math.max(...vals), span = Math.max(1e-9, hi - lo);
    const sy = (v)=>T + (hi - v) / span * (H - T - B);
    const algos = [
        "bt",
        "sa",
        "ga"
    ].filter((a)=>plotted.some((r)=>r.algoritmo === a));
    const sx = (a)=>L + (algos.indexOf(a) + .5) * (W - L - R) / algos.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-sm mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 18,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${W} ${H}`,
                role: "img",
                "aria-label": title,
                className: "w-full",
                children: [
                    [
                        0,
                        .25,
                        .5,
                        .75,
                        1
                    ].map((q, i)=>{
                        const v = lo + (hi - lo) * q, y = sy(v);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: L,
                                    x2: W - R,
                                    y1: y,
                                    y2: y,
                                    stroke: "#d6e6f7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 19,
                                    columnNumber: 82
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: L - 8,
                                    y: y + 4,
                                    textAnchor: "end",
                                    fontSize: "11",
                                    fill: "#2c64a0",
                                    children: fmt(v, 2)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 19,
                                    columnNumber: 136
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/ProblemInsights.js",
                            lineNumber: 19,
                            columnNumber: 71
                        }, this);
                    }),
                    plotted.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: sx(r.algoritmo) + (Number(r.semilla) % 7 - 3) * 4,
                            cy: sy(Number(r[metric])),
                            r: "4",
                            fill: colors[r.algoritmo] || "#2c64a0",
                            opacity: ".68",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: `${labels[r.algoritmo]} · semilla ${r.semilla}: ${fmt(Number(r[metric]))}`
                            }, void 0, false, {
                                fileName: "[project]/components/ProblemInsights.js",
                                lineNumber: 20,
                                columnNumber: 208
                            }, this)
                        }, `${r.algoritmo}-${r.semilla}-${i}`, false, {
                            fileName: "[project]/components/ProblemInsights.js",
                            lineNumber: 20,
                            columnNumber: 25
                        }, this)),
                    algos.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: sx(a),
                            y: H - 16,
                            textAnchor: "middle",
                            fontSize: "12",
                            fill: "#2c64a0",
                            children: a.toUpperCase()
                        }, a, false, {
                            fileName: "[project]/components/ProblemInsights.js",
                            lineNumber: 21,
                            columnNumber: 19
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 18,
                columnNumber: 70
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-pastel-700",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProblemInsights.js",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c = Scatter;
function ProblemInsights({ corridas, problem, instance }) {
    _s();
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProblemInsights.useMemo[rows]": ()=>corridas.filter({
                "ProblemInsights.useMemo[rows]": (r)=>r.problema === problem && r.instancia === instance
            }["ProblemInsights.useMemo[rows]"])
    }["ProblemInsights.useMemo[rows]"], [
        corridas,
        problem,
        instance
    ]);
    const all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProblemInsights.useMemo[all]": ()=>corridas.filter({
                "ProblemInsights.useMemo[all]": (r)=>r.problema === problem
            }["ProblemInsights.useMemo[all]"])
    }["ProblemInsights.useMemo[all]"], [
        corridas,
        problem
    ]);
    const valid = rows.filter(good), incomplete = rows.filter((r)=>r.estado === "ok" && r.dentro_presupuesto === true && !r.factible), outside = rows.filter((r)=>r.dentro_presupuesto !== true), errors = rows.filter((r)=>r.estado !== "ok");
    const byAlgo = [
        ...new Set(rows.map((r)=>r.algoritmo))
    ].map((a)=>({
            a,
            all: rows.filter((r)=>r.algoritmo === a),
            valid: valid.filter((r)=>r.algoritmo === a)
        }));
    const sizes = [
        ...new Set(all.map((r)=>r.tamano))
    ].sort((a, b)=>a - b);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: [
                            "Diagnóstico de ejecuciones · ",
                            instance
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 31,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-sm",
                        children: [
                            [
                                "Factibles y dentro del límite",
                                valid.length
                            ],
                            [
                                "Sin solución factible",
                                incomplete.length
                            ],
                            [
                                "Fuera de presupuesto",
                                outside.length
                            ],
                            [
                                "Errores",
                                errors.length
                            ]
                        ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-pastel-100 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-pastel-700",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProblemInsights.js",
                                        lineNumber: 32,
                                        columnNumber: 295
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-semibold mt-1",
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProblemInsights.js",
                                        lineNumber: 32,
                                        columnNumber: 345
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/components/ProblemInsights.js",
                                lineNumber: 32,
                                columnNumber: 248
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 32,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700",
                        children: '"Sin solución factible" no significa fallo del programa. Una corrida fuera de presupuesto puede conservar una solución factible, pero se excluye de las estadísticas principales.'
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 33,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 31,
                columnNumber: 3
            }, this),
            problem === "reinas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "N-Reinas · conflictos y tasa de éxito"
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 35,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-pastel-700",
                        children: "Una solución es factible únicamente cuando asigna las N reinas sin ataques. No equiparamos una ejecución terminada a una solución válida."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 35,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-pastel-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-left",
                                            children: "Algoritmo"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 35,
                                            columnNumber: 396
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-right",
                                            children: "Factibles"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 35,
                                            columnNumber: 440
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-right",
                                            children: "Sin solución"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 35,
                                            columnNumber: 485
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-2 text-right",
                                            children: "Tiempo mediano (ms)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 35,
                                            columnNumber: 533
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 35,
                                    columnNumber: 392
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProblemInsights.js",
                                lineNumber: 35,
                                columnNumber: 359
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: byAlgo.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-pastel-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2",
                                                children: labels[x.a]
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 35,
                                                columnNumber: 676
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right",
                                                children: [
                                                    x.valid.length,
                                                    "/",
                                                    x.all.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 35,
                                                columnNumber: 714
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right",
                                                children: x.all.filter((r)=>r.estado === "ok" && !r.factible).length
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 35,
                                                columnNumber: 781
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-2 text-right",
                                                children: fmt(median(x.valid.map((r)=>numeric(r.tiempo_ms))))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 35,
                                                columnNumber: 871
                                            }, this)
                                        ]
                                    }, x.a, true, {
                                        fileName: "[project]/components/ProblemInsights.js",
                                        lineNumber: 35,
                                        columnNumber: 623
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ProblemInsights.js",
                                lineNumber: 35,
                                columnNumber: 601
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 35,
                        columnNumber: 325
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 35,
                columnNumber: 24
            }, this),
            problem === "mochila" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Mochila 0/1 · valor, peso y óptimo demostrado"
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 36,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-pastel-700",
                        children: "Se maximiza el beneficio sujeto a la capacidad. Una coincidencia con el mejor valor observado no demuestra optimalidad por sí sola."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 36,
                        columnNumber: 154
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-pastel-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-left",
                                                children: "Algoritmo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 36,
                                                columnNumber: 432
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Valor mediano"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 36,
                                                columnNumber: 476
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Peso mediano"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 36,
                                                columnNumber: 525
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Óptimo demostrado"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 36,
                                                columnNumber: 573
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProblemInsights.js",
                                        lineNumber: 36,
                                        columnNumber: 428
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 36,
                                    columnNumber: 395
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: byAlgo.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-pastel-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: labels[x.a]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 36,
                                                    columnNumber: 714
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: fmt(median(x.valid.map((r)=>numeric(r.objetivo))))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 36,
                                                    columnNumber: 752
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: fmt(median(x.valid.map((r)=>numeric(r.peso))))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 36,
                                                    columnNumber: 838
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: [
                                                        x.valid.filter((r)=>r.optimo_demostrado === true).length,
                                                        "/",
                                                        x.valid.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 36,
                                                    columnNumber: 920
                                                }, this)
                                            ]
                                        }, x.a, true, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 36,
                                            columnNumber: 661
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 36,
                                    columnNumber: 639
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProblemInsights.js",
                            lineNumber: 36,
                            columnNumber: 361
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 36,
                        columnNumber: 328
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 36,
                columnNumber: 25
            }, this),
            problem === "grafos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Coloreado · colores y conflictos"
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 37,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-pastel-700",
                        children: "Se minimizan los colores solo entre coloraciones completas y sin conflictos. Cuatro colores no implica número cromático óptimo demostrado."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 37,
                        columnNumber: 140
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-pastel-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-left",
                                                children: "Algoritmo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 37,
                                                columnNumber: 425
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Colores iniciales"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 37,
                                                columnNumber: 469
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Colores finales"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 37,
                                                columnNumber: 522
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Mejoras medianas"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 37,
                                                columnNumber: 573
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-right",
                                                children: "Conflictos finales"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 37,
                                                columnNumber: 625
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProblemInsights.js",
                                        lineNumber: 37,
                                        columnNumber: 421
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 37,
                                    columnNumber: 388
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: byAlgo.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-pastel-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: labels[x.a]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 37,
                                                    columnNumber: 767
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: fmt(median(x.valid.map((r)=>numeric(r.valor_inicial))))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 37,
                                                    columnNumber: 805
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: fmt(median(x.valid.map((r)=>numeric(r.colores))))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 37,
                                                    columnNumber: 896
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: fmt(median(x.valid.map((r)=>numeric(r.mejoras))))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 37,
                                                    columnNumber: 981
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right",
                                                    children: fmt(median(x.valid.map((r)=>numeric(r.conflictos))))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 37,
                                                    columnNumber: 1066
                                                }, this)
                                            ]
                                        }, x.a, true, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 37,
                                            columnNumber: 714
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 37,
                                    columnNumber: 692
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProblemInsights.js",
                            lineNumber: 37,
                            columnNumber: 354
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 37,
                        columnNumber: 321
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 37,
                columnNumber: 24
            }, this),
            problem === "eggholder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Eggholder · variabilidad entre semillas"
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 38,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-pastel-700",
                        children: "Minimización continua; las corridas no demuestran un mínimo global. La dispersión entre semillas revela sensibilidad estocástica."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 38,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scatter, {
                        rows: valid,
                        metric: "objetivo",
                        title: "Valores finales por corrida",
                        description: "Cada punto representa una corrida válida; menor valor significa mejor resultado."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 38,
                        columnNumber: 322
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 38,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Dispersión por semilla"
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 39,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scatter, {
                        rows: valid,
                        metric: "tiempo_ms",
                        title: "Tiempo de ejecución por semilla (ms)",
                        description: "Se muestran únicamente corridas factibles dentro del presupuesto. Los puntos ligeramente desplazados permiten distinguir semillas repetidas."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 39,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 39,
                columnNumber: 3
            }, this),
            (problem === "grafos" || problem === "reinas") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Escalabilidad · tasa de factibilidad"
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 40,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-pastel-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2 text-left",
                                                children: "Tamaño"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProblemInsights.js",
                                                lineNumber: 40,
                                                columnNumber: 270
                                            }, this),
                                            byAlgo.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 text-right",
                                                    children: labels[x.a]
                                                }, x.a, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 40,
                                                    columnNumber: 326
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProblemInsights.js",
                                        lineNumber: 40,
                                        columnNumber: 266
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 40,
                                    columnNumber: 233
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-pastel-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: s
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProblemInsights.js",
                                                    lineNumber: 40,
                                                    columnNumber: 472
                                                }, this),
                                                byAlgo.map((x)=>{
                                                    const subs = all.filter((r)=>r.tamano === s && r.algoritmo === x.a);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 text-right",
                                                        children: [
                                                            fmt(subs.length ? 100 * subs.filter(good).length / subs.length : null, 1),
                                                            "%"
                                                        ]
                                                    }, x.a, true, {
                                                        fileName: "[project]/components/ProblemInsights.js",
                                                        lineNumber: 40,
                                                        columnNumber: 581
                                                    }, this);
                                                })
                                            ]
                                        }, s, true, {
                                            fileName: "[project]/components/ProblemInsights.js",
                                            lineNumber: 40,
                                            columnNumber: 421
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemInsights.js",
                                    lineNumber: 40,
                                    columnNumber: 400
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProblemInsights.js",
                            lineNumber: 40,
                            columnNumber: 199
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 40,
                        columnNumber: 166
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-pastel-700",
                        children: "La tasa combina validez de la solución y cumplimiento de presupuesto; no es una medida de optimalidad."
                    }, void 0, false, {
                        fileName: "[project]/components/ProblemInsights.js",
                        lineNumber: 40,
                        columnNumber: 726
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProblemInsights.js",
                lineNumber: 40,
                columnNumber: 46
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProblemInsights.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(ProblemInsights, "qIPPmuNZfBsPAubB4a3KY+OmVNQ=");
_c1 = ProblemInsights;
var _c, _c1;
__turbopack_context__.k.register(_c, "Scatter");
__turbopack_context__.k.register(_c1, "ProblemInsights");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=components_1z2km847ynl_c._.js.map