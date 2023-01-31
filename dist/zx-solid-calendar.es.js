/*!
 * zx-calendar version 0.7.3
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2023-01-31 21:00:45 (GMT+0900)
 */
import { createRenderEffect as j, sharedConfig as M, untrack as ye, createSignal as pe, createEffect as ge, onMount as _e } from "solid-js";
function me(s, t, e) {
  let n = e.length, i = t.length, o = n, l = 0, a = 0, r = t[i - 1].nextSibling, c = null;
  for (; l < i || a < o; ) {
    if (t[l] === e[a]) {
      l++, a++;
      continue;
    }
    for (; t[i - 1] === e[o - 1]; )
      i--, o--;
    if (i === l) {
      const d = o < n ? a ? e[a - 1].nextSibling : e[o - a] : r;
      for (; a < o; )
        s.insertBefore(e[a++], d);
    } else if (o === a)
      for (; l < i; )
        (!c || !c.has(t[l])) && t[l].remove(), l++;
    else if (t[l] === e[o - 1] && e[a] === t[i - 1]) {
      const d = t[--i].nextSibling;
      s.insertBefore(e[a++], t[l++].nextSibling), s.insertBefore(e[--o], d), t[i] = e[o];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let h = a;
        for (; h < o; )
          c.set(e[h], h++);
      }
      const d = c.get(t[l]);
      if (d != null)
        if (a < d && d < o) {
          let h = l, y = 1, p;
          for (; ++h < i && h < o && !((p = c.get(t[h])) == null || p !== d + y); )
            y++;
          if (y > d - a) {
            const f = t[l];
            for (; a < d; )
              s.insertBefore(e[a++], f);
          } else
            s.replaceChild(e[a++], t[l++]);
        } else
          l++;
      else
        t[l++].remove();
    }
  }
}
function Ee(s, t, e) {
  const n = document.createElement("template");
  n.innerHTML = s;
  let i = n.content.firstChild;
  return e && (i = i.firstChild), i;
}
function Se(s, t, e) {
  return ye(() => s(t, e));
}
function J(s, t, e, n) {
  if (e !== void 0 && !n && (n = []), typeof t != "function")
    return N(s, t, n, e);
  j((i) => N(s, t(), i, e), n);
}
function N(s, t, e, n, i) {
  for (M.context && !e && (e = [...s.childNodes]); typeof e == "function"; )
    e = e();
  if (t === e)
    return e;
  const o = typeof t, l = n !== void 0;
  if (s = l && e[0] && e[0].parentNode || s, o === "string" || o === "number") {
    if (M.context)
      return e;
    if (o === "number" && (t = t.toString()), l) {
      let a = e[0];
      a && a.nodeType === 3 ? a.data = t : a = document.createTextNode(t), e = A(s, e, n, a);
    } else
      e !== "" && typeof e == "string" ? e = s.firstChild.data = t : e = s.textContent = t;
  } else if (t == null || o === "boolean") {
    if (M.context)
      return e;
    e = A(s, e, n);
  } else {
    if (o === "function")
      return j(() => {
        let a = t();
        for (; typeof a == "function"; )
          a = a();
        e = N(s, a, e, n);
      }), () => e;
    if (Array.isArray(t)) {
      const a = [], r = e && Array.isArray(e);
      if (B(a, t, e, i))
        return j(() => e = N(s, a, e, n, !0)), () => e;
      if (M.context) {
        if (!a.length)
          return e;
        for (let c = 0; c < a.length; c++)
          if (a[c].parentNode)
            return e = a;
      }
      if (a.length === 0) {
        if (e = A(s, e, n), l)
          return e;
      } else
        r ? e.length === 0 ? K(s, a, n) : me(s, e, a) : (e && A(s), K(s, a));
      e = a;
    } else if (t instanceof Node) {
      if (M.context && t.parentNode)
        return e = l ? [t] : t;
      if (Array.isArray(e)) {
        if (l)
          return e = A(s, e, n, t);
        A(s, e, null, t);
      } else
        e == null || e === "" || !s.firstChild ? s.appendChild(t) : s.replaceChild(t, s.firstChild);
      e = t;
    }
  }
  return e;
}
function B(s, t, e, n) {
  let i = !1;
  for (let o = 0, l = t.length; o < l; o++) {
    let a = t[o], r = e && e[o];
    if (a instanceof Node)
      s.push(a);
    else if (!(a == null || a === !0 || a === !1))
      if (Array.isArray(a))
        i = B(s, a, r) || i;
      else if (typeof a == "function")
        if (n) {
          for (; typeof a == "function"; )
            a = a();
          i = B(s, Array.isArray(a) ? a : [a], Array.isArray(r) ? r : [r]) || i;
        } else
          s.push(a), i = !0;
      else {
        const c = String(a);
        r && r.nodeType === 3 && r.data === c ? s.push(r) : s.push(document.createTextNode(c));
      }
  }
  return i;
}
function K(s, t, e = null) {
  for (let n = 0, i = t.length; n < i; n++)
    s.insertBefore(t[n], e);
}
function A(s, t, e, n) {
  if (e === void 0)
    return s.textContent = "";
  const i = n || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let l = t.length - 1; l >= 0; l--) {
      const a = t[l];
      if (i !== a) {
        const r = a.parentNode === s;
        !o && !l ? r ? s.replaceChild(i, a) : s.insertBefore(i, e) : r && a.remove();
      } else
        o = !0;
    }
  } else
    s.insertBefore(i, e);
  return [i];
}
const Ae = "yyyy/MM", Te = "yyyy-yyyy", Me = "yyyy", E = "is-selected", ne = "is-disabled", De = "is-holiday", xe = "is-current", ie = "is-range-first", ae = "is-range-last", oe = "is-range-first-last", le = "is-range-temp", q = "is-first-page", X = "is-last-page", Ce = "is-weekend", b = "date-only", P = "__prev-button", H = "__next-button", U = "__title-wrapper", re = "__item-week", ce = "__confirm-button", de = "__clear-button", fe = "__cancel-button", Z = "multiple", S = "range", Re = "single", W = "date", V = "month", w = "year", Q = {
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
}, Ne = ["confirmButton", "cancelButton", "clearButton"], ee = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function be(s = "en", t) {
  const e = ee[s] || ee.en, n = Ne.reduce((o, l, a) => (o[l] = e[a], o), {}), i = Q[s] || Q.en;
  return n.weeks = t ? i.full : i.abbr, n;
}
function we({ lang: s, isFullWeek: t, langPackage: e }) {
  return {
    langPackage: {
      ...be(s, t),
      ...e
    }
  };
}
/*!
 * date-utils-2020 v1.1.0
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2023/01/14 14:10:19 GMT+0900
 */
function L(s) {
  return String(s).padStart(2, "0");
}
const Le = {
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function g(s, t, e) {
  const n = D(s);
  if (!n || !t)
    return String(s);
  if (t === "timestamp")
    return n.getTime().toString();
  if (/(y+)/i.test(t)) {
    const l = RegExp.$1;
    t = t.replace(l, (n.getFullYear() + "").substring(4 - l.length));
  }
  (!e || !Array.isArray(e.weeks)) && (e = Le);
  const i = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "a+": n.getHours() < 12 ? "am" : "pm",
    "A+": n.getHours() < 12 ? "AM" : "PM"
  };
  let o;
  for (const l in i)
    if (new RegExp("(" + l + ")").test(t)) {
      o = RegExp.$1;
      const a = i[l] + "";
      t = t.replace(o, o.length === 1 ? a : L(a));
    }
  if (/w+/i.test(t)) {
    const l = n.getDay();
    t = t.replace(/w+/i, /W+/.test(t) ? e.weeks[l] : String(l));
  }
  if (/g/i.test(t)) {
    const l = n.toString().split(/\s+/).slice(5), a = t.includes("g");
    t = t.replace(/g/i, a ? l[0] : l.join(" "));
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
      const n = e.length;
      n === 8 ? t = new Date([e.substring(0, 4), e.substring(4, 6), e.substring(6, 8)].join("/")) : n === 6 ? t = new Date([e.substring(0, 4), e.substring(4, 6), "01"].join("/")) : n === 4 ? t = new Date(e + "/01/01") : t = new Date(parseInt(s));
    } else
      e = e.replace(/[年月日]/g, (n) => n === "\u65E5" ? "" : "/").replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/ig, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : t = new Date(e);
  }
  return t && !isNaN(t.getFullYear()) ? t : null;
}
const Ie = {
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
function te(s) {
  return typeof s == "function";
}
function $e({ current: s, currentDate: t }) {
  const e = s.slice(0, 2);
  e.push("01");
  const n = new Date(e.join("/")).getDay();
  let i = t.getFullYear(), o = t.getMonth() + 1;
  o === 12 ? (i += 1, o = 1) : o += 1;
  const l = new Date(
    `${i}/${L(o)}/01`
  ).getTime(), a = new Date(l - 1);
  return {
    firstDayOfWeek: n,
    lastDayOfMonth: a.getDate()
  };
}
function ke(s) {
  const t = u(s.substr(2)), e = t % 20 === 0, n = Math.floor(t / 20);
  let i = (e ? n - 1 : n) * 20 + 1, o = u(s.substr(0, 2));
  n === 0 && t === 0 && (o -= 1, i = 81);
  const l = o * 100 + i, a = l + 19;
  return {
    startFullYear: l,
    endFullYear: a
  };
}
function m(s, t) {
  const e = [];
  if (Array.isArray(s)) {
    const [n, i] = s;
    let o = D(n), l = D(i);
    x(t) && (o = o ? +g(o, t) : null, l = l ? +g(l, t) : null), e.push(o), e.push(l);
  }
  return e;
}
function $({ data: s, options: t }) {
  const e = [];
  return t.mode === S && s.selected.forEach((n) => {
    e.push(n ? n.value : null);
  }), e;
}
function k(s, t, e) {
  return !!t && s < t || !!e && s > e;
}
function he(s, { type: t, mode: e }) {
  const n = [];
  if (s) {
    Array.isArray(s) || (s = [s]), e === Re && s.length > 1 && (s = s.slice(0, 1)), e === S && s.length > 2 && (s = s.slice(0, 2));
    const i = Ie[t];
    let o;
    s.forEach((l) => {
      o = D(l), o && n.push({
        value: u(g(o, i)),
        date: o,
        fullText: g(o, "yyyy/MM/dd")
      });
    }), n.sort((l, a) => l.value - a.value);
  }
  return n;
}
function O(s, t, e) {
  return t && t > s || e && e < s;
}
function Oe(s, t, e, n) {
  const i = [];
  switch (n) {
    case S: {
      const [o, l] = s;
      o && O(+o.date, t, e) && i.push(o), l && O(+l.date, t, e) && i.push(l);
      break;
    }
    default:
      s.forEach((o) => {
        O(+o.date, t, e) && i.push(o);
      });
  }
  return i.length > 0;
}
function ve(s) {
  const { options: t } = this;
  let e = null;
  const [n, i] = m(t.dateRange);
  if (n && +n > +e && (e = n), i && +i < +e && (e = i), s.length)
    if (Oe(
      s,
      n,
      i,
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
function v(s, { data: t, options: e }) {
  return e.mode === S && t.selected.length === 1 ? s === t.selected[0].value : !1;
}
function T(s) {
  if (typeof s > "u" && (s = "undefined"), s === null && (s = "null"), x(s))
    return document.createTextNode(s);
  const t = document.createElement(s.t || "div"), e = s.a;
  e && typeof e == "object" && Object.keys(e).forEach((i) => {
    t.setAttribute(i, e[i]);
  });
  const n = s.c;
  return Array.isArray(n) && n.length > 0 && n.forEach((i) => {
    t.appendChild(T(i));
  }), t;
}
function z(s, t = document) {
  if (!s)
    return null;
  let e = null;
  return x(s) ? e = t.querySelector(s) : typeof s == "object" && s.nodeType === 1 && (e = s), e;
}
function Fe(s, t, e) {
  const n = "__item", i = {};
  if (t.includes(n))
    i.el = s, i.className = t;
  else if (s !== e) {
    let o = s.parentElement;
    for (; o && o !== e; ) {
      if (o.className.split(" ").includes(n)) {
        i.el = o, i.className = o.className.split(" ");
        break;
      }
      o = o.parentElement;
    }
  }
  return i.el && (i.index = u(i.el.getAttribute("data-index"))), i;
}
function C(...s) {
  const t = s[0], e = s.slice(1), n = [];
  t.className.split(" ").forEach((i) => {
    e.includes(i) || n.push(i);
  }), t.className = n.join(" ");
}
function I(...s) {
  const t = s[0], e = t.className.split(" ");
  s.slice(1).forEach((n) => {
    e.includes(n) || e.push(n);
  }), t.className = e.join(" ");
}
const Ye = {
  a: {
    class: "zx-calendar"
  }
}, je = {
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
            class: [P, b].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: U
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
            class: [H, b].join(" ")
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
}, Be = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, Pe = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, He = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, We = {
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
function Ve(s, t) {
  if (t.type !== W)
    return null;
  const e = JSON.parse(JSON.stringify(Be));
  return s.forEach((n, i) => {
    const o = i === 0 || i === 6;
    e.c.push({
      a: {
        class: re + (o ? " " + Ce : "")
      },
      c: [n]
    });
  }), T(e);
}
function F(s, t, e, n) {
  const i = s.some((l) => t && l.value && l.value < t), o = s.some((l) => e && l.value && l.value > e);
  i ? I(n, q) : C(n, q), o ? I(n, X) : C(n, X);
}
function Y(s, t, { titleFormatter: e, type: n, itemSuffix: i, showHoliday: o }, { header: l, body: a }) {
  const r = t[s] || [];
  let c = null;
  if (n === w) {
    const p = r[0], f = r[r.length - 1];
    let _ = 0;
    c = e.replace(/(y+)/g, () => _++ === 0 ? p.text : f.text);
  } else
    c = g(t.currentDate, e);
  z("." + U, l).innerText = c;
  let d, h, y;
  a.innerHTML = r.reduce((p, f, _) => (d = ["__item"], f.disabled && d.push(ne), f.value > 0 ? (y = "", f.holiday && (d.push(De), y = ` title="${f.holiday}"`), f.selected && d.push(E), f.current && d.push(xe), f.isRangeFirst && f.isRangeLast ? d.push(oe) : (f.isRangeFirst && d.push(ie), f.isRangeLast && d.push(ae)), f.isRangeTemp && d.push(le), h = [
    `<div class="${d.join(" ")}" data-index="${_}"${y}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${f.text}`), i && h.push(`<span class="__suffix">${i}</span>`), o && f.holiday && h.push(`<span class="__holiday">${f.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${d.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], p.push(h.join("")), p), []).join("");
}
function se(s, { body: t }, e) {
  const [...n] = t.querySelectorAll("." + E);
  n.forEach((i) => {
    C(i, E), e && C(
      i,
      ie,
      ae,
      oe
    );
  }), I(s, e ? le : E);
}
const ue = "single", Xe = "multiple", Ze = "range", Ge = "date", Qe = "month", et = "year", tt = {
  date: "yyyy/MM/dd",
  month: "yyyy/MM",
  year: "yyyy"
}, Ue = {
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
  type: Ge,
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
function G(s = {}) {
  const t = {
    ...R,
    ...s,
    colors: {
      ...Ue,
      ...s.colors
    }
  };
  if (s.titleFormatter || (t.type === w ? t.titleFormatter = Te : t.type === V && (t.titleFormatter = Me)), !t.el || !z(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: e } = we(t);
  this.langPackage = e, this.$els = {};
  const n = new Date(), i = g(n, "yyyy/MM/dd", e);
  let o = [];
  try {
    o = he(t.defaultDate, t);
  } catch (r) {
    setTimeout(() => {
      this.emit("error", r);
    }, 0);
  }
  const l = ve.call(this, o) || n, a = g(l, "yyyy/MM/dd");
  this.data = {
    today: i,
    currentDate: l,
    currentDay: a,
    current: a.split("/"),
    selected: o,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
G.prototype = {
  constructor: G,
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
    !x(s) || !te(t) || (this._eventList[s] || (this._eventList[s] = []), this._eventList[s].push(t));
  },
  off(s) {
    !x(s) || !this._eventList[s] || (this._eventList[s].length = 0);
  },
  _initDom() {
    const s = this.options, t = z(s.el), e = JSON.parse(JSON.stringify(Ye)), n = [
      e.a.class,
      "type-is-" + s.type,
      "mode-is-" + s.mode
    ];
    e.a.class = n.join(" "), e.a.style = Object.keys(s.colors).map((r) => `--zx-calendar-color-${r}: ${s.colors[r]}`).join(";");
    const i = T(e), o = T(je);
    i.appendChild(o);
    const l = Ve(this.langPackage.weeks, s);
    l && i.appendChild(l);
    const a = T(Pe);
    if (i.appendChild(a), !s.hideFooter && (s.mode === Z || s.mode === S)) {
      const r = JSON.parse(JSON.stringify(He));
      s.footerButtons.forEach((d) => {
        r.c.push({
          ...We[d],
          c: [this.langPackage[d + "Button"]]
        });
      });
      const c = T(r);
      s.footerButtonAlign && (c.style.justifyContent = s.footerButtonAlign), i.appendChild(c);
    }
    t.appendChild(i), this.$els = {
      calendar: i,
      header: o,
      week: l,
      body: a,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(s) {
    s.stopPropagation();
    const t = s.target, e = t.className.split(" "), n = t.innerText;
    if (e.includes(P))
      this.prev(!e.includes(b));
    else if (e.includes(H))
      this.next(!e.includes(b));
    else if (e.includes(ce))
      this.emit("change", [...this.data.selected]);
    else if (e.includes(fe))
      this.emit("cancel");
    else if (e.includes(de))
      this.setDate();
    else if (e.includes(U))
      this._onTitleClick({
        innerText: n,
        el: t,
        className: e
      });
    else if (e.includes(re))
      this._onWeekClick({
        innerText: n,
        el: t,
        className: e
      });
    else {
      const i = Fe(t, e, this.$els.calendar);
      i.el && this._onItemClick(i);
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
          const [n] = m(this.options.dateRange, "yyyy");
          if (n && t <= n) {
            t = n;
            const [i] = m(this.options.dateRange, "MM");
            i && (e = i);
          }
        } else
          e = u(e) - 1, e === 0 && (t = u(t) - 1, e = 12);
        this.setCurrentDate([t, e, "01"].join("/"));
        break;
      case V:
        this.setCurrentDate(t - 1);
        break;
      case w: {
        const n = this.data.years[0] || {};
        this.setCurrentDate(n.value - 1);
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
          const [, n] = m(this.options.dateRange, "yyyy");
          if (n && t >= n) {
            t = n;
            const [, i] = m(this.options.dateRange, "MM");
            i && (e = i);
          }
        } else
          e = u(e) + 1, e === 13 && (t = u(t) + 1, e = 1);
        this.setCurrentDate([t, e, "01"].join("/"));
        break;
      case V:
        this.setCurrentDate(u(t) + 1);
        break;
      case w: {
        const n = this.data.years, i = n[n.length - 1] || {};
        this.setCurrentDate(i.value + 1);
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
    const i = (this.data[this.options.type + "s"] || [])[e] || {};
    if (this.options.mode === S) {
      const o = [...this.data.selected], l = o.length;
      l === 0 || l >= 2 && o.every((a) => !!a) ? (this.data.selected = [i], se(s, this.$els, !0)) : l === 1 && (o[0].value < i.value ? this.data.selected.push(i) : this.data.selected.unshift(i), this._updateDom());
    } else if (this.options.mode === Z)
      if (t.includes(E)) {
        C(s, E);
        const o = this.data.selected.findIndex(
          (l) => l.value === i.value
        );
        this.data.selected.splice(o, 1);
      } else
        I(s, E), i.selected = !0, this.data.selected.push(i);
    else
      t.includes(E) || (se(s, this.$els), i.selected = !0, this.data.selected = [{ ...i }], this.emit("change", [...this.data.selected]));
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
    ), [e, n] = $(this), i = [], o = this.data.today.substr(0, 4), { startFullYear: l, endFullYear: a } = ke(this.data.current[0]);
    let r;
    for (let c = l; c <= a; c++)
      r = c.toString(), i.push({
        text: r,
        fullText: r,
        value: c,
        disabled: k(c, s, t),
        isRangeFirst: c === e && n,
        isRangeLast: c === n && e,
        isRangeTemp: v(c, this),
        selected: this._isSelected(c),
        current: o === r,
        date: this.toDate(r)
      });
    this.data.years = i, F(i, s, t, this.$els.calendar);
  },
  createMonths() {
    const [s, t] = m(
      this.options.dateRange,
      "yyyyMM"
    ), [e, n] = $(this), i = [], o = this.data.today.substr(0, 7), l = this.data.current[0] + "/", a = u(this.data.current[0]) * 100;
    let r, c, d;
    for (let h = 1; h <= 12; h++)
      r = L(h), c = l + r, d = a + h, i.push({
        text: r,
        fullText: c,
        value: d,
        disabled: k(d, s, t),
        isRangeFirst: d === e && n,
        isRangeLast: d === n && e,
        isRangeTemp: v(d, this),
        selected: this._isSelected(d),
        current: c.startsWith(o),
        date: this.toDate(c)
      });
    this.data.months = i, F(
      i,
      s,
      t,
      this.$els.calendar
    );
  },
  createDays() {
    const [s, t] = m(
      this.options.dateRange,
      "yyyyMMdd"
    ), [e, n] = $(this), { firstDayOfWeek: i, lastDayOfMonth: o } = $e(this.data), l = new Array(i).fill(0);
    for (let f = 1; f <= o; f++)
      l.push(f);
    if (l.length % 7 !== 0)
      for (let f = 0; f < l.length % 7; f++)
        l.push(0);
    let a = 0, r, c, d;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: y } = this.options, p = l.map((f) => {
      a > 6 && (a = 0), r = f > 0 ? L(f) : "";
      const _ = h + r;
      return d = f > 0 ? +_.replace(/\//g, "") : 0, c = {
        text: r,
        fullText: f > 0 ? _ : "",
        value: d,
        week: a++,
        disabled: !f || k(d, s, t),
        holiday: !1,
        isRangeFirst: d === e && n,
        isRangeLast: d === n && e,
        isRangeTemp: v(d, this),
        selected: this._isSelected(d),
        current: this.data.today === _,
        date: f > 0 ? this.toDate(_) : null
      }, te(y) ? y(c) : c;
    });
    this.data.dates = p, F(p, s, t, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(s) {
    const t = this.data.selected;
    switch (this.options.mode) {
      case S: {
        const [e, n] = t;
        if (s && e && n)
          return s >= e.value && s <= n.value;
        break;
      }
      default:
        return t.some((e) => e.value === s);
    }
    return !1;
  }
};
function ze(s, t, e, n) {
  const i = s.map((l) => e ? g(l.fullText, e, n) : l.fullText);
  return !t || t === ue ? i[0] : i;
}
function Je(s) {
  const t = {
    ...s.option
  };
  let e;
  return Object.keys(R).forEach((n) => {
    e = s[n], typeof e < "u" && (!Array.isArray(R[n]) || R[n].includes(e)) && (t[n] = e);
  }), s.value && (t.defaultDate = s.value), t;
}
const Ke = /* @__PURE__ */ Ee('<div class="zx-calendar-wrapper"><div></div></div>');
function st(s) {
  const {
    change: t,
    instance: e
  } = s, [n, i] = pe(null);
  let o, l;
  return ge(() => {
    s.value !== l && n() && n().setDate(s.value);
  }), _e(() => {
    const a = Je(s);
    a.el = o;
    const r = new G(a);
    i(r), e == null || e(r), r.on("change", (c) => {
      l = ze(c, a.mode, a.format, a.langPackage), t == null || t(l, c);
    });
  }), (() => {
    const a = Ke.cloneNode(!0), r = a.firstChild;
    J(a, () => s.header, r);
    const c = o;
    return typeof c == "function" ? Se(c, r) : o = r, J(a, () => s.footer, null), a;
  })();
}
export {
  Ue as DEF_COLORS,
  R as DEF_OPTIONS,
  tt as FORMATTERS,
  Xe as MODE_MULTIPLE,
  Ze as MODE_RANGE,
  ue as MODE_SINGLE,
  Ge as TYPE_DATE,
  Qe as TYPE_MONTH,
  et as TYPE_YEAR,
  G as ZxCalendar,
  st as ZxSolidCalendar
};
