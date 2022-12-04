/*!
 * zx-calendar version 0.7.0
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2022-11-27 17:48:55 (GMT+0900)
 */
const oe = "yyyy/MM", le = "yyyy-yyyy", re = "yyyy", g = "is-selected", K = "is-disabled", ce = "is-holiday", ue = "is-current", X = "is-range-first", q = "is-range-last", Z = "is-range-first-last", Q = "is-range-temp", B = "is-first-page", H = "is-last-page", de = "is-weekend", R = "date-only", F = "__prev-button", O = "__next-button", j = "__title-wrapper", ee = "__item-week", te = "__confirm-button", se = "__clear-button", ne = "__cancel-button", W = "multiple", m = "range", ae = "single", b = "date", Y = "month", N = "year", V = {
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
}, he = ["confirmButton", "cancelButton", "clearButton"], G = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function fe(e = "en", t) {
  const s = G[e] || G.en, n = he.reduce((i, o, c) => (i[o] = s[c], i), {}), a = V[e] || V.en;
  return n.weeks = t ? a.full : a.abbr, n;
}
function pe({ lang: e, isFullWeek: t, langPackage: s }) {
  return {
    langPackage: {
      ...fe(e, t),
      ...s
    }
  };
}
const ye = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function f(e) {
  return e >> 0;
}
function _e(e) {
  return /^-?\d+\.?\d+$/.test(e);
}
function S(e) {
  return typeof e == "string";
}
function U(e) {
  return typeof e == "function";
}
function C(e) {
  return e += "", e[1] ? e : "0" + e;
}
function p(e, t, s) {
  const n = M(e);
  if (!n || !t)
    return S(e) ? e : e + "";
  if (t === "timestamp")
    return +n;
  let a;
  /(y+)/i.test(t) && (a = RegExp.$1, t = t.replace(a, (n.getFullYear() + "").substr(4 - a.length)));
  const i = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "w+": n.getDay(),
    "W+": n.getDay(),
    "a+": n.getHours() < 12 ? "am" : "pm",
    "A+": n.getHours() < 12 ? "AM" : "PM"
  };
  s && Array.isArray(s.weeks) && (i["W+"] = s.weeks[n.getDay()]);
  for (const o in i)
    if (new RegExp("(" + o + ")").test(t)) {
      a = RegExp.$1;
      const c = i[o] + "";
      t = t.replace(a, a.length === 1 ? c : C(c));
    }
  return t;
}
function M(e) {
  if (!e)
    return null;
  if (e instanceof Date)
    return e;
  let t = null;
  if (_e(e)) {
    const s = e + "", n = s.length;
    n === 8 ? t = new Date(
      [s.substr(0, 4), s.substr(4, 2), s.substr(6, 2)].join("/")
    ) : n === 6 ? t = new Date([s.substr(0, 4), s.substr(4, 2), "01"].join("/")) : n === 4 ? t = new Date(s + "/01/01") : t = new Date(e);
  } else
    S(e) && (e = e.replace(/[年月日]/g, (s) => s === "\u65E5" ? "" : "/"), e = e.replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/gi, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : (t = new Date(e), isNaN(t.getFullYear()) && (t = null)));
  return t;
}
function ge({ current: e, currentDate: t }) {
  const s = e.slice(0, 2);
  s.push("01");
  const n = new Date(s.join("/")).getDay();
  let a = t.getFullYear(), i = t.getMonth() + 1;
  i === 12 ? (a += 1, i = 1) : i += 1;
  const o = new Date(
    `${a}/${C(i)}/01`
  ).getTime(), c = new Date(o - 1);
  return {
    firstDayOfWeek: n,
    lastDayOfMonth: c.getDate()
  };
}
function Ee(e) {
  const t = f(e.substr(2)), s = t % 20 === 0, n = Math.floor(t / 20);
  let a = (s ? n - 1 : n) * 20 + 1, i = f(e.substr(0, 2));
  n === 0 && t === 0 && (i -= 1, a = 81);
  const o = i * 100 + a, c = o + 19;
  return {
    startFullYear: o,
    endFullYear: c
  };
}
function _(e, t) {
  const s = [];
  if (Array.isArray(e)) {
    const [n, a] = e;
    let i = M(n), o = M(a);
    S(t) && (i = i ? +p(i, t) : null, o = o ? +p(o, t) : null), s.push(i), s.push(o);
  }
  return s;
}
function x({ data: e, options: t }) {
  const s = [];
  return t.mode === m && e.selected.forEach((n) => {
    s.push(n ? n.value : null);
  }), s;
}
function k(e, t, s) {
  return !!t && e < t || !!s && e > s;
}
function ie(e, { type: t, mode: s }) {
  const n = [];
  if (e) {
    Array.isArray(e) || (e = [e]), s === ae && e.length > 1 && (e = e.slice(0, 1)), s === m && e.length > 2 && (e = e.slice(0, 2));
    const a = ye[t];
    let i;
    e.forEach((o) => {
      i = M(o), i && n.push({
        value: f(p(i, a)),
        date: i,
        fullText: p(i, "yyyy/MM/dd")
      });
    }), n.sort((o, c) => o.value - c.value);
  }
  return n;
}
function I(e, t, s) {
  return t && t > e || s && s < e;
}
function me(e, t, s, n) {
  const a = [];
  switch (n) {
    case m: {
      const [i, o] = e;
      i && I(+i.date, t, s) && a.push(i), o && I(+o.date, t, s) && a.push(o);
      break;
    }
    default:
      e.forEach((i) => {
        I(+i.date, t, s) && a.push(i);
      });
  }
  return a.length > 0;
}
function Se(e) {
  const { options: t } = this;
  let s = null;
  const [n, a] = _(t.dateRange);
  if (n && +n > +s && (s = n), a && +a < +s && (s = a), e.length)
    if (me(
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
function $(e, { data: t, options: s }) {
  return s.mode === m && t.selected.length === 1 ? e === t.selected[0].value : !1;
}
function A(e) {
  if (typeof e > "u" && (e = "undefined"), e === null && (e = "null"), S(e))
    return document.createTextNode(e);
  const t = document.createElement(e.t || "div"), s = e.a;
  s && typeof s == "object" && Object.keys(s).forEach((a) => {
    t.setAttribute(a, s[a]);
  });
  const n = e.c;
  return Array.isArray(n) && n.length > 0 && n.forEach((a) => {
    t.appendChild(A(a));
  }), t;
}
function P(e, t = document) {
  if (!e)
    return null;
  let s = null;
  return S(e) ? s = t.querySelector(e) : typeof e == "object" && e.nodeType === 1 && (s = e), s;
}
function Te(e, t, s) {
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
const Ae = {
  a: {
    class: "zx-calendar"
  }
}, Me = {
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
            class: F
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [F, R].join(" ")
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
}, De = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, Re = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, be = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, Ne = {
  confirm: {
    t: "button",
    a: {
      class: te
    }
  },
  clear: {
    t: "button",
    a: {
      class: se
    }
  },
  cancel: {
    t: "button",
    a: {
      class: ne
    }
  }
};
function Ce(e, t) {
  if (t.type !== b)
    return null;
  const s = JSON.parse(JSON.stringify(De));
  return e.forEach((n, a) => {
    const i = a === 0 || a === 6;
    s.c.push({
      a: {
        class: ee + (i ? " " + de : "")
      },
      c: [n]
    });
  }), A(s);
}
function w(e, t, s, n) {
  const a = e.some((o) => t && o.value && o.value < t), i = e.some((o) => s && o.value && o.value > s);
  a ? L(n, B) : D(n, B), i ? L(n, H) : D(n, H);
}
function v(e, t, { titleFormatter: s, type: n, itemSuffix: a, showHoliday: i }, { header: o, body: c }) {
  const d = t[e] || [];
  let u = null;
  if (n === N) {
    const E = d[0], r = d[d.length - 1];
    let y = 0;
    u = s.replace(/(y+)/g, () => y++ === 0 ? E.text : r.text);
  } else
    u = p(t.currentDate, s);
  P("." + j, o).innerText = u;
  let l, h, T;
  c.innerHTML = d.reduce((E, r, y) => (l = ["__item"], r.disabled && l.push(K), r.value > 0 ? (T = "", r.holiday && (l.push(ce), T = ` title="${r.holiday}"`), r.selected && l.push(g), r.current && l.push(ue), r.isRangeFirst && r.isRangeLast ? l.push(Z) : (r.isRangeFirst && l.push(X), r.isRangeLast && l.push(q)), r.isRangeTemp && l.push(Q), h = [
    `<div class="${l.join(" ")}" data-index="${y}"${T}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${r.text}`), a && h.push(`<span class="__suffix">${a}</span>`), i && r.holiday && h.push(`<span class="__holiday">${r.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${l.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], E.push(h.join("")), E), []).join("");
}
function z(e, { body: t }, s) {
  const [...n] = t.querySelectorAll("." + g);
  n.forEach((a) => {
    D(a, g), s && D(
      a,
      X,
      q,
      Z
    );
  }), L(e, s ? Q : g);
}
const xe = "single", ke = "multiple", Ie = "range", $e = "date", we = "month", ve = "year", Fe = {
  date: "yyyy/MM/dd",
  month: "yyyy/MM",
  year: "yyyy"
}, Oe = {
  type: ["date", "month", "year"],
  lang: ["jp", "zh", "en"],
  isFullWeek: !1,
  titleFormatter: null,
  itemSuffix: null,
  defaultDate: null,
  dateRange: null,
  showHoliday: !1,
  itemFormatter: null,
  mode: ["single", "multiple", "range"],
  langPackage: null,
  footerButtons: null,
  footerButtonAlign: null,
  hideFooter: !1
}, Le = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: b,
  isFullWeek: !1,
  titleFormatter: oe,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: ae,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1
};
function J(e = {}) {
  const t = {
    ...Le,
    ...e
  };
  if (e.titleFormatter || (t.type === N ? t.titleFormatter = le : t.type === Y && (t.titleFormatter = re)), !t.el || !P(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: s } = pe(t);
  this.langPackage = s, this.$els = {};
  const n = new Date(), a = p(n, "yyyy/MM/dd", s);
  let i = [];
  try {
    i = ie(t.defaultDate, t);
  } catch (d) {
    setTimeout(() => {
      this.emit("error", d);
    }, 0);
  }
  const o = Se.call(this, i) || n, c = p(o, "yyyy/MM/dd");
  this.data = {
    today: a,
    currentDate: o,
    currentDay: c,
    current: c.split("/"),
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
    const t = M(e);
    return t || this.emit("error", new Error(`"${e}" is an invalid Date!`)), t;
  },
  emit(...e) {
    const t = e[0];
    this._eventList[t] && this._eventList[t].forEach((s) => {
      s.apply(this, e.slice(1));
    });
  },
  on(e, t) {
    !S(e) || !U(t) || (this._eventList[e] || (this._eventList[e] = []), this._eventList[e].push(t));
  },
  off(e) {
    !S(e) || !this._eventList[e] || (this._eventList[e].length = 0);
  },
  _initDom() {
    const e = this.options, t = P(e.el), s = JSON.parse(JSON.stringify(Ae)), n = [
      s.a.class,
      "type-is-" + e.type,
      "mode-is-" + e.mode
    ];
    s.a.class = n.join(" ");
    const a = A(s), i = A(Me);
    a.appendChild(i);
    const o = Ce(this.langPackage.weeks, e);
    o && a.appendChild(o);
    const c = A(Re);
    if (a.appendChild(c), !e.hideFooter && (e.mode === W || e.mode === m)) {
      const d = JSON.parse(JSON.stringify(be));
      e.footerButtons.forEach((l) => {
        d.c.push({
          ...Ne[l],
          c: [this.langPackage[l + "Button"]]
        });
      });
      const u = A(d);
      e.footerButtonAlign && (u.style.justifyContent = e.footerButtonAlign), a.appendChild(u);
    }
    t.appendChild(a), this.$els = {
      calendar: a,
      header: i,
      week: o,
      body: c,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(e) {
    e.stopPropagation();
    const t = e.target, s = t.className.split(" "), n = t.innerText;
    if (s.includes(F))
      this.prev(!s.includes(R));
    else if (s.includes(O))
      this.next(!s.includes(R));
    else if (s.includes(te))
      this.emit("change", [...this.data.selected]);
    else if (s.includes(ne))
      this.emit("cancel");
    else if (s.includes(se))
      this.setDate();
    else if (s.includes(j))
      this._onTitleClick({
        innerText: n,
        el: t,
        className: s
      });
    else if (s.includes(ee))
      this._onWeekClick({
        innerText: n,
        el: t,
        className: s
      });
    else {
      const a = Te(t, s, this.$els.calendar);
      a.el && this._onItemClick(a);
    }
  },
  _onTitleClick(e) {
    this.emit("onTitleClick", e);
  },
  prev(e) {
    let [t, s] = this.data.current;
    switch (this.options.type) {
      case b:
        if (e) {
          t = f(t) - 1;
          const [n] = _(this.options.dateRange, "yyyy");
          if (n && t <= n) {
            t = n;
            const [a] = _(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = f(s) - 1, s === 0 && (t = f(t) - 1, s = 12);
        this.setCurrentDate([t, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(t - 1);
        break;
      case N: {
        const n = this.data.years[0] || {};
        this.setCurrentDate(n.value - 1);
        break;
      }
    }
  },
  next(e) {
    let [t, s] = this.data.current;
    switch (this.options.type) {
      case b:
        if (e) {
          t = f(t) + 1;
          const [, n] = _(this.options.dateRange, "yyyy");
          if (n && t >= n) {
            t = n;
            const [, a] = _(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = f(s) + 1, s === 13 && (t = f(t) + 1, s = 1);
        this.setCurrentDate([t, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(f(t) + 1);
        break;
      case N: {
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
    if (this.options.mode === m) {
      const i = [...this.data.selected], o = i.length;
      o === 0 || o >= 2 && i.every((c) => !!c) ? (this.data.selected = [a], z(e, this.$els, !0)) : o === 1 && (i[0].value < a.value ? this.data.selected.push(a) : this.data.selected.unshift(a), this._updateDom());
    } else if (this.options.mode === W)
      if (t.includes(g)) {
        D(e, g);
        const i = this.data.selected.findIndex(
          (o) => o.value === a.value
        );
        this.data.selected.splice(i, 1);
      } else
        L(e, g), a.selected = !0, this.data.selected.push(a);
    else
      t.includes(g) || (z(e, this.$els), a.selected = !0, this.data.selected = [{ ...a }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(e, t) {
    this.options.dateRange = [e, t], this._updateDom();
  },
  setDate(e) {
    try {
      if (this.data.selected = ie(e, this.options), this.data.selected.length === 0) {
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
        this.createDays(), v("dates", this.data, this.options, this.$els);
        break;
      case "month":
        this.createMonths(), v("months", this.data, this.options, this.$els);
        break;
      case "year":
        this.createYears(), v("years", this.data, this.options, this.$els);
        break;
    }
  },
  createYears() {
    const [e, t] = _(
      this.options.dateRange,
      "yyyy"
    ), [s, n] = x(this), a = [], i = this.data.today.substr(0, 4), { startFullYear: o, endFullYear: c } = Ee(this.data.current[0]);
    let d;
    for (let u = o; u <= c; u++)
      d = u.toString(), a.push({
        text: d,
        fullText: d,
        value: u,
        disabled: k(u, e, t),
        isRangeFirst: u === s && n,
        isRangeLast: u === n && s,
        isRangeTemp: $(u, this),
        selected: this._isSelected(u),
        current: i === d,
        date: this.toDate(d)
      });
    this.data.years = a, w(a, e, t, this.$els.calendar);
  },
  createMonths() {
    const [e, t] = _(
      this.options.dateRange,
      "yyyyMM"
    ), [s, n] = x(this), a = [], i = this.data.today.substr(0, 7), o = this.data.current[0] + "/", c = f(this.data.current[0]) * 100;
    let d, u, l;
    for (let h = 1; h <= 12; h++)
      d = C(h), u = o + d, l = c + h, a.push({
        text: d,
        fullText: u,
        value: l,
        disabled: k(l, e, t),
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: $(l, this),
        selected: this._isSelected(l),
        current: u.startsWith(i),
        date: this.toDate(u)
      });
    this.data.months = a, w(
      a,
      e,
      t,
      this.$els.calendar
    );
  },
  createDays() {
    const [e, t] = _(
      this.options.dateRange,
      "yyyyMMdd"
    ), [s, n] = x(this), { firstDayOfWeek: a, lastDayOfMonth: i } = ge(this.data), o = new Array(a).fill(0);
    for (let r = 1; r <= i; r++)
      o.push(r);
    if (o.length % 7 !== 0)
      for (let r = 0; r < o.length % 7; r++)
        o.push(0);
    let c = 0, d, u, l;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: T } = this.options, E = o.map((r) => {
      c > 6 && (c = 0), d = r > 0 ? C(r) : "";
      const y = h + d;
      return l = r > 0 ? +y.replace(/\//g, "") : 0, u = {
        text: d,
        fullText: r > 0 ? y : "",
        value: l,
        week: c++,
        disabled: !r || k(l, e, t),
        holiday: !1,
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: $(l, this),
        selected: this._isSelected(l),
        current: this.data.today === y,
        date: r > 0 ? this.toDate(y) : null
      }, U(T) ? T(u) : u;
    });
    this.data.dates = E, w(E, e, t, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(e) {
    const t = this.data.selected;
    switch (this.options.mode) {
      case m: {
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
  Oe as DEF_OPTIONS,
  Fe as FORMATTERS,
  ke as MODE_MULTIPLE,
  Ie as MODE_RANGE,
  xe as MODE_SINGLE,
  $e as TYPE_DATE,
  we as TYPE_MONTH,
  ve as TYPE_YEAR,
  J as ZxCalendar,
  J as default
};
