/*!
 * zx-calendar version 0.7.0
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2022-12-07 20:56:38 (GMT+0900)
 */
const le = "yyyy/MM", ce = "yyyy-yyyy", ue = "yyyy", E = "is-selected", Z = "is-disabled", de = "is-holiday", he = "is-current", q = "is-range-first", Q = "is-range-last", ee = "is-range-first-last", te = "is-range-temp", H = "is-first-page", V = "is-last-page", fe = "is-weekend", M = "date-only", O = "__prev-button", j = "__next-button", P = "__title-wrapper", se = "__item-week", ne = "__confirm-button", ae = "__clear-button", ie = "__cancel-button", z = "multiple", S = "range", re = "single", C = "date", Y = "month", b = "year", U = {
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
}, pe = ["confirmButton", "cancelButton", "clearButton"], G = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function ye(e = "en", t) {
  const s = G[e] || G.en, n = pe.reduce((i, r, d) => (i[r] = s[d], i), {}), a = U[e] || U.en;
  return n.weeks = t ? a.full : a.abbr, n;
}
function _e({ lang: e, isFullWeek: t, langPackage: s }) {
  return {
    langPackage: {
      ...ye(e, t),
      ...s
    }
  };
}
const ge = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function p(e) {
  return e >> 0;
}
function me(e) {
  return /^-?\d+\.?\d+$/.test(e);
}
function D(e) {
  return typeof e == "string";
}
function J(e) {
  return typeof e == "function";
}
function v(e) {
  return e += "", e[1] ? e : "0" + e;
}
function _(e, t, s) {
  const n = T(e);
  if (!n || !t)
    return D(e) ? e : e + "";
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
  for (const r in i)
    if (new RegExp("(" + r + ")").test(t)) {
      a = RegExp.$1;
      const d = i[r] + "";
      t = t.replace(a, a.length === 1 ? d : v(d));
    }
  return t;
}
function T(e) {
  if (!e)
    return null;
  if (e instanceof Date)
    return e;
  let t = null;
  if (me(e)) {
    const s = e + "", n = s.length;
    n === 8 ? t = new Date(
      [s.substr(0, 4), s.substr(4, 2), s.substr(6, 2)].join("/")
    ) : n === 6 ? t = new Date([s.substr(0, 4), s.substr(4, 2), "01"].join("/")) : n === 4 ? t = new Date(s + "/01/01") : t = new Date(e);
  } else
    D(e) && (e = e.replace(/[年月日]/g, (s) => s === "\u65E5" ? "" : "/"), e = e.replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/gi, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : (t = new Date(e), isNaN(t.getFullYear()) && (t = null)));
  return t;
}
function Ee({ current: e, currentDate: t }) {
  const s = e.slice(0, 2);
  s.push("01");
  const n = new Date(s.join("/")).getDay();
  let a = t.getFullYear(), i = t.getMonth() + 1;
  i === 12 ? (a += 1, i = 1) : i += 1;
  const r = new Date(
    `${a}/${v(i)}/01`
  ).getTime(), d = new Date(r - 1);
  return {
    firstDayOfWeek: n,
    lastDayOfMonth: d.getDate()
  };
}
function Se(e) {
  const t = p(e.substr(2)), s = t % 20 === 0, n = Math.floor(t / 20);
  let a = (s ? n - 1 : n) * 20 + 1, i = p(e.substr(0, 2));
  n === 0 && t === 0 && (i -= 1, a = 81);
  const r = i * 100 + a, d = r + 19;
  return {
    startFullYear: r,
    endFullYear: d
  };
}
function m(e, t) {
  const s = [];
  if (Array.isArray(e)) {
    const [n, a] = e;
    let i = T(n), r = T(a);
    D(t) && (i = i ? +_(i, t) : null, r = r ? +_(r, t) : null), s.push(i), s.push(r);
  }
  return s;
}
function x({ data: e, options: t }) {
  const s = [];
  return t.mode === S && e.selected.forEach((n) => {
    s.push(n ? n.value : null);
  }), s;
}
function L(e, t, s) {
  return !!t && e < t || !!s && e > s;
}
function oe(e, { type: t, mode: s }) {
  const n = [];
  if (e) {
    Array.isArray(e) || (e = [e]), s === re && e.length > 1 && (e = e.slice(0, 1)), s === S && e.length > 2 && (e = e.slice(0, 2));
    const a = ge[t];
    let i;
    e.forEach((r) => {
      i = T(r), i && n.push({
        value: p(_(i, a)),
        date: i,
        fullText: _(i, "yyyy/MM/dd")
      });
    }), n.sort((r, d) => r.value - d.value);
  }
  return n;
}
function $(e, t, s) {
  return t && t > e || s && s < e;
}
function De(e, t, s, n) {
  const a = [];
  switch (n) {
    case S: {
      const [i, r] = e;
      i && $(+i.date, t, s) && a.push(i), r && $(+r.date, t, s) && a.push(r);
      break;
    }
    default:
      e.forEach((i) => {
        $(+i.date, t, s) && a.push(i);
      });
  }
  return a.length > 0;
}
function Ae(e) {
  const { options: t } = this;
  let s = null;
  const [n, a] = m(t.dateRange);
  if (n && +n > +s && (s = n), a && +a < +s && (s = a), e.length)
    if (De(
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
function k(e, { data: t, options: s }) {
  return s.mode === S && t.selected.length === 1 ? e === t.selected[0].value : !1;
}
function A(e) {
  if (typeof e > "u" && (e = "undefined"), e === null && (e = "null"), D(e))
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
function W(e, t = document) {
  if (!e)
    return null;
  let s = null;
  return D(e) ? s = t.querySelector(e) : typeof e == "object" && e.nodeType === 1 && (s = e), s;
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
  return a.el && (a.index = p(a.el.getAttribute("data-index"))), a;
}
function R(...e) {
  const t = e[0], s = e.slice(1), n = [];
  t.className.split(" ").forEach((a) => {
    s.includes(a) || n.push(a);
  }), t.className = n.join(" ");
}
function N(...e) {
  const t = e[0], s = t.className.split(" ");
  e.slice(1).forEach((n) => {
    s.includes(n) || s.push(n);
  }), t.className = s.join(" ");
}
const Re = {
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
            class: O
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [O, M].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: P
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
            class: [j, M].join(" ")
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: j
          }
        }
      ]
    }
  ]
}, Ce = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, be = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, ve = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, Ne = {
  confirm: {
    t: "button",
    a: {
      class: ne
    }
  },
  clear: {
    t: "button",
    a: {
      class: ae
    }
  },
  cancel: {
    t: "button",
    a: {
      class: ie
    }
  }
};
function xe(e, t) {
  if (t.type !== C)
    return null;
  const s = JSON.parse(JSON.stringify(Ce));
  return e.forEach((n, a) => {
    const i = a === 0 || a === 6;
    s.c.push({
      a: {
        class: se + (i ? " " + fe : "")
      },
      c: [n]
    });
  }), A(s);
}
function w(e, t, s, n) {
  const a = e.some((r) => t && r.value && r.value < t), i = e.some((r) => s && r.value && r.value > s);
  a ? N(n, H) : R(n, H), i ? N(n, V) : R(n, V);
}
function I(e, t, { titleFormatter: s, type: n, itemSuffix: a, showHoliday: i }, { header: r, body: d }) {
  const o = t[e] || [];
  let l = null;
  if (n === b) {
    const y = o[0], c = o[o.length - 1];
    let g = 0;
    l = s.replace(/(y+)/g, () => g++ === 0 ? y.text : c.text);
  } else
    l = _(t.currentDate, s);
  W("." + P, r).innerText = l;
  let u, h, f;
  d.innerHTML = o.reduce((y, c, g) => (u = ["__item"], c.disabled && u.push(Z), c.value > 0 ? (f = "", c.holiday && (u.push(de), f = ` title="${c.holiday}"`), c.selected && u.push(E), c.current && u.push(he), c.isRangeFirst && c.isRangeLast ? u.push(ee) : (c.isRangeFirst && u.push(q), c.isRangeLast && u.push(Q)), c.isRangeTemp && u.push(te), h = [
    `<div class="${u.join(" ")}" data-index="${g}"${f}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${c.text}`), a && h.push(`<span class="__suffix">${a}</span>`), i && c.holiday && h.push(`<span class="__holiday">${c.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${u.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], y.push(h.join("")), y), []).join("");
}
function X(e, { body: t }, s) {
  const [...n] = t.querySelectorAll("." + E);
  n.forEach((a) => {
    R(a, E), s && R(
      a,
      q,
      Q,
      ee
    );
  }), N(e, s ? te : E);
}
const K = "single", Le = "date", F = {
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
}, $e = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: C,
  isFullWeek: !1,
  titleFormatter: le,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: re,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1
};
function B(e = {}) {
  const t = {
    ...$e,
    ...e
  };
  if (e.titleFormatter || (t.type === b ? t.titleFormatter = ce : t.type === Y && (t.titleFormatter = ue)), !t.el || !W(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: s } = _e(t);
  this.langPackage = s, this.$els = {};
  const n = new Date(), a = _(n, "yyyy/MM/dd", s);
  let i = [];
  try {
    i = oe(t.defaultDate, t);
  } catch (o) {
    setTimeout(() => {
      this.emit("error", o);
    }, 0);
  }
  const r = Ae.call(this, i) || n, d = _(r, "yyyy/MM/dd");
  this.data = {
    today: a,
    currentDate: r,
    currentDay: d,
    current: d.split("/"),
    selected: i,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
B.prototype = {
  constructor: B,
  formatDate(e, t, s) {
    return s || (s = this.langPackage), _(e, t, s);
  },
  toDate(e) {
    const t = T(e);
    return t || this.emit("error", new Error(`"${e}" is an invalid Date!`)), t;
  },
  emit(...e) {
    const t = e[0];
    this._eventList[t] && this._eventList[t].forEach((s) => {
      s.apply(this, e.slice(1));
    });
  },
  on(e, t) {
    !D(e) || !J(t) || (this._eventList[e] || (this._eventList[e] = []), this._eventList[e].push(t));
  },
  off(e) {
    !D(e) || !this._eventList[e] || (this._eventList[e].length = 0);
  },
  _initDom() {
    const e = this.options, t = W(e.el), s = JSON.parse(JSON.stringify(Re)), n = [
      s.a.class,
      "type-is-" + e.type,
      "mode-is-" + e.mode
    ];
    s.a.class = n.join(" ");
    const a = A(s), i = A(Me);
    a.appendChild(i);
    const r = xe(this.langPackage.weeks, e);
    r && a.appendChild(r);
    const d = A(be);
    if (a.appendChild(d), !e.hideFooter && (e.mode === z || e.mode === S)) {
      const o = JSON.parse(JSON.stringify(ve));
      e.footerButtons.forEach((u) => {
        o.c.push({
          ...Ne[u],
          c: [this.langPackage[u + "Button"]]
        });
      });
      const l = A(o);
      e.footerButtonAlign && (l.style.justifyContent = e.footerButtonAlign), a.appendChild(l);
    }
    t.appendChild(a), this.$els = {
      calendar: a,
      header: i,
      week: r,
      body: d,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(e) {
    e.stopPropagation();
    const t = e.target, s = t.className.split(" "), n = t.innerText;
    if (s.includes(O))
      this.prev(!s.includes(M));
    else if (s.includes(j))
      this.next(!s.includes(M));
    else if (s.includes(ne))
      this.emit("change", [...this.data.selected]);
    else if (s.includes(ie))
      this.emit("cancel");
    else if (s.includes(ae))
      this.setDate();
    else if (s.includes(P))
      this._onTitleClick({
        innerText: n,
        el: t,
        className: s
      });
    else if (s.includes(se))
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
      case C:
        if (e) {
          t = p(t) - 1;
          const [n] = m(this.options.dateRange, "yyyy");
          if (n && t <= n) {
            t = n;
            const [a] = m(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = p(s) - 1, s === 0 && (t = p(t) - 1, s = 12);
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
      case C:
        if (e) {
          t = p(t) + 1;
          const [, n] = m(this.options.dateRange, "yyyy");
          if (n && t >= n) {
            t = n;
            const [, a] = m(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = p(s) + 1, s === 13 && (t = p(t) + 1, s = 1);
        this.setCurrentDate([t, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(p(t) + 1);
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
    if (t.includes(Z))
      return;
    const a = (this.data[this.options.type + "s"] || [])[s] || {};
    if (this.options.mode === S) {
      const i = [...this.data.selected], r = i.length;
      r === 0 || r >= 2 && i.every((d) => !!d) ? (this.data.selected = [a], X(e, this.$els, !0)) : r === 1 && (i[0].value < a.value ? this.data.selected.push(a) : this.data.selected.unshift(a), this._updateDom());
    } else if (this.options.mode === z)
      if (t.includes(E)) {
        R(e, E);
        const i = this.data.selected.findIndex(
          (r) => r.value === a.value
        );
        this.data.selected.splice(i, 1);
      } else
        N(e, E), a.selected = !0, this.data.selected.push(a);
    else
      t.includes(E) || (X(e, this.$els), a.selected = !0, this.data.selected = [{ ...a }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(e, t) {
    this.options.dateRange = [e, t], this._updateDom();
  },
  setDate(e) {
    try {
      if (this.data.selected = oe(e, this.options), this.data.selected.length === 0) {
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
    const s = _(t, "yyyy/MM/dd");
    this.data.currentDate = t, this.data.currentDay = s, this.data.current = s.split("/"), this._updateDom();
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
    const [e, t] = m(
      this.options.dateRange,
      "yyyy"
    ), [s, n] = x(this), a = [], i = this.data.today.substr(0, 4), { startFullYear: r, endFullYear: d } = Se(this.data.current[0]);
    let o;
    for (let l = r; l <= d; l++)
      o = l.toString(), a.push({
        text: o,
        fullText: o,
        value: l,
        disabled: L(l, e, t),
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: k(l, this),
        selected: this._isSelected(l),
        current: i === o,
        date: this.toDate(o)
      });
    this.data.years = a, w(a, e, t, this.$els.calendar);
  },
  createMonths() {
    const [e, t] = m(
      this.options.dateRange,
      "yyyyMM"
    ), [s, n] = x(this), a = [], i = this.data.today.substr(0, 7), r = this.data.current[0] + "/", d = p(this.data.current[0]) * 100;
    let o, l, u;
    for (let h = 1; h <= 12; h++)
      o = v(h), l = r + o, u = d + h, a.push({
        text: o,
        fullText: l,
        value: u,
        disabled: L(u, e, t),
        isRangeFirst: u === s && n,
        isRangeLast: u === n && s,
        isRangeTemp: k(u, this),
        selected: this._isSelected(u),
        current: l.startsWith(i),
        date: this.toDate(l)
      });
    this.data.months = a, w(
      a,
      e,
      t,
      this.$els.calendar
    );
  },
  createDays() {
    const [e, t] = m(
      this.options.dateRange,
      "yyyyMMdd"
    ), [s, n] = x(this), { firstDayOfWeek: a, lastDayOfMonth: i } = Ee(this.data), r = new Array(a).fill(0);
    for (let c = 1; c <= i; c++)
      r.push(c);
    if (r.length % 7 !== 0)
      for (let c = 0; c < r.length % 7; c++)
        r.push(0);
    let d = 0, o, l, u;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: f } = this.options, y = r.map((c) => {
      d > 6 && (d = 0), o = c > 0 ? v(c) : "";
      const g = h + o;
      return u = c > 0 ? +g.replace(/\//g, "") : 0, l = {
        text: o,
        fullText: c > 0 ? g : "",
        value: u,
        week: d++,
        disabled: !c || L(u, e, t),
        holiday: !1,
        isRangeFirst: u === s && n,
        isRangeLast: u === n && s,
        isRangeTemp: k(u, this),
        selected: this._isSelected(u),
        current: this.data.today === g,
        date: c > 0 ? this.toDate(g) : null
      }, J(f) ? f(l) : l;
    });
    this.data.dates = y, w(y, e, t, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(e) {
    const t = this.data.selected;
    switch (this.options.mode) {
      case S: {
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
function ke(e, t, s, n, a, i, r, d) {
  var o = typeof e == "function" ? e.options : e;
  t && (o.render = t, o.staticRenderFns = s, o._compiled = !0), n && (o.functional = !0), i && (o._scopeId = "data-v-" + i);
  var l;
  if (r ? (l = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), a && a.call(this, f), f && f._registeredComponents && f._registeredComponents.add(r);
  }, o._ssrRegister = l) : a && (l = d ? function() {
    a.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), l)
    if (o.functional) {
      o._injectStyles = l;
      var u = o.render;
      o.render = function(y, c) {
        return l.call(c), u(y, c);
      };
    } else {
      var h = o.beforeCreate;
      o.beforeCreate = h ? [].concat(h, l) : [l];
    }
  return {
    exports: e,
    options: o
  };
}
const we = {
  name: "ZxVueCalendar",
  props: {
    value: {
      type: [String, Number, Array],
      default: ""
    },
    type: {
      type: String,
      default: Le
    },
    mode: {
      type: String,
      default: K
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
      date: this.value
    };
  },
  computed: {
    options() {
      const e = {
        ...this.option
      };
      let t;
      return Object.keys(F).forEach((s) => {
        t = this[s], t && (!Array.isArray(F[s]) || F[s].includes(t)) && (e[s] = t);
      }), e;
    },
    fmt() {
      return typeof this.format == "string" ? this.format : null;
    }
  },
  mounted() {
    const e = new B({
      ...this.options,
      el: this.$refs.el,
      defaultDate: this.date
    });
    e.on("change", (t) => {
      this.date = this._fmtValue(t), this.$emit("change", this.date, t);
    }), e.on("error", (t) => {
      this.$emit("error", t);
    }), e.on("cancel", () => {
      this.$emit("cancel");
    }), this.calendar = e, this.$emit("instance", e);
  },
  methods: {
    setDate(e) {
      this.calendar.setDate(e);
    },
    toDate(e) {
      return this.calendar.toDate(e);
    },
    formatDate(e, t, s) {
      return this.calendar.formatDate(e, t, s);
    },
    setCurrentDate(e) {
      this.calendar.setCurrentDate(e);
    },
    setDateRange(e, t) {
      this.calendar.setDateRange(e, t);
    },
    prev(e) {
      this.calendar.prev(e);
    },
    next(e) {
      this.calendar.next(e);
    },
    getDate() {
      return this.calendar.getDate();
    },
    _fmtValue(e) {
      const t = this.fmt, s = e.map((n) => t ? this.calendar.formatDate(n.fullText, t) : n.fullText);
      return this.mode === K ? s[0] : s;
    }
  },
  watch: {
    value(e) {
      this.date !== e && (this.date = e, this.setDate(e));
    },
    date(e) {
      this.$emit("input", e);
    }
  }
};
var Ie = function() {
  var t = this, s = t._self._c;
  return s("div", { staticClass: "zx-vue-calendar" }, [t._t("header"), s("div", { ref: "el", staticClass: "zx-calendar-wrapper" }), t._t("footer")], 2);
}, Fe = [], Oe = /* @__PURE__ */ ke(
  we,
  Ie,
  Fe,
  !1,
  null,
  null,
  null,
  null
);
const je = Oe.exports;
export {
  je as ZxVueCalendar
};
