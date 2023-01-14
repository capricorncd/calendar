/*!
 * zx-calendar version 0.7.0
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2023-01-14 18:34:34 (GMT+0900)
 */
const it = "yyyy/MM", ot = "yyyy-yyyy", rt = "yyyy", _ = "is-selected", K = "is-disabled", lt = "is-holiday", ct = "is-current", X = "is-range-first", q = "is-range-last", Z = "is-range-first-last", Q = "is-range-temp", B = "is-first-page", H = "is-last-page", ut = "is-weekend", R = "date-only", v = "__prev-button", O = "__next-button", j = "__title-wrapper", tt = "__item-week", et = "__confirm-button", st = "__clear-button", nt = "__cancel-button", W = "multiple", E = "range", dt = "single", F = "date", Y = "month", b = "year", V = {
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
}, ht = ["confirmButton", "cancelButton", "clearButton"], G = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function ft(e = "en", t) {
  const s = G[e] || G.en, n = ht.reduce((i, o, r) => (i[o] = s[r], i), {}), a = V[e] || V.en;
  return n.weeks = t ? a.full : a.abbr, n;
}
function pt({ lang: e, isFullWeek: t, langPackage: s }) {
  return {
    langPackage: {
      ...ft(e, t),
      ...s
    }
  };
}
/*!
 * date-utils-2020 v1.1.0
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2023/01/14 14:10:19 GMT+0900
 */
function C(e) {
  return String(e).padStart(2, "0");
}
const yt = {
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function p(e, t, s) {
  const n = A(e);
  if (!n || !t)
    return String(e);
  if (t === "timestamp")
    return n.getTime().toString();
  if (/(y+)/i.test(t)) {
    const o = RegExp.$1;
    t = t.replace(o, (n.getFullYear() + "").substring(4 - o.length));
  }
  (!s || !Array.isArray(s.weeks)) && (s = yt);
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
  for (const o in a)
    if (new RegExp("(" + o + ")").test(t)) {
      i = RegExp.$1;
      const r = a[o] + "";
      t = t.replace(i, i.length === 1 ? r : C(r));
    }
  if (/w+/i.test(t)) {
    const o = n.getDay();
    t = t.replace(/w+/i, /W+/.test(t) ? s.weeks[o] : String(o));
  }
  if (/g/i.test(t)) {
    const o = n.toString().split(/\s+/).slice(5), r = t.includes("g");
    t = t.replace(/g/i, r ? o[0] : o.join(" "));
  }
  return t;
}
function A(e) {
  let t = null;
  if (e instanceof Date)
    t = e;
  else if (typeof e == "number")
    t = new Date(e);
  else if (typeof e == "string") {
    let s = e.trim();
    if (/^\d+$/.test(s)) {
      const n = s.length;
      n === 8 ? t = new Date([s.substring(0, 4), s.substring(4, 6), s.substring(6, 8)].join("/")) : n === 6 ? t = new Date([s.substring(0, 4), s.substring(4, 6), "01"].join("/")) : n === 4 ? t = new Date(s + "/01/01") : t = new Date(parseInt(e));
    } else
      s = s.replace(/[年月日]/g, (n) => n === "\u65E5" ? "" : "/").replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/ig, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(s) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(s) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : t = new Date(s);
  }
  return t && !isNaN(t.getFullYear()) ? t : null;
}
const gt = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function f(e) {
  return e >> 0;
}
function M(e) {
  return typeof e == "string";
}
function U(e) {
  return typeof e == "function";
}
function _t({ current: e, currentDate: t }) {
  const s = e.slice(0, 2);
  s.push("01");
  const n = new Date(s.join("/")).getDay();
  let a = t.getFullYear(), i = t.getMonth() + 1;
  i === 12 ? (a += 1, i = 1) : i += 1;
  const o = new Date(
    `${a}/${C(i)}/01`
  ).getTime(), r = new Date(o - 1);
  return {
    firstDayOfWeek: n,
    lastDayOfMonth: r.getDate()
  };
}
function mt(e) {
  const t = f(e.substr(2)), s = t % 20 === 0, n = Math.floor(t / 20);
  let a = (s ? n - 1 : n) * 20 + 1, i = f(e.substr(0, 2));
  n === 0 && t === 0 && (i -= 1, a = 81);
  const o = i * 100 + a, r = o + 19;
  return {
    startFullYear: o,
    endFullYear: r
  };
}
function g(e, t) {
  const s = [];
  if (Array.isArray(e)) {
    const [n, a] = e;
    let i = A(n), o = A(a);
    M(t) && (i = i ? +p(i, t) : null, o = o ? +p(o, t) : null), s.push(i), s.push(o);
  }
  return s;
}
function N({ data: e, options: t }) {
  const s = [];
  return t.mode === E && e.selected.forEach((n) => {
    s.push(n ? n.value : null);
  }), s;
}
function x(e, t, s) {
  return !!t && e < t || !!s && e > s;
}
function at(e, { type: t, mode: s }) {
  const n = [];
  if (e) {
    Array.isArray(e) || (e = [e]), s === dt && e.length > 1 && (e = e.slice(0, 1)), s === E && e.length > 2 && (e = e.slice(0, 2));
    const a = gt[t];
    let i;
    e.forEach((o) => {
      i = A(o), i && n.push({
        value: f(p(i, a)),
        date: i,
        fullText: p(i, "yyyy/MM/dd")
      });
    }), n.sort((o, r) => o.value - r.value);
  }
  return n;
}
function k(e, t, s) {
  return t && t > e || s && s < e;
}
function Et(e, t, s, n) {
  const a = [];
  switch (n) {
    case E: {
      const [i, o] = e;
      i && k(+i.date, t, s) && a.push(i), o && k(+o.date, t, s) && a.push(o);
      break;
    }
    default:
      e.forEach((i) => {
        k(+i.date, t, s) && a.push(i);
      });
  }
  return a.length > 0;
}
function St(e) {
  const { options: t } = this;
  let s = null;
  const [n, a] = g(t.dateRange);
  if (n && +n > +s && (s = n), a && +a < +s && (s = a), e.length)
    if (Et(
      e,
      n,
      a,
      t.type
    )) {
      let i = setTimeout(() => {
        this.emit(
          "error",
          new Error(
            `The default date[${t.defaultDate}] is not within the range[${t.dateRange}].`
          )
        ), clearTimeout(i), i = null;
      }, 0);
    } else
      s = e[0].date;
  return s;
}
function I(e, { data: t, options: s }) {
  return s.mode === E && t.selected.length === 1 ? e === t.selected[0].value : !1;
}
function T(e) {
  if (typeof e > "u" && (e = "undefined"), e === null && (e = "null"), M(e))
    return document.createTextNode(e);
  const t = document.createElement(e.t || "div"), s = e.a;
  s && typeof s == "object" && Object.keys(s).forEach((a) => {
    t.setAttribute(a, s[a]);
  });
  const n = e.c;
  return Array.isArray(n) && n.length > 0 && n.forEach((a) => {
    t.appendChild(T(a));
  }), t;
}
function P(e, t = document) {
  if (!e)
    return null;
  let s = null;
  return M(e) ? s = t.querySelector(e) : typeof e == "object" && e.nodeType === 1 && (s = e), s;
}
function Tt(e, t, s) {
  const n = "__item", a = {};
  if (t.includes(n))
    a.el = e, a.className = t;
  else if (e !== s) {
    let i = e.parentElement;
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
function D(...e) {
  const t = e[0], s = e.slice(1), n = [];
  t.className.split(" ").forEach((a) => {
    s.includes(a) || n.push(a);
  }), t.className = n.join(" ");
}
function L(...e) {
  const t = e[0], s = t.className.split(" ");
  e.slice(1).forEach((n) => {
    s.includes(n) || s.push(n);
  }), t.className = s.join(" ");
}
const At = {
  a: {
    class: "zx-calendar"
  }
}, Mt = {
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
            class: v
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [v, R].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: j
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
            class: [O, R].join(" ")
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: O
          }
        }
      ]
    }
  ]
}, Dt = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, Rt = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, bt = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, Ct = {
  confirm: {
    t: "button",
    a: {
      class: et
    }
  },
  clear: {
    t: "button",
    a: {
      class: st
    }
  },
  cancel: {
    t: "button",
    a: {
      class: nt
    }
  }
};
function Lt(e, t) {
  if (t.type !== F)
    return null;
  const s = JSON.parse(JSON.stringify(Dt));
  return e.forEach((n, a) => {
    const i = a === 0 || a === 6;
    s.c.push({
      a: {
        class: tt + (i ? " " + ut : "")
      },
      c: [n]
    });
  }), T(s);
}
function w(e, t, s, n) {
  const a = e.some((o) => t && o.value && o.value < t), i = e.some((o) => s && o.value && o.value > s);
  a ? L(n, B) : D(n, B), i ? L(n, H) : D(n, H);
}
function $(e, t, { titleFormatter: s, type: n, itemSuffix: a, showHoliday: i }, { header: o, body: r }) {
  const u = t[e] || [];
  let d = null;
  if (n === b) {
    const m = u[0], c = u[u.length - 1];
    let y = 0;
    d = s.replace(/(y+)/g, () => y++ === 0 ? m.text : c.text);
  } else
    d = p(t.currentDate, s);
  P("." + j, o).innerText = d;
  let l, h, S;
  r.innerHTML = u.reduce((m, c, y) => (l = ["__item"], c.disabled && l.push(K), c.value > 0 ? (S = "", c.holiday && (l.push(lt), S = ` title="${c.holiday}"`), c.selected && l.push(_), c.current && l.push(ct), c.isRangeFirst && c.isRangeLast ? l.push(Z) : (c.isRangeFirst && l.push(X), c.isRangeLast && l.push(q)), c.isRangeTemp && l.push(Q), h = [
    `<div class="${l.join(" ")}" data-index="${y}"${S}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${c.text}`), a && h.push(`<span class="__suffix">${a}</span>`), i && c.holiday && h.push(`<span class="__holiday">${c.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${l.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], m.push(h.join("")), m), []).join("");
}
function z(e, { body: t }, s) {
  const [...n] = t.querySelectorAll("." + _);
  n.forEach((a) => {
    D(a, _), s && D(
      a,
      X,
      q,
      Z
    );
  }), L(e, s ? Q : _);
}
const Nt = "single", wt = "multiple", $t = "range", xt = "date", vt = "month", Ot = "year", Ft = {
  date: "yyyy/MM/dd",
  month: "yyyy/MM",
  year: "yyyy"
}, kt = {
  primary: "#f30",
  arrow: "#999",
  holidayDot: "rgba(0, 0, 0, 0.2)",
  currentItemBg: "#eee",
  white: "#fff",
  rangeBg: "#eee"
}, It = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: xt,
  isFullWeek: !1,
  titleFormatter: it,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: Nt,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1,
  colors: {}
};
function J(e = {}) {
  const t = {
    ...It,
    ...e,
    colors: {
      ...kt,
      ...e.colors
    }
  };
  if (e.titleFormatter || (t.type === b ? t.titleFormatter = ot : t.type === Y && (t.titleFormatter = rt)), !t.el || !P(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: s } = pt(t);
  this.langPackage = s, this.$els = {};
  const n = new Date(), a = p(n, "yyyy/MM/dd", s);
  let i = [];
  try {
    i = at(t.defaultDate, t);
  } catch (u) {
    setTimeout(() => {
      this.emit("error", u);
    }, 0);
  }
  const o = St.call(this, i) || n, r = p(o, "yyyy/MM/dd");
  this.data = {
    today: a,
    currentDate: o,
    currentDay: r,
    current: r.split("/"),
    selected: i,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
J.prototype = {
  constructor: J,
  formatDate(e, t, s) {
    return s || (s = this.langPackage), p(e, t, s);
  },
  toDate(e) {
    const t = A(e);
    return t || this.emit("error", new Error(`"${e}" is an invalid Date!`)), t;
  },
  emit(...e) {
    const t = e[0];
    this._eventList[t] && this._eventList[t].forEach((s) => {
      s.apply(this, e.slice(1));
    });
  },
  on(e, t) {
    !M(e) || !U(t) || (this._eventList[e] || (this._eventList[e] = []), this._eventList[e].push(t));
  },
  off(e) {
    !M(e) || !this._eventList[e] || (this._eventList[e].length = 0);
  },
  _initDom() {
    const e = this.options, t = P(e.el), s = JSON.parse(JSON.stringify(At)), n = [
      s.a.class,
      "type-is-" + e.type,
      "mode-is-" + e.mode
    ];
    s.a.class = n.join(" "), s.a.style = Object.keys(e.colors).map((u) => `--zx-calendar-color-${u}: ${e.colors[u]}`).join(";");
    const a = T(s), i = T(Mt);
    a.appendChild(i);
    const o = Lt(this.langPackage.weeks, e);
    o && a.appendChild(o);
    const r = T(Rt);
    if (a.appendChild(r), !e.hideFooter && (e.mode === W || e.mode === E)) {
      const u = JSON.parse(JSON.stringify(bt));
      e.footerButtons.forEach((l) => {
        u.c.push({
          ...Ct[l],
          c: [this.langPackage[l + "Button"]]
        });
      });
      const d = T(u);
      e.footerButtonAlign && (d.style.justifyContent = e.footerButtonAlign), a.appendChild(d);
    }
    t.appendChild(a), this.$els = {
      calendar: a,
      header: i,
      week: o,
      body: r,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(e) {
    e.stopPropagation();
    const t = e.target, s = t.className.split(" "), n = t.innerText;
    if (s.includes(v))
      this.prev(!s.includes(R));
    else if (s.includes(O))
      this.next(!s.includes(R));
    else if (s.includes(et))
      this.emit("change", [...this.data.selected]);
    else if (s.includes(nt))
      this.emit("cancel");
    else if (s.includes(st))
      this.setDate();
    else if (s.includes(j))
      this._onTitleClick({
        innerText: n,
        el: t,
        className: s
      });
    else if (s.includes(tt))
      this._onWeekClick({
        innerText: n,
        el: t,
        className: s
      });
    else {
      const a = Tt(t, s, this.$els.calendar);
      a.el && this._onItemClick(a);
    }
  },
  _onTitleClick(e) {
    this.emit("onTitleClick", e);
  },
  prev(e) {
    let [t, s] = this.data.current;
    switch (this.options.type) {
      case F:
        if (e) {
          t = f(t) - 1;
          const [n] = g(this.options.dateRange, "yyyy");
          if (n && t <= n) {
            t = n;
            const [a] = g(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = f(s) - 1, s === 0 && (t = f(t) - 1, s = 12);
        this.setCurrentDate([t, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(t - 1);
        break;
      case b: {
        const n = this.data.years[0] || {};
        this.setCurrentDate(n.value - 1);
        break;
      }
    }
  },
  next(e) {
    let [t, s] = this.data.current;
    switch (this.options.type) {
      case F:
        if (e) {
          t = f(t) + 1;
          const [, n] = g(this.options.dateRange, "yyyy");
          if (n && t >= n) {
            t = n;
            const [, a] = g(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = f(s) + 1, s === 13 && (t = f(t) + 1, s = 1);
        this.setCurrentDate([t, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(f(t) + 1);
        break;
      case b: {
        const n = this.data.years, a = n[n.length - 1] || {};
        this.setCurrentDate(a.value + 1);
        break;
      }
    }
  },
  _onWeekClick(e) {
    this.emit("onWeekClick", e);
  },
  _onItemClick({ el: e, className: t, index: s }) {
    if (t.includes(K))
      return;
    const a = (this.data[this.options.type + "s"] || [])[s] || {};
    if (this.options.mode === E) {
      const i = [...this.data.selected], o = i.length;
      o === 0 || o >= 2 && i.every((r) => !!r) ? (this.data.selected = [a], z(e, this.$els, !0)) : o === 1 && (i[0].value < a.value ? this.data.selected.push(a) : this.data.selected.unshift(a), this._updateDom());
    } else if (this.options.mode === W)
      if (t.includes(_)) {
        D(e, _);
        const i = this.data.selected.findIndex(
          (o) => o.value === a.value
        );
        this.data.selected.splice(i, 1);
      } else
        L(e, _), a.selected = !0, this.data.selected.push(a);
    else
      t.includes(_) || (z(e, this.$els), a.selected = !0, this.data.selected = [{ ...a }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(e, t) {
    this.options.dateRange = [e, t], this._updateDom();
  },
  setDate(e) {
    try {
      if (this.data.selected = at(e, this.options), this.data.selected.length === 0) {
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
  setCurrentDate(e) {
    const t = this.toDate(e);
    if (!t)
      return;
    const s = p(t, "yyyy/MM/dd");
    this.data.currentDate = t, this.data.currentDay = s, this.data.current = s.split("/"), this._updateDom();
  },
  _updateDom() {
    switch (this.options.type) {
      case "date":
        this.createDays(), $("dates", this.data, this.options, this.$els);
        break;
      case "month":
        this.createMonths(), $("months", this.data, this.options, this.$els);
        break;
      case "year":
        this.createYears(), $("years", this.data, this.options, this.$els);
        break;
    }
  },
  createYears() {
    const [e, t] = g(
      this.options.dateRange,
      "yyyy"
    ), [s, n] = N(this), a = [], i = this.data.today.substr(0, 4), { startFullYear: o, endFullYear: r } = mt(this.data.current[0]);
    let u;
    for (let d = o; d <= r; d++)
      u = d.toString(), a.push({
        text: u,
        fullText: u,
        value: d,
        disabled: x(d, e, t),
        isRangeFirst: d === s && n,
        isRangeLast: d === n && s,
        isRangeTemp: I(d, this),
        selected: this._isSelected(d),
        current: i === u,
        date: this.toDate(u)
      });
    this.data.years = a, w(a, e, t, this.$els.calendar);
  },
  createMonths() {
    const [e, t] = g(
      this.options.dateRange,
      "yyyyMM"
    ), [s, n] = N(this), a = [], i = this.data.today.substr(0, 7), o = this.data.current[0] + "/", r = f(this.data.current[0]) * 100;
    let u, d, l;
    for (let h = 1; h <= 12; h++)
      u = C(h), d = o + u, l = r + h, a.push({
        text: u,
        fullText: d,
        value: l,
        disabled: x(l, e, t),
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: I(l, this),
        selected: this._isSelected(l),
        current: d.startsWith(i),
        date: this.toDate(d)
      });
    this.data.months = a, w(
      a,
      e,
      t,
      this.$els.calendar
    );
  },
  createDays() {
    const [e, t] = g(
      this.options.dateRange,
      "yyyyMMdd"
    ), [s, n] = N(this), { firstDayOfWeek: a, lastDayOfMonth: i } = _t(this.data), o = new Array(a).fill(0);
    for (let c = 1; c <= i; c++)
      o.push(c);
    if (o.length % 7 !== 0)
      for (let c = 0; c < o.length % 7; c++)
        o.push(0);
    let r = 0, u, d, l;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: S } = this.options, m = o.map((c) => {
      r > 6 && (r = 0), u = c > 0 ? C(c) : "";
      const y = h + u;
      return l = c > 0 ? +y.replace(/\//g, "") : 0, d = {
        text: u,
        fullText: c > 0 ? y : "",
        value: l,
        week: r++,
        disabled: !c || x(l, e, t),
        holiday: !1,
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: I(l, this),
        selected: this._isSelected(l),
        current: this.data.today === y,
        date: c > 0 ? this.toDate(y) : null
      }, U(S) ? S(d) : d;
    });
    this.data.dates = m, w(m, e, t, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(e) {
    const t = this.data.selected;
    switch (this.options.mode) {
      case E: {
        const [s, n] = t;
        if (e && s && n)
          return e >= s.value && e <= n.value;
        break;
      }
      default:
        return t.some((s) => s.value === e);
    }
    return !1;
  }
};
export {
  kt as DEF_COLORS,
  It as DEF_OPTIONS,
  Ft as FORMATTERS,
  wt as MODE_MULTIPLE,
  $t as MODE_RANGE,
  Nt as MODE_SINGLE,
  xt as TYPE_DATE,
  vt as TYPE_MONTH,
  Ot as TYPE_YEAR,
  J as ZxCalendar,
  J as default
};
