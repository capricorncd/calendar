/*!
 * zx-calendar version 0.7.0
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2023-01-15 12:30:46 (GMT+0900)
 */
const lt = "yyyy/MM", ct = "yyyy-yyyy", ut = "yyyy", S = "is-selected", Z = "is-disabled", dt = "is-holiday", ht = "is-current", q = "is-range-first", Q = "is-range-last", tt = "is-range-first-last", et = "is-range-temp", V = "is-first-page", z = "is-last-page", ft = "is-weekend", C = "date-only", F = "__prev-button", O = "__next-button", P = "__title-wrapper", st = "__item-week", nt = "__confirm-button", at = "__clear-button", it = "__cancel-button", U = "multiple", E = "range", pt = "single", j = "date", Y = "month", b = "year", G = {
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
}, yt = ["confirmButton", "cancelButton", "clearButton"], J = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function _t(t = "en", e) {
  const s = J[t] || J.en, n = yt.reduce((i, r, u) => (i[r] = s[u], i), {}), a = G[t] || G.en;
  return n.weeks = e ? a.full : a.abbr, n;
}
function gt({ lang: t, isFullWeek: e, langPackage: s }) {
  return {
    langPackage: {
      ..._t(t, e),
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
function v(t) {
  return String(t).padStart(2, "0");
}
const mt = {
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function y(t, e, s) {
  const n = T(t);
  if (!n || !e)
    return String(t);
  if (e === "timestamp")
    return n.getTime().toString();
  if (/(y+)/i.test(e)) {
    const r = RegExp.$1;
    e = e.replace(r, (n.getFullYear() + "").substring(4 - r.length));
  }
  (!s || !Array.isArray(s.weeks)) && (s = mt);
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
      const u = a[r] + "";
      e = e.replace(i, i.length === 1 ? u : v(u));
    }
  if (/w+/i.test(e)) {
    const r = n.getDay();
    e = e.replace(/w+/i, /W+/.test(e) ? s.weeks[r] : String(r));
  }
  if (/g/i.test(e)) {
    const r = n.toString().split(/\s+/).slice(5), u = e.includes("g");
    e = e.replace(/g/i, u ? r[0] : r.join(" "));
  }
  return e;
}
function T(t) {
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
const St = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function p(t) {
  return t >> 0;
}
function A(t) {
  return typeof t == "string";
}
function X(t) {
  return typeof t == "function";
}
function Et({ current: t, currentDate: e }) {
  const s = t.slice(0, 2);
  s.push("01");
  const n = new Date(s.join("/")).getDay();
  let a = e.getFullYear(), i = e.getMonth() + 1;
  i === 12 ? (a += 1, i = 1) : i += 1;
  const r = new Date(
    `${a}/${v(i)}/01`
  ).getTime(), u = new Date(r - 1);
  return {
    firstDayOfWeek: n,
    lastDayOfMonth: u.getDate()
  };
}
function Dt(t) {
  const e = p(t.substr(2)), s = e % 20 === 0, n = Math.floor(e / 20);
  let a = (s ? n - 1 : n) * 20 + 1, i = p(t.substr(0, 2));
  n === 0 && e === 0 && (i -= 1, a = 81);
  const r = i * 100 + a, u = r + 19;
  return {
    startFullYear: r,
    endFullYear: u
  };
}
function m(t, e) {
  const s = [];
  if (Array.isArray(t)) {
    const [n, a] = t;
    let i = T(n), r = T(a);
    A(e) && (i = i ? +y(i, e) : null, r = r ? +y(r, e) : null), s.push(i), s.push(r);
  }
  return s;
}
function x({ data: t, options: e }) {
  const s = [];
  return e.mode === E && t.selected.forEach((n) => {
    s.push(n ? n.value : null);
  }), s;
}
function L(t, e, s) {
  return !!e && t < e || !!s && t > s;
}
function rt(t, { type: e, mode: s }) {
  const n = [];
  if (t) {
    Array.isArray(t) || (t = [t]), s === pt && t.length > 1 && (t = t.slice(0, 1)), s === E && t.length > 2 && (t = t.slice(0, 2));
    const a = St[e];
    let i;
    t.forEach((r) => {
      i = T(r), i && n.push({
        value: p(y(i, a)),
        date: i,
        fullText: y(i, "yyyy/MM/dd")
      });
    }), n.sort((r, u) => r.value - u.value);
  }
  return n;
}
function $(t, e, s) {
  return e && e > t || s && s < t;
}
function Tt(t, e, s, n) {
  const a = [];
  switch (n) {
    case E: {
      const [i, r] = t;
      i && $(+i.date, e, s) && a.push(i), r && $(+r.date, e, s) && a.push(r);
      break;
    }
    default:
      t.forEach((i) => {
        $(+i.date, e, s) && a.push(i);
      });
  }
  return a.length > 0;
}
function At(t) {
  const { options: e } = this;
  let s = null;
  const [n, a] = m(e.dateRange);
  if (n && +n > +s && (s = n), a && +a < +s && (s = a), t.length)
    if (Tt(
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
  if (typeof t > "u" && (t = "undefined"), t === null && (t = "null"), A(t))
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
function W(t, e = document) {
  if (!t)
    return null;
  let s = null;
  return A(t) ? s = e.querySelector(t) : typeof t == "object" && t.nodeType === 1 && (s = t), s;
}
function Rt(t, e, s) {
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
  return a.el && (a.index = p(a.el.getAttribute("data-index"))), a;
}
function R(...t) {
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
const Mt = {
  a: {
    class: "zx-calendar"
  }
}, Ct = {
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
            class: [F, C].join(" ")
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
            class: [O, C].join(" ")
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
}, bt = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, vt = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, Nt = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, xt = {
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
function Lt(t, e) {
  if (e.type !== j)
    return null;
  const s = JSON.parse(JSON.stringify(bt));
  return t.forEach((n, a) => {
    const i = a === 0 || a === 6;
    s.c.push({
      a: {
        class: st + (i ? " " + ft : "")
      },
      c: [n]
    });
  }), D(s);
}
function w(t, e, s, n) {
  const a = t.some((r) => e && r.value && r.value < e), i = t.some((r) => s && r.value && r.value > s);
  a ? N(n, V) : R(n, V), i ? N(n, z) : R(n, z);
}
function I(t, e, { titleFormatter: s, type: n, itemSuffix: a, showHoliday: i }, { header: r, body: u }) {
  const o = e[t] || [];
  let l = null;
  if (n === b) {
    const _ = o[0], c = o[o.length - 1];
    let g = 0;
    l = s.replace(/(y+)/g, () => g++ === 0 ? _.text : c.text);
  } else
    l = y(e.currentDate, s);
  W("." + P, r).innerText = l;
  let d, h, f;
  u.innerHTML = o.reduce((_, c, g) => (d = ["__item"], c.disabled && d.push(Z), c.value > 0 ? (f = "", c.holiday && (d.push(dt), f = ` title="${c.holiday}"`), c.selected && d.push(S), c.current && d.push(ht), c.isRangeFirst && c.isRangeLast ? d.push(tt) : (c.isRangeFirst && d.push(q), c.isRangeLast && d.push(Q)), c.isRangeTemp && d.push(et), h = [
    `<div class="${d.join(" ")}" data-index="${g}"${f}>`
  ], h.push('<div class="__inner">'), h.push(`<p class="__text">${c.text}`), a && h.push(`<span class="__suffix">${a}</span>`), i && c.holiday && h.push(`<span class="__holiday">${c.holiday}</span>`), h.push("</p></div></div>")) : h = [
    `<div class="${d.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], _.push(h.join("")), _), []).join("");
}
function K(t, { body: e }, s) {
  const [...n] = e.querySelectorAll("." + S);
  n.forEach((a) => {
    R(a, S), s && R(
      a,
      q,
      Q,
      tt
    );
  }), N(t, s ? et : S);
}
const H = "single", ot = "date", $t = {
  primary: "#f30",
  arrow: "#999",
  holidayDot: "rgba(0, 0, 0, 0.2)",
  currentItemBg: "#eee",
  white: "#fff",
  rangeBg: "#eee"
}, M = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: ot,
  isFullWeek: !1,
  titleFormatter: lt,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: H,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1,
  colors: {}
};
function B(t = {}) {
  const e = {
    ...M,
    ...t,
    colors: {
      ...$t,
      ...t.colors
    }
  };
  if (t.titleFormatter || (e.type === b ? e.titleFormatter = ct : e.type === Y && (e.titleFormatter = ut)), !e.el || !W(e.el))
    throw new Error(`Initial parameter el[${e.el}] is invalid.`);
  this.options = e, this._eventList = {};
  const { langPackage: s } = gt(e);
  this.langPackage = s, this.$els = {};
  const n = new Date(), a = y(n, "yyyy/MM/dd", s);
  let i = [];
  try {
    i = rt(e.defaultDate, e);
  } catch (o) {
    setTimeout(() => {
      this.emit("error", o);
    }, 0);
  }
  const r = At.call(this, i) || n, u = y(r, "yyyy/MM/dd");
  this.data = {
    today: a,
    currentDate: r,
    currentDay: u,
    current: u.split("/"),
    selected: i,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
B.prototype = {
  constructor: B,
  formatDate(t, e, s) {
    return s || (s = this.langPackage), y(t, e, s);
  },
  toDate(t) {
    const e = T(t);
    return e || this.emit("error", new Error(`"${t}" is an invalid Date!`)), e;
  },
  emit(...t) {
    const e = t[0];
    this._eventList[e] && this._eventList[e].forEach((s) => {
      s.apply(this, t.slice(1));
    });
  },
  on(t, e) {
    !A(t) || !X(e) || (this._eventList[t] || (this._eventList[t] = []), this._eventList[t].push(e));
  },
  off(t) {
    !A(t) || !this._eventList[t] || (this._eventList[t].length = 0);
  },
  _initDom() {
    const t = this.options, e = W(t.el), s = JSON.parse(JSON.stringify(Mt)), n = [
      s.a.class,
      "type-is-" + t.type,
      "mode-is-" + t.mode
    ];
    s.a.class = n.join(" "), s.a.style = Object.keys(t.colors).map((o) => `--zx-calendar-color-${o}: ${t.colors[o]}`).join(";");
    const a = D(s), i = D(Ct);
    a.appendChild(i);
    const r = Lt(this.langPackage.weeks, t);
    r && a.appendChild(r);
    const u = D(vt);
    if (a.appendChild(u), !t.hideFooter && (t.mode === U || t.mode === E)) {
      const o = JSON.parse(JSON.stringify(Nt));
      t.footerButtons.forEach((d) => {
        o.c.push({
          ...xt[d],
          c: [this.langPackage[d + "Button"]]
        });
      });
      const l = D(o);
      t.footerButtonAlign && (l.style.justifyContent = t.footerButtonAlign), a.appendChild(l);
    }
    e.appendChild(a), this.$els = {
      calendar: a,
      header: i,
      week: r,
      body: u,
      parent: e
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(t) {
    t.stopPropagation();
    const e = t.target, s = e.className.split(" "), n = e.innerText;
    if (s.includes(F))
      this.prev(!s.includes(C));
    else if (s.includes(O))
      this.next(!s.includes(C));
    else if (s.includes(nt))
      this.emit("change", [...this.data.selected]);
    else if (s.includes(it))
      this.emit("cancel");
    else if (s.includes(at))
      this.setDate();
    else if (s.includes(P))
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
      const a = Rt(e, s, this.$els.calendar);
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
          e = p(e) - 1;
          const [n] = m(this.options.dateRange, "yyyy");
          if (n && e <= n) {
            e = n;
            const [a] = m(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = p(s) - 1, s === 0 && (e = p(e) - 1, s = 12);
        this.setCurrentDate([e, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(e - 1);
        break;
      case b: {
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
          e = p(e) + 1;
          const [, n] = m(this.options.dateRange, "yyyy");
          if (n && e >= n) {
            e = n;
            const [, a] = m(this.options.dateRange, "MM");
            a && (s = a);
          }
        } else
          s = p(s) + 1, s === 13 && (e = p(e) + 1, s = 1);
        this.setCurrentDate([e, s, "01"].join("/"));
        break;
      case Y:
        this.setCurrentDate(p(e) + 1);
        break;
      case b: {
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
    if (e.includes(Z))
      return;
    const a = (this.data[this.options.type + "s"] || [])[s] || {};
    if (this.options.mode === E) {
      const i = [...this.data.selected], r = i.length;
      r === 0 || r >= 2 && i.every((u) => !!u) ? (this.data.selected = [a], K(t, this.$els, !0)) : r === 1 && (i[0].value < a.value ? this.data.selected.push(a) : this.data.selected.unshift(a), this._updateDom());
    } else if (this.options.mode === U)
      if (e.includes(S)) {
        R(t, S);
        const i = this.data.selected.findIndex(
          (r) => r.value === a.value
        );
        this.data.selected.splice(i, 1);
      } else
        N(t, S), a.selected = !0, this.data.selected.push(a);
    else
      e.includes(S) || (K(t, this.$els), a.selected = !0, this.data.selected = [{ ...a }], this.emit("change", [...this.data.selected]));
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
    const e = this.toDate(t);
    if (!e)
      return;
    const s = y(e, "yyyy/MM/dd");
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
    const [t, e] = m(
      this.options.dateRange,
      "yyyy"
    ), [s, n] = x(this), a = [], i = this.data.today.substr(0, 4), { startFullYear: r, endFullYear: u } = Dt(this.data.current[0]);
    let o;
    for (let l = r; l <= u; l++)
      o = l.toString(), a.push({
        text: o,
        fullText: o,
        value: l,
        disabled: L(l, t, e),
        isRangeFirst: l === s && n,
        isRangeLast: l === n && s,
        isRangeTemp: k(l, this),
        selected: this._isSelected(l),
        current: i === o,
        date: this.toDate(o)
      });
    this.data.years = a, w(a, t, e, this.$els.calendar);
  },
  createMonths() {
    const [t, e] = m(
      this.options.dateRange,
      "yyyyMM"
    ), [s, n] = x(this), a = [], i = this.data.today.substr(0, 7), r = this.data.current[0] + "/", u = p(this.data.current[0]) * 100;
    let o, l, d;
    for (let h = 1; h <= 12; h++)
      o = v(h), l = r + o, d = u + h, a.push({
        text: o,
        fullText: l,
        value: d,
        disabled: L(d, t, e),
        isRangeFirst: d === s && n,
        isRangeLast: d === n && s,
        isRangeTemp: k(d, this),
        selected: this._isSelected(d),
        current: l.startsWith(i),
        date: this.toDate(l)
      });
    this.data.months = a, w(
      a,
      t,
      e,
      this.$els.calendar
    );
  },
  createDays() {
    const [t, e] = m(
      this.options.dateRange,
      "yyyyMMdd"
    ), [s, n] = x(this), { firstDayOfWeek: a, lastDayOfMonth: i } = Et(this.data), r = new Array(a).fill(0);
    for (let c = 1; c <= i; c++)
      r.push(c);
    if (r.length % 7 !== 0)
      for (let c = 0; c < r.length % 7; c++)
        r.push(0);
    let u = 0, o, l, d;
    const h = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: f } = this.options, _ = r.map((c) => {
      u > 6 && (u = 0), o = c > 0 ? v(c) : "";
      const g = h + o;
      return d = c > 0 ? +g.replace(/\//g, "") : 0, l = {
        text: o,
        fullText: c > 0 ? g : "",
        value: d,
        week: u++,
        disabled: !c || L(d, t, e),
        holiday: !1,
        isRangeFirst: d === s && n,
        isRangeLast: d === n && s,
        isRangeTemp: k(d, this),
        selected: this._isSelected(d),
        current: this.data.today === g,
        date: c > 0 ? this.toDate(g) : null
      }, X(f) ? f(l) : l;
    });
    this.data.dates = _, w(_, t, e, this.$els.calendar);
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
function kt(t, e, s, n) {
  const a = t.map((i) => s ? y(i.fullText, s, n) : i.fullText);
  return e === H ? a[0] : a;
}
function wt(t) {
  const e = {
    ...t.option
  };
  let s;
  return Object.keys(M).forEach((n) => {
    s = t[n], s && (!Array.isArray(M[n]) || M[n].includes(s)) && (e[n] = s);
  }), t.value && (e.defaultDate = t.value), e;
}
function It(t, e, s, n, a, i, r, u) {
  var o = typeof t == "function" ? t.options : t;
  e && (o.render = e, o.staticRenderFns = s, o._compiled = !0), n && (o.functional = !0), i && (o._scopeId = "data-v-" + i);
  var l;
  if (r ? (l = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), a && a.call(this, f), f && f._registeredComponents && f._registeredComponents.add(r);
  }, o._ssrRegister = l) : a && (l = u ? function() {
    a.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), l)
    if (o.functional) {
      o._injectStyles = l;
      var d = o.render;
      o.render = function(_, c) {
        return l.call(c), d(_, c);
      };
    } else {
      var h = o.beforeCreate;
      o.beforeCreate = h ? [].concat(h, l) : [l];
    }
  return {
    exports: t,
    options: o
  };
}
const Ft = {
  name: "ZxVueCalendar",
  props: {
    value: {
      type: [String, Number, Array],
      default: ""
    },
    type: {
      type: String,
      default: ot
    },
    mode: {
      type: String,
      default: H
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
      return wt(this);
    },
    fmt() {
      return typeof this.format == "string" ? this.format : null;
    }
  },
  mounted() {
    const t = new B({
      ...this.options,
      el: this.$refs.el,
      defaultDate: this.date
    });
    t.on("change", (e) => {
      this.date = kt(e, this.mode, this.fmt, this.options.langPackage), this.$emit("change", this.date, e);
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
    value(t) {
      this.date !== t && (this.date = t, this.setDate(t));
    },
    date(t) {
      this.$emit("input", t);
    }
  }
};
var Ot = function() {
  var e = this, s = e._self._c;
  return s("div", { staticClass: "zx-calendar-wrapper" }, [e._t("header"), s("div", { ref: "el" }), e._t("footer")], 2);
}, jt = [], Yt = /* @__PURE__ */ It(
  Ft,
  Ot,
  jt,
  !1,
  null,
  null,
  null,
  null
);
const Bt = Yt.exports;
export {
  Bt as ZxVueCalendar
};
