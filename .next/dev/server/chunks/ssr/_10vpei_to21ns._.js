(()=>{"use strict";module.exports = [
"[project]/app/problema/[id]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/registry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Board$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Board.js [app-ssr] (ecmascript)");
"use client";
;
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
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const prob = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROBLEMS"][id];
    const algoIds = Object.keys(prob?.algos ?? {});
    const [algoId, setAlgoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(algoIds[0]);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(prob?.sizes?.[0]);
    const [runs, setRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [vals, setVals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [out, setOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const algo = prob?.algos[algoId];
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.fromEntries((algo?.params ?? []).map((p)=>[
                p.key,
                Number(vals[`${algoId}.${p.key}`] ?? p.def)
            ])), [
        algo,
        algoId,
        vals
    ]);
    if (!prob) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8",
        children: [
            "Problema no encontrado.",
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                const r = algo.run(size, params, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRng"])(s));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-6xl mx-auto px-6 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-sm text-pastel-700 underline",
                children: "← Todos los problemas"
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold mt-2",
                children: prob.title
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-pastel-700 text-sm",
                children: prob.desc
            }, void 0, false, {
                fileName: "[project]/app/problema/[id]/page.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            !algoIds.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel p-6 mt-6",
                children: [
                    "Este problema aún no tiene algoritmos integrados. Agrega sus funciones en ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "lib/"
                    }, void 0, false, {
                        fileName: "[project]/app/problema/[id]/page.js",
                        lineNumber: 118,
                        columnNumber: 14
                    }, this),
                    " y regístralas en ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 mt-6 lg:grid-cols-[320px_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "panel p-5 space-y-5 self-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold mb-2",
                                        children: "Algoritmo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: algoIds.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setAlgoId(k);
                                                    setOut(null);
                                                },
                                                className: `w-full text-left border p-3 ${k === algoId ? "border-pastel-600 bg-pastel-100" : "border-pastel-200 hover:bg-pastel-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-medium",
                                                        children: prob.algos[k].name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium",
                                        children: prob.sizeLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/problema/[id]/page.js",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-1",
                                        children: prob.sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    !algo.deterministic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm",
                                                children: [
                                                    "Ejecuciones",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm",
                                                children: [
                                                    "Semilla base",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    algo.params.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm",
                                            children: [
                                                p.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: [
                            !out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel p-6 text-pastel-700",
                                children: "Configura los parámetros y pulsa Ejecutar. Cada ejecución usa una semilla distinta (base + índice) para poder reproducirla."
                            }, void 0, false, {
                                fileName: "[project]/app/problema/[id]/page.js",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this),
                            out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-pastel-50 border border-pastel-200 p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-pastel-700",
                                                                children: a
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 262,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            id === "nreinas" && succ === 0 && algo.deterministic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-6 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-semibold mb-3",
                                                        children: "Convergencia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-semibold mb-3",
                                                        children: "Mejor solución"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this),
                                                    best?.solution && id === "mochila" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pastel-700",
                                                                        children: "Valor total:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 287,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pastel-700",
                                                                        children: "Peso utilizado:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 293,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-pastel-700 mb-2",
                                                                        children: "Objetos seleccionados:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 301,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: best.solution.map((selected, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `border px-3 py-2 ${selected ? "border-pastel-600 bg-pastel-100" : "border-pastel-200 bg-pastel-50"}`,
                                                                                children: [
                                                                                    "Objeto ",
                                                                                    index + 1,
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                    best?.solution && id === "nreinas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Board$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        p: best.solution
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                        lineNumber: 333,
                                                        columnNumber: 23
                                                    }, this),
                                                    best?.solution && id === "eggholder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            "x = ",
                                                            best.solution[0].toFixed(4),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 338,
                                                                columnNumber: 25
                                                            }, this),
                                                            "y = ",
                                                            best.solution[1].toFixed(4),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 339,
                                                                columnNumber: 25
                                                            }, this),
                                                            "f = ",
                                                            best.value.toFixed(4),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/problema/[id]/page.js",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    !best?.solution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel p-5 overflow-x-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-semibold mb-3",
                                                children: "Ejecuciones"
                                            }, void 0, false, {
                                                fileName: "[project]/app/problema/[id]/page.js",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "text-pastel-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                "#",
                                                                "Semilla",
                                                                prob.metric,
                                                                "Factible",
                                                                "Iter.",
                                                                "Evaluaciones",
                                                                "ms"
                                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: out.rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-t border-pastel-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-1 pr-4",
                                                                        children: r.run
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 374,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.seed
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 375,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.value === null ? "—" : r.value.toFixed(id === "eggholder" ? 4 : 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 376,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.feasible ? "Sí" : "No"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 381,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.iters
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 382,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "pr-4",
                                                                        children: r.evals
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/problema/[id]/page.js",
                                                                        lineNumber: 383,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
}),
"[project]/components/Board.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nqueens.js [app-ssr] (ecmascript)");
;
;
function Board({ p }) {
    const n = p.length;
    const bad = new Set();
    for(let i = 0; i < n; i++)for(let j = i + 1; j < n; j++)if (Math.abs(i - j) === Math.abs(p[i] - p[j])) {
        bad.add(i);
        bad.add(j);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${n} ${n}`,
        className: "w-full max-w-md border border-pastel-300",
        children: [
            Array.from({
                length: n * n
            }, (_, k)=>{
                const r = k / n | 0, c = k % n;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            p.map((c, r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
}),
"[project]/components/Chart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Curvas de convergencia (mejor valor vs. progreso) para varias ejecuciones
__turbopack_context__.s([
    "default",
    ()=>Chart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Chart({ series, label }) {
    const W = 560, H = 220, m = 40;
    const all = series.flat();
    if (!all.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-pastel-700",
        children: "Este algoritmo no genera curva de convergencia."
    }, void 0, false, {
        fileName: "[project]/components/Chart.js",
        lineNumber: 9,
        columnNumber: 7
    }, this);
    const lo = Math.min(...all), hi = Math.max(...all), span = hi - lo || 1;
    const pts = (s)=>s.map((v, i)=>`${m + i / Math.max(1, s.length - 1) * (W - m - 10)},${10 + (1 - (v - lo) / span) * (H - 10 - 25)}`).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${W} ${H}`,
        className: "w-full bg-pastel-50 border border-pastel-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
            series.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
}),
"[project]/lib/eggholder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rng.js [app-ssr] (ecmascript)");
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
            clip(x[0] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gauss"])(rnd) * s),
            clip(x[1] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gauss"])(rnd) * s)
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
            if (rnd() < pm) c = c.map((v)=>clip(v + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gauss"])(rnd) * sigma));
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
}),
"[project]/lib/knapsack.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mochila 0/1 — OptiLab.
 * Representación: vector binario solution[i] (1 = tomar el objeto i).
 * Objetivo natural: maximizar la suma de valores sin superar la capacidad.
 *
 * Contrato compatible con los algoritmos actuales:
 *   backtracking(instancia, params, rnd?) ->
 *   {solution, value, feasible, evals, iters, history, ...}
 *
 * No modifica la instancia. `rnd` se reserva para los algoritmos estocásticos.
 */ /** Valida y normaliza los datos de UNA instancia, sin alterar el original. */ __turbopack_context__.s([
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
function validateInstance(instance) {
    if (!instance || typeof instance !== "object") {
        throw new TypeError("Se requiere una instancia de Mochila 0/1.");
    }
    // Aceptamos los nombres en español de la plantilla Python y la variante inglesa.
    const weights = instance.pesos ?? instance.weights;
    const values = instance.valores ?? instance.values;
    const capacity = instance.capacidad ?? instance.capacity;
    if (!Array.isArray(weights) || !Array.isArray(values) || weights.length === 0 || weights.length !== values.length) {
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
    let totalWeight = 0;
    let totalValue = 0;
    let selectedCount = 0;
    for(let i = 0; i < selection.length; i++){
        if (selection[i] === 1) {
            totalWeight += weights[i];
            totalValue += values[i];
            selectedCount++;
        }
    }
    const feasible = totalWeight <= capacity + 1e-9 * Math.max(1, capacity);
    return {
        feasible,
        value: feasible ? totalValue : null,
        totalWeight,
        totalValue,
        selectedCount,
        reason: feasible ? null : "La selección supera la capacidad."
    };
}
function backtracking(instance, params = {}, _rnd) {
    const { weights, values, capacity } = validateInstance(instance);
    const n = weights.length;
    const maxEvals = params.maxEvals ?? 10000;
    const maxSeconds = params.maxSeconds ?? 10;
    const nodeLimit = params.nodeLimit ?? Number.MAX_SAFE_INTEGER;
    if (!Number.isInteger(maxEvals) || maxEvals < 1 || !Number.isFinite(maxSeconds) || maxSeconds <= 0 || !Number.isInteger(nodeLimit) || nodeLimit < 1) {
        throw new RangeError("maxEvals y nodeLimit deben ser enteros positivos; maxSeconds debe ser positivo.");
    }
    const t0 = performance.now();
    const ordered = Array.from({
        length: n
    }, (_, i)=>i).sort((a, b)=>{
        const ra = weights[a] === 0 ? values[a] > 0 ? Infinity : 0 : values[a] / weights[a];
        const rb = weights[b] === 0 ? values[b] > 0 ? Infinity : 0 : values[b] / weights[b];
        return rb - ra || a - b;
    });
    const chosen = Array(n).fill(0);
    let best = Array(n).fill(0);
    let bestValue = 0;
    let bestWeight = 0;
    let evals = 1;
    // La mochila vacía es la primera solución factible evaluada.
    let iters = 0;
    let prunedCapacity = 0;
    let prunedBound = 0;
    let stopReason = null;
    // Compatible con el componente Chart existente.
    const history = [
        0
    ];
    const historyPoints = [
        {
            evaluaciones: 1,
            objetivo: 0
        }
    ];
    function outOfBudget() {
        if (evals >= maxEvals) {
            stopReason = "max_evaluaciones";
            return true;
        }
        if (iters >= nodeLimit) {
            stopReason = "max_nodos";
            return true;
        }
        if ((performance.now() - t0) / 1000 >= maxSeconds) {
            stopReason = "max_tiempo";
            return true;
        }
        return false;
    }
    // Relajación fraccionaria: cota optimista; los objetos no caben
    // fraccionados en la solución, solo en el cálculo de la cota.
    function upperBound(pos, usedWeight, obtainedValue) {
        let remaining = capacity - usedWeight;
        let bound = obtainedValue;
        for(let j = pos; j < n; j++){
            const i = ordered[j];
            if (values[i] === 0) continue;
            if (weights[i] <= remaining) {
                bound += values[i];
                remaining -= weights[i];
            } else if (weights[i] > 0) {
                bound += values[i] * (remaining / weights[i]);
                break;
            }
        }
        // Amortigua error numérico de la cota sin dejar de ser optimista.
        return bound + 1e-10 * Math.max(1, Math.abs(bound));
    }
    function dfs(pos, usedWeight, obtainedValue) {
        if (stopReason) return;
        iters++;
        if (pos === n) {
            // Ya conocemos el objetivo por acumulación;
            // se cuenta la evaluación completa.
            if (outOfBudget()) return;
            evals++;
            if (obtainedValue > bestValue) {
                bestValue = obtainedValue;
                bestWeight = usedWeight;
                best = chosen.slice();
                history.push(bestValue);
                historyPoints.push({
                    evaluaciones: evals,
                    objetivo: bestValue
                });
            }
            return;
        }
        if (outOfBudget()) return;
        if (upperBound(pos, usedWeight, obtainedValue) <= bestValue) {
            prunedBound++;
            return;
        }
        const item = ordered[pos];
        if (usedWeight + weights[item] <= capacity + 1e-9 * Math.max(1, capacity)) {
            chosen[item] = 1;
            dfs(pos + 1, usedWeight + weights[item], obtainedValue + values[item]);
            chosen[item] = 0;
        } else {
            prunedCapacity++;
        }
        if (!stopReason) {
            dfs(pos + 1, usedWeight, obtainedValue);
        }
    }
    dfs(0, 0, 0);
    if (history.at(-1) !== bestValue) {
        history.push(bestValue);
    }
    const result = evaluate(instance, best);
    return {
        solution: best,
        value: result.value,
        feasible: result.feasible,
        evals,
        iters,
        history,
        historyPoints,
        totalWeight: bestWeight,
        totalValue: bestValue,
        selectedCount: result.selectedCount,
        capacity,
        optimal: stopReason === null,
        stopReason: stopReason ?? "busqueda_completa",
        prunedCapacity,
        prunedBound
    };
}
/* ============================================
   UTILIDADES PARA ALGORITMOS ESTOCÁSTICOS
   ============================================ */ function random01(rnd) {
    const x = rnd();
    if (typeof x !== "number" || !Number.isFinite(x) || x < 0 || x >= 1) {
        throw new RangeError("rnd debe devolver números en [0, 1).");
    }
    return x;
}
function integerParameter(value, label, min = 1) {
    if (!Number.isInteger(value) || value < min) {
        throw new RangeError(`${label} debe ser entero >= ${min}.`);
    }
    return value;
}
function probability(value, label) {
    if (!Number.isFinite(value) || value < 0 || value > 1) {
        throw new RangeError(`${label} debe estar entre 0 y 1.`);
    }
    return value;
}
function limits(params) {
    const maxEvals = integerParameter(params.maxEvals ?? 10000, "maxEvals");
    const maxSeconds = params.maxSeconds ?? 10;
    if (!Number.isFinite(maxSeconds) || maxSeconds <= 0) {
        throw new RangeError("maxSeconds debe ser positivo.");
    }
    return {
        maxEvals,
        maxSeconds
    };
}
function totalOf(selection, weights, values) {
    let weight = 0;
    let value = 0;
    let count = 0;
    for(let i = 0; i < selection.length; i++){
        if (selection[i] === 1) {
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
/*
 * Repara una solución que excede la capacidad.
 * Elimina objetos seleccionados empezando por
 * el de menor relación valor/peso.
 */ function repair(selection, weights, values, capacity) {
    const candidate = selection.slice();
    const tolerance = 1e-9 * Math.max(1, capacity);
    let { weight } = totalOf(candidate, weights, values);
    while(weight > capacity + tolerance){
        let worst = -1;
        let worstRatio = Infinity;
        for(let i = 0; i < candidate.length; i++){
            if (!candidate[i]) continue;
            const ratio = weights[i] === 0 ? Infinity : values[i] / weights[i];
            if (ratio < worstRatio) {
                worst = i;
                worstRatio = ratio;
            }
        }
        if (worst === -1) {
            throw new Error("No se pudo reparar la mochila.");
        }
        candidate[worst] = 0;
        weight -= weights[worst];
    }
    return candidate;
}
/*
 * Unifica el formato de resultados de los
 * algoritmos estocásticos de Mochila.
 */ function stochasticResult(best, bestValue, evals, iters, history, historyPoints, stopReason, weights, values, capacity, extras = {}) {
    const totals = totalOf(best, weights, values);
    return {
        solution: best.slice(),
        value: bestValue,
        feasible: true,
        evals,
        iters,
        history,
        historyPoints,
        totalWeight: totals.weight,
        totalValue: totals.value,
        selectedCount: totals.count,
        capacity,
        optimal: false,
        stopReason,
        ...extras
    };
}
function annealing(instance, params = {}, rnd = Math.random) {
    const { weights, values, capacity } = validateInstance(instance);
    const { maxEvals, maxSeconds } = limits(params);
    const maxIterations = integerParameter(params.maxIterations ?? 10000, "maxIterations");
    const initialTemperature = params.initialTemperature ?? 50;
    const coolingRate = params.coolingRate ?? 0.995;
    const minTemperature = params.minTemperature ?? 0.001;
    if (!Number.isFinite(initialTemperature) || initialTemperature <= 0 || !Number.isFinite(minTemperature) || minTemperature <= 0 || !Number.isFinite(coolingRate) || coolingRate <= 0 || coolingRate >= 1) {
        throw new RangeError("Temperaturas > 0 y coolingRate en (0,1).");
    }
    const t0 = performance.now();
    const n = weights.length;
    let current = Array(n).fill(0);
    let currentValue = 0;
    let best = current.slice();
    let bestValue = 0;
    let evals = 1;
    let iters = 0;
    let acceptedWorse = 0;
    let improvements = 0;
    let temperature = initialTemperature;
    const history = [
        0
    ];
    const historyPoints = [
        {
            evaluaciones: 1,
            objetivo: 0
        }
    ];
    let stopReason = "max_iteraciones";
    while(iters < maxIterations){
        if (evals >= maxEvals) {
            stopReason = "max_evaluaciones";
            break;
        }
        if ((performance.now() - t0) / 1000 >= maxSeconds) {
            stopReason = "max_tiempo";
            break;
        }
        if (temperature <= minTemperature) {
            stopReason = "temperatura_minima";
            break;
        }
        // Crear un vecino.
        const candidate = current.slice();
        const index = Math.floor(random01(rnd) * n);
        candidate[index] = 1 - candidate[index];
        // Reparar si excede la capacidad.
        const repaired = repair(candidate, weights, values, capacity);
        const candidateValue = totalOf(repaired, weights, values).value;
        evals++;
        iters++;
        const delta = candidateValue - currentValue;
        /*
     * Si mejora, se acepta.
     * Si empeora, puede aceptarse según
     * la temperatura actual.
     */ if (delta >= 0 || random01(rnd) < Math.exp(delta / temperature)) {
            if (delta < 0) {
                acceptedWorse++;
            }
            current = repaired;
            currentValue = candidateValue;
        }
        // Guardar el mejor histórico.
        if (candidateValue > bestValue) {
            best = repaired.slice();
            bestValue = candidateValue;
            improvements++;
            historyPoints.push({
                evaluaciones: evals,
                objetivo: bestValue
            });
        }
        history.push(bestValue);
        // Enfriamiento geométrico.
        temperature *= coolingRate;
    }
    return stochasticResult(best, bestValue, evals, iters, history, historyPoints, stopReason, weights, values, capacity, {
        acceptedWorse,
        improvements,
        finalTemperature: temperature
    });
}
function genetic(instance, params = {}, rnd = Math.random) {
    const { weights, values, capacity } = validateInstance(instance);
    const { maxEvals, maxSeconds } = limits(params);
    const populationSize = integerParameter(params.populationSize ?? 30, "populationSize", 2);
    const maxGenerations = integerParameter(params.maxGenerations ?? 300, "maxGenerations");
    const tournamentSize = integerParameter(params.tournamentSize ?? 3, "tournamentSize");
    const elitism = integerParameter(params.elitism ?? 1, "elitism", 0);
    const crossoverRate = probability(params.crossoverRate ?? 0.8, "crossoverRate");
    const mutationRate = probability(params.mutationRate ?? 1 / weights.length, "mutationRate");
    if (elitism >= populationSize || tournamentSize > populationSize) {
        throw new RangeError("Parámetros de población, torneo o elitismo inválidos.");
    }
    const t0 = performance.now();
    const n = weights.length;
    let evals = 0;
    let iters = 0;
    let best = Array(n).fill(0);
    let bestValue = 0;
    const history = [];
    const historyPoints = [];
    let stopReason = "max_generaciones";
    let population = [];
    function elapsed() {
        return (performance.now() - t0) / 1000;
    }
    // Evaluar cada nuevo individuo.
    function evaluateCandidate(bits) {
        const solution = repair(bits, weights, values, capacity);
        const value = totalOf(solution, weights, values).value;
        evals++;
        if (value > bestValue || evals === 1) {
            best = solution.slice();
            bestValue = value;
            historyPoints.push({
                evaluaciones: evals,
                objetivo: bestValue
            });
        }
        return {
            solution,
            value
        };
    }
    // Selección por torneo.
    function selectParent() {
        let winner = population[Math.floor(random01(rnd) * population.length)];
        for(let k = 1; k < tournamentSize; k++){
            const opponent = population[Math.floor(random01(rnd) * population.length)];
            if (opponent.value > winner.value) {
                winner = opponent;
            }
        }
        return winner;
    }
    // Mutación independiente por gen.
    function mutate(bits) {
        for(let i = 0; i < bits.length; i++){
            if (random01(rnd) < mutationRate) {
                bits[i] = 1 - bits[i];
            }
        }
    }
    // Generar población inicial.
    while(population.length < populationSize && evals < maxEvals && elapsed() < maxSeconds){
        const bits = population.length === 0 ? Array(n).fill(0) : Array.from({
            length: n
        }, ()=>Number(random01(rnd) < 0.5));
        population.push(evaluateCandidate(bits));
    }
    history.push(bestValue);
    if (population.length < 2) {
        stopReason = elapsed() >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
        return stochasticResult(best, bestValue, evals, iters, history, historyPoints, stopReason, weights, values, capacity, {
            populationEvaluated: population.length
        });
    }
    // Evolución generacional.
    while(iters < maxGenerations){
        if (evals >= maxEvals) {
            stopReason = "max_evaluaciones";
            break;
        }
        if (elapsed() >= maxSeconds) {
            stopReason = "max_tiempo";
            break;
        }
        const sorted = [
            ...population
        ].sort((a, b)=>b.value - a.value);
        // Preservar los mejores individuos.
        const next = sorted.slice(0, elitism).map((x)=>({
                solution: x.solution.slice(),
                value: x.value
            }));
        while(next.length < populationSize){
            if (evals >= maxEvals || elapsed() >= maxSeconds) {
                break;
            }
            const p1 = selectParent();
            const p2 = selectParent();
            let child = p1.solution.slice();
            // Cruza de un punto.
            if (n > 1 && random01(rnd) < crossoverRate) {
                const cut = 1 + Math.floor(random01(rnd) * (n - 1));
                child = p1.solution.slice(0, cut).concat(p2.solution.slice(cut));
            }
            mutate(child);
            next.push(evaluateCandidate(child));
        }
        /*
     * Solo contar generaciones completas.
     */ if (next.length < populationSize) {
            stopReason = elapsed() >= maxSeconds ? "max_tiempo" : "max_evaluaciones";
            break;
        }
        population = next;
        iters++;
        history.push(bestValue);
    }
    return stochasticResult(best, bestValue, evals, iters, history, historyPoints, stopReason, weights, values, capacity, {
        populationEvaluated: population.length
    });
}
}),
"[project]/lib/nqueens.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rng.js [app-ssr] (ecmascript)");
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
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffled"])(n, rnd), cur = conflicts(p), T = T0, evals = 1, it = 0;
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
    }, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffled"])(n, rnd));
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
}),
"[project]/lib/registry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KNAPSACK_INSTANCES",
    ()=>KNAPSACK_INSTANCES,
    "PROBLEMS",
    ()=>PROBLEMS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nqueens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/eggholder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/knapsack.js [app-ssr] (ecmascript)");
;
;
;
const P = (key, label, def, step = 1)=>({
        key,
        label,
        def,
        step
    });
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
const KNAPSACK_INSTANCES = {
    1: {
        id: "demo_1",
        pesos: [
            2,
            3,
            4,
            5
        ],
        valores: [
            3,
            4,
            5,
            8
        ],
        capacidad: 5
    }
};
const knapsackInstance = (id)=>{
    const instance = KNAPSACK_INSTANCES[id];
    if (!instance) {
        throw new Error(`Instancia de mochila desconocida: ${id}`);
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
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backtracking"]
            },
            sa: {
                name: "Recocido simulado",
                note: "Permutación, intercambio de filas, enfriamiento geométrico",
                params: sa(2, 0.9999, 0.05, 200000),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["annealing"]
            },
            ga: {
                name: "Algoritmo genético",
                note: "Permutaciones, torneo, cruza OX, mutación por intercambio",
                params: ga(100, 500, 0.9, 0.2),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nqueens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genetic"]
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
        sizeLabel: "Instancia de demostración",
        sizes: [
            1
        ],
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
                run: (id, params, rnd)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backtracking"](knapsackInstance(id), params, rnd)
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
                run: (id, params, rnd)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["annealing"](knapsackInstance(id), params, rnd)
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
                run: (id, params, rnd)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$knapsack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genetic"](knapsackInstance(id), params, rnd)
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
        globalMin: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_MIN"],
        algos: {
            sa: {
                name: "Recocido simulado",
                note: "Vecino gaussiano con paso decreciente",
                params: sa(100, 0.9995, 0.01, 20000, [
                    P("step", "Paso máximo", 150, 10)
                ]),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["annealing"]
            },
            ga: {
                name: "Algoritmo genético",
                note: "Real-codificado, torneo, BLX-α, mutación gaussiana",
                params: ga(60, 200, 0.9, 0.2, [
                    P("blx", "α de BLX", 0.3, 0.05),
                    P("sigma", "σ de mutación", 20, 1)
                ]),
                run: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$eggholder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genetic"]
            }
        }
    }
};
}),
"[project]/lib/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];})()

//# sourceMappingURL=_10vpei_to21ns._.js.map