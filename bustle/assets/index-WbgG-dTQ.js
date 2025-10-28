import {
  hL as C,
  hM as y,
  hN as m,
  hO as S,
  hP as w,
  hQ as R,
  hR as v,
  hS as E,
  hT as P,
  hU as x,
  a as M,
  f as j,
  j as n,
  hV as A,
  W as I,
  hW as O,
  hX as L,
  hY as T,
} from "./vendor-react-CpGE3sj0.js";
import {
  at as b,
  au as N,
  av as h,
  s as U,
  aw as D,
} from "./admin-CPo6XtYv.js";
import { aG as H, t as f, aH as Q } from "./shared-components-G24N1P00.js";
import { cT as q, cU as F, cV as G } from "./vendor-other-C35hYj1E.js";
import { C as p } from "./editor-M-e6bJKl.js";
import "./vendor-redux-CiqK6azd.js";
import "./vendor-charts-CZ6szF51.js";
import "./vendor-ui-CWi54YN-.js";
import "./user-manager-Dr4yhAGw.js";
import "./public-COS93uTN.js";
import "./agent-C9nq9n0B.js";
import "./routes-constants-lB11n7Go.js";
import "./types-CckU8TWY.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const d of o.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function l(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = s(r);
    fetch(r.href, o);
  }
})();
const g = { key: "root", storage: x, whitelist: ["auth", "drawer"] },
  W = m(g, N),
  _ = m(g, b),
  u = C({
    reducer: { auth: W, drawer: _ },
    middleware: (e) =>
      e({ serializableCheck: { ignoredActions: [S, w, R, v, E, P] } }),
  });
y(u);
h(u);
function V() {
  const e = M.c(1);
  j(U);
  let t;
  return (
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((t = n.jsx(H, { router: D })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
let c = [],
  i = !1,
  a = null;
function Y(e = 2e3) {
  i ||
    ((i = !0),
    (c = []),
    (a = setInterval(() => {
      const t = p(),
        s =
          t.totalCalls > 0
            ? `${((t.renderedCalls / t.totalCalls) * 100).toFixed(1)}%`
            : "N/A",
        l = {
          timestamp: new Date().toISOString().split("T")[1],
          canvasPreview: { ...t, efficiency: s },
        };
      c.push(l);
    }, e)));
}
function $() {
  if (i) return a && (clearInterval(a), (a = null)), (i = !1), c;
}
function z() {
  return { isMonitoring: i, snapshotCount: c.length, currentStats: p() };
}
function B() {
  a && (clearInterval(a), (a = null)), (i = !1), (c = []);
}
function K() {
  const e = p();
  e.totalCalls > 0 &&
    ((e.renderedCalls / e.totalCalls) * 100,
    e.cancelledCalls > e.renderedCalls);
}
typeof window < "u" &&
  (window.cropMonitor = { start: Y, stop: $, status: z, reset: B, summary: K });
h(u);
const X = new q({
  queryCache: new G({
    onError: (e) => {
      var t, s;
      f.create({
        title: "Error",
        description:
          ((s = (t = e.response) == null ? void 0 : t.data) == null
            ? void 0
            : s.message) ||
          e.message ||
          "An error occurred",
        type: "error",
      });
    },
  }),
  mutationCache: new F({
    onError: (e) => {
      var t, s;
      f.create({
        title: "Error",
        description:
          ((s = (t = e.response) == null ? void 0 : t.data) == null
            ? void 0
            : s.message) ||
          e.message ||
          "An error occurred",
        type: "error",
      });
    },
  }),
});
A.createRoot(document.getElementById("root")).render(
  n.jsx(I.StrictMode, {
    children: n.jsx(O, {
      children: n.jsx(Q, {
        children: n.jsx(L, {
          store: u,
          children: n.jsx(T, { client: X, children: n.jsx(V, {}) }),
        }),
      }),
    }),
  })
);
