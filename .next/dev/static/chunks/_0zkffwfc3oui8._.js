(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/problema/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Board.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const mean = (a)=>a.reduce((s, v)=>s + v, 0) / a.length;
const std = (a)=>Math.sqrt(mean(a.map((v)=>(v - mean(a)) ** 2)));
function ProblemPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const prob = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEMS"][id];
    const algoIds = Object.keys(prob?.algos ?? {});
    const [algoId, setAlgoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(algoIds[0]);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(prob?.sizes?.[0]);
    const [runs, setRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [vals, setVals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [out, setOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const algo = prob?.algos[algoId];
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProblemPage.useMemo[params]": ()=>Object.fromEntries((algo?.params ?? []).map({
                "ProblemPage.useMemo[params]": (p)=>[
                        p.key,
                        Number(vals[`${algoId}.${p.key}`] ?? p.def)
                    ]
            }["ProblemPage.useMemo[params]"]))
    }["ProblemPage.useMemo[params]"], [
        algo,
        algoId,
        vals
    ]);
    if (!prob) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8",
        children: [
            "Problema no encontrado.",
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "underline",
                children: "Volver"
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/problema/[id]/page.js",
        lineNumber: 38,
        columnNumber: 7
    }, this);
    function run() {
        setBusy(true);
        setTimeout(()=>{
            const n = algo.deterministic ? 1 : runs, rows = [];
            for(let i = 0; i < n; i++){
                const s = seed + i, t0 = performance.now();
                const r = algo.run(size, params, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeRng"])(s));
                rows.push({
                    run: i + 1,
                    seed: s,
                    ms: performance.now() - t0,
                    ...r
                });
            }
            setOut({
                rows,
                algoName: algo.name,
                size,
                params
            });
            setBusy(false);
        }, 30);
    }
    function csv() {
        const head = "problema,algoritmo,instancia,ejecucion,semilla,parametros,valor,factible,iteraciones,evaluaciones,tiempo_ms";
        const lines = out.rows.map((r)=>[
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
                r.ms.toFixed(2)
            ].join(","));
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([
            [
                head,
                ...lines
            ].join("\n")
        ], {
            type: "text/csv"
        }));
        a.download = `${id}_${algoId}_${out.size}.csv`;
        a.click();
    }
    const done = out?.rows.filter((r)=>r.value !== null) ?? [];
    const valid = done.filter((r)=>r.feasible);
    const best = valid.length ? valid.reduce((b, r)=>{
        if (prob.objective === "max") {
            return r.value > b.value ? r : b;
        }
        return r.value < b.value ? r : b;
    }) : null;
    const succ = out ? out.rows.filter((r)=>id === "eggholder" ? r.value < prob.globalMin + 1 : r.feasible).length : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-6xl mx-auto px-6 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-sm text-pastel-700 underline",
                children: "← Todos los problemas"
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold mt-2",
                children: prob.title
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-pastel-700 text-sm",
                children: prob.desc
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            !algoIds.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel p-6 mt-6",
                children: [
                    "Este problema aún no tiene algoritmos integrados. Agrega sus funciones en ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "lib/"
                    }, void 0, false, {
                        fileName: "[project]/app/problema/[id]/page.js",
                        lineNumber: 118,
                        columnNumber: 14
                    }, this),
                    " y regístralas en ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "lib/registry.js"
                    }, void 0, false, {
                        fileName: "[project]/app/problema/[id]/page.js",
                        lineNumber: 118,
                        columnNumber: 49
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 mt-6 lg:grid-cols-[320px_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "panel p-5 space-y-5 self-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold mb-2",
                                        children: "Algoritmo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: algoIds.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setAlgoId(k);
                                                    setOut(null);
                                                },
                                                className: `w-full text-left border p-3 ${k === algoId ? "border-pastel-600 bg-pastel-100" : "border-pastel-200 hover:bg-pastel-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-medium",
                                                        children: prob.algos[k].name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-xs text-pastel-700",
                                                        children: prob.algos[k].note
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, k, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium",
                                        children: prob.sizeLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-1",
                                        children: prob.sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSize(s),
                                                className: `flex-1 border py-1 ${s === size ? "border-pastel-600 bg-pastel-100" : "border-pastel-200"}`,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    !algo.deterministic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm",
                                                children: [
                                                    "Ejecuciones",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "field mt-1",
                                                        type: "number",
                                                        min: "1",
                                                        max: "100",
                                                        value: runs,
                                                        onChange: (e)=>setRuns(+e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm",
                                                children: [
                                                    "Semilla base",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "field mt-1",
                                                        type: "number",
                                                        value: seed,
                                                        onChange: (e)=>setSeed(+e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    algo.params.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm",
                                            children: [
                                                p.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "field mt-1",
                                                    type: "number",
                                                    step: p.step,
                                                    value: vals[`${algoId}.${p.key}`] ?? p.def,
                                                    onChange: (e)=>setVals({
                                                            ...vals,
                                                            [`${algoId}.${p.key}`]: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/problema/[id]/page.js",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.key, true, {
                                            fileName: "[project]/app/problema/[id]/page.js",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: run,
                                disabled: busy,
                                className: "w-full bg-pastel-600 hover:bg-pastel-700 text-white py-2 font-medium disabled:opacity-60",
                                children: busy ? "Ejecutando…" : "Ejecutar"
                            }, void 0, false, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/problema/[id]/page.js",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: [
                            !out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel p-6 text-pastel-700",
                                children: "Configura los parámetros y pulsa Ejecutar. Cada ejecución usa una semilla distinta (base + índice) para poder reproducirla."
                            }, void 0, false, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this),
                            out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-semibold",
                                                        children: [
                                                            "Resumen · ",
                                                            out.algoName,
                                                            " · ",
                                                            out.size
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: csv,
                                                        className: "text-sm border border-pastel-600 text-pastel-700 px-3 py-1 hover:bg-pastel-100",
                                                        children: "Descargar CSV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm",
                                                children: [
                                                    [
                                                        "Mejor " + prob.metric,
                                                        best ? best.value.toFixed(id === "eggholder" ? 4 : 0) : "—"
                                                    ],
                                                    [
                                                        "Media ± desv.",
                                                        done.length ? `${mean(done.map((r)=>r.value)).toFixed(2)} ± ${std(done.map((r)=>r.value)).toFixed(2)}` : "—"
                                                    ],
                                                    [
                                                        "Éxito",
                                                        `${succ}/${out.rows.length}`
                                                    ],
                                                    [
                                                        "Evaluaciones (prom.)",
                                                        Math.round(mean(out.rows.map((r)=>r.evals))).toLocaleString()
                                                    ],
                                                    [
                                                        "Tiempo (prom.)",
                                                        `${mean(out.rows.map((r)=>r.ms)).toFixed(1)} ms`
                                                    ]
                                                ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-pastel-50 border border-pastel-200 p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-pastel-700",
                                                                children: a
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 262,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: b
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 263,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, a, true, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 258,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this),
                                            id === "nreinas" && succ === 0 && algo.deterministic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-red-700",
                                                children: "Se alcanzó el límite de nodos sin hallar solución."
                                            }, void 0, false, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-6 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-semibold mb-3",
                                                        children: "Convergencia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        series: out.rows.map((r)=>r.history),
                                                        label: prob.metric
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-semibold mb-3",
                                                        children: "Mejor solución"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this),
                                                    best?.solution && id === "mochila" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pastel-700",
                                                                        children: "Valor total:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 287,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-lg",
                                                                        children: best.totalValue
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 288,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 286,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pastel-700",
                                                                        children: "Peso utilizado:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 293,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold",
                                                                        children: [
                                                                            best.totalWeight,
                                                                            " / ",
                                                                            best.capacity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 296,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 292,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-pastel-700 mb-2",
                                                                        children: "Objetos seleccionados:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 301,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: best.solution.map((selected, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `border px-3 py-2 ${selected ? "border-pastel-600 bg-pastel-100" : "border-pastel-200 bg-pastel-50"}`,
                                                                                children: [
                                                                                    "Objeto ",
                                                                                    index + 1,
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "block text-xs",
                                                                                        children: selected ? "Seleccionado" : "No seleccionado"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                                        lineNumber: 315,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                                lineNumber: 306,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 304,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 300,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-pastel-700",
                                                                children: best.optimal ? "Optimalidad demostrada" : "Mejor solución encontrada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 324,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 285,
                                                        columnNumber: 23
                                                    }, this),
                                                    best?.solution && id === "nreinas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        p: best.solution
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 333,
                                                        columnNumber: 23
                                                    }, this),
                                                    best?.solution && id === "eggholder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            "x = ",
                                                            best.solution[0].toFixed(4),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 338,
                                                                columnNumber: 25
                                                            }, this),
                                                            "y = ",
                                                            best.solution[1].toFixed(4),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 339,
                                                                columnNumber: 25
                                                            }, this),
                                                            "f = ",
                                                            best.value.toFixed(4),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-pastel-700",
                                                                children: [
                                                                    "Óptimo global: f(512, 404.2319) = ",
                                                                    prob.globalMin
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 341,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 336,
                                                        columnNumber: 23
                                                    }, this),
                                                    !best?.solution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-pastel-700",
                                                        children: "Sin solución."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 347,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel p-5 overflow-x-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-semibold mb-3",
                                                children: "Ejecuciones"
                                            }, void 0, false, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "text-pastel-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                "#",
                                                                "Semilla",
                                                                prob.metric,
                                                                "Factible",
                                                                "Iter.",
                                                                "Evaluaciones",
                                                                "ms"
                                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "py-1 pr-4 font-medium",
                                                                    children: h
                                                                }, h, false, {
                                                                    fileName: "[project]/app/problema/[id]/page.js",
                                                                    lineNumber: 365,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/problema/[id]/page.js",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: out.rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-t border-pastel-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-1 pr-4",
                                                                        children: r.run
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 374,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.seed
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 375,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.value === null ? "—" : r.value.toFixed(id === "eggholder" ? 4 : 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 376,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.feasible ? "Sí" : "No"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 381,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.iters
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 382,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.evals
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 383,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: r.ms.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 384,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, r.run, true, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 373,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/problema/[id]/page.js",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/problema/[id]/page.js",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(ProblemPage, "iY5//w5Y6NJjzhJVq0LYBYKeHO8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProblemPage;
var _c;
__turbopack_context__.k.register(_c, "ProblemPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Board.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nqueens.js [app-client] (ecmascript)");
;
;
function Board({ p }) {
    const n = p.length;
    const bad = new Set();
    for(let i = 0; i < n; i++)for(let j = i + 1; j < n; j++)if (Math.abs(i - j) === Math.abs(p[i] - p[j])) {
        bad.add(i);
        bad.add(j);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${n} ${n}`,
        className: "w-full max-w-md border border-pastel-300",
        children: [
            Array.from({
                length: n * n
            }, (_, k)=>{
                const r = k / n | 0, c = k % n;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: c,
                    y: r,
                    width: "1",
                    height: "1",
                    fill: (r + c) % 2 ? "#d6e6f7" : "#f7fafd"
                }, k, false, {
                    fileName: "[project]/components/Board.js",
                    lineNumber: 21,
                    columnNumber: 11
                }, this);
            }),
            p.map((c, r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: c + 0.5,
                    cy: r + 0.5,
                    r: "0.36",
                    fill: bad.has(r) ? "#d9534f" : "#1f3a5c"
                }, r, false, {
                    fileName: "[project]/components/Board.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Board.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Board;
var _c;
__turbopack_context__.k.register(_c, "Board");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Chart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Curvas de convergencia (mejor valor vs. progreso) para varias ejecuciones
__turbopack_context__.s([
    "default",
    ()=>Chart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Chart({ series, label }) {
    const W = 560, H = 220, m = 40;
    const all = series.flat();
    if (!all.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-pastel-700",
        children: "Este algoritmo no genera curva de convergencia."
    }, void 0, false, {
        fileName: "[project]/components/Chart.js",
        lineNumber: 9,
        columnNumber: 7
    }, this);
    const lo = Math.min(...all), hi = Math.max(...all), span = hi - lo || 1;
    const pts = (s)=>s.map((v, i)=>`${m + i / Math.max(1, s.length - 1) * (W - m - 10)},${10 + (1 - (v - lo) / span) * (H - 10 - 25)}`).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${W} ${H}`,
        className: "w-full bg-pastel-50 border border-pastel-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: m,
                y1: 10,
                x2: m,
                y2: H - 25,
                stroke: "#b5d2ef"
            }, void 0, false, {
                fileName: "[project]/components/Chart.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: m,
                y1: H - 25,
                x2: W - 10,
                y2: H - 25,
                stroke: "#b5d2ef"
            }, void 0, false, {
                fileName: "[project]/components/Chart.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 4,
                y: 18,
                fontSize: "10",
                fill: "#2c64a0",
                children: hi.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/components/Chart.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 4,
                y: H - 28,
                fontSize: "10",
                fill: "#2c64a0",
                children: lo.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/components/Chart.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: W / 2,
                y: H - 6,
                fontSize: "10",
                textAnchor: "middle",
                fill: "#2c64a0",
                children: [
                    "progreso de la búsqueda → (",
                    label,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chart.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            series.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: pts(s),
                    fill: "none",
                    stroke: "#3b82c4",
                    strokeOpacity: series.length > 1 ? 0.45 : 1,
                    strokeWidth: "1.5"
                }, i, false, {
                    fileName: "[project]/components/Chart.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chart.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Chart;
var _c;
__turbopack_context__.k.register(_c, "Chart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/knapsack-instances.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Instancias auténticas del CSV de Kaggle.
// Archivo generado automáticamente.
__turbopack_context__.s([
    "KNAPSACK_INSTANCES",
    ()=>KNAPSACK_INSTANCES,
    "KNAPSACK_SOURCE_SHA256",
    ()=>KNAPSACK_SOURCE_SHA256
]);
const KNAPSACK_SOURCE_SHA256 = "55b98b9d9d2fc743100f8e48f168e0504b39bee18aad37712d3ccb9d516f044c";
const KNAPSACK_INSTANCES = [
    {
        "id": "kaggle_opcion1_fila_0",
        "pesos": [
            46.0,
            40.0,
            42.0,
            38.0,
            10.0
        ],
        "valores": [
            12.0,
            19.0,
            19.0,
            15.0,
            8.0
        ],
        "capacidad": 40.0
    },
    {
        "id": "kaggle_opcion1_fila_1",
        "pesos": [
            11.0,
            31.0,
            4.0,
            6.0,
            7.0
        ],
        "valores": [
            2.0,
            8.0,
            18.0,
            16.0,
            3.0
        ],
        "capacidad": 64.0
    },
    {
        "id": "kaggle_opcion1_fila_2",
        "pesos": [
            32.0,
            49.0,
            27.0,
            37.0,
            24.0
        ],
        "valores": [
            19.0,
            16.0,
            16.0,
            4.0,
            1.0
        ],
        "capacidad": 87.0
    },
    {
        "id": "kaggle_opcion1_fila_3",
        "pesos": [
            20.0,
            35.0,
            22.0,
            23.0,
            16.0
        ],
        "valores": [
            19.0,
            17.0,
            19.0,
            9.0,
            1.0
        ],
        "capacidad": 21.0
    },
    {
        "id": "kaggle_opcion1_fila_4",
        "pesos": [
            7.0,
            12.0,
            19.0,
            13.0,
            20.0
        ],
        "valores": [
            10.0,
            11.0,
            18.0,
            15.0,
            5.0
        ],
        "capacidad": 50.0
    },
    {
        "id": "kaggle_opcion1_fila_5",
        "pesos": [
            27.0,
            10.0,
            25.0,
            25.0,
            7.0
        ],
        "valores": [
            13.0,
            19.0,
            7.0,
            16.0,
            3.0
        ],
        "capacidad": 66.0
    },
    {
        "id": "kaggle_opcion1_fila_6",
        "pesos": [
            21.0,
            2.0,
            33.0,
            45.0,
            26.0
        ],
        "valores": [
            1.0,
            14.0,
            10.0,
            6.0,
            13.0
        ],
        "capacidad": 80.0
    },
    {
        "id": "kaggle_opcion1_fila_7",
        "pesos": [
            37.0,
            27.0,
            39.0,
            14.0,
            25.0
        ],
        "valores": [
            18.0,
            7.0,
            15.0,
            4.0,
            13.0
        ],
        "capacidad": 35.0
    },
    {
        "id": "kaggle_opcion1_fila_8",
        "pesos": [
            1.0,
            48.0,
            4.0,
            23.0,
            39.0
        ],
        "valores": [
            9.0,
            4.0,
            10.0,
            16.0,
            12.0
        ],
        "capacidad": 51.0
    },
    {
        "id": "kaggle_opcion1_fila_9",
        "pesos": [
            4.0,
            3.0,
            22.0,
            9.0,
            32.0
        ],
        "valores": [
            14.0,
            6.0,
            3.0,
            17.0,
            8.0
        ],
        "capacidad": 53.0
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/eggholder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GLOBAL_MIN",
    ()=>GLOBAL_MIN,
    "HI",
    ()=>HI,
    "LO",
    ()=>LO,
    "annealing",
    ()=>annealing,
    "f",
    ()=>f,
    "genetic",
    ()=>genetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rng.js [app-client] (ecmascript)");
;
const LO = -512, HI = 512, GLOBAL_MIN = -959.6407;
const f = ([x, y])=>-(y + 47) * Math.sin(Math.sqrt(Math.abs(x / 2 + y + 47))) - x * Math.sin(Math.sqrt(Math.abs(x - (y + 47))));
const clip = (v)=>Math.min(HI, Math.max(LO, v));
const sample = (h, max)=>h.length < max ? h : h.filter((_, i)=>i % Math.ceil(h.length / max) === 0);
const rpt = (r)=>[
        LO + r() * (HI - LO),
        LO + r() * (HI - LO)
    ];
function annealing(_, params, rnd) {
    const { T0, alpha, Tmin, maxIter, step } = params;
    let x = rpt(rnd), cur = f(x), T = T0, best = x, bestV = cur, evals = 1;
    const h = [];
    for(let it = 0; it < maxIter; it++){
        const s = Math.max(1, step * (T / T0));
        const y = [
            clip(x[0] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gauss"])(rnd) * s),
            clip(x[1] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gauss"])(rnd) * s)
        ];
        const v = f(y);
        evals++;
        const d = v - cur;
        if (d <= 0 || rnd() < Math.exp(-d / T)) {
            x = y;
            cur = v;
            if (v < bestV) {
                bestV = v;
                best = y;
            }
        }
        T = Math.max(Tmin, T * alpha);
        if (it % 20 === 0) h.push(bestV);
    }
    h.push(bestV);
    return {
        solution: best,
        value: bestV,
        feasible: true,
        evals,
        iters: maxIter,
        history: sample(h, 200)
    };
}
function genetic(_, params, rnd) {
    const { pop: P, gens, pc, pm, elit, tk, blx, sigma } = params;
    let pop = Array.from({
        length: P
    }, ()=>rpt(rnd)), fit = pop.map(f), evals = P;
    const h = [];
    const tour = ()=>{
        let b = rnd() * P | 0;
        for(let k = 1; k < tk; k++){
            const c = rnd() * P | 0;
            if (fit[c] < fit[b]) b = c;
        }
        return b;
    };
    for(let g = 0; g < gens; g++){
        const order = fit.map((_, i)=>i).sort((a, b)=>fit[a] - fit[b]);
        h.push(fit[order[0]]);
        const next = order.slice(0, elit).map((i)=>pop[i]);
        while(next.length < P){
            const a = pop[tour()], b = pop[tour()];
            let c = a.slice();
            if (rnd() < pc) c = c.map((_, k)=>{
                const lo = Math.min(a[k], b[k]), hi = Math.max(a[k], b[k]), d = hi - lo;
                return clip(lo - blx * d + rnd() * d * (1 + 2 * blx));
            });
            if (rnd() < pm) c = c.map((v)=>clip(v + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gauss"])(rnd) * sigma));
            next.push(c);
        }
        pop = next;
        fit = pop.map(f);
        evals += P;
    }
    const bi = fit.indexOf(Math.min(...fit));
    h.push(fit[bi]);
    return {
        solution: pop[bi],
        value: fit[bi],
        feasible: true,
        evals,
        iters: gens,
        history: sample(h, 200)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/graphcoloring.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "annealing",
    ()=>annealing,
    "backtracking",
    ()=>backtracking,
    "evaluate",
    ()=>evaluate,
    "genetic",
    ()=>genetic,
    "validateInstance",
    ()=>validateInstance
]);
/** OptiLab — Coloreado de grafos. Objetivo: minimizar colores entre coloraciones válidas.
 * solver(instancia, params={}, rnd=Math.random) -> {solution,value,feasible,evals,iters,history,historyPoints,...}
 * evals cuenta asignaciones COMPLETAS revisadas por el evaluador de conflictos.
 * Backtracking contabiliza también nodos visitados por separado; las podas no son evaluaciones completas.
 * No se afirma optimalidad salvo si se demuestra por búsqueda exhaustiva o cota inferior.
 */ const clock = ()=>performance.now();
const int = (v, name, min = 1)=>{
    if (!Number.isSafeInteger(v) || v < min) throw new RangeError(`${name} debe ser entero >= ${min}`);
    return v;
};
const prob = (v, name)=>{
    if (!Number.isFinite(v) || v < 0 || v > 1) throw new RangeError(`${name} debe estar entre 0 y 1`);
    return v;
};
const rand = (r)=>{
    const v = r();
    if (!Number.isFinite(v) || v < 0 || v >= 1) throw new Error("rnd debe estar en [0,1)");
    return v;
};
const elapsed = (t)=>(clock() - t) / 1000;
function config(p) {
    const maxEvals = int(p.maxEvals ?? 10000, "maxEvals");
    const maxSeconds = p.maxSeconds ?? 10;
    if (!Number.isFinite(maxSeconds) || maxSeconds <= 0) throw new RangeError("maxSeconds inválido");
    return {
        maxEvals,
        maxSeconds
    };
}
function validateInstance(instance) {
    const n = instance?.n, raw = instance?.aristas ?? instance?.edges;
    int(n, "n", 1);
    if (!Array.isArray(raw)) throw new TypeError("aristas debe ser un arreglo");
    const edges = [], seen = new Set(), adj = Array.from({
        length: n
    }, ()=>[]);
    for (const edge of raw){
        if (!Array.isArray(edge) || edge.length !== 2) throw new TypeError("Arista inválida");
        const [a, b] = edge;
        if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || a >= n || b >= n || a === b) throw new RangeError("Arista fuera de rango o lazo");
        const key = `${Math.min(a, b)}:${Math.max(a, b)}`;
        if (seen.has(key)) throw new Error("Arista duplicada");
        seen.add(key);
        edges.push([
            a,
            b
        ]);
        adj[a].push(b);
        adj[b].push(a);
    }
    return {
        id: instance.id ?? null,
        n,
        edges,
        adj
    };
}
function metrics(g, bits) {
    let conflicts = 0;
    for (const [u, v] of g.edges)if (bits[u] === bits[v]) conflicts++;
    return conflicts;
}
function evaluate(instance, colors) {
    const g = validateInstance(instance);
    if (!Array.isArray(colors) || colors.length !== g.n || !colors.every((c)=>Number.isSafeInteger(c) && c >= 0)) return {
        feasible: false,
        value: null,
        conflicts: null,
        colorsUsed: null,
        reason: "Se requiere un color entero no negativo por nodo"
    };
    const conflicts = metrics(g, colors), colorsUsed = new Set(colors).size;
    return {
        feasible: conflicts === 0,
        value: conflicts === 0 ? colorsUsed : null,
        conflicts,
        colorsUsed,
        reason: conflicts ? "Hay aristas con extremos del mismo color" : null
    };
}
function greedy(g) {
    // DSATUR determinista como cota superior válida, no como prueba de óptimo.
    const colors = Array(g.n).fill(-1), degree = g.adj.map((x)=>x.length);
    for(let count = 0; count < g.n; count++){
        let node = -1, sat = -1, deg = -1;
        for(let v = 0; v < g.n; v++)if (colors[v] < 0) {
            const s = new Set(g.adj[v].map((w)=>colors[w]).filter((c)=>c >= 0)).size;
            if (s > sat || s === sat && degree[v] > deg) {
                node = v;
                sat = s;
                deg = degree[v];
            }
        }
        const used = new Set(g.adj[node].map((w)=>colors[w]).filter((c)=>c >= 0));
        let c = 0;
        while(used.has(c))c++;
        colors[node] = c;
    }
    return colors;
}
function compact(colors) {
    const map = new Map();
    return colors.map((c)=>{
        if (!map.has(c)) map.set(c, map.size);
        return map.get(c);
    });
}
function result(g, best, evals, iters, history, points, reason, extra = {}) {
    const solution = compact(best), value = new Set(solution).size;
    if (points.at(-1)?.evaluaciones !== evals) points.push({
        evaluaciones: evals,
        objetivo: value
    });
    return {
        solution,
        value,
        feasible: true,
        conflicts: 0,
        colorsUsed: value,
        evals,
        iters,
        history,
        historyPoints: points,
        stopReason: reason,
        optimal: false,
        ...extra
    };
}
function updateBest(candidate, g, state) {
    if (metrics(g, candidate) !== 0) return false;
    const k = new Set(candidate).size;
    if (k >= state.value) return false;
    state.best = compact(candidate);
    state.value = k;
    state.points.push({
        evaluaciones: state.evals,
        objetivo: k
    });
    return true;
}
function backtracking(instance, params = {}, _rnd) {
    const g = validateInstance(instance), { maxEvals, maxSeconds } = config(params);
    const nodeLimit = int(params.nodeLimit ?? 100000, "nodeLimit");
    const start = clock();
    const baseline = greedy(g), state = {
        best: compact(baseline),
        value: new Set(baseline).size,
        evals: 1,
        points: [
            {
                evaluaciones: 1,
                objetivo: new Set(baseline).size
            }
        ]
    };
    let nodes = 0, pruned = 0, iters = 0, reason = "busqueda_completa", proved = false;
    const history = [
        state.value
    ];
    if (g.edges.length === 0) {
        return {
            ...result(g, state.best, state.evals, 0, history, state.points, reason, {
                nodes,
                pruned
            }),
            optimal: true
        };
    }
    // Con una arista, al menos dos colores son necesarios.
    if (state.value === 2) {
        return {
            ...result(g, state.best, state.evals, 0, history, state.points, reason, {
                nodes,
                pruned
            }),
            optimal: true
        };
    }
    const colors = Array(g.n).fill(-1), deg = g.adj.map((x)=>x.length);
    function dfs(remaining, k) {
        if (elapsed(start) >= maxSeconds) {
            reason = "max_tiempo";
            return null;
        }
        if (nodes >= nodeLimit) {
            reason = "max_nodos";
            return null;
        }
        nodes++;
        iters++;
        if (remaining === 0) {
            if (state.evals >= maxEvals) {
                reason = "max_evaluaciones";
                return null;
            }
            state.evals++;
            return colors.slice();
        }
        let chosen = -1, saturation = -1, degree = -1, allowed = null;
        for(let v = 0; v < g.n; v++)if (colors[v] === -1) {
            const forbidden = new Set();
            for (const u of g.adj[v])if (colors[u] >= 0) forbidden.add(colors[u]);
            const options = [];
            for(let c = 0; c < k; c++)if (!forbidden.has(c)) options.push(c);
            if (!options.length) {
                pruned++;
                return false;
            }
            if (forbidden.size > saturation || forbidden.size === saturation && deg[v] > degree) {
                chosen = v;
                saturation = forbidden.size;
                degree = deg[v];
                allowed = options;
            }
        }
        for (const c of allowed){
            colors[chosen] = c;
            const out = dfs(remaining - 1, k);
            colors[chosen] = -1;
            if (out === null || out !== false) return out;
        }
        return false;
    }
    // Reducir de a un color. Probar que k no es factible demuestra optimalidad de k+1.
    while(state.value > 2){
        const k = state.value - 1;
        const found = dfs(g.n, k);
        if (found === null) break;
        if (found === false) {
            proved = true;
            break;
        }
        updateBest(found, g, state);
        history.push(state.value);
    }
    if (state.value === 2) proved = true;
    return {
        ...result(g, state.best, state.evals, iters, history, state.points, reason, {
            nodes,
            pruned
        }),
        optimal: proved
    };
}
function annealing(instance, params = {}, rnd = Math.random) {
    const g = validateInstance(instance), { maxEvals, maxSeconds } = config(params), start = clock();
    const maxIterations = int(params.maxIterations ?? 10000, "maxIterations");
    const T0 = params.initialTemperature ?? 5, alpha = params.coolingRate ?? 0.999, Tmin = params.minTemperature ?? 0.001;
    if (!Number.isFinite(T0) || T0 <= 0 || !Number.isFinite(Tmin) || Tmin <= 0 || !Number.isFinite(alpha) || alpha <= 0 || alpha >= 1) throw new RangeError("Parámetros de temperatura inválidos");
    const base = greedy(g), state = {
        best: compact(base),
        value: new Set(base).size,
        evals: 1,
        points: [
            {
                evaluaciones: 1,
                objetivo: new Set(base).size
            }
        ]
    };
    let iters = 0, acceptedWorse = 0, temperature = T0, reason = "max_iteraciones";
    const history = [
        state.value
    ];
    let k = state.value - 1;
    let current = state.best.map((c)=>c >= k ? Math.floor(rand(rnd) * Math.max(1, k)) : c);
    if (k < 1) return result(g, state.best, state.evals, iters, history, state.points, "cota_inferior", {
        acceptedWorse,
        finalTemperature: temperature
    });
    let cost = metrics(g, current);
    // No se vuelve a contar current: es una construcción interna, no una evaluación adicional registrada.
    while(iters < maxIterations){
        if (elapsed(start) >= maxSeconds) {
            reason = "max_tiempo";
            break;
        }
        if (state.evals >= maxEvals) {
            reason = "max_evaluaciones";
            break;
        }
        if (temperature <= Tmin) {
            reason = "temperatura_minima";
            break;
        }
        const candidate = current.slice(), v = Math.floor(rand(rnd) * g.n);
        candidate[v] = Math.floor(rand(rnd) * k);
        const next = metrics(g, candidate);
        state.evals++;
        iters++;
        const delta = next - cost;
        if (delta <= 0 || rand(rnd) < Math.exp(-delta / temperature)) {
            if (delta > 0) acceptedWorse++;
            current = candidate;
            cost = next;
        }
        if (next === 0) {
            if (updateBest(candidate, g, state)) {
                k = state.value - 1;
                if (k < 1) {
                    reason = "cota_inferior";
                    history.push(state.value);
                    break;
                }
                current = state.best.map((c)=>c >= k ? Math.floor(rand(rnd) * k) : c);
                cost = metrics(g, current);
                temperature = T0;
            }
        }
        history.push(state.value);
        temperature *= alpha;
    }
    return result(g, state.best, state.evals, iters, history, state.points, reason, {
        acceptedWorse,
        finalTemperature: temperature
    });
}
function genetic(instance, params = {}, rnd = Math.random) {
    const g = validateInstance(instance), { maxEvals, maxSeconds } = config(params), start = clock();
    const popSize = int(params.populationSize ?? 30, "populationSize", 2);
    const maxGenerations = int(params.maxGenerations ?? 150, "maxGenerations");
    const tournamentSize = int(params.tournamentSize ?? 3, "tournamentSize");
    const elitism = int(params.elitism ?? 2, "elitism", 0);
    const pc = prob(params.crossoverRate ?? 0.8, "crossoverRate");
    const pm = prob(params.mutationRate ?? 0.02, "mutationRate");
    if (elitism >= popSize || tournamentSize > popSize) throw new RangeError("Elitismo/torneo inválidos");
    const base = greedy(g), state = {
        best: compact(base),
        value: new Set(base).size,
        evals: 1,
        points: [
            {
                evaluaciones: 1,
                objetivo: new Set(base).size
            }
        ]
    };
    let k = state.value - 1, iters = 0, reason = "max_generaciones", partialGenerationEvaluations = 0;
    const history = [
        state.value
    ];
    if (k < 1) return result(g, state.best, state.evals, iters, history, state.points, "cota_inferior");
    let population = [];
    function randomBits() {
        return state.best.map((c)=>c >= k ? Math.floor(rand(rnd) * k) : c).map((c)=>rand(rnd) < 0.15 ? Math.floor(rand(rnd) * k) : c);
    }
    function score(bits) {
        if (state.evals >= maxEvals || elapsed(start) >= maxSeconds) return null;
        const conflicts = metrics(g, bits);
        state.evals++;
        return {
            bits,
            conflicts
        };
    }
    function seedPopulation() {
        population = [];
        while(population.length < popSize){
            const evaluated = score(randomBits());
            if (!evaluated) break;
            population.push(evaluated);
        }
    }
    function choose() {
        let win = population[Math.floor(rand(rnd) * population.length)];
        for(let i = 1; i < tournamentSize; i++){
            const other = population[Math.floor(rand(rnd) * population.length)];
            if (other.conflicts < win.conflicts) win = other;
        }
        return win;
    }
    seedPopulation();
    if (population.length < popSize) {
        reason = elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
        return result(g, state.best, state.evals, iters, history, state.points, reason, {
            partialGenerationEvaluations: population.length
        });
    }
    while(iters < maxGenerations){
        if (elapsed(start) >= maxSeconds) {
            reason = "max_tiempo";
            break;
        }
        if (state.evals >= maxEvals) {
            reason = "max_evaluaciones";
            break;
        }
        const zero = population.find((x)=>x.conflicts === 0);
        if (zero) {
            updateBest(zero.bits, g, state);
            history.push(state.value);
            k = state.value - 1;
            if (k < 1) {
                reason = "cota_inferior";
                break;
            }
            seedPopulation();
            if (population.length < popSize) {
                reason = elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
                break;
            }
            continue;
        }
        const sorted = [
            ...population
        ].sort((a, b)=>a.conflicts - b.conflicts);
        const next = sorted.slice(0, elitism).map((x)=>({
                bits: x.bits.slice(),
                conflicts: x.conflicts
            }));
        let generated = 0;
        while(next.length < popSize){
            if (state.evals >= maxEvals || elapsed(start) >= maxSeconds) break;
            const p1 = choose(), p2 = choose(), child = Array.from({
                length: g.n
            }, (_, i)=>rand(rnd) < pc ? rand(rnd) < 0.5 ? p1.bits[i] : p2.bits[i] : p1.bits[i]);
            for(let i = 0; i < g.n; i++)if (rand(rnd) < pm) child[i] = Math.floor(rand(rnd) * k);
            const e = score(child);
            if (!e) break;
            next.push(e);
            generated++;
        }
        if (next.length < popSize) {
            partialGenerationEvaluations = generated;
            reason = elapsed(start) >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
            break;
        }
        population = next;
        iters++;
        history.push(state.value);
    }
    return result(g, state.best, state.evals, iters, history, state.points, reason, {
        partialGenerationEvaluations
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/knapsack.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "annealing",
    ()=>annealing,
    "backtracking",
    ()=>backtracking,
    "evaluate",
    ()=>evaluate,
    "genetic",
    ()=>genetic,
    "validateInstance",
    ()=>validateInstance
]);
/**
 * Mochila 0/1 — OptiLab.
 * Objetivo: maximizar el valor de una selección binaria factible.
 * Contrato público conservado: validateInstance, evaluate, backtracking,
 * annealing, genetic. Los tres solvers aceptan (instancia, params, rnd).
 *
 * Convención experimental:
 * - evals: número de candidatos COMPLETOS evaluados (incluye la mochila
 *   vacía inicial cuando se utiliza). No incluye cálculos de cotas ni nodos.
 * - iters: nodos visitados en BT, movimientos en SA y generaciones COMPLETAS en GA.
 * - history: mejor valor factible (numérico) tras cada iteración registrada;
 *   BT registra las mejoras para respetar la interfaz ya existente.
 * - historyPoints: puntos {evaluaciones, objetivo} de mejora y punto final.
 * - optimal solo es verdadero si BT terminó la búsqueda sin interrupción.
 * El tiempo es cooperativo; no se puede interrumpir trabajo síncrono a mitad
 * de una operación. No se modifica la instancia recibida.
 */ const now = ()=>performance.now();
const tolerance = (capacity)=>1e-9 * Math.max(1, capacity);
function validateInstance(instance) {
    if (!instance || typeof instance !== "object") {
        throw new TypeError("Se requiere una instancia de Mochila 0/1.");
    }
    const weights = instance.pesos ?? instance.weights;
    const values = instance.valores ?? instance.values;
    const capacity = instance.capacidad ?? instance.capacity;
    if (!Array.isArray(weights) || !Array.isArray(values) || !weights.length || weights.length !== values.length) {
        throw new TypeError("pesos y valores deben ser arreglos no vacíos de igual longitud.");
    }
    if (!Number.isFinite(capacity) || capacity < 0) {
        throw new RangeError("La capacidad debe ser un número finito no negativo.");
    }
    for(let i = 0; i < weights.length; i++){
        if (!Number.isFinite(weights[i]) || weights[i] < 0) {
            throw new RangeError(`Peso inválido en el objeto ${i}.`);
        }
        if (!Number.isFinite(values[i]) || values[i] < 0) {
            throw new RangeError(`Valor inválido en el objeto ${i}.`);
        }
    }
    return {
        id: instance.id ?? null,
        weights: [
            ...weights
        ],
        values: [
            ...values
        ],
        capacity
    };
}
function totals(bits, weights, values) {
    let weight = 0, value = 0, count = 0;
    for(let i = 0; i < bits.length; i++){
        if (bits[i] === 1) {
            weight += weights[i];
            value += values[i];
            count++;
        }
    }
    return {
        weight,
        value,
        count
    };
}
function evaluate(instance, selection) {
    const { weights, values, capacity } = validateInstance(instance);
    if (!Array.isArray(selection) || selection.length !== weights.length || !selection.every((x)=>x === 0 || x === 1)) {
        return {
            feasible: false,
            value: null,
            totalWeight: null,
            totalValue: null,
            selectedCount: null,
            reason: "La solución debe ser un vector binario completo."
        };
    }
    const t = totals(selection, weights, values);
    const feasible = t.weight <= capacity + tolerance(capacity);
    return {
        feasible,
        value: feasible ? t.value : null,
        totalWeight: t.weight,
        totalValue: t.value,
        selectedCount: t.count,
        reason: feasible ? null : "La selección supera la capacidad."
    };
}
function positiveInt(x, name, min = 1) {
    if (!Number.isSafeInteger(x) || x < min) {
        throw new RangeError(`${name} debe ser entero seguro >= ${min}.`);
    }
    return x;
}
function probability(x, name) {
    if (!Number.isFinite(x) || x < 0 || x > 1) {
        throw new RangeError(`${name} debe estar entre 0 y 1.`);
    }
    return x;
}
function commonLimits(params) {
    const maxEvals = positiveInt(params.maxEvals ?? 10000, "maxEvals");
    const maxSeconds = params.maxSeconds ?? 10;
    if (!Number.isFinite(maxSeconds) || maxSeconds <= 0) {
        throw new RangeError("maxSeconds debe ser positivo.");
    }
    return {
        maxEvals,
        maxSeconds
    };
}
function draw(rnd) {
    const x = rnd();
    if (!Number.isFinite(x) || x < 0 || x >= 1) {
        throw new RangeError("rnd debe devolver un número en [0, 1).");
    }
    return x;
}
function makeHistory() {
    return {
        history: [
            0
        ],
        historyPoints: [
            {
                evaluaciones: 1,
                objetivo: 0
            }
        ]
    };
}
function recordPoint(points, evals, bestValue) {
    const last = points.at(-1);
    if (last?.evaluaciones === evals) {
        last.objetivo = bestValue;
    } else {
        points.push({
            evaluaciones: evals,
            objetivo: bestValue
        });
    }
}
function result(best, evals, iters, history, historyPoints, stopReason, weights, values, capacity, extras = {}) {
    const t = totals(best, weights, values);
    recordPoint(historyPoints, evals, t.value);
    return {
        solution: best.slice(),
        value: t.value,
        feasible: true,
        evals,
        iters,
        history,
        historyPoints,
        totalWeight: t.weight,
        totalValue: t.value,
        selectedCount: t.count,
        capacity,
        optimal: false,
        stopReason,
        ...extras
    };
}
function backtracking(instance, params = {}, _rnd) {
    const { weights, values, capacity } = validateInstance(instance);
    const n = weights.length;
    const { maxEvals, maxSeconds } = commonLimits(params);
    const nodeLimit = positiveInt(params.nodeLimit ?? Number.MAX_SAFE_INTEGER, "nodeLimit");
    const start = now();
    const order = Array.from({
        length: n
    }, (_, i)=>i).sort((a, b)=>{
        const ratio = (i)=>weights[i] === 0 ? values[i] > 0 ? Infinity : 0 : values[i] / weights[i];
        const ra = ratio(a), rb = ratio(b);
        if (ra === rb) return a - b; // evita Infinity-Infinity => NaN
        return ra > rb ? -1 : 1;
    });
    const chosen = Array(n).fill(0);
    let best = chosen.slice(), bestValue = 0;
    let evals = 1, iters = 0, prunedCapacity = 0, prunedBound = 0;
    let interrupted = null;
    const { history, historyPoints } = makeHistory();
    function budgetReason() {
        if ((now() - start) / 1000 >= maxSeconds) return "max_tiempo";
        if (iters >= nodeLimit) return "max_nodos";
        return null;
    }
    function upperBound(pos, usedWeight, obtainedValue) {
        let remaining = capacity - usedWeight;
        let bound = obtainedValue;
        for(let j = pos; j < n; j++){
            const i = order[j];
            if (values[i] <= 0) continue;
            if (weights[i] === 0) {
                bound += values[i];
                continue;
            }
            if (weights[i] <= remaining) {
                bound += values[i];
                remaining -= weights[i];
            } else {
                bound += values[i] * Math.max(0, remaining / weights[i]);
                break;
            }
        }
        return bound + 1e-10 * Math.max(1, Math.abs(bound));
    }
    function dfs(pos, weight, value) {
        if (interrupted) return;
        const reason = budgetReason();
        if (reason) {
            interrupted = reason;
            return;
        }
        iters++;
        // Una hoja completa cuenta como evaluación, solo si queda presupuesto.
        if (pos === n) {
            if (evals >= maxEvals) {
                interrupted = "max_evaluaciones";
                return;
            }
            evals++;
            if (value > bestValue) {
                bestValue = value;
                best = chosen.slice();
                history.push(bestValue);
                recordPoint(historyPoints, evals, bestValue);
            }
            return;
        }
        if (upperBound(pos, weight, value) <= bestValue) {
            prunedBound++;
            return;
        }
        const i = order[pos];
        if (weight + weights[i] <= capacity + tolerance(capacity)) {
            chosen[i] = 1;
            dfs(pos + 1, weight + weights[i], value + values[i]);
            chosen[i] = 0;
        } else {
            prunedCapacity++;
        }
        if (!interrupted) dfs(pos + 1, weight, value);
    }
    dfs(0, 0, 0);
    // La igualdad exacta al presupuesto NO implica interrupción si ya terminó el árbol.
    const out = result(best, evals, iters, history, historyPoints, interrupted ?? "busqueda_completa", weights, values, capacity, {
        optimal: interrupted === null,
        prunedCapacity,
        prunedBound
    });
    return out;
}
/** Reparación determinista: elimina el objeto seleccionado de peor valor/peso. */ function repair(bits, weights, values, capacity) {
    const candidate = bits.slice();
    let { weight } = totals(candidate, weights, values);
    while(weight > capacity + tolerance(capacity)){
        let worst = -1, worstRatio = Infinity;
        for(let i = 0; i < candidate.length; i++){
            if (candidate[i] !== 1) continue;
            const ratio = weights[i] === 0 ? Infinity : values[i] / weights[i];
            if (worst === -1 || ratio < worstRatio) {
                worst = i;
                worstRatio = ratio;
            }
        }
        if (worst < 0) throw new Error("No se pudo reparar la mochila.");
        candidate[worst] = 0;
        weight -= weights[worst];
    }
    return candidate;
}
function annealing(instance, params = {}, rnd = Math.random) {
    const { weights, values, capacity } = validateInstance(instance);
    const { maxEvals, maxSeconds } = commonLimits(params);
    const maxIterations = positiveInt(params.maxIterations ?? 10000, "maxIterations");
    const initialTemperature = params.initialTemperature ?? 50;
    const minTemperature = params.minTemperature ?? 0.001;
    const coolingRate = params.coolingRate ?? 0.995;
    if (!Number.isFinite(initialTemperature) || initialTemperature <= 0 || !Number.isFinite(minTemperature) || minTemperature <= 0 || !Number.isFinite(coolingRate) || coolingRate <= 0 || coolingRate >= 1) {
        throw new RangeError("Temperaturas > 0 y coolingRate en (0, 1).");
    }
    const start = now(), n = weights.length;
    let current = Array(n).fill(0), currentValue = 0;
    let best = current.slice(), bestValue = 0;
    let evals = 1, iters = 0, acceptedWorse = 0, improvements = 0;
    let temperature = initialTemperature, stopReason = "max_iteraciones";
    const { history, historyPoints } = makeHistory();
    while(iters < maxIterations){
        if ((now() - start) / 1000 >= maxSeconds) {
            stopReason = "max_tiempo";
            break;
        }
        if (evals >= maxEvals) {
            stopReason = "max_evaluaciones";
            break;
        }
        if (temperature <= minTemperature) {
            stopReason = "temperatura_minima";
            break;
        }
        const candidate = current.slice();
        const index = Math.floor(draw(rnd) * n);
        candidate[index] = 1 - candidate[index];
        const neighbor = repair(candidate, weights, values, capacity);
        const neighborValue = totals(neighbor, weights, values).value;
        evals++;
        iters++;
        const delta = neighborValue - currentValue;
        if (delta >= 0 || draw(rnd) < Math.exp(delta / temperature)) {
            if (delta < 0) acceptedWorse++;
            current = neighbor;
            currentValue = neighborValue;
        }
        if (neighborValue > bestValue) {
            best = neighbor.slice();
            bestValue = neighborValue;
            improvements++;
            recordPoint(historyPoints, evals, bestValue);
        }
        history.push(bestValue);
        temperature *= coolingRate;
    }
    return result(best, evals, iters, history, historyPoints, stopReason, weights, values, capacity, {
        acceptedWorse,
        improvements,
        finalTemperature: temperature
    });
}
function genetic(instance, params = {}, rnd = Math.random) {
    const { weights, values, capacity } = validateInstance(instance);
    const { maxEvals, maxSeconds } = commonLimits(params);
    const populationSize = positiveInt(params.populationSize ?? 30, "populationSize", 2);
    const maxGenerations = positiveInt(params.maxGenerations ?? 300, "maxGenerations");
    const tournamentSize = positiveInt(params.tournamentSize ?? 3, "tournamentSize");
    const elitism = positiveInt(params.elitism ?? 1, "elitism", 0);
    const crossoverRate = probability(params.crossoverRate ?? 0.8, "crossoverRate");
    const mutationRate = probability(params.mutationRate ?? 1 / weights.length, "mutationRate");
    if (elitism >= populationSize || tournamentSize > populationSize) {
        throw new RangeError("Parámetros de población, torneo o elitismo inválidos.");
    }
    const start = now(), n = weights.length;
    let evals = 0, iters = 0, best = Array(n).fill(0), bestValue = 0;
    let stopReason = "max_generaciones";
    let population = [];
    const history = [], historyPoints = [];
    const timedOut = ()=>(now() - start) / 1000 >= maxSeconds;
    function evaluateCandidate(bits) {
        const solution = repair(bits, weights, values, capacity);
        const value = totals(solution, weights, values).value;
        evals++;
        if (evals === 1 || value > bestValue) {
            best = solution.slice();
            bestValue = value;
            recordPoint(historyPoints, evals, bestValue);
        }
        return {
            solution,
            value
        };
    }
    function parent() {
        let winner = population[Math.floor(draw(rnd) * population.length)];
        for(let k = 1; k < tournamentSize; k++){
            const opponent = population[Math.floor(draw(rnd) * population.length)];
            if (opponent.value > winner.value) winner = opponent;
        }
        return winner;
    }
    function mutate(bits) {
        for(let i = 0; i < bits.length; i++){
            if (draw(rnd) < mutationRate) bits[i] = 1 - bits[i];
        }
    }
    // La mochila vacía es el primer individuo, y garantiza un resultado factible.
    while(population.length < populationSize && evals < maxEvals && !timedOut()){
        const bits = population.length === 0 ? Array(n).fill(0) : Array.from({
            length: n
        }, ()=>Number(draw(rnd) < 0.5));
        population.push(evaluateCandidate(bits));
    }
    if (evals === 0) {
        // tiempo consumido antes de evaluar el primer individuo
        const zero = Array(n).fill(0);
        // No contabilizar como evaluada una solución que nunca se evaluó.
        return {
            ...result(zero, 0, 0, [
                0
            ], [
                {
                    evaluaciones: 0,
                    objetivo: 0
                }
            ], "max_tiempo", weights, values, capacity),
            populationEvaluated: 0
        };
    }
    history.push(bestValue);
    if (population.length < populationSize) {
        stopReason = timedOut() ? "max_tiempo" : "max_evaluaciones";
        return result(best, evals, iters, history, historyPoints, stopReason, weights, values, capacity, {
            populationEvaluated: population.length,
            partialGenerationEvaluations: 0
        });
    }
    let partialGenerationEvaluations = 0;
    while(iters < maxGenerations){
        if (timedOut()) {
            stopReason = "max_tiempo";
            break;
        }
        if (evals >= maxEvals) {
            stopReason = "max_evaluaciones";
            break;
        }
        const sorted = [
            ...population
        ].sort((a, b)=>b.value - a.value);
        const next = sorted.slice(0, elitism).map((x)=>({
                solution: x.solution.slice(),
                value: x.value
            }));
        const evalsBefore = evals;
        while(next.length < populationSize && evals < maxEvals && !timedOut()){
            const p1 = parent(), p2 = parent();
            let child = p1.solution.slice();
            if (n > 1 && draw(rnd) < crossoverRate) {
                const cut = 1 + Math.floor(draw(rnd) * (n - 1));
                child = p1.solution.slice(0, cut).concat(p2.solution.slice(cut));
            }
            mutate(child);
            next.push(evaluateCandidate(child));
        }
        if (next.length < populationSize) {
            partialGenerationEvaluations = evals - evalsBefore;
            stopReason = timedOut() ? "max_tiempo" : "max_evaluaciones";
            break;
        }
        population = next;
        iters++;
        history.push(bestValue);
    }
    return result(best, evals, iters, history, historyPoints, stopReason, weights, values, capacity, {
        populationEvaluated: population.length,
        partialGenerationEvaluations
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/nqueens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "annealing",
    ()=>annealing,
    "backtracking",
    ()=>backtracking,
    "conflicts",
    ()=>conflicts,
    "genetic",
    ()=>genetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rng.js [app-client] (ecmascript)");
;
function conflicts(p) {
    const n = p.length, d1 = new Int16Array(2 * n), d2 = new Int16Array(2 * n);
    let c = 0;
    for(let i = 0; i < n; i++)c += d1[i + p[i]]++ + d2[i - p[i] + n]++;
    return c;
}
const sample = (h, max)=>h.length < max ? h : h.filter((_, i)=>i % Math.ceil(h.length / max) === 0);
function backtracking(n, params) {
    const limit = params.nodeLimit;
    const cols = new Uint8Array(n), d1 = new Uint8Array(2 * n), d2 = new Uint8Array(2 * n);
    const board = Array(n).fill(-1);
    let nodes = 0, backtracks = 0;
    const free = (r, c)=>!cols[c] && !d1[r + c] && !d2[r - c + n];
    const mark = (r, c, v)=>{
        cols[c] = d1[r + c] = d2[r - c + n] = v;
    };
    function solve(placed) {
        if (placed === n) return true;
        if (nodes++ > limit) return false;
        // MRV: fila no asignada con menos columnas disponibles (poda si alguna llega a 0)
        let best = -1, bestDom = null;
        for(let r = 0; r < n; r++){
            if (board[r] !== -1) continue;
            const dom = [];
            for(let c = 0; c < n; c++)if (free(r, c)) dom.push(c);
            if (dom.length === 0) {
                backtracks++;
                return false;
            }
            if (!bestDom || dom.length < bestDom.length) {
                best = r;
                bestDom = dom;
            }
        }
        const mid = (n - 1) / 2;
        bestDom.sort((a, b)=>Math.abs(a - mid) - Math.abs(b - mid));
        for (const c of bestDom){
            board[best] = c;
            mark(best, c, 1);
            if (solve(placed + 1)) return true;
            mark(best, c, 0);
            board[best] = -1;
        }
        backtracks++;
        return false;
    }
    const ok = solve(0);
    const sol = ok ? board.slice() : null;
    return {
        solution: sol,
        value: ok ? conflicts(sol) : null,
        feasible: ok,
        evals: nodes,
        iters: backtracks,
        history: []
    };
}
function annealing(n, params, rnd) {
    const { T0, alpha, Tmin, maxIter } = params;
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffled"])(n, rnd), cur = conflicts(p), T = T0, evals = 1, it = 0;
    let best = p.slice(), bestC = cur;
    const h = [];
    for(; it < maxIter && bestC > 0; it++){
        const i = rnd() * n | 0, j = rnd() * n | 0;
        if (i === j) continue;
        [p[i], p[j]] = [
            p[j],
            p[i]
        ];
        const nc = conflicts(p);
        evals++;
        const d = nc - cur;
        if (d <= 0 || rnd() < Math.exp(-d / T)) {
            cur = nc;
            if (cur < bestC) {
                bestC = cur;
                best = p.slice();
            }
        } else [p[i], p[j]] = [
            p[j],
            p[i]
        ];
        T = Math.max(Tmin, T * alpha);
        if (it % 50 === 0) h.push(bestC);
    }
    h.push(bestC);
    return {
        solution: best,
        value: bestC,
        feasible: bestC === 0,
        evals,
        iters: it,
        history: sample(h, 200)
    };
}
// ---- Algoritmo genético: permutaciones + OX + mutación por intercambio ----
function ox(a, b, rnd) {
    const n = a.length;
    let i = rnd() * n | 0, j = rnd() * n | 0;
    if (i > j) [i, j] = [
        j,
        i
    ];
    const ch = Array(n).fill(-1), used = new Uint8Array(n);
    for(let k = i; k <= j; k++){
        ch[k] = a[k];
        used[a[k]] = 1;
    }
    let pos = (j + 1) % n;
    for(let k = 0; k < n; k++){
        const v = b[(j + 1 + k) % n];
        if (!used[v]) {
            ch[pos] = v;
            pos = (pos + 1) % n;
        }
    }
    return ch;
}
function genetic(n, params, rnd) {
    const { pop: P, gens, pc, pm, elit, tk } = params;
    let pop = Array.from({
        length: P
    }, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffled"])(n, rnd));
    let fit = pop.map(conflicts), evals = P, g = 0;
    const h = [];
    const tour = ()=>{
        let b = rnd() * P | 0;
        for(let k = 1; k < tk; k++){
            const c = rnd() * P | 0;
            if (fit[c] < fit[b]) b = c;
        }
        return b;
    };
    for(; g < gens; g++){
        const order = fit.map((f, i)=>i).sort((a, b)=>fit[a] - fit[b]);
        h.push(fit[order[0]]);
        if (fit[order[0]] === 0) break;
        const next = order.slice(0, elit).map((i)=>pop[i]);
        while(next.length < P){
            const a = pop[tour()], b = pop[tour()];
            let c = rnd() < pc ? ox(a, b, rnd) : a.slice();
            if (rnd() < pm) {
                const i = rnd() * n | 0, j = rnd() * n | 0;
                [c[i], c[j]] = [
                    c[j],
                    c[i]
                ];
            }
            next.push(c);
        }
        pop = next;
        fit = pop.map(conflicts);
        evals += P;
    }
    const bi = fit.indexOf(Math.min(...fit));
    return {
        solution: pop[bi],
        value: fit[bi],
        feasible: fit[bi] === 0,
        evals,
        iters: g,
        history: sample(h, 200)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROBLEMS",
    ()=>PROBLEMS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nqueens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/eggholder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/knapsack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$graphcoloring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/graphcoloring.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$knapsack$2d$instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/knapsack-instances.js [app-client] (ecmascript)");
;
;
;
;
;
const P = (key, label, def, step = 1)=>({
        key,
        label,
        def,
        step
    });
_c = P;
const sa = (T0, alpha, Tmin, maxIter, extra = [])=>[
        P("T0", "Temperatura inicial", T0, 0.1),
        P("alpha", "Factor de enfriamiento α", alpha, 0.0001),
        P("Tmin", "Temperatura mínima", Tmin, 0.01),
        P("maxIter", "Iteraciones máximas", maxIter, 1000),
        ...extra
    ];
const ga = (pop, gens, pc, pm, extra = [])=>[
        P("pop", "Tamaño de población", pop),
        P("gens", "Generaciones", gens, 10),
        P("pc", "Prob. de cruza", pc, 0.05),
        P("pm", "Prob. de mutación", pm, 0.05),
        P("elit", "Elitismo (individuos)", 2),
        P("tk", "Tamaño de torneo", 3),
        ...extra
    ];
const knapsackInstance = (index)=>{
    const instance = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$knapsack$2d$instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNAPSACK_INSTANCES"][index];
    if (!instance) {
        throw new Error(`Instancia de mochila desconocida: ${index}`);
    }
    return instance;
};
const budget = [
    P("maxEvals", "Máximo de evaluaciones", 10000, 100),
    P("maxSeconds", "Tiempo máximo (s)", 10, 1)
];
const PROBLEMS = {
    // ========================================
    // N REINAS
    // ========================================
    nreinas: {
        title: "N-Reinas",
        tag: "Satisfacción de restricciones",
        desc: "Coloca N reinas en un tablero NxN sin que se ataquen.",
        sizeLabel: "N (tamaño del tablero)",
        sizes: [
            8,
            50,
            100
        ],
        metric: "Conflictos",
        algos: {
            bt: {
                name: "Backtracking",
                note: "Forward checking + MRV + valores desde el centro",
                deterministic: true,
                params: [
                    P("nodeLimit", "Límite de nodos", 500000, 1000)
                ],
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backtracking"]
            },
            sa: {
                name: "Recocido simulado",
                note: "Permutación, intercambio de filas, enfriamiento geométrico",
                params: sa(2, 0.9999, 0.05, 200000),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["annealing"]
            },
            ga: {
                name: "Algoritmo genético",
                note: "Permutaciones, torneo, cruza OX, mutación por intercambio",
                params: ga(100, 500, 0.9, 0.2),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genetic"]
            }
        }
    },
    // ========================================
    // MOCHILA 0/1
    // ========================================
    mochila: {
        title: "Mochila 0/1",
        tag: "Optimización con restricción de capacidad",
        desc: "Elige objetos que maximicen el valor sin exceder la capacidad.",
        sizeLabel: "Instancia Kaggle (fila 0 a 9)",
        sizes: Array.from({
            length: 10
        }, (_, i)=>i),
        metric: "Valor total",
        objective: "max",
        algos: {
            bt: {
                name: "Backtracking",
                note: "Filtrado por capacidad, orden por valor/peso y poda Branch and Bound",
                deterministic: true,
                params: [
                    ...budget,
                    P("nodeLimit", "Límite de nodos", 100000, 1000)
                ],
                run: (id, params, rnd)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backtracking"](knapsackInstance(id), params, rnd)
            },
            sa: {
                name: "Recocido simulado",
                note: "Vecindario por cambio de bit, reparación y enfriamiento geométrico",
                params: [
                    P("initialTemperature", "Temperatura inicial", 50, 1),
                    P("coolingRate", "Factor de enfriamiento", 0.995, 0.0001),
                    P("minTemperature", "Temperatura mínima", 0.001, 0.001),
                    P("maxIterations", "Iteraciones máximas", 10000, 100),
                    ...budget
                ],
                run: (id, params, rnd)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["annealing"](knapsackInstance(id), params, rnd)
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
                    ...budget
                ],
                run: (id, params, rnd)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genetic"](knapsackInstance(id), params, rnd)
            }
        }
    },
    // ========================================
    // COLOREADO DE GRAFOS
    // ========================================
    grafos: {
        title: "Coloreado de grafos",
        tag: "Escalabilidad (50 y 1000 nodos)",
        desc: "Asigna colores a los nodos sin que dos vecinos coincidan.",
        algos: {}
    },
    // ========================================
    // EGGHOLDER
    // ========================================
    eggholder: {
        title: "Función Eggholder",
        tag: "Optimización continua global",
        desc: "Minimiza una superficie con muchísimos mínimos locales.",
        sizeLabel: "Dimensión",
        sizes: [
            2
        ],
        metric: "f(x, y)",
        globalMin: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_MIN"],
        algos: {
            sa: {
                name: "Recocido simulado",
                note: "Vecino gaussiano con paso decreciente",
                params: sa(100, 0.9995, 0.01, 20000, [
                    P("step", "Paso máximo", 150, 10)
                ]),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["annealing"]
            },
            ga: {
                name: "Algoritmo genético",
                note: "Real-codificado, torneo, BLX-α, mutación gaussiana",
                params: ga(60, 200, 0.9, 0.2, [
                    P("blx", "α de BLX", 0.3, 0.05),
                    P("sigma", "σ de mutación", 20, 1)
                ]),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genetic"]
            }
        }
    }
};
var _c;
__turbopack_context__.k.register(_c, "P");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/rng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PRNG con semilla (mulberry32) para reproducir experimentos
__turbopack_context__.s([
    "gauss",
    ()=>gauss,
    "makeRng",
    ()=>makeRng,
    "shuffled",
    ()=>shuffled
]);
function makeRng(seed) {
    let a = seed >>> 0;
    return ()=>{
        a = a + 0x6d2b79f5 >>> 0;
        let t = a;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const gauss = (r)=>Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r());
function shuffled(n, r) {
    const p = Array.from({
        length: n
    }, (_, i)=>i);
    for(let i = n - 1; i > 0; i--){
        const j = r() * (i + 1) | 0;
        [p[i], p[j]] = [
            p[j],
            p[i]
        ];
    }
    return p;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0zkffwfc3oui8._.js.map