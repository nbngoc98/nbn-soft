import {
  W as ls,
  a as R,
  j as s,
  r as p,
  B as y,
  n as we,
  l as Oe,
  bG as Fs,
  bH as zs,
  eB as Ms,
  eV as Os,
  eW as Es,
  eX as Ls,
  eY as Ws,
  dN as $s,
  T as j,
  eZ as As,
  dQ as Yt,
  dR as Zt,
  e_ as J,
  ag as _t,
  e as Bt,
  h as Rs,
  V as K,
  i as ee,
  C as Ee,
  aa as je,
  p as Ce,
  bd as os,
  ae as ze,
  a8 as tt,
  I as Gt,
  a6 as rs,
  e$ as Vs,
  f0 as Ds,
  aT as Ht,
  S as lt,
  ax as Bs,
  u as Ge,
  b as He,
  d as st,
  f1 as ot,
  bf as Xt,
  t as as,
  f2 as cs,
  b9 as Ot,
  f as ds,
  f3 as Gs,
  f4 as Et,
  f5 as Lt,
  f6 as Hs,
  at as Jt,
  ac as hs,
  H as Us,
  dZ as Qs,
  d_ as Ks,
  f7 as qs,
  eL as Ys,
  e0 as Zs,
  e1 as Xs,
  e2 as es,
  f8 as Ve,
  f9 as Wt,
  ah as Ct,
  aQ as vt,
  fa as Js,
  fb as en,
} from "./vendor-react-CpGE3sj0.js";
import {
  b as tn,
  c as sn,
  s as Qe,
  a as Tt,
  d as kt,
  T as ms,
  e as Ut,
  f as nn,
  i as Rt,
  g as Vt,
  P as $t,
  h as ln,
} from "./editor-M-e6bJKl.js";
import {
  r as on,
  a as Fe,
  t as Ie,
  w as rn,
  x as an,
  u as cn,
  y as dn,
  s as gs,
  l as hn,
  z as mn,
  A as rt,
  q as gn,
} from "./admin-CPo6XtYv.js";
import { l as ke } from "./vendor-other-C35hYj1E.js";
import {
  E as Pt,
  x as It,
  y as fn,
  z as Ue,
  H as un,
  B as xn,
  G as pn,
  W as bn,
  I as jn,
  J as yn,
  K as Sn,
  R as fs,
  S as us,
  t as wt,
  k as et,
  F as wn,
  m as xs,
  U as ps,
  V as at,
  X as Ft,
  Y as ct,
  Z as zt,
  _ as vn,
  $ as We,
  a0 as $e,
  a1 as De,
  a2 as Ae,
  a3 as Re,
  a4 as At,
  a5 as dt,
  a6 as ht,
  a7 as mt,
  a8 as gt,
  a9 as Cn,
  aa as Nn,
  ab as _n,
  ac as Tn,
  ad as kn,
  ae as Pn,
  af as In,
  ag as Fn,
  ah as zn,
  ai as Mn,
  aj as On,
  ak as En,
  al as Ln,
} from "./shared-components-G24N1P00.js";
import "./vendor-charts-CZ6szF51.js";
import { g as Wn } from "./user-manager-Dr4yhAGw.js";
import { n as Nt } from "./agent-C9nq9n0B.js";
import { R as Be } from "./routes-constants-lB11n7Go.js";
import { T as X, l as $n, V as Mt } from "./types-CckU8TWY.js";
const An = "/assets/sfx-page-flip-CttPmN4m.mp3",
  Rn = `
  .stf__parent {
    margin: 0 auto;
  }
  
  .page {
    background-color: #fff;
    color: #000;
    border: solid 1px #ccc;
    overflow: hidden;
    position: relative;
  }
  
  .page-cover {
    background-color: #ffffff;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
  }
  
  .page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .page-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .page-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 12px;
    backdrop-filter: blur(4px);
  }
  
  .page-footer-text {
    color: white;
    font-size: 14px;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,
  bs = ls.forwardRef((e, t) => {
    const n = R.c(5);
    let a;
    n[0] !== e.children
      ? ((a = s.jsx("div", {
          className: "page-content",
          children: s.jsx("h2", { children: e.children }),
        })),
        (n[0] = e.children),
        (n[1] = a))
      : (a = n[1]);
    let o;
    return (
      n[2] !== t || n[3] !== a
        ? ((o = s.jsx("div", {
            className: "page page-cover",
            ref: t,
            "data-density": "hard",
            children: a,
          })),
          (n[2] = t),
          (n[3] = a),
          (n[4] = o))
        : (o = n[4]),
      o
    );
  });
bs.displayName = "PageCover";
const Dt = ls.forwardRef((e, t) => {
  const n = R.c(11),
    a = e.isCover ? "hard" : void 0;
  let o;
  n[0] !== e.imageUrl
    ? ((o = s.jsx("img", {
        src: e.imageUrl,
        alt: "Page",
        className: "page-image",
      })),
      (n[0] = e.imageUrl),
      (n[1] = o))
    : (o = n[1]);
  let h;
  n[2] !== e.description
    ? ((h =
        e.description &&
        s.jsx("div", {
          className: "page-footer",
          children: s.jsx("p", {
            className: "page-footer-text",
            children: e.description,
          }),
        })),
      (n[2] = e.description),
      (n[3] = h))
    : (h = n[3]);
  let l;
  n[4] !== o || n[5] !== h
    ? ((l = s.jsxs("div", { className: "page-content", children: [o, h] })),
      (n[4] = o),
      (n[5] = h),
      (n[6] = l))
    : (l = n[6]);
  let g;
  return (
    n[7] !== t || n[8] !== a || n[9] !== l
      ? ((g = s.jsx("div", {
          className: "page",
          ref: t,
          "data-density": a,
          children: l,
        })),
        (n[7] = t),
        (n[8] = a),
        (n[9] = l),
        (n[10] = g))
      : (g = n[10]),
    g
  );
});
Dt.displayName = "Page";
const Vn = ({ photobooth: e }) => {
    const t = p.useRef(null),
      n = p.useRef(null),
      a = p.useRef(null),
      o = p.useRef(null),
      [h, l] = p.useState(0),
      [g, r] = p.useState(0),
      [m, i] = p.useState(!1),
      [c, d] = p.useState(!1),
      [u, S] = p.useState(!0),
      [w, f] = p.useState(1),
      v = p.useMemo(
        () => e.images.map((b) => ({ ...b, link: b.link })),
        [e.images]
      );
    p.useEffect(() => {
      const b = new Audio(An);
      (b.volume = 0.5), (b.preload = "auto"), b.load(), (o.current = b);
    }, []),
      p.useEffect(() => {
        const b = setTimeout(() => {
          if (t.current && t.current.pageFlip)
            try {
              const N = t.current.pageFlip();
              N && N.getPageCount && r(N.getPageCount());
            } catch {}
        }, 100);
        return () => clearTimeout(b);
      }, [v]);
    const I = p.useCallback(() => {
        u &&
          o.current &&
          ((o.current.currentTime = 0), o.current.play().catch(() => {}));
      }, [u]),
      x = p.useCallback(
        (b) => {
          l(b.data), I();
        },
        [I]
      ),
      k = p.useCallback(() => {
        if (t.current && t.current.pageFlip)
          try {
            const b = t.current.pageFlip();
            b && b.flipNext && b.flipNext();
          } catch {}
      }, []),
      T = p.useCallback(() => {
        if (t.current && t.current.pageFlip)
          try {
            const b = t.current.pageFlip();
            b && b.flipPrev && b.flipPrev();
          } catch {}
      }, []),
      P = p.useCallback(() => {
        a.current && clearInterval(a.current),
          (a.current = setInterval(() => {
            if (t.current && t.current.pageFlip)
              try {
                const b = t.current.pageFlip();
                b &&
                  b.getCurrentPageIndex &&
                  (b.getCurrentPageIndex() < g - 1
                    ? b.flipNext && b.flipNext()
                    : b.flip && b.flip(0));
              } catch {}
          }, 3e3));
      }, [g]),
      z = p.useCallback(() => {
        a.current && (clearInterval(a.current), (a.current = null));
      }, []),
      C = p.useCallback(() => {
        i((b) => (b ? z() : P(), !b));
      }, [P, z]);
    p.useEffect(() => (m ? P() : z(), () => z()), [m, P, z]),
      p.useEffect(() => {
        const b = () => d(!!document.fullscreenElement);
        return (
          document.addEventListener("fullscreenchange", b),
          () => document.removeEventListener("fullscreenchange", b)
        );
      }, []);
    const O = p.useCallback(() => {
        var b;
        document.fullscreenElement
          ? document.exitFullscreen().catch(() => {})
          : (b = n.current) == null || b.requestFullscreen().catch(() => {});
      }, []),
      _ = p.useCallback(() => {
        S((b) => !b);
      }, []),
      M = p.useCallback(() => {
        f((b) => Math.min(b + 0.1, 2));
      }, []),
      E = p.useCallback(() => {
        f((b) => Math.max(b - 0.1, 0.5));
      }, []);
    return s.jsxs(y, {
      ref: n,
      minH: "100vh",
      bg: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: 4,
      position: "relative",
      children: [
        s.jsxs(we, {
          position: "absolute",
          top: 4,
          right: 4,
          gap: 2,
          zIndex: 10,
          bg: "blackAlpha.700",
          p: 3,
          borderRadius: "lg",
          children: [
            s.jsx(Oe, {
              "aria-label": m ? "Pause slideshow" : "Start slideshow",
              size: "sm",
              colorScheme: "whiteAlpha",
              variant: "solid",
              onClick: C,
              children: m ? s.jsx(Fs, {}) : s.jsx(zs, {}),
            }),
            s.jsx(Oe, {
              "aria-label": u ? "Mute sound" : "Enable sound",
              size: "sm",
              colorScheme: "whiteAlpha",
              variant: "solid",
              onClick: _,
              children: u ? s.jsx(Ms, {}) : s.jsx(Os, {}),
            }),
            s.jsx(Oe, {
              "aria-label": "Zoom out",
              size: "sm",
              colorScheme: "whiteAlpha",
              variant: "solid",
              onClick: E,
              disabled: w <= 0.5,
              children: s.jsx(Es, {}),
            }),
            s.jsx(Oe, {
              "aria-label": "Zoom in",
              size: "sm",
              colorScheme: "whiteAlpha",
              variant: "solid",
              onClick: M,
              disabled: w >= 2,
              children: s.jsx(Ls, {}),
            }),
            s.jsx(Oe, {
              "aria-label": c ? "Exit fullscreen" : "Enter fullscreen",
              size: "sm",
              colorScheme: "whiteAlpha",
              variant: "solid",
              onClick: O,
              children: c ? s.jsx(Ws, {}) : s.jsx($s, {}),
            }),
          ],
        }),
        s.jsx(j, {
          fontSize: { base: "2xl", md: "4xl" },
          fontWeight: "bold",
          color: "black",
          mb: 8,
          textAlign: "center",
          children: e.title,
        }),
        s.jsx("style", { children: Rn }),
        s.jsxs(y, {
          position: "relative",
          mb: 4,
          transform: `scale(${w})`,
          transition: "transform 0.3s ease",
          children: [
            v.length > 0
              ? s.jsxs(As, {
                  ref: t,
                  width: 550,
                  height: 733,
                  size: "fixed",
                  minWidth: 315,
                  maxWidth: 2e3,
                  minHeight: 400,
                  maxHeight: 1533,
                  drawShadow: !0,
                  flippingTime: 1e3,
                  usePortrait: !1,
                  startZIndex: 0,
                  autoSize: !1,
                  maxShadowOpacity: 0.5,
                  showCover: !0,
                  mobileScrollSupport: !1,
                  clickEventForward: !0,
                  useMouseEvents: !0,
                  swipeDistance: 30,
                  showPageCorners: !0,
                  disableFlipByClick: !1,
                  style: { overflow: "hidden" },
                  startPage: 0,
                  onFlip: x,
                  className: "demo-book",
                  children: [
                    s.jsx(Dt, {
                      imageUrl: v[0].link,
                      description: v[0].description,
                      isCover: !0,
                    }),
                    v
                      .slice(1)
                      .map((b, N) =>
                        s.jsx(
                          Dt,
                          { imageUrl: b.link, description: b.description },
                          N + 1
                        )
                      ),
                    v.length % 2 !== 0 && s.jsx(bs, { children: "THANK YOU" }),
                  ],
                })
              : s.jsx(j, {
                  color: "gray.600",
                  fontSize: "xl",
                  textAlign: "center",
                  p: 8,
                  children: "Không có ảnh để hiển thị",
                }),
            g > 1 &&
              s.jsxs(s.Fragment, {
                children: [
                  s.jsx(Oe, {
                    "aria-label": "Previous page",
                    position: "absolute",
                    left: -16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    colorScheme: "whiteAlpha",
                    size: "lg",
                    onClick: T,
                    zIndex: 10,
                    bg: "blackAlpha.700",
                    _hover: { bg: "blackAlpha.800" },
                    children: s.jsx(Yt, {}),
                  }),
                  s.jsx(Oe, {
                    "aria-label": "Next page",
                    position: "absolute",
                    right: -16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    colorScheme: "whiteAlpha",
                    size: "lg",
                    onClick: k,
                    zIndex: 10,
                    bg: "blackAlpha.700",
                    _hover: { bg: "blackAlpha.800" },
                    children: s.jsx(Zt, {}),
                  }),
                ],
              }),
          ],
        }),
        s.jsxs(we, {
          gap: 4,
          children: [
            s.jsx(Oe, {
              "aria-label": "Previous page",
              onClick: T,
              colorScheme: "gray",
              variant: "outline",
              size: "lg",
              children: s.jsx(Yt, {}),
            }),
            g > 0 &&
              s.jsxs(j, {
                color: "gray.700",
                fontSize: "sm",
                fontWeight: "medium",
                children: ["[", h + 1, " of ", g, "]"],
              }),
            s.jsx(Oe, {
              "aria-label": "Next page",
              onClick: k,
              colorScheme: "gray",
              variant: "outline",
              size: "lg",
              children: s.jsx(Zt, {}),
            }),
          ],
        }),
      ],
    });
  },
  Dn = () => {
    if (typeof window > "u") return "";
    const e = window.location.hostname;
    if (e === "localhost" || e === "127.0.0.1") {
      const n = new URLSearchParams(window.location.search).get("domain");
      if (n) return n;
      const a = e.split(".");
      if (a.length > 1 && a[0] !== "www") return a[0];
    }
    return e;
  },
  Bn = () => (typeof window > "u" ? "" : window.location.pathname),
  ts = (e) =>
    e && typeof e == "object" && "images" in e && Array.isArray(e.images),
  ss = (e, t, n = null) => {
    if (!e) return e;
    let a = e;
    return (
      t &&
        (a = a
          .replace(/\{guestName\}/g, t.fullName || "Khách mời")
          .replace(/\{guestEmail\}/g, t.email || "")
          .replace(/\{guestPhone\}/g, t.phone || "")
          .replace(/\{guestOf\}/g, t.guestOf || "")
          .replace(/\{Address\}/g, t.address || "")
          .replace(/\{ThongTinKhac\}/g, t.additionalNote || "")),
      n &&
        (a = a
          .replace(/\{TenChuRe\}/g, n.groomNamePage || n.groom || "Chú rể")
          .replace(/\{TenCoDau\}/g, n.brideNamePage || n.bride || "Cô dâu")),
      a
    );
  };
function Vl() {
  var z, C, O, _, M, E, b, N, F, L, $;
  const [e, t] = p.useState(""),
    [n, a] = p.useState(!1),
    [o, h] = p.useState(!1),
    [l, g] = p.useState(null),
    [r, m] = p.useState(!1),
    [i, c] = p.useState(null);
  p.useEffect(() => {
    var D;
    const V = Dn();
    t(V);
    const A = Bn();
    h(A === "/photobooth"),
      typeof window < "u" &&
        (D = window.DOMAIN_DATA) != null &&
        D.pageUserInfo &&
        c(window.DOMAIN_DATA.pageUserInfo);
  }, []),
    p.useEffect(() => {
      const V = window.location.pathname.split("/").filter((U) => U.length > 0),
        A = V.length > 0 ? V[0] : null,
        H =
          A &&
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
            A
          )
            ? A
            : null;
      H &&
        !r &&
        (m(!0),
        Wn(H, x == null ? void 0 : x.id)
          .then((U) => {
            U.success && U.data && g(U.data);
          })
          .catch((U) => {})
          .finally(() => {
            m(!1);
          }));
    }, []);
  const { data: d, isLoading: u, isSuccess: S, isError: w } = tn(e, o),
    f = d && !ts(d) ? d.id : void 0,
    { data: v } = sn(f, !i && !!f);
  if (
    (p.useEffect(() => {
      v && !i && c(v);
    }, [v, i]),
    p.useEffect(() => {
      Qe.getItem("page-password-verified") === "true" && a(!0);
    }, []),
    u)
  )
    return s.jsx(Pt, {
      message: "Đang tải trang thiệp...",
      submessage: `Đang tải trang cho domain: ${e}`,
    });
  if (e && (w || (S && !d)))
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(J, {
          children: [
            s.jsx("title", {
              children: "404 - Trang không tìm thấy | Thiệp Cưới Online",
            }),
            s.jsx("meta", {
              name: "description",
              content: "Trang bạn đang tìm kiếm không tồn tại.",
            }),
          ],
        }),
        s.jsx("div", {
          className: "flex items-center justify-center min-h-screen",
          children: s.jsxs("div", {
            className: "text-center max-w-md mx-auto p-6",
            children: [
              s.jsx("div", { className: "text-8xl mb-4", children: "404" }),
              s.jsx("h1", {
                className: "text-2xl font-bold text-gray-800 mb-2",
                children: "Oops! Trang không tìm thấy",
              }),
              s.jsx("p", {
                className: "text-gray-600 mb-4",
                children:
                  "Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.",
              }),
              s.jsx("div", {
                className: "text-6xl opacity-70 mb-4",
                children: "💒",
              }),
            ],
          }),
        }),
      ],
    });
  if (d && ts(d))
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(J, {
          children: [
            s.jsx("title", { children: d.title || "Photobook" }),
            s.jsx("meta", {
              name: "description",
              content: `Photobook của ${d.title}`,
            }),
          ],
        }),
        s.jsx(Vn, { photobooth: d }),
      ],
    });
  if (
    d &&
    "seoSettings" in d &&
    ((z = d.seoSettings) == null ? void 0 : z.password) &&
    d.seoSettings.password.trim() !== "" &&
    !n &&
    d &&
    "seoSettings" in d &&
    (C = d.seoSettings) != null &&
    C.password
  )
    return s.jsx(It, {
      expectedPassword: d.seoSettings.password,
      onPasswordCorrect: () => {
        a(!0), Qe.setItem("page-password-verified", "true");
      },
      title: "Trang được bảo vệ",
      description: "Vui lòng nhập mật khẩu để xem nội dung.",
    });
  const x = d,
    k = (O = x == null ? void 0 : x.id) == null ? void 0 : O.toString(),
    T = ss(
      l && (_ = x == null ? void 0 : x.seoSettings) != null && _.titleGuest
        ? x.seoSettings.titleGuest
        : ((M = x == null ? void 0 : x.seoSettings) == null
            ? void 0
            : M.title) ||
            (x == null ? void 0 : x.title) ||
            "Wedding Page",
      l,
      i
    ),
    P = ss(
      l &&
        (E = x == null ? void 0 : x.seoSettings) != null &&
        E.descriptionGuest
        ? x.seoSettings.descriptionGuest
        : ((b = x == null ? void 0 : x.seoSettings) == null
            ? void 0
            : b.description) || "",
      l,
      i
    );
  return s.jsxs(s.Fragment, {
    children: [
      s.jsxs(J, {
        children: [
          s.jsx("title", { children: T }),
          P && s.jsx("meta", { name: "description", content: P }),
          ((N = x == null ? void 0 : x.seoSettings) == null
            ? void 0
            : N.keywords) &&
            x.seoSettings.keywords.length > 0 &&
            s.jsx("meta", {
              name: "keywords",
              content: x.seoSettings.keywords.join(", "),
            }),
          s.jsx("meta", { property: "og:title", content: T }),
          P && s.jsx("meta", { property: "og:description", content: P }),
          ((F = x == null ? void 0 : x.seoSettings) == null
            ? void 0
            : F.imageUrl) &&
            s.jsx("meta", {
              property: "og:image",
              content: x.seoSettings.imageUrl,
            }),
          s.jsx("meta", { property: "og:type", content: "website" }),
          s.jsx("meta", {
            property: "og:url",
            content:
              typeof window < "u" ? window.location.href : `https://${e}`,
          }),
          s.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image",
          }),
          s.jsx("meta", { name: "twitter:title", content: T }),
          P && s.jsx("meta", { name: "twitter:description", content: P }),
          ((L = x == null ? void 0 : x.seoSettings) == null
            ? void 0
            : L.imageUrl) &&
            s.jsx("meta", {
              name: "twitter:image",
              content: x.seoSettings.imageUrl,
            }),
          (x == null ? void 0 : x.groom) &&
            s.jsx("meta", { name: "wedding:groom", content: x.groom }),
          (x == null ? void 0 : x.bride) &&
            s.jsx("meta", { name: "wedding:bride", content: x.bride }),
          (x == null ? void 0 : x.date) &&
            s.jsx("meta", { name: "wedding:date", content: x.date }),
          (x == null ? void 0 : x.location) &&
            s.jsx("meta", { name: "wedding:location", content: x.location }),
          l &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("meta", { name: "wedding:guest", content: l.fullName }),
                l.email &&
                  s.jsx("meta", {
                    name: "wedding:guest-email",
                    content: l.email,
                  }),
              ],
            }),
          (($ = x == null ? void 0 : x.seoSettings) == null
            ? void 0
            : $.favoriteIconUrl) &&
            s.jsx("link", { rel: "icon", href: x.seoSettings.favoriteIconUrl }),
        ],
      }),
      s.jsx(Tt, {
        templateData: x,
        children: s.jsx(kt, {
          id: k,
          content:
            x != null && x.content
              ? ke.decompress(ke.decodeBase64(x.content))
              : void 0,
          mobileContent:
            x != null && x.contentMobile
              ? ke.decompress(ke.decodeBase64(x.contentMobile))
              : void 0,
          className: "view-page",
          effects: x == null ? void 0 : x.effects,
          audioSettings: x == null ? void 0 : x.audioSettings,
          notificationSettings: x == null ? void 0 : x.notificationSettings,
          customEffects: x == null ? void 0 : x.customEffects,
          customHtmlSettings: x == null ? void 0 : x.customHtml,
          fontMap: x == null ? void 0 : x.fontMap,
        }),
      }),
      s.jsx(fn, {}),
    ],
  });
}
const Gn = () => {
  if (typeof window > "u") return null;
  if (window.location.hostname === "template.mehappy.info") {
    const t = window.location.pathname.split("/").filter((n) => n.length > 0);
    if (t.length > 0) return t[0];
  }
  return null;
};
function Dl() {
  var le, pe, Ne, Y, ye, te, Se, be, Te, ve, _e, se, Pe;
  const e = R.c(85),
    { templateId: t } = _t(),
    [n, a] = p.useState(null),
    [o, h] = p.useState(!1);
  let l, g;
  e[0] !== t
    ? ((l = () => {
        const he = t || Gn();
        a(he);
      }),
      (g = [t]),
      (e[0] = t),
      (e[1] = l),
      (e[2] = g))
    : ((l = e[1]), (g = e[2])),
    p.useEffect(l, g);
  const r = n ? parseInt(n, 10) : NaN,
    m = !isNaN(r) && r > 0,
    { data: i, isLoading: c, isSuccess: d, isError: u } = on(m ? r : 0);
  let S, w;
  if (
    (e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = () => {
          Qe.getItem("template-password-verified") === "true" && h(!0);
        }),
        (w = []),
        (e[3] = S),
        (e[4] = w))
      : ((S = e[3]), (w = e[4])),
    p.useEffect(S, w),
    c)
  ) {
    const he = `Đang tải template: ${n}`;
    let B;
    return (
      e[5] !== he
        ? ((B = s.jsx(Pt, {
            message: "Đang tải mẫu thiệp...",
            submessage: he,
          })),
          (e[5] = he),
          (e[6] = B))
        : (B = e[6]),
      B
    );
  }
  if (n && (!m || u || (d && !i))) {
    let he;
    e[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((he = s.jsxs(J, {
          children: [
            s.jsx("title", {
              children: "404 - Template không tìm thấy | Thiệp Cưới Online",
            }),
            s.jsx("meta", {
              name: "description",
              content: "Template bạn đang tìm kiếm không tồn tại.",
            }),
          ],
        })),
        (e[7] = he))
      : (he = e[7]);
    let B;
    return (
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s.jsxs(s.Fragment, {
            children: [
              he,
              s.jsx("div", {
                className: "flex items-center justify-center min-h-screen",
                children: s.jsxs("div", {
                  className: "text-center max-w-md mx-auto p-6",
                  children: [
                    s.jsx("div", {
                      className: "text-8xl mb-4",
                      children: "404",
                    }),
                    s.jsx("h1", {
                      className: "text-2xl font-bold text-gray-800 mb-2",
                      children: "Oops! Template không tìm thấy",
                    }),
                    s.jsx("p", {
                      className: "text-gray-600 mb-4",
                      children:
                        "Template bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.",
                    }),
                    s.jsx("div", {
                      className: "text-6xl opacity-70 mb-4",
                      children: "🎨",
                    }),
                  ],
                }),
              }),
            ],
          })),
          (e[8] = B))
        : (B = e[8]),
      B
    );
  }
  if (
    ((le = i == null ? void 0 : i.seoSettings) == null
      ? void 0
      : le.password) &&
    i.seoSettings.password.trim() !== "" &&
    !o &&
    (pe = i == null ? void 0 : i.seoSettings) != null &&
    pe.password
  ) {
    let he;
    e[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((he = () => {
          h(!0), Qe.setItem("template-password-verified", "true");
        }),
        (e[9] = he))
      : (he = e[9]);
    let B;
    return (
      e[10] !== i.seoSettings.password
        ? ((B = s.jsx(It, {
            expectedPassword: i.seoSettings.password,
            onPasswordCorrect: he,
            title: "Template được bảo vệ",
            description: "Vui lòng nhập mật khẩu để xem template.",
          })),
          (e[10] = i.seoSettings.password),
          (e[11] = B))
        : (B = e[11]),
      B
    );
  }
  let v;
  e[12] !== (i == null ? void 0 : i.id)
    ? ((v = (Ne = i == null ? void 0 : i.id) == null ? void 0 : Ne.toString()),
      (e[12] = i == null ? void 0 : i.id),
      (e[13] = v))
    : (v = e[13]);
  const I = v,
    x =
      ((Y = i == null ? void 0 : i.seoSettings) == null ? void 0 : Y.title) ||
      (i == null ? void 0 : i.name) ||
      "Template Preview";
  let k;
  e[14] !== x
    ? ((k = s.jsx("title", { children: x })), (e[14] = x), (e[15] = k))
    : (k = e[15]);
  let T;
  e[16] !== i
    ? ((T =
        ((ye = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : ye.description) &&
        s.jsx("meta", {
          name: "description",
          content: i.seoSettings.description,
        })),
      (e[16] = i),
      (e[17] = T))
    : (T = e[17]);
  let P;
  e[18] !== i
    ? ((P =
        ((te = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : te.keywords) &&
        i.seoSettings.keywords.length > 0 &&
        s.jsx("meta", {
          name: "keywords",
          content: i.seoSettings.keywords.join(", "),
        })),
      (e[18] = i),
      (e[19] = P))
    : (P = e[19]);
  const z =
    ((Se = i == null ? void 0 : i.seoSettings) == null ? void 0 : Se.title) ||
    (i == null ? void 0 : i.name) ||
    "Template Preview";
  let C;
  e[20] !== z
    ? ((C = s.jsx("meta", { property: "og:title", content: z })),
      (e[20] = z),
      (e[21] = C))
    : (C = e[21]);
  let O;
  e[22] !== i
    ? ((O =
        ((be = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : be.description) &&
        s.jsx("meta", {
          property: "og:description",
          content: i.seoSettings.description,
        })),
      (e[22] = i),
      (e[23] = O))
    : (O = e[23]);
  let _;
  e[24] !== i
    ? ((_ =
        ((Te = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : Te.imageUrl) &&
        s.jsx("meta", {
          property: "og:image",
          content: i.seoSettings.imageUrl,
        })),
      (e[24] = i),
      (e[25] = _))
    : (_ = e[25]);
  let M;
  e[26] === Symbol.for("react.memo_cache_sentinel")
    ? ((M = s.jsx("meta", { property: "og:type", content: "website" })),
      (e[26] = M))
    : (M = e[26]);
  const E =
    typeof window < "u"
      ? window.location.href
      : `https://template.mehappy.info/${n}`;
  let b;
  e[27] !== E
    ? ((b = s.jsx("meta", { property: "og:url", content: E })),
      (e[27] = E),
      (e[28] = b))
    : (b = e[28]);
  let N;
  e[29] === Symbol.for("react.memo_cache_sentinel")
    ? ((N = s.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image",
      })),
      (e[29] = N))
    : (N = e[29]);
  const F =
    ((ve = i == null ? void 0 : i.seoSettings) == null ? void 0 : ve.title) ||
    (i == null ? void 0 : i.name) ||
    "Template Preview";
  let L;
  e[30] !== F
    ? ((L = s.jsx("meta", { name: "twitter:title", content: F })),
      (e[30] = F),
      (e[31] = L))
    : (L = e[31]);
  let $;
  e[32] !== i
    ? (($ =
        ((_e = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : _e.description) &&
        s.jsx("meta", {
          name: "twitter:description",
          content: i.seoSettings.description,
        })),
      (e[32] = i),
      (e[33] = $))
    : ($ = e[33]);
  let V;
  e[34] !== i
    ? ((V =
        ((se = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : se.imageUrl) &&
        s.jsx("meta", {
          name: "twitter:image",
          content: i.seoSettings.imageUrl,
        })),
      (e[34] = i),
      (e[35] = V))
    : (V = e[35]);
  let A;
  e[36] !== i
    ? ((A =
        (i == null ? void 0 : i.category) &&
        s.jsx("meta", { name: "template:category", content: i.category })),
      (e[36] = i),
      (e[37] = A))
    : (A = e[37]);
  let D;
  e[38] !== i
    ? ((D =
        (i == null ? void 0 : i.tier) &&
        s.jsx("meta", { name: "template:tier", content: i.tier })),
      (e[38] = i),
      (e[39] = D))
    : (D = e[39]);
  let H;
  e[40] !== i
    ? ((H =
        (i == null ? void 0 : i.name) &&
        s.jsx("meta", { name: "template:name", content: i.name })),
      (e[40] = i),
      (e[41] = H))
    : (H = e[41]);
  let U;
  e[42] !== i
    ? ((U =
        (i == null ? void 0 : i.description) &&
        s.jsx("meta", {
          name: "template:description",
          content: i.description,
        })),
      (e[42] = i),
      (e[43] = U))
    : (U = e[43]);
  let Z;
  e[44] !== i
    ? ((Z =
        ((Pe = i == null ? void 0 : i.seoSettings) == null
          ? void 0
          : Pe.favoriteIconUrl) &&
        s.jsx("link", { rel: "icon", href: i.seoSettings.favoriteIconUrl })),
      (e[44] = i),
      (e[45] = Z))
    : (Z = e[45]);
  let q;
  e[46] !== C ||
  e[47] !== O ||
  e[48] !== _ ||
  e[49] !== b ||
  e[50] !== L ||
  e[51] !== $ ||
  e[52] !== V ||
  e[53] !== A ||
  e[54] !== D ||
  e[55] !== H ||
  e[56] !== U ||
  e[57] !== Z ||
  e[58] !== k ||
  e[59] !== T ||
  e[60] !== P
    ? ((q = s.jsxs(J, {
        children: [k, T, P, C, O, _, M, b, N, L, $, V, A, D, H, U, Z],
      })),
      (e[46] = C),
      (e[47] = O),
      (e[48] = _),
      (e[49] = b),
      (e[50] = L),
      (e[51] = $),
      (e[52] = V),
      (e[53] = A),
      (e[54] = D),
      (e[55] = H),
      (e[56] = U),
      (e[57] = Z),
      (e[58] = k),
      (e[59] = T),
      (e[60] = P),
      (e[61] = q))
    : (q = e[61]);
  let W;
  e[62] !== i
    ? ((W =
        i != null && i.content
          ? ke.decompress(ke.decodeBase64(i.content))
          : void 0),
      (e[62] = i),
      (e[63] = W))
    : (W = e[63]);
  let Q;
  e[64] !== i
    ? ((Q =
        i != null && i.contentMobile
          ? ke.decompress(ke.decodeBase64(i.contentMobile))
          : void 0),
      (e[64] = i),
      (e[65] = Q))
    : (Q = e[65]);
  const re = i == null ? void 0 : i.effects,
    ae = i == null ? void 0 : i.audioSettings,
    ce = i == null ? void 0 : i.notificationSettings,
    de = i == null ? void 0 : i.customEffects,
    fe = i == null ? void 0 : i.customHtml,
    ue = i == null ? void 0 : i.fontMap;
  let oe;
  e[66] !== W ||
  e[67] !== Q ||
  e[68] !== re ||
  e[69] !== ae ||
  e[70] !== ce ||
  e[71] !== de ||
  e[72] !== fe ||
  e[73] !== ue ||
  e[74] !== I
    ? ((oe = s.jsx(kt, {
        id: I,
        content: W,
        mobileContent: Q,
        className: "view-page",
        effects: re,
        audioSettings: ae,
        notificationSettings: ce,
        customEffects: de,
        customHtmlSettings: fe,
        fontMap: ue,
      })),
      (e[66] = W),
      (e[67] = Q),
      (e[68] = re),
      (e[69] = ae),
      (e[70] = ce),
      (e[71] = de),
      (e[72] = fe),
      (e[73] = ue),
      (e[74] = I),
      (e[75] = oe))
    : (oe = e[75]);
  let xe;
  e[76] !== oe || e[77] !== I
    ? ((xe = s.jsx(ms, { templateId: I, children: oe })),
      (e[76] = oe),
      (e[77] = I),
      (e[78] = xe))
    : (xe = e[78]);
  let ie;
  e[79] !== i || e[80] !== xe
    ? ((ie = s.jsx(Tt, { templateData: i, children: xe })),
      (e[79] = i),
      (e[80] = xe),
      (e[81] = ie))
    : (ie = e[81]);
  let me;
  return (
    e[82] !== q || e[83] !== ie
      ? ((me = s.jsxs(s.Fragment, { children: [q, ie] })),
        (e[82] = q),
        (e[83] = ie),
        (e[84] = me))
      : (me = e[84]),
    me
  );
}
function Qt() {
  const e = R.c(21),
    t = Bt(),
    n = Rs();
  let a;
  e[0] !== n.pathname
    ? ((a =
        n.pathname === "/" ||
        n.pathname.startsWith("/template-lookup") ||
        (window.location.hostname !== "localhost" &&
          window.location.hostname !== "127.0.0.1")),
      (e[0] = n.pathname),
      (e[1] = a))
    : (a = e[1]);
  const o = a;
  let h;
  e[2] !== t
    ? ((h = () => {
        t(Be.PUBLIC.WEDDING);
      }),
      (e[2] = t),
      (e[3] = h))
    : (h = e[3]);
  const l = h;
  let g;
  e[4] !== t
    ? ((g = () => {
        t(-1);
      }),
      (e[4] = t),
      (e[5] = g))
    : (g = e[5]);
  const r = g;
  let m;
  e[6] === Symbol.for("react.memo_cache_sentinel")
    ? ((m = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "404 - Trang không tìm thấy | Thiệp Cưới Online",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Trang bạn đang tìm kiếm không tồn tại. Quay lại trang chủ để tạo thiệp cưới online miễn phí.",
          }),
        ],
      })),
      (e[6] = m))
    : (m = e[6]);
  let i;
  e[7] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = ["120px", "150px", "200px"]), (e[7] = i))
    : (i = e[7]);
  let c;
  e[8] === Symbol.for("react.memo_cache_sentinel")
    ? ((c = s.jsx(y, {
        children: s.jsx(j, {
          fontSize: i,
          fontWeight: "bold",
          color: "orange.400",
          lineHeight: "1",
          style: { fontFamily: '"Paytone One", sans-serif' },
          children: "404",
        }),
      })),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((d = ["24px", "32px", "40px"]), (e[9] = d))
    : (d = e[9]);
  let u;
  e[10] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = s.jsx(j, {
        fontSize: d,
        fontWeight: "bold",
        color: "gray.800",
        style: { fontFamily: '"Paytone One", sans-serif' },
        children: "Oops! Trang không tìm thấy",
      })),
      (e[10] = u))
    : (u = e[10]);
  let S;
  e[11] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = ["16px", "18px", "20px"]), (e[11] = S))
    : (S = e[11]);
  let w, f;
  e[12] === Symbol.for("react.memo_cache_sentinel")
    ? ((f = s.jsxs(K, {
        gap: 4,
        children: [
          u,
          s.jsx(j, {
            fontSize: S,
            color: "gray.600",
            maxW: "500px",
            style: { fontFamily: "Quicksand, sans-serif" },
            children:
              "Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.",
          }),
        ],
      })),
      (w = s.jsx(y, { fontSize: "80px", opacity: 0.7, children: "💒" })),
      (e[12] = w),
      (e[13] = f))
    : ((w = e[12]), (f = e[13]));
  let v;
  e[14] !== r || e[15] !== l || e[16] !== o || e[17] !== t
    ? ((v =
        !o &&
        s.jsxs(s.Fragment, {
          children: [
            s.jsxs(K, {
              gap: 4,
              children: [
                s.jsx(ee, {
                  size: "lg",
                  colorScheme: "orange",
                  onClick: l,
                  px: 8,
                  py: 6,
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "full",
                  _hover: { transform: "translateY(-2px)", boxShadow: "lg" },
                  transition: "all 0.2s",
                  children: "🏠 Về Trang Chủ",
                }),
                s.jsx(ee, {
                  size: "md",
                  variant: "outline",
                  colorScheme: "orange",
                  onClick: r,
                  px: 6,
                  py: 4,
                  fontSize: "16px",
                  borderRadius: "full",
                  _hover: { bg: "orange.50" },
                  children: "← Quay Lại",
                }),
              ],
            }),
            s.jsxs(y, {
              mt: 8,
              children: [
                s.jsx(j, {
                  fontSize: "16px",
                  color: "gray.500",
                  mb: 4,
                  style: { fontFamily: "Quicksand, sans-serif" },
                  children: "Hoặc bạn có thể:",
                }),
                s.jsxs(K, {
                  gap: 2,
                  children: [
                    s.jsx(ee, {
                      variant: "plain",
                      colorScheme: "orange",
                      fontSize: "16px",
                      onClick: () => t(Be.PUBLIC.WEDDING),
                      children: "Tạo thiệp cưới miễn phí",
                    }),
                    s.jsx(ee, {
                      variant: "plain",
                      colorScheme: "orange",
                      fontSize: "16px",
                      onClick: () => t(Be.PUBLIC.WEDDING + "#card-id"),
                      children: "Xem các mẫu thiệp cưới",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
      (e[14] = r),
      (e[15] = l),
      (e[16] = o),
      (e[17] = t),
      (e[18] = v))
    : (v = e[18]);
  let I;
  return (
    e[19] !== v
      ? ((I = s.jsxs(s.Fragment, {
          children: [
            m,
            s.jsx(Ee, {
              maxW: "6xl",
              className: "min-h-screen flex items-center justify-center",
              children: s.jsxs(K, {
                gap: 8,
                textAlign: "center",
                py: 20,
                children: [c, f, w, v],
              }),
            }),
          ],
        })),
        (e[19] = v),
        (e[20] = I))
      : (I = e[20]),
    I
  );
}
const Bl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Qt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hn = (e) => {
    const t = R.c(7);
    let n, a, o, h, l;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsx("path", {
          fill: "#0068FF",
          fillRule: "evenodd",
          d: "M22.782.166h4.417c6.066 0 9.611.891 12.758 2.578 3.147 1.687 5.63 4.152 7.299 7.299 1.687 3.147 2.578 6.692 2.578 12.758v4.398c0 6.066-.891 9.611-2.578 12.758-1.688 3.147-4.152 5.63-7.299 7.299-3.147 1.687-6.692 2.578-12.758 2.578h-4.398c-6.066 0-9.611-.89-12.758-2.578-3.147-1.687-5.63-4.152-7.299-7.299C1.057 36.81.166 33.265.166 27.2v-4.398c0-6.066.891-9.611 2.578-12.758 1.687-3.147 4.152-5.63 7.299-7.299C13.17 1.057 16.735.166 22.782.166Z",
          clipRule: "evenodd",
        })),
        (a = s.jsx("path", {
          fill: "#001A33",
          fillRule: "evenodd",
          d: "M49.834 26.474v.725c0 6.067-.891 9.612-2.579 12.759-1.687 3.147-4.151 5.63-7.298 7.298-3.147 1.687-6.692 2.578-12.758 2.578H22.8c-4.964 0-8.24-.596-10.99-1.737l-4.536-4.67 42.559-16.953Z",
          clipRule: "evenodd",
          opacity: 0.12,
        })),
        (o = s.jsx("path", {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M7.779 43.59c2.323.256 5.227-.406 7.29-1.408 8.954 4.95 22.95 4.713 31.423-.709a18.69 18.69 0 0 0 .92-1.537C49.107 36.778 50 33.22 50 27.132v-4.415c0-6.088-.894-9.646-2.587-12.804-1.674-3.159-4.167-5.632-7.325-7.325C36.929.894 33.37 0 27.283 0H22.85c-5.186 0-8.552.653-11.38 1.899-.155.138-.306.28-.455.422-8.298 8-8.928 25.338-1.892 34.757a.631.631 0 0 0 .026.042c1.084 1.599.038 4.395-1.598 6.032-.267.247-.172.4.228.437Z",
          clipRule: "evenodd",
        })),
        (h = s.jsx("path", {
          fill: "#0068FF",
          d: "M20.563 17h-9.725v2.085h6.749l-6.654 8.247c-.209.303-.36.587-.36 1.232v.53h9.175c.455 0 .834-.378.834-.833v-1.119h-7.09l6.256-7.848c.095-.114.265-.322.341-.417l.038-.057c.36-.53.436-.986.436-1.536V17ZM32.942 29.095h1.383V17H32.24v11.393a.7.7 0 0 0 .702.702ZM25.814 19.692a4.741 4.741 0 0 0-4.74 4.74 4.741 4.741 0 0 0 4.74 4.739 4.741 4.741 0 0 0 4.74-4.74c.018-2.615-2.105-4.739-4.74-4.739Zm0 7.526a2.791 2.791 0 0 1-2.787-2.786 2.791 2.791 0 0 1 2.787-2.787 2.791 2.791 0 0 1 2.787 2.787 2.78 2.78 0 0 1-2.787 2.786ZM40.487 19.616a4.781 4.781 0 0 0-4.778 4.777 4.781 4.781 0 0 0 4.778 4.778 4.782 4.782 0 0 0 4.777-4.778 4.782 4.782 0 0 0-4.777-4.777Zm0 7.602a2.8 2.8 0 0 1-2.806-2.806 2.8 2.8 0 0 1 2.806-2.805 2.8 2.8 0 0 1 2.805 2.805 2.8 2.8 0 0 1-2.805 2.806Z",
        })),
        (l = s.jsx("path", {
          fill: "#0068FF",
          d: "M29.456 29.094h1.119v-9.137h-1.953v8.322c0 .436.38.815.834.815Z",
        })),
        (t[0] = n),
        (t[1] = a),
        (t[2] = o),
        (t[3] = h),
        (t[4] = l))
      : ((n = t[0]), (a = t[1]), (o = t[2]), (h = t[3]), (l = t[4]));
    let g;
    return (
      t[5] !== e
        ? ((g = s.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 50 50",
            ...e,
            children: [n, a, o, h, l],
          })),
          (t[5] = e),
          (t[6] = g))
        : (g = t[6]),
      g
    );
  },
  js = "/assets/wedding-template-banner-CyIrGwGU.jpg",
  Un = (e) => {
    const t = R.c(20),
      { brandName: n, description: a } = e,
      o = Ut(),
      h = Qn,
      l = o ? "initial" : "cover";
    let g;
    t[0] !== l
      ? ((g = {
          backgroundImage: `url(${js})`,
          backgroundSize: l,
          backgroundOrigin: "content-box",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundPosition: window.innerWidth >= 640 ? "0% 35%" : "50% 30%",
        }),
        (t[0] = l),
        (t[1] = g))
      : (g = t[1]);
    let r;
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((r = s.jsx(y, {
          style: {
            backgroundColor: "rgb(0, 0, 0)",
            opacity: 0.7,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            pointerEvents: "none",
          },
        })),
        (t[2] = r))
      : (r = t[2]);
    let m;
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = { base: "column", md: "row" }), (t[3] = m))
      : (m = t[3]);
    let i;
    t[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((i = {
          fontSize: "28px",
          color: "rgb(251, 65, 65)",
          fontFamily: "Quicksand, sans-serif",
          fontWeight: "bold",
        }),
        (t[4] = i))
      : (i = t[4]);
    let c;
    t[5] !== n
      ? ((c = s.jsx(j, {
          className: "font-semibold text-lg",
          style: i,
          children: n,
        })),
        (t[5] = n),
        (t[6] = c))
      : (c = t[6]);
    let d;
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = s.jsx("p", {
          className:
            "text-white text-[32px] md:text-[56px] uppercase font-extrabold",
          style: { fontFamily: "Paytone One, sans-serif", lineHeight: 1.2 },
          children: "THIỆP CƯỚI ONLINE ĐẸP & CHUYÊN NGHIỆP",
        })),
        (t[7] = d))
      : (d = t[7]);
    let u;
    t[8] !== a
      ? ((u =
          a &&
          s.jsx(j, {
            className:
              "text-sm md:text-[24px] max-w-[85%] sm:max-w-[800px] text-center",
            style: {
              color: "#ffb5b5",
              fontFamily: "Quicksand, sans-serif",
              lineHeight: 1.6,
            },
            children: a,
          })),
        (t[8] = a),
        (t[9] = u))
      : (u = t[9]);
    let S;
    t[10] !== a
      ? ((S =
          !a &&
          s.jsxs(j, {
            className:
              "text-sm md:text-[24px] max-w-[85%] sm:max-w-[800px] text-center",
            style: {
              color: "#ffb5b5",
              fontFamily: "Quicksand, sans-serif",
              lineHeight: 1.6,
            },
            children: [
              "Tạo thiệp cưới online đẹp, tiện lợi và chuyên nghiệp. Gửi lời mời đến bạn bè, người thân chỉ bằng một cú click! ",
              s.jsx("span", { className: "text-red-500", children: "♥" }),
            ],
          })),
        (t[10] = a),
        (t[11] = S))
      : (S = t[11]);
    let w;
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((w = s.jsx(ee, {
          size: "lg",
          colorScheme: "red",
          className: "mt-4 font-bold",
          fontFamily: '"Quicksand", sans-serif',
          onClick: h,
          _hover: { transform: "translateY(-2px)", boxShadow: "xl" },
          transition: "all 0.2s",
          children: "Xem Mẫu Thiệp",
        })),
        (t[12] = w))
      : (w = t[12]);
    let f;
    t[13] !== c || t[14] !== u || t[15] !== S
      ? ((f = s.jsx(je, {
          mx: "auto",
          direction: m,
          align: "center",
          justify: "space-between",
          position: "relative",
          zIndex: 1,
          children: s.jsxs(y, {
            flex: 1,
            className:
              "md:min-w-[600px] min-w-[80%] text-center md:text-center flex justify-center flex-col items-center gap-6 px-5",
            children: [c, d, u, S, w],
          }),
        })),
        (t[13] = c),
        (t[14] = u),
        (t[15] = S),
        (t[16] = f))
      : (f = t[16]);
    let v;
    return (
      t[17] !== f || t[18] !== g
        ? ((v = s.jsx(y, {
            className: "mt-[60px] pb-10 relative",
            children: s.jsx(y, {
              children: s.jsxs(y, {
                className:
                  "relative h-[400px] sm:h-[600px] items-center justify-center text-center flex flex-col",
                py: 12,
                style: g,
                children: [r, f],
              }),
            }),
          })),
          (t[17] = f),
          (t[18] = g),
          (t[19] = v))
        : (v = t[19]),
      v
    );
  };
function Qn() {
  const e = document.getElementById("dealer-showcase-id");
  e && e.scrollIntoView({ behavior: "smooth" });
}
const Kn = (e) => {
    const t = R.c(50),
      { catalog: n, availableCategories: a } = e;
    let o;
    t[0] !== a
      ? ((o = a === void 0 ? [] : a), (t[0] = a), (t[1] = o))
      : (o = t[1]);
    const h = o,
      [l, g] = p.useState(""),
      [r, m] = p.useState("");
    let i, c, d, u, S, w, f, v, I, x;
    if (t[2] !== h || t[3] !== n || t[4] !== r || t[5] !== l) {
      let z;
      t[16] !== r || t[17] !== l
        ? ((z = ($) => {
            var D;
            const V = !l || $.category === l,
              A =
                !r ||
                $.page.title.toLowerCase().includes(r.toLowerCase()) ||
                ((D = $.description) == null
                  ? void 0
                  : D.toLowerCase().includes(r.toLowerCase()));
            return V && A;
          }),
          (t[16] = r),
          (t[17] = l),
          (t[18] = z))
        : (z = t[18]),
        (d = n.filter(z));
      const C = d.filter(qn),
        O = d.filter(Yn);
      (c = y),
        (I = "dealer-showcase-id"),
        (x = "py-16 bg-gray-50"),
        (i = Ee),
        (u = "6xl");
      let _;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsx(j, {
            className: "text-3xl md:text-5xl font-bold",
            style: {
              fontFamily: '"Paytone One", sans-serif',
              color: "rgb(251, 65, 65)",
            },
            children: "SHOWCASE THIỆP CƯỚI",
          })),
          (t[19] = _))
        : (_ = t[19]),
        t[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = s.jsxs(K, {
              gap: 4,
              mb: 10,
              textAlign: "center",
              children: [
                _,
                s.jsx(j, {
                  className: "text-lg md:text-xl max-w-3xl",
                  style: {
                    fontFamily: '"Quicksand", sans-serif',
                    color: "#666",
                  },
                  children:
                    "Khám phá những mẫu thiệp cưới đẹp mắt, được tạo ra bởi chúng tôi",
                }),
              ],
            })),
            (t[20] = S))
          : (S = t[20]);
      let M;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { base: "1fr", md: "2fr 1fr" }), (t[21] = M))
        : (M = t[21]);
      let E;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = ($) => m($.target.value)), (t[22] = E))
        : (E = t[22]);
      let b;
      t[23] !== r
        ? ((b = s.jsx(Gt, {
            placeholder: "Tìm kiếm thiệp cưới...",
            value: r,
            onChange: E,
            size: "lg",
            pl: 10,
            bg: "white",
            fontFamily: '"Quicksand", sans-serif',
          })),
          (t[23] = r),
          (t[24] = b))
        : (b = t[24]);
      let N;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s.jsx(rs, {
            style: {
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#999",
              fontSize: "20px",
            },
          })),
          (t[25] = N))
        : (N = t[25]);
      let F;
      t[26] !== b
        ? ((F = s.jsxs(y, { position: "relative", children: [b, N] })),
          (t[26] = b),
          (t[27] = F))
        : (F = t[27]);
      let L;
      t[28] !== h || t[29] !== n || t[30] !== l
        ? ((L =
            h.length > 0 &&
            s.jsxs(we, {
              gap: 2,
              flexWrap: "wrap",
              justify: { base: "start", md: "end" },
              children: [
                s.jsxs(Ce, {
                  size: "lg",
                  variant: l === "" ? "solid" : "outline",
                  colorScheme: "red",
                  className: "cursor-pointer px-4 py-2 text-sm",
                  onClick: () => g(""),
                  fontFamily: '"Quicksand", sans-serif',
                  children: ["Tất cả (", n.length, ")"],
                }),
                h.map(($) =>
                  s.jsxs(
                    Ce,
                    {
                      size: "lg",
                      variant: l === $ ? "solid" : "outline",
                      colorScheme: "red",
                      className: "cursor-pointer px-4 py-2 text-sm",
                      onClick: () => g($),
                      fontFamily: '"Quicksand", sans-serif',
                      children: [
                        $,
                        " (",
                        n.filter((V) => V.category === $).length,
                        ")",
                      ],
                    },
                    $
                  )
                ),
              ],
            })),
          (t[28] = h),
          (t[29] = n),
          (t[30] = l),
          (t[31] = L))
        : (L = t[31]),
        t[32] !== F || t[33] !== L
          ? ((w = s.jsx(y, {
              className: "mb-8",
              children: s.jsxs(ze, {
                templateColumns: M,
                gap: 4,
                alignItems: "center",
                children: [F, L],
              }),
            })),
            (t[32] = F),
            (t[33] = L),
            (t[34] = w))
          : (w = t[34]),
        (f =
          C.length > 0 &&
          s.jsxs(y, {
            mb: 12,
            children: [
              s.jsxs(we, {
                mb: 6,
                gap: 2,
                children: [
                  s.jsx(os, { size: 24, color: "rgb(251, 65, 65)" }),
                  s.jsx(j, {
                    className: "text-2xl font-bold",
                    style: {
                      fontFamily: '"Quicksand", sans-serif',
                      color: "rgb(251, 65, 65)",
                    },
                    children: "Nổi bật",
                  }),
                ],
              }),
              s.jsx(ze, {
                templateColumns: {
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 6,
                children: C.map(Zn),
              }),
            ],
          })),
        (v =
          O.length > 0 &&
          s.jsxs(y, {
            children: [
              C.length > 0 &&
                s.jsx(j, {
                  className: "text-xl font-semibold mb-6",
                  style: { fontFamily: '"Quicksand", sans-serif' },
                  children: "Tất cả thiệp cưới",
                }),
              s.jsx(ze, {
                templateColumns: {
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 6,
                children: O.map(Xn),
              }),
            ],
          })),
        (t[2] = h),
        (t[3] = n),
        (t[4] = r),
        (t[5] = l),
        (t[6] = i),
        (t[7] = c),
        (t[8] = d),
        (t[9] = u),
        (t[10] = S),
        (t[11] = w),
        (t[12] = f),
        (t[13] = v),
        (t[14] = I),
        (t[15] = x);
    } else
      (i = t[6]),
        (c = t[7]),
        (d = t[8]),
        (u = t[9]),
        (S = t[10]),
        (w = t[11]),
        (f = t[12]),
        (v = t[13]),
        (I = t[14]),
        (x = t[15]);
    let k;
    t[35] !== d.length
      ? ((k =
          d.length === 0 &&
          s.jsx(y, {
            className: "text-center py-20",
            children: s.jsx(j, {
              className: "text-xl text-gray-500",
              style: { fontFamily: '"Quicksand", sans-serif' },
              children: "Không tìm thấy thiệp cưới phù hợp",
            }),
          })),
        (t[35] = d.length),
        (t[36] = k))
      : (k = t[36]);
    let T;
    t[37] !== i ||
    t[38] !== k ||
    t[39] !== u ||
    t[40] !== S ||
    t[41] !== w ||
    t[42] !== f ||
    t[43] !== v
      ? ((T = s.jsxs(i, { maxW: u, children: [S, w, f, v, k] })),
        (t[37] = i),
        (t[38] = k),
        (t[39] = u),
        (t[40] = S),
        (t[41] = w),
        (t[42] = f),
        (t[43] = v),
        (t[44] = T))
      : (T = t[44]);
    let P;
    return (
      t[45] !== c || t[46] !== T || t[47] !== I || t[48] !== x
        ? ((P = s.jsx(c, { id: I, className: x, children: T })),
          (t[45] = c),
          (t[46] = T),
          (t[47] = I),
          (t[48] = x),
          (t[49] = P))
        : (P = t[49]),
      P
    );
  },
  ys = (e) => {
    const t = R.c(27),
      { item: n } = e,
      a = n.thumbnailUrl,
      o = `https://${n.page.domain}`;
    let h;
    t[0] !== a || t[1] !== n.page.title
      ? ((h = a
          ? s.jsx(tt, {
              src: a,
              alt: n.page.title,
              className:
                "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",
            })
          : s.jsx(y, {
              className:
                "w-full h-full flex items-center justify-center text-gray-400",
              children: s.jsx(j, {
                fontFamily: '"Quicksand", sans-serif',
                children: "No Preview",
              }),
            })),
        (t[0] = a),
        (t[1] = n.page.title),
        (t[2] = h))
      : (h = t[2]);
    let l;
    t[3] !== n.isFeatured
      ? ((l =
          n.isFeatured &&
          s.jsx(Ce, {
            position: "absolute",
            top: 3,
            right: 3,
            colorScheme: "yellow",
            className: "font-bold",
            fontSize: "sm",
            children: s.jsxs(we, {
              gap: 1,
              children: [s.jsx(os, {}), s.jsx(j, { children: "Nổi bật" })],
            }),
          })),
        (t[3] = n.isFeatured),
        (t[4] = l))
      : (l = t[4]);
    let g;
    t[5] !== h || t[6] !== l
      ? ((g = s.jsxs(y, {
          className: "relative h-64 bg-gray-100 overflow-hidden",
          children: [h, l],
        })),
        (t[5] = h),
        (t[6] = l),
        (t[7] = g))
      : (g = t[7]);
    let r;
    t[8] !== n.page.title
      ? ((r = s.jsx(j, {
          className: "font-bold text-lg line-clamp-2",
          fontFamily: '"Quicksand", sans-serif',
          children: n.page.title,
        })),
        (t[8] = n.page.title),
        (t[9] = r))
      : (r = t[9]);
    let m;
    t[10] !== n.description
      ? ((m =
          n.description &&
          s.jsx(j, {
            className: "text-sm text-gray-600 line-clamp-2",
            fontFamily: '"Quicksand", sans-serif',
            children: n.description,
          })),
        (t[10] = n.description),
        (t[11] = m))
      : (m = t[11]);
    let i;
    t[12] !== n.category
      ? ((i =
          n.category &&
          s.jsx(Ce, {
            colorScheme: "purple",
            size: "sm",
            width: "fit-content",
            children: n.category,
          })),
        (t[12] = n.category),
        (t[13] = i))
      : (i = t[13]);
    let c;
    t[14] !== n.tags
      ? ((c =
          n.tags &&
          n.tags.length > 0 &&
          s.jsxs(we, {
            gap: 1,
            flexWrap: "wrap",
            children: [
              n.tags.slice(0, 3).map(Jn),
              n.tags.length > 3 &&
                s.jsxs(Ce, { size: "sm", children: ["+", n.tags.length - 3] }),
            ],
          })),
        (t[14] = n.tags),
        (t[15] = c))
      : (c = t[15]);
    let d;
    t[16] !== r || t[17] !== m || t[18] !== i || t[19] !== c
      ? ((d = s.jsx(y, {
          p: 4,
          children: s.jsxs(K, {
            gap: 2,
            align: "stretch",
            children: [r, m, i, c],
          }),
        })),
        (t[16] = r),
        (t[17] = m),
        (t[18] = i),
        (t[19] = c),
        (t[20] = d))
      : (d = t[20]);
    let u;
    t[21] !== g || t[22] !== d
      ? ((u = s.jsxs(y, {
          className:
            "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-105",
          children: [g, d],
        })),
        (t[21] = g),
        (t[22] = d),
        (t[23] = u))
      : (u = t[23]);
    let S;
    return (
      t[24] !== o || t[25] !== u
        ? ((S = s.jsx("a", {
            href: o,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block group",
            children: u,
          })),
          (t[24] = o),
          (t[25] = u),
          (t[26] = S))
        : (S = t[26]),
      S
    );
  };
function qn(e) {
  return e.isFeatured;
}
function Yn(e) {
  return !e.isFeatured;
}
function Zn(e) {
  return s.jsx(ys, { item: e }, e.id);
}
function Xn(e) {
  return s.jsx(ys, { item: e }, e.id);
}
function Jn(e, t) {
  return s.jsx(Ce, { size: "sm", colorScheme: "blue", children: e }, t);
}
const Ss = (e) => {
  const t = R.c(48),
    {
      brandName: n,
      logoUrl: a,
      contactEmail: o,
      contactPhone: h,
      description: l,
    } = e;
  let g;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = { backgroundColor: "rgb(51, 51, 51)" }), (t[0] = g))
    : (g = t[0]);
  let r;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = { base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }),
      (t[1] = r))
    : (r = t[1]);
  let m;
  t[2] !== n || t[3] !== a
    ? ((m = a
        ? s.jsx("img", {
            src: a,
            alt: n,
            className: "w-[45px] h-[45px] object-contain",
          })
        : s.jsx(y, {
            className:
              "w-[45px] h-[45px] bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center",
            children: s.jsx(j, {
              className: "text-white font-bold text-xl",
              children: n.charAt(0).toUpperCase(),
            }),
          })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = m))
    : (m = t[4]);
  let i;
  t[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = {
        fontFamily: '"Dancing Script", cursive',
        fontWeight: "bold",
        lineHeight: 1.6,
        color: "rgb(251, 65, 65)",
        fontSize: "28px",
      }),
      (t[5] = i))
    : (i = t[5]);
  let c;
  t[6] !== n
    ? ((c = s.jsx(j, { style: i, children: n })), (t[6] = n), (t[7] = c))
    : (c = t[7]);
  let d;
  t[8] !== m || t[9] !== c
    ? ((d = s.jsxs(we, { gap: 3, children: [m, c] })),
      (t[8] = m),
      (t[9] = c),
      (t[10] = d))
    : (d = t[10]);
  let u;
  t[11] !== l
    ? ((u =
        l &&
        s.jsx(j, {
          className: "text-gray-300 text-sm",
          style: { fontFamily: '"Quicksand", sans-serif' },
          children: l,
        })),
      (t[11] = l),
      (t[12] = u))
    : (u = t[12]);
  let S;
  t[13] !== l
    ? ((S =
        !l &&
        s.jsx(j, {
          className: "text-gray-300 text-sm",
          style: { fontFamily: '"Quicksand", sans-serif' },
          children:
            "Chuyên cung cấp dịch vụ thiệp cưới online chuyên nghiệp, giúp bạn tạo ra những lời mời đẹp mắt và ấn tượng.",
        })),
      (t[13] = l),
      (t[14] = S))
    : (S = t[14]);
  let w;
  t[15] !== d || t[16] !== u || t[17] !== S
    ? ((w = s.jsxs(K, { align: "start", gap: 4, children: [d, u, S] })),
      (t[15] = d),
      (t[16] = u),
      (t[17] = S),
      (t[18] = w))
    : (w = t[18]);
  let f;
  t[19] === Symbol.for("react.memo_cache_sentinel")
    ? ((f = s.jsx(j, {
        className: "text-white font-bold text-lg",
        style: { fontFamily: '"Quicksand", sans-serif' },
        children: "Liên hệ",
      })),
      (t[19] = f))
    : (f = t[19]);
  let v;
  t[20] !== o
    ? ((v =
        o &&
        s.jsxs(we, {
          gap: 2,
          className: "text-gray-300",
          children: [
            s.jsx(Vs, { size: 18 }),
            s.jsx("a", {
              href: `mailto:${o}`,
              className: "hover:text-red-400 transition-colors",
              style: { fontFamily: '"Quicksand", sans-serif' },
              children: o,
            }),
          ],
        })),
      (t[20] = o),
      (t[21] = v))
    : (v = t[21]);
  let I;
  t[22] !== h
    ? ((I =
        h &&
        s.jsxs(we, {
          gap: 2,
          className: "text-gray-300",
          children: [
            s.jsx(Ds, { size: 18 }),
            s.jsx("a", {
              href: `tel:${h}`,
              className: "hover:text-red-400 transition-colors",
              style: { fontFamily: '"Quicksand", sans-serif' },
              children: h,
            }),
          ],
        })),
      (t[22] = h),
      (t[23] = I))
    : (I = t[23]);
  let x;
  t[24] !== o || t[25] !== h
    ? ((x =
        !o &&
        !h &&
        s.jsx(j, {
          className: "text-gray-400 text-sm",
          style: { fontFamily: '"Quicksand", sans-serif' },
          children: "Thông tin liên hệ đang được cập nhật",
        })),
      (t[24] = o),
      (t[25] = h),
      (t[26] = x))
    : (x = t[26]);
  let k;
  t[27] !== v || t[28] !== I || t[29] !== x
    ? ((k = s.jsxs(K, { align: "start", gap: 4, children: [f, v, I, x] })),
      (t[27] = v),
      (t[28] = I),
      (t[29] = x),
      (t[30] = k))
    : (k = t[30]);
  let T;
  t[31] === Symbol.for("react.memo_cache_sentinel")
    ? ((T = s.jsx(j, {
        className: "text-white font-bold text-lg",
        style: { fontFamily: '"Quicksand", sans-serif' },
        children: "Dịch vụ",
      })),
      (t[31] = T))
    : (T = t[31]);
  let P;
  t[32] === Symbol.for("react.memo_cache_sentinel")
    ? ((P = s.jsx("a", {
        href: "#dealer-showcase-id",
        className: "text-gray-300 hover:text-red-400 transition-colors text-sm",
        style: { fontFamily: '"Quicksand", sans-serif' },
        onClick: ei,
        children: "Xem Showcase",
      })),
      (t[32] = P))
    : (P = t[32]);
  let z;
  t[33] === Symbol.for("react.memo_cache_sentinel")
    ? ((z = s.jsx("a", {
        href: "/pricing",
        className: "text-gray-300 hover:text-red-400 transition-colors text-sm",
        style: { fontFamily: '"Quicksand", sans-serif' },
        children: "Bảng giá",
      })),
      (t[33] = z))
    : (z = t[33]);
  let C;
  t[34] === Symbol.for("react.memo_cache_sentinel")
    ? ((C = s.jsxs(K, {
        align: "start",
        gap: 4,
        children: [
          T,
          s.jsxs(K, {
            align: "start",
            gap: 2,
            children: [
              P,
              z,
              s.jsx("a", {
                href: "#dealer-contact-id",
                className:
                  "text-gray-300 hover:text-red-400 transition-colors text-sm",
                style: { fontFamily: '"Quicksand", sans-serif' },
                onClick: ti,
                children: "Liên hệ",
              }),
            ],
          }),
        ],
      })),
      (t[34] = C))
    : (C = t[34]);
  let O;
  t[35] !== k || t[36] !== w
    ? ((O = s.jsxs(ze, { templateColumns: r, gap: 8, children: [w, k, C] })),
      (t[35] = k),
      (t[36] = w),
      (t[37] = O))
    : (O = t[37]);
  let _;
  t[38] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = { fontFamily: '"Quicksand", sans-serif' }), (t[38] = _))
    : (_ = t[38]);
  let M;
  t[39] === Symbol.for("react.memo_cache_sentinel")
    ? ((M = new Date().getFullYear()), (t[39] = M))
    : (M = t[39]);
  let E;
  t[40] !== n
    ? ((E = s.jsxs(j, {
        className: "text-center text-gray-400 text-sm",
        style: _,
        children: ["Copyright © ", M, " ", n, ". All rights reserved."],
      })),
      (t[40] = n),
      (t[41] = E))
    : (E = t[41]);
  let b;
  t[42] === Symbol.for("react.memo_cache_sentinel")
    ? ((b = s.jsx(j, {
        className: "text-center text-gray-500 text-xs mt-2",
        style: { fontFamily: '"Quicksand", sans-serif' },
        children: "Powered by meWedding Platform",
      })),
      (t[42] = b))
    : (b = t[42]);
  let N;
  t[43] !== E
    ? ((N = s.jsxs(y, {
        className: "border-t border-gray-600 mt-8 pt-6",
        children: [E, b],
      })),
      (t[43] = E),
      (t[44] = N))
    : (N = t[44]);
  let F;
  return (
    t[45] !== O || t[46] !== N
      ? ((F = s.jsx(y, {
          id: "dealer-contact-id",
          style: g,
          className: "py-12",
          children: s.jsxs(Ee, { maxW: "6xl", children: [O, N] }),
        })),
        (t[45] = O),
        (t[46] = N),
        (t[47] = F))
      : (F = t[47]),
    F
  );
};
function ei(e) {
  var t;
  e.preventDefault(),
    (t = document.getElementById("dealer-showcase-id")) == null ||
      t.scrollIntoView({ behavior: "smooth" });
}
function ti(e) {
  var t;
  e.preventDefault(),
    (t = document.getElementById("dealer-contact-id")) == null ||
      t.scrollIntoView({ behavior: "smooth" });
}
const ws = (e) => {
  const t = R.c(20),
    { brandName: n, logoUrl: a, contactEmail: o, contactPhone: h } = e,
    l = si,
    g = ni,
    r = ii;
  let m;
  t[0] !== n || t[1] !== a
    ? ((m = a
        ? s.jsx("img", {
            src: a,
            alt: n,
            className: "w-[45px] h-[45px] object-contain",
          })
        : s.jsx(y, {
            className:
              "w-[45px] h-[45px] bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center",
            children: s.jsx(j, {
              className: "text-white font-bold text-xl",
              children: n.charAt(0).toUpperCase(),
            }),
          })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = m))
    : (m = t[2]);
  let i;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = {
        fontFamily: '"Dancing Script", cursive',
        fontWeight: "bold",
        lineHeight: 1.6,
        color: "rgb(251, 65, 65)",
        fontSize: "28px",
      }),
      (t[3] = i))
    : (i = t[3]);
  let c;
  t[4] !== n
    ? ((c = s.jsx(j, { style: i, children: n })), (t[4] = n), (t[5] = c))
    : (c = t[5]);
  let d;
  t[6] !== m || t[7] !== c
    ? ((d = s.jsx(Ht, {
        to: "/",
        children: s.jsxs(y, {
          className: "flex items-center gap-3",
          children: [m, c],
        }),
      })),
      (t[6] = m),
      (t[7] = c),
      (t[8] = d))
    : (d = t[8]);
  let u, S, w;
  t[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = s.jsx(j, {
        onClick: l,
        fontWeight: "semibold",
        fontFamily: '"Quicksand", sans-serif',
        className:
          "hidden md:inline cursor-pointer hover:text-red-600 transition-colors",
        children: "Showcase",
      })),
      (S = s.jsx(j, {
        onClick: g,
        fontWeight: "semibold",
        fontFamily: '"Quicksand", sans-serif',
        className:
          "hidden md:inline cursor-pointer hover:text-red-600 transition-colors",
        children: "Bảng giá",
      })),
      (w = s.jsx(j, {
        onClick: r,
        fontWeight: "semibold",
        fontFamily: '"Quicksand", sans-serif',
        className:
          "hidden md:inline cursor-pointer hover:text-red-600 transition-colors",
        children: "Liên hệ",
      })),
      (t[9] = u),
      (t[10] = S),
      (t[11] = w))
    : ((u = t[9]), (S = t[10]), (w = t[11]));
  let f;
  t[12] !== o || t[13] !== h
    ? ((f =
        (o || h) &&
        s.jsx(ee, {
          size: "sm",
          colorScheme: "red",
          className: "hidden md:inline-flex",
          onClick: r,
          children: "Liên hệ ngay",
        })),
      (t[12] = o),
      (t[13] = h),
      (t[14] = f))
    : (f = t[14]);
  let v;
  t[15] !== f
    ? ((v = s.jsxs(y, {
        className: "flex justify-between items-center gap-6",
        children: [u, S, w, f],
      })),
      (t[15] = f),
      (t[16] = v))
    : (v = t[16]);
  let I;
  return (
    t[17] !== d || t[18] !== v
      ? ((I = s.jsx(y, {
          className: "fixed left-0 right-0 top-0 z-99999 bg-white shadow-sm",
          children: s.jsx(Ee, {
            maxW: "6xl",
            className: "h-[60px]",
            children: s.jsxs(y, {
              className: "flex justify-between items-center h-full",
              children: [d, v],
            }),
          }),
        })),
        (t[17] = d),
        (t[18] = v),
        (t[19] = I))
      : (I = t[19]),
    I
  );
};
function si() {
  const e = document.getElementById("dealer-showcase-id");
  e ? e.scrollIntoView({ behavior: "smooth" }) : (window.location.href = "/");
}
function ni() {
  window.location.pathname.includes("/pricing") ||
  window.location.pathname.includes("/bang-gia")
    ? window.scrollTo({ top: 0, behavior: "smooth" })
    : (window.location.href = "/pricing");
}
function ii() {
  const e = document.getElementById("dealer-contact-id");
  e && e.scrollIntoView({ behavior: "smooth" });
}
const Gl = () => {
    const [e, t] = p.useState(null),
      [n, a] = p.useState([]),
      [o, h] = p.useState([]),
      [l, g] = p.useState(!0),
      [r, m] = p.useState(null);
    return (
      p.useEffect(
        () => (
          (async () => {
            var c, d;
            try {
              g(!0);
              const u = window.location.hostname,
                S = await Nt.lookupAgentByDomain(u);
              if ((t(S), S.customCss)) {
                const f = document.createElement("style");
                (f.id = "dealer-custom-css"),
                  (f.textContent = S.customCss),
                  document.head.appendChild(f);
              }
              if (S.customFaviconUrl) {
                const f =
                  document.querySelector("link[rel*='icon']") ||
                  document.createElement("link");
                (f.type = "image/x-icon"),
                  (f.rel = "shortcut icon"),
                  (f.href = S.customFaviconUrl),
                  document.head.appendChild(f);
              }
              const w = await Nt.getPublicPageCatalog(S.agentUserId, {});
              a(w.items), h(w.availableCategories || []), g(!1);
            } catch (u) {
              m(
                ((d = (c = u.response) == null ? void 0 : c.data) == null
                  ? void 0
                  : d.message) || "Không thể tải thông tin đại lý"
              ),
                g(!1);
            }
          })(),
          () => {
            const c = document.getElementById("dealer-custom-css");
            c && c.remove();
          }
        ),
        []
      ),
      l
        ? s.jsx(Ee, {
            maxW: "6xl",
            py: 20,
            children: s.jsx(y, {
              className: "flex justify-center items-center h-64",
              children: s.jsx(lt, { size: "xl", color: "blue.500" }),
            }),
          })
        : r || !e
        ? s.jsx(Qt, {})
        : s.jsxs(s.Fragment, {
            children: [
              s.jsx(J, {
                children: s.jsx("title", {
                  children: e.brandName || "Thiệp Cưới Online",
                }),
              }),
              s.jsxs("div", {
                className: "h-[100vh] overflow-x-hidden",
                children: [
                  s.jsx(ws, {
                    brandName: e.brandName || "Thiệp Cưới",
                    logoUrl: e.logoUrl,
                    contactEmail: e.contactEmail,
                    contactPhone: e.contactPhone,
                  }),
                  s.jsx(Un, {
                    brandName: e.brandName || "Thiệp Cưới",
                    description: e.description,
                  }),
                  s.jsx(Kn, { catalog: n, availableCategories: o }),
                  s.jsx(Ss, {
                    brandName: e.brandName || "Thiệp Cưới",
                    logoUrl: e.logoUrl,
                    contactEmail: e.contactEmail,
                    contactPhone: e.contactPhone,
                    description: e.description,
                  }),
                ],
              }),
              s.jsx(Ue, {}),
            ],
          })
    );
  },
  Hl = () => {
    const [e, t] = p.useState(null),
      [n, a] = p.useState([]),
      [o, h] = p.useState(null),
      [l, g] = p.useState(!0),
      [r, m] = p.useState(null);
    p.useEffect(
      () => (
        (async () => {
          var d, u;
          try {
            g(!0);
            const S = window.location.hostname,
              w = await Nt.lookupAgentByDomain(S);
            if ((t(w), w.customCss)) {
              const v = document.createElement("style");
              (v.id = "dealer-custom-css"),
                (v.textContent = w.customCss),
                document.head.appendChild(v);
            }
            if (w.customFaviconUrl) {
              const v =
                document.querySelector("link[rel*='icon']") ||
                document.createElement("link");
              (v.type = "image/x-icon"),
                (v.rel = "shortcut icon"),
                (v.href = w.customFaviconUrl),
                document.head.appendChild(v);
            }
            const f = await Nt.getPublicPricingPage(w.agentUserId);
            f.showPricing &&
              f.customPricingPageContent &&
              (a(f.customPricingPageContent.packages || []),
              h(f.customPricingPageContent.header || null)),
              g(!1);
          } catch (S) {
            m(
              ((u = (d = S.response) == null ? void 0 : d.data) == null
                ? void 0
                : u.message) || "Không thể tải thông tin bảng giá"
            ),
              g(!1);
          }
        })(),
        () => {
          const d = document.getElementById("dealer-custom-css");
          d && d.remove();
        }
      ),
      []
    );
    const i = (c) => (c ? `${c.toLocaleString("vi-VN")}đ` : "Miễn phí");
    return l
      ? s.jsx(Ee, {
          maxW: "6xl",
          py: 20,
          children: s.jsx(y, {
            className: "flex justify-center items-center h-64",
            children: s.jsx(lt, { size: "xl", color: "blue.500" }),
          }),
        })
      : r || !e
      ? s.jsx(Qt, {})
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx(J, {
              children: s.jsxs("title", {
                children: [e.brandName || "Thiệp Cưới Online", " - Bảng Giá"],
              }),
            }),
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden bg-gray-50",
              children: [
                s.jsx(ws, {
                  brandName: e.brandName || "Thiệp Cưới",
                  logoUrl: e.logoUrl,
                  contactEmail: e.contactEmail,
                  contactPhone: e.contactPhone,
                }),
                s.jsx(y, {
                  className: "mt-[60px] bg-white shadow-md border-b py-12",
                  children: s.jsx(Ee, {
                    maxW: "6xl",
                    children: s.jsxs(K, {
                      gap: 4,
                      align: "center",
                      children: [
                        s.jsx(j, {
                          className:
                            "text-4xl md:text-5xl font-bold text-center",
                          style: {
                            fontFamily: '"Paytone One", sans-serif',
                            color: "rgb(251, 65, 65)",
                          },
                          children:
                            (o == null ? void 0 : o.title) ||
                            "BẢNG GIÁ DỊCH VỤ",
                        }),
                        (o == null ? void 0 : o.subtitle) &&
                          s.jsx(j, {
                            className:
                              "text-lg md:text-xl text-gray-600 text-center max-w-3xl",
                            style: { fontFamily: '"Quicksand", sans-serif' },
                            children: o.subtitle,
                          }),
                      ],
                    }),
                  }),
                }),
                s.jsx(Ee, {
                  maxW: "6xl",
                  py: 12,
                  children:
                    n.length > 0
                      ? s.jsx(ze, {
                          templateColumns: {
                            base: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                          },
                          gap: 8,
                          children: n.map((c, d) =>
                            s.jsxs(
                              y,
                              {
                                className:
                                  "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all",
                                style: {
                                  transform: c.highlighted
                                    ? "scale(1.05)"
                                    : "scale(1)",
                                  borderWidth: c.highlighted ? "3px" : "2px",
                                  borderColor: c.highlighted
                                    ? "#ECC94B"
                                    : "#E2E8F0",
                                },
                                children: [
                                  s.jsx(y, {
                                    className: "p-6 text-white text-center",
                                    style: {
                                      background: c.highlighted
                                        ? "linear-gradient(135deg, #ECC94B 0%, #D69E2E 100%)"
                                        : d % 2 === 0
                                        ? "linear-gradient(135deg, #4299E1 0%, #3182CE 100%)"
                                        : "linear-gradient(135deg, #9F7AEA 0%, #805AD5 100%)",
                                    },
                                    children: s.jsx(j, {
                                      className: "text-2xl font-bold",
                                      style: {
                                        fontFamily: '"Quicksand", sans-serif',
                                      },
                                      children: c.name,
                                    }),
                                  }),
                                  s.jsx(y, {
                                    className: "py-8 text-center bg-gray-50",
                                    children: s.jsx(j, {
                                      className:
                                        "text-5xl font-bold text-blue-600",
                                      style: {
                                        fontFamily: '"Quicksand", sans-serif',
                                      },
                                      children: i(c.price),
                                    }),
                                  }),
                                  s.jsx(y, {
                                    className: "p-6",
                                    children: s.jsx(K, {
                                      gap: 3,
                                      align: "stretch",
                                      children: c.features.map((u, S) =>
                                        s.jsxs(
                                          we,
                                          {
                                            gap: 3,
                                            align: "start",
                                            children: [
                                              s.jsx(y, {
                                                className: "mt-1",
                                                children: s.jsx(Bs, {
                                                  className:
                                                    "text-green-500 text-xl",
                                                }),
                                              }),
                                              s.jsx(j, {
                                                className:
                                                  "text-sm text-gray-700 flex-1",
                                                style: {
                                                  fontFamily:
                                                    '"Quicksand", sans-serif',
                                                },
                                                children: u,
                                              }),
                                            ],
                                          },
                                          S
                                        )
                                      ),
                                    }),
                                  }),
                                  s.jsx(y, {
                                    className: "p-6 pt-0",
                                    children: s.jsx(ee, {
                                      colorScheme: c.highlighted
                                        ? "yellow"
                                        : "blue",
                                      size: "lg",
                                      width: "full",
                                      className:
                                        "font-[Quicksand,sans-serif] font-bold",
                                      onClick: () => {
                                        const u =
                                          document.getElementById(
                                            "dealer-contact-id"
                                          );
                                        u &&
                                          u.scrollIntoView({
                                            behavior: "smooth",
                                          });
                                      },
                                      children: "Liên hệ ngay",
                                    }),
                                  }),
                                ],
                              },
                              d
                            )
                          ),
                        })
                      : s.jsxs(y, {
                          className:
                            "bg-white border border-gray-200 rounded-lg p-12 text-center",
                          children: [
                            s.jsx(j, {
                              className: "text-gray-600 text-lg mb-2",
                              style: { fontFamily: '"Quicksand", sans-serif' },
                              children: "Chưa có thông tin bảng giá",
                            }),
                            s.jsx(j, {
                              className: "text-gray-500 text-sm",
                              style: { fontFamily: '"Quicksand", sans-serif' },
                              children:
                                "Vui lòng liên hệ trực tiếp để được tư vấn",
                            }),
                          ],
                        }),
                }),
                s.jsx(Ss, {
                  brandName: e.brandName || "Thiệp Cưới",
                  logoUrl: e.logoUrl,
                  contactEmail: e.contactEmail,
                  contactPhone: e.contactPhone,
                  description: e.description,
                }),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        });
  },
  ge = {
    all: ["blogs"],
    admin: () => [...ge.all, "admin"],
    adminList: (e) => [...ge.admin(), "list", e],
    adminDetail: (e) => [...ge.admin(), "detail", e],
    statistics: () => [...ge.admin(), "statistics"],
    public: () => [...ge.all, "public"],
    publicList: (e) => [...ge.public(), "list", e],
    publicDetail: (e) => [...ge.public(), "detail", e],
    featured: (e) => [...ge.public(), "featured", e],
    latest: (e) => [...ge.public(), "latest", e],
  },
  Ul = () => {
    const e = R.c(2),
      t = He();
    let n;
    return (
      e[0] !== t
        ? ((n = {
            mutationFn: ci,
            onSuccess: () => {
              t.invalidateQueries({ queryKey: ge.admin() }),
                t.invalidateQueries({ queryKey: ge.statistics() });
            },
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]),
      st(n)
    );
  },
  Ql = () => {
    const e = R.c(2),
      t = He();
    let n;
    return (
      e[0] !== t
        ? ((n = {
            mutationFn: di,
            onSuccess: (a, o) => {
              const { id: h } = o;
              t.invalidateQueries({ queryKey: ge.admin() }),
                t.invalidateQueries({ queryKey: ge.adminDetail(h) }),
                t.invalidateQueries({ queryKey: ge.public() }),
                t.invalidateQueries({ queryKey: ge.statistics() });
            },
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]),
      st(n)
    );
  },
  Kl = () => {
    const e = R.c(2),
      t = He();
    let n;
    return (
      e[0] !== t
        ? ((n = {
            mutationFn: hi,
            onSuccess: () => {
              t.invalidateQueries({ queryKey: ge.admin() }),
                t.invalidateQueries({ queryKey: ge.public() }),
                t.invalidateQueries({ queryKey: ge.statistics() });
            },
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]),
      st(n)
    );
  },
  ql = (e) => {
    const t = R.c(9);
    let n;
    t[0] !== e
      ? ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n))
      : (n = t[1]);
    const a = n;
    let o;
    t[2] !== a ? ((o = ge.adminList(a)), (t[2] = a), (t[3] = o)) : (o = t[3]);
    let h;
    t[4] !== a
      ? ((h = async () => {
          const g = new URLSearchParams();
          return (
            Object.entries(a).forEach((m) => {
              const [i, c] = m;
              c != null && c !== "" && g.append(i, c.toString());
            }),
            (await Fe.get(`/blogs/admin?${g.toString()}`)).data
          );
        }),
        (t[4] = a),
        (t[5] = h))
      : (h = t[5]);
    let l;
    return (
      t[6] !== o || t[7] !== h
        ? ((l = { queryKey: o, queryFn: h }),
          (t[6] = o),
          (t[7] = h),
          (t[8] = l))
        : (l = t[8]),
      Ge(l)
    );
  },
  li = (e) => {
    const t = R.c(9);
    let n;
    t[0] !== e
      ? ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n))
      : (n = t[1]);
    const a = n;
    let o;
    t[2] !== a ? ((o = ge.publicList(a)), (t[2] = a), (t[3] = o)) : (o = t[3]);
    let h;
    t[4] !== a
      ? ((h = async () => {
          const g = new URLSearchParams();
          return (
            Object.entries(a).forEach((m) => {
              const [i, c] = m;
              c != null && c !== "" && g.append(i, c.toString());
            }),
            (await Fe.get(`/blogs?${g.toString()}`)).data
          );
        }),
        (t[4] = a),
        (t[5] = h))
      : (h = t[5]);
    let l;
    return (
      t[6] !== o || t[7] !== h
        ? ((l = { queryKey: o, queryFn: h }),
          (t[6] = o),
          (t[7] = h),
          (t[8] = l))
        : (l = t[8]),
      Ge(l)
    );
  },
  oi = (e) => {
    const t = R.c(8);
    let n;
    t[0] !== e
      ? ((n = ge.publicDetail(e)), (t[0] = e), (t[1] = n))
      : (n = t[1]);
    let a;
    t[2] !== e
      ? ((a = async () => (await Fe.get(`/blogs/${e}`)).data),
        (t[2] = e),
        (t[3] = a))
      : (a = t[3]);
    const o = !!e;
    let h;
    return (
      t[4] !== n || t[5] !== a || t[6] !== o
        ? ((h = { queryKey: n, queryFn: a, enabled: o }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = o),
          (t[7] = h))
        : (h = t[7]),
      Ge(h)
    );
  },
  ri = (e) => {
    const t = R.c(7);
    let n;
    t[0] !== e ? ((n = ge.featured(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
    let a;
    t[2] !== e
      ? ((a = async () => {
          const h = `?limit=${e}`;
          return (await Fe.get(`/blogs/featured${h}`)).data;
        }),
        (t[2] = e),
        (t[3] = a))
      : (a = t[3]);
    let o;
    return (
      t[4] !== n || t[5] !== a
        ? ((o = { queryKey: n, queryFn: a }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = o))
        : (o = t[6]),
      Ge(o)
    );
  },
  ai = (e) => {
    const t = R.c(7);
    let n;
    t[0] !== e ? ((n = ge.latest(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
    let a;
    t[2] !== e
      ? ((a = async () => {
          const h = `?limit=${e}`;
          return (await Fe.get(`/blogs/latest${h}`)).data;
        }),
        (t[2] = e),
        (t[3] = a))
      : (a = t[3]);
    let o;
    return (
      t[4] !== n || t[5] !== a
        ? ((o = { queryKey: n, queryFn: a }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = o))
        : (o = t[6]),
      Ge(o)
    );
  };
async function ci(e) {
  return (await Fe.post("/blogs/admin", e)).data;
}
async function di(e) {
  const { id: t, data: n } = e;
  return (await Fe.patch(`/blogs/admin/${t}`, n)).data;
}
async function hi(e) {
  await Fe.delete(`/blogs/admin/${e}`);
}
const vs = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  mi = async (e) => {
    const t = await Fe.post("/billing/page-plan/orders", e, {
      headers: { "Idempotency-Key": vs() },
    });
    return t.data.data || t.data;
  },
  gi = async (e) => {
    const t = await Fe.post("/billing/feature-purchase/orders", e, {
      headers: { "Idempotency-Key": vs() },
    });
    return t.data.data || t.data;
  },
  fi = async (e) => {
    const t = await Fe.get(`/billing/orders/${e}`);
    return t.data.data || t.data;
  },
  ui = () => {
    const e = R.c(2),
      t = He();
    let n;
    return (
      e[0] !== t
        ? ((n = {
            mutationFn: mi,
            onSuccess: () => {
              t.invalidateQueries({ queryKey: ["currentSubscription"] }),
                t.invalidateQueries({ queryKey: ["plans"] });
            },
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]),
      st(n)
    );
  },
  xi = () => {
    const e = R.c(2),
      t = He();
    let n;
    return (
      e[0] !== t
        ? ((n = {
            mutationFn: gi,
            onSuccess: () => {
              t.invalidateQueries({ queryKey: ["user-features"] }),
                t.invalidateQueries({ queryKey: ["billing-features"] });
            },
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]),
      st(n)
    );
  },
  Cs = (e) => {
    const t = R.c(7);
    let n, a;
    t[0] !== e
      ? ((n = ["orderDetails", e]),
        (a = () => (e ? fi(e) : Promise.reject("No order ID"))),
        (t[0] = e),
        (t[1] = n),
        (t[2] = a))
      : ((n = t[1]), (a = t[2]));
    const o = !!e;
    let h;
    return (
      t[3] !== n || t[4] !== a || t[5] !== o
        ? ((h = { queryKey: n, queryFn: a, enabled: o, refetchInterval: bi }),
          (t[3] = n),
          (t[4] = a),
          (t[5] = o),
          (t[6] = h))
        : (h = t[6]),
      Ge(h)
    );
  },
  pi = (e) => {
    var t, n, a, o, h;
    return ((t = e == null ? void 0 : e.response) == null
      ? void 0
      : t.status) === 404
      ? "Plan not found. Please refresh and try again."
      : ((n = e == null ? void 0 : e.response) == null ? void 0 : n.status) ===
        400
      ? "Invalid request. Please check your input."
      : ((a = e == null ? void 0 : e.response) == null ? void 0 : a.status) ===
        409
      ? "Duplicate order detected. Please check your existing orders."
      : ((o = e == null ? void 0 : e.response) == null ? void 0 : o.status) ===
        401
      ? "Authentication required. Please log in again."
      : ((h = e == null ? void 0 : e.response) == null ? void 0 : h.status) ===
        403
      ? "Permission denied. Please check your account status."
      : (e == null ? void 0 : e.message) ||
        "An unexpected error occurred. Please try again.";
  },
  Yl = (e) => {
    const t = R.c(4);
    let n;
    t[0] !== e
      ? ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n))
      : (n = t[1]);
    const a = n;
    let o;
    return (
      t[2] !== a
        ? ((o = {
            queryKey: ["admin-orders", a],
            queryFn: async () => {
              const h = new URLSearchParams();
              return (
                Object.entries(a).forEach((g) => {
                  const [r, m] = g;
                  m != null && h.append(r, m.toString());
                }),
                (await Fe.get(`/orders/admin?${h.toString()}`)).data.data
              );
            },
          }),
          (t[2] = a),
          (t[3] = o))
        : (o = t[3]),
      Ge(o)
    );
  },
  Zl = () => {
    const e = R.c(2),
      t = He();
    let n;
    return (
      e[0] !== t
        ? ((n = {
            mutationFn: ji,
            onSuccess: () => {
              t.invalidateQueries({ queryKey: ["admin-orders"] });
            },
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]),
      st(n)
    );
  };
function bi(e) {
  const t = e.state.data;
  return (t == null ? void 0 : t.status) === "paid" ||
    (t == null ? void 0 : t.status) === "failed" ||
    (t == null ? void 0 : t.status) === "canceled"
    ? !1
    : 2e3;
}
async function ji(e) {
  const { id: t, data: n } = e;
  return (await Fe.put(`/orders/admin/${t}`, n)).data;
}
const Ns = { currentSubscription: ["billing", "currentSubscription"] },
  yi = {
    getCurrentSubscription: async () => {
      const e = await Fe.get("/pages/subscription");
      return e.data.data.subscription || e.data.subscription;
    },
  },
  Si = () => {
    const e = R.c(1);
    let t;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            queryKey: Ns.currentSubscription,
            queryFn: yi.getCurrentSubscription,
            staleTime: 3e5,
          }),
          (e[0] = t))
        : (t = e[0]),
      Ge(t)
    );
  };
function wi() {
  const e = R.c(2);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = s.jsx(J, {
        children: s.jsx("title", {
          children: "MIỄN PHÍ | Tạo Thiệp Cưới Online",
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsxs(s.Fragment, {
          children: [
            t,
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden",
              children: [
                s.jsx(un, {}),
                s.jsx(xn, {}),
                s.jsx(pn, {}),
                s.jsx(bn, {}),
                s.jsx(jn, {}),
                s.jsx(yn, {}),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
const Xl = Object.freeze(
  Object.defineProperty({ __proto__: null, default: wi }, Symbol.toStringTag, {
    value: "Module",
  })
);
function vi() {
  const e = R.c(29);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = []), (e[0] = t))
    : (t = e[0]);
  const [n, a] = p.useState(t),
    [o, h] = p.useState(0),
    [l, g] = p.useState(!0),
    [r, m] = p.useState(0),
    [i, c] = p.useState(X.WEDDING),
    [d] = p.useState(),
    u = Math.floor(o / 20) + 1;
  let S;
  e[1] !== i || e[2] !== d || e[3] !== u
    ? ((S = { category: i, tag: d, isLogo: !0, limit: 20, page: u }),
      (e[1] = i),
      (e[2] = d),
      (e[3] = u),
      (e[4] = S))
    : (S = e[4]);
  const w = S,
    { data: f, isLoading: v, error: I } = Ie(w);
  let x;
  e[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = () => {
        h(0), a([]), g(!0), m(0);
      }),
      (e[5] = x))
    : (x = e[5]);
  let k;
  e[6] !== i || e[7] !== d
    ? ((k = [i, d]), (e[6] = i), (e[7] = d), (e[8] = k))
    : (k = e[8]),
    p.useEffect(x, k);
  let T, P;
  e[9] !== f || e[10] !== o
    ? ((T = () => {
        if (f) {
          const N = f.data || [];
          o === 0 ? (a(N), m(f.total || 0)) : a((F) => [...F, ...N]),
            g(f.hasNextPage || !1);
        }
      }),
      (P = [f, o, 20]),
      (e[9] = f),
      (e[10] = o),
      (e[11] = T),
      (e[12] = P))
    : ((T = e[11]), (P = e[12])),
    p.useEffect(T, P);
  let z;
  e[13] !== l || e[14] !== v
    ? ((z = () => {
        !v && l && h(Ci);
      }),
      (e[13] = l),
      (e[14] = v),
      (e[15] = z))
    : (z = e[15]);
  const C = z,
    O = $n[i];
  let _;
  e[16] !== i
    ? ((_ = s.jsx(Sn, { selectedCategory: i, onCategorySelect: c })),
      (e[16] = i),
      (e[17] = _))
    : (_ = e[17]);
  const M = v && o === 0;
  let E;
  e[18] !== n ||
  e[19] !== I ||
  e[20] !== C ||
  e[21] !== l ||
  e[22] !== M ||
  e[23] !== r
    ? ((E = s.jsx(fs, {
        logos: n,
        isLoading: M,
        error: I,
        emptyMessage: "Không có logo nào được tìm thấy",
        hasMore: l,
        onLoadMore: C,
        totalCount: r,
      })),
      (e[18] = n),
      (e[19] = I),
      (e[20] = C),
      (e[21] = l),
      (e[22] = M),
      (e[23] = r),
      (e[24] = E))
    : (E = e[24]);
  let b;
  return (
    e[25] !== E || e[26] !== O || e[27] !== _
      ? ((b = s.jsxs(us, {
          title: O,
          description:
            "Bộ sưu tập logo đẹp và sang trọng. Tạo logo độc đáo cho sự kiện của bạn.",
          children: [_, E],
        })),
        (e[25] = E),
        (e[26] = O),
        (e[27] = _),
        (e[28] = b))
      : (b = e[28]),
    b
  );
}
function Ci(e) {
  return e + 20;
}
const Jl = Object.freeze(
  Object.defineProperty({ __proto__: null, default: vi }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Ni() {
  const e = R.c(21);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = []), (e[0] = t))
    : (t = e[0]);
  const [n, a] = p.useState(t),
    [o, h] = p.useState(0),
    [l, g] = p.useState(!0),
    [r, m] = p.useState(0),
    [i] = p.useState(),
    c = Math.floor(o / 20) + 1;
  let d;
  e[1] !== i || e[2] !== c
    ? ((d = { category: X.WEDDING, tag: i, isLogo: !0, limit: 20, page: c }),
      (e[1] = i),
      (e[2] = c),
      (e[3] = d))
    : (d = e[3]);
  const u = d,
    { data: S, isLoading: w, error: f } = Ie(u);
  let v;
  e[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = () => {
        h(0), a([]), g(!0), m(0);
      }),
      (e[4] = v))
    : (v = e[4]);
  let I;
  e[5] !== i ? ((I = [i]), (e[5] = i), (e[6] = I)) : (I = e[6]),
    p.useEffect(v, I);
  let x, k;
  e[7] !== S || e[8] !== o
    ? ((x = () => {
        if (S) {
          const O = S.data || [];
          o === 0 ? (a(O), m(S.total || 0)) : a((_) => [..._, ...O]),
            g(S.hasNextPage || !1);
        }
      }),
      (k = [S, o, 20]),
      (e[7] = S),
      (e[8] = o),
      (e[9] = x),
      (e[10] = k))
    : ((x = e[9]), (k = e[10])),
    p.useEffect(x, k);
  let T;
  e[11] !== l || e[12] !== w
    ? ((T = () => {
        !w && l && h(_i);
      }),
      (e[11] = l),
      (e[12] = w),
      (e[13] = T))
    : (T = e[13]);
  const P = T,
    z = w && o === 0;
  let C;
  return (
    e[14] !== n ||
    e[15] !== f ||
    e[16] !== P ||
    e[17] !== l ||
    e[18] !== z ||
    e[19] !== r
      ? ((C = s.jsx(us, {
          title: "Logo Cưới",
          description:
            "Bộ sưu tập logo đẹp và sang trọng. Tạo logo độc đáo cho sự kiện của bạn.",
          children: s.jsx(fs, {
            logos: n,
            isLoading: z,
            error: f,
            emptyMessage: "Không có logo nào được tìm thấy",
            hasMore: l,
            onLoadMore: P,
            totalCount: r,
          }),
        })),
        (e[14] = n),
        (e[15] = f),
        (e[16] = P),
        (e[17] = l),
        (e[18] = z),
        (e[19] = r),
        (e[20] = C))
      : (C = e[20]),
    C
  );
}
function _i(e) {
  return e + 20;
}
const eo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ni },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ti = () => {
    const e = R.c(59),
      { id: t } = _t(),
      n = Bt(),
      a = parseInt(t || "0"),
      { data: o, isLoading: h, error: l } = oi(a),
      { data: g } = ai(3),
      r = ki;
    if (h) {
      let F, L;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s.jsx("div", { className: "h-8 bg-gray-200 rounded mb-4" })),
          (L = s.jsx("div", { className: "h-64 bg-gray-200 rounded mb-6" })),
          (e[0] = F),
          (e[1] = L))
        : ((F = e[0]), (L = e[1]));
      let $;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = s.jsx(y, {
              minH: "100vh",
              bg: "gray.50",
              py: 8,
              children: s.jsx(y, {
                maxW: "800px",
                mx: "auto",
                p: 6,
                children: s.jsxs("div", {
                  className: "animate-pulse",
                  children: [
                    F,
                    L,
                    s.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        s.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
                        s.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
                        s.jsx("div", {
                          className: "h-4 bg-gray-200 rounded w-3/4",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })),
            (e[2] = $))
          : ($ = e[2]),
        $
      );
    }
    if (l || !o) {
      let F, L;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s.jsx(ot, {
            size: 48,
            className: "text-gray-300 mx-auto mb-4",
          })),
          (L = s.jsx(j, {
            fontSize: "xl",
            color: "gray.500",
            mb: 4,
            children: "Không tìm thấy câu chuyện",
          })),
          (e[3] = F),
          (e[4] = L))
        : ((F = e[3]), (L = e[4]));
      let $;
      e[5] !== n
        ? (($ = () => n("/manager/love-story")), (e[5] = n), (e[6] = $))
        : ($ = e[6]);
      let V;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s.jsx(Xt, { size: 16 })), (e[7] = V))
        : (V = e[7]);
      let A;
      return (
        e[8] !== $
          ? ((A = s.jsx(y, {
              minH: "100vh",
              bg: "gray.50",
              py: 8,
              children: s.jsxs(y, {
                maxW: "800px",
                mx: "auto",
                p: 6,
                textAlign: "center",
                children: [
                  F,
                  L,
                  s.jsxs(ee, {
                    colorScheme: "pink",
                    onClick: $,
                    className: "flex items-center gap-2",
                    children: [V, "Quay lại danh sách"],
                  }),
                ],
              }),
            })),
            (e[8] = $),
            (e[9] = A))
          : (A = e[9]),
        A
      );
    }
    let m;
    e[10] !== n
      ? ((m = () => n("/manager/love-story")), (e[10] = n), (e[11] = m))
      : (m = e[11]);
    let i;
    e[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((i = s.jsx(Xt, { size: 16 })), (e[12] = i))
      : (i = e[12]);
    let c;
    e[13] !== m
      ? ((c = s.jsx(y, {
          bg: "white",
          borderBottomWidth: "1px",
          py: 4,
          children: s.jsx(y, {
            maxW: "800px",
            mx: "auto",
            px: 6,
            children: s.jsxs(ee, {
              variant: "ghost",
              onClick: m,
              className: "flex items-center gap-2 mb-4",
              children: [i, "Quay lại"],
            }),
          }),
        })),
        (e[13] = m),
        (e[14] = c))
      : (c = e[14]);
    let d;
    e[15] !== o.mainImageUrl || e[16] !== o.title
      ? ((d =
          o.mainImageUrl &&
          s.jsx(tt, {
            src: o.mainImageUrl,
            alt: o.title,
            w: "full",
            h: "400px",
            objectFit: "cover",
          })),
        (e[15] = o.mainImageUrl),
        (e[16] = o.title),
        (e[17] = d))
      : (d = e[17]);
    let u;
    e[18] !== o.title
      ? ((u = s.jsx(j, {
          fontSize: "3xl",
          fontWeight: "bold",
          mb: 4,
          children: o.title,
        })),
        (e[18] = o.title),
        (e[19] = u))
      : (u = e[19]);
    let S;
    e[20] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = s.jsx(as, { size: 14 })), (e[20] = S))
      : (S = e[20]);
    let w;
    e[21] !== o.viewCount
      ? ((w = s.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            S,
            s.jsxs("span", { children: [o.viewCount, " lượt xem"] }),
          ],
        })),
        (e[21] = o.viewCount),
        (e[22] = w))
      : (w = e[22]);
    let f;
    e[23] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = s.jsx(cs, { size: 14 })), (e[23] = f))
      : (f = e[23]);
    const v = o.publishedAt || o.createdAt;
    let I;
    e[24] !== v ? ((I = r(v)), (e[24] = v), (e[25] = I)) : (I = e[25]);
    let x;
    e[26] !== I
      ? ((x = s.jsxs("div", {
          className: "flex items-center gap-1",
          children: [f, s.jsx("span", { children: I })],
        })),
        (e[26] = I),
        (e[27] = x))
      : (x = e[27]);
    let k;
    e[28] !== x || e[29] !== w
      ? ((k = s.jsxs("div", {
          className: "flex items-center gap-4",
          children: [w, x],
        })),
        (e[28] = x),
        (e[29] = w),
        (e[30] = k))
      : (k = e[30]);
    let T;
    e[31] !== o.author
      ? ((T =
          o.author &&
          s.jsxs(j, {
            fontSize: "sm",
            color: "gray.600",
            children: ["Bởi ", o.author.firstName, " ", o.author.lastName],
          })),
        (e[31] = o.author),
        (e[32] = T))
      : (T = e[32]);
    let P;
    e[33] !== k || e[34] !== T
      ? ((P = s.jsxs(je, {
          justify: "space-between",
          align: "center",
          mb: 6,
          fontSize: "sm",
          color: "gray.500",
          children: [k, T],
        })),
        (e[33] = k),
        (e[34] = T),
        (e[35] = P))
      : (P = e[35]);
    let z;
    e[36] !== o.isFeatured
      ? ((z =
          o.isFeatured &&
          s.jsxs("div", {
            className:
              "inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6",
            children: [s.jsx(ot, { size: 14 }), "Câu chuyện nổi bật"],
          })),
        (e[36] = o.isFeatured),
        (e[37] = z))
      : (z = e[37]);
    let C;
    e[38] !== P || e[39] !== z || e[40] !== u
      ? ((C = s.jsxs(y, { p: 8, children: [u, P, z] })),
        (e[38] = P),
        (e[39] = z),
        (e[40] = u),
        (e[41] = C))
      : (C = e[41]);
    let O;
    e[42] !== C || e[43] !== d
      ? ((O = s.jsxs(y, {
          bg: "white",
          rounded: "lg",
          shadow: "md",
          overflow: "hidden",
          mb: 8,
          children: [d, C],
        })),
        (e[42] = C),
        (e[43] = d),
        (e[44] = O))
      : (O = e[44]);
    let _;
    e[45] !== o.stories
      ? ((_ = o.stories.map(Pi)), (e[45] = o.stories), (e[46] = _))
      : (_ = e[46]);
    let M;
    e[47] !== _
      ? ((M = s.jsx(y, {
          bg: "white",
          rounded: "lg",
          shadow: "md",
          p: 8,
          mb: 8,
          children: s.jsx("div", { className: "space-y-8", children: _ }),
        })),
        (e[47] = _),
        (e[48] = M))
      : (M = e[48]);
    let E;
    e[49] !== o.id || e[50] !== g
      ? ((E =
          g &&
          g.length > 0 &&
          s.jsxs(y, {
            bg: "white",
            rounded: "lg",
            shadow: "md",
            p: 8,
            children: [
              s.jsx(j, {
                fontSize: "xl",
                fontWeight: "bold",
                mb: 6,
                children: "Câu chuyện khác",
              }),
              s.jsx("div", {
                className: "space-y-4",
                children: g
                  .filter((F) => F.id !== o.id)
                  .slice(0, 3)
                  .map((F) =>
                    s.jsx(
                      Ht,
                      {
                        to: `/love-story/${F.id}`,
                        children: s.jsxs(je, {
                          gap: 4,
                          p: 4,
                          rounded: "md",
                          _hover: { bg: "gray.50" },
                          transition: "background-color 0.2s",
                          cursor: "pointer",
                          children: [
                            F.mainImageUrl
                              ? s.jsx(tt, {
                                  src: F.mainImageUrl,
                                  alt: F.title,
                                  w: "80px",
                                  h: "60px",
                                  objectFit: "cover",
                                  rounded: "md",
                                  flexShrink: 0,
                                })
                              : s.jsx("div", {
                                  className:
                                    "w-20 h-15 bg-gradient-to-br from-pink-100 to-purple-100 rounded-md flex items-center justify-center flex-shrink-0",
                                  children: s.jsx(ot, {
                                    size: 20,
                                    className: "text-pink-300",
                                  }),
                                }),
                            s.jsxs("div", {
                              className: "flex-1",
                              children: [
                                s.jsx(j, {
                                  fontWeight: "medium",
                                  className: "line-clamp-2",
                                  mb: 1,
                                  children: F.title,
                                }),
                                s.jsx(j, {
                                  fontSize: "sm",
                                  color: "gray.500",
                                  children: r(F.publishedAt || F.createdAt),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      F.id
                    )
                  ),
              }),
            ],
          })),
        (e[49] = o.id),
        (e[50] = g),
        (e[51] = E))
      : (E = e[51]);
    let b;
    e[52] !== O || e[53] !== M || e[54] !== E
      ? ((b = s.jsxs(y, {
          maxW: "800px",
          mx: "auto",
          p: 6,
          children: [O, M, E],
        })),
        (e[52] = O),
        (e[53] = M),
        (e[54] = E),
        (e[55] = b))
      : (b = e[55]);
    let N;
    return (
      e[56] !== c || e[57] !== b
        ? ((N = s.jsxs(y, { minH: "100vh", bg: "gray.50", children: [c, b] })),
          (e[56] = c),
          (e[57] = b),
          (e[58] = N))
        : (N = e[58]),
      N
    );
  };
function ki(e) {
  return new Date(e).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function Pi(e, t) {
  return s.jsxs(
    "div",
    {
      children: [
        t > 0 && s.jsx("hr", { className: "my-8 border-gray-200" }),
        s.jsx(j, {
          fontSize: "2xl",
          fontWeight: "semibold",
          mb: 4,
          color: "pink.600",
          children: e.title,
        }),
        s.jsx(j, {
          fontSize: "lg",
          lineHeight: "1.8",
          color: "gray.700",
          whiteSpace: "pre-wrap",
          children: e.description,
        }),
      ],
    },
    t
  );
}
const to = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ti },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ii = (e) => {
    const t = R.c(3);
    let n;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsxs("g", {
          transform: "translate(-15 -11.5)",
          children: [
            s.jsxs("linearGradient", {
              id: "a",
              x1: 512,
              x2: 512,
              y1: 11.5,
              y2: 1005.5,
              gradientUnits: "userSpaceOnUse",
              children: [
                s.jsx("stop", { offset: 0, stopColor: "#00b2ff" }),
                s.jsx("stop", { offset: 1, stopColor: "#006aff" }),
              ],
            }),
            s.jsx("path", {
              fill: "url(#a)",
              fillRule: "evenodd",
              d: "M512 11.5c-280 0-497 205.1-497 482.1 0 144.9 59.4 270.1 156.1 356.6 8.1 7.3 13 17.4 13.4 28.3l2.7 88.4c.9 28.2 30 46.5 55.8 35.2l98.6-43.5c8.4-3.7 17.7-4.4 26.5-2 45.3 12.5 93.6 19.1 143.9 19.1 280 0 497-205.1 497-482.1S792 11.5 512 11.5z",
              clipRule: "evenodd",
            }),
            s.jsx("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "m213.6 634.6 146-231.6c23.2-36.8 73-46 107.8-19.9l116.1 87.1c10.7 8 25.3 7.9 35.9-.1l156.8-119c20.9-15.9 48.3 9.2 34.2 31.4L664.5 614c-23.2 36.8-73 46-107.8 19.9l-116.1-87.1c-10.7-8-25.3-7.9-35.9.1L247.8 666c-20.9 15.9-48.3-9.2-34.2-31.4z",
              clipRule: "evenodd",
            }),
          ],
        })),
        (t[0] = n))
      : (n = t[0]);
    let a;
    return (
      t[1] !== e
        ? ((a = s.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 1200,
            height: 800,
            viewBox: "-149.1 -248.497 1292.2 1490.98",
            ...e,
            children: n,
          })),
          (t[1] = e),
          (t[2] = a))
        : (a = t[2]),
      a
    );
  },
  _s = () => ({
    showOrderCreated: () => {
      wt.create({
        title: "Đơn hàng đã được tạo",
        description: "Vui lòng thực hiện thanh toán để kích hoạt gói dịch vụ",
        type: "info",
        duration: 5e3,
      });
    },
    showPaymentSuccess: () => {
      wt.create({
        title: "Thanh toán thành công! 🎉",
        description: "Gói dịch vụ của bạn đã được kích hoạt",
        type: "success",
        duration: 5e3,
      });
    },
    showPaymentFailed: (o) => {
      wt.create({
        title: "Thanh toán không thành công",
        description: o || "Vui lòng thử lại hoặc liên hệ hỗ trợ",
        type: "error",
        duration: 7e3,
      });
    },
    showOrderError: (o) => {
      wt.create({
        title: "Lỗi tạo đơn hàng",
        description: o,
        type: "error",
        duration: 7e3,
      });
    },
  }),
  Fi = ({ isOpen: e, onClose: t, selectedPlan: n, onPaymentSuccess: a }) => {
    var E, b;
    const [o, h] = p.useState(""),
      [l, g] = p.useState(!1),
      [r, m] = p.useState(null),
      [i, c] = p.useState(null),
      [d, u] = p.useState(""),
      S = He(),
      w = ui(),
      { data: f, error: v } = Cs(i),
      I = _s(),
      x = rn(o, n != null && n.id ? Number(n.id) : void 0, l, 1e3);
    p.useEffect(() => {
      e && (h(""), g(!1), u(""), m(null), c(null));
    }, [e]),
      p.useEffect(() => {
        (f == null ? void 0 : f.status) === "paid"
          ? (S.invalidateQueries({ queryKey: Ns.currentSubscription }),
            S.invalidateQueries({ queryKey: ["plans"] }),
            I.showPaymentSuccess(),
            a == null || a())
          : (f == null ? void 0 : f.status) === "failed"
          ? I.showPaymentFailed()
          : (f == null ? void 0 : f.status) === "canceled" &&
            I.showPaymentFailed("Đơn hàng đã bị hủy");
      }, [f == null ? void 0 : f.status, S, a, I]);
    const k = (N) =>
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(N),
      T = () => {
        if (!n) return { totalCents: 0, discountCents: 0 };
        let N = n.priceCents;
        const F = (C == null ? void 0 : C.data) || null;
        return an(N, l ? n.designPriceCents ?? 0 : 0, F);
      },
      P = () => {
        h("");
      },
      z = async () => {
        var N;
        if (n)
          try {
            u("");
            const F = await w.mutateAsync({
              catalogId: Number(n.id),
              designRequested: l,
              couponCode:
                (N = C == null ? void 0 : C.data) != null && N.valid
                  ? o
                  : void 0,
              designBrief: l
                ? { note: "Design request from pricing modal" }
                : void 0,
            });
            m(F), c(F.orderId), I.showOrderCreated();
          } catch (F) {
            const L = pi(F);
            u(L), I.showOrderError(L);
          }
      },
      C = x.data,
      O = T(),
      _ = O.totalCents,
      M = O.discountCents;
    return n
      ? s.jsx(et, {
          isOpen: e,
          onClose: t,
          title: "Thanh toán đơn hàng",
          maxWidth: "400px",
          maxHeight: "80vh",
          children: s.jsxs(K, {
            gap: 4,
            align: "stretch",
            className: "w-full",
            children: [
              !r &&
                s.jsxs(y, {
                  className:
                    "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100",
                  children: [
                    s.jsx(j, {
                      fontSize: "md",
                      fontWeight: "bold",
                      mb: 2,
                      className: "text-center text-blue-800",
                      children: "Thông tin đơn hàng",
                    }),
                    s.jsx(K, {
                      align: "stretch",
                      gap: 2,
                      children: s.jsx(y, {
                        className: "bg-white rounded-lg p-3 shadow-sm",
                        children: s.jsxs(je, {
                          justify: "space-between",
                          align: "center",
                          direction: { base: "column", sm: "row" },
                          gap: 2,
                          children: [
                            s.jsxs(K, {
                              align: "start",
                              gap: 1,
                              className: "flex-1",
                              children: [
                                s.jsx(j, {
                                  fontWeight: "bold",
                                  fontSize: "md",
                                  className: "text-gray-800",
                                  children: n.name,
                                }),
                                n.description &&
                                  s.jsx(j, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: n.description,
                                  }),
                              ],
                            }),
                            s.jsx(y, {
                              className: "text-center sm:text-right",
                              children: s.jsx(j, {
                                fontSize: "lg",
                                fontWeight: "bold",
                                color: "blue.600",
                                children: k(n.priceCents),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              !r &&
                n &&
                s.jsxs(y, {
                  className:
                    "bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100",
                  children: [
                    s.jsx(j, {
                      fontSize: "md",
                      fontWeight: "bold",
                      mb: 2,
                      className: "text-center text-green-800",
                      children: "Mã giảm giá",
                    }),
                    !(C != null && C.data) || !C.data.valid
                      ? s.jsxs(K, {
                          gap: 3,
                          align: "stretch",
                          children: [
                            s.jsx(wn, {
                              label: "Nhập mã giảm giá",
                              children: s.jsxs(K, {
                                gap: 2,
                                children: [
                                  s.jsx(Gt, {
                                    placeholder: "Nhập mã giảm giá...",
                                    value: o,
                                    onChange: (N) =>
                                      h(N.target.value.toUpperCase()),
                                    disabled: x.isLoading,
                                    className: "w-full text-center font-medium",
                                    size: "md",
                                  }),
                                  x.isLoading &&
                                    s.jsx(j, {
                                      fontSize: "sm",
                                      color: "blue.500",
                                      className: "text-center font-medium",
                                      children: "Đang kiểm tra...",
                                    }),
                                ],
                              }),
                            }),
                            (C == null ? void 0 : C.data) &&
                              !C.data.valid &&
                              s.jsx(y, {
                                p: 4,
                                bg: "red-50 border border-red-200 rounded-lg",
                                children: s.jsxs(j, {
                                  fontSize: "sm",
                                  color: "red.600",
                                  className: "text-center font-medium",
                                  children: [
                                    "❌ ",
                                    C.data.message ||
                                      "Mã giảm giá không hợp lệ",
                                  ],
                                }),
                              }),
                          ],
                        })
                      : s.jsx(y, {
                          p: 3,
                          bg: "green-50 border border-green-200 rounded-lg",
                          children: s.jsxs(je, {
                            justify: "space-between",
                            align: "center",
                            direction: { base: "column", sm: "row" },
                            gap: 2,
                            children: [
                              s.jsxs(K, {
                                align: "start",
                                gap: 2,
                                className: "flex-1",
                                children: [
                                  s.jsxs(we, {
                                    className:
                                      "justify-center sm:justify-start",
                                    children: [
                                      s.jsx(Ce, {
                                        colorScheme: "green",
                                        className: "text-green-600",
                                        children: "✓",
                                      }),
                                      s.jsxs(j, {
                                        fontWeight: "bold",
                                        color: "green.800",
                                        className: "text-center sm:text-left",
                                        children: [
                                          'Mã "',
                                          o,
                                          '" đã được áp dụng',
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsxs(j, {
                                    fontSize: "md",
                                    color: "green.600",
                                    className:
                                      "text-center sm:text-left font-medium",
                                    children: [
                                      "💰 Giảm ",
                                      k(
                                        ((E = C == null ? void 0 : C.data) ==
                                        null
                                          ? void 0
                                          : E.discountCents) || 0
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx(ee, {
                                size: "sm",
                                variant: "outline",
                                colorScheme: "red",
                                onClick: P,
                                className: "w-full sm:w-auto",
                                children: "Xóa",
                              }),
                            ],
                          }),
                        }),
                    ((b = C == null ? void 0 : C.data) == null
                      ? void 0
                      : b.valid) &&
                      C.data.warnings &&
                      C.data.warnings.length > 0 &&
                      s.jsx(y, {
                        p: 3,
                        borderWidth: 1,
                        borderColor: "orange.200",
                        bg: "orange.50",
                        borderRadius: "md",
                        mt: 2,
                        children: s.jsxs(j, {
                          fontSize: "sm",
                          color: "orange.700",
                          children: ["⚠️ ", C.data.warnings.join(", ")],
                        }),
                      }),
                  ],
                }),
              "            ",
              !r &&
                s.jsxs(y, {
                  className:
                    "bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100",
                  children: [
                    s.jsx(j, {
                      fontSize: "md",
                      fontWeight: "bold",
                      mb: 2,
                      className: "text-center text-purple-800",
                      children: "Tùy chọn thêm",
                    }),
                    n.designPriceCents &&
                      s.jsx(y, {
                        className: "bg-white rounded-lg p-3 shadow-sm",
                        children: s.jsxs(we, {
                          align: "start",
                          gap: 3,
                          children: [
                            s.jsx(xs, {
                              checked: l,
                              onCheckedChange: (N) => {
                                const F =
                                  typeof N == "boolean"
                                    ? N
                                    : (N == null ? void 0 : N.checked) ?? !1;
                                g(!!F);
                              },
                              className: "mt-1",
                            }),
                            s.jsxs(K, {
                              align: "start",
                              gap: 1,
                              flex: 1,
                              children: [
                                s.jsx(j, {
                                  fontWeight: "bold",
                                  fontSize: "sm",
                                  className: "text-gray-800",
                                  children: "Thiết kế theo yêu cầu",
                                }),
                                s.jsx(j, {
                                  fontSize: "xs",
                                  color: "gray.600",
                                  className: "leading-relaxed",
                                  children:
                                    "Bao gồm thiết kế riêng theo yêu cầu của bạn",
                                }),
                                s.jsxs(j, {
                                  fontSize: "sm",
                                  fontWeight: "bold",
                                  color: "purple.600",
                                  children: [
                                    "+",
                                    k(n.designPriceCents - n.priceCents),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              !r &&
                s.jsxs(y, {
                  className:
                    "bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-100",
                  children: [
                    s.jsx(j, {
                      fontSize: "md",
                      fontWeight: "bold",
                      mb: 2,
                      className: "text-center text-orange-800",
                      children: "Tóm tắt đơn hàng",
                    }),
                    s.jsx(y, {
                      className: "bg-white rounded-lg p-3 shadow-sm",
                      children: s.jsxs(K, {
                        gap: 2,
                        align: "stretch",
                        children: [
                          s.jsxs(je, {
                            justify: "space-between",
                            align: "center",
                            className: "py-1 border-b border-gray-100",
                            children: [
                              s.jsx(j, {
                                fontSize: "sm",
                                className: "text-gray-600",
                                children: "Giá gốc:",
                              }),
                              s.jsx(j, {
                                fontSize: "sm",
                                fontWeight: "medium",
                                children: k(n.priceCents),
                              }),
                            ],
                          }),
                          l &&
                            n.designPriceCents &&
                            s.jsxs(je, {
                              justify: "space-between",
                              align: "center",
                              className: "py-1 border-b border-gray-100",
                              children: [
                                s.jsx(j, {
                                  fontSize: "sm",
                                  className: "text-gray-600",
                                  children: "Thiết kế theo yêu cầu:",
                                }),
                                s.jsxs(j, {
                                  fontSize: "sm",
                                  fontWeight: "medium",
                                  className: "text-purple-600",
                                  children: [
                                    "+",
                                    k(n.designPriceCents - n.priceCents),
                                  ],
                                }),
                              ],
                            }),
                          M > 0 &&
                            s.jsxs(je, {
                              justify: "space-between",
                              align: "center",
                              className: "py-1 border-b border-gray-100",
                              children: [
                                s.jsxs(j, {
                                  fontSize: "sm",
                                  className: "text-green-600 font-medium",
                                  children: ["Giảm giá (", o, "):"],
                                }),
                                s.jsxs(j, {
                                  fontSize: "sm",
                                  fontWeight: "bold",
                                  className: "text-green-600",
                                  children: ["-", k(M)],
                                }),
                              ],
                            }),
                          s.jsxs(je, {
                            justify: "space-between",
                            align: "center",
                            className: "py-2 bg-blue-50 rounded-lg px-3",
                            children: [
                              s.jsx(j, {
                                fontSize: "md",
                                fontWeight: "bold",
                                className: "text-gray-800",
                                children: "Tổng cộng:",
                              }),
                              s.jsx(j, {
                                fontSize: "lg",
                                fontWeight: "bold",
                                className: "text-blue-600",
                                children: k(_),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              r
                ? s.jsxs(K, {
                    gap: 4,
                    textAlign: "center",
                    children: [
                      f &&
                        s.jsx(y, {
                          p: 4,
                          borderRadius: "md",
                          borderWidth: 1,
                          bg:
                            f.status === "paid"
                              ? "green.50"
                              : f.status === "failed" || f.status === "canceled"
                              ? "red.50"
                              : "blue.50",
                          borderColor:
                            f.status === "paid"
                              ? "green.200"
                              : f.status === "failed" || f.status === "canceled"
                              ? "red.200"
                              : "blue.200",
                          w: "full",
                          maxW: "400px",
                          mx: "auto",
                          children: s.jsxs(K, {
                            gap: 2,
                            children: [
                              s.jsxs(Ce, {
                                size: "lg",
                                colorScheme:
                                  f.status === "paid"
                                    ? "green"
                                    : f.status === "failed" ||
                                      f.status === "canceled"
                                    ? "red"
                                    : "blue",
                                children: [
                                  f.status === "paid" && "Đã thanh toán",
                                  f.status === "requires_payment" &&
                                    "Chờ thanh toán",
                                  f.status === "created" && "Đã tạo đơn hàng",
                                  f.status === "failed" &&
                                    "Thanh toán thất bại",
                                  f.status === "canceled" && "Đã hủy",
                                ],
                              }),
                              s.jsx(j, {
                                fontSize: "sm",
                                color: "gray.600",
                                children: "Trạng thái đơn hàng",
                              }),
                            ],
                          }),
                        }),
                      (f == null ? void 0 : f.status) === "paid"
                        ? s.jsxs(K, {
                            gap: 3,
                            children: [
                              s.jsx(j, {
                                fontSize: "lg",
                                fontWeight: "bold",
                                color: "green.600",
                                children: "🎉 Thanh toán thành công!",
                              }),
                              s.jsx(j, {
                                color: "gray.600",
                                children:
                                  "Gói dịch vụ của bạn đã được kích hoạt",
                              }),
                            ],
                          })
                        : (f == null ? void 0 : f.status) === "failed" ||
                          (f == null ? void 0 : f.status) === "canceled"
                        ? s.jsxs(K, {
                            gap: 3,
                            children: [
                              s.jsx(j, {
                                fontSize: "lg",
                                fontWeight: "bold",
                                color: "red.600",
                                children: "❌ Thanh toán không thành công",
                              }),
                              s.jsx(j, {
                                color: "gray.600",
                                children:
                                  "Vui lòng thử lại hoặc liên hệ hỗ trợ",
                              }),
                            ],
                          })
                        : s.jsxs(K, {
                            gap: 4,
                            children: [
                              s.jsx(j, {
                                fontSize: "lg",
                                fontWeight: "bold",
                                children: "Quét mã QR để thanh toán",
                              }),
                              s.jsx(y, {
                                children: r.qrImgUrl
                                  ? s.jsx(tt, {
                                      src: r.qrImgUrl,
                                      alt: "QR Code Payment",
                                      maxW: "200px",
                                      borderRadius: "md",
                                      boxShadow: "md",
                                    })
                                  : s.jsx(y, {
                                      p: 8,
                                      bg: "gray.100",
                                      borderRadius: "md",
                                      children: s.jsx(j, {
                                        color: "gray.600",
                                        children: "Đang tạo mã QR...",
                                      }),
                                    }),
                              }),
                              r.bank &&
                                r.accountNumber &&
                                s.jsxs(K, {
                                  gap: 2,
                                  p: 4,
                                  bg: "gray.50",
                                  borderRadius: "md",
                                  w: "full",
                                  children: [
                                    s.jsx(j, {
                                      fontSize: "sm",
                                      fontWeight: "bold",
                                      children: "Thông tin chuyển khoản:",
                                    }),
                                    s.jsxs(j, {
                                      fontSize: "sm",
                                      children: ["Ngân hàng: ", r.bank],
                                    }),
                                    s.jsxs(j, {
                                      fontSize: "sm",
                                      children: [
                                        "Số tài khoản: ",
                                        r.accountNumber,
                                      ],
                                    }),
                                    r.transferDescription &&
                                      s.jsxs(j, {
                                        fontSize: "sm",
                                        children: [
                                          "Nội dung: ",
                                          r.transferDescription,
                                        ],
                                      }),
                                  ],
                                }),
                              s.jsxs(K, {
                                gap: 1,
                                children: [
                                  s.jsxs(j, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: ["Đơn hàng: #", r.orderId],
                                  }),
                                  s.jsxs(j, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: [
                                      "Tổng tiền: ",
                                      k(r.summary.total),
                                    ],
                                  }),
                                  s.jsx(j, {
                                    fontSize: "xs",
                                    color: "gray.500",
                                    children:
                                      "Hệ thống sẽ tự động cập nhật khi nhận được thanh toán",
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  })
                : s.jsxs(y, {
                    className:
                      "bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-100",
                    children: [
                      s.jsx(j, {
                        fontSize: "md",
                        fontWeight: "bold",
                        mb: 2,
                        className: "text-center text-red-800",
                        children: "Xác nhận đơn hàng",
                      }),
                      s.jsxs(K, {
                        gap: 3,
                        children: [
                          d &&
                            s.jsx(y, {
                              p: 3,
                              bg: "red-50 border border-red-200 rounded-lg w-full",
                              children: s.jsxs(j, {
                                fontSize: "sm",
                                color: "red.600",
                                className: "text-center font-medium",
                                children: ["❌ ", d],
                              }),
                            }),
                          s.jsx(ee, {
                            colorScheme: "red",
                            size: "md",
                            onClick: z,
                            loading: w.isPending,
                            disabled: w.isPending,
                            w: "full",
                            className: "w-full h-10 text-sm font-bold",
                            children: w.isPending
                              ? "Đang tạo đơn hàng..."
                              : "Tạo đơn hàng",
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          }),
        })
      : null;
  },
  zi = (e) => {
    const t = R.c(103),
      { isOpen: n, onClose: a, onFeaturePurchase: o } = e;
    let h;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((h = []), (t[0] = h))
      : (h = t[0]);
    const [l, g] = p.useState(h);
    let r;
    t[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((r = []), (t[1] = r))
      : (r = t[1]);
    const [m, i] = p.useState(r),
      [c, d] = p.useState(null),
      [u, S] = p.useState(null),
      [w, f] = p.useState(!1),
      v = He(),
      { data: I, isLoading: x } = cn(),
      k = xi(),
      { data: T } = Cs(c),
      P = _s();
    let z, C;
    t[2] !== I
      ? ((z = () => {
          if (I) {
            const te = I.map(Mi);
            i(te);
          }
        }),
        (C = [I]),
        (t[2] = I),
        (t[3] = z),
        (t[4] = C))
      : ((z = t[3]), (C = t[4])),
      p.useEffect(z, C);
    let O, _;
    t[5] !== n
      ? ((O = () => {
          n && (g([]), i(Ei), d(null), S(null), f(!1));
        }),
        (_ = [n]),
        (t[5] = n),
        (t[6] = O),
        (t[7] = _))
      : ((O = t[6]), (_ = t[7])),
      p.useEffect(O, _);
    let M;
    t[8] !== P ||
    t[9] !== a ||
    t[10] !== o ||
    t[11] !== (T == null ? void 0 : T.status) ||
    t[12] !== v ||
    t[13] !== l
      ? ((M = () => {
          (T == null ? void 0 : T.status) === "paid"
            ? (v.invalidateQueries({ queryKey: ["user-features"] }),
              v.invalidateQueries({ queryKey: ["billing-features"] }),
              P.showPaymentSuccess(),
              o == null || o(l),
              a())
            : (T == null ? void 0 : T.status) === "failed"
            ? (P.showPaymentFailed(), f(!1))
            : (T == null ? void 0 : T.status) === "canceled" &&
              (P.showPaymentFailed("Đơn hàng đã bị hủy"), f(!1));
        }),
        (t[8] = P),
        (t[9] = a),
        (t[10] = o),
        (t[11] = T == null ? void 0 : T.status),
        (t[12] = v),
        (t[13] = l),
        (t[14] = M))
      : (M = t[14]);
    const E = T == null ? void 0 : T.status;
    let b;
    t[15] !== P ||
    t[16] !== a ||
    t[17] !== o ||
    t[18] !== v ||
    t[19] !== l ||
    t[20] !== E
      ? ((b = [E, v, o, l, a, P]),
        (t[15] = P),
        (t[16] = a),
        (t[17] = o),
        (t[18] = v),
        (t[19] = l),
        (t[20] = E),
        (t[21] = b))
      : (b = t[21]),
      p.useEffect(M, b);
    let N;
    t[22] === Symbol.for("react.memo_cache_sentinel")
      ? ((N = (te) => {
          g((Se) =>
            Se.includes(te) ? Se.filter((be) => be !== te) : [...Se, te]
          ),
            i((Se) =>
              Se.map((be) =>
                be.key === te ? { ...be, isSelected: !be.isSelected } : be
              )
            );
        }),
        (t[22] = N))
      : (N = t[22]);
    const F = N;
    let L;
    t[23] !== k || t[24] !== P || t[25] !== l
      ? ((L = async () => {
          if (l.length !== 0)
            try {
              f(!0);
              const te = await k.mutateAsync({
                features: l.map(Li),
                metadata: { source: "web_app" },
              });
              d(te.orderId), S(te), P.showOrderCreated();
            } catch {
              P.showOrderError("Không thể tạo đơn hàng. Vui lòng thử lại."),
                f(!1);
            }
        }),
        (t[23] = k),
        (t[24] = P),
        (t[25] = l),
        (t[26] = L))
      : (L = t[26]);
    const $ = L,
      V = Wi;
    let A, D, H, U, Z, q, W, Q, re, ae, ce, de, fe;
    if (
      t[27] !== c ||
      t[28] !== m ||
      t[29] !== x ||
      t[30] !== n ||
      t[31] !== a ||
      t[32] !== l
    ) {
      fe = Symbol.for("react.early_return_sentinel");
      e: {
        let te;
        t[46] !== m
          ? ((te = (be, Te) => {
              const ve = m.find((_e) => _e.key === Te);
              return be + ((ve == null ? void 0 : ve.priceCents) || 0);
            }),
            (t[46] = m),
            (t[47] = te))
          : (te = t[47]);
        const Se = l.reduce(te, 0);
        if (t[48] !== m || t[49] !== x || t[50] !== n || t[51] !== a) {
          const be = m.filter($i),
            Te = m.filter(Ai);
          if (x) {
            let se;
            t[63] === Symbol.for("react.memo_cache_sentinel")
              ? ((se = s.jsx(y, {
                  textAlign: "center",
                  py: 8,
                  children: s.jsx(j, {
                    children: "Đang tải danh sách tính năng...",
                  }),
                })),
                (t[63] = se))
              : (se = t[63]);
            let Pe;
            t[64] !== n || t[65] !== a
              ? ((Pe = s.jsx(et, {
                  isOpen: n,
                  onClose: a,
                  title: "Mua lẻ các tính năng",
                  maxWidth: "600px",
                  maxHeight: "80vh",
                  children: se,
                })),
                (t[64] = n),
                (t[65] = a),
                (t[66] = Pe))
              : (Pe = t[66]),
              (fe = Pe);
            break e;
          }
          (D = et),
            (Q = n),
            (re = a),
            (ae = "Mua lẻ các tính năng"),
            (ce = "600px"),
            (de = "80vh"),
            (A = K),
            (H = 4),
            (U = "stretch");
          let ve;
          t[67] === Symbol.for("react.memo_cache_sentinel")
            ? ((ve = s.jsx(j, {
                fontSize: "lg",
                fontWeight: "bold",
                mb: 3,
                color: "blue.600",
                children: "Tính năng có thể mua",
              })),
              (t[67] = ve))
            : (ve = t[67]);
          const _e =
            be.length === 0
              ? s.jsx(y, {
                  p: 4,
                  bg: "gray.50",
                  borderRadius: "md",
                  textAlign: "center",
                  children: s.jsx(j, {
                    color: "gray.600",
                    children: "Bạn đã sở hữu tất cả các tính năng có sẵn!",
                  }),
                })
              : s.jsx(K, {
                  gap: 2,
                  align: "stretch",
                  children: be.map((se) =>
                    s.jsx(
                      y,
                      {
                        p: 3,
                        border: "1px solid",
                        borderColor: se.isSelected ? "blue.300" : "gray.200",
                        borderRadius: "md",
                        bg: se.isSelected ? "blue.50" : "white",
                        cursor: "pointer",
                        onClick: () => F(se.key),
                        _hover: { borderColor: "blue.300", bg: "blue.25" },
                        children: s.jsxs(we, {
                          justify: "space-between",
                          align: "start",
                          children: [
                            s.jsxs(we, {
                              gap: 3,
                              align: "start",
                              flex: 1,
                              children: [
                                s.jsx(xs, {
                                  checked: se.isSelected,
                                  onChange: () => F(se.key),
                                  className: "mt-1",
                                }),
                                s.jsxs(K, {
                                  align: "start",
                                  gap: 1,
                                  flex: 1,
                                  children: [
                                    s.jsx(j, {
                                      fontWeight: "medium",
                                      fontSize: "sm",
                                      children: se.description,
                                    }),
                                    s.jsxs(j, {
                                      fontSize: "xs",
                                      color: "gray.600",
                                      children: ["Key: ", se.key],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s.jsx(Ce, {
                              bg: "green.500",
                              color: "white",
                              px: 2,
                              py: 1,
                              borderRadius: "md",
                              fontSize: "xs",
                              fontWeight: "bold",
                              children: V(se.priceCents),
                            }),
                          ],
                        }),
                      },
                      se.key
                    )
                  ),
                });
          t[68] !== _e
            ? ((Z = s.jsxs(y, { children: [ve, _e] })),
              (t[68] = _e),
              (t[69] = Z))
            : (Z = t[69]),
            (q =
              Te.length > 0 &&
              s.jsxs(s.Fragment, {
                children: [
                  s.jsx(Ot, {}),
                  s.jsxs(y, {
                    children: [
                      s.jsx(j, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        mb: 3,
                        color: "green.600",
                        children: "Tính năng đã sở hữu",
                      }),
                      s.jsx(K, {
                        gap: 2,
                        align: "stretch",
                        children: Te.map(Ri),
                      }),
                    ],
                  }),
                ],
              })),
            (t[48] = m),
            (t[49] = x),
            (t[50] = n),
            (t[51] = a),
            (t[52] = A),
            (t[53] = D),
            (t[54] = H),
            (t[55] = U),
            (t[56] = Z),
            (t[57] = q),
            (t[58] = Q),
            (t[59] = re),
            (t[60] = ae),
            (t[61] = ce),
            (t[62] = de);
        } else
          (A = t[52]),
            (D = t[53]),
            (H = t[54]),
            (U = t[55]),
            (Z = t[56]),
            (q = t[57]),
            (Q = t[58]),
            (re = t[59]),
            (ae = t[60]),
            (ce = t[61]),
            (de = t[62]);
        W =
          l.length > 0 &&
          !c &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsx(Ot, {}),
              s.jsx(y, {
                p: 4,
                bg: "blue.50",
                borderRadius: "md",
                border: "1px solid",
                borderColor: "blue.200",
                children: s.jsxs(K, {
                  gap: 2,
                  align: "stretch",
                  children: [
                    s.jsxs(j, {
                      fontWeight: "bold",
                      fontSize: "md",
                      color: "blue.800",
                      children: ["Tổng cộng: ", V(Se)],
                    }),
                    s.jsxs(j, {
                      fontSize: "sm",
                      color: "blue.700",
                      children: ["Đã chọn ", l.length, " tính năng"],
                    }),
                  ],
                }),
              }),
            ],
          });
      }
      (t[27] = c),
        (t[28] = m),
        (t[29] = x),
        (t[30] = n),
        (t[31] = a),
        (t[32] = l),
        (t[33] = A),
        (t[34] = D),
        (t[35] = H),
        (t[36] = U),
        (t[37] = Z),
        (t[38] = q),
        (t[39] = W),
        (t[40] = Q),
        (t[41] = re),
        (t[42] = ae),
        (t[43] = ce),
        (t[44] = de),
        (t[45] = fe);
    } else
      (A = t[33]),
        (D = t[34]),
        (H = t[35]),
        (U = t[36]),
        (Z = t[37]),
        (q = t[38]),
        (W = t[39]),
        (Q = t[40]),
        (re = t[41]),
        (ae = t[42]),
        (ce = t[43]),
        (de = t[44]),
        (fe = t[45]);
    if (fe !== Symbol.for("react.early_return_sentinel")) return fe;
    let ue;
    t[70] !== c || t[71] !== u
      ? ((ue =
          c &&
          u &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsx(Ot, {}),
              s.jsx(y, {
                p: 4,
                bg: "green.50",
                borderRadius: "md",
                border: "1px solid",
                borderColor: "green.200",
                children: s.jsxs(K, {
                  gap: 3,
                  align: "stretch",
                  children: [
                    s.jsx(j, {
                      fontWeight: "bold",
                      fontSize: "md",
                      color: "green.800",
                      textAlign: "center",
                      children: "Thông tin thanh toán",
                    }),
                    u.qrImgUrl &&
                      s.jsxs(y, {
                        textAlign: "center",
                        children: [
                          s.jsx(j, {
                            fontSize: "sm",
                            color: "green.700",
                            mb: 2,
                            children: "Quét mã QR để thanh toán:",
                          }),
                          s.jsx(tt, {
                            src: u.qrImgUrl,
                            alt: "QR Code for payment",
                            maxW: "200px",
                            maxH: "200px",
                            mx: "auto",
                            border: "1px solid",
                            borderColor: "gray.200",
                            borderRadius: "md",
                          }),
                        ],
                      }),
                    u.bank &&
                      u.accountNumber &&
                      s.jsx(y, {
                        p: 3,
                        bg: "white",
                        borderRadius: "md",
                        border: "1px solid",
                        borderColor: "green.300",
                        children: s.jsxs(K, {
                          gap: 2,
                          align: "stretch",
                          children: [
                            s.jsx(j, {
                              fontSize: "sm",
                              fontWeight: "bold",
                              color: "green.800",
                              children: "Chuyển khoản ngân hàng:",
                            }),
                            s.jsxs(j, {
                              fontSize: "sm",
                              color: "green.700",
                              children: [
                                s.jsx("strong", { children: "Ngân hàng:" }),
                                " ",
                                u.bank,
                              ],
                            }),
                            s.jsxs(j, {
                              fontSize: "sm",
                              color: "green.700",
                              children: [
                                s.jsx("strong", { children: "Số tài khoản:" }),
                                " ",
                                u.accountNumber,
                              ],
                            }),
                            u.transferDescription &&
                              s.jsxs(j, {
                                fontSize: "sm",
                                color: "green.700",
                                children: [
                                  s.jsx("strong", { children: "Nội dung:" }),
                                  " ",
                                  u.transferDescription,
                                ],
                              }),
                            s.jsxs(j, {
                              fontSize: "sm",
                              color: "green.700",
                              children: [
                                s.jsx("strong", { children: "Số tiền:" }),
                                " ",
                                V(u.summary.total),
                              ],
                            }),
                          ],
                        }),
                      }),
                    s.jsx(j, {
                      fontSize: "xs",
                      color: "green.700",
                      textAlign: "center",
                      children:
                        "Vui lòng thanh toán để kích hoạt các tính năng đã chọn.",
                    }),
                  ],
                }),
              }),
            ],
          })),
        (t[70] = c),
        (t[71] = u),
        (t[72] = ue))
      : (ue = t[72]);
    let oe;
    t[73] !== w || t[74] !== a
      ? ((oe = s.jsx(ee, {
          variant: "outline",
          onClick: a,
          size: "sm",
          disabled: w,
          children: "Hủy",
        })),
        (t[73] = w),
        (t[74] = a),
        (t[75] = oe))
      : (oe = t[75]);
    const xe = l.length === 0 || w;
    let ie;
    t[76] === Symbol.for("react.memo_cache_sentinel")
      ? ((ie = { bg: "blue.600" }), (t[76] = ie))
      : (ie = t[76]);
    const me = w
      ? "Đang xử lý..."
      : `Mua ${l.length > 0 ? `(${l.length})` : ""}`;
    let le;
    t[77] !== $ || t[78] !== w || t[79] !== xe || t[80] !== me
      ? ((le = s.jsx(ee, {
          bg: "blue.500",
          color: "white",
          onClick: $,
          disabled: xe,
          size: "sm",
          _hover: ie,
          loading: w,
          children: me,
        })),
        (t[77] = $),
        (t[78] = w),
        (t[79] = xe),
        (t[80] = me),
        (t[81] = le))
      : (le = t[81]);
    let pe;
    t[82] !== oe || t[83] !== le
      ? ((pe = s.jsxs(je, {
          gap: 3,
          justify: "end",
          pt: 2,
          children: [oe, le],
        })),
        (t[82] = oe),
        (t[83] = le),
        (t[84] = pe))
      : (pe = t[84]);
    let Ne;
    t[85] === Symbol.for("react.memo_cache_sentinel")
      ? ((Ne = s.jsx(y, {
          p: 3,
          bg: "yellow.50",
          borderRadius: "md",
          border: "1px solid",
          borderColor: "yellow.200",
          children: s.jsxs(j, {
            fontSize: "xs",
            color: "yellow.800",
            textAlign: "center",
            children: [
              s.jsx("strong", { children: "Lưu ý:" }),
              " Sau khi thanh toán thành công, các tính năng sẽ được kích hoạt ngay lập tức cho tài khoản của bạn.",
            ],
          }),
        })),
        (t[85] = Ne))
      : (Ne = t[85]);
    let Y;
    t[86] !== A ||
    t[87] !== H ||
    t[88] !== U ||
    t[89] !== Z ||
    t[90] !== q ||
    t[91] !== W ||
    t[92] !== ue ||
    t[93] !== pe
      ? ((Y = s.jsxs(A, { gap: H, align: U, children: [Z, q, W, ue, pe, Ne] })),
        (t[86] = A),
        (t[87] = H),
        (t[88] = U),
        (t[89] = Z),
        (t[90] = q),
        (t[91] = W),
        (t[92] = ue),
        (t[93] = pe),
        (t[94] = Y))
      : (Y = t[94]);
    let ye;
    return (
      t[95] !== D ||
      t[96] !== Q ||
      t[97] !== re ||
      t[98] !== ae ||
      t[99] !== ce ||
      t[100] !== de ||
      t[101] !== Y
        ? ((ye = s.jsx(D, {
            isOpen: Q,
            onClose: re,
            title: ae,
            maxWidth: ce,
            maxHeight: de,
            children: Y,
          })),
          (t[95] = D),
          (t[96] = Q),
          (t[97] = re),
          (t[98] = ae),
          (t[99] = ce),
          (t[100] = de),
          (t[101] = Y),
          (t[102] = ye))
        : (ye = t[102]),
      ye
    );
  };
function Mi(e) {
  return { ...e, isSelected: !1 };
}
function Oi(e) {
  return { ...e, isSelected: !1 };
}
function Ei(e) {
  return e.map(Oi);
}
function Li(e) {
  return { featureKey: e, duration: "lifetime" };
}
function Wi(e) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(e);
}
function $i(e) {
  return !e.userHasFeature;
}
function Ai(e) {
  return e.userHasFeature;
}
function Ri(e) {
  return s.jsx(
    y,
    {
      p: 3,
      border: "1px solid",
      borderColor: "green.200",
      borderRadius: "md",
      bg: "green.50",
      children: s.jsxs(we, {
        justify: "space-between",
        align: "start",
        children: [
          s.jsxs(K, {
            align: "start",
            gap: 1,
            flex: 1,
            children: [
              s.jsx(j, {
                fontWeight: "medium",
                fontSize: "sm",
                children: e.description,
              }),
              s.jsxs(j, {
                fontSize: "xs",
                color: "gray.600",
                children: ["Key: ", e.key],
              }),
            ],
          }),
          s.jsx(Ce, {
            bg: "green.500",
            color: "white",
            px: 2,
            py: 1,
            borderRadius: "md",
            fontSize: "xs",
            fontWeight: "bold",
            children: "Đã sở hữu",
          }),
        ],
      }),
    },
    e.key
  );
}
const Vi = () => {
  const e = R.c(99),
    [t, n] = p.useState(!1),
    [a, o] = p.useState(!1),
    [h, l] = p.useState(!1),
    [g, r] = p.useState(!1),
    [m, i] = p.useState(null),
    [c, d] = p.useState(!1),
    [u, S] = p.useState(!1),
    { data: w } = dn(),
    { data: f } = Si(),
    v = ds(gs),
    I = Di;
  let x;
  e[0] !== (f == null ? void 0 : f.status) ||
  e[1] !== (f == null ? void 0 : f.tier)
    ? ((x = (Le) =>
        (f == null ? void 0 : f.tier) === Le &&
        (f == null ? void 0 : f.status) === "active"),
      (e[0] = f == null ? void 0 : f.status),
      (e[1] = f == null ? void 0 : f.tier),
      (e[2] = x))
    : (x = e[2]);
  const k = x;
  let T;
  e[3] !== f
    ? ((T = (Le) => {
        if (!f) return !0;
        const yt = { basic: 1, pro: 2, vip: 3 },
          Je = yt[f.tier] || 0;
        return (yt[Le] || 0) > Je;
      }),
      (e[3] = f),
      (e[4] = T))
    : (T = e[4]);
  const P = T;
  let z;
  e[5] !== v
    ? ((z = (Le) => {
        if (!hn(v)) {
          S(!0);
          return;
        }
        Le();
      }),
      (e[5] = v),
      (e[6] = z))
    : (z = e[6]);
  const C = z;
  let O;
  e[7] !== C
    ? ((O = (Le) => {
        C(() => {
          i(Le.fullPlan || Le), r(!0);
        });
      }),
      (e[7] = C),
      (e[8] = O))
    : (O = e[8]);
  const _ = O;
  let M;
  e[9] !== C
    ? ((M = () => {
        C(() => {
          d(!0);
        });
      }),
      (e[9] = C),
      (e[10] = M))
    : (M = e[10]);
  const E = M,
    b = Bi;
  let N, F, L, $, V, A, D, H;
  if (
    e[11] !== P ||
    e[12] !== (f == null ? void 0 : f.canCreateDesignRequest) ||
    e[13] !== _ ||
    e[14] !== k ||
    e[15] !== w
  ) {
    const Le = {
        basic: {
          name: "BASIC",
          subtitle: "TRẢI NGHIỆM TIÊU CHUẨN",
          color: "#1793d1",
          borderColor: "#1793d1",
          originalPrice: "298,000đ",
          customColor: "#8ab0c3",
          isPopular: !1,
          features: {
            support: !0,
            invite: !0,
            noTimeLimit: !0,
            basicFeatures: !0,
            duration: "6 Tháng",
          },
        },
        pro: {
          name: "PRO",
          subtitle: "TRẢI NGHIỆM NÂNG CAO",
          color: "#a8a8a8",
          borderColor: "#a8a8a8",
          customColor: "#a8a8a8",
          originalPrice: "498,000đ",
          isPopular: !1,
          features: {
            support: !0,
            invite: !0,
            noTimeLimit: !0,
            basicFeatures: !0,
            duration: "2 Năm",
          },
        },
        vip: {
          name: "VIP",
          subtitle: "TRẢI NGHIỆM VƯỢT TRỘI",
          color: "#e7bb06",
          borderColor: "red",
          customColor: "#b0993a",
          originalPrice: "990,000đ",
          isPopular: !0,
          features: {
            support: !0,
            invite: !0,
            noTimeLimit: !0,
            basicFeatures: !0,
            duration: "Trọn đời",
          },
        },
      },
      yt =
        (w == null
          ? void 0
          : w.map((G) => {
              const ne = Le[G.tier],
                Kt = k(G.tier),
                ks = P(G.tier),
                qt = (f == null ? void 0 : f.canCreateDesignRequest) ?? !1,
                Ps = Kt && qt,
                Is = G.priceCents;
              return {
                id: G.tier,
                apiId: G.id,
                name: (ne == null ? void 0 : ne.name) || G.tier.toUpperCase(),
                originalPrice: ne == null ? void 0 : ne.originalPrice,
                price: I(Is),
                priceCents: G.priceCents,
                designPriceCents: G.designPriceCents,
                designPrice: G.designPriceCents
                  ? I(G.designPriceCents)
                  : I(G.priceCents * 1.5),
                subtitle: (ne == null ? void 0 : ne.subtitle) || "",
                color: (ne == null ? void 0 : ne.color) || "#1793d1",
                borderColor: "#1793d1",
                customColor:
                  (ne == null ? void 0 : ne.customColor) || "#1793d1",
                isPopular: (ne == null ? void 0 : ne.isPopular) || !1,
                isCurrent: Kt,
                canUpgrade: ks,
                canCreateDesign: qt,
                shouldDisableButton: Ps,
                features: (ne == null ? void 0 : ne.features) || {},
                fullPlan: G,
              };
            })) || [];
    let Je;
    e[24] === Symbol.for("react.memo_cache_sentinel")
      ? ((Je = [
          "- Tải lên hát yêu thích : 30,000đ",
          "- Tải lên Hiệu ứng yêu thích : 30,000đ",
          "- Google Maps chỉ dẫn tự gia, sự kiện... : 30,000đ",
          "- Đếm ngược thời gian sự kiện cưới : 30,000đ",
          "- Thêm hình ảnh cưới, ảnh ăn hỏi : 50,000đ",
          "- Tải lên Video của Dâu Rể : 30,000đ",
          "- Video chibi, Animation (Chiếu ở sự kiện) : Từ 50,000đ",
          "- Video Slide ảnh (Chiếu ở sự kiện) : Từ 99,000đ",
          "- Tính năng quản lý và Gửi lời chúc mừng : 50,000đ",
          "- Tính năng quản lý và Xác nhận tham dự : 60,000đ",
          "- Thiệp Mời (Save The Date + Ghi tên khách) : 99,000đ Ghi tên khách mời ko giới hạn số lượng.",
          "- Thiệp Mời trong thiệp cưới (Nhờ trai + Nhà gái kèm ghi tên khách mời) : 99,000đ Ghi tên khách mời ko giới hạn số lượng.",
          "- Mua thêm 2 năm sử dụng thiệp : 40,000đ",
          "- Mua trọn đời thiệp : 90,000đ",
          "- Tách thiệp nhà trai nhà gái riêng nhau : 50,000đ",
        ]),
        (e[24] = Je))
      : (Je = e[24]),
      (F = Je);
    let it;
    e[25] === Symbol.for("react.memo_cache_sentinel")
      ? ((it = [
          "- Tải lên Bài hát yêu thích : 30,000đ",
          "- Tải lên Hiệu ứng yêu thích : 30,000đ",
          "- Thêm hình ảnh cưới, ảnh ăn hỏi : 40,000đ",
          "- Video chibi, Animation (Chiếu ở sự kiện) : 50,000đ",
          "- Video Slide ảnh cưới đôi gần 4 phút : 80,000đ",
          "- Thiệp Mời (Save The Date + Ghi tên khách) : 99,000đ Ghi tên khách mời không giới hạn số lượng.",
          "- Thiệp Mời trong thiệp cưới (Nhà trai + Nhà gái kèm ghi tên khách mời) : 99,000đ Ghi tên khách mời không giới hạn số lượng.",
          "- Mua thêm 3 năm sử dụng thiệp : 40,000đ",
          "- Mua trọn đời thiệp : 80,000đ",
          "- Tách thiệp nhà trai nhà gái riêng nhau : 50,000đ",
        ]),
        (e[25] = it))
      : (it = e[25]),
      ($ = it);
    let St;
    e[26] === Symbol.for("react.memo_cache_sentinel")
      ? ((St = [
          ["Hỗ trợ Thiết kế và cài đặt Thiệp cưới từ A-Z", !0, !0, !0],
          ["Hỗ trợ mọi lúc mọi nơi", !0, !0, !0],
          ["Chỉnh sửa không giới hạn", !0, !0, !0],
          [
            "Các tính năng cơ bản (Nhạc nền, hiệu ứng, thông tin cưới...)",
            !0,
            !0,
            !0,
          ],
          ["Thời gian công khai Thiệp cưới", "6 Tháng", "2 Năm", "Trọn đời"],
          ["Số lượng ảnh cưới", "20 ảnh", "50 ảnh", "Không giới hạn"],
          ["Thông tin về cô Dâu chú Rể", !0, !0, !0],
          ['Thông tin "Song Thân Phụ Mẫu", tư gia địa chỉ 2 nhà', !0, !0, !0],
          [
            'Thông tin các "Sự kiện cưới", thời gian, địa điểm, time line',
            !0,
            !0,
            !0,
          ],
          ["Hộp mừng cưới (Thông tin chuyển khoản, QR Code)", !0, !0, !0],
          [
            "Tạo mã QR cho thiệp cưới (in lên thiệp giấy, gửi cho bạn bè)",
            !0,
            !0,
            !0,
          ],
          ['Tính năng "Đếm ngược thời gian" đến Sự kiện cưới', !1, !0, !0],
          ["Google Maps chỉ dẫn đến tận nơi diễn ra sự kiện cưới", !1, !0, !0],
          ["Loại bỏ quảng cáo trên Website meWedding,...", !1, !0, !0],
          ["Tuỳ chỉnh màu sắc, Font chữ cho Thiệp cưới", !1, !0, !0],
          ["Tuỳ chỉnh hiệu ứng hiển thị tim, tuyết, hoa rơi", !1, !0, !0],
          ["Gửi lời chúc mừng cưới và quản lý lời chúc của bạn bè", !1, !0, !0],
          ["Tải lên Video", !1, !0, !0],
          [
            "Tuỳ chỉnh thay đổi, sắp xếp các mục, các thiết kế giữa các mẫu với nhau",
            !1,
            !0,
            !0,
          ],
          [
            "Tính năng Xác nhận tham dự và quản lý khách mời dự tiệc",
            !1,
            !0,
            !0,
          ],
          ['Sử dụng "Giao diện VIP" chỉ dành riêng gói VIP', !1, !1, !0],
          ["Loại bỏ Logo và thông tin meWedding trên Thiệp cưới", !1, !1, !0],
          ["Logo thiết kế riêng theo tên cô Dâu chú Rể", !1, !1, !0],
          ["Tuỳ chọn kiểu hiển thị Logo cho Thiệp cưới", !1, !1, !0],
          [
            "Thiệp mời báo cưới (Save the Date) + Ghi tên từng khách mời",
            !1,
            !1,
            !0,
          ],
          [
            "Thiệp mời hiển thị bên trong Thiệp chính, hiện tên khách mời",
            !1,
            !1,
            !0,
          ],
          ["Tải xuống danh sách lời chúc và khách mời", !1, !1, !0],
          ["Tải lên Font chữ yêu thích", !1, !1, !0],
          ["Tải lên bài hát yêu thích", !1, !1, !0],
          ["Tải lên hiệu ứng yêu thích", !1, !1, !0],
          ["Tích hợp tên miền riêng (Custom Domain)", !1, !1, !0],
          [
            "Tặng Video Chibi, Animation vui nhộn, có thể trình chiếu ở sự kiện cưới",
            !1,
            !1,
            !0,
          ],
        ]),
        (e[26] = St))
      : (St = e[26]),
      (L = St);
    const Ts = Gi;
    (N = Ee),
      (V = "6xl"),
      (A = "12"),
      e[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { base: 4, md: 6 }), (e[27] = D))
        : (D = e[27]),
      (H =
        !w || w.length === 0
          ? s.jsx(y, {
              textAlign: "center",
              py: 10,
              children: s.jsx(j, {
                children: "Đang tải thông tin gói dịch vụ...",
              }),
            })
          : s.jsx(ze, {
              templateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
              gap: 6,
              mb: 8,
              children: yt.map((G) =>
                s.jsx(
                  Gs,
                  {
                    children: s.jsx(y, {
                      border: "2px solid",
                      borderColor: G.isCurrent ? "green.500" : G.borderColor,
                      borderRadius: "lg",
                      py: 4,
                      px: 10,
                      position: "relative",
                      bg: G.isCurrent ? "green.50" : "white",
                      shadow: "md",
                      h: "full",
                      cursor: G.canUpgrade ? "pointer" : "default",
                      _hover: G.canUpgrade
                        ? { transform: "translateY(-2px)", shadow: "lg" }
                        : {},
                      onClick: () => G.canUpgrade && _(G),
                      opacity: G.canUpgrade ? 1 : 0.7,
                      children: s.jsxs(K, {
                        gap: 3,
                        align: "center",
                        children: [
                          G.isCurrent &&
                            s.jsx(Ce, {
                              position: "absolute",
                              top: "-10px",
                              right: "10px",
                              bg: "green.500",
                              color: "white",
                              px: 3,
                              py: 1,
                              borderRadius: "full",
                              fontSize: "xs",
                              fontWeight: "bold",
                              children: "ĐANG SỬ DỤNG",
                            }),
                          s.jsx(Ce, {
                            bg: G.color,
                            color: "white",
                            px: 6,
                            py: 3,
                            borderRadius: "full",
                            fontSize: "lg",
                            fontWeight: "bold",
                            children: G.name,
                          }),
                          s.jsxs(K, {
                            gap: 1,
                            align: "center",
                            children: [
                              s.jsxs(y, {
                                className: "flex gap-2 items-center",
                                children: [
                                  s.jsx(j, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    textDecoration: "line-through",
                                    children: G.originalPrice,
                                  }),
                                  s.jsx(j, {
                                    fontSize: "2xl",
                                    fontWeight: "bold",
                                    color: "#1793d1",
                                    children: G.price,
                                  }),
                                ],
                              }),
                              s.jsxs(y, {
                                className: "flex gap-2 items-center",
                                children: [
                                  "Giá thiết kế hộ:",
                                  " ",
                                  s.jsx(j, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: "red.500",
                                    children: G.designPrice,
                                  }),
                                ],
                              }),
                              s.jsx(j, {
                                fontSize: "lg",
                                color: "black",
                                textAlign: "center",
                                fontWeight: "bold",
                                children: G.subtitle,
                              }),
                            ],
                          }),
                          s.jsxs(y, {
                            className: "flex justify-between gap-4",
                            children: [
                              s.jsx(ee, {
                                onClick: Hi,
                                bg: "red.500",
                                color: "white",
                                borderRadius: "sm",
                                height: "35px",
                                fontWeight: "bold",
                                _hover: { bg: "red.600" },
                                children: "Xem mẫu thiệp",
                              }),
                              s.jsx(ee, {
                                onClick: (ne) => {
                                  ne.stopPropagation(), Ts();
                                },
                                variant: "outline",
                                bg: "white",
                                color: "red.500",
                                borderRadius: "sm",
                                fontWeight: "bold",
                                height: "35px",
                                borderColor: "red.400",
                                children: "Xem chi tiết",
                              }),
                            ],
                          }),
                          s.jsxs(ee, {
                            onClick: (ne) => {
                              ne.stopPropagation(),
                                G.id === "basic"
                                  ? n(!0)
                                  : G.id === "pro"
                                  ? o(!0)
                                  : G.id === "vip" && l(!0);
                            },
                            bg: G.customColor,
                            color: "white",
                            borderRadius: "sm",
                            height: "35px",
                            w: "full",
                            children: [
                              G.id === "basic" &&
                                "Mua lẻ các tính năng cho gói Basic",
                              G.id === "pro" &&
                                "Mua lẻ các tính năng cho gói PRO",
                              G.id === "vip" &&
                                "Thiết kế theo yêu cầu (Custom)",
                            ],
                          }),
                          s.jsx(ee, {
                            onClick: (ne) => {
                              ne.stopPropagation(),
                                G.shouldDisableButton || _(G);
                            },
                            bg: G.shouldDisableButton
                              ? "gray.400"
                              : "green.500",
                            color: "white",
                            borderRadius: "sm",
                            height: "35px",
                            w: "full",
                            _hover: G.shouldDisableButton
                              ? {}
                              : { bg: "green.600" },
                            cursor: G.shouldDisableButton
                              ? "not-allowed"
                              : "pointer",
                            disabled: G.shouldDisableButton,
                            children: G.shouldDisableButton
                              ? "Đang sử dụng"
                              : "Chọn gói này",
                          }),
                        ],
                      }),
                    }),
                  },
                  G.id
                )
              ),
            })),
      (e[11] = P),
      (e[12] = f == null ? void 0 : f.canCreateDesignRequest),
      (e[13] = _),
      (e[14] = k),
      (e[15] = w),
      (e[16] = N),
      (e[17] = F),
      (e[18] = L),
      (e[19] = $),
      (e[20] = V),
      (e[21] = A),
      (e[22] = D),
      (e[23] = H);
  } else
    (N = e[16]),
      (F = e[17]),
      (L = e[18]),
      ($ = e[19]),
      (V = e[20]),
      (A = e[21]),
      (D = e[22]),
      (H = e[23]);
  let U;
  e[28] === Symbol.for("react.memo_cache_sentinel")
    ? ((U = s.jsx(j, {
        fontSize: "sm",
        color: "gray.600",
        children:
          'Click vào thẻ gói hoặc nút "Chọn gói này" để tiến hành thanh toán và nhập mã giảm giá (nếu có)',
      })),
      (e[28] = U))
    : (U = e[28]);
  let Z, q;
  e[29] === Symbol.for("react.memo_cache_sentinel")
    ? ((Z = { bg: "purple.600" }),
      (q = { bg: "purple.700" }),
      (e[29] = Z),
      (e[30] = q))
    : ((Z = e[29]), (q = e[30]));
  let W;
  e[31] !== E
    ? ((W = s.jsx(y, {
        p: 4,
        borderRadius: "lg",
        mb: 8,
        textAlign: "center",
        children: s.jsxs(we, {
          justify: "center",
          gap: 4,
          align: "center",
          children: [
            U,
            s.jsx(ee, {
              onClick: E,
              bg: "purple.500",
              color: "white",
              size: "sm",
              borderRadius: "md",
              fontWeight: "medium",
              _hover: Z,
              _active: q,
              children: "Mua lẻ tính năng",
            }),
          ],
        }),
      })),
      (e[31] = E),
      (e[32] = W))
    : (W = e[32]);
  let Q;
  e[33] === Symbol.for("react.memo_cache_sentinel")
    ? ((Q = { base: 2, sm: 4 }), (e[33] = Q))
    : (Q = e[33]);
  let re;
  e[34] === Symbol.for("react.memo_cache_sentinel")
    ? ((re = s.jsx(j, {
        color: "#1793d1",
        fontSize: { base: "xs", sm: "sm" },
        children: "✓ Có tính năng",
      })),
      (e[34] = re))
    : (re = e[34]);
  let ae;
  e[35] === Symbol.for("react.memo_cache_sentinel")
    ? ((ae = s.jsx(y, {
        flex: "1",
        children: s.jsxs(K, {
          gap: 1,
          align: "start",
          children: [
            re,
            s.jsx(j, {
              color: "",
              fontSize: { base: "xs", sm: "sm" },
              children: "✗ Không có tính năng",
            }),
          ],
        }),
      })),
      (e[35] = ae))
    : (ae = e[35]);
  let ce;
  e[36] === Symbol.for("react.memo_cache_sentinel")
    ? ((ce = { base: 4, sm: 4, md: 6 }), (e[36] = ce))
    : (ce = e[36]);
  let de;
  e[37] === Symbol.for("react.memo_cache_sentinel")
    ? ((de = { base: 1, sm: 2 }), (e[37] = de))
    : (de = e[37]);
  let fe;
  e[38] === Symbol.for("react.memo_cache_sentinel")
    ? ((fe = s.jsx(Ce, {
        bg: "#1793d1",
        px: de,
        py: 1,
        borderRadius: "full",
        color: "white",
        fontWeight: "bold",
        fontSize: { base: "2xs", sm: "xs", md: "sm" },
        children: "BASIC",
      })),
      (e[38] = fe))
    : (fe = e[38]);
  let ue;
  e[39] === Symbol.for("react.memo_cache_sentinel")
    ? ((ue = { base: 1, sm: 2 }), (e[39] = ue))
    : (ue = e[39]);
  let oe;
  e[40] === Symbol.for("react.memo_cache_sentinel")
    ? ((oe = s.jsx(Ce, {
        bg: "#a8a8a8",
        px: ue,
        py: 1,
        borderRadius: "full",
        color: "white",
        fontWeight: "bold",
        fontSize: { base: "2xs", sm: "xs", md: "sm" },
        children: "PRO",
      })),
      (e[40] = oe))
    : (oe = e[40]);
  let xe;
  e[41] === Symbol.for("react.memo_cache_sentinel")
    ? ((xe = { base: 1, sm: 2 }), (e[41] = xe))
    : (xe = e[41]);
  let ie;
  e[42] === Symbol.for("react.memo_cache_sentinel")
    ? ((ie = { base: "2xs", sm: "xs", md: "sm" }), (e[42] = ie))
    : (ie = e[42]);
  let me;
  e[43] === Symbol.for("react.memo_cache_sentinel")
    ? ((me = s.jsxs(je, {
        bg: "#eef6ff",
        p: Q,
        align: "center",
        justify: "space-between",
        w: "full",
        children: [
          ae,
          s.jsxs(je, {
            gap: ce,
            align: "center",
            className: "pr-1 sm:pr-4",
            children: [
              fe,
              oe,
              s.jsx(Ce, {
                bg: "#e7bb06",
                px: xe,
                py: 1,
                borderRadius: "full",
                color: "white",
                fontWeight: "bold",
                fontSize: ie,
                children: s.jsxs(we, {
                  gap: 1,
                  children: [
                    s.jsx(Hs, { size: "0.8em" }),
                    s.jsx(j, { children: "VIP" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })),
      (e[43] = me))
    : (me = e[43]);
  let le;
  e[44] !== L
    ? ((le = s.jsx(y, {
        id: "pricing-table",
        w: "full",
        children: s.jsxs(y, {
          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "lg",
          overflow: "hidden",
          w: "full",
          children: [
            me,
            s.jsx(K, {
              gap: 0,
              align: "stretch",
              w: "full",
              children: L.map(Ui),
            }),
          ],
        }),
      })),
      (e[44] = L),
      (e[45] = le))
    : (le = e[45]);
  let pe;
  e[46] === Symbol.for("react.memo_cache_sentinel")
    ? ((pe = s.jsx(y, {
        children: s.jsx(j, {
          fontSize: "sm",
          color: "gray.500",
          mt: 2,
          children:
            "Lưu ý: Hiện tại chúng tôi chưa có chính sách hoàn tiền và huỷ dịch vụ các gói, nhưng nếu như bạn gặp lỗi hoặc có sự nhầm lẫn nào trong thanh toán, hãy liên hệ với chúng tôi để được hỗ trợ. Các tính năng trong gói sẽ không được quy đổi ra tiền để khấu trừ hoặc đổi cho tính năng khách giữa các gói. Xin chân thành cảm ơn!",
        }),
      })),
      (e[46] = pe))
    : (pe = e[46]);
  let Ne;
  e[47] === Symbol.for("react.memo_cache_sentinel")
    ? ((Ne = () => n(!1)), (e[47] = Ne))
    : (Ne = e[47]);
  let Y;
  e[48] !== F ? ((Y = F.map(Qi)), (e[48] = F), (e[49] = Y)) : (Y = e[49]);
  let ye;
  e[50] === Symbol.for("react.memo_cache_sentinel")
    ? ((ye = s.jsx(y, {
        mt: 4,
        p: 3,
        bg: "blue.50",
        borderRadius: "md",
        border: "1px solid",
        borderColor: "blue.200",
        children: s.jsx(j, {
          fontSize: "sm",
          fontStyle: "italic",
          color: "blue.700",
          textAlign: "center",
          children:
            "**Cần mua thêm tính năng gì. Dâu rể inbox Zalo cho meWedding nhé",
        }),
      })),
      (e[50] = ye))
    : (ye = e[50]);
  let te;
  e[51] !== Y
    ? ((te = s.jsxs(K, { gap: 3, align: "stretch", children: [Y, ye] })),
      (e[51] = Y),
      (e[52] = te))
    : (te = e[52]);
  let Se;
  e[53] !== t || e[54] !== te
    ? ((Se = s.jsx(et, {
        isOpen: t,
        title: "BẢNG GIÁ MUA LẺ CÁC TÍNH NĂNG CHO GÓI BASIC",
        onClose: Ne,
        maxWidth: "500px",
        maxHeight: "80vh",
        children: te,
      })),
      (e[53] = t),
      (e[54] = te),
      (e[55] = Se))
    : (Se = e[55]);
  let be;
  e[56] === Symbol.for("react.memo_cache_sentinel")
    ? ((be = () => o(!1)), (e[56] = be))
    : (be = e[56]);
  let Te;
  e[57] !== $ ? ((Te = $.map(Ki)), (e[57] = $), (e[58] = Te)) : (Te = e[58]);
  let ve;
  e[59] === Symbol.for("react.memo_cache_sentinel")
    ? ((ve = s.jsx(y, {
        mt: 4,
        p: 3,
        bg: "blue.50",
        borderRadius: "md",
        border: "1px solid",
        borderColor: "blue.200",
        children: s.jsx(j, {
          fontSize: "sm",
          fontStyle: "italic",
          color: "blue.700",
          textAlign: "center",
          children:
            "**Cần mua thêm tính năng gì. Dâu rể inbox Zalo cho meWedding nhé",
        }),
      })),
      (e[59] = ve))
    : (ve = e[59]);
  let _e;
  e[60] !== Te
    ? ((_e = s.jsxs(K, { gap: 3, align: "stretch", children: [Te, ve] })),
      (e[60] = Te),
      (e[61] = _e))
    : (_e = e[61]);
  let se;
  e[62] !== a || e[63] !== _e
    ? ((se = s.jsx(et, {
        isOpen: a,
        title: "BẢNG GIÁ MUA LẺ CÁC TÍNH NĂNG CHO GÓI PRO",
        onClose: be,
        maxWidth: "500px",
        maxHeight: "80vh",
        children: _e,
      })),
      (e[62] = a),
      (e[63] = _e),
      (e[64] = se))
    : (se = e[64]);
  let Pe;
  e[65] === Symbol.for("react.memo_cache_sentinel")
    ? ((Pe = () => l(!1)), (e[65] = Pe))
    : (Pe = e[65]);
  let he, B, Me, Ke;
  e[66] === Symbol.for("react.memo_cache_sentinel")
    ? ((he = s.jsx(j, {
        children:
          "Thiệp sẽ được thiết kế theo yêu cầu riêng của Dâu Rể, thay đổi bố cục, màu sắc, ý tưởng,....Chỉ mình dâu rể sử dụng. Tạo ra màu sắc riêng và những trải nghiệm tốt hơn cho Dâu Rể. (Có thể cover từ những mẫu thiệp khác mà dâu rể thích,...)",
      })),
      (B = s.jsx(j, {
        className: "font-bold text-lg",
        children: "Giá Thiết Kế từ : 450.000đ - 2.000.000đ",
      })),
      (Me = s.jsx(j, {
        children: "Sẽ tuỳ theo độ khó và yêu cầu của Dâu Rể.",
      })),
      (Ke = s.jsx(j, {
        children:
          "Dâu Rể vui lòng nhắn tin qua cho meWedding để được hỗ trợ tư vấn chi tiết nhé ạ !!",
      })),
      (e[66] = he),
      (e[67] = B),
      (e[68] = Me),
      (e[69] = Ke))
    : ((he = e[66]), (B = e[67]), (Me = e[68]), (Ke = e[69]));
  let nt;
  e[70] === Symbol.for("react.memo_cache_sentinel")
    ? ((nt = s.jsx(y, {
        onClick: qi,
        rel: "noopener noreferrer",
        className: "w-10 h-10 cursor-pointer",
        children: s.jsx(Jt, { as: Hn, boxSize: 10, mr: 1 }),
      })),
      (e[70] = nt))
    : (nt = e[70]);
  let ft;
  e[71] === Symbol.for("react.memo_cache_sentinel")
    ? ((ft = s.jsxs(y, {
        className: "flex flex-col gap-3 items-center text-center px-6",
        children: [
          he,
          B,
          Me,
          Ke,
          s.jsx(y, {
            className: "bg-gray-100 p-2 px-6 rounded-full",
            children: s.jsxs(we, {
              gap: 4,
              justify: "center",
              children: [
                nt,
                s.jsx(y, {
                  onClick: Yi,
                  rel: "noopener noreferrer",
                  className: "w-10 h-10 cursor-pointer",
                  children: s.jsx(Jt, { as: Ii, boxSize: 10, mr: 1 }),
                }),
              ],
            }),
          }),
        ],
      })),
      (e[71] = ft))
    : (ft = e[71]);
  let qe;
  e[72] !== h
    ? ((qe = s.jsx(et, {
        isOpen: h,
        title: "Thiệp Thiết kế theo Yêu Cầu",
        onClose: Pe,
        maxWidth: "500px",
        maxHeight: "80vh",
        children: ft,
      })),
      (e[72] = h),
      (e[73] = qe))
    : (qe = e[73]);
  let ut;
  e[74] === Symbol.for("react.memo_cache_sentinel")
    ? ((ut = () => r(!1)), (e[74] = ut))
    : (ut = e[74]);
  let xt;
  e[75] === Symbol.for("react.memo_cache_sentinel")
    ? ((xt = () => {
        r(!1), i(null);
      }),
      (e[75] = xt))
    : (xt = e[75]);
  let Ye;
  e[76] !== g || e[77] !== m
    ? ((Ye = s.jsx(Fi, {
        isOpen: g,
        onClose: ut,
        selectedPlan: m,
        onPaymentSuccess: xt,
      })),
      (e[76] = g),
      (e[77] = m),
      (e[78] = Ye))
    : (Ye = e[78]);
  let pt;
  e[79] === Symbol.for("react.memo_cache_sentinel")
    ? ((pt = () => d(!1)), (e[79] = pt))
    : (pt = e[79]);
  let Ze;
  e[80] !== c
    ? ((Ze = s.jsx(zi, { isOpen: c, onClose: pt, onFeaturePurchase: b })),
      (e[80] = c),
      (e[81] = Ze))
    : (Ze = e[81]);
  let bt;
  e[82] === Symbol.for("react.memo_cache_sentinel")
    ? ((bt = () => S(!1)), (e[82] = bt))
    : (bt = e[82]);
  let Xe;
  e[83] !== u
    ? ((Xe = s.jsx(ps, { isOpen: u, onClose: bt })), (e[83] = u), (e[84] = Xe))
    : (Xe = e[84]);
  let jt;
  return (
    e[85] !== N ||
    e[86] !== W ||
    e[87] !== le ||
    e[88] !== Se ||
    e[89] !== se ||
    e[90] !== qe ||
    e[91] !== Ye ||
    e[92] !== Ze ||
    e[93] !== V ||
    e[94] !== Xe ||
    e[95] !== A ||
    e[96] !== D ||
    e[97] !== H
      ? ((jt = s.jsxs(N, {
          maxW: V,
          pb: A,
          px: D,
          children: [H, W, le, pe, Se, se, qe, Ye, Ze, Xe],
        })),
        (e[85] = N),
        (e[86] = W),
        (e[87] = le),
        (e[88] = Se),
        (e[89] = se),
        (e[90] = qe),
        (e[91] = Ye),
        (e[92] = Ze),
        (e[93] = V),
        (e[94] = Xe),
        (e[95] = A),
        (e[96] = D),
        (e[97] = H),
        (e[98] = jt))
      : (jt = e[98]),
    jt
  );
};
function Di(e) {
  return e.toLocaleString("vi-VN") + "đ";
}
function Bi(e) {}
function Gi() {
  const e = document.getElementById("pricing-table");
  e && e.scrollIntoView({ behavior: "smooth" });
}
function Hi(e) {
  e.stopPropagation();
}
function Ui(e, t) {
  return s.jsxs(
    je,
    {
      px: { base: 2, sm: 3, md: 4 },
      bg: t % 2 === 0 ? "gray.50" : "white",
      align: "center",
      justify: "space-between",
      w: "full",
      children: [
        s.jsx(y, {
          flex: "1",
          pr: { base: 2, sm: 4 },
          children: s.jsx(j, {
            fontWeight: "medium",
            fontSize: { base: "2xs", sm: "sm", md: "md" },
            lineHeight: "short",
            children: e[0],
          }),
        }),
        s.jsxs(je, {
          gap: 0,
          align: "center",
          children: [
            s.jsx(y, {
              className: "flex justify-center items-center",
              w: { base: "50px", sm: "60px", md: "80px" },
              h: { base: "40px", sm: "50px", md: "60px" },
              bg: "#ff5c5c24",
              border: "1px solid",
              borderColor: "red.100",
              children: e[1]
                ? typeof e[1] == "string"
                  ? s.jsx(j, {
                      className: "text-center",
                      fontSize: { base: "2xs", sm: "xs", md: "sm" },
                      px: 1,
                      children: e[1],
                    })
                  : s.jsx(Et, {
                      className:
                        "text-[#1793d1] text-base sm:text-lg md:text-xl",
                    })
                : s.jsx(Lt, {
                    className: "text-gray-400 text-sm sm:text-base md:text-lg",
                  }),
            }),
            s.jsx(y, {
              className: "flex justify-center items-center",
              w: { base: "50px", sm: "60px", md: "80px" },
              h: { base: "40px", sm: "50px", md: "60px" },
              bg: "#a8a8a854",
              border: "1px solid",
              borderColor: "gray.200",
              children: e[2]
                ? typeof e[2] == "string"
                  ? s.jsx(j, {
                      className: "text-center",
                      fontSize: { base: "2xs", sm: "xs", md: "sm" },
                      px: 1,
                      children: e[2],
                    })
                  : s.jsx(Et, {
                      className:
                        "text-[#1793d1] text-base sm:text-lg md:text-xl",
                    })
                : s.jsx(Lt, {
                    className: "text-gray-400 text-sm sm:text-base md:text-lg",
                  }),
            }),
            s.jsx(y, {
              className: "flex justify-center items-center",
              w: { base: "50px", sm: "60px", md: "80px" },
              h: { base: "40px", sm: "50px", md: "60px" },
              bg: "#e7ba0646",
              border: "1px solid",
              borderColor: "yellow.200",
              children: e[3]
                ? typeof e[3] == "string"
                  ? s.jsx(j, {
                      className: "text-center",
                      fontSize: { base: "2xs", sm: "xs", md: "sm" },
                      px: 1,
                      children: e[3],
                    })
                  : s.jsx(Et, {
                      className:
                        "text-[#1793d1] text-base sm:text-lg md:text-xl",
                    })
                : s.jsx(Lt, {
                    className: "text-gray-400 text-sm sm:text-base md:text-lg",
                  }),
            }),
          ],
        }),
      ],
    },
    t
  );
}
function Qi(e, t) {
  return s.jsx(j, { fontSize: "sm", children: e }, t);
}
function Ki(e, t) {
  return s.jsx(j, { fontSize: "sm", children: e }, t);
}
function qi() {
  return window.open("https://zalo.me/0848753999", "_blank");
}
function Yi() {
  return window.open("https://www.messenger.com/t/mehappy.vn", "_blank");
}
const Zi = "/assets/bg-home-Byi6bCTG.jpg",
  ns = ["ĐIỆN TỬ", "ONLINE"],
  Xi = () => {
    const [e, t] = p.useState(0),
      [n, a] = p.useState(""),
      o = Ut();
    return (
      p.useEffect(() => {
        let h;
        const l = ns[e];
        let g = 0;
        const r = () => {
          g <= l.length
            ? (a(l.slice(0, g)), g++, (h = setTimeout(r, 150)))
            : (h = setTimeout(() => {
                t((m) => (m + 1) % ns.length);
              }, 5e3));
        };
        return r(), () => clearTimeout(h);
      }, [e]),
      s.jsx(y, {
        className: "mt-[51px] pb-10 relative",
        children: s.jsx(y, {
          children: s.jsxs(y, {
            className:
              "relative h-[400px] sm:h-[600px] items-center justify-center text-center flex flex-col",
            py: 12,
            style: {
              backgroundImage: `url(${Zi})`,
              backgroundSize: o ? "initial" : "cover",
              backgroundOrigin: "content-box",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundPosition:
                window.innerWidth >= 640 ? "0% 10%" : "50% 30%",
            },
            children: [
              s.jsx(y, {
                style: {
                  backgroundColor: "rgb(0, 0, 0)",
                  opacity: 0.7,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  pointerEvents: "none",
                },
              }),
              s.jsx(je, {
                mx: "auto",
                direction: { base: "column", md: "row" },
                align: "center",
                justify: "space-between",
                position: "relative",
                children: s.jsxs(y, {
                  flex: 1,
                  className:
                    "md:min-w-[600px] min-w-[80%] text-center md:text-left flex justify-center flex-col items-center gap-5 px-5",
                  children: [
                    s.jsx(j, {
                      className: "font-semibold text-lg ",
                      style: {
                        fontSize: "26px",
                        color: "rgb(251, 65, 65)",
                        fontFamily: "Quicksand, sans-serif",
                      },
                      children: "MỜI CƯỚI THỜI 5.0",
                    }),
                    s.jsx("p", {
                      className:
                        "text-white text-[28px] md:text-[50px] uppercase font-extrabold",
                      style: { fontFamily: "Paytone One, sans-serif" },
                      children: "BẢNG GIÁ THIỆP CƯỚI ĐIỆN TỬ",
                    }),
                    s.jsxs(j, {
                      className:
                        "text-sm md:text-[30px] max-w-[80%] text-center",
                      style: {
                        color: "#ffb5b5",
                        fontFamily: "Quicksand, sans-serif",
                      },
                      children: [
                        "Cảm ơn bạn đã tin tưởng và lựa chọn meWedding cho đám cưới của mình ",
                        s.jsx("span", {
                          className: "text-red-500",
                          children: "♥",
                        }),
                      ],
                    }),
                    s.jsxs(hs, {
                      display: { base: "none", md: "flex" },
                      mt: 6,
                      direction: "row",
                      justify: "flex-start",
                      gap: 5,
                      children: [
                        s.jsx(ee, {
                          onClick: () => {
                            window.open("https://zalo.me/0848753999", "_blank");
                          },
                          bg: "red.500",
                          color: "white",
                          borderRadius: "full",
                          width: "200px",
                          height: "40px",
                          fontWeight: "bold",
                          _hover: { bg: "red.600" },
                          children: "ĐẶT LÀM NGAY",
                        }),
                        s.jsx(ee, {
                          onClick: () => {
                            window.open(Be.PUBLIC.TEMPLATE_WEDDING, "_blank");
                          },
                          variant: "outline",
                          bg: "white",
                          color: "red.500",
                          borderRadius: "full",
                          fontWeight: "bold",
                          width: "200px",
                          height: "40px",
                          borderColor: "red.400",
                          children: "XEM CÁC MẪU THIỆP",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      })
    );
  };
function Ji() {
  const e = R.c(2);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = s.jsx(J, {
        children: s.jsx("title", {
          children: "MIỄN PHÍ | Tạo Thiệp Cưới Online",
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsxs(s.Fragment, {
          children: [
            t,
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden",
              children: [
                s.jsx(at, {}),
                s.jsx(Xi, {}),
                s.jsx(Vi, {}),
                s.jsx(Ft, {}),
                s.jsx(ct, {}),
                s.jsx(zt, {}),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
const so = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ji }, Symbol.toStringTag, {
    value: "Module",
  })
);
function el() {
  const e = R.c(2);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Thiệp Cưới Các Cặp Đôi | Xem Thiệp Cưới Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Khám phá những thiệp cưới đẹp mắt được tạo bởi các cặp đôi trên toàn quốc. Tìm cảm hứng cho thiệp cưới của bạn.",
          }),
          s.jsx("meta", {
            name: "keywords",
            content:
              "thiệp cưới, xem thiệp cưới, thiệp cưới đẹp, cặp đôi, wedding invitation",
          }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsxs(s.Fragment, {
          children: [
            t,
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden",
              children: [
                s.jsx(at, {}),
                s.jsx(vn, {}),
                s.jsx(Ft, {}),
                s.jsx(ct, {}),
                s.jsx(zt, {}),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
const no = Object.freeze(
  Object.defineProperty({ __proto__: null, default: el }, Symbol.toStringTag, {
    value: "Module",
  })
);
function tl() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { tag: t, isCard: !0 }), (e[0] = t), (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Cưới Online - Tạo Thiệp Mời Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Khám phá bộ sưu tập mẫu thiệp cưới online đẹp và độc đáo. Tạo thiệp mời cưới, sinh nhật, thôi nôi và nhiều sự kiện khác một cách dễ dàng.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, { selectedTag: t, onTagSelect: n })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp nào được tìm thấy",
        category: X.EVENT,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const io = Object.freeze(
  Object.defineProperty({ __proto__: null, default: tl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function sl() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.BABY, tag: t, isCard: !0 }), (e[0] = t), (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Thôi Nôi Online - Thiệp Mời Thôi Nôi Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp thôi nôi online đẹp và dễ thương. Tạo thiệp mời thôi nôi cho bé yêu của bạn.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, { category: X.BABY, selectedTag: t, onTagSelect: n })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp thôi nôi nào được tìm thấy",
        category: X.BABY,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const lo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: sl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function nl() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.BIRTHDAY, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Sinh Nhật Online - Thiệp Mời Sinh Nhật Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp sinh nhật online đẹp và vui nhộn. Tạo thiệp mời sinh nhật độc đáo cho ngày đặc biệt.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, {
        category: X.BIRTHDAY,
        selectedTag: t,
        onTagSelect: n,
      })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp sinh nhật nào được tìm thấy",
        category: X.BIRTHDAY,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const oo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: nl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function il() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.EVENT, tag: t, isCard: !0 }), (e[0] = t), (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Sự Kiện Online - Thiệp Mời Sự Kiện Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp sự kiện online đẹp và chuyên nghiệp. Tạo thiệp mời cho các sự kiện đặc biệt của bạn.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, { category: X.EVENT, selectedTag: t, onTagSelect: n })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp sự kiện nào được tìm thấy",
        category: X.EVENT,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const ro = Object.freeze(
  Object.defineProperty({ __proto__: null, default: il }, Symbol.toStringTag, {
    value: "Module",
  })
);
function ll() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.GRAND_OPENING, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children:
              "Mẫu Thiệp Khai Trương Online - Thiệp Mời Khai Trương Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp khai trương online đẹp và chuyên nghiệp. Tạo thiệp mời khai trương cho doanh nghiệp của bạn.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, {
        category: X.GRAND_OPENING,
        selectedTag: t,
        onTagSelect: n,
      })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp khai trương nào được tìm thấy",
        category: X.GRAND_OPENING,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const ao = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ll }, Symbol.toStringTag, {
    value: "Module",
  })
);
function ol() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.NEW_HOUSE, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Tân Gia Online - Thiệp Mời Tân Gia Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp tân gia online đẹp và ý nghĩa. Tạo thiệp mời tân gia cho ngôi nhà mới của bạn.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, {
        category: X.NEW_HOUSE,
        selectedTag: t,
        onTagSelect: n,
      })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp tân gia nào được tìm thấy",
        category: X.NEW_HOUSE,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const co = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ol }, Symbol.toStringTag, {
    value: "Module",
  })
);
function rl() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.NEW_YEAR, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Năm Mới Online - Thiệp Chúc Tết Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp năm mới online đẹp và ý nghĩa. Tạo thiệp chúc Tết độc đáo cho năm mới.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, {
        category: X.NEW_YEAR,
        selectedTag: t,
        onTagSelect: n,
      })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp năm mới nào được tìm thấy",
        category: X.NEW_YEAR,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const ho = Object.freeze(
  Object.defineProperty({ __proto__: null, default: rl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function al() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.REUNITE, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Họp Lớp Online - Thiệp Mời Họp Lớp Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp họp lớp online đẹp và thân thiện. Tạo thiệp mời họp lớp cho buổi gặp gỡ đồng học.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, { category: X.REUNITE, selectedTag: t, onTagSelect: n })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp họp lớp nào được tìm thấy",
        category: X.REUNITE,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const mo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: al }, Symbol.toStringTag, {
    value: "Module",
  })
);
function cl() {
  const e = R.c(15),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.WEDDING, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Cưới Online - Thiệp Mời Cưới Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp cưới online đẹp và sang trọng. Tạo thiệp mời cưới độc đáo cho ngày trọng đại của bạn.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (e[2] = g),
      (e[3] = r))
    : ((g = e[2]), (r = e[3]));
  let m;
  e[4] !== t
    ? ((m = s.jsx(Ae, { category: X.WEDDING, selectedTag: t, onTagSelect: n })),
      (e[4] = t),
      (e[5] = m))
    : (m = e[5]);
  let i;
  e[6] !== (o == null ? void 0 : o.data)
    ? ((i = (o == null ? void 0 : o.data) || []),
      (e[6] = o == null ? void 0 : o.data),
      (e[7] = i))
    : (i = e[7]);
  let c;
  e[8] !== l || e[9] !== h || e[10] !== i
    ? ((c = s.jsx(We, {
        templates: i,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp cưới nào được tìm thấy",
        category: X.WEDDING,
      })),
      (e[8] = l),
      (e[9] = h),
      (e[10] = i),
      (e[11] = c))
    : (c = e[11]);
  let d;
  return (
    e[12] !== m || e[13] !== c
      ? ((d = s.jsxs(Re, { children: [g, r, m, c] })),
        (e[12] = m),
        (e[13] = c),
        (e[14] = d))
      : (d = e[14]),
    d
  );
}
const go = Object.freeze(
  Object.defineProperty({ __proto__: null, default: cl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function dl() {
  const e = R.c(16),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { category: X.WEDDING, tag: t, isCard: !0 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = Ie(a);
  let g, r, m;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Mẫu Thiệp Cưới Online - Thiệp Mời Cưới Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập mẫu thiệp cưới online đẹp và sang trọng. Tạo thiệp mời cưới độc đáo cho ngày trọng đại của bạn.",
          }),
        ],
      })),
      (r = s.jsx($e, {})),
      (m = s.jsx(De, { showAllTemplatesLink: !0 })),
      (e[2] = g),
      (e[3] = r),
      (e[4] = m))
    : ((g = e[2]), (r = e[3]), (m = e[4]));
  let i;
  e[5] !== t
    ? ((i = s.jsx(Ae, { category: X.WEDDING, selectedTag: t, onTagSelect: n })),
      (e[5] = t),
      (e[6] = i))
    : (i = e[6]);
  let c;
  e[7] !== (o == null ? void 0 : o.data)
    ? ((c = (o == null ? void 0 : o.data) || []),
      (e[7] = o == null ? void 0 : o.data),
      (e[8] = c))
    : (c = e[8]);
  let d;
  e[9] !== l || e[10] !== h || e[11] !== c
    ? ((d = s.jsx(We, {
        templates: c,
        isLoading: h,
        error: l,
        emptyMessage: "Không có mẫu thiệp cưới nào được tìm thấy",
        category: X.WEDDING,
      })),
      (e[9] = l),
      (e[10] = h),
      (e[11] = c),
      (e[12] = d))
    : (d = e[12]);
  let u;
  return (
    e[13] !== i || e[14] !== d
      ? ((u = s.jsxs(Re, { children: [g, r, m, i, d] })),
        (e[13] = i),
        (e[14] = d),
        (e[15] = u))
      : (u = e[15]),
    u
  );
}
const fo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hl = () => {
    const [e, t] = p.useState("free"),
      [n, a] = p.useState(""),
      [o, h] = p.useState([]),
      [l, g] = p.useState(!1),
      [r, m] = p.useState(1),
      [i, c] = p.useState(1),
      [d, u] = p.useState(1),
      [S, w] = p.useState([]),
      [f, v] = p.useState([]),
      [I, x] = p.useState([]),
      [k, T] = p.useState(!0),
      [P, z] = p.useState(!0),
      [C, O] = p.useState(!0),
      _ = 12,
      M = p.useCallback(async () => {
        g(!0);
        try {
          const W = await mn(X.WEDDING);
          h(W);
        } catch {
        } finally {
          g(!1);
        }
      }, []);
    p.useEffect(() => {
      M();
    }, [M]);
    const E = (W) => {
        a(W), m(1), c(1), u(1), w([]), v([]), x([]), T(!0), z(!0), O(!0);
      },
      {
        data: b,
        isLoading: N,
        error: F,
      } = Ie({
        category: X.WEDDING,
        tier: "free",
        page: r,
        limit: _,
        tag: n || void 0,
      }),
      {
        data: L,
        isLoading: $,
        error: V,
      } = Ie({
        category: X.WEDDING,
        tier: "vip",
        page: i,
        limit: _,
        tag: n || void 0,
      }),
      {
        data: A,
        isLoading: D,
        error: H,
      } = Ie({
        category: X.WEDDING,
        tier: "pro",
        page: d,
        limit: _,
        tag: n || void 0,
      });
    p.useEffect(() => {
      if (b != null && b.data) {
        w(r === 1 ? b.data : (Q) => [...Q, ...b.data]);
        const W = Math.ceil(b.total / _);
        T(r < W);
      }
    }, [b, r, _]),
      p.useEffect(() => {
        if (L != null && L.data) {
          v(i === 1 ? L.data : (Q) => [...Q, ...L.data]);
          const W = Math.ceil(L.total / _);
          z(i < W);
        }
      }, [L, i, _]),
      p.useEffect(() => {
        if (A != null && A.data) {
          x(d === 1 ? A.data : (Q) => [...Q, ...A.data]);
          const W = Math.ceil(A.total / _);
          O(d < W);
        }
      }, [A, d, _]);
    const U = p.useCallback(() => {
        !N && k && m((W) => W + 1);
      }, [N, k]),
      Z = p.useCallback(() => {
        !$ && P && c((W) => W + 1);
      }, [$, P]),
      q = p.useCallback(() => {
        !D && C && u((W) => W + 1);
      }, [D, C]);
    return s.jsxs(Ee, {
      maxW: "6xl",
      py: 8,
      px: { base: 4, md: 6 },
      children: [
        s.jsx(y, {
          textAlign: "center",
          mb: 8,
          px: { base: 2, md: 0 },
          children: s.jsx(Us, {
            as: "h1",
            fontSize: ["20px", "28px", "36px"],
            fontWeight: "bold",
            color: "rgb(236, 84, 84)",
            fontFamily: '"Paytone One", sans-serif',
            mb: 4,
            lineHeight: { base: "1.2", md: "1.1" },
            children: "KHO GIAO DIỆN CÁC MẪU THIỆP CƯỚI",
          }),
        }),
        s.jsx(je, {
          justifyContent: "center",
          mb: 8,
          px: 4,
          children: s.jsxs(hs, {
            direction: "row",
            gap: 4,
            width: "100%",
            children: [
              s.jsxs(ee, {
                onClick: () => t("free"),
                bg: e === "free" ? "red.500" : "gray.100",
                color: e === "free" ? "white" : "gray.700",
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: "bold",
                fontSize: { base: "sm", md: "lg" },
                px: { base: 6, md: 8 },
                py: { base: 4, md: 3 },
                borderRadius: "full",
                width: { base: "100px", md: "auto" },
                minHeight: { base: "50px", md: "auto" },
                _hover: { bg: e === "free" ? "red.600" : "gray.200" },
                children: [
                  s.jsx(Ce, {
                    bg: "red.500",
                    color: "white",
                    px: 2,
                    py: 1,
                    borderRadius: "sm",
                    fontSize: "xs",
                    children: "FREE",
                  }),
                  s.jsx(y, {
                    className: "hidden sm:block",
                    children: "Giao diện Miễn Phí",
                  }),
                ],
              }),
              s.jsxs(ee, {
                onClick: () => t("pro"),
                bg: e === "pro" ? "purple.500" : "gray.100",
                color: e === "pro" ? "white" : "gray.700",
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: "bold",
                fontSize: { base: "md", md: "lg" },
                px: { base: 6, md: 8 },
                py: { base: 4, md: 3 },
                borderRadius: "full",
                width: { base: "100px", md: "auto" },
                minHeight: { base: "50px", md: "auto" },
                _hover: { bg: e === "pro" ? "purple.600" : "gray.200" },
                children: [
                  s.jsx(Ce, {
                    bg: "purple.500",
                    color: "white",
                    px: 2,
                    py: 1,
                    borderRadius: "sm",
                    fontSize: "xs",
                    children: "PRO",
                  }),
                  s.jsx(y, {
                    className: "hidden sm:block",
                    children: "Giao diện PRO",
                  }),
                ],
              }),
              s.jsxs(ee, {
                onClick: () => t("vip"),
                bg: e === "vip" ? "yellow.400" : "gray.100",
                color: e === "vip" ? "black" : "gray.700",
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: "bold",
                fontSize: { base: "md", md: "lg" },
                px: { base: 6, md: 8 },
                py: { base: 4, md: 3 },
                borderRadius: "full",
                width: { base: "100px", md: "auto" },
                minHeight: { base: "50px", md: "auto" },
                _hover: { bg: e === "vip" ? "yellow.500" : "gray.200" },
                children: [
                  s.jsx(Ce, {
                    bg: "yellow.400",
                    color: "black",
                    px: 2,
                    py: 1,
                    borderRadius: "sm",
                    fontSize: "xs",
                    children: "VIP",
                  }),
                  s.jsx(y, {
                    className: "hidden sm:block",
                    children: "Giao diện VIP",
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsxs(je, {
          justify: "space-between",
          align: "center",
          mb: 8,
          px: 4,
          flexWrap: "wrap",
          gap: 4,
          children: [
            s.jsxs(je, {
              align: "center",
              gap: 4,
              children: [
                s.jsx(j, {
                  fontSize: "sm",
                  fontWeight: "semibold",
                  color: "gray.700",
                  children: "Lọc:",
                }),
                s.jsxs(Qs, {
                  children: [
                    s.jsx(Ks, {
                      asChild: !0,
                      children: s.jsx(ee, {
                        variant: "outline",
                        size: "sm",
                        loading: l,
                        minW: "150px",
                        justifyContent: "flex-start",
                        bg: "white",
                        borderColor: "gray.300",
                        _hover: { bg: "gray.50" },
                        children: l
                          ? "Loading..."
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(qs, { style: { marginRight: "8px" } }),
                                n || "Tất cả",
                                s.jsx(Ys, { style: { marginLeft: "8px" } }),
                              ],
                            }),
                      }),
                    }),
                    s.jsx(Zs, {
                      children: s.jsxs(Xs, {
                        minW: "150px",
                        maxH: "200px",
                        overflowY: "auto",
                        children: [
                          s.jsx(es, {
                            value: "all",
                            onClick: () => E(""),
                            bg: n ? "transparent" : "blue.50",
                            color: n ? "gray.700" : "blue.600",
                            children: "Tất cả",
                          }),
                          o.map((W) =>
                            s.jsx(
                              es,
                              {
                                value: W,
                                onClick: () => E(W),
                                bg: n === W ? "blue.50" : "transparent",
                                color: n === W ? "blue.600" : "gray.700",
                                children: W,
                              },
                              W
                            )
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs(j, {
              fontSize: "sm",
              color: "gray.500",
              children: [
                (e === "free" ? N : e === "vip" ? $ : D)
                  ? "Đang tải..."
                  : `${
                      (e === "free" ? S : e === "vip" ? f : I).length
                    } mẫu thiệp`,
                n && ` cho tag "${n}"`,
              ],
            }),
          ],
        }),
        e === "free" &&
          s.jsx(y, {
            children: F
              ? s.jsx(Ve, {
                  py: 10,
                  children: s.jsx(j, {
                    color: "red.500",
                    fontFamily: '"Quicksand", sans-serif',
                    children:
                      "Không thể tải danh sách mẫu thiệp miễn phí. Vui lòng thử lại sau.",
                  }),
                })
              : s.jsx(Wt, {
                  dataLength: S.length,
                  next: U,
                  hasMore: k,
                  loader: s.jsx(Ve, {
                    py: 4,
                    children: s.jsx(lt, { size: "lg", color: "red.500" }),
                  }),
                  endMessage: s.jsx(Ve, {
                    py: 4,
                    children: s.jsx(j, {
                      color: "gray.500",
                      fontFamily: '"Quicksand", sans-serif',
                      fontStyle: "italic",
                      children:
                        S.length === 0
                          ? n
                            ? `Không tìm thấy mẫu thiệp miễn phí nào cho tag "${n}"`
                            : "Không có mẫu thiệp miễn phí nào"
                          : "Đã hiển thị tất cả mẫu thiệp miễn phí",
                    }),
                  }),
                  children: s.jsx(ze, {
                    templateColumns: {
                      base: "1fr",
                      sm: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    },
                    gap: { base: 4, md: 6 },
                    px: { base: 6, md: 0 },
                    children: S.map((W, Q) =>
                      s.jsx(
                        y,
                        {
                          className: "w-full max-w-[380px]",
                          children: s.jsx(At, {
                            template: W,
                            category: X.WEDDING,
                          }),
                        },
                        `free-${W.id}-${Q}`
                      )
                    ),
                  }),
                }),
          }),
        e === "vip" &&
          s.jsx(y, {
            children: V
              ? s.jsx(Ve, {
                  py: 10,
                  children: s.jsx(j, {
                    color: "red.500",
                    fontFamily: '"Quicksand", sans-serif',
                    children:
                      "Không thể tải danh sách mẫu thiệp VIP. Vui lòng thử lại sau.",
                  }),
                })
              : s.jsx(Wt, {
                  dataLength: f.length,
                  next: Z,
                  hasMore: P,
                  loader: s.jsx(Ve, {
                    py: 4,
                    children: s.jsx(lt, { size: "lg", color: "yellow.400" }),
                  }),
                  endMessage: s.jsx(Ve, {
                    py: 4,
                    children: s.jsx(j, {
                      color: "gray.500",
                      fontFamily: '"Quicksand", sans-serif',
                      fontStyle: "italic",
                      children:
                        f.length === 0
                          ? n
                            ? `Không tìm thấy mẫu thiệp VIP nào cho tag "${n}"`
                            : "Không có mẫu thiệp VIP nào"
                          : "Đã hiển thị tất cả mẫu thiệp VIP",
                    }),
                  }),
                  children: s.jsx(ze, {
                    templateColumns: {
                      base: "1fr",
                      sm: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    },
                    gap: { base: 4, md: 6 },
                    px: { base: 6, md: 0 },
                    children: f.map((W, Q) =>
                      s.jsx(
                        y,
                        {
                          className: "w-full max-w-[380px]",
                          children: s.jsx(At, {
                            template: W,
                            category: X.WEDDING,
                          }),
                        },
                        `vip-${W.id}-${Q}`
                      )
                    ),
                  }),
                }),
          }),
        e === "pro" &&
          s.jsx(y, {
            children: H
              ? s.jsx(Ve, {
                  py: 10,
                  children: s.jsx(j, {
                    color: "red.500",
                    fontFamily: '"Quicksand", sans-serif',
                    children:
                      "Không thể tải danh sách mẫu thiệp PRO. Vui lòng thử lại sau.",
                  }),
                })
              : s.jsx(Wt, {
                  dataLength: I.length,
                  next: q,
                  hasMore: C,
                  loader: s.jsx(Ve, {
                    py: 4,
                    children: s.jsx(lt, { size: "lg", color: "purple.500" }),
                  }),
                  endMessage: s.jsx(Ve, {
                    py: 4,
                    children: s.jsx(j, {
                      color: "gray.500",
                      fontFamily: '"Quicksand", sans-serif',
                      fontStyle: "italic",
                      children:
                        I.length === 0
                          ? n
                            ? `Không tìm thấy mẫu thiệp PRO nào cho tag "${n}"`
                            : "Không có mẫu thiệp PRO nào"
                          : "Đã hiển thị tất cả mẫu thiệp PRO",
                    }),
                  }),
                  children: s.jsx(ze, {
                    templateColumns: {
                      base: "1fr",
                      sm: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    },
                    gap: { base: 4, md: 6 },
                    px: { base: 6, md: 0 },
                    children: I.map((W, Q) =>
                      s.jsx(
                        y,
                        {
                          className: "w-full max-w-[380px]",
                          children: s.jsx(At, {
                            template: W,
                            category: X.WEDDING,
                          }),
                        },
                        `pro-${W.id}-${Q}`
                      )
                    ),
                  }),
                }),
          }),
      ],
    });
  },
  is = ["ĐIỆN TỬ", "ONLINE"],
  ml = () => {
    const [e, t] = p.useState(0),
      [n, a] = p.useState(""),
      o = Ut();
    return (
      p.useEffect(() => {
        let h;
        const l = is[e];
        let g = 0;
        const r = () => {
          g <= l.length
            ? (a(l.slice(0, g)), g++, (h = setTimeout(r, 150)))
            : (h = setTimeout(() => {
                t((m) => (m + 1) % is.length);
              }, 5e3));
        };
        return r(), () => clearTimeout(h);
      }, [e]),
      s.jsx(y, {
        className: "mt-[51px] pb-10 relative",
        children: s.jsx(y, {
          children: s.jsxs(y, {
            className:
              "relative h-[400px] sm:h-[600px] items-center justify-center text-center flex flex-col",
            py: 12,
            style: {
              backgroundImage: `url(${js})`,
              backgroundSize: o ? "initial" : "cover",
              backgroundOrigin: "content-box",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundPosition:
                window.innerWidth >= 640 ? "0% 35%" : "50% 30%",
            },
            children: [
              s.jsx(y, {
                style: {
                  backgroundColor: "rgb(0, 0, 0)",
                  opacity: 0.7,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  pointerEvents: "none",
                },
              }),
              s.jsx(je, {
                mx: "auto",
                direction: { base: "column", md: "row" },
                align: "center",
                justify: "space-between",
                position: "relative",
                children: s.jsxs(y, {
                  flex: 1,
                  className:
                    "md:min-w-[600px] min-w-[80%] text-center md:text-left flex justify-center flex-col items-center gap-5 px-5",
                  children: [
                    s.jsx(j, {
                      className: "font-semibold text-lg ",
                      style: {
                        fontSize: "26px",
                        color: "rgb(251, 65, 65)",
                        fontFamily: "Quicksand, sans-serif",
                      },
                      children: "MỜI CƯỚI THỜI 5.0",
                    }),
                    s.jsx("p", {
                      className:
                        "text-white text-[28px] md:text-[50px] uppercase font-extrabold",
                      style: { fontFamily: "Paytone One, sans-serif" },
                      children: "KHO GIAO DIỆN MẪU THIỆP CƯỚI ĐIỆN TỬ",
                    }),
                    s.jsxs(j, {
                      className:
                        "text-sm md:text-[30px] max-w-[80%] sm:max-w-[900px] text-center",
                      style: {
                        color: "#ffb5b5",
                        fontFamily: "Quicksand, sans-serif",
                      },
                      children: [
                        'Hãy lựa chọn cho mình 1 mẫu thiệp "Ưng ý nhất", cho đám cưới của bạn trở nên "Đặc Biệt" và "Đáng Nhớ" với mọi người. ',
                        s.jsx("span", {
                          className: "text-red-500",
                          children: "♥",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      })
    );
  };
function gl() {
  const e = R.c(2);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = s.jsx(J, {
        children: s.jsx("title", {
          children: "MIỄN PHÍ | Tạo Thiệp Cưới Online",
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsxs(s.Fragment, {
          children: [
            t,
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden",
              children: [
                s.jsx(at, {}),
                s.jsx(ml, {}),
                s.jsx(hl, {}),
                s.jsx(Ft, {}),
                s.jsx(ct, {}),
                s.jsx(zt, {}),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
const uo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: gl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function fl() {
  const e = R.c(28),
    [t, n] = p.useState();
  let a;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((a = []), (e[0] = a))
    : (a = e[0]);
  const [o, h] = p.useState(a),
    [l, g] = p.useState(0),
    [r, m] = p.useState(!0),
    [i, c] = p.useState(0);
  let d;
  e[1] !== l || e[2] !== t
    ? ((d = { tierAvailable: t, limit: 20, offset: l }),
      (e[1] = l),
      (e[2] = t),
      (e[3] = d))
    : (d = e[3]);
  const { data: u, isLoading: S, error: w } = rt(d);
  let f, v;
  e[4] !== u || e[5] !== l
    ? ((f = () => {
        var E;
        u &&
          (l === 0
            ? (h(u.catalogs || []), c(u.total || 0))
            : h((b) => [...b, ...(u.catalogs || [])]),
          m((((E = u.catalogs) == null ? void 0 : E.length) || 0) === 20));
      }),
      (v = [u, l, 20]),
      (e[4] = u),
      (e[5] = l),
      (e[6] = f),
      (e[7] = v))
    : ((f = e[6]), (v = e[7])),
    p.useEffect(f, v);
  let I;
  e[8] === Symbol.for("react.memo_cache_sentinel")
    ? ((I = () => {
        g(0), h([]), m(!0), c(0);
      }),
      (e[8] = I))
    : (I = e[8]);
  let x;
  e[9] !== t ? ((x = [t]), (e[9] = t), (e[10] = x)) : (x = e[10]),
    p.useEffect(I, x);
  let k;
  e[11] !== r || e[12] !== S
    ? ((k = () => {
        !S && r && g(ul);
      }),
      (e[11] = r),
      (e[12] = S),
      (e[13] = k))
    : (k = e[13]);
  const T = k;
  let P, z;
  e[14] === Symbol.for("react.memo_cache_sentinel")
    ? ((P = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Video Chuyên Nghiệp - Dịch Vụ Video Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Khám phá bộ sưu tập Video chuyên nghiệp với nhiều gói dịch vụ. Tạo Video độc đáo cho ngày trọng đại của bạn.",
          }),
        ],
      })),
      (z = s.jsx(dt, { showAllVideosLink: !0 })),
      (e[14] = P),
      (e[15] = z))
    : ((P = e[14]), (z = e[15]));
  let C;
  e[16] !== t
    ? ((C = s.jsx(ht, { selectedTier: t, onTierSelect: n })),
      (e[16] = t),
      (e[17] = C))
    : (C = e[17]);
  const O = S && l === 0;
  let _;
  e[18] !== o ||
  e[19] !== w ||
  e[20] !== T ||
  e[21] !== r ||
  e[22] !== O ||
  e[23] !== i
    ? ((_ = s.jsx(mt, {
        videos: o,
        isLoading: O,
        error: w,
        emptyMessage: "Không có video nào được tìm thấy",
        hasMore: r,
        onLoadMore: T,
        totalCount: i,
      })),
      (e[18] = o),
      (e[19] = w),
      (e[20] = T),
      (e[21] = r),
      (e[22] = O),
      (e[23] = i),
      (e[24] = _))
    : (_ = e[24]);
  let M;
  return (
    e[25] !== _ || e[26] !== C
      ? ((M = s.jsxs(gt, { children: [P, z, C, _] })),
        (e[25] = _),
        (e[26] = C),
        (e[27] = M))
      : (M = e[27]),
    M
  );
}
function ul(e) {
  return e + 20;
}
const xo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: fl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function xl() {
  const e = R.c(15),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { tierAvailable: t, category: Mt.ANNIVERSARY, limit: 50 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = rt(a);
  let g, r;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Video Kỷ Niệm Chuyên Nghiệp - Video Kỷ Niệm Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập video kỷ niệm chuyên nghiệp đẹp và ý nghĩa. Tạo video kỷ niệm độc đáo cho những khoảnh khắc đặc biệt.",
          }),
        ],
      })),
      (r = s.jsx(dt, { showAllVideosLink: !0 })),
      (e[2] = g),
      (e[3] = r))
    : ((g = e[2]), (r = e[3]));
  let m;
  e[4] !== t
    ? ((m = s.jsx(ht, { selectedTier: t, onTierSelect: n })),
      (e[4] = t),
      (e[5] = m))
    : (m = e[5]);
  let i;
  e[6] !== (o == null ? void 0 : o.catalogs)
    ? ((i = (o == null ? void 0 : o.catalogs) || []),
      (e[6] = o == null ? void 0 : o.catalogs),
      (e[7] = i))
    : (i = e[7]);
  let c;
  e[8] !== l || e[9] !== h || e[10] !== i
    ? ((c = s.jsx(mt, {
        videos: i,
        isLoading: h,
        error: l,
        emptyMessage: "Không có video kỷ niệm nào được tìm thấy",
      })),
      (e[8] = l),
      (e[9] = h),
      (e[10] = i),
      (e[11] = c))
    : (c = e[11]);
  let d;
  return (
    e[12] !== m || e[13] !== c
      ? ((d = s.jsxs(gt, { children: [g, r, m, c] })),
        (e[12] = m),
        (e[13] = c),
        (e[14] = d))
      : (d = e[14]),
    d
  );
}
const po = Object.freeze(
  Object.defineProperty({ __proto__: null, default: xl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function pl() {
  const e = R.c(15),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { tierAvailable: t, category: Mt.BIRTHDAY, limit: 50 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = rt(a);
  let g, r;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Video Sinh Nhật Chuyên Nghiệp - Video Sinh Nhật Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập video sinh nhật chuyên nghiệp đẹp và vui nhộn. Tạo video sinh nhật độc đáo cho người thân yêu.",
          }),
        ],
      })),
      (r = s.jsx(dt, { showAllVideosLink: !0 })),
      (e[2] = g),
      (e[3] = r))
    : ((g = e[2]), (r = e[3]));
  let m;
  e[4] !== t
    ? ((m = s.jsx(ht, { selectedTier: t, onTierSelect: n })),
      (e[4] = t),
      (e[5] = m))
    : (m = e[5]);
  let i;
  e[6] !== (o == null ? void 0 : o.catalogs)
    ? ((i = (o == null ? void 0 : o.catalogs) || []),
      (e[6] = o == null ? void 0 : o.catalogs),
      (e[7] = i))
    : (i = e[7]);
  let c;
  e[8] !== l || e[9] !== h || e[10] !== i
    ? ((c = s.jsx(mt, {
        videos: i,
        isLoading: h,
        error: l,
        emptyMessage: "Không có video sinh nhật nào được tìm thấy",
      })),
      (e[8] = l),
      (e[9] = h),
      (e[10] = i),
      (e[11] = c))
    : (c = e[11]);
  let d;
  return (
    e[12] !== m || e[13] !== c
      ? ((d = s.jsxs(gt, { children: [g, r, m, c] })),
        (e[12] = m),
        (e[13] = c),
        (e[14] = d))
      : (d = e[14]),
    d
  );
}
const bo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: pl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function bl() {
  const e = R.c(15),
    [t, n] = p.useState();
  let a;
  e[0] !== t
    ? ((a = { tierAvailable: t, category: Mt.EVENT, limit: 50 }),
      (e[0] = t),
      (e[1] = a))
    : (a = e[1]);
  const { data: o, isLoading: h, error: l } = rt(a);
  let g, r;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((g = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Video Sự Kiện Chuyên Nghiệp - Video Sự Kiện Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập video sự kiện chuyên nghiệp đẹp và ấn tượng. Tạo video sự kiện độc đáo cho các dịp đặc biệt.",
          }),
        ],
      })),
      (r = s.jsx(dt, { showAllVideosLink: !0 })),
      (e[2] = g),
      (e[3] = r))
    : ((g = e[2]), (r = e[3]));
  let m;
  e[4] !== t
    ? ((m = s.jsx(ht, { selectedTier: t, onTierSelect: n })),
      (e[4] = t),
      (e[5] = m))
    : (m = e[5]);
  let i;
  e[6] !== (o == null ? void 0 : o.catalogs)
    ? ((i = (o == null ? void 0 : o.catalogs) || []),
      (e[6] = o == null ? void 0 : o.catalogs),
      (e[7] = i))
    : (i = e[7]);
  let c;
  e[8] !== l || e[9] !== h || e[10] !== i
    ? ((c = s.jsx(mt, {
        videos: i,
        isLoading: h,
        error: l,
        emptyMessage: "Không có video sự kiện nào được tìm thấy",
      })),
      (e[8] = l),
      (e[9] = h),
      (e[10] = i),
      (e[11] = c))
    : (c = e[11]);
  let d;
  return (
    e[12] !== m || e[13] !== c
      ? ((d = s.jsxs(gt, { children: [g, r, m, c] })),
        (e[12] = m),
        (e[13] = c),
        (e[14] = d))
      : (d = e[14]),
    d
  );
}
const jo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: bl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function jl() {
  const e = R.c(28),
    [t, n] = p.useState();
  let a;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((a = []), (e[0] = a))
    : (a = e[0]);
  const [o, h] = p.useState(a),
    [l, g] = p.useState(0),
    [r, m] = p.useState(!0),
    [i, c] = p.useState(0);
  let d;
  e[1] !== l || e[2] !== t
    ? ((d = { tierAvailable: t, category: Mt.WEDDING, limit: 20, offset: l }),
      (e[1] = l),
      (e[2] = t),
      (e[3] = d))
    : (d = e[3]);
  const { data: u, isLoading: S, error: w } = rt(d);
  let f, v;
  e[4] !== u || e[5] !== l
    ? ((f = () => {
        var E;
        u &&
          (l === 0
            ? (h(u.catalogs || []), c(u.total || 0))
            : h((b) => [...b, ...(u.catalogs || [])]),
          m((((E = u.catalogs) == null ? void 0 : E.length) || 0) === 20));
      }),
      (v = [u, l, 20]),
      (e[4] = u),
      (e[5] = l),
      (e[6] = f),
      (e[7] = v))
    : ((f = e[6]), (v = e[7])),
    p.useEffect(f, v);
  let I;
  e[8] === Symbol.for("react.memo_cache_sentinel")
    ? ((I = () => {
        g(0), h([]), m(!0), c(0);
      }),
      (e[8] = I))
    : (I = e[8]);
  let x;
  e[9] !== t ? ((x = [t]), (e[9] = t), (e[10] = x)) : (x = e[10]),
    p.useEffect(I, x);
  let k;
  e[11] !== r || e[12] !== S
    ? ((k = () => {
        !S && r && g(yl);
      }),
      (e[11] = r),
      (e[12] = S),
      (e[13] = k))
    : (k = e[13]);
  const T = k;
  let P, z;
  e[14] === Symbol.for("react.memo_cache_sentinel")
    ? ((P = s.jsxs(J, {
        children: [
          s.jsx("title", {
            children: "Video Chuyên Nghiệp - Thiệp Mời Cưới Đẹp",
          }),
          s.jsx("meta", {
            name: "description",
            content:
              "Bộ sưu tập Video chuyên nghiệp đẹp và sang trọng. Tạo Video độc đáo cho ngày trọng đại của bạn.",
          }),
        ],
      })),
      (z = s.jsx(dt, { showAllVideosLink: !0 })),
      (e[14] = P),
      (e[15] = z))
    : ((P = e[14]), (z = e[15]));
  let C;
  e[16] !== t
    ? ((C = s.jsx(ht, { selectedTier: t, onTierSelect: n })),
      (e[16] = t),
      (e[17] = C))
    : (C = e[17]);
  const O = S && l === 0;
  let _;
  e[18] !== o ||
  e[19] !== w ||
  e[20] !== T ||
  e[21] !== r ||
  e[22] !== O ||
  e[23] !== i
    ? ((_ = s.jsx(mt, {
        videos: o,
        isLoading: O,
        error: w,
        emptyMessage: "Không có Video nào được tìm thấy",
        hasMore: r,
        onLoadMore: T,
        totalCount: i,
      })),
      (e[18] = o),
      (e[19] = w),
      (e[20] = T),
      (e[21] = r),
      (e[22] = O),
      (e[23] = i),
      (e[24] = _))
    : (_ = e[24]);
  let M;
  return (
    e[25] !== _ || e[26] !== C
      ? ((M = s.jsxs(gt, { children: [P, z, C, _] })),
        (e[25] = _),
        (e[26] = C),
        (e[27] = M))
      : (M = e[27]),
    M
  );
}
function yl(e) {
  return e + 20;
}
const yo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: jl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Sl() {
  var re, ae, ce, de, fe, ue, oe, xe, ie, me, le, pe, Ne;
  const e = R.c(65),
    { id: t } = _t(),
    [n, a] = p.useState(!1),
    o = t ? parseInt(t, 10) : NaN,
    h = !isNaN(o) && o > 0,
    { data: l, isLoading: g, error: r } = nn(h ? o : 0);
  let m, i;
  if (
    (e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = () => {
          Qe.getItem("page-password-verified") === "true" && a(!0);
        }),
        (i = []),
        (e[0] = m),
        (e[1] = i))
      : ((m = e[0]), (i = e[1])),
    p.useEffect(m, i),
    !h)
  ) {
    let Y;
    return (
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s.jsx(Ct, { to: Be.PUBLIC.NOT_FOUND, replace: !0 })),
          (e[2] = Y))
        : (Y = e[2]),
      Y
    );
  }
  if (r || (!g && !l)) {
    let Y;
    return (
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s.jsx(Ct, { to: Be.PUBLIC.NOT_FOUND, replace: !0 })),
          (e[3] = Y))
        : (Y = e[3]),
      Y
    );
  }
  if (g) {
    let Y;
    return (
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s.jsx(Pt, {
            message: "Đang tải trang thiệp...",
            submessage: "Đang chuẩn bị nội dung cho bạn",
          })),
          (e[4] = Y))
        : (Y = e[4]),
      Y
    );
  }
  if (
    ((re = l == null ? void 0 : l.seoSettings) == null
      ? void 0
      : re.password) &&
    l.seoSettings.password.trim() !== "" &&
    !n &&
    (ae = l == null ? void 0 : l.seoSettings) != null &&
    ae.password
  ) {
    let Y;
    e[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((Y = () => a(!0)), (e[5] = Y))
      : (Y = e[5]);
    let ye;
    return (
      e[6] !== l.seoSettings.password
        ? ((ye = s.jsx(It, {
            expectedPassword: l.seoSettings.password,
            onPasswordCorrect: Y,
            title: "Trang được bảo vệ",
            description: "Vui lòng nhập mật khẩu để xem nội dung.",
          })),
          (e[6] = l.seoSettings.password),
          (e[7] = ye))
        : (ye = e[7]),
      ye
    );
  }
  let d;
  e[8] !== (l == null ? void 0 : l.id)
    ? ((d = (ce = l == null ? void 0 : l.id) == null ? void 0 : ce.toString()),
      (e[8] = l == null ? void 0 : l.id),
      (e[9] = d))
    : (d = e[9]);
  const u = d,
    S =
      ((de = l == null ? void 0 : l.seoSettings) == null ? void 0 : de.title) ||
      (l == null ? void 0 : l.title) ||
      "Wedding Page";
  let w;
  e[10] !== S
    ? ((w = s.jsx("title", { children: S })), (e[10] = S), (e[11] = w))
    : (w = e[11]);
  let f;
  e[12] !== l
    ? ((f =
        ((fe = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : fe.description) &&
        s.jsx("meta", {
          name: "description",
          content: l.seoSettings.description,
        })),
      (e[12] = l),
      (e[13] = f))
    : (f = e[13]);
  let v;
  e[14] !== l
    ? ((v =
        ((ue = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : ue.keywords) &&
        l.seoSettings.keywords.length > 0 &&
        s.jsx("meta", {
          name: "keywords",
          content: l.seoSettings.keywords.join(", "),
        })),
      (e[14] = l),
      (e[15] = v))
    : (v = e[15]);
  const I =
    ((oe = l == null ? void 0 : l.seoSettings) == null ? void 0 : oe.title) ||
    (l == null ? void 0 : l.title) ||
    "Wedding Page";
  let x;
  e[16] !== I
    ? ((x = s.jsx("meta", { property: "og:title", content: I })),
      (e[16] = I),
      (e[17] = x))
    : (x = e[17]);
  let k;
  e[18] !== l
    ? ((k =
        ((xe = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : xe.description) &&
        s.jsx("meta", {
          property: "og:description",
          content: l.seoSettings.description,
        })),
      (e[18] = l),
      (e[19] = k))
    : (k = e[19]);
  let T;
  e[20] !== l
    ? ((T =
        ((ie = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : ie.imageUrl) &&
        s.jsx("meta", {
          property: "og:image",
          content: l.seoSettings.imageUrl,
        })),
      (e[20] = l),
      (e[21] = T))
    : (T = e[21]);
  let P, z, C;
  e[22] === Symbol.for("react.memo_cache_sentinel")
    ? ((P = s.jsx("meta", { property: "og:type", content: "website" })),
      (z = s.jsx("meta", {
        property: "og:url",
        content: window.location.href,
      })),
      (C = s.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image",
      })),
      (e[22] = P),
      (e[23] = z),
      (e[24] = C))
    : ((P = e[22]), (z = e[23]), (C = e[24]));
  const O =
    ((me = l == null ? void 0 : l.seoSettings) == null ? void 0 : me.title) ||
    (l == null ? void 0 : l.title) ||
    "Wedding Page";
  let _;
  e[25] !== O
    ? ((_ = s.jsx("meta", { name: "twitter:title", content: O })),
      (e[25] = O),
      (e[26] = _))
    : (_ = e[26]);
  let M;
  e[27] !== l
    ? ((M =
        ((le = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : le.description) &&
        s.jsx("meta", {
          name: "twitter:description",
          content: l.seoSettings.description,
        })),
      (e[27] = l),
      (e[28] = M))
    : (M = e[28]);
  let E;
  e[29] !== l
    ? ((E =
        ((pe = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : pe.imageUrl) &&
        s.jsx("meta", {
          name: "twitter:image",
          content: l.seoSettings.imageUrl,
        })),
      (e[29] = l),
      (e[30] = E))
    : (E = e[30]);
  let b;
  e[31] !== l
    ? ((b =
        ((Ne = l == null ? void 0 : l.seoSettings) == null
          ? void 0
          : Ne.favoriteIconUrl) &&
        s.jsx("link", { rel: "icon", href: l.seoSettings.favoriteIconUrl })),
      (e[31] = l),
      (e[32] = b))
    : (b = e[32]);
  let N;
  e[33] !== T ||
  e[34] !== _ ||
  e[35] !== M ||
  e[36] !== E ||
  e[37] !== b ||
  e[38] !== w ||
  e[39] !== f ||
  e[40] !== v ||
  e[41] !== x ||
  e[42] !== k
    ? ((N = s.jsxs(J, { children: [w, f, v, x, k, T, P, z, C, _, M, E, b] })),
      (e[33] = T),
      (e[34] = _),
      (e[35] = M),
      (e[36] = E),
      (e[37] = b),
      (e[38] = w),
      (e[39] = f),
      (e[40] = v),
      (e[41] = x),
      (e[42] = k),
      (e[43] = N))
    : (N = e[43]);
  let F;
  e[44] !== l
    ? ((F =
        l != null && l.content
          ? ke.decompress(ke.decodeBase64(l.content))
          : void 0),
      (e[44] = l),
      (e[45] = F))
    : (F = e[45]);
  let L;
  e[46] !== l
    ? ((L =
        l != null && l.contentMobile
          ? ke.decompress(ke.decodeBase64(l.contentMobile))
          : void 0),
      (e[46] = l),
      (e[47] = L))
    : (L = e[47]);
  const $ = l == null ? void 0 : l.effects,
    V = l == null ? void 0 : l.audioSettings,
    A = l == null ? void 0 : l.notificationSettings,
    D = l == null ? void 0 : l.customEffects,
    H = l == null ? void 0 : l.isLogo,
    U = l == null ? void 0 : l.isCard,
    Z = l == null ? void 0 : l.fontMap;
  let q;
  e[48] !== F ||
  e[49] !== L ||
  e[50] !== $ ||
  e[51] !== V ||
  e[52] !== A ||
  e[53] !== D ||
  e[54] !== H ||
  e[55] !== U ||
  e[56] !== Z ||
  e[57] !== u
    ? ((q = s.jsx(kt, {
        id: u,
        content: F,
        mobileContent: L,
        className: "view-page",
        effects: $,
        audioSettings: V,
        notificationSettings: A,
        customEffects: D,
        isLogo: H,
        isCard: U,
        fontMap: Z,
      })),
      (e[48] = F),
      (e[49] = L),
      (e[50] = $),
      (e[51] = V),
      (e[52] = A),
      (e[53] = D),
      (e[54] = H),
      (e[55] = U),
      (e[56] = Z),
      (e[57] = u),
      (e[58] = q))
    : (q = e[58]);
  let W;
  e[59] !== l || e[60] !== q
    ? ((W = s.jsx(Tt, { templateData: l, children: q })),
      (e[59] = l),
      (e[60] = q),
      (e[61] = W))
    : (W = e[61]);
  let Q;
  return (
    e[62] !== N || e[63] !== W
      ? ((Q = s.jsxs(s.Fragment, { children: [N, W] })),
        (e[62] = N),
        (e[63] = W),
        (e[64] = Q))
      : (Q = e[64]),
    Q
  );
}
const So = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Sl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wl = () => {
    const e = R.c(19),
      { open: t, onOpen: n, onClose: a } = vt(),
      { open: o, onOpen: h, onClose: l } = vt(),
      { open: g, onOpen: r, onClose: m } = vt();
    let i;
    e[0] !== l || e[1] !== o
      ? ((i = s.jsx(Nn, { open: o, onClose: l })),
        (e[0] = l),
        (e[1] = o),
        (e[2] = i))
      : (i = e[2]);
    let c;
    e[3] !== a || e[4] !== h || e[5] !== t
      ? ((c = s.jsx(_n, { open: t, onClose: a, onOpenGuest: h })),
        (e[3] = a),
        (e[4] = h),
        (e[5] = t),
        (e[6] = c))
      : (c = e[6]);
    let d;
    e[7] !== m || e[8] !== g
      ? ((d = s.jsx(Tn, { isOpen: g, onClose: m })),
        (e[7] = m),
        (e[8] = g),
        (e[9] = d))
      : (d = e[9]);
    let u;
    e[10] !== r || e[11] !== h || e[12] !== n
      ? ((u = s.jsx(kn, {
          onOpenInvitation: n,
          onOpenGuest: h,
          onOpenBillExport: r,
          showAdminOption: !1,
          showAgentOption: !1,
        })),
        (e[10] = r),
        (e[11] = h),
        (e[12] = n),
        (e[13] = u))
      : (u = e[13]);
    let S;
    return (
      e[14] !== i || e[15] !== c || e[16] !== d || e[17] !== u
        ? ((S = s.jsxs(s.Fragment, { children: [i, c, d, u] })),
          (e[14] = i),
          (e[15] = c),
          (e[16] = d),
          (e[17] = u),
          (e[18] = S))
        : (S = e[18]),
      S
    );
  },
  vl = (e) => {
    var Z;
    const t = R.c(44),
      {
        templateId: n,
        viewportSettings: a,
        currentPlatform: o,
        category: h,
        type: l,
        onPlatformChange: g,
      } = e,
      { open: r, onOpen: m, onClose: i } = vt(),
      [c, d] = p.useState(!1),
      [u, S] = p.useState(!1),
      w = ds(gs),
      f = w && ((Z = w == null ? void 0 : w.user) == null ? void 0 : Z.email),
      v = Bt();
    let I, x;
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = () => {
          const q = () => {
            S(Vt());
          };
          return (
            q(),
            window.addEventListener("resize", q),
            () => window.removeEventListener("resize", q)
          );
        }),
        (x = []),
        (t[0] = I),
        (t[1] = x))
      : ((I = t[0]), (x = t[1])),
      p.useEffect(I, x);
    let k;
    t[2] !== f || t[3] !== m
      ? ((k = () => {
          if (!f) {
            m();
            return;
          }
          d(!0);
        }),
        (t[2] = f),
        (t[3] = m),
        (t[4] = k))
      : (k = t[4]);
    const T = k;
    let P;
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((P = () => {
          d(!1);
        }),
        (t[5] = P))
      : (P = t[5]);
    const z = P;
    let C;
    t[6] !== u || t[7] !== a
      ? ((C = u || (a && Rt(a))), (t[6] = u), (t[7] = a), (t[8] = C))
      : (C = t[8]);
    const O = C;
    let _;
    t[9] !== v ? ((_ = () => v("/")), (t[9] = v), (t[10] = _)) : (_ = t[10]);
    let M, E;
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((M = s.jsx("img", {
          src: "/logo.png",
          className: "w-[39.84px] h-[39.84px]",
          alt: "meWedding Logo",
        })),
        (E = s.jsx("p", {
          style: {
            fontFamily: '"Dancing Script", cursive',
            fontWeight: "bold",
            lineHeight: 1.6,
            color: "rgb(251, 65, 65)",
            fontSize: "25px",
          },
          className: "",
          children: "meWedding",
        })),
        (t[11] = M),
        (t[12] = E))
      : ((M = t[11]), (E = t[12]));
    let b;
    t[13] !== _
      ? ((b = s.jsxs(y, {
          className: "flex items-center gap-1 cursor-pointer",
          onClick: _,
          children: [M, E],
        })),
        (t[13] = _),
        (t[14] = b))
      : (b = t[14]);
    let N;
    t[15] !== o || t[16] !== g || t[17] !== O
      ? ((N =
          !O &&
          s.jsxs(we, {
            gap: 3,
            className: "platform-switcher hidden md:flex",
            children: [
              s.jsx(Oe, {
                variant: "ghost",
                onClick: () => g("desktop"),
                title: "Desktop - View desktop version",
                _hover: { transform: "scale(1.1)" },
                transition: "all 0.2s ease-in-out",
                size: "lg",
                children: s.jsx(Js, {
                  size: 28,
                  color: o === "desktop" ? "#EF4444" : "#9CA3AF",
                }),
              }),
              s.jsx(Oe, {
                variant: "ghost",
                onClick: () => g("mobile"),
                title: "Mobile - View mobile version",
                _hover: { transform: "scale(1.1)" },
                transition: "all 0.2s ease-in-out",
                size: "lg",
                children: s.jsx(en, {
                  size: 28,
                  color: o === "mobile" ? "#EF4444" : "#9CA3AF",
                }),
              }),
            ],
          })),
        (t[15] = o),
        (t[16] = g),
        (t[17] = O),
        (t[18] = N))
      : (N = t[18]);
    let F;
    t[19] === Symbol.for("react.memo_cache_sentinel")
      ? ((F = { bg: "red.600" }), (t[19] = F))
      : (F = t[19]);
    let L;
    t[20] !== T
      ? ((L = s.jsx(ee, {
          bg: "red.500",
          color: "white",
          borderRadius: "2xl",
          height: 8,
          onClick: T,
          fontWeight: "semibold",
          fontFamily: '"Quicksand", sans-serif',
          _hover: F,
          size: "sm",
          children: "Tạo thiệp",
        })),
        (t[20] = T),
        (t[21] = L))
      : (L = t[21]);
    let $;
    t[22] !== f || t[23] !== m
      ? (($ = f
          ? s.jsx(wl, {})
          : s.jsx(ee, {
              bg: "gray.100",
              color: "gray.700",
              borderRadius: "2xl",
              height: 8,
              onClick: m,
              fontWeight: "semibold",
              fontFamily: '"Quicksand", sans-serif',
              _hover: { bg: "gray.200" },
              size: "sm",
              children: "Đăng nhập",
            })),
        (t[22] = f),
        (t[23] = m),
        (t[24] = $))
      : ($ = t[24]);
    let V;
    t[25] !== N || t[26] !== L || t[27] !== $
      ? ((V = s.jsxs(we, { gap: 3, children: [N, L, $] })),
        (t[25] = N),
        (t[26] = L),
        (t[27] = $),
        (t[28] = V))
      : (V = t[28]);
    let A;
    t[29] !== V || t[30] !== b
      ? ((A = s.jsx(y, {
          className:
            "view-template-header fixed left-0 right-0 top-0 z-[99999] bg-white border-b border-gray-200 shadow-sm",
          children: s.jsx(Ee, {
            maxW: "6xl",
            className: "h-[60px]",
            children: s.jsxs(y, {
              className: "flex justify-between items-center h-full",
              children: [b, V],
            }),
          }),
        })),
        (t[29] = V),
        (t[30] = b),
        (t[31] = A))
      : (A = t[31]);
    let D;
    t[32] !== i || t[33] !== r
      ? ((D = s.jsx(ps, { isOpen: r, onClose: i })),
        (t[32] = i),
        (t[33] = r),
        (t[34] = D))
      : (D = t[34]);
    let H;
    t[35] !== h || t[36] !== c || t[37] !== n || t[38] !== l
      ? ((H = s.jsx(Cn, {
          isOpen: c,
          onClose: z,
          templateId: n,
          pageType: l,
          category: h,
        })),
        (t[35] = h),
        (t[36] = c),
        (t[37] = n),
        (t[38] = l),
        (t[39] = H))
      : (H = t[39]);
    let U;
    return (
      t[40] !== A || t[41] !== D || t[42] !== H
        ? ((U = s.jsxs(s.Fragment, { children: [A, D, H] })),
          (t[40] = A),
          (t[41] = D),
          (t[42] = H),
          (t[43] = U))
        : (U = t[43]),
      U
    );
  },
  Cl = (e) => {
    const t = R.c(38),
      {
        content: n,
        mobileContent: a,
        effects: o,
        audioSettings: h,
        notificationSettings: l,
        customHtmlSettings: g,
        customEffects: r,
        viewportSettings: m,
        forcePlatform: i,
        templateId: c,
        fontMap: d,
        isLogo: u,
        isCard: S,
      } = e,
      [w, f] = p.useState(m);
    let v, I;
    t[0] !== i || t[1] !== m
      ? ((v = () => {
          if (!i || !m) {
            f(m);
            return;
          }
          const b = { ...m, mobileOnly: i === "mobile" };
          i === "desktop" && (b.mobileOnly = !1), f(b);
        }),
        (I = [i, m]),
        (t[0] = i),
        (t[1] = m),
        (t[2] = v),
        (t[3] = I))
      : ((v = t[2]), (I = t[3])),
      p.useEffect(v, I);
    let x;
    e: {
      if (!i) {
        let b;
        t[4] !== n || t[5] !== a
          ? ((b = { content: n, mobileContent: a }),
            (t[4] = n),
            (t[5] = a),
            (t[6] = b))
          : (b = t[6]),
          (x = b);
        break e;
      }
      if (i === "mobile") {
        const b = a || n,
          N = a || n;
        let F;
        t[7] !== b || t[8] !== N
          ? ((F = { content: b, mobileContent: N }),
            (t[7] = b),
            (t[8] = N),
            (t[9] = F))
          : (F = t[9]),
          (x = F);
      } else {
        let b;
        t[10] !== n
          ? ((b = { content: n, mobileContent: void 0 }),
            (t[10] = n),
            (t[11] = b))
          : (b = t[11]),
          (x = b);
      }
    }
    const k = x;
    let T;
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = Date.now()), (t[12] = T))
      : (T = t[12]);
    const P = `viewport-${i || "auto"}-${T}`;
    let z;
    t[13] !== w
      ? ((z = { pageSettings: w }), (t[13] = w), (t[14] = z))
      : (z = t[14]);
    let C;
    t[15] !== c
      ? ((C = c == null ? void 0 : c.toString()), (t[15] = c), (t[16] = C))
      : (C = t[16]);
    let O;
    t[17] !== h ||
    t[18] !== k.content ||
    t[19] !== k.mobileContent ||
    t[20] !== r ||
    t[21] !== g ||
    t[22] !== o ||
    t[23] !== d ||
    t[24] !== S ||
    t[25] !== u ||
    t[26] !== l ||
    t[27] !== C
      ? ((O = s.jsx(kt, {
          id: C,
          content: k.content,
          mobileContent: k.mobileContent,
          isLogo: u,
          isCard: S,
          effects: o,
          audioSettings: h,
          notificationSettings: l,
          customHtmlSettings: g,
          customEffects: r,
          fontMap: d,
        })),
        (t[17] = h),
        (t[18] = k.content),
        (t[19] = k.mobileContent),
        (t[20] = r),
        (t[21] = g),
        (t[22] = o),
        (t[23] = d),
        (t[24] = S),
        (t[25] = u),
        (t[26] = l),
        (t[27] = C),
        (t[28] = O))
      : (O = t[28]);
    let _;
    t[29] !== O || t[30] !== c
      ? ((_ = s.jsx(ms, { templateId: c, children: O })),
        (t[29] = O),
        (t[30] = c),
        (t[31] = _))
      : (_ = t[31]);
    let M;
    t[32] !== z || t[33] !== _
      ? ((M = s.jsx(Tt, { templateData: z, children: _ })),
        (t[32] = z),
        (t[33] = _),
        (t[34] = M))
      : (M = t[34]);
    let E;
    return (
      t[35] !== M || t[36] !== P
        ? ((E = s.jsx("div", { children: M }, P)),
          (t[35] = M),
          (t[36] = P),
          (t[37] = E))
        : (E = t[37]),
      E
    );
  };
function Nl() {
  var Ne, Y, ye, te, Se, be, Te, ve, _e, se, Pe, he;
  const e = R.c(82),
    { id: t } = _t(),
    [n, a] = p.useState(!1),
    [o, h] = p.useState("desktop"),
    l = t ? parseInt(t, 10) : NaN,
    g = !isNaN(l) && l > 0,
    { data: r, isLoading: m, error: i } = gn(g ? l : 0);
  let c;
  e[0] !== r
    ? ((c = () => {
        if (typeof window < "u") {
          const B = Vt(),
            Me = window.innerWidth,
            Ke = r != null && r.pageSettings ? ln(r.pageSettings) : 960;
          (r != null && r.pageSettings ? Rt(r.pageSettings) : !1) ||
          B ||
          Me <= Ke
            ? h("mobile")
            : h("desktop");
        }
      }),
      (e[0] = r),
      (e[1] = c))
    : (c = e[1]);
  const d = r == null ? void 0 : r.pageSettings;
  let u;
  e[2] !== d ? ((u = [d]), (e[2] = d), (e[3] = u)) : (u = e[3]),
    p.useEffect(c, u);
  let S, w;
  e[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = () => {
        Qe.getItem("template-password-verified") === "true" && a(!0);
      }),
      (w = []),
      (e[4] = S),
      (e[5] = w))
    : ((S = e[4]), (w = e[5])),
    p.useEffect(S, w);
  let f;
  e[6] !== r
    ? ((f = (B) => {
        (B === "desktop" &&
          r != null &&
          r.pageSettings &&
          Rt(r.pageSettings)) ||
          (B === "desktop" && Vt()) ||
          h(B);
      }),
      (e[6] = r),
      (e[7] = f))
    : (f = e[7]);
  const v = f;
  if (!g) {
    let B;
    return (
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s.jsx(Ct, { to: Be.PUBLIC.NOT_FOUND, replace: !0 })),
          (e[8] = B))
        : (B = e[8]),
      B
    );
  }
  if (i || (!m && !r)) {
    let B;
    return (
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s.jsx(Ct, { to: Be.PUBLIC.NOT_FOUND, replace: !0 })),
          (e[9] = B))
        : (B = e[9]),
      B
    );
  }
  if (m) {
    let B;
    return (
      e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s.jsx(Pt, {
            message: "Đang tải mẫu thiệp...",
            submessage: "Đang chuẩn bị nội dung cho bạn",
          })),
          (e[10] = B))
        : (B = e[10]),
      B
    );
  }
  if (
    ((Ne = r == null ? void 0 : r.seoSettings) == null
      ? void 0
      : Ne.password) &&
    r.seoSettings.password.trim() !== "" &&
    !n &&
    (Y = r == null ? void 0 : r.seoSettings) != null &&
    Y.password
  ) {
    let B;
    e[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((B = () => {
          a(!0), Qe.setItem("template-password-verified", "true");
        }),
        (e[11] = B))
      : (B = e[11]);
    let Me;
    return (
      e[12] !== r.seoSettings.password
        ? ((Me = s.jsx(It, {
            expectedPassword: r.seoSettings.password,
            onPasswordCorrect: B,
            title: "Template được bảo vệ",
            description: "Vui lòng nhập mật khẩu để xem template.",
          })),
          (e[12] = r.seoSettings.password),
          (e[13] = Me))
        : (Me = e[13]),
      Me
    );
  }
  const x =
    ((ye = r == null ? void 0 : r.seoSettings) == null ? void 0 : ye.title) ||
    (r == null ? void 0 : r.name) ||
    "Template Preview";
  let k;
  e[14] !== x
    ? ((k = s.jsx("title", { children: x })), (e[14] = x), (e[15] = k))
    : (k = e[15]);
  let T;
  e[16] !== r
    ? ((T =
        ((te = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : te.description) &&
        s.jsx("meta", {
          name: "description",
          content: r.seoSettings.description,
        })),
      (e[16] = r),
      (e[17] = T))
    : (T = e[17]);
  let P;
  e[18] !== r
    ? ((P =
        ((Se = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : Se.keywords) &&
        r.seoSettings.keywords.length > 0 &&
        s.jsx("meta", {
          name: "keywords",
          content: r.seoSettings.keywords.join(", "),
        })),
      (e[18] = r),
      (e[19] = P))
    : (P = e[19]);
  const z =
    ((be = r == null ? void 0 : r.seoSettings) == null ? void 0 : be.title) ||
    (r == null ? void 0 : r.name) ||
    "Template Preview";
  let C;
  e[20] !== z
    ? ((C = s.jsx("meta", { property: "og:title", content: z })),
      (e[20] = z),
      (e[21] = C))
    : (C = e[21]);
  let O;
  e[22] !== r
    ? ((O =
        ((Te = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : Te.description) &&
        s.jsx("meta", {
          property: "og:description",
          content: r.seoSettings.description,
        })),
      (e[22] = r),
      (e[23] = O))
    : (O = e[23]);
  let _;
  e[24] !== r
    ? ((_ =
        ((ve = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : ve.imageUrl) &&
        s.jsx("meta", {
          property: "og:image",
          content: r.seoSettings.imageUrl,
        })),
      (e[24] = r),
      (e[25] = _))
    : (_ = e[25]);
  let M, E, b;
  e[26] === Symbol.for("react.memo_cache_sentinel")
    ? ((M = s.jsx("meta", { property: "og:type", content: "website" })),
      (E = s.jsx("meta", {
        property: "og:url",
        content: window.location.href,
      })),
      (b = s.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image",
      })),
      (e[26] = M),
      (e[27] = E),
      (e[28] = b))
    : ((M = e[26]), (E = e[27]), (b = e[28]));
  const N =
    ((_e = r == null ? void 0 : r.seoSettings) == null ? void 0 : _e.title) ||
    (r == null ? void 0 : r.name) ||
    "Template Preview";
  let F;
  e[29] !== N
    ? ((F = s.jsx("meta", { name: "twitter:title", content: N })),
      (e[29] = N),
      (e[30] = F))
    : (F = e[30]);
  let L;
  e[31] !== r
    ? ((L =
        ((se = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : se.description) &&
        s.jsx("meta", {
          name: "twitter:description",
          content: r.seoSettings.description,
        })),
      (e[31] = r),
      (e[32] = L))
    : (L = e[32]);
  let $;
  e[33] !== r
    ? (($ =
        ((Pe = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : Pe.imageUrl) &&
        s.jsx("meta", {
          name: "twitter:image",
          content: r.seoSettings.imageUrl,
        })),
      (e[33] = r),
      (e[34] = $))
    : ($ = e[34]);
  let V;
  e[35] !== r
    ? ((V =
        ((he = r == null ? void 0 : r.seoSettings) == null
          ? void 0
          : he.favoriteIconUrl) &&
        s.jsx("link", { rel: "icon", href: r.seoSettings.favoriteIconUrl })),
      (e[35] = r),
      (e[36] = V))
    : (V = e[36]);
  let A;
  e[37] !== C ||
  e[38] !== O ||
  e[39] !== _ ||
  e[40] !== F ||
  e[41] !== L ||
  e[42] !== $ ||
  e[43] !== V ||
  e[44] !== k ||
  e[45] !== T ||
  e[46] !== P
    ? ((A = s.jsxs(J, { children: [k, T, P, C, O, _, M, E, b, F, L, $, V] })),
      (e[37] = C),
      (e[38] = O),
      (e[39] = _),
      (e[40] = F),
      (e[41] = L),
      (e[42] = $),
      (e[43] = V),
      (e[44] = k),
      (e[45] = T),
      (e[46] = P),
      (e[47] = A))
    : (A = e[47]);
  const D = r == null ? void 0 : r.pageSettings,
    H = (r == null ? void 0 : r.category) || X.WEDDING,
    U =
      r != null && r.isCard
        ? $t.CARD
        : r != null && r.isLogo
        ? $t.LOGO
        : $t.NORMAL;
  let Z;
  e[48] !== o ||
  e[49] !== v ||
  e[50] !== D ||
  e[51] !== H ||
  e[52] !== U ||
  e[53] !== l
    ? ((Z = s.jsx(vl, {
        templateId: l,
        viewportSettings: D,
        currentPlatform: o,
        onPlatformChange: v,
        category: H,
        type: U,
      })),
      (e[48] = o),
      (e[49] = v),
      (e[50] = D),
      (e[51] = H),
      (e[52] = U),
      (e[53] = l),
      (e[54] = Z))
    : (Z = e[54]);
  let q;
  e[55] !== r
    ? ((q =
        r != null && r.content
          ? ke.decompress(ke.decodeBase64(r.content))
          : void 0),
      (e[55] = r),
      (e[56] = q))
    : (q = e[56]);
  let W;
  e[57] !== r
    ? ((W =
        r != null && r.contentMobile
          ? ke.decompress(ke.decodeBase64(r.contentMobile))
          : void 0),
      (e[57] = r),
      (e[58] = W))
    : (W = e[58]);
  const Q = r == null ? void 0 : r.effects,
    re = r == null ? void 0 : r.audioSettings,
    ae = r == null ? void 0 : r.notificationSettings,
    ce = r == null ? void 0 : r.customHtml,
    de = r == null ? void 0 : r.customEffects,
    fe = r == null ? void 0 : r.pageSettings,
    ue = r == null ? void 0 : r.fontMap,
    oe = r == null ? void 0 : r.isLogo,
    xe = r == null ? void 0 : r.isCard;
  let ie;
  e[59] !== o ||
  e[60] !== q ||
  e[61] !== W ||
  e[62] !== Q ||
  e[63] !== re ||
  e[64] !== ae ||
  e[65] !== ce ||
  e[66] !== de ||
  e[67] !== fe ||
  e[68] !== ue ||
  e[69] !== oe ||
  e[70] !== xe ||
  e[71] !== l
    ? ((ie = s.jsx(Cl, {
        content: q,
        mobileContent: W,
        effects: Q,
        audioSettings: re,
        notificationSettings: ae,
        customHtmlSettings: ce,
        customEffects: de,
        viewportSettings: fe,
        forcePlatform: o,
        templateId: l,
        fontMap: ue,
        isLogo: oe,
        isCard: xe,
      })),
      (e[59] = o),
      (e[60] = q),
      (e[61] = W),
      (e[62] = Q),
      (e[63] = re),
      (e[64] = ae),
      (e[65] = ce),
      (e[66] = de),
      (e[67] = fe),
      (e[68] = ue),
      (e[69] = oe),
      (e[70] = xe),
      (e[71] = l),
      (e[72] = ie))
    : (ie = e[72]);
  let me;
  e[73] !== r
    ? ((me =
        r &&
        (r.proTierLink || r.vipTierLink) &&
        s.jsx(y, {
          p: 4,
          maxW: "1200px",
          mx: "auto",
          children: s.jsx(Pn, { template: r }),
        })),
      (e[73] = r),
      (e[74] = me))
    : (me = e[74]);
  let le;
  e[75] !== ie || e[76] !== me
    ? ((le = s.jsxs("div", {
        className: "view-template-content",
        children: [ie, me],
      })),
      (e[75] = ie),
      (e[76] = me),
      (e[77] = le))
    : (le = e[77]);
  let pe;
  return (
    e[78] !== A || e[79] !== Z || e[80] !== le
      ? ((pe = s.jsxs(s.Fragment, { children: [A, Z, le] })),
        (e[78] = A),
        (e[79] = Z),
        (e[80] = le),
        (e[81] = pe))
      : (pe = e[81]),
    pe
  );
}
const wo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Nl }, Symbol.toStringTag, {
    value: "Module",
  })
);
function _l() {
  const e = R.c(3);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = s.jsx(J, {
        children: s.jsx("title", { children: "Nâng cấp VIP" }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((n = s.jsx(at, {})), (e[1] = n))
    : (n = e[1]);
  let a;
  return (
    e[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((a = s.jsxs(s.Fragment, {
          children: [
            t,
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden",
              children: [
                n,
                s.jsxs(y, {
                  className: "pt-[51px]",
                  children: [
                    s.jsx(j, {
                      className:
                        "font-bold font-[Quicksand,sans-serif] text-center mt-16",
                      fontSize: ["18px", "25px", "30px"],
                      children: "NÂNG CẤP GÓI THIỆP!",
                    }),
                    s.jsx(ct, {}),
                  ],
                }),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        })),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
const vo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: _l }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Tl() {
  const e = R.c(2);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = s.jsx(J, {
        children: s.jsx("title", {
          children: "MIỄN PHÍ | Tạo Thiệp Cưới Online",
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = s.jsxs(s.Fragment, {
          children: [
            t,
            s.jsxs("div", {
              className: "h-[100vh] overflow-x-hidden",
              children: [
                s.jsx(at, {}),
                s.jsx(In, {}),
                s.jsx(Fn, {}),
                s.jsx(zn, {}),
                s.jsx(Mn, {}),
                s.jsx(On, {}),
                s.jsx(En, {}),
                s.jsx(Ln, {}),
                s.jsx(Ft, {}),
                s.jsx(ct, {}),
                s.jsx(zt, {}),
              ],
            }),
            s.jsx(Ue, {}),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
const Co = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Tl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kl = () => {
    const e = R.c(32);
    let t;
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((t = { page: 1, limit: 12 }), (e[0] = t))
      : (t = e[0]);
    const [n, a] = p.useState(t),
      [o, h] = p.useState(""),
      { data: l, isLoading: g } = li(n),
      { data: r } = ri(3);
    let m;
    e[1] !== o
      ? ((m = () => {
          a((b) => ({ ...b, search: o, page: 1 }));
        }),
        (e[1] = o),
        (e[2] = m))
      : (m = e[2]);
    const i = m;
    let c;
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((c = (b) => {
          a((N) => ({ ...N, page: b }));
        }),
        (e[3] = c))
      : (c = e[3]);
    const d = c,
      u = Pl;
    let S;
    e[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = (b) => {
          const { blog: N, featured: F } = b,
            L = F === void 0 ? !1 : F;
          return s.jsx(Ht, {
            to: `/love-story/${N.id}`,
            children: s.jsxs(y, {
              className: `bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
                L ? "md:col-span-2" : ""
              }`,
              children: [
                s.jsxs("div", {
                  className: `relative ${L ? "h-64" : "h-48"}`,
                  children: [
                    N.mainImageUrl
                      ? s.jsx(tt, {
                          src: N.mainImageUrl,
                          alt: N.title,
                          w: "full",
                          h: "full",
                          objectFit: "cover",
                        })
                      : s.jsx("div", {
                          className:
                            "w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center",
                          children: s.jsx(ot, {
                            size: 48,
                            className: "text-pink-300",
                          }),
                        }),
                    N.isFeatured &&
                      s.jsx(Ce, {
                        position: "absolute",
                        top: 3,
                        right: 3,
                        colorScheme: "pink",
                        variant: "solid",
                        children: "Nổi bật",
                      }),
                  ],
                }),
                s.jsxs(y, {
                  p: L ? 6 : 4,
                  children: [
                    s.jsx(j, {
                      fontSize: L ? "xl" : "lg",
                      fontWeight: "bold",
                      mb: 2,
                      className: "line-clamp-2",
                      children: N.title,
                    }),
                    N.stories.length > 0 &&
                      s.jsx(j, {
                        fontSize: "sm",
                        color: "gray.600",
                        mb: 3,
                        className: L ? "line-clamp-3" : "line-clamp-2",
                        children: N.stories[0].description,
                      }),
                    s.jsxs(je, {
                      justify: "space-between",
                      align: "center",
                      fontSize: "xs",
                      color: "gray.500",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx(as, { size: 12 }),
                                s.jsx("span", { children: N.viewCount }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx(cs, { size: 12 }),
                                s.jsx("span", {
                                  children: u(N.publishedAt || N.createdAt),
                                }),
                              ],
                            }),
                          ],
                        }),
                        N.author &&
                          s.jsxs(j, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: [
                              N.author.firstName,
                              " ",
                              N.author.lastName,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        (e[4] = S))
      : (S = e[4]);
    const w = S;
    let f, v;
    e[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = s.jsx(j, {
          fontSize: "4xl",
          fontWeight: "bold",
          mb: 4,
          children: "Câu Chuyện Tình Yêu",
        })),
        (v = s.jsx(j, {
          fontSize: "lg",
          mb: 8,
          maxW: "600px",
          mx: "auto",
          children:
            "Khám phá những câu chuyện tình yêu đẹp và cảm động từ các cặp đôi",
        })),
        (e[5] = f),
        (e[6] = v))
      : ((f = e[5]), (v = e[6]));
    let I;
    e[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = (b) => h(b.target.value)), (e[7] = I))
      : (I = e[7]);
    let x;
    e[8] !== i
      ? ((x = (b) => b.key === "Enter" && i()), (e[8] = i), (e[9] = x))
      : (x = e[9]);
    let k;
    e[10] !== o || e[11] !== x
      ? ((k = s.jsx(Gt, {
          placeholder: "Tìm kiếm câu chuyện...",
          value: o,
          onChange: I,
          bg: "white",
          color: "gray.800",
          onKeyPress: x,
        })),
        (e[10] = o),
        (e[11] = x),
        (e[12] = k))
      : (k = e[12]);
    let T;
    e[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = s.jsx(rs, { size: 16 })), (e[13] = T))
      : (T = e[13]);
    let P;
    e[14] !== i
      ? ((P = s.jsxs(ee, {
          colorScheme: "pink",
          onClick: i,
          className: "flex items-center gap-2",
          children: [T, "Tìm kiếm"],
        })),
        (e[14] = i),
        (e[15] = P))
      : (P = e[15]);
    let z;
    e[16] !== P || e[17] !== k
      ? ((z = s.jsxs(y, {
          bg: "gradient-to-r from-pink-500 to-purple-600",
          color: "white",
          py: 20,
          textAlign: "center",
          children: [
            f,
            v,
            s.jsxs(je, { maxW: "500px", mx: "auto", gap: 2, children: [k, P] }),
          ],
        })),
        (e[16] = P),
        (e[17] = k),
        (e[18] = z))
      : (z = e[18]);
    let C;
    e[19] !== r
      ? ((C =
          r &&
          r.length > 0 &&
          s.jsxs(y, {
            mb: 12,
            children: [
              s.jsx(j, {
                fontSize: "2xl",
                fontWeight: "bold",
                mb: 6,
                textAlign: "center",
                children: "Câu Chuyện Nổi Bật",
              }),
              s.jsx(ze, {
                templateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
                gap: 6,
                children: r.map((b, N) =>
                  s.jsx(w, { blog: b, featured: N === 0 }, b.id)
                ),
              }),
            ],
          })),
        (e[19] = r),
        (e[20] = C))
      : (C = e[20]);
    let O;
    e[21] === Symbol.for("react.memo_cache_sentinel")
      ? ((O = s.jsx(j, {
          fontSize: "2xl",
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          children: "Tất Cả Câu Chuyện",
        })),
        (e[21] = O))
      : (O = e[21]);
    let _;
    e[22] !== l || e[23] !== n || e[24] !== g
      ? ((_ = s.jsxs(y, {
          children: [
            O,
            g
              ? s.jsx(ze, {
                  templateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
                  gap: 6,
                  children: [...Array(6)].map(Il),
                })
              : l != null && l.data && l.data.length > 0
              ? s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(ze, {
                      templateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
                      gap: 6,
                      mb: 8,
                      children: l.data.map((b) => s.jsx(w, { blog: b }, b.id)),
                    }),
                    l.metadata.totalPages > 1 &&
                      s.jsxs(je, {
                        justify: "center",
                        gap: 2,
                        children: [
                          s.jsx(ee, {
                            variant: "outline",
                            onClick: () => d(n.page - 1),
                            disabled: n.page === 1,
                            children: "Trước",
                          }),
                          [...Array(l.metadata.totalPages)].map((b, N) =>
                            s.jsx(
                              ee,
                              {
                                variant: n.page === N + 1 ? "solid" : "outline",
                                colorScheme: n.page === N + 1 ? "pink" : "gray",
                                onClick: () => d(N + 1),
                                children: N + 1,
                              },
                              N + 1
                            )
                          ),
                          s.jsx(ee, {
                            variant: "outline",
                            onClick: () => d(n.page + 1),
                            disabled: n.page === l.metadata.totalPages,
                            children: "Tiếp",
                          }),
                        ],
                      }),
                  ],
                })
              : s.jsxs(y, {
                  textAlign: "center",
                  py: 12,
                  children: [
                    s.jsx(ot, {
                      size: 48,
                      className: "text-gray-300 mx-auto mb-4",
                    }),
                    s.jsx(j, {
                      fontSize: "lg",
                      color: "gray.500",
                      mb: 2,
                      children: "Chưa có câu chuyện nào",
                    }),
                    s.jsx(j, {
                      color: "gray.400",
                      children:
                        "Hãy quay lại sau để đọc những câu chuyện tình yêu đẹp",
                    }),
                  ],
                }),
          ],
        })),
        (e[22] = l),
        (e[23] = n),
        (e[24] = g),
        (e[25] = _))
      : (_ = e[25]);
    let M;
    e[26] !== C || e[27] !== _
      ? ((M = s.jsxs(y, {
          maxW: "1200px",
          mx: "auto",
          p: 6,
          children: [C, _],
        })),
        (e[26] = C),
        (e[27] = _),
        (e[28] = M))
      : (M = e[28]);
    let E;
    return (
      e[29] !== z || e[30] !== M
        ? ((E = s.jsxs(y, { minH: "100vh", bg: "gray.50", children: [z, M] })),
          (e[29] = z),
          (e[30] = M),
          (e[31] = E))
        : (E = e[31]),
      E
    );
  };
function Pl(e) {
  return new Date(e).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function Il(e, t) {
  return s.jsxs(
    y,
    {
      className: "bg-white rounded-lg shadow-md overflow-hidden",
      children: [
        s.jsx("div", { className: "h-48 bg-gray-200 animate-pulse" }),
        s.jsxs(y, {
          p: 4,
          children: [
            s.jsx("div", {
              className: "h-4 bg-gray-200 rounded animate-pulse mb-2",
            }),
            s.jsx("div", {
              className: "h-3 bg-gray-200 rounded animate-pulse mb-2",
            }),
            s.jsx("div", {
              className: "h-3 bg-gray-200 rounded animate-pulse w-1/2",
            }),
          ],
        }),
      ],
    },
    t
  );
}
const No = Object.freeze(
  Object.defineProperty({ __proto__: null, default: kl }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  po as A,
  lo as B,
  So as C,
  wo as D,
  ro as E,
  vo as F,
  ao as G,
  Co as H,
  No as I,
  Vl as L,
  Qt as N,
  Hl as P,
  mo as R,
  Hn as S,
  Dl as T,
  fo as W,
  Gl as a,
  Ql as b,
  ql as c,
  Kl as d,
  Zl as e,
  Yl as f,
  Si as g,
  Xl as h,
  Bl as i,
  Jl as j,
  eo as k,
  to as l,
  so as m,
  no as n,
  io as o,
  oo as p,
  co as q,
  ho as r,
  go as s,
  uo as t,
  Ul as u,
  xo as v,
  js as w,
  bo as x,
  jo as y,
  yo as z,
};
