import { openBlock as ce, createElementBlock as ue, renderSlot as H, createElementVNode as de } from "vue";
const he = "yyyy/MM", fe = "yyyy-yyyy", pe = "yyyy", g = "is-selected", q = "is-disabled", ye = "is-holiday", _e = "is-current", Q = "is-range-first", ee = "is-range-last", te = "is-range-first-last", se = "is-range-temp", W = "is-first-page", z = "is-last-page", ge = "is-weekend", R = "date-only", O = "__prev-button", j = "__next-button", P = "__title-wrapper", ne = "__item-week", ae = "__confirm-button", ie = "__clear-button", oe = "__cancel-button", G = "multiple", E = "range", re = "single", b = "date", B = "month", x = "year", U = {
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
}, me = ["confirmButton", "cancelButton", "clearButton"], J = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function Ee(e = "en", t) {
  const s = J[e] || J.en, n = me.reduce((i, o, c) => (i[o] = s[c], i), {}), a = U[e] || U.en;
  return n.weeks = t ? a.full : a.abbr, n;
}
function Se({ lang: e, isFullWeek: t, langPackage: s }) {
  return {
    langPackage: {
      ...Ee(e, t),
      ...s
    }
  };
}
const De = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function f(e) {
  return e >> 0;
}
function Ae(e) {
  return /^-?\d+\.?\d+$/.test(e);
}
function S(e) {
  return typeof e == "string";
}
function K(e) {
  return typeof e == "function";
}
function C(e) {
  return e += "", e[1] ? e : "0" + e;
}
function p(e, t, s) {
  const n = T(e);
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
function T(e) {
  if (!e)
    return null;
  if (e instanceof Date)
    return e;
  let t = null;
  if (Ae(e)) {
    const s = e + "", n = s.length;
    n === 8 ? t = new Date(
      [s.substr(0, 4), s.substr(4, 2), s.substr(6, 2)].join("/")
    ) : n === 6 ? t = new Date([s.substr(0, 4), s.substr(4, 2), "01"].join("/")) : n === 4 ? t = new Date(s + "/01/01") : t = new Date(e);
  } else
    S(e) && (e = e.replace(/[年月日]/g, (s) => s === "\u65E5" ? "" : "/"), e = e.replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/gi, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : (t = new Date(e), isNaN(t.getFullYear()) && (t = null)));
  return t;
}
function Te({ current: e, currentDate: t }) {
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
function Me(e) {
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
    let i = T(n), o = T(a);
    S(t) && (i = i ? +p(i, t) : null, o = o ? +p(o, t) : null), s.push(i), s.push(o);
  }
  return s;
}
function v({ data: e, options: t }) {
  const s = [];
  return t.mode === E && e.selected.forEach((n) => {
    s.push(n ? n.value : null);
  }), s;
}
function L(e, t, s) {
  return !!t && e < t || !!s && e > s;
}
function le(e, { type: t, mode: s }) {
  const n = [];
  if (e) {
    Array.isArray(e) || (e = [e]), s === re && e.length > 1 && (e = e.slice(0, 1)), s === E && e.length > 2 && (e = e.slice(0, 2));
    const a = De[t];
    let i;
    e.forEach((o) => {
      i = T(o), i && n.push({
        value: f(p(i, a)),
        date: i,
        fullText: p(i, "yyyy/MM/dd")
      });
    }), n.sort((o, c) => o.value - c.value);
  }
  return n;
}
function $(e, t, s) {
  return t && t > e || s && s < e;
}
function Re(e, t, s, n) {
  const a = [];
  switch (n) {
    case E: {
      const [i, o] = e;
      i && $(+i.date, t, s) && a.push(i), o && $(+o.date, t, s) && a.push(o);
      break;
    }
    default:
      e.forEach((i) => {
        $(+i.date, t, s) && a.push(i);
      });
  }
  return a.length > 0;
}
function be(e) {
  const { options: t } = this;
  let s = null;
  const [n, a] = _(t.dateRange);
  if (n && +n > +s && (s = n), a && +a < +s && (s = a), e.length)
    if (Re(
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
  return s.mode === E && t.selected.length === 1 ? e === t.selected[0].value : !1;
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
function V(e, t = document) {
  if (!e)
    return null;
  let s = null;
  return S(e) ? s = t.querySelector(e) : typeof e == "object" && e.nodeType === 1 && (s = e), s;
}
function xe(e, t, s) {
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
function M(...e) {
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
const Ce = {
  a: {
    class: "zx-calendar"
  }
}, Ne = {
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
            class: [O, R].join(" ")
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
            class: [j, R].join(" ")
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
}, ve = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, Le = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, $e = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, ke = {
  confirm: {
    t: "button",
    a: {
      class: ae
    }
  },
  clear: {
    t: "button",
    a: {
      class: ie
    }
  },
  cancel: {
    t: "button",
    a: {
      class: oe
    }
  }
};
function we(e, t) {
  if (t.type !== b)
    return null;
  const s = JSON.parse(JSON.stringify(ve));
  return e.forEach((n, a) => {
    const i = a === 0 || a === 6;
    s.c.push({
      a: {
        class: ne + (i ? " " + ge : "")
      },
      c: [n]
    });
  }), A(s);
}
function w(e, t, s, n) {
  const a = e.some((o) => t && o.value && o.value < t), i = e.some((o) => s && o.value && o.value > s);
  a ? N(n, W) : M(n, W), i ? N(n, z) : M(n, z);
}
function I(e, t, { titleFormatter: s, type: n, itemSuffix: a, showHoliday: i }, { header: o, body: c }) {
  const d = t[e] || [];
  let u = null;
  if (n === x) {
    const m = d[0], l = d[d.length - 1];
    let y = 0;
    u = s.replace(/(y+)/g, () => y++ === 0 ? m.text : l.text);
  } else
    u = p(t.currentDate, s);
  V("." + P, o).innerText = u;
  let r, h, D;
  c.innerHTML = d.reduce((m, l, y) => (r = ["__item"], l.disabled && r.push(q), l.value > 0 ? (D = "", l.holiday && (r.push(ye), D = ` title="${l.holiday}"`), l.selected && r.push(g), l.current && r.push(_e), l.isRangeFirst && l.isRangeLast ? r.push(te) : (l.isRangeFirst && r.push(Q), l.isRangeLast && r.push(ee)), l.isRangeTemp && r.push(se), h = [
    `<div class="${r.join(" ")}" data-index="${y}"${D}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${l.text}`), a && h.push(`<span class="__suffix">${a}</span>`), i && l.holiday && h.push(`<span class="__holiday">${l.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${r.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], m.push(h.join("")), m), []).join("");
}
function X(e, { body: t }, s) {
  const [...n] = t.querySelectorAll("." + g);
  n.forEach((a) => {
    M(a, g), s && M(
      a,
      Q,
      ee,
      te
    );
  }), N(e, s ? se : g);
}
const Z = "single", Ie = "date", F = {
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
}, Fe = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: b,
  isFullWeek: !1,
  titleFormatter: he,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: re,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1
};
function Y(e = {}) {
  const t = {
    ...Fe,
    ...e
  };
  if (e.titleFormatter || (t.type === x ? t.titleFormatter = fe : t.type === B && (t.titleFormatter = pe)), !t.el || !V(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: s } = Se(t);
  this.langPackage = s, this.$els = {};
  const n = new Date(), a = p(n, "yyyy/MM/dd", s);
  let i = [];
  try {
    i = le(t.defaultDate, t);
  } catch (d) {
    setTimeout(() => {
      this.emit("error", d);
    }, 0);
  }
  const o = be.call(this, i) || n, c = p(o, "yyyy/MM/dd");
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
Y.prototype = {
  constructor: Y,
  formatDate(e, t, s) {
    return s || (s = this.langPackage), p(e, t, s);
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
    !S(e) || !K(t) || (this._eventList[e] || (this._eventList[e] = []), this._eventList[e].push(t));
  },
  off(e) {
    !S(e) || !this._eventList[e] || (this._eventList[e].length = 0);
  },
  _initDom() {
    const e = this.options, t = V(e.el), s = JSON.parse(JSON.stringify(Ce)), n = [
      s.a.class,
      "type-is-" + e.type,
      "mode-is-" + e.mode
    ];
    s.a.class = n.join(" ");
    const a = A(s), i = A(Ne);
    a.appendChild(i);
    const o = we(this.langPackage.weeks, e);
    o && a.appendChild(o);
    const c = A(Le);
    if (a.appendChild(c), !e.hideFooter && (e.mode === G || e.mode === E)) {
      const d = JSON.parse(JSON.stringify($e));
      e.footerButtons.forEach((r) => {
        d.c.push({
          ...ke[r],
          c: [this.langPackage[r + "Button"]]
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
    if (s.includes(O))
      this.prev(!s.includes(R));
    else if (s.includes(j))
      this.next(!s.includes(R));
    else if (s.includes(ae))
      this.emit("change", [...this.data.selected]);
    else if (s.includes(oe))
      this.emit("cancel");
    else if (s.includes(ie))
      this.setDate();
    else if (s.includes(P))
      this._onTitleClick({
        innerText: n,
        el: t,
        className: s
      });
    else if (s.includes(ne))
      this._onWeekClick({
        innerText: n,
        el: t,
        className: s
      });
    else {
      const a = xe(t, s, this.$els.calendar);
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
      case B:
        this.setCurrentDate(t - 1);
        break;
      case x: {
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
      case B:
        this.setCurrentDate(f(t) + 1);
        break;
      case x: {
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
    if (t.includes(q))
      return;
    const a = (this.data[this.options.type + "s"] || [])[s] || {};
    if (this.options.mode === E) {
      const i = [...this.data.selected], o = i.length;
      o === 0 || o >= 2 && i.every((c) => !!c) ? (this.data.selected = [a], X(e, this.$els, !0)) : o === 1 && (i[0].value < a.value ? this.data.selected.push(a) : this.data.selected.unshift(a), this._updateDom());
    } else if (this.options.mode === G)
      if (t.includes(g)) {
        M(e, g);
        const i = this.data.selected.findIndex(
          (o) => o.value === a.value
        );
        this.data.selected.splice(i, 1);
      } else
        N(e, g), a.selected = !0, this.data.selected.push(a);
    else
      t.includes(g) || (X(e, this.$els), a.selected = !0, this.data.selected = [{ ...a }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(e, t) {
    this.options.dateRange = [e, t], this._updateDom();
  },
  setDate(e) {
    try {
      if (this.data.selected = le(e, this.options), this.data.selected.length === 0) {
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
    const [e, t] = _(
      this.options.dateRange,
      "yyyy"
    ), [s, n] = v(this), a = [], i = this.data.today.substr(0, 4), { startFullYear: o, endFullYear: c } = Me(this.data.current[0]);
    let d;
    for (let u = o; u <= c; u++)
      d = u.toString(), a.push({
        text: d,
        fullText: d,
        value: u,
        disabled: L(u, e, t),
        isRangeFirst: u === s && n,
        isRangeLast: u === n && s,
        isRangeTemp: k(u, this),
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
    ), [s, n] = v(this), a = [], i = this.data.today.substr(0, 7), o = this.data.current[0] + "/", c = f(this.data.current[0]) * 100;
    let d, u, r;
    for (let h = 1; h <= 12; h++)
      d = C(h), u = o + d, r = c + h, a.push({
        text: d,
        fullText: u,
        value: r,
        disabled: L(r, e, t),
        isRangeFirst: r === s && n,
        isRangeLast: r === n && s,
        isRangeTemp: k(r, this),
        selected: this._isSelected(r),
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
    ), [s, n] = v(this), { firstDayOfWeek: a, lastDayOfMonth: i } = Te(this.data), o = new Array(a).fill(0);
    for (let l = 1; l <= i; l++)
      o.push(l);
    if (o.length % 7 !== 0)
      for (let l = 0; l < o.length % 7; l++)
        o.push(0);
    let c = 0, d, u, r;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: D } = this.options, m = o.map((l) => {
      c > 6 && (c = 0), d = l > 0 ? C(l) : "";
      const y = h + d;
      return r = l > 0 ? +y.replace(/\//g, "") : 0, u = {
        text: d,
        fullText: l > 0 ? y : "",
        value: r,
        week: c++,
        disabled: !l || L(r, e, t),
        holiday: !1,
        isRangeFirst: r === s && n,
        isRangeLast: r === n && s,
        isRangeTemp: k(r, this),
        selected: this._isSelected(r),
        current: this.data.today === y,
        date: l > 0 ? this.toDate(y) : null
      }, K(D) ? D(u) : u;
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
const Oe = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, a] of t)
    s[n] = a;
  return s;
}, je = {
  name: "ZxVueCalendar",
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: ""
    },
    type: {
      type: String,
      default: Ie
    },
    mode: {
      type: String,
      default: Z
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
    const e = new Y({
      ...this.options,
      el: this.$refs.el,
      defaultDate: this.value
    });
    e.on("change", (t) => {
      this.value = this._fmtValue(t), this.$emit("change", this.value, t);
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
      return this.mode === Z ? s[0] : s;
    }
  },
  watch: {
    modelValue(e) {
      this.value !== e && (this.value = e, this.setDate(e));
    },
    value(e) {
      this.$emit("update:modelValue", e);
    }
  }
}, Be = { class: "zx-vue-calendar" }, Ye = {
  ref: "el",
  class: "zx-calendar-wrapper"
};
function Pe(e, t, s, n, a, i) {
  return ce(), ue("div", Be, [
    H(e.$slots, "header"),
    de("div", Ye, null, 512),
    H(e.$slots, "footer")
  ]);
}
const He = /* @__PURE__ */ Oe(je, [["render", Pe]]);
export {
  He as ZxVueCalendar
};
