import {
  a as W,
  u as we,
  b as he,
  d as ue,
  f as qt,
  j as t,
  p as de,
  r as y,
  B as n,
  T as r,
  V as _,
  n as f,
  S as Ce,
  aT as De,
  i as v,
  Z as ze,
  bd as Xe,
  t as Rt,
  q as ot,
  v as vt,
  ad as rt,
  b6 as Ht,
  aa as Wt,
  b9 as Vt,
  ag as Et,
  be as Bt,
  bf as _t,
  bg as St,
  I as Ne,
  a9 as lt,
  a7 as Ye,
  ax as Ot,
  bh as Ct,
  bi as wt,
  aS as zt,
  W as Gt,
  ae as Lt,
  l as nt,
  bj as Xt,
  a8 as Tt,
  az as Yt,
  aM as Zt,
  aN as Jt,
  aA as es,
  ac as kt,
  ba as ts,
} from "./vendor-react-CpGE3sj0.js";
import {
  a as F,
  s as ss,
  i as as,
  f as Me,
  b as it,
  g as ns,
  c as Pt,
  v as At,
  u as rs,
} from "./admin-CPo6XtYv.js";
import {
  t as C,
  k as Ee,
  T as Ft,
  m as ls,
  l as ct,
  F as Ge,
  A as is,
  n as cs,
} from "./shared-components-G24N1P00.js";
import { R as Pe } from "./routes-constants-lB11n7Go.js";
var $e = ((e) => ((e.FREE = "free"), (e.PRO = "pro"), (e.VIP = "vip"), e))(
    $e || {}
  ),
  It = ((e) => (
    (e.FREE = "free"),
    (e.LEVEL_1 = "level_1"),
    (e.LEVEL_2 = "level_2"),
    (e.LEVEL_3 = "level_3"),
    (e.LEVEL_4 = "level_4"),
    (e.LEVEL_5 = "level_5"),
    (e.UNLIMITED = "unlimited"),
    e
  ))(It || {});
const z = {
    application: ["agent", "application"],
    profile: ["agent", "profile"],
    walletTransactions: ["agent", "wallet", "transactions"],
    catalog: ["agent", "catalog"],
    pages: ["agent", "pages"],
    pageDetail: (e) => ["agent", "pages", e],
    bankAccount: ["agent", "bankAccount"],
    branding: ["agent", "branding"],
    pageCatalog: ["agent", "page-catalog"],
    availablePagesForCatalog: ["agent", "page-catalog", "available"],
    catalogTags: ["agent", "page-catalog", "tags"],
    agentPricing: ["agent", "pricing"],
    agentPricingPage: ["agent", "pricing-page"],
    pagesStatistics: ["agent", "pages", "statistics"],
    pricing: ["agent", "pricing"],
    adminAgents: ["agent", "admin", "agents"],
    adminPricing: ["admin", "agents", "dealer-pricing"],
    adminPricingMatrix: ["admin", "agents", "dealer-pricing", "matrix"],
    adminPricingEntry: (e) => ["admin", "agents", "dealer-pricing", e],
    userFeatures: (e) => ["agent", "users", e, "features"],
  },
  te = {
    applyForAgent: async (e) =>
      (await F.post("/agent/applications", e)).data.data,
    getApplication: async () => (await F.get("/agent/applications")).data.data,
    getProfile: async () => (await F.get("/agent/profile")).data.data,
    getWalletTransactions: async (e = {}) =>
      (await F.get("/agent/wallet/txns", { params: e })).data.data,
    getCatalog: async () => (await F.get("/agent/catalog")).data.data,
    createPage: async (e) => (await F.post("/agent/pages", e)).data.data,
    createCatalogTemplatePage: async (e) =>
      (await F.post("/agent/catalog-template-pages", e)).data.data,
    addCatalogTemplatePageToCatalog: async (e, s) =>
      (await F.post(`/agent/catalog-template-pages/${e}/add-to-catalog`, s))
        .data.data,
    cloneCatalogTemplateToRealPage: async (e) =>
      (await F.post("/agent/catalog-template-pages/clone", e)).data.data,
    getPages: async (e = {}) =>
      (await F.get("/agent/pages", { params: e })).data.data,
    getPageDetail: async (e) => (await F.get(`/agent/pages/${e}`)).data.data,
    handoffPage: async (e, s) =>
      (await F.post(`/agent/pages/${e}/handoff`, s)).data.data,
    clonePage: async (e, s) =>
      (await F.post(`/agent/pages/${e}/clone`, s)).data.data,
    deletePage: async (e) => {
      await F.delete(`/agent/pages/${e}`);
    },
    getPagesStatistics: async () =>
      (await F.get("/agent/pages/statistics")).data.data,
    updateBankAccount: async (e) =>
      (await F.patch("/agent/bank-account", e)).data.data,
    getBankAccount: async () => (await F.get("/agent/bank-account")).data.data,
    updateBranding: async (e) =>
      (await F.patch("/agent/branding", e)).data.data,
    getBranding: async () => (await F.get("/agent/branding")).data.data,
    verifyCustomDomain: async () =>
      (await F.post("/agent/branding/verify-domain")).data.data,
    checkDomainAvailability: async (e) =>
      (await F.post("/agent/branding/check-domain", { domain: e })).data.data,
    lookupAgentByDomain: async (e) =>
      (await F.get(`/public/agent/lookup-by-domain?domain=${e}`)).data.data,
    getPageCatalog: async (e) =>
      (await F.get("/agent/page-catalog", { params: e })).data.data.items,
    addPageToCatalog: async (e) =>
      (await F.post("/agent/page-catalog", e)).data.data,
    updateCatalogPage: async (e, s) =>
      (await F.patch(`/agent/page-catalog/${e}`, s)).data.data,
    removePageFromCatalog: async (e) => {
      await F.delete(`/agent/page-catalog/${e}`);
    },
    reorderPageCatalog: async (e) => {
      await F.put("/agent/page-catalog/reorder", e);
    },
    getPublicPageCatalog: async (e, s) =>
      (await F.get(`/public/agent/${e}/page-catalog`, { params: s })).data.data,
    updateAgentPricing: async (e) =>
      (await F.patch("/agent/pricing", e)).data.data,
    getAgentPricing: async () => (await F.get("/agent/pricing")).data.data,
    getPublicAgentPricing: async (e) =>
      (await F.get("/public/agent/pricing", { params: { agentId: e } })).data
        .data,
    updatePricingPage: async (e) =>
      (await F.patch("/agent/pricing-page", e)).data.data,
    getPricingPage: async () => (await F.get("/agent/pricing-page")).data.data,
    deactivatePricingPage: async () => {
      await F.delete("/agent/pricing-page");
    },
    getPublicPricingPage: async (e) =>
      (await F.get("/public/agent/pricing", { params: { agentId: e } })).data
        .data,
    getAgentPricingMatrix: async () =>
      (await F.get("/agent/pricing")).data.data,
    getAgents: async (e = {}) =>
      (await F.get("/admin/agents", { params: e })).data.data,
    updateAgentLevel: async (e, s) =>
      (await F.patch(`/admin/agents/${e}/level`, s)).data.data,
    getAdminPricingMatrix: async () =>
      (await F.get("/admin/agents/dealer-pricing/matrix")).data.data,
    createPricingEntry: async (e) =>
      (await F.post("/admin/agents/dealer-pricing", e)).data.data,
    getPricingEntry: async (e) =>
      (await F.get(`/admin/agents/dealer-pricing/${e}`)).data.data,
    updatePricingEntry: async (e, s) =>
      (await F.patch(`/admin/agents/dealer-pricing/${e}`, s)).data.data,
    deletePricingEntry: async (e) =>
      (await F.post(`/admin/agents/dealer-pricing/${e}/delete`)).data.data,
    getUserFeatures: async (e) => {
      const s = await F.get(`/agent/users/${e}/features`);
      return s.data.data || s.data;
    },
    purchaseFeaturesForUser: async (e, s) => {
      const a = await F.post(`/agent/users/${e}/features/purchase`, s);
      return a.data.data || a.data;
    },
  },
  ha = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.applyForAgent,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.application });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  ua = () => {
    const e = W.c(4),
      s = qt(ss);
    let a;
    e[0] !== s ? ((a = as(s)), (e[0] = s), (e[1] = a)) : (a = e[1]);
    const c = !a && s !== null;
    let x;
    return (
      e[2] !== c
        ? ((x = {
            queryKey: z.application,
            queryFn: te.getApplication,
            staleTime: 3e5,
            enabled: c,
          }),
          (e[2] = c),
          (e[3] = x))
        : (x = e[3]),
      we(x)
    );
  },
  dt = () => {
    const e = W.c(1);
    let s;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            queryKey: z.profile,
            queryFn: te.getProfile,
            staleTime: 12e4,
          }),
          (e[0] = s))
        : (s = e[0]),
      we(s)
    );
  },
  os = (e) => {
    const s = W.c(4);
    let a;
    s[0] !== e
      ? ((a = e === void 0 ? {} : e), (s[0] = e), (s[1] = a))
      : (a = s[1]);
    const d = a;
    let c;
    return (
      s[2] !== d
        ? ((c = {
            queryKey: [...z.walletTransactions, d],
            queryFn: () => te.getWalletTransactions(d),
            staleTime: 3e5,
          }),
          (s[2] = d),
          (s[3] = c))
        : (c = s[3]),
      we(c)
    );
  },
  $t = () => {
    const e = W.c(1);
    let s;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            queryKey: z.catalog,
            queryFn: te.getCatalog,
            staleTime: 6e5,
          }),
          (e[0] = s))
        : (s = e[0]),
      we(s)
    );
  },
  ds = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.createPage,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pages }),
                s.invalidateQueries({ queryKey: z.profile });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  Dt = (e) => {
    const s = W.c(4);
    let a;
    s[0] !== e
      ? ((a = e === void 0 ? {} : e), (s[0] = e), (s[1] = a))
      : (a = s[1]);
    const d = a;
    let c;
    return (
      s[2] !== d
        ? ((c = {
            queryKey: [...z.pages, d],
            queryFn: () => te.getPages(d),
            staleTime: 12e4,
            placeholderData: As,
          }),
          (s[2] = d),
          (s[3] = c))
        : (c = s[3]),
      we(c)
    );
  },
  Ut = (e) => {
    const s = W.c(8);
    let a;
    s[0] !== e ? ((a = z.pageDetail(e)), (s[0] = e), (s[1] = a)) : (a = s[1]);
    let d;
    s[2] !== e
      ? ((d = () => te.getPageDetail(e)), (s[2] = e), (s[3] = d))
      : (d = s[3]);
    const c = !!e;
    let x;
    return (
      s[4] !== a || s[5] !== d || s[6] !== c
        ? ((x = { queryKey: a, queryFn: d, staleTime: 3e5, enabled: c }),
          (s[4] = a),
          (s[5] = d),
          (s[6] = c),
          (s[7] = x))
        : (x = s[7]),
      we(x)
    );
  },
  ms = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Fs,
            onSuccess: (d, c) => {
              const { id: x } = c;
              s.invalidateQueries({ queryKey: z.pages }),
                s.invalidateQueries({ queryKey: z.pageDetail(x) });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  gs = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Es,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pages }),
                s.invalidateQueries({ queryKey: z.profile });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  hs = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.createCatalogTemplatePage,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pages }),
                s.invalidateQueries({ queryKey: z.profile });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  us = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: _s,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pageCatalog }),
                s.invalidateQueries({ queryKey: z.pages });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  xs = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.cloneCatalogTemplateToRealPage,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pages }),
                s.invalidateQueries({ queryKey: z.profile });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  ps = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: zs,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pages }),
                s.invalidateQueries({ queryKey: z.profile }),
                s.invalidateQueries({ queryKey: z.pagesStatistics });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  fs = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.updateBranding,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.branding });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  ys = () => {
    const e = W.c(1);
    let s;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            queryKey: z.branding,
            queryFn: te.getBranding,
            staleTime: 3e5,
          }),
          (e[0] = s))
        : (s = e[0]),
      we(s)
    );
  },
  bs = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.verifyCustomDomain,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.branding });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  js = (e) => {
    const s = W.c(2);
    let a;
    return (
      s[0] !== e
        ? ((a = {
            queryKey: [...z.pageCatalog, e],
            queryFn: () => te.getPageCatalog(e),
            staleTime: 12e4,
          }),
          (s[0] = e),
          (s[1] = a))
        : (a = s[1]),
      we(a)
    );
  },
  Ns = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.addPageToCatalog,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pageCatalog }),
                s.invalidateQueries({ queryKey: z.availablePagesForCatalog });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  vs = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Ls,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pageCatalog });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  Ss = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.removePageFromCatalog,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.pageCatalog }),
                s.invalidateQueries({ queryKey: z.availablePagesForCatalog });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  Cs = () => {
    const e = W.c(1);
    let s;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            queryKey: z.agentPricingPage,
            queryFn: te.getPricingPage,
            staleTime: 3e5,
          }),
          (e[0] = s))
        : (s = e[0]),
      we(s)
    );
  },
  ws = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.updatePricingPage,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.agentPricingPage });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  Ts = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.deactivatePricingPage,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.agentPricingPage });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  xa = (e) => {
    const s = W.c(4);
    let a;
    s[0] !== e ? ((a = {}), (s[0] = e), (s[1] = a)) : (a = s[1]);
    const d = a;
    let c;
    return (
      s[2] !== d
        ? ((c = {
            queryKey: [...z.adminAgents, d],
            queryFn: () => te.getAgents(d),
            staleTime: 12e4,
          }),
          (s[2] = d),
          (s[3] = c))
        : (c = s[3]),
      we(c)
    );
  },
  pa = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Is,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.adminAgents });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  fa = () => {
    const e = W.c(1);
    let s;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            queryKey: z.adminPricingMatrix,
            queryFn: te.getAdminPricingMatrix,
            staleTime: 3e5,
          }),
          (e[0] = s))
        : (s = e[0]),
      we(s)
    );
  },
  ya = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.createPricingEntry,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.adminPricingMatrix }),
                s.invalidateQueries({ queryKey: z.adminPricing });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  ba = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: $s,
            onSuccess: (d, c) => {
              const { id: x } = c;
              s.invalidateQueries({ queryKey: z.adminPricingMatrix }),
                s.invalidateQueries({ queryKey: z.adminPricing }),
                s.invalidateQueries({ queryKey: z.adminPricingEntry(x) });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  ja = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: te.deletePricingEntry,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: z.adminPricingMatrix }),
                s.invalidateQueries({ queryKey: z.adminPricing });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  ks = (e) => {
    const s = W.c(8);
    let a;
    s[0] !== e ? ((a = z.userFeatures(e)), (s[0] = e), (s[1] = a)) : (a = s[1]);
    let d;
    s[2] !== e
      ? ((d = () => te.getUserFeatures(e)), (s[2] = e), (s[3] = d))
      : (d = s[3]);
    const c = !!e;
    let x;
    return (
      s[4] !== a || s[5] !== d || s[6] !== c
        ? ((x = { queryKey: a, queryFn: d, staleTime: 12e4, enabled: c }),
          (s[4] = a),
          (s[5] = d),
          (s[6] = c),
          (s[7] = x))
        : (x = s[7]),
      we(x)
    );
  },
  Ps = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Ds,
            onSuccess: (d, c) => {
              const { userId: x } = c;
              s.invalidateQueries({ queryKey: z.userFeatures(x) }),
                s.invalidateQueries({ queryKey: z.walletTransactions }),
                s.invalidateQueries({ queryKey: z.profile });
            },
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  };
function As(e) {
  return e;
}
function Fs(e) {
  const { id: s, data: a } = e;
  return te.handoffPage(s, a);
}
function Es(e) {
  const { id: s, data: a } = e;
  return te.clonePage(s, a);
}
function _s(e) {
  const { pageId: s, data: a } = e;
  return te.addCatalogTemplatePageToCatalog(s, a);
}
function zs(e) {
  return te.deletePage(e);
}
function Ls(e) {
  const { id: s, data: a } = e;
  return te.updateCatalogPage(s, a);
}
function Is(e) {
  const { agentId: s, data: a } = e;
  return te.updateAgentLevel(s, a);
}
function $s(e) {
  const { id: s, data: a } = e;
  return te.updatePricingEntry(s, a);
}
function Ds(e) {
  const { userId: s, data: a } = e;
  return te.purchaseFeaturesForUser(s, a);
}
const at = (e) => {
    const s = W.c(2);
    let a;
    return (
      s[0] !== e
        ? ((a = {
            queryKey: ["agent-design-requests", e],
            queryFn: async () => {
              const d = new URLSearchParams();
              return (
                d.append("page", e.page.toString()),
                d.append("limit", e.limit.toString()),
                e.search && d.append("search", e.search),
                e.status && d.append("status", e.status),
                e.priority && d.append("priority", e.priority),
                e.dateFrom && d.append("dateFrom", e.dateFrom),
                e.dateTo && d.append("dateTo", e.dateTo),
                (await F.get(`/agent/design-requests?${d}`)).data.data
              );
            },
          }),
          (s[0] = e),
          (s[1] = a))
        : (a = s[1]),
      we(a)
    );
  },
  Na = (e) => {
    const s = W.c(2);
    let a;
    return (
      s[0] !== e
        ? ((a = {
            queryKey: ["admin-agent-design-requests", e],
            queryFn: async () => {
              const d = new URLSearchParams();
              return (
                d.append("page", e.page.toString()),
                d.append("limit", e.limit.toString()),
                e.search && d.append("search", e.search),
                e.status && d.append("status", e.status),
                e.priority && d.append("priority", e.priority),
                e.agentUserId &&
                  d.append("agentUserId", e.agentUserId.toString()),
                e.assignedToAdminId &&
                  d.append("assignedToAdminId", e.assignedToAdminId.toString()),
                e.dateFrom && d.append("dateFrom", e.dateFrom),
                e.dateTo && d.append("dateTo", e.dateTo),
                (await F.get(`/admin/agents/design-requests?${d}`)).data.data
              );
            },
          }),
          (s[0] = e),
          (s[1] = a))
        : (a = s[1]),
      we(a)
    );
  },
  va = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Us,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: ["agent-design-requests"] }),
                s.invalidateQueries({
                  queryKey: ["agent-design-request-statistics"],
                }),
                C.create({
                  title: "Tạo Yêu Cầu Thành Công",
                  description: "Yêu cầu hỗ trợ thiết kế đã được gửi thành công",
                  type: "success",
                  duration: 3e3,
                });
            },
            onError: Qs,
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  Sa = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: Ms,
            onSuccess: (d, c) => {
              s.invalidateQueries({
                queryKey: ["admin-agent-design-requests"],
              }),
                s.invalidateQueries({
                  queryKey: ["admin-agent-design-request", c.id],
                }),
                s.invalidateQueries({
                  queryKey: ["agent-design-request-statistics"],
                }),
                C.create({
                  title: "Cập Nhật Thành Công",
                  description: "Yêu cầu thiết kế đã được cập nhật thành công",
                  type: "success",
                  duration: 3e3,
                });
            },
            onError: Ks,
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  },
  Ca = () => {
    const e = W.c(2),
      s = he();
    let a;
    return (
      e[0] !== s
        ? ((a = {
            mutationFn: qs,
            onSuccess: () => {
              s.invalidateQueries({ queryKey: ["agent-design-requests"] }),
                s.invalidateQueries({
                  queryKey: ["agent-design-request-statistics"],
                }),
                C.create({
                  title: "Hủy Thành Công",
                  description: "Yêu cầu thiết kế đã được hủy thành công",
                  type: "success",
                  duration: 3e3,
                });
            },
            onError: Rs,
          }),
          (e[0] = s),
          (e[1] = a))
        : (a = e[1]),
      ue(a)
    );
  };
async function Us(e) {
  return (await F.post("/agent/design-requests", e)).data.data;
}
function Qs(e) {
  var s, a, d, c;
  ((s = e.response) == null ? void 0 : s.status) === 403
    ? C.create({
        title: "Không có quyền tạo yêu cầu",
        description: "Bạn cần có quyền đại lý để sử dụng tính năng này",
        type: "error",
        duration: 5e3,
      })
    : ((a = e.response) == null ? void 0 : a.status) === 404
    ? C.create({
        title: "Không tìm thấy trang/mẫu",
        description:
          "Trang dealer hoặc mẫu bạn chọn không tồn tại hoặc bạn không có quyền truy cập",
        type: "error",
        duration: 3e3,
      })
    : C.create({
        title: "Lỗi Tạo Yêu Cầu",
        description:
          ((c = (d = e.response) == null ? void 0 : d.data) == null
            ? void 0
            : c.message) || "Không thể tạo yêu cầu thiết kế",
        type: "error",
        duration: 3e3,
      });
}
async function Ms(e) {
  const { id: s, data: a } = e;
  return (await F.patch(`/admin/agents/design-requests/${s}`, a)).data.data;
}
function Ks(e) {
  var s, a;
  C.create({
    title: "Lỗi Cập Nhật",
    description:
      ((a = (s = e.response) == null ? void 0 : s.data) == null
        ? void 0
        : a.message) || "Không thể cập nhật yêu cầu thiết kế",
    type: "error",
    duration: 3e3,
  });
}
async function qs(e) {
  return (await F.delete(`/agent/design-requests/${e}`)).data;
}
function Rs(e) {
  var s, a;
  C.create({
    title: "Lỗi Hủy Yêu Cầu",
    description:
      ((a = (s = e.response) == null ? void 0 : s.data) == null
        ? void 0
        : a.message) || "Không thể hủy yêu cầu thiết kế",
    type: "error",
    duration: 3e3,
  });
}
const Hs = (e) => {
    const a = {
      pending: { color: "yellow", text: "Đang chờ" },
      in_progress: { color: "blue", text: "Đang xử lý" },
      completed: { color: "green", text: "Hoàn thành" },
      cancelled: { color: "red", text: "Đã hủy" },
      refunded: { color: "purple", text: "Đã hoàn tiền" },
    }[e] || { color: "gray", text: "Không xác định" };
    return t.jsx(de, { colorPalette: a.color, children: a.text });
  },
  Ws = (e) => {
    const a = {
      low: { color: "green", text: "Thấp" },
      medium: { color: "yellow", text: "Trung bình" },
      high: { color: "orange", text: "Cao" },
      urgent: { color: "red", text: "Khẩn cấp" },
    }[e] || { color: "gray", text: "Không xác định" };
    return t.jsx(de, { colorPalette: a.color, children: a.text });
  },
  Vs = (e) =>
    e
      ? (typeof e == "string" ? new Date(e) : e).toLocaleDateString("vi-VN")
      : "N/A",
  wa = (e) => (e === 0 ? "Miễn phí" : `${e.toLocaleString("vi-VN")} ₫`),
  Bs = () => {
    var be;
    const e = W.c(69),
      [s, a] = y.useState(""),
      [d] = y.useState(1),
      { data: c, isLoading: x, error: N } = dt(),
      q = s || void 0;
    let o;
    e[0] !== d || e[1] !== q
      ? ((o = { page: d, limit: 5, type: q }),
        (e[0] = d),
        (e[1] = q),
        (e[2] = o))
      : (o = e[2]);
    const { data: g, isLoading: U } = os(o),
      { data: w, isLoading: p } = $t(),
      k = Os,
      T = Gs;
    if (x) {
      let I;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = t.jsx(n, {
              className: "flex justify-center items-center h-64",
              children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
            })),
            (e[3] = I))
          : (I = e[3]),
        I
      );
    }
    if (N) {
      let I;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = t.jsx(n, {
            className: "text-red-500 text-xl",
            children: "⚠️",
          })),
          (e[4] = I))
        : (I = e[4]);
      let Se;
      return (
        e[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((Se = t.jsx(n, {
              className: "max-w-6xl mx-auto p-6",
              children: t.jsx(n, {
                className: "bg-red-50 border border-red-200 rounded-lg p-4",
                children: t.jsxs(n, {
                  className: "flex items-start gap-3",
                  children: [
                    I,
                    t.jsxs(n, {
                      children: [
                        t.jsx(r, {
                          className: "font-medium text-red-800",
                          children: "Không thể tải thông tin đại lý",
                        }),
                        t.jsx(r, {
                          className: "text-sm mt-1 text-red-700",
                          children: "Vui lòng thử lại sau hoặc liên hệ hỗ trợ.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })),
            (e[5] = Se))
          : (Se = e[5]),
        Se
      );
    }
    let u;
    e[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = t.jsxs(n, {
          children: [
            t.jsx(r, {
              className:
                "text-2xl font-bold text-gray-800 font-[Quicksand,sans-serif] mb-2",
              children: "Dashboard Đại lý",
            }),
            t.jsx(r, {
              className: "text-gray-600 font-[Quicksand,sans-serif]",
              children: "Quản lý tài khoản đại lý và các trang web của bạn",
            }),
          ],
        })),
        (e[6] = u))
      : (u = e[6]);
    let j;
    e[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((j = t.jsx(r, {
          className:
            "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
          children: "Thông tin tài khoản",
        })),
        (e[7] = j))
      : (j = e[7]);
    const A = c != null && c.isActive ? "green" : "red",
      ne = c != null && c.isActive ? "Hoạt động" : "Không hoạt động";
    let S;
    e[8] !== A || e[9] !== ne
      ? ((S = t.jsxs(f, {
          justify: "space-between",
          align: "center",
          className: "mb-4",
          children: [
            j,
            t.jsx(de, { colorScheme: A, size: "lg", children: ne }),
          ],
        })),
        (e[8] = A),
        (e[9] = ne),
        (e[10] = S))
      : (S = e[10]);
    let R;
    e[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((R = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Hạn mức FREE:",
        })),
        (e[11] = R))
      : (R = e[11]);
    const X = c == null ? void 0 : c.freeQuotaRemaining,
      Y = c == null ? void 0 : c.freeQuotaTotal;
    let V;
    e[12] !== X || e[13] !== Y
      ? ((V = t.jsxs(f, {
          justify: "space-between",
          children: [
            R,
            t.jsxs(r, { className: "font-semibold", children: [X, " / ", Y] }),
          ],
        })),
        (e[12] = X),
        (e[13] = Y),
        (e[14] = V))
      : (V = e[14]);
    let H;
    e[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((H = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Số dư tài khoản:",
        })),
        (e[15] = H))
      : (H = e[15]);
    const b = (c == null ? void 0 : c.balanceCents) || 0;
    let E;
    e[16] !== b ? ((E = Me(b)), (e[16] = b), (e[17] = E)) : (E = e[17]);
    let L;
    e[18] !== E
      ? ((L = t.jsxs(f, {
          justify: "space-between",
          children: [
            H,
            t.jsx(r, { className: "font-semibold text-blue-600", children: E }),
          ],
        })),
        (e[18] = E),
        (e[19] = L))
      : (L = e[19]);
    let D;
    e[20] === Symbol.for("react.memo_cache_sentinel")
      ? ((D = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Level đại lý:",
        })),
        (e[20] = D))
      : (D = e[20]);
    const m = c != null && c.isUnlimited ? "purple" : "blue",
      $ = (c == null ? void 0 : c.dealerLevel) || It.FREE,
      M = (c == null ? void 0 : c.isUnlimited) || !1;
    let i;
    e[21] !== $ || e[22] !== M
      ? ((i = it($, M)), (e[21] = $), (e[22] = M), (e[23] = i))
      : (i = e[23]);
    let P;
    e[24] !== m || e[25] !== i
      ? ((P = t.jsxs(f, {
          justify: "space-between",
          children: [
            D,
            t.jsx(de, { colorScheme: m, variant: "subtle", children: i }),
          ],
        })),
        (e[24] = m),
        (e[25] = i),
        (e[26] = P))
      : (P = e[26]);
    let G;
    e[27] === Symbol.for("react.memo_cache_sentinel")
      ? ((G = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Ngày tạo:",
        })),
        (e[27] = G))
      : (G = e[27]);
    let se;
    e[28] !== (c == null ? void 0 : c.createdAt)
      ? ((se = new Date(
          (c == null ? void 0 : c.createdAt) || ""
        ).toLocaleDateString("vi-VN")),
        (e[28] = c == null ? void 0 : c.createdAt),
        (e[29] = se))
      : (se = e[29]);
    let O;
    e[30] !== se
      ? ((O = t.jsxs(f, {
          justify: "space-between",
          children: [G, t.jsx(r, { className: "text-sm", children: se })],
        })),
        (e[30] = se),
        (e[31] = O))
      : (O = e[31]);
    let le;
    e[32] !== V || e[33] !== L || e[34] !== P || e[35] !== O
      ? ((le = t.jsx(n, {
          children: t.jsxs(_, {
            gap: 4,
            align: "stretch",
            children: [V, L, P, O],
          }),
        })),
        (e[32] = V),
        (e[33] = L),
        (e[34] = P),
        (e[35] = O),
        (e[36] = le))
      : (le = e[36]);
    let ee;
    e[37] !== le || e[38] !== S
      ? ((ee = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md p-6 flex-1",
          children: [S, le],
        })),
        (e[37] = le),
        (e[38] = S),
        (e[39] = ee))
      : (ee = e[39]);
    let Q;
    e[40] === Symbol.for("react.memo_cache_sentinel")
      ? ((Q = t.jsx(n, {
          className: "mb-4",
          children: t.jsx(r, {
            className:
              "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
            children: "Hành động nhanh",
          }),
        })),
        (e[40] = Q))
      : (Q = e[40]);
    let oe;
    e[41] === Symbol.for("react.memo_cache_sentinel")
      ? ((oe = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md p-6 flex-1",
          children: [
            Q,
            t.jsx(n, {
              children: t.jsx(_, {
                gap: 3,
                align: "stretch",
                children: t.jsx(De, {
                  to: Pe.AGENT.PAGES,
                  children: t.jsxs(v, {
                    colorScheme: "blue",
                    variant: "solid",
                    className: "font-[Quicksand,sans-serif] font-medium",
                    children: [
                      t.jsx(ze, { className: "mr-2" }),
                      "Tạo trang mới",
                    ],
                  }),
                }),
              }),
            }),
          ],
        })),
        (e[41] = oe))
      : (oe = e[41]);
    let Z;
    e[42] !== ee
      ? ((Z = t.jsxs(f, { gap: 6, align: "stretch", children: [ee, oe] })),
        (e[42] = ee),
        (e[43] = Z))
      : (Z = e[43]);
    let re;
    e[44] !== c
      ? ((re =
          c &&
          t.jsxs(n, {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [
              t.jsx(n, {
                className: "mb-4",
                children: t.jsx(r, {
                  className:
                    "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
                  children: "Lợi ích level đại lý",
                }),
              }),
              t.jsx(n, {
                children: t.jsxs(_, {
                  align: "start",
                  gap: 3,
                  children: [
                    t.jsxs(f, {
                      gap: 3,
                      children: [
                        t.jsx(de, {
                          colorScheme: c.isUnlimited ? "purple" : "blue",
                          size: "lg",
                          children: it(c.dealerLevel, c.isUnlimited),
                        }),
                        c.isUnlimited &&
                          t.jsx(de, {
                            colorScheme: "purple",
                            variant: "outline",
                            children: "Unlimited Access",
                          }),
                      ],
                    }),
                    t.jsx(r, {
                      className: "text-sm text-gray-700",
                      children: ns(c.dealerLevel, c.isUnlimited),
                    }),
                  ],
                }),
              }),
            ],
          })),
        (e[44] = c),
        (e[45] = re))
      : (re = e[45]);
    let xe;
    e[46] === Symbol.for("react.memo_cache_sentinel")
      ? ((xe = t.jsx(n, {
          className: "mb-4",
          children: t.jsx(r, {
            className:
              "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
            children: "Gói dịch vụ có sẵn",
          }),
        })),
        (e[46] = xe))
      : (xe = e[46]);
    let ie;
    e[47] !== w || e[48] !== p
      ? ((ie = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md p-6",
          children: [
            xe,
            t.jsx(n, {
              children: p
                ? t.jsx(n, {
                    className: "flex justify-center py-8",
                    children: t.jsx(Ce, { color: "blue.500" }),
                  })
                : t.jsx(f, {
                    gap: 4,
                    align: "stretch",
                    children: w == null ? void 0 : w.map(Xs),
                  }),
            }),
          ],
        })),
        (e[47] = w),
        (e[48] = p),
        (e[49] = ie))
      : (ie = e[49]);
    let ae;
    e[50] === Symbol.for("react.memo_cache_sentinel")
      ? ((ae = t.jsx(r, {
          className:
            "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
          children: "Giao dịch gần đây",
        })),
        (e[50] = ae))
      : (ae = e[50]);
    let me;
    e[51] === Symbol.for("react.memo_cache_sentinel")
      ? ((me = (I) => a(I.target.value)), (e[51] = me))
      : (me = e[51]);
    let K, ye, J, ge;
    e[52] === Symbol.for("react.memo_cache_sentinel")
      ? ((K = t.jsx("option", { value: "", children: "Tất cả" })),
        (ye = t.jsx("option", {
          value: "admin_adjust",
          children: "Điều chỉnh admin",
        })),
        (J = t.jsx("option", {
          value: "create_page_charge",
          children: "Phí tạo trang",
        })),
        (ge = t.jsx("option", { value: "refund", children: "Hoàn tiền" })),
        (e[52] = K),
        (e[53] = ye),
        (e[54] = J),
        (e[55] = ge))
      : ((K = e[52]), (ye = e[53]), (J = e[54]), (ge = e[55]));
    let pe;
    e[56] !== s
      ? ((pe = t.jsxs(f, {
          justify: "space-between",
          align: "center",
          className: "mb-4",
          children: [
            ae,
            t.jsxs("select", {
              value: s,
              onChange: me,
              className: "px-3 py-2 border border-gray-300 rounded-md text-sm",
              children: [K, ye, J, ge],
            }),
          ],
        })),
        (e[56] = s),
        (e[57] = pe))
      : (pe = e[57]);
    let ce;
    e[58] !== (g == null ? void 0 : g.data) || e[59] !== U
      ? ((ce = t.jsx(n, {
          children: U
            ? t.jsx(n, {
                className: "flex justify-center py-8",
                children: t.jsx(Ce, { color: "blue.500" }),
              })
            : t.jsx(n, {
                className: "overflow-x-auto",
                children: t.jsxs("table", {
                  className: "w-full",
                  children: [
                    t.jsx("thead", {
                      children: t.jsxs("tr", {
                        className: "border-b",
                        children: [
                          t.jsx("th", {
                            className:
                              "text-left py-2 font-semibold font-[Quicksand,sans-serif]",
                            children: "Loại",
                          }),
                          t.jsx("th", {
                            className:
                              "text-left py-2 font-semibold font-[Quicksand,sans-serif]",
                            children: "Số tiền",
                          }),
                          t.jsx("th", {
                            className:
                              "text-left py-2 font-semibold font-[Quicksand,sans-serif]",
                            children: "Số dư sau",
                          }),
                          t.jsx("th", {
                            className:
                              "text-left py-2 font-semibold font-[Quicksand,sans-serif]",
                            children: "Ghi chú",
                          }),
                          t.jsx("th", {
                            className:
                              "text-left py-2 font-semibold font-[Quicksand,sans-serif]",
                            children: "Ngày",
                          }),
                        ],
                      }),
                    }),
                    t.jsx("tbody", {
                      children:
                        (be = g == null ? void 0 : g.data) == null
                          ? void 0
                          : be.map((I) =>
                              t.jsxs(
                                "tr",
                                {
                                  className: "border-b",
                                  children: [
                                    t.jsx("td", {
                                      className: "py-2",
                                      children: t.jsx(de, {
                                        colorScheme: T(I.type),
                                        children: k(I.type),
                                      }),
                                    }),
                                    t.jsxs("td", {
                                      className: `py-2 font-medium ${
                                        I.amountCents >= 0
                                          ? "text-green-600"
                                          : "text-red-600"
                                      }`,
                                      children: [
                                        I.amountCents >= 0 ? "+" : "",
                                        Me(I.amountCents),
                                      ],
                                    }),
                                    t.jsx("td", {
                                      className: "py-2 font-medium",
                                      children: Me(I.balanceAfterCents),
                                    }),
                                    t.jsx("td", {
                                      className: "py-2 text-sm text-gray-600",
                                      children: I.notes || "-",
                                    }),
                                    t.jsx("td", {
                                      className: "py-2 text-sm text-gray-600",
                                      children: new Date(
                                        I.createdAt
                                      ).toLocaleDateString("vi-VN"),
                                    }),
                                  ],
                                },
                                I.id
                              )
                            ),
                    }),
                  ],
                }),
              }),
        })),
        (e[58] = g == null ? void 0 : g.data),
        (e[59] = U),
        (e[60] = ce))
      : (ce = e[60]);
    let fe;
    e[61] !== pe || e[62] !== ce
      ? ((fe = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md p-6",
          children: [pe, ce],
        })),
        (e[61] = pe),
        (e[62] = ce),
        (e[63] = fe))
      : (fe = e[63]);
    let ve;
    return (
      e[64] !== Z || e[65] !== re || e[66] !== ie || e[67] !== fe
        ? ((ve = t.jsx(n, {
            className: "max-w-6xl mx-auto p-6",
            children: t.jsxs(_, {
              gap: 6,
              align: "stretch",
              children: [u, Z, re, ie, fe],
            }),
          })),
          (e[64] = Z),
          (e[65] = re),
          (e[66] = ie),
          (e[67] = fe),
          (e[68] = ve))
        : (ve = e[68]),
      ve
    );
  };
function Os(e) {
  switch (e) {
    case "admin_adjust":
      return "Điều chỉnh admin";
    case "create_page_charge":
      return "Phí tạo trang";
    case "refund":
      return "Hoàn tiền";
    default:
      return e;
  }
}
function Gs(e) {
  switch (e) {
    case "admin_adjust":
      return "blue";
    case "create_page_charge":
      return "red";
    case "refund":
      return "green";
    default:
      return "gray";
  }
}
function Xs(e) {
  return t.jsx(
    n,
    {
      className: "bg-gray-50 rounded-lg p-4 flex-1",
      children: t.jsx(n, {
        children: t.jsxs(_, {
          gap: 3,
          align: "stretch",
          children: [
            t.jsxs(f, {
              justify: "space-between",
              children: [
                t.jsx(de, {
                  colorScheme: "blue",
                  size: "lg",
                  children: e.tier,
                }),
                t.jsx(r, {
                  className: "font-bold text-lg",
                  children: Me(e.priceCents),
                }),
              ],
            }),
            t.jsxs(_, {
              gap: 2,
              align: "stretch",
              children: [
                t.jsxs(r, {
                  className: "text-sm text-gray-600",
                  children: ["Thời gian cấp: ", e.grantPeriod, " ngày"],
                }),
                t.jsxs(r, {
                  className: "text-sm text-gray-600",
                  children: ["Cấp độ: ", e.grantTier],
                }),
                t.jsx(de, {
                  colorScheme: e.isActive ? "green" : "red",
                  variant: "subtle",
                  size: "sm",
                  children: e.isActive ? "Hoạt động" : "Không hoạt động",
                }),
              ],
            }),
          ],
        }),
      }),
    },
    e.id
  );
}
const Ta = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ys = () => {
    var mt, gt, ht;
    const [e, s] = y.useState(1),
      [a] = y.useState(10),
      [d, c] = y.useState("all"),
      [x, N] = y.useState(""),
      [q, o] = y.useState(""),
      [g, U] = y.useState(""),
      [w, p] = y.useState(null),
      [k, T] = y.useState(!1),
      [u, j] = y.useState(!1),
      [A, ne] = y.useState(!1),
      [S, R] = y.useState(!1),
      [X, Y] = y.useState(!1),
      [V, H] = y.useState(!1),
      [b, E] = y.useState(!1),
      [L, D] = y.useState(!1),
      [m, $] = y.useState(null),
      [M, i] = y.useState(!1),
      [P, G] = y.useState(""),
      [se, O] = y.useState(""),
      [le, ee] = y.useState(""),
      [Q, oe] = y.useState({
        title: "",
        templateId: "",
        templateName: "",
        domain: "",
        eventAt: "",
      }),
      [Z, re] = y.useState(null),
      [xe, ie] = y.useState(!1),
      [ae, me] = y.useState({
        title: "",
        dealerTier: $e.FREE,
        domain: "",
        eventAt: "",
      }),
      [K, ye] = y.useState({
        title: "",
        dealerTier: $e.FREE,
        templateId: "",
        templateName: "",
        domain: "",
        eventAt: new Date(),
      }),
      [J, ge] = y.useState({
        recipientEmail: "",
        recipientFullName: "",
        recipientPassword: "",
        handoffType: "existing",
      });
    y.useEffect(() => {
      const l = setTimeout(() => {
        o(g), s(1);
      }, 500);
      return () => clearTimeout(l);
    }, [g]);
    const pe = () => {
        const l = { page: e, limit: a, search: q || void 0 };
        return (
          d === "template"
            ? (l.isCatalogTemplate = !0)
            : d === "real"
            ? ((l.isCatalogTemplate = !1), (l.handoffStatus = x || void 0))
            : x && (l.handoffStatus = x),
          l
        );
      },
      { data: ce, isLoading: fe, isFetching: ve, refetch: be } = Dt(pe()),
      I = (ce == null ? void 0 : ce.data) || [],
      Se = (ce == null ? void 0 : ce.totalPages) || 1,
      ke = (ce == null ? void 0 : ce.total) || 0,
      { data: je } = dt(),
      { data: Le, isLoading: _e } = $t(),
      Ae = ds(),
      Fe = hs(),
      Ie = xs(),
      Ke = ms(),
      qe = gs(),
      Re = ps(),
      Ze = async () => {
        var l, h;
        if (!Q.title.trim()) {
          C.error({ title: "Lỗi", description: "Vui lòng nhập tiêu đề trang" });
          return;
        }
        if (!/^[a-z0-9-]+$/.test(Q.domain)) {
          C.error({
            title: "Lỗi",
            description:
              "Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang",
          });
          return;
        }
        if (Q.domain.length < 3) {
          C.error({
            title: "Lỗi",
            description: "Domain phải có ít nhất 3 ký tự",
          });
          return;
        }
        if (Z && !Z.available) {
          C.error({ title: "Lỗi", description: Z.message });
          return;
        }
        if (xe) {
          C.error({
            title: "Lỗi",
            description: "Đang kiểm tra domain, vui lòng đợi",
          });
          return;
        }
        try {
          const B = await Fe.mutateAsync({
            title: Q.title,
            templateId: Q.templateId ? parseInt(Q.templateId) : void 0,
            domain: Q.domain,
            eventAt: Q.eventAt || void 0,
          });
          C.success({
            title: "Thành công",
            description:
              "Tạo trang template miễn phí thành công! Bạn có thể thêm vào catalog sau.",
          }),
            j(!1),
            oe({
              title: "",
              templateId: "",
              templateName: "",
              domain: "",
              eventAt: "",
            }),
            re(null),
            be(),
            B != null &&
              B.pageId &&
              window.open(
                `${Pe.USER.BUILDER.replace(":id", B.pageId.toString())}`,
                "_blank"
              );
        } catch (B) {
          C.error({
            title: "Lỗi",
            description:
              ((h = (l = B.response) == null ? void 0 : l.data) == null
                ? void 0
                : h.message) || "Có lỗi xảy ra khi tạo trang template",
          });
        }
      },
      Je = async () => {
        var l, h;
        if (w) {
          if (!ae.title.trim()) {
            C.error({
              title: "Lỗi",
              description: "Vui lòng nhập tiêu đề trang",
            });
            return;
          }
          if (ae.domain) {
            if (!/^[a-z0-9-]+$/.test(ae.domain)) {
              C.error({
                title: "Lỗi",
                description:
                  "Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang",
              });
              return;
            }
            if (ae.domain.length < 3) {
              C.error({
                title: "Lỗi",
                description: "Domain phải có ít nhất 3 ký tự",
              });
              return;
            }
          }
          try {
            const B = await Ie.mutateAsync({
              templatePageId: w.pageId,
              title: ae.title,
              dealerTier: ae.dealerTier,
              domain: ae.domain || void 0,
              eventAt: ae.eventAt || void 0,
            });
            C.success({
              title: "Thành công",
              description: `Clone thành trang thực (${ae.dealerTier.toUpperCase()}) thành công!`,
            }),
              E(!1),
              p(null),
              me({ title: "", dealerTier: $e.FREE, domain: "", eventAt: "" }),
              be(),
              B != null &&
                B.pageId &&
                window.open(
                  `${Pe.USER.BUILDER.replace(":id", B.pageId.toString())}`,
                  "_blank"
                );
          } catch (B) {
            C.error({
              title: "Lỗi",
              description:
                ((h = (l = B.response) == null ? void 0 : l.data) == null
                  ? void 0
                  : h.message) || "Có lỗi xảy ra khi clone trang",
            });
          }
        }
      },
      et = async () => {
        var l, h;
        if (!K.title.trim()) {
          C.error({ title: "Lỗi", description: "Vui lòng nhập tiêu đề trang" });
          return;
        }
        if (!/^[a-z0-9-]+$/.test(K.domain)) {
          C.error({
            title: "Lỗi",
            description:
              "Domain chỉ được sử dụng chữ thường, số và dấu gạch ngang",
          });
          return;
        }
        if (K.domain.length < 3) {
          C.error({
            title: "Lỗi",
            description: "Domain phải có ít nhất 3 ký tự",
          });
          return;
        }
        if (m && !m.available) {
          C.error({ title: "Lỗi", description: m.message });
          return;
        }
        if (M) {
          C.error({
            title: "Lỗi",
            description: "Đang kiểm tra domain, vui lòng đợi",
          });
          return;
        }
        try {
          const B = await Ae.mutateAsync({
            title: K.title,
            dealerTier: K.dealerTier,
            templateId: K.templateId ? parseInt(K.templateId) : void 0,
            domain: K.domain,
            eventAt: K.eventAt,
          });
          C.success({
            title: "Thành công",
            description: "Tạo trang thành công!",
          }),
            T(!1),
            ye({
              title: "",
              dealerTier: $e.FREE,
              templateId: "",
              templateName: "",
              domain: "",
              eventAt: new Date(),
            }),
            $(null),
            be(),
            B != null &&
              B.pageId &&
              window.open(
                `${Pe.USER.BUILDER.replace(":id", B.pageId.toString())}`,
                "_blank"
              );
        } catch (B) {
          C.error({
            title: "Lỗi",
            description:
              ((h = (l = B.response) == null ? void 0 : l.data) == null
                ? void 0
                : h.message) || "Có lỗi xảy ra khi tạo trang",
          });
        }
      },
      tt = async () => {
        var l, h, B;
        if (w) {
          if ((l = w.page) != null && l.isCatalogTemplate) {
            C.error({
              title: "Không thể bàn giao",
              description:
                "Trang template không thể bàn giao. Vui lòng clone thành trang thực trước.",
            });
            return;
          }
          if (J.handoffType === "existing" && !J.recipientEmail) {
            C.error({
              title: "Lỗi",
              description: "Vui lòng nhập ID người dùng",
            });
            return;
          }
          if (
            J.handoffType === "new" &&
            (!J.recipientEmail || !J.recipientFullName || !J.recipientPassword)
          ) {
            C.error({
              title: "Lỗi",
              description: "Vui lòng điền đầy đủ thông tin người nhận",
            });
            return;
          }
          try {
            const Qe =
              J.handoffType === "existing"
                ? { recipientEmail: J.recipientEmail }
                : {
                    recipient: {
                      email: J.recipientEmail,
                      fullName: J.recipientFullName,
                      password: J.recipientPassword,
                    },
                  };
            await Ke.mutateAsync({ id: w.id, data: Qe }),
              C.success({
                title: "Thành công",
                description: "Chuyển giao trang thành công!",
              }),
              ne(!1),
              p(null),
              ge({
                recipientEmail: "",
                recipientFullName: "",
                recipientPassword: "",
                handoffType: "existing",
              }),
              be();
          } catch (Qe) {
            C.error({
              title: "Lỗi",
              description:
                ((B = (h = Qe.response) == null ? void 0 : h.data) == null
                  ? void 0
                  : B.message) || "Có lỗi xảy ra khi chuyển giao trang",
            });
          }
        }
      },
      st = (l) => {
        switch (l) {
          case "FREE":
            return "green";
          case "PRO":
            return "blue";
          case "VIP":
            return "purple";
          default:
            return "gray";
        }
      },
      He = (l) => {
        switch (l) {
          case "draft":
            return "yellow";
          case "ready":
            return "orange";
          case "handed":
            return "green";
          default:
            return "gray";
        }
      },
      We = (l) => {
        switch (l) {
          case "draft":
            return "Bản nháp";
          case "ready":
            return "Sẵn sàng";
          case "handed":
            return "Đã chuyển giao";
          default:
            return l;
        }
      },
      Ve = (l) => (je ? At(je, l).canCreate : !1),
      Be = (l) => {
        if (!je) return null;
        const h = At(je, l);
        return {
          priceCents: h.priceCents,
          priceDisplay:
            h.priceCents === 0
              ? "Miễn phí"
              : `${(h.priceCents / 1e3).toLocaleString("vi-VN")}k VND`,
          isAvailable: h.canCreate,
          reason: h.reason,
        };
      },
      Te = (l) => {
        ye((h) => ({
          ...h,
          templateId: l.id.toString(),
          templateName: l.name,
        })),
          R(!1);
      },
      Ue = (l) => {
        oe((h) => ({
          ...h,
          templateId: l.id.toString(),
          templateName: l.name,
        })),
          Y(!1);
      },
      Qt = async () => {
        var l, h;
        if (w) {
          if (!P.trim()) {
            C.error({
              title: "Lỗi",
              description: "Vui lòng nhập tiêu đề cho trang mới",
            });
            return;
          }
          try {
            const B = { title: P };
            se.trim() && (B.domain = se.trim()),
              le && (B.eventAt = le),
              await qe.mutateAsync({ id: w.id, data: B }),
              C.success({
                title: "Thành công",
                description: "Nhân bản trang thành công!",
              }),
              H(!1),
              p(null),
              G(""),
              O(""),
              ee(""),
              be();
          } catch (B) {
            C.error({
              title: "Lỗi",
              description:
                ((h = (l = B.response) == null ? void 0 : l.data) == null
                  ? void 0
                  : h.message) || "Có lỗi xảy ra khi nhân bản trang",
            });
          }
        }
      },
      Mt = async () => {
        var l, h;
        if (w)
          try {
            await Re.mutateAsync(w.id),
              C.success({
                title: "Thành công",
                description:
                  w.handoffStatus === "handed"
                    ? "Đã xóa trang khỏi danh sách dealer page"
                    : "Đã xóa trang hoàn toàn",
              }),
              D(!1),
              p(null),
              be();
          } catch (B) {
            C.error({
              title: "Lỗi",
              description:
                ((h = (l = B.response) == null ? void 0 : l.data) == null
                  ? void 0
                  : h.message) || "Có lỗi xảy ra khi xóa trang",
            });
          }
      },
      Kt = () => {
        ye((l) => ({ ...l, templateId: "", templateName: "" }));
      };
    return (
      y.useEffect(() => {
        if (!K.domain || K.domain.length < 3) {
          $(null);
          return;
        }
        const l = setTimeout(async () => {
          i(!0);
          try {
            const h = `${K.domain}.mehappy.info`,
              B = await te.checkDomainAvailability(h);
            $({
              available: B.available,
              message: B.available
                ? `Tên miền "${h}" có thể sử dụng`
                : `Tên miền "${h}" đã được sử dụng`,
            });
          } catch {
            $({ available: !1, message: "Lỗi kiểm tra tên miền" });
          } finally {
            i(!1);
          }
        }, 500);
        return () => clearTimeout(l);
      }, [K.domain]),
      y.useEffect(() => {
        if (!Q.domain || Q.domain.length < 3) {
          re(null);
          return;
        }
        const l = setTimeout(async () => {
          ie(!0);
          try {
            const h = `${Q.domain}.mehappy.info`,
              B = await te.checkDomainAvailability(h);
            re({
              available: B.available,
              message: B.available
                ? `Tên miền "${h}" có thể sử dụng`
                : `Tên miền "${h}" đã được sử dụng`,
            });
          } catch {
            re({ available: !1, message: "Lỗi kiểm tra tên miền" });
          } finally {
            ie(!1);
          }
        }, 500);
        return () => clearTimeout(l);
      }, [Q.domain]),
      fe || _e
        ? t.jsx(n, {
            className: "flex justify-center items-center h-64",
            children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
          })
        : t.jsxs(n, {
            className: "max-w-6xl mx-auto p-6",
            children: [
              t.jsxs(_, {
                gap: 6,
                align: "stretch",
                children: [
                  t.jsxs(n, {
                    children: [
                      t.jsxs(f, {
                        justify: "space-between",
                        align: "center",
                        mb: 4,
                        children: [
                          t.jsxs(n, {
                            children: [
                              t.jsx(r, {
                                className:
                                  "text-2xl font-bold text-gray-800 font-[Quicksand,sans-serif] mb-2",
                                children: "Quản lý trang",
                              }),
                              t.jsx(r, {
                                className:
                                  "text-gray-600 font-[Quicksand,sans-serif]",
                                children:
                                  "Tạo và quản lý các trang web cho khách hàng",
                              }),
                            ],
                          }),
                          t.jsxs(f, {
                            gap: 2,
                            children: [
                              t.jsxs(v, {
                                variant: "outline",
                                colorScheme: "green",
                                onClick: () => j(!0),
                                className:
                                  "font-[Quicksand,sans-serif] font-medium",
                                children: [
                                  t.jsx(Xe, { className: "mr-2" }),
                                  "Tạo Template",
                                ],
                              }),
                              t.jsxs(v, {
                                colorScheme: "blue",
                                onClick: () => T(!0),
                                className:
                                  "font-[Quicksand,sans-serif] font-medium",
                                children: [
                                  t.jsx(ze, { className: "mr-2" }),
                                  "Tạo Trang",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs(f, {
                        gap: 2,
                        className: "border-b border-gray-200",
                        children: [
                          t.jsxs("button", {
                            onClick: () => {
                              c("all"), s(1);
                            },
                            className: `px-4 py-2 font-medium transition-colors ${
                              d === "all"
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600 hover:text-gray-800"
                            }`,
                            children: ["Tất cả (", ke, ")"],
                          }),
                          t.jsxs("button", {
                            onClick: () => {
                              c("template"), s(1);
                            },
                            className: `px-4 py-2 font-medium transition-colors ${
                              d === "template"
                                ? "text-green-600 border-b-2 border-green-600"
                                : "text-gray-600 hover:text-gray-800"
                            }`,
                            children: [
                              t.jsx(Xe, { className: "inline mr-1" }),
                              "Template",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs(n, {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      t.jsxs(n, {
                        className: "flex-1 relative",
                        children: [
                          t.jsx("input", {
                            type: "text",
                            value: g,
                            onChange: (l) => U(l.target.value),
                            placeholder: "🔍 Tìm kiếm theo tiêu đề, domain",
                            className:
                              "w-full px-4 py-2 pr-20 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                          t.jsxs(n, {
                            className:
                              "absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2",
                            children: [
                              ve &&
                                t.jsx(Ce, { size: "sm", color: "blue.500" }),
                              g &&
                                t.jsx("button", {
                                  onClick: () => U(""),
                                  className:
                                    "text-gray-400 hover:text-gray-600",
                                  title: "Xóa tìm kiếm",
                                  children: "✕",
                                }),
                            ],
                          }),
                        ],
                      }),
                      d === "real" &&
                        t.jsx(n, {
                          className: "sm:w-48",
                          children: t.jsxs("select", {
                            value: x,
                            onChange: (l) => {
                              N(l.target.value), s(1);
                            },
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            children: [
                              t.jsx("option", {
                                value: "",
                                children: "Tất cả trạng thái",
                              }),
                              t.jsx("option", {
                                value: "draft",
                                children: "Bản nháp",
                              }),
                              t.jsx("option", {
                                value: "ready",
                                children: "Sẵn sàng",
                              }),
                              t.jsx("option", {
                                value: "handed",
                                children: "Đã chuyển giao",
                              }),
                            ],
                          }),
                        }),
                      (q || x) &&
                        t.jsx(v, {
                          size: "sm",
                          variant: "ghost",
                          onClick: () => {
                            U(""), o(""), N(""), s(1);
                          },
                          className: "font-[Quicksand,sans-serif]",
                          children: "Xóa bộ lọc",
                        }),
                    ],
                  }),
                  t.jsxs(n, {
                    className: "bg-white rounded-lg shadow-md overflow-hidden",
                    children: [
                      t.jsx(n, {
                        className: "px-6 py-4 border-b bg-gray-50",
                        children: t.jsxs(r, {
                          className:
                            "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
                          children: [
                            "Danh sách trang (",
                            (I == null ? void 0 : I.length) || 0,
                            ")",
                          ],
                        }),
                      }),
                      t.jsx(n, {
                        children:
                          (I == null ? void 0 : I.length) === 0
                            ? t.jsx(n, {
                                className: "p-6",
                                children: t.jsx(n, {
                                  className:
                                    "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                  children: t.jsxs(n, {
                                    className: "flex items-start gap-3",
                                    children: [
                                      t.jsx(n, {
                                        className: "text-blue-500 text-xl",
                                        children: "ℹ️",
                                      }),
                                      t.jsxs(n, {
                                        children: [
                                          t.jsx(r, {
                                            className:
                                              "font-medium text-blue-800",
                                            children: "Chưa có trang nào",
                                          }),
                                          t.jsx(r, {
                                            className:
                                              "text-sm mt-1 text-blue-700",
                                            children:
                                              "Tạo trang đầu tiên để bắt đầu kinh doanh.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              })
                            : t.jsx(n, {
                                className: "overflow-x-auto",
                                children: t.jsxs("table", {
                                  className: "w-full",
                                  children: [
                                    t.jsx("thead", {
                                      className:
                                        "bg-gray-50 border-b-2 border-gray-200",
                                      children: t.jsxs("tr", {
                                        children: [
                                          t.jsx("th", {
                                            className:
                                              "text-left px-4 py-3 font-semibold text-gray-700 text-sm font-[Quicksand,sans-serif]",
                                            children: "Thông tin trang",
                                          }),
                                          t.jsx("th", {
                                            className:
                                              "text-left px-4 py-3 font-semibold text-gray-700 text-sm font-[Quicksand,sans-serif]",
                                            children: "Template",
                                          }),
                                          t.jsx("th", {
                                            className:
                                              "text-left px-4 py-3 font-semibold text-gray-700 text-sm font-[Quicksand,sans-serif]",
                                            children: "Trạng thái",
                                          }),
                                          t.jsx("th", {
                                            className:
                                              "text-left px-4 py-3 font-semibold text-gray-700 text-sm font-[Quicksand,sans-serif]",
                                            children: "Ngày tạo",
                                          }),
                                          t.jsx("th", {
                                            className:
                                              "text-center px-4 py-3 font-semibold text-gray-700 text-sm font-[Quicksand,sans-serif]",
                                            children: "Hành động",
                                          }),
                                        ],
                                      }),
                                    }),
                                    t.jsx("tbody", {
                                      className: "divide-y divide-gray-100",
                                      children:
                                        I == null
                                          ? void 0
                                          : I.map((l) => {
                                              var h,
                                                B,
                                                Qe,
                                                ut,
                                                xt,
                                                pt,
                                                ft,
                                                yt,
                                                bt,
                                                jt,
                                                Nt;
                                              return t.jsxs(
                                                "tr",
                                                {
                                                  className:
                                                    "hover:bg-gray-50 transition-colors",
                                                  children: [
                                                    t.jsx("td", {
                                                      className: "px-4 py-4",
                                                      children: t.jsxs(_, {
                                                        align: "start",
                                                        gap: 1,
                                                        children: [
                                                          t.jsxs(f, {
                                                            gap: 2,
                                                            align: "center",
                                                            children: [
                                                              t.jsx(r, {
                                                                className:
                                                                  "font-semibold text-gray-900 text-base",
                                                                children:
                                                                  ((h =
                                                                    l.page) ==
                                                                  null
                                                                    ? void 0
                                                                    : h.title) ||
                                                                  `Trang #${l.pageId}`,
                                                              }),
                                                              ((B = l.page) ==
                                                              null
                                                                ? void 0
                                                                : B.isCatalogTemplate) &&
                                                                t.jsxs(de, {
                                                                  colorScheme:
                                                                    "green",
                                                                  size: "sm",
                                                                  className:
                                                                    "shrink-0",
                                                                  children: [
                                                                    t.jsx(Xe, {
                                                                      className:
                                                                        "inline mr-1",
                                                                    }),
                                                                    "TEMPLATE",
                                                                  ],
                                                                }),
                                                            ],
                                                          }),
                                                          t.jsxs(f, {
                                                            gap: 2,
                                                            children: [
                                                              !(
                                                                (Qe = l.page) !=
                                                                  null &&
                                                                Qe.isCatalogTemplate
                                                              ) &&
                                                                t.jsxs(
                                                                  t.Fragment,
                                                                  {
                                                                    children: [
                                                                      t.jsx(
                                                                        de,
                                                                        {
                                                                          colorScheme:
                                                                            st(
                                                                              l.tier
                                                                            ),
                                                                          size: "sm",
                                                                          className:
                                                                            "uppercase",
                                                                          children:
                                                                            l.tier,
                                                                        }
                                                                      ),
                                                                      l.chargedCents >
                                                                      0
                                                                        ? t.jsx(
                                                                            r,
                                                                            {
                                                                              className:
                                                                                "text-xs font-medium text-red-600",
                                                                              children:
                                                                                Me(
                                                                                  l.chargedCents
                                                                                ),
                                                                            }
                                                                          )
                                                                        : t.jsx(
                                                                            r,
                                                                            {
                                                                              className:
                                                                                "text-xs text-gray-500",
                                                                              children:
                                                                                "Miễn phí",
                                                                            }
                                                                          ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ((ut = l.page) ==
                                                              null
                                                                ? void 0
                                                                : ut.isCatalogTemplate) &&
                                                                t.jsx(r, {
                                                                  className:
                                                                    "text-xs font-medium text-green-600",
                                                                  children:
                                                                    "✨ MIỄN PHÍ",
                                                                }),
                                                            ],
                                                          }),
                                                          t.jsxs(r, {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children: [
                                                              "🌐 ",
                                                              ((xt = l.page) ==
                                                              null
                                                                ? void 0
                                                                : xt.domain) ||
                                                                "Chưa có domain",
                                                            ],
                                                          }),
                                                          ((pt = l.page) == null
                                                            ? void 0
                                                            : pt.isPublic) !==
                                                            void 0 &&
                                                            t.jsx(de, {
                                                              colorScheme: l
                                                                .page.isPublic
                                                                ? "green"
                                                                : "gray",
                                                              size: "sm",
                                                              variant: "subtle",
                                                              children: l.page
                                                                .isPublic
                                                                ? "👁️ Công khai"
                                                                : "🔒 Riêng tư",
                                                            }),
                                                        ],
                                                      }),
                                                    }),
                                                    t.jsx("td", {
                                                      className: "px-4 py-4",
                                                      children: t.jsxs(_, {
                                                        align: "start",
                                                        gap: 1,
                                                        children: [
                                                          t.jsx(r, {
                                                            className:
                                                              "text-sm font-medium text-gray-800",
                                                            children:
                                                              ((ft = l.page) ==
                                                              null
                                                                ? void 0
                                                                : ft.templateName) ||
                                                              "N/A",
                                                          }),
                                                          t.jsxs(r, {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children: [
                                                              "ID: ",
                                                              ((yt = l.page) ==
                                                              null
                                                                ? void 0
                                                                : yt.templateId) ||
                                                                "N/A",
                                                            ],
                                                          }),
                                                          ((bt = l.page) == null
                                                            ? void 0
                                                            : bt.status) &&
                                                            t.jsx(de, {
                                                              colorScheme:
                                                                l.page
                                                                  .status ===
                                                                "draft"
                                                                  ? "yellow"
                                                                  : "green",
                                                              size: "sm",
                                                              variant: "subtle",
                                                              children:
                                                                l.page
                                                                  .status ===
                                                                "draft"
                                                                  ? "📝 Nháp"
                                                                  : "✅ Đã xuất bản",
                                                            }),
                                                        ],
                                                      }),
                                                    }),
                                                    t.jsx("td", {
                                                      className: "px-4 py-4",
                                                      children: t.jsxs(_, {
                                                        align: "start",
                                                        gap: 2,
                                                        children: [
                                                          t.jsx(de, {
                                                            colorScheme: He(
                                                              l.handoffStatus
                                                            ),
                                                            className:
                                                              "font-medium",
                                                            children: We(
                                                              l.handoffStatus
                                                            ),
                                                          }),
                                                          l.handoffStatus ===
                                                            "handed" &&
                                                            l.handedToUser &&
                                                            t.jsxs(_, {
                                                              align: "start",
                                                              gap: 0.5,
                                                              children: [
                                                                t.jsxs(r, {
                                                                  className:
                                                                    "text-xs font-medium text-gray-700",
                                                                  children: [
                                                                    "👤 ",
                                                                    l
                                                                      .handedToUser
                                                                      .fullName ||
                                                                      l
                                                                        .handedToUser
                                                                        .email,
                                                                  ],
                                                                }),
                                                                l.handedToUser
                                                                  .fullName &&
                                                                  t.jsx(r, {
                                                                    className:
                                                                      "text-xs text-gray-500",
                                                                    children:
                                                                      l
                                                                        .handedToUser
                                                                        .email,
                                                                  }),
                                                                t.jsxs(r, {
                                                                  className:
                                                                    "text-xs text-gray-400",
                                                                  children: [
                                                                    "ID: ",
                                                                    l.handedToUserId,
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          l.handoffAt &&
                                                            t.jsxs(r, {
                                                              className:
                                                                "text-xs text-gray-500",
                                                              children: [
                                                                "🔄 ",
                                                                new Date(
                                                                  l.handoffAt
                                                                ).toLocaleDateString(
                                                                  "vi-VN",
                                                                  {
                                                                    day: "2-digit",
                                                                    month:
                                                                      "2-digit",
                                                                    year: "numeric",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                    }),
                                                    t.jsx("td", {
                                                      className: "px-4 py-4",
                                                      children: t.jsxs(_, {
                                                        align: "start",
                                                        gap: 1,
                                                        children: [
                                                          t.jsx(r, {
                                                            className:
                                                              "text-sm text-gray-700",
                                                            children: new Date(
                                                              l.createdAt
                                                            ).toLocaleDateString(
                                                              "vi-VN",
                                                              {
                                                                day: "2-digit",
                                                                month:
                                                                  "2-digit",
                                                                year: "numeric",
                                                              }
                                                            ),
                                                          }),
                                                          t.jsx(r, {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children: new Date(
                                                              l.createdAt
                                                            ).toLocaleTimeString(
                                                              "vi-VN",
                                                              {
                                                                hour: "2-digit",
                                                                minute:
                                                                  "2-digit",
                                                              }
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    t.jsx("td", {
                                                      className: "px-4 py-4",
                                                      children: t.jsxs(_, {
                                                        gap: 2,
                                                        align: "center",
                                                        children: [
                                                          t.jsxs(f, {
                                                            gap: 1,
                                                            justify: "center",
                                                            flexWrap: "wrap",
                                                            children: [
                                                              t.jsx(De, {
                                                                to: `${Pe.AGENT.PAGE_DETAIL.replace(
                                                                  ":id",
                                                                  l.id.toString()
                                                                )}`,
                                                                children: t.jsx(
                                                                  v,
                                                                  {
                                                                    size: "sm",
                                                                    variant:
                                                                      "ghost",
                                                                    colorScheme:
                                                                      "blue",
                                                                    className:
                                                                      "font-[Quicksand,sans-serif]",
                                                                    title:
                                                                      "Xem chi tiết",
                                                                    children:
                                                                      t.jsx(
                                                                        Rt,
                                                                        {
                                                                          size: 16,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              }),
                                                              t.jsx(De, {
                                                                to: `${Pe.AGENT.PAGE_EDIT.replace(
                                                                  ":id",
                                                                  l.id.toString()
                                                                )}`,
                                                                children: t.jsx(
                                                                  v,
                                                                  {
                                                                    size: "sm",
                                                                    variant:
                                                                      "ghost",
                                                                    colorScheme:
                                                                      "orange",
                                                                    className:
                                                                      "font-[Quicksand,sans-serif]",
                                                                    title:
                                                                      "Chỉnh sửa",
                                                                    children:
                                                                      t.jsx(
                                                                        ot,
                                                                        {
                                                                          size: 16,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              }),
                                                              (jt = l.page) !=
                                                                null &&
                                                              jt.isCatalogTemplate
                                                                ? t.jsxs(v, {
                                                                    size: "sm",
                                                                    variant:
                                                                      "ghost",
                                                                    colorScheme:
                                                                      "green",
                                                                    onClick:
                                                                      () => {
                                                                        var Oe;
                                                                        p(l),
                                                                          me({
                                                                            title: `${
                                                                              ((Oe =
                                                                                l.page) ==
                                                                              null
                                                                                ? void 0
                                                                                : Oe.title) ||
                                                                              `Trang #${l.pageId}`
                                                                            }`,
                                                                            dealerTier:
                                                                              $e.FREE,
                                                                            domain:
                                                                              "",
                                                                            eventAt:
                                                                              "",
                                                                          }),
                                                                          E(!0);
                                                                      },
                                                                    className:
                                                                      "font-[Quicksand,sans-serif]",
                                                                    title:
                                                                      "Clone thành trang thực",
                                                                    children: [
                                                                      t.jsx(
                                                                        vt,
                                                                        {
                                                                          size: 16,
                                                                          className:
                                                                            "mr-1",
                                                                        }
                                                                      ),
                                                                      "Real",
                                                                    ],
                                                                  })
                                                                : t.jsx(v, {
                                                                    size: "sm",
                                                                    variant:
                                                                      "ghost",
                                                                    colorScheme:
                                                                      "purple",
                                                                    onClick:
                                                                      () => {
                                                                        var Oe;
                                                                        p(l),
                                                                          G(
                                                                            `${
                                                                              (Oe =
                                                                                l.page) !=
                                                                                null &&
                                                                              Oe.title
                                                                                ? `Bản sao - ${l.page.title}`
                                                                                : `Bản sao - Trang #${l.pageId}`
                                                                            }`
                                                                          ),
                                                                          O(""),
                                                                          ee(
                                                                            ""
                                                                          ),
                                                                          H(!0);
                                                                      },
                                                                    className:
                                                                      "font-[Quicksand,sans-serif]",
                                                                    title:
                                                                      "Nhân bản",
                                                                    children:
                                                                      t.jsx(
                                                                        vt,
                                                                        {
                                                                          size: 16,
                                                                        }
                                                                      ),
                                                                  }),
                                                              t.jsx(v, {
                                                                size: "sm",
                                                                variant:
                                                                  "ghost",
                                                                colorScheme:
                                                                  "red",
                                                                onClick: () => {
                                                                  p(l), D(!0);
                                                                },
                                                                className:
                                                                  "font-[Quicksand,sans-serif]",
                                                                title: "Xóa",
                                                                children: t.jsx(
                                                                  rt,
                                                                  { size: 16 }
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          !(
                                                            l != null &&
                                                            l.isCatalogTemplate
                                                          ) &&
                                                            l.handoffStatus ===
                                                              "draft" &&
                                                            t.jsxs(v, {
                                                              size: "sm",
                                                              colorScheme:
                                                                "green",
                                                              onClick: () => {
                                                                p(l), ne(!0);
                                                              },
                                                              className:
                                                                "font-[Quicksand,sans-serif] w-full",
                                                              children: [
                                                                t.jsx(Ht, {
                                                                  className:
                                                                    "mr-1",
                                                                  size: 14,
                                                                }),
                                                                "Chuyển giao",
                                                              ],
                                                            }),
                                                          ((Nt = l.page) == null
                                                            ? void 0
                                                            : Nt.isCatalogTemplate) &&
                                                            t.jsx(r, {
                                                              className:
                                                                "text-xs text-green-600 text-center font-medium",
                                                              children:
                                                                "⚠️ Template (không thể handoff)",
                                                            }),
                                                        ],
                                                      }),
                                                    }),
                                                  ],
                                                },
                                                l.id
                                              );
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                      }),
                      I.length > 0 &&
                        t.jsx(n, {
                          className: "px-6 py-4 border-t border-gray-200",
                          children: t.jsxs(f, {
                            justify: "space-between",
                            align: "center",
                            flexWrap: "wrap",
                            gap: 3,
                            children: [
                              t.jsx(r, {
                                className: "text-sm text-gray-600",
                                children: q
                                  ? t.jsxs(t.Fragment, {
                                      children: [
                                        "Tìm thấy ",
                                        ke,
                                        " kết quả • Hiển thị ",
                                        I.length,
                                        " trang",
                                      ],
                                    })
                                  : t.jsxs(t.Fragment, {
                                      children: [
                                        "Hiển thị ",
                                        I.length,
                                        " / ",
                                        ke,
                                        " trang",
                                      ],
                                    }),
                              }),
                              Se > 1 &&
                                t.jsxs(f, {
                                  gap: 2,
                                  children: [
                                    t.jsx(v, {
                                      size: "sm",
                                      variant: "outline",
                                      onClick: () =>
                                        s((l) => Math.max(1, l - 1)),
                                      disabled: e === 1,
                                      className: "font-[Quicksand,sans-serif]",
                                      children: "Trước",
                                    }),
                                    t.jsxs(r, {
                                      className:
                                        "text-sm px-3 py-1 bg-gray-100 rounded",
                                      children: ["Trang ", e, " / ", Se],
                                    }),
                                    t.jsx(v, {
                                      size: "sm",
                                      variant: "outline",
                                      onClick: () =>
                                        s((l) => Math.min(Se, l + 1)),
                                      disabled: e === Se,
                                      className: "font-[Quicksand,sans-serif]",
                                      children: "Sau",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              t.jsxs(Ee, {
                isOpen: u,
                title: "Tạo Trang Template",
                onClose: () => j(!1),
                maxWidth: "480px",
                children: [
                  t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsx(n, {
                        className:
                          "bg-green-50 border border-green-200 rounded p-3",
                        children: t.jsxs(r, {
                          className: "text-sm text-green-800",
                          children: [
                            "✨ Trang template hoàn toàn miễn phí! Dùng để showcase trong catalog.",
                            t.jsx("strong", {
                              children: " Không thể bàn giao",
                            }),
                            " cho khách hàng.",
                          ],
                        }),
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tiêu đề trang *",
                          }),
                          t.jsx("input", {
                            type: "text",
                            value: Q.title,
                            onChange: (l) =>
                              oe((h) => ({ ...h, title: l.target.value })),
                            placeholder: "VD: Thiết kế Cưới Sang Trọng",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Template gốc",
                          }),
                          t.jsx(v, {
                            onClick: () => Y(!0),
                            variant: "outline",
                            className: "w-full",
                            children: Q.templateName || "Chọn template",
                          }),
                          Q.templateName &&
                            t.jsxs(r, {
                              className: "text-xs text-gray-500 mt-1",
                              children: ["Đã chọn: ", Q.templateName],
                            }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Domain *",
                          }),
                          t.jsxs(f, {
                            children: [
                              t.jsx("input", {
                                type: "text",
                                value: Q.domain,
                                onChange: (l) =>
                                  oe((h) => ({ ...h, domain: l.target.value })),
                                placeholder: "john-mary-wedding",
                                className:
                                  "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                              }),
                              t.jsx(r, {
                                color: "gray.600",
                                children: ".mehappy.info",
                              }),
                              xe && t.jsx(Ce, { size: "sm" }),
                            ],
                          }),
                          Z &&
                            t.jsx(n, {
                              mt: 2,
                              p: 3,
                              borderRadius: "md",
                              bg: Z.available ? "green.50" : "red.50",
                              border: "1px solid",
                              borderColor: Z.available
                                ? "green.200"
                                : "red.200",
                              children: t.jsx(f, {
                                children: Z.available
                                  ? t.jsxs(r, {
                                      color: "green.700",
                                      fontSize: "sm",
                                      children: ["✓ ", Z.message],
                                    })
                                  : t.jsxs(r, {
                                      color: "red.700",
                                      fontSize: "sm",
                                      children: ["✗ ", Z.message],
                                    }),
                              }),
                            }),
                          t.jsx(r, {
                            fontSize: "xs",
                            color: "gray.500",
                            mt: 2,
                            children:
                              'Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự "-".',
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Ngày sự kiện (tùy chọn)",
                          }),
                          t.jsx("input", {
                            type: "date",
                            value: Q.eventAt,
                            onChange: (l) =>
                              oe((h) => ({ ...h, eventAt: l.target.value })),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs(f, {
                    justify: "end",
                    gap: 3,
                    mt: 6,
                    children: [
                      t.jsx(v, {
                        variant: "ghost",
                        onClick: () => j(!1),
                        children: "Hủy",
                      }),
                      t.jsx(v, {
                        colorScheme: "green",
                        onClick: Ze,
                        loading: Fe.isPending,
                        children: "Tạo Template",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs(Ee, {
                isOpen: b,
                title: "Clone Template → Trang Thực",
                onClose: () => E(!1),
                maxWidth: "480px",
                children: [
                  t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsx(n, {
                        className:
                          "bg-yellow-50 border border-yellow-200 rounded p-3",
                        children: t.jsxs(r, {
                          className: "text-sm text-yellow-800",
                          children: [
                            "💰 Clone trang template thành trang thực để bán cho khách hàng.",
                            t.jsx("strong", { children: " Có tính phí" }),
                            " theo tier bạn chọn.",
                          ],
                        }),
                      }),
                      w &&
                        t.jsxs(n, {
                          className:
                            "bg-gray-50 border border-gray-200 rounded p-3",
                          children: [
                            t.jsx(r, {
                              className: "text-xs text-gray-600 mb-1",
                              children: "Clone từ:",
                            }),
                            t.jsx(r, {
                              className: "text-sm font-semibold text-gray-900",
                              children:
                                ((mt = w.page) == null ? void 0 : mt.title) ||
                                `Trang #${w.pageId}`,
                            }),
                          ],
                        }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tiêu đề trang mới *",
                          }),
                          t.jsx("input", {
                            type: "text",
                            value: ae.title,
                            onChange: (l) =>
                              me((h) => ({ ...h, title: l.target.value })),
                            placeholder: "VD: Thiệp cưới Anh Minh & Chị Hoa",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Cấp độ *",
                          }),
                          t.jsx("select", {
                            value: ae.dealerTier,
                            onChange: (l) =>
                              me((h) => ({ ...h, dealerTier: l.target.value })),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            disabled: !je,
                            children:
                              je &&
                              Pt(je).map((l) =>
                                t.jsxs(
                                  "option",
                                  {
                                    value: l.tier,
                                    disabled: !l.isAvailable,
                                    children: [
                                      l.tierName,
                                      " - ",
                                      l.priceDisplay,
                                      !l.isAvailable && " (Không khả dụng)",
                                    ],
                                  },
                                  l.tier
                                )
                              ),
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Domain (tùy chọn)",
                          }),
                          t.jsx("input", {
                            type: "text",
                            value: ae.domain,
                            onChange: (l) =>
                              me((h) => ({
                                ...h,
                                domain: l.target.value.toLowerCase(),
                              })),
                            placeholder: "vd: minh-hoa-wedding",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Ngày sự kiện (tùy chọn)",
                          }),
                          t.jsx("input", {
                            type: "date",
                            value: ae.eventAt,
                            onChange: (l) =>
                              me((h) => ({ ...h, eventAt: l.target.value })),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs(f, {
                    justify: "end",
                    gap: 3,
                    mt: 6,
                    children: [
                      t.jsx(v, {
                        variant: "ghost",
                        onClick: () => E(!1),
                        children: "Hủy",
                      }),
                      t.jsx(v, {
                        colorScheme: "blue",
                        onClick: Je,
                        loading: Ie.isPending,
                        children: "Clone thành Trang Thực",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs(Ee, {
                isOpen: k,
                title: "Tạo trang mới",
                onClose: () => T(!1),
                maxWidth: "480px",
                children: [
                  t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tiêu đề trang *",
                          }),
                          t.jsx("input", {
                            type: "text",
                            value: K.title,
                            onChange: (l) =>
                              ye((h) => ({ ...h, title: l.target.value })),
                            placeholder: "Nhập tiêu đề trang",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Cấp độ *",
                          }),
                          t.jsx("select", {
                            value: K.dealerTier,
                            onChange: (l) =>
                              ye((h) => ({ ...h, dealerTier: l.target.value })),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            disabled: !je,
                            children:
                              je &&
                              Pt(je).map((l) =>
                                t.jsxs(
                                  "option",
                                  {
                                    value: l.tier,
                                    disabled: !l.isAvailable,
                                    children: [
                                      l.tierName,
                                      " - ",
                                      l.priceDisplay,
                                      !l.isAvailable && " (Không khả dụng)",
                                    ],
                                  },
                                  l.tier
                                )
                              ),
                          }),
                          !je &&
                            t.jsx(r, {
                              fontSize: "sm",
                              color: "gray.500",
                              mt: 1,
                              children: "Đang tải thông tin đại lý...",
                            }),
                          je &&
                            t.jsxs(_, {
                              align: "start",
                              gap: 1,
                              mt: 2,
                              children: [
                                t.jsxs(r, {
                                  fontSize: "sm",
                                  color: "blue.600",
                                  fontWeight: "medium",
                                  children: [
                                    "Level hiện tại: ",
                                    it(je.dealerLevel, je.isUnlimited),
                                  ],
                                }),
                                ((gt = Be(K.dealerTier)) == null
                                  ? void 0
                                  : gt.reason) &&
                                  t.jsx(r, {
                                    fontSize: "sm",
                                    color: "red.600",
                                    children:
                                      (ht = Be(K.dealerTier)) == null
                                        ? void 0
                                        : ht.reason,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Ngày cưới *",
                          }),
                          t.jsx("input", {
                            type: "date",
                            value:
                              K.eventAt instanceof Date
                                ? K.eventAt.toISOString().split("T")[0]
                                : K.eventAt,
                            onChange: (l) =>
                              ye((h) => ({
                                ...h,
                                eventAt: new Date(l.target.value),
                              })),
                            placeholder: "Nhập ngày cưới",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Template (tùy chọn)",
                          }),
                          K.templateId
                            ? t.jsx(n, {
                                className:
                                  "border border-gray-300 rounded-md p-3 bg-gray-50",
                                children: t.jsxs(f, {
                                  justify: "space-between",
                                  align: "center",
                                  children: [
                                    t.jsxs(_, {
                                      align: "start",
                                      gap: 1,
                                      children: [
                                        t.jsx(r, {
                                          className:
                                            "font-medium text-gray-800",
                                          children: K.templateName,
                                        }),
                                        t.jsxs(r, {
                                          className: "text-sm text-gray-500",
                                          children: ["ID: ", K.templateId],
                                        }),
                                      ],
                                    }),
                                    t.jsx(v, {
                                      size: "sm",
                                      variant: "ghost",
                                      colorScheme: "red",
                                      onClick: Kt,
                                      children: "✕",
                                    }),
                                  ],
                                }),
                              })
                            : t.jsxs(v, {
                                variant: "outline",
                                onClick: () => R(!0),
                                className:
                                  "w-full justify-start flex items-center gap-2",
                                children: [t.jsx(ze, {}), "Chọn template"],
                              }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Domain *",
                          }),
                          t.jsxs(f, {
                            children: [
                              t.jsx("input", {
                                type: "text",
                                value: K.domain,
                                onChange: (l) =>
                                  ye((h) => ({ ...h, domain: l.target.value })),
                                placeholder: "john-mary-wedding",
                                className:
                                  "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                              }),
                              t.jsx(r, {
                                color: "gray.600",
                                children: ".mehappy.info",
                              }),
                              M && t.jsx(Ce, { size: "sm" }),
                            ],
                          }),
                          m &&
                            t.jsx(n, {
                              mt: 2,
                              p: 3,
                              borderRadius: "md",
                              bg: m.available ? "green.50" : "red.50",
                              border: "1px solid",
                              borderColor: m.available
                                ? "green.200"
                                : "red.200",
                              children: t.jsx(f, {
                                children: m.available
                                  ? t.jsxs(r, {
                                      color: "green.700",
                                      fontSize: "sm",
                                      children: ["✓ ", m.message],
                                    })
                                  : t.jsxs(r, {
                                      color: "red.700",
                                      fontSize: "sm",
                                      children: ["✗ ", m.message],
                                    }),
                              }),
                            }),
                          t.jsx(r, {
                            fontSize: "xs",
                            color: "gray.500",
                            mt: 2,
                            children:
                              'Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự "-".',
                          }),
                        ],
                      }),
                      !Ve(K.dealerTier) &&
                        t.jsx(n, {
                          className:
                            "bg-yellow-50 border border-yellow-200 rounded-lg p-3",
                          children: t.jsx(r, {
                            className: "text-sm text-yellow-800",
                            children:
                              K.dealerTier === $e.FREE
                                ? "Không còn hạn mức FREE"
                                : "Không đủ số dư tài khoản",
                          }),
                        }),
                    ],
                  }),
                  t.jsxs(f, {
                    justify: "end",
                    gap: 3,
                    mt: 6,
                    children: [
                      t.jsx(v, {
                        variant: "ghost",
                        onClick: () => T(!1),
                        children: "Hủy",
                      }),
                      t.jsx(v, {
                        colorScheme: "blue",
                        onClick: et,
                        loading: Ae.isPending,
                        disabled: !Ve(K.dealerTier),
                        children: "Tạo trang",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs(Ee, {
                isOpen: A,
                title: "Chuyển giao trang cho khách hàng",
                onClose: () => ne(!1),
                maxWidth: "480px",
                children: [
                  t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Loại người nhận",
                          }),
                          t.jsxs("select", {
                            value: J.handoffType,
                            onChange: (l) =>
                              ge((h) => ({
                                ...h,
                                handoffType: l.target.value,
                              })),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            children: [
                              t.jsx("option", {
                                value: "existing",
                                children: "Người dùng hiện có",
                              }),
                              t.jsx("option", {
                                value: "new",
                                children: "Tạo tài khoản mới",
                              }),
                            ],
                          }),
                        ],
                      }),
                      J.handoffType === "existing"
                        ? t.jsxs(n, {
                            children: [
                              t.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "Email người dùng *",
                              }),
                              t.jsx("input", {
                                type: "email",
                                value: J.recipientEmail,
                                onChange: (l) =>
                                  ge((h) => ({
                                    ...h,
                                    recipientEmail: l.target.value,
                                  })),
                                placeholder: "Nhập email người dùng",
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                              }),
                            ],
                          })
                        : t.jsxs(_, {
                            gap: 3,
                            align: "stretch",
                            children: [
                              t.jsxs(n, {
                                children: [
                                  t.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Email *",
                                  }),
                                  t.jsx("input", {
                                    type: "email",
                                    value: J.recipientEmail,
                                    onChange: (l) =>
                                      ge((h) => ({
                                        ...h,
                                        recipientEmail: l.target.value,
                                      })),
                                    placeholder: "Nhập email",
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                              t.jsxs(n, {
                                children: [
                                  t.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Họ và tên *",
                                  }),
                                  t.jsx("input", {
                                    type: "text",
                                    value: J.recipientFullName,
                                    onChange: (l) =>
                                      ge((h) => ({
                                        ...h,
                                        recipientFullName: l.target.value,
                                      })),
                                    placeholder: "Nhập họ và tên",
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                              t.jsxs(n, {
                                children: [
                                  t.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Mật khẩu *",
                                  }),
                                  t.jsx("input", {
                                    type: "password",
                                    value: J.recipientPassword,
                                    onChange: (l) =>
                                      ge((h) => ({
                                        ...h,
                                        recipientPassword: l.target.value,
                                      })),
                                    placeholder: "Nhập mật khẩu",
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  t.jsxs(f, {
                    justify: "end",
                    gap: 3,
                    mt: 6,
                    children: [
                      t.jsx(v, {
                        variant: "ghost",
                        onClick: () => ne(!1),
                        children: "Hủy",
                      }),
                      t.jsx(v, {
                        colorScheme: "green",
                        onClick: tt,
                        loading: Ke.isPending,
                        children: "Chuyển giao",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs(Ee, {
                isOpen: V,
                title: "Nhân bản trang",
                onClose: () => {
                  H(!1), p(null), G(""), O(""), ee("");
                },
                maxWidth: "480px",
                children: [
                  t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsx(n, {
                        children: t.jsx(r, {
                          className: "text-sm text-gray-600 mb-3",
                          children:
                            "Nhân bản trang sẽ tạo một bản sao hoàn toàn mới với nội dung giống hệt trang gốc.",
                        }),
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tiêu đề trang mới *",
                          }),
                          t.jsx("input", {
                            type: "text",
                            value: P,
                            onChange: (l) => G(l.target.value),
                            placeholder: "Nhập tiêu đề cho trang mới",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Domain (tùy chọn)",
                          }),
                          t.jsx("input", {
                            type: "text",
                            value: se,
                            onChange: (l) => O(l.target.value),
                            placeholder: "vd: my-wedding",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                          t.jsx(r, {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "Để trống nếu muốn giữ nguyên domain từ trang gốc",
                          }),
                        ],
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Ngày sự kiện (tùy chọn)",
                          }),
                          t.jsx("input", {
                            type: "date",
                            value: le,
                            onChange: (l) => ee(l.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                          t.jsx(r, {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "Để trống nếu muốn giữ nguyên ngày sự kiện từ trang gốc",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs(f, {
                    justify: "end",
                    gap: 3,
                    mt: 6,
                    children: [
                      t.jsx(v, {
                        variant: "ghost",
                        onClick: () => {
                          H(!1), p(null), G(""), O(""), ee("");
                        },
                        children: "Hủy",
                      }),
                      t.jsx(v, {
                        colorScheme: "blue",
                        onClick: Qt,
                        loading: qe.isPending,
                        children: "Nhân bản",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs(Ee, {
                isOpen: L,
                title: "Xác nhận xóa trang",
                onClose: () => {
                  D(!1), p(null);
                },
                maxWidth: "480px",
                children: [
                  t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsx(n, {
                        children:
                          (w == null ? void 0 : w.handoffStatus) === "handed"
                            ? t.jsx(r, {
                                className: "text-sm text-gray-700",
                                children:
                                  "Trang này đã được bàn giao. Xóa sẽ chỉ gỡ bỏ trang khỏi danh sách dealer page của bạn. Trang vẫn sẽ tồn tại và thuộc về người nhận.",
                              })
                            : t.jsxs(r, {
                                className: "text-sm text-gray-700",
                                children: [
                                  "Trang này chưa được bàn giao. Xóa sẽ xóa hoàn toàn trang khỏi hệ thống.",
                                  t.jsx("span", {
                                    className: "font-semibold text-red-600",
                                    children:
                                      " Hành động này không thể hoàn tác.",
                                  }),
                                ],
                              }),
                      }),
                      w &&
                        t.jsxs(n, {
                          className: "bg-gray-50 p-3 rounded-md",
                          children: [
                            t.jsx(r, {
                              className: "text-sm font-medium text-gray-700",
                              children: "Thông tin trang:",
                            }),
                            t.jsxs(r, {
                              className: "text-sm text-gray-600 mt-1",
                              children: ["Page ID: #", w.pageId],
                            }),
                            t.jsxs(r, {
                              className: "text-sm text-gray-600",
                              children: ["Dealer Page ID: #", w.id],
                            }),
                            t.jsxs(r, {
                              className: "text-sm text-gray-600",
                              children: [
                                "Trạng thái: ",
                                t.jsx(de, {
                                  colorScheme: He(w.handoffStatus),
                                  size: "sm",
                                  children: We(w.handoffStatus),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  t.jsxs(f, {
                    justify: "end",
                    gap: 3,
                    mt: 6,
                    children: [
                      t.jsx(v, {
                        variant: "ghost",
                        onClick: () => {
                          D(!1), p(null);
                        },
                        children: "Hủy",
                      }),
                      t.jsx(v, {
                        colorScheme: "red",
                        onClick: Mt,
                        loading: Re.isPending,
                        children: "Xóa",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsx(Ft, {
                isOpen: S,
                onClose: () => R(!1),
                onSelect: Te,
                userTier: K.dealerTier,
              }),
              t.jsx(Ft, { isOpen: X, onClose: () => Y(!1), onSelect: Ue }),
            ],
          })
    );
  },
  ka = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ys },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Zs = ({ isOpen: e, onClose: s, userId: a, userEmail: d, userName: c }) => {
    const [x, N] = y.useState([]),
      [q, o] = y.useState([]),
      [g, U] = y.useState(!1),
      { data: w, isLoading: p } = rs(),
      { data: k, isLoading: T } = ks(a),
      { data: u } = dt(),
      j = Ps();
    y.useEffect(() => {
      if (w && k) {
        const b = w.map((E) => {
          const L = k.find((D) => D.featureKey === E.key && D.isEnabled);
          return {
            ...E,
            userHasFeature: !!L,
            userFeatureExpiresAt:
              L != null && L.expiresAt ? new Date(L.expiresAt) : null,
            isSelected: !1,
          };
        });
        o(b);
      } else if (w) {
        const b = w.map((E) => ({
          ...E,
          userHasFeature: !1,
          userFeatureExpiresAt: null,
          isSelected: !1,
        }));
        o(b);
      }
    }, [w, k]),
      y.useEffect(() => {
        e && (N([]), o((b) => b.map((E) => ({ ...E, isSelected: !1 }))), U(!1));
      }, [e]);
    const A = (b) => {
        const E = q.find((D) => D.key === b);
        if (!E) return;
        const L = !E.isSelected;
        o((D) => D.map((m) => (m.key === b ? { ...m, isSelected: L } : m))),
          N(
            L
              ? (D) => [...D, { featureKey: b, duration: "lifetime" }]
              : (D) => D.filter((m) => m.featureKey !== b)
          );
      },
      ne = async () => {
        var b, E;
        if (x.length === 0) {
          C.create({
            title: "Vui lòng chọn ít nhất một tính năng",
            type: "warning",
          });
          return;
        }
        try {
          U(!0);
          const L = await j.mutateAsync({
            userId: a,
            data: {
              features: x,
              note: `Purchased by agent for user ${a} (${d || c || "Unknown"})`,
            },
          });
          C.create({
            title: "Mua tính năng thành công!",
            description: `Đã mua ${
              x.length
            } tính năng cho user. Tổng chi phí: ${S(L.totalCostCents)}`,
            type: "success",
          }),
            s();
        } catch (L) {
          const D =
            ((E =
              (b = L == null ? void 0 : L.response) == null
                ? void 0
                : b.data) == null
              ? void 0
              : E.message) || "Không thể mua tính năng. Vui lòng thử lại.";
          C.create({ title: "Lỗi", description: D, type: "error" });
        } finally {
          U(!1);
        }
      },
      S = (b) =>
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(b),
      R = () =>
        x.reduce((b, E) => {
          const L = q.find((D) => D.key === E.featureKey);
          return b + ((L == null ? void 0 : L.priceCents) || 0);
        }, 0),
      X = p || T,
      Y = R(),
      V = (u == null ? void 0 : u.balanceCents) || 0,
      H = Y > V;
    return t.jsx(Ee, {
      isOpen: e,
      title: "Mua tính năng cho khách hàng",
      onClose: s,
      maxWidth: "700px",
      maxHeight: "85vh",
      children: t.jsxs(_, {
        gap: 4,
        align: "stretch",
        children: [
          t.jsxs(n, {
            p: 3,
            bg: "blue.50",
            borderRadius: "md",
            border: "1px solid",
            borderColor: "blue.200",
            children: [
              t.jsxs(r, {
                fontSize: "sm",
                fontWeight: "medium",
                color: "blue.800",
                children: [
                  "Khách hàng: ",
                  t.jsx("strong", { children: c || d || `User #${a}` }),
                ],
              }),
              d &&
                c &&
                t.jsxs(r, {
                  fontSize: "xs",
                  color: "blue.600",
                  mt: 1,
                  children: ["Email: ", d],
                }),
            ],
          }),
          u &&
            t.jsx(n, {
              p: 3,
              bg: "green.50",
              borderRadius: "md",
              border: "1px solid",
              borderColor: "green.200",
              children: t.jsxs(f, {
                justify: "space-between",
                children: [
                  t.jsx(r, {
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "green.800",
                    children: "Số dư hiện tại:",
                  }),
                  t.jsx(r, {
                    fontSize: "lg",
                    fontWeight: "bold",
                    color: "green.700",
                    children: S(V),
                  }),
                ],
              }),
            }),
          X
            ? t.jsx(n, {
                className: "flex justify-center items-center py-8",
                children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
              })
            : q.length === 0
            ? t.jsx(n, {
                p: 4,
                bg: "gray.50",
                borderRadius: "md",
                textAlign: "center",
                children: t.jsx(r, {
                  color: "gray.600",
                  children: "Không có tính năng nào khả dụng",
                }),
              })
            : t.jsx(_, {
                gap: 2,
                align: "stretch",
                maxH: "400px",
                overflowY: "auto",
                pr: 2,
                children: q.map((b) =>
                  t.jsx(
                    n,
                    {
                      p: 3,
                      border: "1px solid",
                      borderColor: b.isSelected ? "blue.300" : "gray.200",
                      borderRadius: "md",
                      bg: b.userHasFeature
                        ? "gray.50"
                        : b.isSelected
                        ? "blue.50"
                        : "white",
                      opacity: b.userHasFeature ? 0.6 : 1,
                      className: "hover:border-blue-400 transition-all",
                      children: t.jsxs(Wt, {
                        justify: "space-between",
                        align: "start",
                        children: [
                          t.jsxs(f, {
                            align: "start",
                            gap: 3,
                            flex: 1,
                            children: [
                              t.jsx(ls, {
                                checked: b.isSelected,
                                onCheckedChange: () => A(b.key),
                                disabled: b.userHasFeature,
                                className: "mt-1",
                              }),
                              t.jsxs(n, {
                                flex: 1,
                                children: [
                                  t.jsxs(f, {
                                    gap: 2,
                                    mb: 1,
                                    children: [
                                      t.jsx(r, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        children: b.description,
                                      }),
                                      b.userHasFeature &&
                                        t.jsx(de, {
                                          colorScheme: "green",
                                          size: "sm",
                                          children: "Đã có",
                                        }),
                                    ],
                                  }),
                                  t.jsx(r, {
                                    fontSize: "xs",
                                    color: "gray.600",
                                    children: b.key,
                                  }),
                                  b.userHasFeature &&
                                    b.userFeatureExpiresAt &&
                                    t.jsxs(r, {
                                      fontSize: "xs",
                                      color: "gray.500",
                                      mt: 1,
                                      children: [
                                        "Hết hạn: ",
                                        new Date(
                                          b.userFeatureExpiresAt
                                        ).toLocaleDateString("vi-VN"),
                                      ],
                                    }),
                                  b.userHasFeature &&
                                    !b.userFeatureExpiresAt &&
                                    t.jsx(r, {
                                      fontSize: "xs",
                                      color: "green.600",
                                      mt: 1,
                                      children: "Trọn đời",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          t.jsx(_, {
                            align: "end",
                            gap: 1,
                            children: t.jsx(r, {
                              fontSize: "sm",
                              fontWeight: "bold",
                              color: "red.600",
                              children: S(b.priceCents),
                            }),
                          }),
                        ],
                      }),
                    },
                    b.key
                  )
                ),
              }),
          x.length > 0 &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx(Vt, {}),
                t.jsx(n, {
                  children: t.jsxs(_, {
                    gap: 2,
                    align: "stretch",
                    children: [
                      t.jsxs(f, {
                        justify: "space-between",
                        children: [
                          t.jsx(r, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: "Số tính năng đã chọn:",
                          }),
                          t.jsx(r, {
                            fontSize: "sm",
                            fontWeight: "medium",
                            children: x.length,
                          }),
                        ],
                      }),
                      t.jsxs(f, {
                        justify: "space-between",
                        children: [
                          t.jsx(r, {
                            fontSize: "md",
                            fontWeight: "bold",
                            children: "Tổng chi phí:",
                          }),
                          t.jsx(r, {
                            fontSize: "lg",
                            fontWeight: "bold",
                            color: H ? "red.600" : "green.600",
                            children: S(Y),
                          }),
                        ],
                      }),
                      H &&
                        t.jsx(n, {
                          p: 2,
                          bg: "red.50",
                          borderRadius: "md",
                          border: "1px solid",
                          borderColor: "red.200",
                          children: t.jsx(r, {
                            fontSize: "xs",
                            color: "red.700",
                            textAlign: "center",
                            children:
                              "⚠️ Số dư không đủ. Vui lòng nạp thêm tiền.",
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          t.jsxs(f, {
            justify: "flex-end",
            gap: 3,
            pt: 2,
            children: [
              t.jsx(v, {
                variant: "outline",
                onClick: s,
                disabled: g,
                children: "Hủy",
              }),
              t.jsx(v, {
                colorScheme: "green",
                onClick: ne,
                disabled: x.length === 0 || g || H,
                loading: g,
                children: g ? "Đang xử lý..." : "Xác nhận mua",
              }),
            ],
          }),
          t.jsx(n, {
            mt: 2,
            p: 3,
            bg: "yellow.50",
            borderRadius: "md",
            border: "1px solid",
            borderColor: "yellow.200",
            children: t.jsxs(r, {
              fontSize: "xs",
              color: "yellow.800",
              fontStyle: "italic",
              children: [
                "💡 Lưu ý: Chi phí sẽ được trừ trực tiếp từ số dư của bạn. Tất cả tính năng sẽ được kích hoạt ",
                t.jsx("strong", { children: "trọn đời" }),
                " cho khách hàng ngay lập tức.",
              ],
            }),
          }),
        ],
      }),
    });
  },
  Js = () => {
    var Ke, qe, Re, Ze, Je, et, tt, st, He, We, Ve, Be;
    const e = W.c(108),
      { id: s } = Et(),
      a = s ? parseInt(s) : 0,
      [d, c] = y.useState(!1),
      { data: x, isLoading: N, error: q } = Ut(a);
    if (N) {
      let Te;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((Te = t.jsx(n, {
              className: "flex justify-center items-center h-64",
              children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
            })),
            (e[0] = Te))
          : (Te = e[0]),
        Te
      );
    }
    if (q || !x) {
      let Te;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = t.jsx(n, {
            className: "text-red-500 text-xl",
            children: "⚠️",
          })),
          (e[1] = Te))
        : (Te = e[1]);
      let Ue;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ue = t.jsx(n, {
              className: "max-w-4xl mx-auto p-6",
              children: t.jsx(n, {
                className: "bg-red-50 border border-red-200 rounded-lg p-4",
                children: t.jsxs(n, {
                  className: "flex items-start gap-3",
                  children: [
                    Te,
                    t.jsxs(n, {
                      children: [
                        t.jsx(r, {
                          className: "font-medium text-red-800",
                          children: "Không thể tải thông tin trang",
                        }),
                        t.jsx(r, {
                          className: "text-sm mt-1 text-red-700",
                          children: "Vui lòng thử lại sau.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })),
            (e[2] = Ue))
          : (Ue = e[2]),
        Ue
      );
    }
    const { dealerPage: o, page: g } = x,
      U = ea,
      w = ta,
      p = sa;
    let k;
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((k = t.jsx(De, {
          to: Pe.AGENT.PAGES,
          children: t.jsxs(v, {
            variant: "ghost",
            size: "sm",
            className: "font-[Quicksand,sans-serif] font-medium",
            children: [t.jsx(_t, { className: "mr-2" }), "Quay lại"],
          }),
        })),
        (e[3] = k))
      : (k = e[3]);
    let T;
    e[4] !== o.pageId
      ? ((T = t.jsxs(r, {
          className:
            "text-2xl font-bold text-gray-800 font-[Quicksand,sans-serif]",
          children: ["Chi tiết trang #", o.pageId],
        })),
        (e[4] = o.pageId),
        (e[5] = T))
      : (T = e[5]);
    let u;
    e[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = t.jsx(r, {
          className: "text-sm text-gray-600 font-[Quicksand,sans-serif]",
          children: "Thông tin chi tiết về trang web",
        })),
        (e[6] = u))
      : (u = e[6]);
    let j;
    e[7] !== T
      ? ((j = t.jsxs(f, {
          gap: 3,
          children: [k, t.jsxs(n, { children: [T, u] })],
        })),
        (e[7] = T),
        (e[8] = j))
      : (j = e[8]);
    let A;
    e[9] !== o.id
      ? ((A = Pe.AGENT.PAGE_EDIT.replace(":id", o.id.toString())),
        (e[9] = o.id),
        (e[10] = A))
      : (A = e[10]);
    const ne = `${A}`;
    let S;
    e[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = t.jsxs(v, {
          colorScheme: "red",
          className: "font-[Quicksand,sans-serif] font-medium",
          children: [t.jsx(ot, { className: "mr-2" }), "Chỉnh sửa"],
        })),
        (e[11] = S))
      : (S = e[11]);
    let R;
    e[12] !== ne
      ? ((R = t.jsx(De, { to: ne, children: S })), (e[12] = ne), (e[13] = R))
      : (R = e[13]);
    let X;
    e[14] !== o.handedToUserId
      ? ((X =
          o.handedToUserId &&
          t.jsxs(v, {
            colorScheme: "green",
            className: "font-[Quicksand,sans-serif] font-medium",
            onClick: () => c(!0),
            children: [t.jsx(Bt, { className: "mr-2" }), "Mua tính năng"],
          })),
        (e[14] = o.handedToUserId),
        (e[15] = X))
      : (X = e[15]);
    let Y;
    e[16] !== R || e[17] !== X
      ? ((Y = t.jsxs(f, { gap: 2, children: [R, X] })),
        (e[16] = R),
        (e[17] = X),
        (e[18] = Y))
      : (Y = e[18]);
    let V;
    e[19] !== j || e[20] !== Y
      ? ((V = t.jsxs(n, {
          className:
            "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
          children: [j, Y],
        })),
        (e[19] = j),
        (e[20] = Y),
        (e[21] = V))
      : (V = e[21]);
    let H;
    e[22] === Symbol.for("react.memo_cache_sentinel")
      ? ((H = t.jsx(n, {
          className:
            "px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b",
          children: t.jsx(r, {
            className:
              "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
            children: "Thông tin đại lý",
          }),
        })),
        (e[22] = H))
      : (H = e[22]);
    let b;
    e[23] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "ID đại lý:",
        })),
        (e[23] = b))
      : (b = e[23]);
    let E;
    e[24] !== o.id
      ? ((E = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            b,
            t.jsx(r, {
              className: "font-semibold text-gray-800",
              children: o.id,
            }),
          ],
        })),
        (e[24] = o.id),
        (e[25] = E))
      : (E = e[25]);
    let L;
    e[26] === Symbol.for("react.memo_cache_sentinel")
      ? ((L = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Cấp độ:",
        })),
        (e[26] = L))
      : (L = e[26]);
    const D = U(o.tier);
    let m;
    e[27] !== o.tier || e[28] !== D
      ? ((m = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            L,
            t.jsx(de, {
              colorScheme: D,
              className: "font-medium",
              children: o.tier,
            }),
          ],
        })),
        (e[27] = o.tier),
        (e[28] = D),
        (e[29] = m))
      : (m = e[29]);
    let $;
    e[30] === Symbol.for("react.memo_cache_sentinel")
      ? (($ = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Phí:",
        })),
        (e[30] = $))
      : ($ = e[30]);
    let M;
    e[31] !== o.chargedCents
      ? ((M = o.chargedCents > 0 ? Me(o.chargedCents) : "0 VND"),
        (e[31] = o.chargedCents),
        (e[32] = M))
      : (M = e[32]);
    let i;
    e[33] !== M
      ? ((i = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            $,
            t.jsx(r, { className: "font-semibold text-red-600", children: M }),
          ],
        })),
        (e[33] = M),
        (e[34] = i))
      : (i = e[34]);
    let P;
    e[35] === Symbol.for("react.memo_cache_sentinel")
      ? ((P = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Trạng thái:",
        })),
        (e[35] = P))
      : (P = e[35]);
    const G = w(o.handoffStatus);
    let se;
    e[36] !== o.handoffStatus
      ? ((se = p(o.handoffStatus)), (e[36] = o.handoffStatus), (e[37] = se))
      : (se = e[37]);
    let O;
    e[38] !== G || e[39] !== se
      ? ((O = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            P,
            t.jsx(de, {
              colorScheme: G,
              className: "font-medium",
              children: se,
            }),
          ],
        })),
        (e[38] = G),
        (e[39] = se),
        (e[40] = O))
      : (O = e[40]);
    let le;
    e[41] === Symbol.for("react.memo_cache_sentinel")
      ? ((le = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Ngày tạo:",
        })),
        (e[41] = le))
      : (le = e[41]);
    let ee;
    e[42] !== o.createdAt
      ? ((ee = new Date(o.createdAt).toLocaleDateString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })),
        (e[42] = o.createdAt),
        (e[43] = ee))
      : (ee = e[43]);
    let Q;
    e[44] !== ee
      ? ((Q = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            le,
            t.jsx(r, {
              className: "text-sm font-medium text-gray-800",
              children: ee,
            }),
          ],
        })),
        (e[44] = ee),
        (e[45] = Q))
      : (Q = e[45]);
    let oe;
    e[46] !== o.handedToUserId
      ? ((oe =
          o.handedToUserId &&
          t.jsxs(n, {
            className:
              "flex justify-between items-center py-2 border-b border-gray-100",
            children: [
              t.jsx(r, {
                className: "text-sm text-gray-600",
                children: "Người nhận:",
              }),
              t.jsxs(r, {
                className: "font-medium text-gray-800",
                children: ["👤 User ID: ", o.handedToUserId],
              }),
            ],
          })),
        (e[46] = o.handedToUserId),
        (e[47] = oe))
      : (oe = e[47]);
    let Z;
    e[48] !== o.handoffAt
      ? ((Z =
          o.handoffAt &&
          t.jsxs(n, {
            className: "flex justify-between items-center py-2",
            children: [
              t.jsx(r, {
                className: "text-sm text-gray-600",
                children: "Ngày chuyển giao:",
              }),
              t.jsx(r, {
                className: "text-sm font-medium text-gray-800",
                children: new Date(o.handoffAt).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
              }),
            ],
          })),
        (e[48] = o.handoffAt),
        (e[49] = Z))
      : (Z = e[49]);
    let re;
    e[50] !== E ||
    e[51] !== m ||
    e[52] !== i ||
    e[53] !== O ||
    e[54] !== Q ||
    e[55] !== oe ||
    e[56] !== Z
      ? ((re = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md overflow-hidden",
          children: [
            H,
            t.jsx(n, {
              className: "p-6",
              children: t.jsxs(_, {
                gap: 3,
                align: "stretch",
                children: [E, m, i, O, Q, oe, Z],
              }),
            }),
          ],
        })),
        (e[50] = E),
        (e[51] = m),
        (e[52] = i),
        (e[53] = O),
        (e[54] = Q),
        (e[55] = oe),
        (e[56] = Z),
        (e[57] = re))
      : (re = e[57]);
    let xe;
    e[58] === Symbol.for("react.memo_cache_sentinel")
      ? ((xe = t.jsx(n, {
          className:
            "px-6 py-4 bg-gradient-to-r from-purple-50 to-purple-100 border-b",
          children: t.jsx(r, {
            className:
              "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
            children: "Thông tin trang web",
          }),
        })),
        (e[58] = xe))
      : (xe = e[58]);
    let ie;
    e[59] === Symbol.for("react.memo_cache_sentinel")
      ? ((ie = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "ID trang:",
        })),
        (e[59] = ie))
      : (ie = e[59]);
    const ae = (g == null ? void 0 : g.id) || "N/A";
    let me;
    e[60] !== ae
      ? ((me = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            ie,
            t.jsx(r, {
              className: "font-semibold text-gray-800",
              children: ae,
            }),
          ],
        })),
        (e[60] = ae),
        (e[61] = me))
      : (me = e[61]);
    let K;
    e[62] === Symbol.for("react.memo_cache_sentinel")
      ? ((K = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Tiêu đề:",
        })),
        (e[62] = K))
      : (K = e[62]);
    const ye = (g == null ? void 0 : g.title) || "Chưa có tiêu đề";
    let J;
    e[63] !== ye
      ? ((J = t.jsxs(n, {
          className:
            "flex justify-between items-start py-2 border-b border-gray-100",
          children: [
            K,
            t.jsx(r, {
              className: "font-semibold text-gray-800 text-right max-w-[60%]",
              children: ye,
            }),
          ],
        })),
        (e[63] = ye),
        (e[64] = J))
      : (J = e[64]);
    let ge;
    e[65] !== g
      ? ((ge =
          (g == null ? void 0 : g.domain) &&
          t.jsxs(n, {
            className:
              "flex justify-between items-start py-2 border-b border-gray-100",
            children: [
              t.jsx(r, {
                className: "text-sm text-gray-600",
                children: "Domain:",
              }),
              t.jsxs(r, {
                className:
                  "text-sm font-medium text-blue-600 text-right max-w-[60%] break-all",
                children: ["🌐 ", g.domain],
              }),
            ],
          })),
        (e[65] = g),
        (e[66] = ge))
      : (ge = e[66]);
    let pe;
    e[67] !== g
      ? ((pe =
          (g == null ? void 0 : g.templateName) &&
          t.jsxs(n, {
            className:
              "flex justify-between items-start py-2 border-b border-gray-100",
            children: [
              t.jsx(r, {
                className: "text-sm text-gray-600",
                children: "Template:",
              }),
              t.jsx(r, {
                className:
                  "text-sm font-medium text-gray-800 text-right max-w-[60%]",
                children: g.templateName,
              }),
            ],
          })),
        (e[67] = g),
        (e[68] = pe))
      : (pe = e[68]);
    let ce;
    e[69] !== g
      ? ((ce =
          (g == null ? void 0 : g.status) &&
          t.jsxs(n, {
            className:
              "flex justify-between items-center py-2 border-b border-gray-100",
            children: [
              t.jsx(r, {
                className: "text-sm text-gray-600",
                children: "Trạng thái:",
              }),
              t.jsx(de, {
                colorScheme: g.status === "draft" ? "yellow" : "green",
                className: "font-medium",
                children: g.status === "draft" ? "📝 Nháp" : "✅ Hoạt động",
              }),
            ],
          })),
        (e[69] = g),
        (e[70] = ce))
      : (ce = e[70]);
    let fe;
    e[71] !== g
      ? ((fe =
          (g == null ? void 0 : g.isPublic) !== void 0 &&
          t.jsxs(n, {
            className:
              "flex justify-between items-center py-2 border-b border-gray-100",
            children: [
              t.jsx(r, {
                className: "text-sm text-gray-600",
                children: "Chế độ:",
              }),
              t.jsx(de, {
                colorScheme: g.isPublic ? "green" : "gray",
                className: "font-medium",
                children: g.isPublic ? "👁️ Công khai" : "🔒 Riêng tư",
              }),
            ],
          })),
        (e[71] = g),
        (e[72] = fe))
      : (fe = e[72]);
    let ve;
    e[73] === Symbol.for("react.memo_cache_sentinel")
      ? ((ve = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Ngày tạo:",
        })),
        (e[73] = ve))
      : (ve = e[73]);
    let be;
    e[74] !== g
      ? ((be =
          g != null && g.createdAt
            ? new Date(g.createdAt).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : "N/A"),
        (e[74] = g),
        (e[75] = be))
      : (be = e[75]);
    let I;
    e[76] !== be
      ? ((I = t.jsxs(n, {
          className:
            "flex justify-between items-center py-2 border-b border-gray-100",
          children: [
            ve,
            t.jsx(r, {
              className: "text-sm font-medium text-gray-800",
              children: be,
            }),
          ],
        })),
        (e[76] = be),
        (e[77] = I))
      : (I = e[77]);
    let Se;
    e[78] === Symbol.for("react.memo_cache_sentinel")
      ? ((Se = t.jsx(r, {
          className: "text-sm text-gray-600",
          children: "Cập nhật lần cuối:",
        })),
        (e[78] = Se))
      : (Se = e[78]);
    let ke;
    e[79] !== g
      ? ((ke =
          g != null && g.updatedAt
            ? new Date(g.updatedAt).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : "N/A"),
        (e[79] = g),
        (e[80] = ke))
      : (ke = e[80]);
    let je;
    e[81] !== ke
      ? ((je = t.jsxs(n, {
          className: "flex justify-between items-center py-2",
          children: [
            Se,
            t.jsx(r, {
              className: "text-sm font-medium text-gray-800",
              children: ke,
            }),
          ],
        })),
        (e[81] = ke),
        (e[82] = je))
      : (je = e[82]);
    let Le;
    e[83] !== me ||
    e[84] !== J ||
    e[85] !== ge ||
    e[86] !== pe ||
    e[87] !== ce ||
    e[88] !== fe ||
    e[89] !== I ||
    e[90] !== je
      ? ((Le = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md overflow-hidden",
          children: [
            xe,
            t.jsx(n, {
              className: "p-6",
              children: t.jsxs(_, {
                gap: 3,
                align: "stretch",
                children: [me, J, ge, pe, ce, fe, I, je],
              }),
            }),
          ],
        })),
        (e[83] = me),
        (e[84] = J),
        (e[85] = ge),
        (e[86] = pe),
        (e[87] = ce),
        (e[88] = fe),
        (e[89] = I),
        (e[90] = je),
        (e[91] = Le))
      : (Le = e[91]);
    let _e;
    e[92] !== re || e[93] !== Le
      ? ((_e = t.jsxs(n, {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [re, Le],
        })),
        (e[92] = re),
        (e[93] = Le),
        (e[94] = _e))
      : (_e = e[94]);
    let Ae;
    e[95] !== V || e[96] !== _e
      ? ((Ae = t.jsxs(_, { gap: 6, align: "stretch", children: [V, _e] })),
        (e[95] = V),
        (e[96] = _e),
        (e[97] = Ae))
      : (Ae = e[97]);
    let Fe;
    e[98] !== ((Ke = o.handedToUser) == null ? void 0 : Ke.email) ||
    e[99] !== ((qe = o.handedToUser) == null ? void 0 : qe.firstName) ||
    e[100] !== ((Re = o.handedToUser) == null ? void 0 : Re.fullName) ||
    e[101] !== ((Ze = o.handedToUser) == null ? void 0 : Ze.lastName) ||
    e[102] !== o.handedToUserId ||
    e[103] !== d
      ? ((Fe =
          (o == null ? void 0 : o.handedToUserId) &&
          t.jsx(Zs, {
            isOpen: d,
            onClose: () => c(!1),
            userId: o.handedToUserId,
            userEmail: (Je = o.handedToUser) == null ? void 0 : Je.email,
            userName:
              ((et = o.handedToUser) == null ? void 0 : et.fullName) ||
              `${
                ((tt = o.handedToUser) == null ? void 0 : tt.firstName) || ""
              } ${
                ((st = o.handedToUser) == null ? void 0 : st.lastName) || ""
              }`.trim(),
          })),
        (e[98] = (He = o.handedToUser) == null ? void 0 : He.email),
        (e[99] = (We = o.handedToUser) == null ? void 0 : We.firstName),
        (e[100] = (Ve = o.handedToUser) == null ? void 0 : Ve.fullName),
        (e[101] = (Be = o.handedToUser) == null ? void 0 : Be.lastName),
        (e[102] = o.handedToUserId),
        (e[103] = d),
        (e[104] = Fe))
      : (Fe = e[104]);
    let Ie;
    return (
      e[105] !== Ae || e[106] !== Fe
        ? ((Ie = t.jsxs(n, {
            className: "max-w-5xl mx-auto p-6",
            children: [Ae, Fe],
          })),
          (e[105] = Ae),
          (e[106] = Fe),
          (e[107] = Ie))
        : (Ie = e[107]),
      Ie
    );
  };
function ea(e) {
  switch (e) {
    case "FREE":
      return "green";
    case "PRO":
      return "blue";
    case "VIP":
      return "purple";
    default:
      return "gray";
  }
}
function ta(e) {
  switch (e) {
    case "draft":
      return "yellow";
    case "ready":
      return "orange";
    case "handed":
      return "green";
    default:
      return "gray";
  }
}
function sa(e) {
  switch (e) {
    case "draft":
      return "Bản nháp";
    case "ready":
      return "Sẵn sàng";
    case "handed":
      return "Đã chuyển giao";
    default:
      return e;
  }
}
const Pa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Js },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  aa = () => {
    const e = W.c(54),
      { id: s } = Et(),
      a = s ? parseInt(s) : 0,
      { data: d, isLoading: c, error: x } = Ut(a);
    if (c) {
      let ie;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((ie = t.jsx(n, {
              className: "flex justify-center items-center h-64",
              children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
            })),
            (e[0] = ie))
          : (ie = e[0]),
        ie
      );
    }
    if (x || !d) {
      let ie;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = t.jsx(n, {
            className: "text-red-500 text-xl",
            children: "⚠️",
          })),
          (e[1] = ie))
        : (ie = e[1]);
      let ae;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((ae = t.jsx(n, {
              className: "max-w-4xl mx-auto p-6",
              children: t.jsx(n, {
                className: "bg-red-50 border border-red-200 rounded-lg p-4",
                children: t.jsxs(n, {
                  className: "flex items-start gap-3",
                  children: [
                    ie,
                    t.jsxs(n, {
                      children: [
                        t.jsx(r, {
                          className: "font-medium text-red-800",
                          children: "Không thể tải thông tin trang",
                        }),
                        t.jsx(r, {
                          className: "text-sm mt-1 text-red-700",
                          children: "Vui lòng thử lại sau.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })),
            (e[2] = ae))
          : (ae = e[2]),
        ae
      );
    }
    const { dealerPage: N, page: q } = d;
    let o;
    e[3] !== N.id
      ? ((o = Pe.AGENT.PAGE_DETAIL.replace(":id", N.id.toString())),
        (e[3] = N.id),
        (e[4] = o))
      : (o = e[4]);
    const g = `${o}`;
    let U;
    e[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((U = t.jsxs(v, {
          variant: "ghost",
          size: "sm",
          className: "font-[Quicksand,sans-serif] font-medium",
          children: [t.jsx(_t, { className: "mr-2" }), "Quay lại"],
        })),
        (e[5] = U))
      : (U = e[5]);
    let w;
    e[6] !== g
      ? ((w = t.jsx(De, { to: g, children: U })), (e[6] = g), (e[7] = w))
      : (w = e[7]);
    let p;
    e[8] !== N.pageId
      ? ((p = t.jsxs(r, {
          className:
            "text-2xl font-bold text-gray-800 font-[Quicksand,sans-serif]",
          children: ["Chỉnh sửa trang #", N.pageId],
        })),
        (e[8] = N.pageId),
        (e[9] = p))
      : (p = e[9]);
    let k;
    e[10] === Symbol.for("react.memo_cache_sentinel")
      ? ((k = t.jsx(r, {
          className: "text-sm text-gray-600 font-[Quicksand,sans-serif]",
          children: "Tùy chỉnh nội dung trang web",
        })),
        (e[10] = k))
      : (k = e[10]);
    let T;
    e[11] !== p
      ? ((T = t.jsxs(n, { children: [p, k] })), (e[11] = p), (e[12] = T))
      : (T = e[12]);
    let u;
    e[13] !== w || e[14] !== T
      ? ((u = t.jsxs(n, {
          className: "flex items-center gap-3",
          children: [w, T],
        })),
        (e[13] = w),
        (e[14] = T),
        (e[15] = u))
      : (u = e[15]);
    let j;
    e[16] === Symbol.for("react.memo_cache_sentinel")
      ? ((j = t.jsx(n, {
          className:
            "px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b",
          children: t.jsx(r, {
            className:
              "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
            children: "Trình chỉnh sửa trang",
          }),
        })),
        (e[16] = j))
      : (j = e[16]);
    let A;
    e[17] === Symbol.for("react.memo_cache_sentinel")
      ? ((A = t.jsx(n, {
          className: "text-blue-500 text-2xl",
          children: "ℹ️",
        })),
        (e[17] = A))
      : (A = e[17]);
    let ne, S;
    e[18] === Symbol.for("react.memo_cache_sentinel")
      ? ((ne = t.jsx(r, {
          className: "font-semibold text-blue-900 mb-2",
          children: "Trình chỉnh sửa trang",
        })),
        (S = t.jsx(r, {
          className: "text-sm text-blue-700 mb-3",
          children:
            "Trong thực tế, đây sẽ là trình chỉnh sửa trang web đầy đủ với khả năng:",
        })),
        (e[18] = ne),
        (e[19] = S))
      : ((ne = e[18]), (S = e[19]));
    let R;
    e[20] === Symbol.for("react.memo_cache_sentinel")
      ? ((R = t.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            t.jsx("span", { className: "text-blue-500", children: "•" }),
            t.jsx("span", { children: "Tùy chỉnh template và layout" }),
          ],
        })),
        (e[20] = R))
      : (R = e[20]);
    let X;
    e[21] === Symbol.for("react.memo_cache_sentinel")
      ? ((X = t.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            t.jsx("span", { className: "text-blue-500", children: "•" }),
            t.jsx("span", { children: "Chỉnh sửa nội dung văn bản" }),
          ],
        })),
        (e[21] = X))
      : (X = e[21]);
    let Y;
    e[22] === Symbol.for("react.memo_cache_sentinel")
      ? ((Y = t.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            t.jsx("span", { className: "text-blue-500", children: "•" }),
            t.jsx("span", { children: "Upload và quản lý hình ảnh" }),
          ],
        })),
        (e[22] = Y))
      : (Y = e[22]);
    let V;
    e[23] === Symbol.for("react.memo_cache_sentinel")
      ? ((V = t.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            t.jsx("span", { className: "text-blue-500", children: "•" }),
            t.jsx("span", { children: "Thiết lập các thành phần trang" }),
          ],
        })),
        (e[23] = V))
      : (V = e[23]);
    let H;
    e[24] === Symbol.for("react.memo_cache_sentinel")
      ? ((H = t.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            t.jsx("span", { className: "text-blue-500", children: "•" }),
            t.jsx("span", { children: "Xem trước trang web" }),
          ],
        })),
        (e[24] = H))
      : (H = e[24]);
    let b;
    e[25] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = t.jsx(n, {
          className: "bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6",
          children: t.jsxs(n, {
            className: "flex items-start gap-3",
            children: [
              A,
              t.jsxs(n, {
                className: "flex-1",
                children: [
                  ne,
                  S,
                  t.jsxs(n, {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-blue-700 mb-3",
                    children: [
                      R,
                      X,
                      Y,
                      V,
                      H,
                      t.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          t.jsx("span", {
                            className: "text-blue-500",
                            children: "•",
                          }),
                          t.jsx("span", { children: "Lưu và xuất bản" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsx(r, {
                    className: "text-xs text-blue-600 italic",
                    children:
                      "Hiện tại, trình chỉnh sửa sẽ redirect đến trang builder chính của hệ thống.",
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[25] = b))
      : (b = e[25]);
    let E;
    e[26] !== N.pageId
      ? ((E = Pe.USER.BUILDER.replace(":id", N.pageId.toString())),
        (e[26] = N.pageId),
        (e[27] = E))
      : (E = e[27]);
    const L = `${E}`;
    let D;
    e[28] === Symbol.for("react.memo_cache_sentinel")
      ? ((D = t.jsx(v, {
          colorScheme: "red",
          size: "lg",
          className: "font-[Quicksand,sans-serif] font-semibold px-8",
          children: "Mở trình chỉnh sửa",
        })),
        (e[28] = D))
      : (D = e[28]);
    let m;
    e[29] !== L
      ? ((m = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md overflow-hidden",
          children: [
            j,
            t.jsxs(n, {
              className: "p-6",
              children: [
                b,
                t.jsx(n, {
                  className: "flex justify-center",
                  children: t.jsx(De, { to: L, target: "_blank", children: D }),
                }),
              ],
            }),
          ],
        })),
        (e[29] = L),
        (e[30] = m))
      : (m = e[30]);
    let $;
    e[31] === Symbol.for("react.memo_cache_sentinel")
      ? (($ = t.jsx(n, {
          className:
            "px-6 py-4 bg-gradient-to-r from-purple-50 to-purple-100 border-b",
          children: t.jsx(r, {
            className:
              "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif]",
            children: "Thông tin trang hiện tại",
          }),
        })),
        (e[31] = $))
      : ($ = e[31]);
    let M;
    e[32] === Symbol.for("react.memo_cache_sentinel")
      ? ((M = t.jsx(r, {
          className: "text-xs text-gray-600 mb-1",
          children: "ID trang:",
        })),
        (e[32] = M))
      : (M = e[32]);
    let i;
    e[33] !== N.pageId
      ? ((i = t.jsxs(n, {
          className: "text-center p-3 bg-gray-50 rounded-lg",
          children: [
            M,
            t.jsx(r, {
              className: "font-bold text-gray-800 text-lg",
              children: N.pageId,
            }),
          ],
        })),
        (e[33] = N.pageId),
        (e[34] = i))
      : (i = e[34]);
    let P;
    e[35] === Symbol.for("react.memo_cache_sentinel")
      ? ((P = t.jsx(r, {
          className: "text-xs text-gray-600 mb-1",
          children: "Tiêu đề:",
        })),
        (e[35] = P))
      : (P = e[35]);
    const G = (q == null ? void 0 : q.title) || "Chưa có tiêu đề",
      se = (q == null ? void 0 : q.title) || "Chưa có tiêu đề";
    let O;
    e[36] !== G || e[37] !== se
      ? ((O = t.jsxs(n, {
          className: "text-center p-3 bg-gray-50 rounded-lg",
          children: [
            P,
            t.jsx(r, {
              className: "font-semibold text-gray-800 text-sm truncate",
              title: G,
              children: se,
            }),
          ],
        })),
        (e[36] = G),
        (e[37] = se),
        (e[38] = O))
      : (O = e[38]);
    let le;
    e[39] === Symbol.for("react.memo_cache_sentinel")
      ? ((le = t.jsx(r, {
          className: "text-xs text-gray-600 mb-1",
          children: "Cấp độ:",
        })),
        (e[39] = le))
      : (le = e[39]);
    let ee;
    e[40] !== N.tier
      ? ((ee = t.jsxs(n, {
          className: "text-center p-3 bg-gray-50 rounded-lg",
          children: [
            le,
            t.jsx(r, {
              className: "font-bold text-purple-600 text-lg uppercase",
              children: N.tier,
            }),
          ],
        })),
        (e[40] = N.tier),
        (e[41] = ee))
      : (ee = e[41]);
    let Q;
    e[42] === Symbol.for("react.memo_cache_sentinel")
      ? ((Q = t.jsx(r, {
          className: "text-xs text-gray-600 mb-1",
          children: "Trạng thái:",
        })),
        (e[42] = Q))
      : (Q = e[42]);
    const oe =
      N.handoffStatus === "draft"
        ? "Bản nháp"
        : N.handoffStatus === "ready"
        ? "Sẵn sàng"
        : "Đã chuyển giao";
    let Z;
    e[43] !== oe
      ? ((Z = t.jsxs(n, {
          className: "text-center p-3 bg-gray-50 rounded-lg",
          children: [
            Q,
            t.jsx(r, {
              className: "font-semibold text-gray-800 text-sm",
              children: oe,
            }),
          ],
        })),
        (e[43] = oe),
        (e[44] = Z))
      : (Z = e[44]);
    let re;
    e[45] !== i || e[46] !== O || e[47] !== ee || e[48] !== Z
      ? ((re = t.jsxs(n, {
          className: "bg-white rounded-lg shadow-md overflow-hidden",
          children: [
            $,
            t.jsx(n, {
              className: "p-6",
              children: t.jsxs(n, {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                children: [i, O, ee, Z],
              }),
            }),
          ],
        })),
        (e[45] = i),
        (e[46] = O),
        (e[47] = ee),
        (e[48] = Z),
        (e[49] = re))
      : (re = e[49]);
    let xe;
    return (
      e[50] !== m || e[51] !== re || e[52] !== u
        ? ((xe = t.jsx(n, {
            className: "max-w-4xl mx-auto p-6",
            children: t.jsxs(_, {
              gap: 6,
              align: "stretch",
              children: [u, m, re],
            }),
          })),
          (e[50] = m),
          (e[51] = re),
          (e[52] = u),
          (e[53] = xe))
        : (xe = e[53]),
      xe
    );
  },
  Aa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: aa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  na = () => {
    const { data: e, isLoading: s, error: a } = ys(),
      d = fs(),
      c = bs(),
      [x, N] = y.useState({
        brandName: "",
        logoUrl: "",
        customDomain: "",
        contactEmail: "",
        contactPhone: "",
        description: "",
        customFaviconUrl: "",
      }),
      [q, o] = y.useState(!1),
      [g, U] = y.useState(!1),
      [w, p] = y.useState(!1),
      [k, T] = y.useState(!1),
      [u, j] = y.useState(""),
      [A, ne] = y.useState(""),
      [S, R] = y.useState(null),
      [X, Y] = y.useState(!1),
      V = y.useRef(null);
    y.useEffect(() => {
      if (
        e &&
        (N({
          brandName: e.brandName || "",
          logoUrl: e.logoUrl || "",
          customDomain: e.customDomain || "",
          contactEmail: e.contactEmail || "",
          contactPhone: e.contactPhone || "",
          description: e.description || "",
          customFaviconUrl: e.customFaviconUrl || "",
        }),
        e.customDomain)
      )
        if (e.customDomain.includes(".mehappy.vn")) {
          const m = e.customDomain.replace(".mehappy.vn", "");
          j(m), T(!1);
        } else ne(e.customDomain), T(!0);
    }, [e]),
      y.useEffect(() => {
        const m = k ? A : u,
          $ = e == null ? void 0 : e.customDomain,
          M = $ == null ? void 0 : $.replace(".mehappy.vn", "");
        if (!m) {
          R(null);
          return;
        }
        if (k) {
          if (m === $) {
            R(null);
            return;
          }
        } else if (m === M) {
          R(null);
          return;
        }
        if (m.length < 3) {
          R(null);
          return;
        }
        return (
          V.current && clearTimeout(V.current),
          (V.current = setTimeout(async () => {
            Y(!0);
            try {
              const i = k ? m : `${m}.mehappy.vn`,
                P = await te.checkDomainAvailability(i);
              R({
                available: P.available,
                message: P.available
                  ? `Tên miền "${i}" có thể sử dụng`
                  : `Tên miền "${i}" đã được sử dụng`,
                suggestions: P.suggestions || [],
              });
            } catch {
              R({ available: !1, message: "Lỗi kiểm tra tên miền" });
            } finally {
              Y(!1);
            }
          }, 500)),
          () => {
            V.current && clearTimeout(V.current);
          }
        );
      }, [u, A, k, e == null ? void 0 : e.customDomain]);
    const H = (m, $) => {
        N((M) => ({ ...M, [m]: $ })), o(!0);
      },
      b = (m) => {
        m.length > 0 && (H("logoUrl", m[0].filePath), U(!1));
      },
      E = (m) => {
        m.length > 0 && (H("customFaviconUrl", m[0].filePath), p(!1));
      },
      L = async () => {
        var m, $;
        try {
          const M = k ? A : `${u}.mehappy.vn`,
            i = { ...x, customDomain: M };
          await d.mutateAsync(i),
            C.success({
              title: "Thành công",
              description: "Đã cập nhật thông tin thương hiệu",
            }),
            o(!1);
        } catch (M) {
          C.error({
            title: "Lỗi",
            description:
              (($ = (m = M.response) == null ? void 0 : m.data) == null
                ? void 0
                : $.message) || "Không thể cập nhật thông tin",
          });
        }
      },
      D = async () => {
        var m, $;
        try {
          const M = await c.mutateAsync();
          M.verified
            ? C.success({ title: "Thành công", description: M.message })
            : C.error({ title: "Xác thực thất bại", description: M.message });
        } catch (M) {
          C.error({
            title: "Lỗi",
            description:
              (($ = (m = M.response) == null ? void 0 : m.data) == null
                ? void 0
                : $.message) || "Không thể xác thực domain",
          });
        }
      };
    return s
      ? t.jsx(n, {
          className: "flex justify-center items-center h-64",
          children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
        })
      : a
      ? t.jsx(n, {
          className: "max-w-4xl mx-auto p-6",
          children: t.jsx(n, {
            className: "bg-red-50 border border-red-200 rounded-lg p-4",
            children: t.jsxs(n, {
              className: "flex items-start gap-3",
              children: [
                t.jsx(St, { className: "text-red-500 text-xl" }),
                t.jsxs(n, {
                  children: [
                    t.jsx(r, {
                      className: "font-medium text-red-800",
                      children: "Không thể tải thông tin",
                    }),
                    t.jsx(r, {
                      className: "text-sm mt-1 text-red-700",
                      children: "Vui lòng thử lại sau",
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      : t.jsxs(n, {
          className: "max-w-4xl mx-auto p-6",
          children: [
            t.jsxs(_, {
              gap: 6,
              align: "stretch",
              children: [
                t.jsxs(n, {
                  children: [
                    t.jsx(r, {
                      className:
                        "text-2xl font-bold text-gray-800 font-[Quicksand,sans-serif] mb-2",
                      children: "Cài đặt Thương hiệu",
                    }),
                    t.jsx(r, {
                      className: "text-gray-600 font-[Quicksand,sans-serif]",
                      children:
                        "Tùy chỉnh thông tin thương hiệu và liên hệ cho khách hàng",
                    }),
                  ],
                }),
                t.jsxs(n, {
                  className: "bg-white rounded-lg shadow-md p-6",
                  children: [
                    t.jsx(r, {
                      className:
                        "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif] mb-4",
                      children: "Thông tin Thương hiệu",
                    }),
                    t.jsxs(_, {
                      gap: 4,
                      align: "stretch",
                      children: [
                        t.jsxs(n, {
                          children: [
                            t.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Tên Thương hiệu",
                            }),
                            t.jsx(Ne, {
                              value: x.brandName,
                              onChange: (m) => H("brandName", m.target.value),
                              placeholder: "VD: Wedding Studio ABC",
                              maxLength: 255,
                            }),
                            t.jsx(r, {
                              className: "text-xs text-gray-500 mt-1",
                              children:
                                "Tên thương hiệu sẽ hiển thị trên trang công khai",
                            }),
                          ],
                        }),
                        t.jsxs(n, {
                          children: [
                            t.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Logo",
                            }),
                            t.jsxs(f, {
                              gap: 2,
                              children: [
                                t.jsxs(v, {
                                  onClick: () => U(!0),
                                  variant: "outline",
                                  size: "sm",
                                  children: [
                                    t.jsx(lt, { className: "mr-2" }),
                                    x.logoUrl ? "Change Logo" : "Select Logo",
                                  ],
                                }),
                                x.logoUrl &&
                                  t.jsx(v, {
                                    onClick: () => H("logoUrl", ""),
                                    variant: "ghost",
                                    size: "sm",
                                    colorScheme: "red",
                                    children: "Remove",
                                  }),
                              ],
                            }),
                            x.logoUrl &&
                              t.jsxs(n, {
                                className:
                                  "mt-2 p-4 border border-gray-200 rounded-md bg-gray-50",
                                children: [
                                  t.jsx(r, {
                                    className: "text-sm text-gray-600 mb-2",
                                    children: "Preview:",
                                  }),
                                  t.jsx("img", {
                                    src: x.logoUrl,
                                    alt: "Logo preview",
                                    className:
                                      "max-w-[200px] max-h-[80px] object-contain",
                                    onError: (m) => {
                                      (m.currentTarget.src = ""),
                                        (m.currentTarget.alt =
                                          "Invalid image URL");
                                    },
                                  }),
                                ],
                              }),
                            t.jsx(r, {
                              className: "text-xs text-gray-500 mt-1",
                              children: "Chọn logo từ thư viện hoặc upload mới",
                            }),
                          ],
                        }),
                        t.jsxs(n, {
                          children: [
                            t.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Mô tả",
                            }),
                            t.jsx(Ye, {
                              value: x.description,
                              onChange: (m) => H("description", m.target.value),
                              placeholder: "Giới thiệu về dịch vụ của bạn...",
                              rows: 4,
                            }),
                            t.jsx(r, {
                              className: "text-xs text-gray-500 mt-1",
                              children:
                                "Mô tả ngắn về dịch vụ thiệp cưới của bạn",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs(n, {
                  className: "bg-white rounded-lg shadow-md p-6",
                  children: [
                    t.jsx(r, {
                      className:
                        "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif] mb-4",
                      children: "Địa chỉ website",
                    }),
                    t.jsxs(_, {
                      gap: 4,
                      align: "stretch",
                      children: [
                        (e == null ? void 0 : e.customDomain) &&
                          t.jsxs(n, {
                            p: 4,
                            bg: "gray.50",
                            borderRadius: "lg",
                            children: [
                              t.jsx(r, {
                                fontSize: "sm",
                                color: "gray.600",
                                mb: 2,
                                children: "Địa chỉ hiện tại:",
                              }),
                              t.jsxs(f, {
                                children: [
                                  t.jsx(r, {
                                    fontWeight: "medium",
                                    color: "blue.600",
                                    children: e.customDomain,
                                  }),
                                  e.isCustomDomainVerified &&
                                    t.jsx(de, {
                                      colorScheme: "green",
                                      size: "sm",
                                      children: t.jsxs(f, {
                                        gap: 1,
                                        children: [
                                          t.jsx(Ot, {}),
                                          t.jsx(r, { children: "Đã xác thực" }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        t.jsxs(n, {
                          children: [
                            t.jsx(r, {
                              fontSize: "sm",
                              fontWeight: "medium",
                              mb: 2,
                              children: "Tên miền mặc định",
                            }),
                            t.jsxs(f, {
                              children: [
                                t.jsx(Ne, {
                                  placeholder: "my-studio",
                                  value: u,
                                  onChange: (m) => {
                                    j(m.target.value), o(!0);
                                  },
                                  disabled: k,
                                }),
                                t.jsx(r, {
                                  color: "gray.600",
                                  children: ".mehappy.vn",
                                }),
                                X && !k && t.jsx(Ce, { size: "sm" }),
                              ],
                            }),
                            t.jsx(r, {
                              fontSize: "xs",
                              color: "gray.500",
                              mt: 2,
                              children:
                                'Địa chỉ website phải lớn hơn 3 và nhỏ hơn 63 kí tự (a-z 0-9), có thể sử dụng ký tự "-".',
                            }),
                          ],
                        }),
                        S &&
                          !k &&
                          t.jsxs(n, {
                            mt: 2,
                            p: 3,
                            borderRadius: "md",
                            bg: S.available ? "green.50" : "red.50",
                            border: "1px solid",
                            borderColor: S.available ? "green.200" : "red.200",
                            children: [
                              t.jsxs(f, {
                                children: [
                                  S.available
                                    ? t.jsx(Ct, { color: "green" })
                                    : t.jsx(wt, { color: "red" }),
                                  t.jsx(r, {
                                    fontSize: "sm",
                                    color: S.available
                                      ? "green.700"
                                      : "red.700",
                                    children: S.message,
                                  }),
                                ],
                              }),
                              !S.available &&
                                S.suggestions &&
                                S.suggestions.length > 0 &&
                                t.jsxs(n, {
                                  mt: 3,
                                  children: [
                                    t.jsx(r, {
                                      fontSize: "sm",
                                      fontWeight: "medium",
                                      mb: 2,
                                      color: "gray.700",
                                      children: "Gợi ý các tên miền khác:",
                                    }),
                                    t.jsx(_, {
                                      gap: 2,
                                      align: "stretch",
                                      children: S.suggestions.map((m, $) =>
                                        t.jsx(
                                          v,
                                          {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: () => {
                                              j(m), o(!0);
                                            },
                                            justifyContent: "space-between",
                                            children: t.jsxs(r, {
                                              children: [m, ".mehappy.vn"],
                                            }),
                                          },
                                          $
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        t.jsx(n, {
                          p: 4,
                          bg: "orange.50",
                          borderRadius: "lg",
                          children: t.jsxs(f, {
                            justify: "space-between",
                            align: "start",
                            children: [
                              t.jsxs(n, {
                                flex: 1,
                                children: [
                                  t.jsx(f, {
                                    mb: 2,
                                    children: t.jsx(r, {
                                      fontWeight: "medium",
                                      children: "Sử dụng tên miền tùy chỉnh",
                                    }),
                                  }),
                                  t.jsx(r, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children:
                                      "Bật tùy chọn này nếu bạn muốn sử dụng tên miền riêng của mình thay vì .mehappy.vn",
                                  }),
                                ],
                              }),
                              t.jsx("input", {
                                type: "checkbox",
                                checked: k,
                                onChange: (m) => {
                                  T(m.target.checked), o(!0), R(null);
                                },
                                style: {
                                  width: "48px",
                                  height: "24px",
                                  accentColor: "#f56500",
                                },
                              }),
                            ],
                          }),
                        }),
                        k &&
                          t.jsxs(n, {
                            children: [
                              t.jsx(r, {
                                fontSize: "sm",
                                fontWeight: "medium",
                                mb: 2,
                                children: "Tên miền tùy chỉnh",
                              }),
                              t.jsxs(f, {
                                children: [
                                  t.jsx(Ne, {
                                    placeholder: "mystudio.com",
                                    value: A,
                                    onChange: (m) => {
                                      ne(m.target.value), o(!0);
                                    },
                                  }),
                                  X && k && t.jsx(Ce, { size: "sm" }),
                                ],
                              }),
                              t.jsx(r, {
                                fontSize: "xs",
                                color: "gray.500",
                                mt: 2,
                                children:
                                  "Nhập tên miền đầy đủ của bạn (ví dụ: mystudio.com)",
                              }),
                            ],
                          }),
                        S &&
                          k &&
                          t.jsxs(n, {
                            mt: 2,
                            p: 3,
                            borderRadius: "md",
                            bg: S.available ? "green.50" : "red.50",
                            border: "1px solid",
                            borderColor: S.available ? "green.200" : "red.200",
                            children: [
                              t.jsxs(f, {
                                children: [
                                  S.available
                                    ? t.jsx(Ct, { color: "green" })
                                    : t.jsx(wt, { color: "red" }),
                                  t.jsx(r, {
                                    fontSize: "sm",
                                    color: S.available
                                      ? "green.700"
                                      : "red.700",
                                    children: S.message,
                                  }),
                                ],
                              }),
                              !S.available &&
                                S.suggestions &&
                                S.suggestions.length > 0 &&
                                t.jsxs(n, {
                                  mt: 3,
                                  children: [
                                    t.jsx(r, {
                                      fontSize: "sm",
                                      fontWeight: "medium",
                                      mb: 2,
                                      color: "gray.700",
                                      children: "Gợi ý các tên miền khác:",
                                    }),
                                    t.jsx(_, {
                                      gap: 2,
                                      align: "stretch",
                                      children: S.suggestions.map((m, $) =>
                                        t.jsx(
                                          v,
                                          {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: () => {
                                              ne(m), o(!0);
                                            },
                                            justifyContent: "space-between",
                                            children: t.jsx(r, { children: m }),
                                          },
                                          $
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        k &&
                          t.jsxs(n, {
                            className:
                              "bg-blue-50 border border-blue-200 rounded-lg p-4",
                            children: [
                              t.jsxs(f, {
                                mb: 2,
                                children: [
                                  t.jsx(St, { color: "blue" }),
                                  t.jsx(r, {
                                    className:
                                      "text-sm font-medium text-blue-800",
                                    children: "Hướng dẫn cấu hình tên miền",
                                  }),
                                ],
                              }),
                              t.jsxs(_, {
                                gap: 2,
                                align: "stretch",
                                className: "text-sm text-blue-700",
                                children: [
                                  t.jsx(r, {
                                    children:
                                      "Tên miền không được nhập kèm www. (Ví dụ: chỉ được nhập abc.com, không được nhập www.abc.com). Sau khi cài đặt tên miền riêng vào hệ thống, hãy đến hệ thống quản trị tên miền của bạn và thiết lập 2 bản ghi như sau:",
                                  }),
                                  t.jsx(n, {
                                    className:
                                      "bg-blue-100 p-2 rounded font-mono text-xs",
                                    children: `@     CNAME    cname.mehappy.vn
www   CNAME    cname.mehappy.vn`,
                                  }),
                                  t.jsx(r, {
                                    children:
                                      'Sau khi cấu hình DNS, chờ 5-10 phút để DNS cập nhật, sau đó click nút "Xác thực" bên dưới.',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        k &&
                          A &&
                          t.jsx(v, {
                            onClick: D,
                            loading: c.isPending,
                            colorScheme: "blue",
                            variant: "outline",
                            width: "full",
                            children: "Xác thực tên miền tùy chỉnh",
                          }),
                      ],
                    }),
                  ],
                }),
                t.jsxs(n, {
                  className: "bg-white rounded-lg shadow-md p-6",
                  children: [
                    t.jsx(r, {
                      className:
                        "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif] mb-4",
                      children: "Thông tin Liên hệ",
                    }),
                    t.jsxs(_, {
                      gap: 4,
                      align: "stretch",
                      children: [
                        t.jsxs(n, {
                          children: [
                            t.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Email Liên hệ",
                            }),
                            t.jsx(Ne, {
                              type: "email",
                              value: x.contactEmail,
                              onChange: (m) =>
                                H("contactEmail", m.target.value),
                              placeholder: "contact@yourbusiness.com",
                              maxLength: 255,
                            }),
                            t.jsx(r, {
                              className: "text-xs text-gray-500 mt-1",
                              children: "Email để khách hàng liên hệ",
                            }),
                          ],
                        }),
                        t.jsxs(n, {
                          children: [
                            t.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Số điện thoại",
                            }),
                            t.jsx(Ne, {
                              type: "tel",
                              value: x.contactPhone,
                              onChange: (m) =>
                                H("contactPhone", m.target.value),
                              placeholder: "0123456789",
                              maxLength: 50,
                            }),
                            t.jsx(r, {
                              className: "text-xs text-gray-500 mt-1",
                              children: "Số điện thoại để khách hàng liên hệ",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs(n, {
                  className: "bg-white rounded-lg shadow-md p-6",
                  children: [
                    t.jsx(r, {
                      className:
                        "text-lg font-semibold text-gray-800 font-[Quicksand,sans-serif] mb-4",
                      children: "Nâng cao",
                    }),
                    t.jsx(_, {
                      gap: 4,
                      align: "stretch",
                      children: t.jsxs(n, {
                        children: [
                          t.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Favicon",
                          }),
                          t.jsxs(f, {
                            gap: 2,
                            children: [
                              t.jsxs(v, {
                                onClick: () => p(!0),
                                variant: "outline",
                                size: "sm",
                                children: [
                                  t.jsx(lt, { className: "mr-2" }),
                                  x.customFaviconUrl
                                    ? "Change Favicon"
                                    : "Select Favicon",
                                ],
                              }),
                              x.customFaviconUrl &&
                                t.jsx(v, {
                                  onClick: () => H("customFaviconUrl", ""),
                                  variant: "ghost",
                                  size: "sm",
                                  colorScheme: "red",
                                  children: "Remove",
                                }),
                            ],
                          }),
                          x.customFaviconUrl &&
                            t.jsxs(n, {
                              className:
                                "mt-2 p-4 border border-gray-200 rounded-md bg-gray-50",
                              children: [
                                t.jsx(r, {
                                  className: "text-sm text-gray-600 mb-2",
                                  children: "Preview:",
                                }),
                                t.jsx("img", {
                                  src: x.customFaviconUrl,
                                  alt: "Favicon preview",
                                  className: "w-8 h-8 object-contain",
                                  onError: (m) => {
                                    (m.currentTarget.src = ""),
                                      (m.currentTarget.alt =
                                        "Invalid image URL");
                                  },
                                }),
                              ],
                            }),
                          t.jsx(r, {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "Icon hiển thị trên tab trình duyệt (32x32px)",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                t.jsxs(f, {
                  justify: "end",
                  gap: 3,
                  children: [
                    t.jsx(v, {
                      variant: "outline",
                      onClick: () => {
                        e &&
                          (N({
                            brandName: e.brandName || "",
                            logoUrl: e.logoUrl || "",
                            customDomain: e.customDomain || "",
                            contactEmail: e.contactEmail || "",
                            contactPhone: e.contactPhone || "",
                            description: e.description || "",
                            customFaviconUrl: e.customFaviconUrl || "",
                          }),
                          o(!1));
                      },
                      disabled: !q,
                      children: "Hủy",
                    }),
                    t.jsxs(v, {
                      colorScheme: "blue",
                      onClick: L,
                      loading: d.isPending,
                      disabled: !q,
                      children: [
                        t.jsx(zt, { className: "mr-2" }),
                        "Lưu thay đổi",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            t.jsx(ct, {
              isOpen: g,
              onClose: () => U(!1),
              onSelect: b,
              allowMultiple: !1,
              fileTypes: [
                "image/jpeg",
                "image/png",
                "image/gif",
                "image/webp",
                "image/svg+xml",
              ],
              title: "Select Logo",
            }),
            t.jsx(ct, {
              isOpen: w,
              onClose: () => p(!1),
              onSelect: E,
              allowMultiple: !1,
              fileTypes: [
                "image/x-icon",
                "image/png",
                "image/jpeg",
                "image/svg+xml",
              ],
              title: "Select Favicon",
            }),
          ],
        });
  },
  Fa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: na },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ra = () => {
    var $, M;
    const [e, s] = y.useState(""),
      [a, d] = y.useState(!1),
      [c, x] = y.useState(!1),
      [N, q] = y.useState(!1),
      [o, g] = y.useState("add"),
      [U, w] = y.useState(null),
      [p, k] = y.useState({}),
      [T, u] = y.useState({
        dealerPageId: 0,
        thumbnailUrl: "",
        category: "",
        tags: [],
        description: "",
        displayOrder: 0,
        isFeatured: !1,
      }),
      { data: j, isLoading: A, refetch: ne } = js({ search: e || void 0 }),
      { data: S, isLoading: R } = Dt({ isCatalogTemplate: !0 }),
      X = Gt.useMemo(
        () =>
          S != null && S.data
            ? S.data.map((i) => {
                var P, G, se, O;
                return {
                  id: i.pageId,
                  title: ((P = i.page) == null ? void 0 : P.title) || "",
                  domain: ((G = i.page) == null ? void 0 : G.domain) || "",
                  template:
                    ((se = i.page) == null ? void 0 : se.template) || null,
                  isCatalogTemplate:
                    ((O = i.page) == null ? void 0 : O.isCatalogTemplate) || !1,
                };
              })
            : [],
        [S]
      ),
      Y = Ns();
    us();
    const V = vs(),
      H = Ss(),
      b = async () => {
        var i, P;
        if (!T.dealerPageId) {
          C.error({ title: "Lỗi", description: "Vui lòng chọn trang" });
          return;
        }
        try {
          await Y.mutateAsync(T),
            C.success({
              title: "Thành công",
              description: "Đã thêm trang vào catalog",
            }),
            d(!1),
            u({
              dealerPageId: 0,
              thumbnailUrl: "",
              category: "",
              tags: [],
              description: "",
              displayOrder: 0,
              isFeatured: !1,
            });
        } catch (G) {
          C.error({
            title: "Lỗi",
            description:
              ((P = (i = G.response) == null ? void 0 : i.data) == null
                ? void 0
                : P.message) || "Không thể thêm trang vào catalog",
          });
        }
      },
      E = async () => {
        var i, P;
        if (U)
          try {
            await V.mutateAsync({ id: U.id, data: p }),
              C.success({
                title: "Thành công",
                description: "Đã cập nhật thông tin showcase",
              }),
              x(!1),
              w(null),
              k({});
          } catch (G) {
            C.error({
              title: "Lỗi",
              description:
                ((P = (i = G.response) == null ? void 0 : i.data) == null
                  ? void 0
                  : P.message) || "Không thể cập nhật",
            });
          }
      },
      L = async (i) => {
        var P, G;
        if (confirm("Bạn có chắc muốn xóa trang này khỏi catalog?"))
          try {
            await H.mutateAsync(i),
              C.success({
                title: "Thành công",
                description: "Đã xóa trang khỏi catalog",
              });
          } catch (se) {
            C.error({
              title: "Lỗi",
              description:
                ((G = (P = se.response) == null ? void 0 : P.data) == null
                  ? void 0
                  : G.message) || "Không thể xóa",
            });
          }
      },
      D = async (i) => {
        try {
          await V.mutateAsync({
            id: i.id,
            data: { isFeatured: !i.isFeatured },
          }),
            C.success({
              title: "Thành công",
              description: i.isFeatured
                ? "Đã bỏ nổi bật"
                : "Đã đánh dấu nổi bật",
            });
        } catch {
          C.error({ title: "Lỗi", description: "Không thể cập nhật" });
        }
      },
      m = (i) => {
        if (i.length > 0) {
          const P = i[0].filePath;
          o === "add"
            ? u({ ...T, thumbnailUrl: P })
            : k({ ...p, thumbnailUrl: P });
        }
        q(!1);
      };
    return A
      ? t.jsx(n, {
          className: "flex justify-center items-center h-64",
          children: t.jsx(Ce, { size: "lg", color: "blue.500" }),
        })
      : t.jsxs(n, {
          className: "max-w-6xl mx-auto p-6",
          children: [
            t.jsxs(_, {
              gap: 6,
              align: "stretch",
              children: [
                t.jsx(n, {
                  children: t.jsxs(f, {
                    justify: "space-between",
                    align: "center",
                    children: [
                      t.jsxs(n, {
                        children: [
                          t.jsx(r, {
                            className:
                              "text-2xl font-bold text-gray-800 font-[Quicksand,sans-serif] mb-2",
                            children: "Quản lý Page Catalog",
                          }),
                          t.jsx(r, {
                            className:
                              "text-gray-600 font-[Quicksand,sans-serif]",
                            children:
                              "Showcase các trang template cho khách hàng xem",
                          }),
                        ],
                      }),
                      t.jsxs(_, {
                        gap: 2,
                        align: "end",
                        children: [
                          t.jsxs(v, {
                            colorScheme: "blue",
                            onClick: () => d(!0),
                            className: "font-[Quicksand,sans-serif]",
                            children: [
                              t.jsx(ze, { className: "mr-2" }),
                              "Thêm trang template",
                            ],
                          }),
                          t.jsxs(r, {
                            className: "text-xs text-gray-500",
                            children: [
                              "Cần tạo trang template trước? ",
                              t.jsx("a", {
                                href: "/agent/pages",
                                className: "text-blue-600 underline",
                                children: "Đi tới quản lý trang",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                t.jsxs(f, {
                  gap: 4,
                  children: [
                    t.jsx(Ne, {
                      placeholder: "Tìm kiếm theo tên trang...",
                      value: e,
                      onChange: (i) => s(i.target.value),
                      maxW: "400px",
                    }),
                    t.jsxs(r, {
                      className: "text-sm text-gray-500 ml-auto",
                      children: [
                        (j == null ? void 0 : j.length) || 0,
                        " trang trong catalog",
                      ],
                    }),
                  ],
                }),
                j && j.length > 0
                  ? t.jsx(Lt, {
                      templateColumns: {
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                      },
                      gap: 6,
                      children: j.map((i) => {
                        var P, G, se, O, le, ee, Q;
                        return t.jsxs(
                          n,
                          {
                            className: `rounded-lg overflow-hidden transition-all ${
                              i.isFeatured
                                ? "bg-yellow-50 border-2 border-yellow-400 shadow-lg hover:shadow-xl"
                                : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
                            }`,
                            children: [
                              t.jsxs(n, {
                                className: "relative h-48 bg-gray-100",
                                children: [
                                  i.thumbnailUrl ||
                                  ((G =
                                    (P = i.dealerPage) == null
                                      ? void 0
                                      : P.page.seoSettings) != null &&
                                    G.imageUrl)
                                    ? t.jsx("img", {
                                        src:
                                          i.thumbnailUrl ||
                                          ((O =
                                            (se = i.dealerPage) == null
                                              ? void 0
                                              : se.page.seoSettings) == null
                                            ? void 0
                                            : O.imageUrl) ||
                                          "",
                                        alt:
                                          ((le = i.dealerPage) == null
                                            ? void 0
                                            : le.page.title) ||
                                          "Page thumbnail",
                                        className: "w-full h-full object-cover",
                                      })
                                    : t.jsx(n, {
                                        className:
                                          "w-full h-full flex items-center justify-center text-gray-400",
                                        children: "No Image",
                                      }),
                                  i.isFeatured &&
                                    t.jsx(de, {
                                      position: "absolute",
                                      top: 2,
                                      right: 2,
                                      colorScheme: "yellow",
                                      className: "font-bold",
                                      children: t.jsxs(f, {
                                        gap: 1,
                                        children: [
                                          t.jsx(Xe, {}),
                                          t.jsx(r, { children: "Nổi bật" }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                              t.jsxs(n, {
                                p: 4,
                                children: [
                                  t.jsxs(_, {
                                    gap: 2,
                                    align: "stretch",
                                    children: [
                                      t.jsxs(f, {
                                        justify: "space-between",
                                        align: "start",
                                        children: [
                                          t.jsx(r, {
                                            className:
                                              "font-bold text-lg truncate",
                                            children:
                                              ((ee = i.dealerPage) == null
                                                ? void 0
                                                : ee.page.title) || "Untitled",
                                          }),
                                          t.jsx(de, {
                                            colorScheme: "green",
                                            size: "sm",
                                            className: "shrink-0",
                                            children: "TEMPLATE",
                                          }),
                                        ],
                                      }),
                                      i.category &&
                                        t.jsx(de, {
                                          colorScheme: "purple",
                                          size: "sm",
                                          width: "fit-content",
                                          children: i.category,
                                        }),
                                      i.description &&
                                        t.jsx(r, {
                                          className:
                                            "text-sm text-gray-600 line-clamp-2",
                                          children: i.description,
                                        }),
                                      i.tags &&
                                        i.tags.length > 0 &&
                                        t.jsxs(f, {
                                          gap: 1,
                                          flexWrap: "wrap",
                                          children: [
                                            i.tags
                                              .slice(0, 3)
                                              .map((oe, Z) =>
                                                t.jsx(
                                                  de,
                                                  {
                                                    size: "sm",
                                                    colorScheme: "blue",
                                                    children: oe,
                                                  },
                                                  Z
                                                )
                                              ),
                                            i.tags.length > 3 &&
                                              t.jsxs(de, {
                                                size: "sm",
                                                children: [
                                                  "+",
                                                  i.tags.length - 3,
                                                ],
                                              }),
                                          ],
                                        }),
                                      t.jsxs(r, {
                                        className: "text-xs text-gray-500",
                                        children: [
                                          "Page #",
                                          i.dealerPageId,
                                          " • ",
                                          ((Q = i.dealerPage) == null
                                            ? void 0
                                            : Q.page.viewCount) || 0,
                                          " views",
                                        ],
                                      }),
                                    ],
                                  }),
                                  t.jsxs(f, {
                                    gap: 2,
                                    mt: 4,
                                    children: [
                                      t.jsx(nt, {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: () => {
                                          w(i),
                                            k({
                                              thumbnailUrl:
                                                i.thumbnailUrl || "",
                                              category: i.category || "",
                                              tags: i.tags || [],
                                              description: i.description || "",
                                              displayOrder: i.displayOrder,
                                              isFeatured: i.isFeatured,
                                            }),
                                            x(!0);
                                        },
                                        children: t.jsx(ot, {}),
                                      }),
                                      t.jsx(nt, {
                                        size: "sm",
                                        variant: i.isFeatured
                                          ? "solid"
                                          : "outline",
                                        colorScheme: i.isFeatured
                                          ? "yellow"
                                          : "gray",
                                        onClick: () => D(i),
                                        title: i.isFeatured
                                          ? "Bỏ đánh dấu nổi bật"
                                          : "Đánh dấu nổi bật",
                                        children: i.isFeatured
                                          ? t.jsx(Xt, {})
                                          : t.jsx(Xe, {}),
                                      }),
                                      t.jsx(nt, {
                                        size: "sm",
                                        variant: "outline",
                                        colorScheme: "red",
                                        onClick: () => L(i.id),
                                        children: t.jsx(rt, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          i.id
                        );
                      }),
                    })
                  : t.jsx(n, {
                      className:
                        "bg-gray-50 border border-gray-200 rounded-lg p-8 text-center",
                      children: t.jsxs(_, {
                        gap: 3,
                        children: [
                          t.jsx(r, {
                            className: "text-gray-600",
                            children:
                              "Chưa có trang template nào trong catalog",
                          }),
                          t.jsxs(r, {
                            className: "text-sm text-gray-500",
                            children: [
                              "Bạn cần tạo ",
                              t.jsx("strong", {
                                children: "Trang Template (MIỄN PHÍ)",
                              }),
                              " trước, sau đó thêm vào catalog",
                            ],
                          }),
                          t.jsxs(v, {
                            colorScheme: "blue",
                            onClick: () => d(!0),
                            children: [
                              t.jsx(ze, { className: "mr-2" }),
                              "Thêm trang template",
                            ],
                          }),
                        ],
                      }),
                    }),
              ],
            }),
            t.jsxs(Ee, {
              isOpen: a,
              title: "Thêm Trang Template vào Catalog",
              onClose: () => d(!1),
              maxWidth: "500px",
              children: [
                t.jsxs(_, {
                  gap: 4,
                  align: "stretch",
                  children: [
                    t.jsx(n, {
                      className:
                        "bg-green-50 border border-green-200 rounded p-3 mb-2",
                      children: t.jsxs(r, {
                        className: "text-sm text-green-800",
                        children: [
                          "ℹ️ Chỉ có thể thêm ",
                          t.jsx("strong", {
                            children: "Trang Template (MIỄN PHÍ)",
                          }),
                          " vào catalog. Trang template dùng để showcase, không thể bàn giao cho khách.",
                        ],
                      }),
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Chọn Trang Template *",
                        }),
                        t.jsxs("select", {
                          value: T.dealerPageId,
                          onChange: (i) =>
                            u({ ...T, dealerPageId: parseInt(i.target.value) }),
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md",
                          disabled: R,
                          children: [
                            t.jsx("option", {
                              value: 0,
                              children: "-- Chọn trang template --",
                            }),
                            X == null
                              ? void 0
                              : X.map((i) =>
                                  t.jsxs(
                                    "option",
                                    {
                                      value: i.id,
                                      children: [
                                        "#",
                                        i.id,
                                        " - ",
                                        i.title,
                                        " (",
                                        i.domain,
                                        ")",
                                      ],
                                    },
                                    i.id
                                  )
                                ),
                          ],
                        }),
                        X &&
                          X.length === 0 &&
                          t.jsx(r, {
                            className: "text-sm text-orange-600 mt-2",
                            children:
                              "Không có trang template nào để thêm vào catalog. Hãy tạo trang template miễn phí trước.",
                          }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Ảnh đại diện",
                        }),
                        t.jsxs(f, {
                          gap: 2,
                          children: [
                            t.jsxs(v, {
                              onClick: () => {
                                g("add"), q(!0);
                              },
                              variant: "outline",
                              size: "sm",
                              children: [
                                t.jsx(lt, { className: "mr-2" }),
                                T.thumbnailUrl ? "Đổi ảnh" : "Chọn ảnh",
                              ],
                            }),
                            T.thumbnailUrl &&
                              t.jsx(v, {
                                onClick: () => u({ ...T, thumbnailUrl: "" }),
                                variant: "ghost",
                                size: "sm",
                                colorScheme: "red",
                                children: "Xóa",
                              }),
                          ],
                        }),
                        T.thumbnailUrl &&
                          t.jsx(n, {
                            className:
                              "mt-2 p-2 border border-gray-200 rounded-md bg-gray-50",
                            children: t.jsx(Tt, {
                              src: T.thumbnailUrl,
                              alt: "Thumbnail preview",
                              maxH: "120px",
                              objectFit: "cover",
                              borderRadius: "md",
                            }),
                          }),
                        t.jsx(r, {
                          className: "text-xs text-gray-500 mt-1",
                          children:
                            "Ảnh đại diện hiển thị trong catalog (nếu không chọn sẽ dùng ảnh từ page)",
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Danh mục",
                        }),
                        t.jsx(Ne, {
                          value: T.category,
                          onChange: (i) =>
                            u({ ...T, category: i.target.value }),
                          placeholder: "VD: Wedding, Birthday, Corporate",
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Tags (ngăn cách bằng dấu phẩy)",
                        }),
                        t.jsx(Ne, {
                          value:
                            (($ = T.tags) == null ? void 0 : $.join(", ")) ||
                            "",
                          onChange: (i) =>
                            u({
                              ...T,
                              tags: i.target.value
                                .split(",")
                                .map((P) => P.trim())
                                .filter(Boolean),
                            }),
                          placeholder: "VD: elegant, luxury, modern",
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Mô tả",
                        }),
                        t.jsx(Ye, {
                          value: T.description,
                          onChange: (i) =>
                            u({ ...T, description: i.target.value }),
                          placeholder: "Mô tả ngắn về trang này...",
                          rows: 3,
                        }),
                      ],
                    }),
                    t.jsx(n, {
                      children: t.jsxs("label", {
                        className: "flex items-center gap-2 cursor-pointer",
                        children: [
                          t.jsx("input", {
                            type: "checkbox",
                            checked: T.isFeatured,
                            onChange: (i) =>
                              u({ ...T, isFeatured: i.target.checked }),
                          }),
                          t.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Đánh dấu là trang nổi bật",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                t.jsxs(f, {
                  justify: "end",
                  gap: 3,
                  mt: 6,
                  children: [
                    t.jsx(v, {
                      variant: "ghost",
                      onClick: () => d(!1),
                      children: "Hủy",
                    }),
                    t.jsx(v, {
                      colorScheme: "blue",
                      onClick: b,
                      loading: Y.isPending,
                      children: "Thêm vào Catalog",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs(Ee, {
              isOpen: c,
              title: "Chỉnh sửa Showcase",
              onClose: () => {
                x(!1), w(null), k({});
              },
              maxWidth: "500px",
              children: [
                t.jsxs(_, {
                  gap: 4,
                  align: "stretch",
                  children: [
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Ảnh đại diện",
                        }),
                        t.jsxs(f, {
                          gap: 2,
                          children: [
                            t.jsxs(v, {
                              onClick: () => {
                                g("edit"), q(!0);
                              },
                              variant: "outline",
                              size: "sm",
                              children: [
                                t.jsx(lt, { className: "mr-2" }),
                                p.thumbnailUrl ? "Đổi ảnh" : "Chọn ảnh",
                              ],
                            }),
                            p.thumbnailUrl &&
                              t.jsx(v, {
                                onClick: () => k({ ...p, thumbnailUrl: "" }),
                                variant: "ghost",
                                size: "sm",
                                colorScheme: "red",
                                children: "Xóa",
                              }),
                          ],
                        }),
                        p.thumbnailUrl &&
                          t.jsx(n, {
                            className:
                              "mt-2 p-2 border border-gray-200 rounded-md bg-gray-50",
                            children: t.jsx(Tt, {
                              src: p.thumbnailUrl,
                              alt: "Thumbnail preview",
                              maxH: "120px",
                              objectFit: "cover",
                              borderRadius: "md",
                            }),
                          }),
                        t.jsx(r, {
                          className: "text-xs text-gray-500 mt-1",
                          children:
                            "Ảnh đại diện hiển thị trong catalog (nếu không chọn sẽ dùng ảnh từ page)",
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Danh mục",
                        }),
                        t.jsx(Ne, {
                          value: p.category || "",
                          onChange: (i) =>
                            k({ ...p, category: i.target.value }),
                          placeholder: "VD: Wedding, Birthday, Corporate",
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Tags (ngăn cách bằng dấu phẩy)",
                        }),
                        t.jsx(Ne, {
                          value:
                            ((M = p.tags) == null ? void 0 : M.join(", ")) ||
                            "",
                          onChange: (i) =>
                            k({
                              ...p,
                              tags: i.target.value
                                .split(",")
                                .map((P) => P.trim())
                                .filter(Boolean),
                            }),
                          placeholder: "VD: elegant, luxury, modern",
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Mô tả",
                        }),
                        t.jsx(Ye, {
                          value: p.description || "",
                          onChange: (i) =>
                            k({ ...p, description: i.target.value }),
                          placeholder: "Mô tả...",
                          rows: 3,
                        }),
                      ],
                    }),
                    t.jsxs(n, {
                      children: [
                        t.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Thứ tự hiển thị",
                        }),
                        t.jsx(Ne, {
                          type: "number",
                          value: p.displayOrder || 0,
                          onChange: (i) =>
                            k({ ...p, displayOrder: parseInt(i.target.value) }),
                          placeholder: "Số càng lớn càng hiển thị trước",
                        }),
                      ],
                    }),
                    t.jsx(n, {
                      children: t.jsxs("label", {
                        className: "flex items-center gap-2 cursor-pointer",
                        children: [
                          t.jsx("input", {
                            type: "checkbox",
                            checked: p.isFeatured || !1,
                            onChange: (i) =>
                              k({ ...p, isFeatured: i.target.checked }),
                          }),
                          t.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Đánh dấu nổi bật",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                t.jsxs(f, {
                  justify: "end",
                  gap: 3,
                  mt: 6,
                  children: [
                    t.jsx(v, {
                      variant: "ghost",
                      onClick: () => {
                        x(!1), w(null), k({});
                      },
                      children: "Hủy",
                    }),
                    t.jsx(v, {
                      colorScheme: "blue",
                      onClick: E,
                      loading: V.isPending,
                      children: "Lưu thay đổi",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx(ct, {
              isOpen: N,
              onClose: () => q(!1),
              onSelect: m,
              allowMultiple: !1,
              fileTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
              title: "Chọn ảnh đại diện",
            }),
          ],
        });
  },
  Ea = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ra },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  la = () => {
    const { data: e, isLoading: s } = Cs(),
      a = ws(),
      d = Ts(),
      [c, x] = y.useState(!1),
      [N, q] = y.useState({
        header: { title: "", subtitle: "" },
        packages: [],
      }),
      [o, g] = y.useState({ title: "", description: "", keywords: [] });
    y.useEffect(() => {
      e &&
        (x(e.customPricingPageEnabled),
        e.customPricingPageContent && q(e.customPricingPageContent),
        e.customPricingPageMeta && g(e.customPricingPageMeta));
    }, [e]);
    const U = async () => {
        var u, j;
        try {
          if (c && !N.header.title) {
            C.error({
              title: "Lỗi",
              description: "Vui lòng nhập tiêu đề trang",
            });
            return;
          }
          const A = {
            customPricingPageEnabled: c,
            customPricingPageContent: c ? N : void 0,
            customPricingPageMeta: o,
          };
          await a.mutateAsync(A),
            C.success({
              title: "Thành công",
              description: "Đã lưu trang bảng giá",
            });
        } catch (A) {
          C.error({
            title: "Lỗi",
            description:
              ((j = (u = A.response) == null ? void 0 : u.data) == null
                ? void 0
                : j.message) || "Không thể lưu trang",
          });
        }
      },
      w = async () => {
        var u, j;
        if (window.confirm("Bạn có chắc muốn vô hiệu hóa trang bảng giá?"))
          try {
            await d.mutateAsync(),
              x(!1),
              C.success({
                title: "Thành công",
                description: "Đã vô hiệu hóa trang bảng giá",
              });
          } catch (A) {
            C.error({
              title: "Lỗi",
              description:
                ((j = (u = A.response) == null ? void 0 : u.data) == null
                  ? void 0
                  : j.message) || "Không thể vô hiệu hóa",
            });
          }
      },
      p = () => {
        q({
          ...N,
          packages: [
            ...N.packages,
            { name: "Gói mới", price: 0, features: [] },
          ],
        });
      },
      k = (u) => {
        q({ ...N, packages: N.packages.filter((j, A) => A !== u) });
      },
      T = (u, j) => {
        const A = [...N.packages];
        (A[u] = { ...A[u], ...j }), q({ ...N, packages: A });
      };
    return s
      ? t.jsx(n, {
          className: "p-8",
          children: t.jsx(r, { children: "Đang tải..." }),
        })
      : t.jsx(n, {
          className: "p-8 max-w-6xl mx-auto",
          children: t.jsxs(_, {
            gap: 6,
            align: "stretch",
            children: [
              t.jsxs(n, {
                children: [
                  t.jsx(r, {
                    className:
                      "text-3xl font-bold text-gray-800 font-[Quicksand,sans-serif]",
                    children: "Trang Bảng Giá Tùy Chỉnh",
                  }),
                  t.jsx(r, {
                    className: "text-gray-600 mt-2",
                    children:
                      "Tạo trang bảng giá riêng với nội dung tùy chỉnh (Backend v2)",
                  }),
                ],
              }),
              t.jsx(n, {
                className: "bg-white rounded-lg shadow-md p-6",
                children: t.jsxs(f, {
                  justify: "space-between",
                  children: [
                    t.jsxs(n, {
                      children: [
                        t.jsx(r, {
                          className: "font-semibold",
                          children: "Kích hoạt trang bảng giá",
                        }),
                        t.jsx(r, {
                          className: "text-sm text-gray-500 mt-1",
                          children: "Bật/tắt trang bảng giá công khai",
                        }),
                      ],
                    }),
                    t.jsxs(Yt, {
                      checked: c,
                      onCheckedChange: (u) => x(u.checked),
                      children: [
                        t.jsx(Zt, {}),
                        t.jsx(Jt, { children: t.jsx(es, {}) }),
                      ],
                    }),
                  ],
                }),
              }),
              c &&
                t.jsx(n, {
                  className: "bg-white rounded-lg shadow-md p-6",
                  children: t.jsxs(_, {
                    gap: 4,
                    align: "stretch",
                    children: [
                      t.jsx(Ge, {
                        label: "Tiêu đề",
                        children: t.jsx(Ne, {
                          value: N.header.title,
                          onChange: (u) =>
                            q({
                              ...N,
                              header: { ...N.header, title: u.target.value },
                            }),
                          placeholder: "Bảng Giá Dịch Vụ",
                        }),
                      }),
                      t.jsx(Ge, {
                        label: "Phụ đề",
                        children: t.jsx(Ne, {
                          value: N.header.subtitle,
                          onChange: (u) =>
                            q({
                              ...N,
                              header: { ...N.header, subtitle: u.target.value },
                            }),
                          placeholder: "Chọn gói phù hợp",
                        }),
                      }),
                      t.jsxs(n, {
                        children: [
                          t.jsxs(f, {
                            justify: "space-between",
                            className: "mb-3",
                            children: [
                              t.jsx(r, {
                                className: "font-semibold",
                                children: "Packages",
                              }),
                              t.jsxs(v, {
                                size: "sm",
                                onClick: p,
                                children: [
                                  t.jsx(ze, { className: "mr-2" }),
                                  " Thêm Gói",
                                ],
                              }),
                            ],
                          }),
                          N.packages.map((u, j) =>
                            t.jsxs(
                              n,
                              {
                                className:
                                  "border p-4 rounded-lg mb-3 bg-gray-50",
                                children: [
                                  t.jsxs(f, {
                                    justify: "space-between",
                                    className: "mb-3",
                                    children: [
                                      t.jsxs(de, { children: ["Gói ", j + 1] }),
                                      t.jsx(nt, {
                                        "aria-label": "Xóa",
                                        size: "sm",
                                        colorScheme: "red",
                                        variant: "ghost",
                                        onClick: () => k(j),
                                        children: t.jsx(rt, {}),
                                      }),
                                    ],
                                  }),
                                  t.jsxs(_, {
                                    gap: 3,
                                    align: "stretch",
                                    children: [
                                      t.jsx(Ne, {
                                        value: u.name,
                                        onChange: (A) =>
                                          T(j, { name: A.target.value }),
                                        placeholder: "Tên gói",
                                        size: "sm",
                                      }),
                                      t.jsx(Ne, {
                                        type: "number",
                                        value: u.price,
                                        onChange: (A) =>
                                          T(j, {
                                            price: parseInt(A.target.value),
                                          }),
                                        placeholder: "Giá",
                                        size: "sm",
                                      }),
                                      t.jsx(Ye, {
                                        value: u.features.join(`
`),
                                        onChange: (A) =>
                                          T(j, {
                                            features: A.target.value.split(`
`),
                                          }),
                                        rows: 3,
                                        placeholder:
                                          "Features (mỗi dòng 1 feature)",
                                        size: "sm",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              j
                            )
                          ),
                        ],
                      }),
                      t.jsxs(n, {
                        className: "border-t pt-4 mt-4",
                        children: [
                          t.jsx(r, {
                            className: "font-semibold mb-3",
                            children: "SEO Metadata",
                          }),
                          t.jsxs(_, {
                            gap: 3,
                            align: "stretch",
                            children: [
                              t.jsx(Ge, {
                                label: "Page Title (SEO)",
                                children: t.jsx(Ne, {
                                  value: o.title || "",
                                  onChange: (u) =>
                                    g({ ...o, title: u.target.value }),
                                  placeholder: "Bảng Giá - Wedding Studio",
                                }),
                              }),
                              t.jsx(Ge, {
                                label: "Meta Description (SEO)",
                                children: t.jsx(Ye, {
                                  value: o.description || "",
                                  onChange: (u) =>
                                    g({ ...o, description: u.target.value }),
                                  rows: 2,
                                  placeholder: "Xem bảng giá chi tiết...",
                                }),
                              }),
                              t.jsx(Ge, {
                                label: "Keywords (phân cách bằng dấu phẩy)",
                                children: t.jsx(Ne, {
                                  value: Array.isArray(o.keywords)
                                    ? o.keywords.join(", ")
                                    : "",
                                  onChange: (u) =>
                                    g({
                                      ...o,
                                      keywords: u.target.value
                                        .split(",")
                                        .map((j) => j.trim())
                                        .filter(Boolean),
                                    }),
                                  placeholder: "thiệp cưới, wedding, bảng giá",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              t.jsxs(f, {
                gap: 3,
                justify: "flex-end",
                children: [
                  c &&
                    t.jsxs(v, {
                      colorScheme: "red",
                      variant: "outline",
                      onClick: w,
                      loading: d.isPending,
                      children: [
                        t.jsx(rt, { className: "mr-2" }),
                        " Vô Hiệu Hóa",
                      ],
                    }),
                  t.jsxs(v, {
                    colorScheme: "blue",
                    size: "lg",
                    onClick: U,
                    loading: a.isPending,
                    className: "font-[Quicksand,sans-serif] font-bold",
                    children: [t.jsx(zt, { className: "mr-2" }), " Lưu Trang"],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  _a = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: la },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function ia() {
  const e = W.c(86),
    [s, a] = y.useState(!1),
    [d, c] = y.useState(!1);
  let x;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = { page: 1, limit: 100 }), (e[0] = x))
    : (x = e[0]);
  const { data: N } = at(x);
  let q;
  e[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((q = { page: 1, limit: 100, status: "pending" }), (e[1] = q))
    : (q = e[1]);
  const { data: o } = at(q);
  let g;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = { page: 1, limit: 100, status: "in_progress" }), (e[2] = g))
    : (g = e[2]);
  const { data: U } = at(g);
  let w;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((w = { page: 1, limit: 100, status: "completed" }), (e[3] = w))
    : (w = e[3]);
  const { data: p } = at(w);
  let k, T, u, j, A, ne, S, R, X, Y, V, H, b, E, L, D, m, $;
  if (
    e[4] !== (N == null ? void 0 : N.data) ||
    e[5] !== (p == null ? void 0 : p.data) ||
    e[6] !== (U == null ? void 0 : U.data) ||
    e[7] !== (o == null ? void 0 : o.data)
  ) {
    const ee = (N == null ? void 0 : N.data) || [];
    let Q;
    e[26] !== (o == null ? void 0 : o.data)
      ? ((Q = (o == null ? void 0 : o.data) || []),
        (e[26] = o == null ? void 0 : o.data),
        (e[27] = Q))
      : (Q = e[27]);
    const oe = Q;
    let Z;
    e[28] !== (U == null ? void 0 : U.data)
      ? ((Z = (U == null ? void 0 : U.data) || []),
        (e[28] = U == null ? void 0 : U.data),
        (e[29] = Z))
      : (Z = e[29]);
    const re = Z;
    let xe;
    e[30] !== (p == null ? void 0 : p.data)
      ? ((xe = (p == null ? void 0 : p.data) || []),
        (e[30] = p == null ? void 0 : p.data),
        (e[31] = xe))
      : (xe = e[31]);
    const ie = xe;
    (u = n),
      e[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = { base: 4, md: 6 }), (e[32] = Y))
        : (Y = e[32]),
      (V = "1400px"),
      (H = "auto"),
      (T = kt),
      (ne = 6),
      e[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = t.jsxs(n, {
            children: [
              t.jsx(r, {
                fontSize: "2xl",
                fontWeight: "bold",
                color: "gray.800",
                mb: 2,
                children: "🎨 Yêu Cầu Hỗ Trợ Thiết Kế",
              }),
              t.jsx(r, {
                color: "gray.600",
                children:
                  "Yêu cầu meWedding thiết kế hộ cho các trang dealer, mẫu thiệp hoặc yêu cầu tùy chỉnh",
              }),
            ],
          })),
          (e[33] = S))
        : (S = e[33]);
    let ae;
    e[34] === Symbol.for("react.memo_cache_sentinel")
      ? ((ae = { base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }),
        (e[34] = ae))
      : (ae = e[34]);
    let me;
    e[35] === Symbol.for("react.memo_cache_sentinel")
      ? ((me = t.jsx(r, {
          fontSize: "sm",
          color: "gray.600",
          mb: 1,
          children: "Tổng số yêu cầu",
        })),
        (e[35] = me))
      : (me = e[35]);
    const K = t.jsxs(n, {
      p: 4,
      bg: "white",
      borderRadius: "lg",
      borderWidth: 1,
      borderColor: "gray.200",
      shadow: "sm",
      children: [
        me,
        t.jsx(r, {
          fontSize: "3xl",
          fontWeight: "bold",
          color: "gray.800",
          children: ee.length,
        }),
      ],
    });
    let ye;
    e[36] === Symbol.for("react.memo_cache_sentinel")
      ? ((ye = t.jsx(r, {
          fontSize: "sm",
          color: "gray.600",
          mb: 1,
          children: "Đang chờ",
        })),
        (e[36] = ye))
      : (ye = e[36]);
    let J;
    e[37] !== oe.length
      ? ((J = t.jsxs(n, {
          p: 4,
          bg: "yellow.50",
          borderRadius: "lg",
          borderWidth: 1,
          borderColor: "yellow.200",
          shadow: "sm",
          children: [
            ye,
            t.jsx(r, {
              fontSize: "3xl",
              fontWeight: "bold",
              color: "yellow.600",
              children: oe.length,
            }),
          ],
        })),
        (e[37] = oe.length),
        (e[38] = J))
      : (J = e[38]);
    let ge;
    e[39] === Symbol.for("react.memo_cache_sentinel")
      ? ((ge = t.jsx(r, {
          fontSize: "sm",
          color: "gray.600",
          mb: 1,
          children: "Đang xử lý",
        })),
        (e[39] = ge))
      : (ge = e[39]);
    let pe;
    e[40] !== re.length
      ? ((pe = t.jsxs(n, {
          p: 4,
          bg: "blue.50",
          borderRadius: "lg",
          borderWidth: 1,
          borderColor: "blue.200",
          shadow: "sm",
          children: [
            ge,
            t.jsx(r, {
              fontSize: "3xl",
              fontWeight: "bold",
              color: "blue.600",
              children: re.length,
            }),
          ],
        })),
        (e[40] = re.length),
        (e[41] = pe))
      : (pe = e[41]);
    let ce;
    e[42] === Symbol.for("react.memo_cache_sentinel")
      ? ((ce = t.jsx(r, {
          fontSize: "sm",
          color: "gray.600",
          mb: 1,
          children: "Hoàn thành",
        })),
        (e[42] = ce))
      : (ce = e[42]);
    let fe;
    e[43] !== ie.length
      ? ((fe = t.jsxs(n, {
          p: 4,
          bg: "green.50",
          borderRadius: "lg",
          borderWidth: 1,
          borderColor: "green.200",
          shadow: "sm",
          children: [
            ce,
            t.jsx(r, {
              fontSize: "3xl",
              fontWeight: "bold",
              color: "green.600",
              children: ie.length,
            }),
          ],
        })),
        (e[43] = ie.length),
        (e[44] = fe))
      : (fe = e[44]),
      e[45] !== K || e[46] !== J || e[47] !== pe || e[48] !== fe
        ? ((R = t.jsxs(Lt, {
            templateColumns: ae,
            gap: 4,
            children: [K, J, pe, fe],
          })),
          (e[45] = K),
          (e[46] = J),
          (e[47] = pe),
          (e[48] = fe),
          (e[49] = R))
        : (R = e[49]);
    let ve;
    e[50] === Symbol.for("react.memo_cache_sentinel")
      ? ((ve = () => a(!0)), (e[50] = ve))
      : (ve = e[50]);
    let be;
    e[51] === Symbol.for("react.memo_cache_sentinel")
      ? ((be = t.jsxs(v, {
          colorPalette: "blue",
          onClick: ve,
          size: "lg",
          children: [
            t.jsx(ze, { style: { marginRight: "8px" } }),
            "Tạo yêu cầu mới",
          ],
        })),
        (e[51] = be))
      : (be = e[51]);
    let I;
    e[52] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = () => c(!0)), (e[52] = I))
      : (I = e[52]),
      e[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = t.jsxs(f, {
            gap: 3,
            flexWrap: "wrap",
            children: [
              be,
              t.jsxs(v, {
                variant: "outline",
                onClick: I,
                size: "lg",
                children: [
                  t.jsx(ts, { style: { marginRight: "8px" } }),
                  "Xem danh sách yêu cầu",
                ],
              }),
            ],
          })),
          (e[53] = X))
        : (X = e[53]),
      (k = n),
      (b = "white"),
      (E = 4),
      (L = "lg"),
      (D = "sm"),
      (m = 1),
      ($ = "gray.200"),
      e[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = t.jsx(r, {
            fontSize: "lg",
            fontWeight: "bold",
            mb: 4,
            children: "Yêu cầu gần đây",
          })),
          (e[54] = j))
        : (j = e[54]),
      (A =
        ee.length === 0
          ? t.jsxs(n, {
              textAlign: "center",
              py: 8,
              children: [
                t.jsx(r, {
                  color: "gray.500",
                  fontSize: "lg",
                  mb: 4,
                  children: "Bạn chưa có yêu cầu thiết kế nào",
                }),
                t.jsx(r, {
                  color: "gray.400",
                  fontSize: "sm",
                  mb: 4,
                  children:
                    "Tạo yêu cầu đầu tiên để meWedding hỗ trợ bạn thiết kế trang dealer, mẫu thiệp hoặc yêu cầu tùy chỉnh",
                }),
                t.jsxs(v, {
                  colorPalette: "blue",
                  onClick: () => a(!0),
                  children: [
                    t.jsx(ze, { style: { marginRight: "8px" } }),
                    "Tạo yêu cầu đầu tiên",
                  ],
                }),
              ],
            })
          : t.jsxs(kt, {
              gap: 3,
              children: [
                ee.slice(0, 5).map(ca),
                ee.length > 5 &&
                  t.jsxs(v, {
                    variant: "outline",
                    onClick: () => c(!0),
                    w: "full",
                    mt: 2,
                    children: ["Xem tất cả ", ee.length, " yêu cầu"],
                  }),
              ],
            })),
      (e[4] = N == null ? void 0 : N.data),
      (e[5] = p == null ? void 0 : p.data),
      (e[6] = U == null ? void 0 : U.data),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = k),
      (e[9] = T),
      (e[10] = u),
      (e[11] = j),
      (e[12] = A),
      (e[13] = ne),
      (e[14] = S),
      (e[15] = R),
      (e[16] = X),
      (e[17] = Y),
      (e[18] = V),
      (e[19] = H),
      (e[20] = b),
      (e[21] = E),
      (e[22] = L),
      (e[23] = D),
      (e[24] = m),
      (e[25] = $);
  } else
    (k = e[8]),
      (T = e[9]),
      (u = e[10]),
      (j = e[11]),
      (A = e[12]),
      (ne = e[13]),
      (S = e[14]),
      (R = e[15]),
      (X = e[16]),
      (Y = e[17]),
      (V = e[18]),
      (H = e[19]),
      (b = e[20]),
      (E = e[21]),
      (L = e[22]),
      (D = e[23]),
      (m = e[24]),
      ($ = e[25]);
  let M;
  e[55] !== k ||
  e[56] !== j ||
  e[57] !== A ||
  e[58] !== b ||
  e[59] !== E ||
  e[60] !== L ||
  e[61] !== D ||
  e[62] !== m ||
  e[63] !== $
    ? ((M = t.jsxs(k, {
        bg: b,
        p: E,
        rounded: L,
        shadow: D,
        borderWidth: m,
        borderColor: $,
        children: [j, A],
      })),
      (e[55] = k),
      (e[56] = j),
      (e[57] = A),
      (e[58] = b),
      (e[59] = E),
      (e[60] = L),
      (e[61] = D),
      (e[62] = m),
      (e[63] = $),
      (e[64] = M))
    : (M = e[64]);
  let i;
  e[65] !== T ||
  e[66] !== ne ||
  e[67] !== S ||
  e[68] !== R ||
  e[69] !== X ||
  e[70] !== M
    ? ((i = t.jsxs(T, { gap: ne, children: [S, R, X, M] })),
      (e[65] = T),
      (e[66] = ne),
      (e[67] = S),
      (e[68] = R),
      (e[69] = X),
      (e[70] = M),
      (e[71] = i))
    : (i = e[71]);
  let P;
  e[72] === Symbol.for("react.memo_cache_sentinel")
    ? ((P = () => a(!1)), (e[72] = P))
    : (P = e[72]);
  let G;
  e[73] !== s
    ? ((G = t.jsx(is, { isOpen: s, onClose: P })), (e[73] = s), (e[74] = G))
    : (G = e[74]);
  let se;
  e[75] === Symbol.for("react.memo_cache_sentinel")
    ? ((se = () => c(!1)), (e[75] = se))
    : (se = e[75]);
  let O;
  e[76] !== d
    ? ((O = t.jsx(cs, { isOpen: d, onClose: se })), (e[76] = d), (e[77] = O))
    : (O = e[77]);
  let le;
  return (
    e[78] !== u ||
    e[79] !== Y ||
    e[80] !== V ||
    e[81] !== H ||
    e[82] !== i ||
    e[83] !== G ||
    e[84] !== O
      ? ((le = t.jsxs(u, { p: Y, maxW: V, mx: H, children: [i, G, O] })),
        (e[78] = u),
        (e[79] = Y),
        (e[80] = V),
        (e[81] = H),
        (e[82] = i),
        (e[83] = G),
        (e[84] = O),
        (e[85] = le))
      : (le = e[85]),
    le
  );
}
function ca(e) {
  return t.jsxs(
    n,
    {
      p: 4,
      borderWidth: 1,
      borderColor: "gray.200",
      borderRadius: "md",
      bg: "white",
      _hover: { bg: "gray.50", borderColor: "gray.300" },
      transition: "all 0.2s",
      children: [
        t.jsxs(f, {
          justify: "space-between",
          align: "flex-start",
          mb: 2,
          children: [
            t.jsx(r, {
              fontWeight: "semibold",
              fontSize: "md",
              flex: 1,
              children: e.title,
            }),
            t.jsxs(f, { gap: 2, children: [Hs(e.status), Ws(e.priority)] }),
          ],
        }),
        t.jsx(r, {
          color: "gray.600",
          fontSize: "sm",
          mb: 2,
          css: {
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          },
          children: e.description,
        }),
        t.jsxs(f, {
          gap: 4,
          fontSize: "xs",
          color: "gray.500",
          children: [
            t.jsxs(r, { children: ["📅 ", Vs(e.createdAt)] }),
            e.dealerPage &&
              t.jsxs(r, { children: ["📄 ", e.dealerPage.pageTitle] }),
            e.assignedToAdmin &&
              t.jsxs(r, {
                children: [
                  "👤 ",
                  e.assignedToAdmin.firstName,
                  " ",
                  e.assignedToAdmin.lastName,
                ],
              }),
          ],
        }),
        e.adminNotes &&
          t.jsxs(n, {
            mt: 2,
            p: 2,
            bg: "blue.50",
            borderLeft: "3px solid",
            borderColor: "blue.500",
            borderRadius: "md",
            fontSize: "sm",
            children: [
              t.jsx(r, {
                fontWeight: "semibold",
                color: "blue.700",
                mb: 1,
                children: "Ghi chú từ Admin:",
              }),
              t.jsx(r, { color: "gray.700", children: e.adminNotes }),
            ],
          }),
      ],
    },
    e.id
  );
}
const za = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ia }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  Ta as A,
  It as D,
  Sa as a,
  Ca as b,
  Ws as c,
  Vs as d,
  $e as e,
  wa as f,
  Hs as g,
  xa as h,
  pa as i,
  fa as j,
  ya as k,
  ba as l,
  ja as m,
  te as n,
  ua as o,
  ha as p,
  va as q,
  at as r,
  ka as s,
  Pa as t,
  Na as u,
  Aa as v,
  Fa as w,
  Ea as x,
  _a as y,
  za as z,
};
