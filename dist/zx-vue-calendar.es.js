import { TYPE_DATE as lt, MODE_SINGLE as ct, ZxCalendar as ut } from "zx-calendar";
import { openBlock as dt, createElementBlock as ht, renderSlot as V, createElementVNode as ft } from "vue";
/*!
 * date-utils-2020 v1.1.0
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2023/01/14 14:10:19 GMT+0900
 */
function b(t) {
  return String(t).padStart(2, "0");
}
const pt = {
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function p(t, e, s) {
  const n = A(t);
  if (!n || !e)
    return String(t);
  if (e === "timestamp")
    return n.getTime().toString();
  if (/(y+)/i.test(e)) {
    const r = RegExp.$1;
    e = e.replace(r, (n.getFullYear() + "").substring(4 - r.length));
  }
  (!s || !Array.isArray(s.weeks)) && (s = pt);
  const a = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "a+": n.getHours() < 12 ? "am" : "pm",
    "A+": n.getHours() < 12 ? "AM" : "PM"
  };
  let i;
  for (const r in a)
    if (new RegExp("(" + r + ")").test(e)) {
      i = RegExp.$1;
      const o = a[r] + "";
      e = e.replace(i, i.length === 1 ? o : b(o));
    }
  if (/w+/i.test(e)) {
    const r = n.getDay();
    e = e.replace(/w+/i, /W+/.test(e) ? s.weeks[r] : String(r));
  }
  if (/g/i.test(e)) {
    const r = n.toString().split(/\s+/).slice(5), o = e.includes("g");
    e = e.replace(/g/i, o ? r[0] : r.join(" "));
  }
  return e;
}
function A(t) {
  let e = null;
  if (t instanceof Date)
    e = t;
  else if (typeof t == "number")
    e = new Date(t);
  else if (typeof t == "string") {
    let s = t.trim();
    if (/^\d+$/.test(s)) {
      const n = s.length;
      n === 8 ? e = new Date([s.substring(0, 4), s.substring(4, 6), s.substring(6, 8)].join("/")) : n === 6 ? e = new Date([s.substring(0, 4), s.substring(4, 6), "01"].join("/")) : n === 4 ? e = new Date(s + "/01/01") : e = new Date(parseInt(t));
    } else
      s = s.replace(/[年月日]/g, (n) => n === "\u65E5" ? "" : "/").replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/ig, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(s) ? e = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(s) ? e = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : e = new Date(s);
  }
  return e && !isNaN(e.getFullYear()) ? e : null;
}
const yt = "yyyy/MM", gt = "yyyy-yyyy", _t = "yyyy", _ = "is-selected", X = "is-disabled", mt = "is-holiday", Et = "is-current", q = "is-range-first", Q = "is-range-last", tt = "is-range-first-last", et = "is-range-temp", H = "is-first-page", W = "is-last-page", St = "is-weekend", x = "date-only", O = "__prev-button", F = "__next-button", B = "__title-wrapper", st = "__item-week", nt = "__confirm-button", at = "__clear-button", it = "__cancel-button", G = "multiple", E = "range", Dt = "single", j = "date", Y = "month", C = "year", z = {
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
}, At = ["confirmButton", "cancelButton", "clearButton"], U = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function Tt(t = "en", e) {
  const s = U[t] || U.en, n = At.reduce((i, r, o) => (i[r] = s[o], i), {}), a = z[t] || z.en;
  return n.weeks = e ? a.full : a.abbr, n;
}
function Mt({ lang: t, isFullWeek: e, langPackage: s }) {
  return {
    langPackage: {
      ...Tt(t, e),
      ...s
    }
  };
}
const Rt = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function f(t) {
  return t >> 0;
}
function T(t) {
  return typeof t == "string";
}
function J(t) {
  return typeof t == "function";
}
function bt({ current: t, currentDate: e }) {
  const s = t.slice(0, 2);
  s.push("01");
  const n = new Date(s.join("/")).getDay();
  let a = e.getFullYear(), i = e.getMonth() + 1;
  i === 12 ? (a += 1, i = 1) : i += 1;
  const r = new Date(
    `${a}/${b(i)}/01`
  ).getTime(), o = new Date(r - 1);
  return {
    firstDayOfWeek: n,
    lastDayOfMonth: o.getDate()
  };
}
function xt(t) {
  const e = f(t.substr(2)), s = e % 20 === 0, n = Math.floor(e / 20);
  let a = (s ? n - 1 : n) * 20 + 1, i = f(t.substr(0, 2));
  n === 0 && e === 0 && (i -= 1, a = 81);
  const r = i * 100 + a, o = r + 19;
  return {
    startFullYear: r,
    endFullYear: o
  };
}
function g(t, e) {
  const s = [];
  if (Array.isArray(t)) {
    const [n, a] = t;
    let i = A(n), r = A(a);
    T(e) && (i = i ? +p(i, e) : null, r = r ? +p(r, e) : null), s.push(i), s.push(r);
  }
  return s;
}
function $({ data: t, options: e }) {
  const s = [];
  return e.mode === E && t.selected.forEach((n) => {
    s.push(n ? n.value : null);
  }), s;
}
function v(t, e, s) {
  return !!e && t < e || !!s && t > s;
}
function rt(t, { type: e, mode: s }) {
  const n = [];
  if (t) {
    Array.isArray(t) || (t = [t]), s === Dt && t.length > 1 && (t = t.slice(0, 1)), s === E && t.length > 2 && (t = t.slice(0, 2));
    const a = Rt[e];
    let i;
    t.forEach((r) => {
      i = A(r), i && n.push({
        value: f(p(i, a)),
        date: i,
        fullText: p(i, "yyyy/MM/dd")
      });
    }), n.sort((r, o) => r.value - o.value);
  }
  return n;
}
function L(t, e, s) {
  return e && e > t || s && s < t;
}
function Ct(t, e, s, n) {
  const a = [];
  switch (n) {
    case E: {
      const [i, r] = t;
      i && L(+i.date, e, s) && a.push(i), r && L(+r.date, e, s) && a.push(r);
      break;
    }
    default:
      t.forEach((i) => {
        L(+i.date, e, s) && a.push(i);
      });
  }
  return a.length > 0;
}
function Nt(t) {
  const { options: e } = this;
  let s = null;
  const [n, a] = g(e.dateRange);
  if (n && +n > +s && (s = n), a && +a < +s && (s = a), t.length)
    if (Ct(
      t,
      n,
      a,
      e.type
    )) {
      let i = setTimeout(() => {
        this.emit(
          "error",
          new Error(
            `The default date[${e.defaultDate}] is not within the range[${e.dateRange}].`
          )
        ), clearTimeout(i), i = null;
      }, 0);
    } else
      s = t[0].date;
  return s;
}
function k(t, { data: e, options: s }) {
  return s.mode === E && e.selected.length === 1 ? t === e.selected[0].value : !1;
}
function D(t) {
  if (typeof t > "u" && (t = "undefined"), t === null && (t = "null"), T(t))
    return document.createTextNode(t);
  const e = document.createElement(t.t || "div"), s = t.a;
  s && typeof s == "object" && Object.keys(s).forEach((a) => {
    e.setAttribute(a, s[a]);
  });
  const n = t.c;
  return Array.isArray(n) && n.length > 0 && n.forEach((a) => {
    e.appendChild(D(a));
  }), e;
}
function P(t, e = document) {
  if (!t)
    return null;
  let s = null;
  return T(t) ? s = e.querySelector(t) : typeof t == "object" && t.nodeType === 1 && (s = t), s;
}
function $t(t, e, s) {
  const n = "__item", a = {};
  if (e.includes(n))
    a.el = t, a.className = e;
  else if (t !== s) {
    let i = t.parentElement;
    for (; i && i !== s; ) {
      if (i.className.split(" ").includes(n)) {
        a.el = i, a.className = i.className.split(" ");
        break;
      }
      i = i.parentElement;
    }
  }
  return a.el && (a.index = f(a.el.getAttribute("data-index"))), a;
}
function M(...t) {
  const e = t[0], s = t.slice(1), n = [];
  e.className.split(" ").forEach((a) => {
    s.includes(a) || n.push(a);
  }), e.className = n.join(" ");
}
function N(...t) {
  const e = t[0], s = e.className.split(" ");
  t.slice(1).forEach((n) => {
    s.includes(n) || s.push(n);
  }), e.className = s.join(" ");
}
const vt = {
  a: {
    class: "zx-calendar"
  }
}, Lt = {
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
            class: O
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [O, x].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: B
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
            class: [F, x].join(" ")
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: F
          }
        }
      ]
    }
  ]
}, kt = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, wt = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, It = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, Ot = {
  confirm: {
    t: "button",
    a: {
      class: nt
    }
  },
  clear: {
    t: "button",
    a: {
      class: at
    }
  },
  cancel: {
    t: "button",
    a: {
      class: it
    }
  }
};
function Ft(t, e) {
  if (e.type !== j)
    return null;
  const s = JSON.parse(JSON.stringify(kt));
  return t.forEach((n, a) => {
    const i = a === 0 || a === 6;
    s.c.push({
      a: {
        class: st + (i ? " " + St : "")
      },
      c: [n]
    });
  }), D(s);
}
function w(t, e, s, n) {
  const a = t.some((r) => e && r.value && r.value < e), i = t.some((r) => s && r.value && r.value > s);
  a ? N(n, H) : M(n, H), i ? N(n, W) : M(n, W);
}
function I(t, e, { titleFormatter: s, type: n, itemSuffix: a, showHoliday: i }, { header: r, body: o }) {
  const u = e[t] || [];
  let d = null;
  if (n === C) {
    const m = u[0], c = u[u.length - 1];
    let y = 0;
    d = s.replace(/(y+)/g, () => y++ === 0 ? m.text : c.text);
  } else
    d = p(e.currentDate, s);
  P("." + B, r).innerText = d;
  let l, h, S;
  o.innerHTML = u.reduce((m, c, y) => (l = ["__item"], c.disabled && l.push(X), c.value > 0 ? (S = "", c.holiday && (l.push(mt), S = ` title="${c.holiday}"`), c.selected && l.push(_), c.current && l.push(Et), c.isRangeFirst && c.isRangeLast ? l.push(tt) : (c.isRangeFirst && l.push(q), c.isRangeLast && l.push(Q)), c.isRangeTemp && l.push(et), h = [
    `<div class="${l.join(" ")}" data-index="${y}"${S}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${c.text}`), a && h.push(`<span class="__suffix">${a}</span>`), i && c.holiday && h.push(`<span class="__holiday">${c.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${l.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], m.push(h.join("")), m), []).join("");
}
function Z(t, { body: e }, s) {
  const [...n] = e.querySelectorAll("." + _);
  n.forEach((a) => {
    M(a, _), s && M(
      a,
      q,
      Q,
      tt
    );
  }), N(t, s ? et : _);
}
const ot = "single", jt = "date", Yt = {
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
  type: jt,
  isFullWeek: !1,
  titleFormatter: yt,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: ot,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1,
  colors: {}
};
function K(t = {}) {
  const e = {
    ...R,
    ...t,
    colors: {
      ...Yt,
      ...t.colors
    }
  };
  if (t.titleFormatter || (e.type === C ? e.titleFormatter = gt : e.type === Y && (e.titleFormatter = _t)), !e.el || !P(e.el))
    throw new Error(`Initial parameter el[${e.el}] is invalid.`);
  this.options = e, this._eventList = {};
  const { langPackage: s } = Mt(e);
  this.langPackage = s, this.$els = {};
  const n = new Date(), a = p(n, "yyyy/MM/dd", s);
  let i = [];
  try {
    i = rt(e.defaultDate, e);
  } catch (u) {
    setTimeout(() => {
      this.emit("error", u);
    }, 0);
  }
  const r = Nt.call(this, i) || n, o = p(r, "yyyy/MM/dd");
  this.data = {
    today: a,
    currentDate: r,
    currentDay: o,
    current: o.split("/"),
    selected: i,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
K.prototype = {
  constructor: K,
  formatDate(t, e, s) {
    return s || (s = this.langPackage), p(t, e, s);
  },
  toDate(t) {
    const e = A(t);
    return e || this.emit("error", new Error(`"${t}" is an invalid Date!`)), e;
  },
  emit(...t) {
    const e = t[0];
    this._eventList[e] && this._eventList[e].forEach((s) => {
      s.apply(this, t.slice(1));
    });
  },
  on(t, e) {
    !T(t) || !J(e) || (this._eventList[t] || (this._eventList[t] = []), this._eventList[t].push(e));
  },
  off(t) {
    !T(t) || !this._eventList[t] || (this._eventList[t].length = 0);
  },
  _initDom() {
    const t = this.options, e = P(t.el), s = JSON.parse(JSON.stringify(vt)), n = [
      s.a.class,
      "type-is-" + t.type,
      "mode-is-" + t.mode
    ];
    s.a.class = n.join(" "), s.a.style = Object.keys(t.colors).map((u) => `--zx-calendar-color-${u}: ${t.colors[u]}`).join(";");
    const a = D(s), i = D(Lt);
    a.appendChild(i);
    const r = Ft(this.langPackage.weeks, t);
    r && a.appendChild(r);
    const o = D(wt);
    if (a.appendChild(o), !t.hideFooter && (t.mode === G || t.mode === E)) {
      const u = JSON.parse(JSON.stringify(It));
      t.footerButtons.forEach((l) => {
        u.c.push({
          ...Ot[l],
          c: [this.langPackage[l + "Button"]]
        });
      });
      const d = D(u);
      t.footerButtonAlign && (d.style.justifyContent = t.footerButtonAlign), a.appendChild(d);
    }
    e.appendChild(a), this.$els = {
      calendar: a,
      header: i,
      week: r,
      body: o,
      parent: e
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(t) {
    t.stopPropagation();
    const e = t.target, s = e.className.split(" "), n = e.innerText;
    if (s.includes(O))
      this.prev(!s.includes(x));
    else if (s.includes(F))
      this.next(!s.includes(x));
    else if (s.includes(nt))
      this.emit("change", [...this.data.selected]);
    else if (s.includes(it))
      this.emit("cancel");
    else if (s.includes(at))
      this.setDate();
    else if (s.includes(B))
      this._onTitleClick({
        innerText: n,
        el: e,
        className: s
      });
    else if (s.includes(st))
      this._onWeekClick({
        innerText: n,
        el: e,
        className: s
      });
    else {
      const a = $t(e, s, this.$els.calendar);
      a.el && this._onItemClick(a);
    }
  },
  _onTitleClick(t) {
    this.emit("onTitleClick", t);
  },
  prev(t) {
    let [e, s] = this.data.current;
    switch (this.options.type) {
      case j:
        if (t) {
          e = f(e) - 1;
          const [n] = g(this.options.dateRange, "yyyy");
          if (n && e <= n) {
            e = n;
            const [a] = g(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = f(s) - 1, s === 0 && (e = f(e) - 1, s = 12);
        this.setCurrentDate([e, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(e - 1);
        break;
      case C: {
        const n = this.data.years[0] || {};
        this.setCurrentDate(n.value - 1);
        break;
      }
    }
  },
  next(t) {
    let [e, s] = this.data.current;
    switch (this.options.type) {
      case j:
        if (t) {
          e = f(e) + 1;
          const [, n] = g(this.options.dateRange, "yyyy");
          if (n && e >= n) {
            e = n;
            const [, a] = g(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = f(s) + 1, s === 13 && (e = f(e) + 1, s = 1);
        this.setCurrentDate([e, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(f(e) + 1);
        break;
      case C: {
        const n = this.data.years, a = n[n.length - 1] || {};
        this.setCurrentDate(a.value + 1);
        break;
      }
    }
  },
  _onWeekClick(t) {
    this.emit("onWeekClick", t);
  },
  _onItemClick({ el: t, className: e, index: s }) {
    if (e.includes(X))
      return;
    const a = (this.data[this.options.type + "s"] || [])[s] || {};
    if (this.options.mode === E) {
      const i = [...this.data.selected], r = i.length;
      r === 0 || r >= 2 && i.every((o) => !!o) ? (this.data.selected = [a], Z(t, this.$els, !0)) : r === 1 && (i[0].value < a.value ? this.data.selected.push(a) : this.data.selected.unshift(a), this._updateDom());
    } else if (this.options.mode === G)
      if (e.includes(_)) {
        M(t, _);
        const i = this.data.selected.findIndex(
          (r) => r.value === a.value
        );
        this.data.selected.splice(i, 1);
      } else
        N(t, _), a.selected = !0, this.data.selected.push(a);
    else
      e.includes(_) || (Z(t, this.$els), a.selected = !0, this.data.selected = [{ ...a }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(t, e) {
    this.options.dateRange = [t, e], this._updateDom();
  },
  setDate(t) {
    try {
      if (this.data.selected = rt(t, this.options), this.data.selected.length === 0) {
        this._updateDom();
        return;
      }
      const e = this.data.selected[0];
      this.setCurrentDate(e.fullText);
    } catch (e) {
      this.emit("error", e);
    }
  },
  getDate() {
    return this.data.selected.slice(0);
  },
  setCurrentDate(t) {
    const e = this.toDate(String(t));
    if (!e)
      return;
    const s = p(e, "yyyy/MM/dd");
    this.data.currentDate = e, this.data.currentDay = s, this.data.current = s.split("/"), this._updateDom();
  },
  _updateDom() {
    switch (this.options.type) {
      case "date":
        this.createDays(), I("dates", this.data, this.options, this.$els);
        break;
      case "month":
        this.createMonths(), I("months", this.data, this.options, this.$els);
        break;
      case "year":
        this.createYears(), I("years", this.data, this.options, this.$els);
        break;
    }
  },
  createYears() {
    const [t, e] = g(
      this.options.dateRange,
      "yyyy"
    ), [s, n] = $(this), a = [], i = this.data.today.substr(0, 4), { startFullYear: r, endFullYear: o } = xt(this.data.current[0]);
    let u;
    for (let d = r; d <= o; d++)
      u = d.toString(), a.push({
        text: u,
        fullText: u,
        value: d,
        disabled: v(d, t, e),
        isRangeFirst: d === s && n,
        isRangeLast: d === n && s,
        isRangeTemp: k(d, this),
        selected: this._isSelected(d),
        current: i === u,
        date: this.toDate(u)
      });
    this.data.years = a, w(a, t, e, this.$els.calendar);
  },
  createMonths() {
    const [t, e] = g(
      this.options.dateRange,
      "yyyyMM"
    ), [s, n] = $(this), a = [], i = this.data.today.substr(0, 7), r = this.data.current[0] + "/", o = f(this.data.current[0]) * 100;
    let u, d, l;
    for (let h = 1; h <= 12; h++)
      u = b(h), d = r + u, l = o + h, a.push({
        text: u,
        fullText: d,
        value: l,
        disabled: v(l, t, e),
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: k(l, this),
        selected: this._isSelected(l),
        current: d.startsWith(i),
        date: this.toDate(d)
      });
    this.data.months = a, w(
      a,
      t,
      e,
      this.$els.calendar
    );
  },
  createDays() {
    const [t, e] = g(
      this.options.dateRange,
      "yyyyMMdd"
    ), [s, n] = $(this), { firstDayOfWeek: a, lastDayOfMonth: i } = bt(this.data), r = new Array(a).fill(0);
    for (let c = 1; c <= i; c++)
      r.push(c);
    if (r.length % 7 !== 0)
      for (let c = 0; c < r.length % 7; c++)
        r.push(0);
    let o = 0, u, d, l;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: S } = this.options, m = r.map((c) => {
      o > 6 && (o = 0), u = c > 0 ? b(c) : "";
      const y = h + u;
      return l = c > 0 ? +y.replace(/\//g, "") : 0, d = {
        text: u,
        fullText: c > 0 ? y : "",
        value: l,
        week: o++,
        disabled: !c || v(l, t, e),
        holiday: !1,
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: k(l, this),
        selected: this._isSelected(l),
        current: this.data.today === y,
        date: c > 0 ? this.toDate(y) : null
      }, J(S) ? S(d) : d;
    });
    this.data.dates = m, w(m, t, e, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(t) {
    const e = this.data.selected;
    switch (this.options.mode) {
      case E: {
        const [s, n] = e;
        if (t && s && n)
          return t >= s.value && t <= n.value;
        break;
      }
      default:
        return e.some((s) => s.value === t);
    }
    return !1;
  }
};
function Bt(t, e, s, n) {
  const a = t.map((r) => s ? p(r.fullText, s, n) : r.fullText);
  return !e || e === ot ? a[0] : a;
}
function Pt(t) {
  const e = {
    ...t.option
  };
  let s;
  return Object.keys(R).forEach((n) => {
    s = t[n], typeof s < "u" && (!Array.isArray(R[n]) || R[n].includes(s)) && (e[n] = s);
  }), t.value && (e.defaultDate = t.value), e;
}
const Vt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, a] of e)
    s[n] = a;
  return s;
}, Ht = {
  name: "ZxVueCalendar",
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: ""
    },
    type: {
      type: String,
      default: lt
    },
    mode: {
      type: String,
      default: ct
    },
    format: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    isFullWeek: Boolean,
    titleFormatter: {
      type: String,
      default: ""
    },
    itemSuffix: {
      type: String,
      default: ""
    },
    dateRange: {
      type: Array,
      default: () => []
    },
    showHoliday: Boolean,
    itemFormatter: {
      type: Function,
      default: void 0
    },
    langPackage: {
      type: Object,
      default: void 0
    },
    footerButtons: {
      type: Array,
      default: void 0
    },
    footerButtonAlign: {
      type: String,
      default: "flex-end"
    },
    hideFooter: Boolean,
    option: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      calendar: null,
      value: this.modelValue
    };
  },
  computed: {
    options() {
      return Pt(this);
    },
    fmt() {
      return typeof this.format == "string" ? this.format : null;
    }
  },
  mounted() {
    const t = new ut({
      ...this.options,
      el: this.$refs.el,
      defaultDate: this.value
    });
    t.on("change", (e) => {
      this.value = Bt(
        e,
        this.mode,
        this.fmt,
        this.options.langPackage
      ), this.$emit("change", this.value, e);
    }), t.on("error", (e) => {
      this.$emit("error", e);
    }), t.on("cancel", () => {
      this.$emit("cancel");
    }), this.calendar = t, this.$emit("instance", t);
  },
  methods: {
    setDate(t) {
      this.calendar.setDate(t);
    },
    toDate(t) {
      return this.calendar.toDate(t);
    },
    formatDate(t, e, s) {
      return this.calendar.formatDate(t, e, s);
    },
    setCurrentDate(t) {
      this.calendar.setCurrentDate(t);
    },
    setDateRange(t, e) {
      this.calendar.setDateRange(t, e);
    },
    prev(t) {
      this.calendar.prev(t);
    },
    next(t) {
      this.calendar.next(t);
    },
    getDate() {
      return this.calendar.getDate();
    }
  },
  watch: {
    modelValue(t) {
      this.value !== t && (this.value = t, this.setDate(t));
    },
    value(t) {
      this.$emit("update:modelValue", t);
    }
  }
}, Wt = { class: "zx-calendar-wrapper" }, Gt = { ref: "el" };
function zt(t, e, s, n, a, i) {
  return dt(), ht("div", Wt, [
    V(t.$slots, "header"),
    ft("div", Gt, null, 512),
    V(t.$slots, "footer")
  ]);
}
const Zt = /* @__PURE__ */ Vt(Ht, [["render", zt]]);
export {
  Zt as ZxVueCalendar
};
