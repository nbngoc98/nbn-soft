import {
  cr as S,
  cs as U,
  ct as B,
  cu as V,
  cv as q,
  cw as K,
  cx as X,
  cy as Y,
  cz as k,
  cA as o,
  cB as s,
  cC as Z,
  cD as j,
  cE as J,
  cF as Q,
  cG as x,
  cH as d,
  cI as $,
  cJ as P,
  cK as C,
  cL as ee,
  cM as M,
  cN as L,
  cO as te,
  cP as R,
  cQ as re,
  cR as ne,
  cS as W,
} from "./vendor-other-C35hYj1E.js";
function G(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ie =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ce = G(function (e) {
    return (
      ie.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function ae(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function se(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var oe = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var a;
        n.tags.length === 0
          ? n.insertionPoint
            ? (a = n.insertionPoint.nextSibling)
            : n.prepend
            ? (a = n.container.firstChild)
            : (a = n.before)
          : (a = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, a),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(se(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = ae(i);
          try {
            a.insertRule(n, a.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          var i;
          return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ce = function (t, r, n) {
    for (
      var i = 0, a = 0;
      (i = a), (a = R()), i === 38 && a === 12 && (r[n] = 1), !L(a);

    )
      M();
    return ne(t, W);
  },
  le = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (L(i)) {
        case 0:
          i === 38 && R() === 12 && (r[n] = 1), (t[n] += ce(W - 1, r, n));
          break;
        case 2:
          t[n] += re(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = R() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += te(i);
      }
    while ((i = M()));
    return t;
  },
  fe = function (t, r) {
    return j(le(J(t), r));
  },
  O = new WeakMap(),
  de = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !O.get(n)) &&
        !i
      ) {
        O.set(t, !0);
        for (
          var a = [], c = fe(r, a), l = n.props, f = 0, p = 0;
          f < c.length;
          f++
        )
          for (var u = 0; u < l.length; u++, p++)
            t.props[p] = a[f] ? c[f].replace(/&\f/g, l[u]) : l[u] + " " + c[f];
      }
    }
  },
  ue = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function F(e, t) {
  switch (Q(e, t)) {
    case 5103:
      return s + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return s + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return s + e + C + e + d + e + e;
    case 6828:
    case 4268:
      return s + e + d + e + e;
    case 6165:
      return s + e + d + "flex-" + e + e;
    case 5187:
      return (
        s + e + o(e, /(\w+).+(:[^]+)/, s + "box-$1$2" + d + "flex-$1$2") + e
      );
    case 5443:
      return s + e + d + "flex-item-" + o(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        s + e + d + "flex-line-pack" + o(e, /align-content|flex-|-self/, "") + e
      );
    case 5548:
      return s + e + d + o(e, "shrink", "negative") + e;
    case 5292:
      return s + e + d + o(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        s +
        "box-" +
        o(e, "-grow", "") +
        s +
        e +
        d +
        o(e, "grow", "positive") +
        e
      );
    case 4554:
      return s + o(e, /([^-])(transform)/g, "$1" + s + "$2") + e;
    case 6187:
      return (
        o(o(o(e, /(zoom-|grab)/, s + "$1"), /(image-set)/, s + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return o(e, /(image-set\([^]*)/, s + "$1$`$1");
    case 4968:
      return (
        o(
          o(e, /(.+:)(flex-)?(.*)/, s + "box-pack:$3" + d + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        s +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return o(e, /(.+)-inline(.+)/, s + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($(e) - 1 - t > 6)
        switch (x(e, t + 1)) {
          case 109:
            if (x(e, t + 4) !== 45) break;
          case 102:
            return (
              o(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + s + "$2-$3$1" + C + (x(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~P(e, "stretch")
              ? F(o(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (x(e, t + 1) !== 115) break;
    case 6444:
      switch (x(e, $(e) - 3 - (~P(e, "!important") && 10))) {
        case 107:
          return o(e, ":", ":" + s) + e;
        case 101:
          return (
            o(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                s +
                (x(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                s +
                "$2$3$1" +
                d +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (x(e, t + 11)) {
        case 114:
          return s + e + d + o(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return s + e + d + o(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return s + e + d + o(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return s + e + d + e + e;
  }
  return e;
}
var pe = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Z:
          t.return = F(t.value, t.length);
          break;
        case Y:
          return S([k(t, { value: o(t.value, "@", "@" + s) })], i);
        case K:
          if (t.length)
            return X(t.props, function (a) {
              switch (ee(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return S(
                    [k(t, { props: [o(a, /:(read-\w+)/, ":" + C + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return S(
                    [
                      k(t, {
                        props: [o(a, /:(plac\w+)/, ":" + s + "input-$1")],
                      }),
                      k(t, { props: [o(a, /:(plac\w+)/, ":" + C + "$1")] }),
                      k(t, { props: [o(a, /:(plac\w+)/, d + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  he = [pe],
  ve = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (h) {
        var g = h.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 &&
          (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || he,
      a = {},
      c,
      l = [];
    (c = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (h) {
          for (
            var g = h.getAttribute("data-emotion").split(" "), y = 1;
            y < g.length;
            y++
          )
            a[g[y]] = !0;
          l.push(h);
        }
      );
    var f,
      p = [de, ue];
    {
      var u,
        b = [
          V,
          q(function (h) {
            u.insert(h);
          }),
        ],
        D = B(p.concat(i, b)),
        N = function (g) {
          return S(U(g), D);
        };
      f = function (g, y, z, _) {
        (u = z),
          N(g ? g + "{" + y.styles + "}" : y.styles),
          _ && (v.inserted[y.name] = !0);
      };
    }
    var v = {
      key: r,
      sheet: new oe({
        key: r,
        container: c,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: f,
    };
    return v.sheet.hydrate(l), v;
  },
  me = !0;
function Ae(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var ge = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || me === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles);
  },
  Re = function (t, r, n) {
    ge(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function ye(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var xe = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  be = /[A-Z]|^ms/g,
  ke = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  H = function (t) {
    return t.charCodeAt(1) === 45;
  },
  T = function (t) {
    return t != null && typeof t != "boolean";
  },
  A = G(function (e) {
    return H(e) ? e : e.replace(be, "-$&").toLowerCase();
  }),
  E = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(ke, function (n, i, a) {
            return (m = { name: i, styles: a, next: m }), i;
          });
    }
    return xe[t] !== 1 && !H(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function w(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return (m = { name: i.name, styles: i.styles, next: m }), i.name;
      var a = r;
      if (a.styles !== void 0) {
        var c = a.next;
        if (c !== void 0)
          for (; c !== void 0; )
            (m = { name: c.name, styles: c.styles, next: m }), (c = c.next);
        var l = a.styles + ";";
        return l;
      }
      return we(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = m,
          p = r(e);
        return (m = f), w(e, t, p);
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var b = t[u];
  return b !== void 0 ? b : u;
}
function we(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += w(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var c = r[a];
      if (typeof c != "object") {
        var l = c;
        t != null && t[l] !== void 0
          ? (n += a + "{" + t[l] + "}")
          : T(l) && (n += A(a) + ":" + E(a, l) + ";");
      } else if (
        Array.isArray(c) &&
        typeof c[0] == "string" &&
        (t == null || t[c[0]] === void 0)
      )
        for (var f = 0; f < c.length; f++)
          T(c[f]) && (n += A(a) + ":" + E(a, c[f]) + ";");
      else {
        var p = w(e, t, c);
        switch (a) {
          case "animation":
          case "animationName": {
            n += A(a) + ":" + p + ";";
            break;
          }
          default:
            n += a + "{" + p + "}";
        }
      }
    }
  return n;
}
var I = /label:\s*([^\s;{]+)\s*(;|$)/g,
  m;
function $e(e, t, r) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var n = !0,
    i = "";
  m = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) (n = !1), (i += w(r, t, a));
  else {
    var c = a;
    i += c[0];
  }
  for (var l = 1; l < e.length; l++)
    if (((i += w(r, t, e[l])), n)) {
      var f = a;
      i += f[l];
    }
  I.lastIndex = 0;
  for (var p = "", u; (u = I.exec(i)) !== null; ) p += "-" + u[1];
  var b = ye(i) + p;
  return { name: b, styles: i, next: m };
}
var Pe = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
export { Ce as a, ve as c, Ae as g, Re as i, ge as r, $e as s, Pe as u };
