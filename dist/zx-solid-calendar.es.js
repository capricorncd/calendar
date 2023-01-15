import { createRenderEffect as j, sharedConfig as M, untrack as ye, onMount as pe } from "solid-js";
import { ZxCalendar as ge } from "zx-calendar";
function _e(s, t, e) {
  let i = e.length, n = t.length, o = i, a = 0, l = 0, r = t[n - 1].nextSibling, d = null;
  for (; a < n || l < o; ) {
    if (t[a] === e[l]) {
      a++, l++;
      continue;
    }
    for (; t[n - 1] === e[o - 1]; )
      n--, o--;
    if (n === a) {
      const c = o < i ? l ? e[l - 1].nextSibling : e[o - l] : r;
      for (; l < o; )
        s.insertBefore(e[l++], c);
    } else if (o === l)
      for (; a < n; )
        (!d || !d.has(t[a])) && t[a].remove(), a++;
    else if (t[a] === e[o - 1] && e[l] === t[n - 1]) {
      const c = t[--n].nextSibling;
      s.insertBefore(e[l++], t[a++].nextSibling), s.insertBefore(e[--o], c), t[n] = e[o];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let h = l;
        for (; h < o; )
          d.set(e[h], h++);
      }
      const c = d.get(t[a]);
      if (c != null)
        if (l < c && c < o) {
          let h = a, y = 1, p;
          for (; ++h < n && h < o && !((p = d.get(t[h])) == null || p !== c + y); )
            y++;
          if (y > c - l) {
            const f = t[a];
            for (; l < c; )
              s.insertBefore(e[l++], f);
          } else
            s.replaceChild(e[l++], t[a++]);
        } else
          a++;
      else
        t[a++].remove();
    }
  }
}
function me(s, t, e) {
  const i = document.createElement("template");
  i.innerHTML = s;
  let n = i.content.firstChild;
  return e && (n = n.firstChild), n;
}
function Ee(s, t, e) {
  return ye(() => s(t, e));
}
function z(s, t, e, i) {
  if (e !== void 0 && !i && (i = []), typeof t != "function")
    return N(s, t, i, e);
  j((n) => N(s, t(), n, e), i);
}
function N(s, t, e, i, n) {
  for (M.context && !e && (e = [...s.childNodes]); typeof e == "function"; )
    e = e();
  if (t === e)
    return e;
  const o = typeof t, a = i !== void 0;
  if (s = a && e[0] && e[0].parentNode || s, o === "string" || o === "number") {
    if (M.context)
      return e;
    if (o === "number" && (t = t.toString()), a) {
      let l = e[0];
      l && l.nodeType === 3 ? l.data = t : l = document.createTextNode(t), e = A(s, e, i, l);
    } else
      e !== "" && typeof e == "string" ? e = s.firstChild.data = t : e = s.textContent = t;
  } else if (t == null || o === "boolean") {
    if (M.context)
      return e;
    e = A(s, e, i);
  } else {
    if (o === "function")
      return j(() => {
        let l = t();
        for (; typeof l == "function"; )
          l = l();
        e = N(s, l, e, i);
      }), () => e;
    if (Array.isArray(t)) {
      const l = [], r = e && Array.isArray(e);
      if (B(l, t, e, n))
        return j(() => e = N(s, l, e, i, !0)), () => e;
      if (M.context) {
        if (!l.length)
          return e;
        for (let d = 0; d < l.length; d++)
          if (l[d].parentNode)
            return e = l;
      }
      if (l.length === 0) {
        if (e = A(s, e, i), a)
          return e;
      } else
        r ? e.length === 0 ? J(s, l, i) : _e(s, e, l) : (e && A(s), J(s, l));
      e = l;
    } else if (t instanceof Node) {
      if (M.context && t.parentNode)
        return e = a ? [t] : t;
      if (Array.isArray(e)) {
        if (a)
          return e = A(s, e, i, t);
        A(s, e, null, t);
      } else
        e == null || e === "" || !s.firstChild ? s.appendChild(t) : s.replaceChild(t, s.firstChild);
      e = t;
    }
  }
  return e;
}
function B(s, t, e, i) {
  let n = !1;
  for (let o = 0, a = t.length; o < a; o++) {
    let l = t[o], r = e && e[o];
    if (l instanceof Node)
      s.push(l);
    else if (!(l == null || l === !0 || l === !1))
      if (Array.isArray(l))
        n = B(s, l, r) || n;
      else if (typeof l == "function")
        if (i) {
          for (; typeof l == "function"; )
            l = l();
          n = B(s, Array.isArray(l) ? l : [l], Array.isArray(r) ? r : [r]) || n;
        } else
          s.push(l), n = !0;
      else {
        const d = String(l);
        r && r.nodeType === 3 && r.data === d ? s.push(r) : s.push(document.createTextNode(d));
      }
  }
  return n;
}
function J(s, t, e = null) {
  for (let i = 0, n = t.length; i < n; i++)
    s.insertBefore(t[i], e);
}
function A(s, t, e, i) {
  if (e === void 0)
    return s.textContent = "";
  const n = i || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let a = t.length - 1; a >= 0; a--) {
      const l = t[a];
      if (n !== l) {
        const r = l.parentNode === s;
        !o && !a ? r ? s.replaceChild(n, l) : s.insertBefore(n, e) : r && l.remove();
      } else
        o = !0;
    }
  } else
    s.insertBefore(n, e);
  return [n];
}
/*!
 * date-utils-2020 v1.1.0
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2023/01/14 14:10:19 GMT+0900
 */
function b(s) {
  return String(s).padStart(2, "0");
}
const Se = {
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function g(s, t, e) {
  const i = D(s);
  if (!i || !t)
    return String(s);
  if (t === "timestamp")
    return i.getTime().toString();
  if (/(y+)/i.test(t)) {
    const a = RegExp.$1;
    t = t.replace(a, (i.getFullYear() + "").substring(4 - a.length));
  }
  (!e || !Array.isArray(e.weeks)) && (e = Se);
  const n = {
    "M+": i.getMonth() + 1,
    "d+": i.getDate(),
    "h+": i.getHours(),
    "m+": i.getMinutes(),
    "s+": i.getSeconds(),
    "a+": i.getHours() < 12 ? "am" : "pm",
    "A+": i.getHours() < 12 ? "AM" : "PM"
  };
  let o;
  for (const a in n)
    if (new RegExp("(" + a + ")").test(t)) {
      o = RegExp.$1;
      const l = n[a] + "";
      t = t.replace(o, o.length === 1 ? l : b(l));
    }
  if (/w+/i.test(t)) {
    const a = i.getDay();
    t = t.replace(/w+/i, /W+/.test(t) ? e.weeks[a] : String(a));
  }
  if (/g/i.test(t)) {
    const a = i.toString().split(/\s+/).slice(5), l = t.includes("g");
    t = t.replace(/g/i, l ? a[0] : a.join(" "));
  }
  return t;
}
function D(s) {
  let t = null;
  if (s instanceof Date)
    t = s;
  else if (typeof s == "number")
    t = new Date(s);
  else if (typeof s == "string") {
    let e = s.trim();
    if (/^\d+$/.test(e)) {
      const i = e.length;
      i === 8 ? t = new Date([e.substring(0, 4), e.substring(4, 6), e.substring(6, 8)].join("/")) : i === 6 ? t = new Date([e.substring(0, 4), e.substring(4, 6), "01"].join("/")) : i === 4 ? t = new Date(e + "/01/01") : t = new Date(parseInt(s));
    } else
      e = e.replace(/[年月日]/g, (i) => i === "\u65E5" ? "" : "/").replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/ig, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : t = new Date(e);
  }
  return t && !isNaN(t.getFullYear()) ? t : null;
}
const Ae = "yyyy/MM", Te = "yyyy-yyyy", Me = "yyyy", E = "is-selected", ne = "is-disabled", De = "is-holiday", xe = "is-current", ie = "is-range-first", oe = "is-range-last", ae = "is-range-first-last", le = "is-range-temp", K = "is-first-page", Z = "is-last-page", Ce = "is-weekend", w = "date-only", P = "__prev-button", H = "__next-button", G = "__title-wrapper", re = "__item-week", ce = "__confirm-button", de = "__clear-button", fe = "__cancel-button", q = "multiple", S = "range", Re = "single", W = "date", V = "month", L = "year", X = {
  en: {
    full: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    abbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  jp: {
    full: [
      "\u65E5\u66DC\u65E5",
      "\u6708\u66DC\u65E5",
      "\u706B\u66DC\u65E5",
      "\u6C34\u66DC\u65E5",
      "\u6728\u66DC\u65E5",
      "\u91D1\u66DC\u65E5",
      "\u571F\u66DC\u65E5"
    ],
    abbr: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"]
  },
  zh: {
    full: [
      "\u661F\u671F\u65E5",
      "\u661F\u671F\u4E00",
      "\u661F\u671F\u4E8C",
      "\u661F\u671F\u4E09",
      "\u661F\u671F\u56DB",
      "\u661F\u671F\u4E94",
      "\u661F\u671F\u516D"
    ],
    abbr: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]
  }
}, Ne = ["confirmButton", "cancelButton", "clearButton"], Q = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function be(s = "en", t) {
  const e = Q[s] || Q.en, i = Ne.reduce((o, a, l) => (o[a] = e[l], o), {}), n = X[s] || X.en;
  return i.weeks = t ? n.full : n.abbr, i;
}
function we({ lang: s, isFullWeek: t, langPackage: e }) {
  return {
    langPackage: {
      ...be(s, t),
      ...e
    }
  };
}
const Le = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function u(s) {
  return s >> 0;
}
function x(s) {
  return typeof s == "string";
}
function ee(s) {
  return typeof s == "function";
}
function Ie({ current: s, currentDate: t }) {
  const e = s.slice(0, 2);
  e.push("01");
  const i = new Date(e.join("/")).getDay();
  let n = t.getFullYear(), o = t.getMonth() + 1;
  o === 12 ? (n += 1, o = 1) : o += 1;
  const a = new Date(
    `${n}/${b(o)}/01`
  ).getTime(), l = new Date(a - 1);
  return {
    firstDayOfWeek: i,
    lastDayOfMonth: l.getDate()
  };
}
function $e(s) {
  const t = u(s.substr(2)), e = t % 20 === 0, i = Math.floor(t / 20);
  let n = (e ? i - 1 : i) * 20 + 1, o = u(s.substr(0, 2));
  i === 0 && t === 0 && (o -= 1, n = 81);
  const a = o * 100 + n, l = a + 19;
  return {
    startFullYear: a,
    endFullYear: l
  };
}
function m(s, t) {
  const e = [];
  if (Array.isArray(s)) {
    const [i, n] = s;
    let o = D(i), a = D(n);
    x(t) && (o = o ? +g(o, t) : null, a = a ? +g(a, t) : null), e.push(o), e.push(a);
  }
  return e;
}
function $({ data: s, options: t }) {
  const e = [];
  return t.mode === S && s.selected.forEach((i) => {
    e.push(i ? i.value : null);
  }), e;
}
function k(s, t, e) {
  return !!t && s < t || !!e && s > e;
}
function he(s, { type: t, mode: e }) {
  const i = [];
  if (s) {
    Array.isArray(s) || (s = [s]), e === Re && s.length > 1 && (s = s.slice(0, 1)), e === S && s.length > 2 && (s = s.slice(0, 2));
    const n = Le[t];
    let o;
    s.forEach((a) => {
      o = D(a), o && i.push({
        value: u(g(o, n)),
        date: o,
        fullText: g(o, "yyyy/MM/dd")
      });
    }), i.sort((a, l) => a.value - l.value);
  }
  return i;
}
function O(s, t, e) {
  return t && t > s || e && e < s;
}
function ke(s, t, e, i) {
  const n = [];
  switch (i) {
    case S: {
      const [o, a] = s;
      o && O(+o.date, t, e) && n.push(o), a && O(+a.date, t, e) && n.push(a);
      break;
    }
    default:
      s.forEach((o) => {
        O(+o.date, t, e) && n.push(o);
      });
  }
  return n.length > 0;
}
function Oe(s) {
  const { options: t } = this;
  let e = null;
  const [i, n] = m(t.dateRange);
  if (i && +i > +e && (e = i), n && +n < +e && (e = n), s.length)
    if (ke(
      s,
      i,
      n,
      t.type
    )) {
      let o = setTimeout(() => {
        this.emit(
          "error",
          new Error(
            `The default date[${t.defaultDate}] is not within the range[${t.dateRange}].`
          )
        ), clearTimeout(o), o = null;
      }, 0);
    } else
      e = s[0].date;
  return e;
}
function F(s, { data: t, options: e }) {
  return e.mode === S && t.selected.length === 1 ? s === t.selected[0].value : !1;
}
function T(s) {
  if (typeof s > "u" && (s = "undefined"), s === null && (s = "null"), x(s))
    return document.createTextNode(s);
  const t = document.createElement(s.t || "div"), e = s.a;
  e && typeof e == "object" && Object.keys(e).forEach((n) => {
    t.setAttribute(n, e[n]);
  });
  const i = s.c;
  return Array.isArray(i) && i.length > 0 && i.forEach((n) => {
    t.appendChild(T(n));
  }), t;
}
function U(s, t = document) {
  if (!s)
    return null;
  let e = null;
  return x(s) ? e = t.querySelector(s) : typeof s == "object" && s.nodeType === 1 && (e = s), e;
}
function Fe(s, t, e) {
  const i = "__item", n = {};
  if (t.includes(i))
    n.el = s, n.className = t;
  else if (s !== e) {
    let o = s.parentElement;
    for (; o && o !== e; ) {
      if (o.className.split(" ").includes(i)) {
        n.el = o, n.className = o.className.split(" ");
        break;
      }
      o = o.parentElement;
    }
  }
  return n.el && (n.index = u(n.el.getAttribute("data-index"))), n;
}
function C(...s) {
  const t = s[0], e = s.slice(1), i = [];
  t.className.split(" ").forEach((n) => {
    e.includes(n) || i.push(n);
  }), t.className = i.join(" ");
}
function I(...s) {
  const t = s[0], e = t.className.split(" ");
  s.slice(1).forEach((i) => {
    e.includes(i) || e.push(i);
  }), t.className = e.join(" ");
}
const ve = {
  a: {
    class: "zx-calendar"
  }
}, Ye = {
  a: {
    class: "zx-calendar-header-wrapper"
  },
  c: [
    {
      a: {
        class: "__l"
      },
      c: [
        {
          t: "button",
          a: {
            type: "button",
            class: P
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [P, w].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: G
      }
    },
    {
      a: {
        class: "__r"
      },
      c: [
        {
          t: "button",
          a: {
            type: "button",
            class: [H, w].join(" ")
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: H
          }
        }
      ]
    }
  ]
}, je = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, Be = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, Pe = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, He = {
  confirm: {
    t: "button",
    a: {
      class: ce
    }
  },
  clear: {
    t: "button",
    a: {
      class: de
    }
  },
  cancel: {
    t: "button",
    a: {
      class: fe
    }
  }
};
function We(s, t) {
  if (t.type !== W)
    return null;
  const e = JSON.parse(JSON.stringify(je));
  return s.forEach((i, n) => {
    const o = n === 0 || n === 6;
    e.c.push({
      a: {
        class: re + (o ? " " + Ce : "")
      },
      c: [i]
    });
  }), T(e);
}
function v(s, t, e, i) {
  const n = s.some((a) => t && a.value && a.value < t), o = s.some((a) => e && a.value && a.value > e);
  n ? I(i, K) : C(i, K), o ? I(i, Z) : C(i, Z);
}
function Y(s, t, { titleFormatter: e, type: i, itemSuffix: n, showHoliday: o }, { header: a, body: l }) {
  const r = t[s] || [];
  let d = null;
  if (i === L) {
    const p = r[0], f = r[r.length - 1];
    let _ = 0;
    d = e.replace(/(y+)/g, () => _++ === 0 ? p.text : f.text);
  } else
    d = g(t.currentDate, e);
  U("." + G, a).innerText = d;
  let c, h, y;
  l.innerHTML = r.reduce((p, f, _) => (c = ["__item"], f.disabled && c.push(ne), f.value > 0 ? (y = "", f.holiday && (c.push(De), y = ` title="${f.holiday}"`), f.selected && c.push(E), f.current && c.push(xe), f.isRangeFirst && f.isRangeLast ? c.push(ae) : (f.isRangeFirst && c.push(ie), f.isRangeLast && c.push(oe)), f.isRangeTemp && c.push(le), h = [
    `<div class="${c.join(" ")}" data-index="${_}"${y}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${f.text}`), n && h.push(`<span class="__suffix">${n}</span>`), o && f.holiday && h.push(`<span class="__holiday">${f.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${c.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], p.push(h.join("")), p), []).join("");
}
function te(s, { body: t }, e) {
  const [...i] = t.querySelectorAll("." + E);
  i.forEach((n) => {
    C(n, E), e && C(
      n,
      ie,
      oe,
      ae
    );
  }), I(s, e ? le : E);
}
const ue = "single", qe = "multiple", Xe = "range", Ve = "date", Qe = "month", et = "year", tt = {
  date: "yyyy/MM/dd",
  month: "yyyy/MM",
  year: "yyyy"
}, Ge = {
  primary: "#f30",
  arrow: "#999",
  holidayDot: "rgba(0, 0, 0, 0.2)",
  currentItemBg: "#eee",
  white: "#fff",
  rangeBg: "#eee"
}, R = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: Ve,
  isFullWeek: !1,
  titleFormatter: Ae,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: ue,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1,
  colors: {}
};
function se(s = {}) {
  const t = {
    ...R,
    ...s,
    colors: {
      ...Ge,
      ...s.colors
    }
  };
  if (s.titleFormatter || (t.type === L ? t.titleFormatter = Te : t.type === V && (t.titleFormatter = Me)), !t.el || !U(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: e } = we(t);
  this.langPackage = e, this.$els = {};
  const i = new Date(), n = g(i, "yyyy/MM/dd", e);
  let o = [];
  try {
    o = he(t.defaultDate, t);
  } catch (r) {
    setTimeout(() => {
      this.emit("error", r);
    }, 0);
  }
  const a = Oe.call(this, o) || i, l = g(a, "yyyy/MM/dd");
  this.data = {
    today: n,
    currentDate: a,
    currentDay: l,
    current: l.split("/"),
    selected: o,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
se.prototype = {
  constructor: se,
  formatDate(s, t, e) {
    return e || (e = this.langPackage), g(s, t, e);
  },
  toDate(s) {
    const t = D(s);
    return t || this.emit("error", new Error(`"${s}" is an invalid Date!`)), t;
  },
  emit(...s) {
    const t = s[0];
    this._eventList[t] && this._eventList[t].forEach((e) => {
      e.apply(this, s.slice(1));
    });
  },
  on(s, t) {
    !x(s) || !ee(t) || (this._eventList[s] || (this._eventList[s] = []), this._eventList[s].push(t));
  },
  off(s) {
    !x(s) || !this._eventList[s] || (this._eventList[s].length = 0);
  },
  _initDom() {
    const s = this.options, t = U(s.el), e = JSON.parse(JSON.stringify(ve)), i = [
      e.a.class,
      "type-is-" + s.type,
      "mode-is-" + s.mode
    ];
    e.a.class = i.join(" "), e.a.style = Object.keys(s.colors).map((r) => `--zx-calendar-color-${r}: ${s.colors[r]}`).join(";");
    const n = T(e), o = T(Ye);
    n.appendChild(o);
    const a = We(this.langPackage.weeks, s);
    a && n.appendChild(a);
    const l = T(Be);
    if (n.appendChild(l), !s.hideFooter && (s.mode === q || s.mode === S)) {
      const r = JSON.parse(JSON.stringify(Pe));
      s.footerButtons.forEach((c) => {
        r.c.push({
          ...He[c],
          c: [this.langPackage[c + "Button"]]
        });
      });
      const d = T(r);
      s.footerButtonAlign && (d.style.justifyContent = s.footerButtonAlign), n.appendChild(d);
    }
    t.appendChild(n), this.$els = {
      calendar: n,
      header: o,
      week: a,
      body: l,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(s) {
    s.stopPropagation();
    const t = s.target, e = t.className.split(" "), i = t.innerText;
    if (e.includes(P))
      this.prev(!e.includes(w));
    else if (e.includes(H))
      this.next(!e.includes(w));
    else if (e.includes(ce))
      this.emit("change", [...this.data.selected]);
    else if (e.includes(fe))
      this.emit("cancel");
    else if (e.includes(de))
      this.setDate();
    else if (e.includes(G))
      this._onTitleClick({
        innerText: i,
        el: t,
        className: e
      });
    else if (e.includes(re))
      this._onWeekClick({
        innerText: i,
        el: t,
        className: e
      });
    else {
      const n = Fe(t, e, this.$els.calendar);
      n.el && this._onItemClick(n);
    }
  },
  _onTitleClick(s) {
    this.emit("onTitleClick", s);
  },
  prev(s) {
    let [t, e] = this.data.current;
    switch (this.options.type) {
      case W:
        if (s) {
          t = u(t) - 1;
          const [i] = m(this.options.dateRange, "yyyy");
          if (i && t <= i) {
            t = i;
            const [n] = m(this.options.dateRange, "MM");
            n && (e = n);
          }
        } else
          e = u(e) - 1, e === 0 && (t = u(t) - 1, e = 12);
        this.setCurrentDate([t, e, "01"].join("/"));
        break;
      case V:
        this.setCurrentDate(t - 1);
        break;
      case L: {
        const i = this.data.years[0] || {};
        this.setCurrentDate(i.value - 1);
        break;
      }
    }
  },
  next(s) {
    let [t, e] = this.data.current;
    switch (this.options.type) {
      case W:
        if (s) {
          t = u(t) + 1;
          const [, i] = m(this.options.dateRange, "yyyy");
          if (i && t >= i) {
            t = i;
            const [, n] = m(this.options.dateRange, "MM");
            n && (e = n);
          }
        } else
          e = u(e) + 1, e === 13 && (t = u(t) + 1, e = 1);
        this.setCurrentDate([t, e, "01"].join("/"));
        break;
      case V:
        this.setCurrentDate(u(t) + 1);
        break;
      case L: {
        const i = this.data.years, n = i[i.length - 1] || {};
        this.setCurrentDate(n.value + 1);
        break;
      }
    }
  },
  _onWeekClick(s) {
    this.emit("onWeekClick", s);
  },
  _onItemClick({ el: s, className: t, index: e }) {
    if (t.includes(ne))
      return;
    const n = (this.data[this.options.type + "s"] || [])[e] || {};
    if (this.options.mode === S) {
      const o = [...this.data.selected], a = o.length;
      a === 0 || a >= 2 && o.every((l) => !!l) ? (this.data.selected = [n], te(s, this.$els, !0)) : a === 1 && (o[0].value < n.value ? this.data.selected.push(n) : this.data.selected.unshift(n), this._updateDom());
    } else if (this.options.mode === q)
      if (t.includes(E)) {
        C(s, E);
        const o = this.data.selected.findIndex(
          (a) => a.value === n.value
        );
        this.data.selected.splice(o, 1);
      } else
        I(s, E), n.selected = !0, this.data.selected.push(n);
    else
      t.includes(E) || (te(s, this.$els), n.selected = !0, this.data.selected = [{ ...n }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(s, t) {
    this.options.dateRange = [s, t], this._updateDom();
  },
  setDate(s) {
    try {
      if (this.data.selected = he(s, this.options), this.data.selected.length === 0) {
        this._updateDom();
        return;
      }
      const t = this.data.selected[0];
      this.setCurrentDate(t.fullText);
    } catch (t) {
      this.emit("error", t);
    }
  },
  getDate() {
    return this.data.selected.slice(0);
  },
  setCurrentDate(s) {
    const t = this.toDate(String(s));
    if (!t)
      return;
    const e = g(t, "yyyy/MM/dd");
    this.data.currentDate = t, this.data.currentDay = e, this.data.current = e.split("/"), this._updateDom();
  },
  _updateDom() {
    switch (this.options.type) {
      case "date":
        this.createDays(), Y("dates", this.data, this.options, this.$els);
        break;
      case "month":
        this.createMonths(), Y("months", this.data, this.options, this.$els);
        break;
      case "year":
        this.createYears(), Y("years", this.data, this.options, this.$els);
        break;
    }
  },
  createYears() {
    const [s, t] = m(
      this.options.dateRange,
      "yyyy"
    ), [e, i] = $(this), n = [], o = this.data.today.substr(0, 4), { startFullYear: a, endFullYear: l } = $e(this.data.current[0]);
    let r;
    for (let d = a; d <= l; d++)
      r = d.toString(), n.push({
        text: r,
        fullText: r,
        value: d,
        disabled: k(d, s, t),
        isRangeFirst: d === e && i,
        isRangeLast: d === i && e,
        isRangeTemp: F(d, this),
        selected: this._isSelected(d),
        current: o === r,
        date: this.toDate(r)
      });
    this.data.years = n, v(n, s, t, this.$els.calendar);
  },
  createMonths() {
    const [s, t] = m(
      this.options.dateRange,
      "yyyyMM"
    ), [e, i] = $(this), n = [], o = this.data.today.substr(0, 7), a = this.data.current[0] + "/", l = u(this.data.current[0]) * 100;
    let r, d, c;
    for (let h = 1; h <= 12; h++)
      r = b(h), d = a + r, c = l + h, n.push({
        text: r,
        fullText: d,
        value: c,
        disabled: k(c, s, t),
        isRangeFirst: c === e && i,
        isRangeLast: c === i && e,
        isRangeTemp: F(c, this),
        selected: this._isSelected(c),
        current: d.startsWith(o),
        date: this.toDate(d)
      });
    this.data.months = n, v(
      n,
      s,
      t,
      this.$els.calendar
    );
  },
  createDays() {
    const [s, t] = m(
      this.options.dateRange,
      "yyyyMMdd"
    ), [e, i] = $(this), { firstDayOfWeek: n, lastDayOfMonth: o } = Ie(this.data), a = new Array(n).fill(0);
    for (let f = 1; f <= o; f++)
      a.push(f);
    if (a.length % 7 !== 0)
      for (let f = 0; f < a.length % 7; f++)
        a.push(0);
    let l = 0, r, d, c;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: y } = this.options, p = a.map((f) => {
      l > 6 && (l = 0), r = f > 0 ? b(f) : "";
      const _ = h + r;
      return c = f > 0 ? +_.replace(/\//g, "") : 0, d = {
        text: r,
        fullText: f > 0 ? _ : "",
        value: c,
        week: l++,
        disabled: !f || k(c, s, t),
        holiday: !1,
        isRangeFirst: c === e && i,
        isRangeLast: c === i && e,
        isRangeTemp: F(c, this),
        selected: this._isSelected(c),
        current: this.data.today === _,
        date: f > 0 ? this.toDate(_) : null
      }, ee(y) ? y(d) : d;
    });
    this.data.dates = p, v(p, s, t, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(s) {
    const t = this.data.selected;
    switch (this.options.mode) {
      case S: {
        const [e, i] = t;
        if (s && e && i)
          return s >= e.value && s <= i.value;
        break;
      }
      default:
        return t.some((e) => e.value === s);
    }
    return !1;
  }
};
function Ue(s, t, e, i) {
  const n = s.map((a) => e ? g(a.fullText, e, i) : a.fullText);
  return !t || t === ue ? n[0] : n;
}
function ze(s) {
  const t = {
    ...s.option
  };
  let e;
  return Object.keys(R).forEach((i) => {
    e = s[i], typeof e < "u" && (!Array.isArray(R[i]) || R[i].includes(e)) && (t[i] = e);
  }), s.value && (t.defaultDate = s.value), t;
}
const Je = /* @__PURE__ */ me('<div class="zx-calendar-wrapper"><div></div></div>');
function st(s) {
  const {
    change: t,
    instance: e
  } = s;
  let i;
  return pe(() => {
    const n = ze(s);
    n.el = i;
    const o = new ge(n);
    e == null || e(o), o.on("change", (a) => {
      t == null || t(Ue(a, n.mode, n.format, n.langPackage), a);
    });
  }), (() => {
    const n = Je.cloneNode(!0), o = n.firstChild;
    z(n, () => s.header, o);
    const a = i;
    return typeof a == "function" ? Ee(a, o) : i = o, z(n, () => s.footer, null), n;
  })();
}
export {
  Ge as DEF_COLORS,
  R as DEF_OPTIONS,
  tt as FORMATTERS,
  qe as MODE_MULTIPLE,
  Xe as MODE_RANGE,
  ue as MODE_SINGLE,
  Ve as TYPE_DATE,
  Qe as TYPE_MONTH,
  et as TYPE_YEAR,
  se as ZxCalendar,
  st as ZxSolidCalendar
};
