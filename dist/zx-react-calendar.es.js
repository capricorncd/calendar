/*!
 * zx-calendar version 0.7.2
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2023-01-15 21:35:15 (GMT+0900)
 */
import { Component as pt, createRef as ht } from "react";
var M = { exports: {} }, he = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function yt() {
  if (Le)
    return A;
  Le = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, D = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function I(u) {
    if (typeof u == "object" && u !== null) {
      var B = u.$$typeof;
      switch (B) {
        case t:
          switch (u = u.type, u) {
            case h:
            case p:
            case r:
            case a:
            case s:
            case v:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case d:
                case y:
                case D:
                case o:
                  return u;
                default:
                  return B;
              }
          }
        case n:
          return B;
      }
    }
  }
  function P(u) {
    return I(u) === p;
  }
  return A.AsyncMode = h, A.ConcurrentMode = p, A.ContextConsumer = c, A.ContextProvider = o, A.Element = t, A.ForwardRef = d, A.Fragment = r, A.Lazy = y, A.Memo = D, A.Portal = n, A.Profiler = a, A.StrictMode = s, A.Suspense = v, A.isAsyncMode = function(u) {
    return P(u) || I(u) === h;
  }, A.isConcurrentMode = P, A.isContextConsumer = function(u) {
    return I(u) === c;
  }, A.isContextProvider = function(u) {
    return I(u) === o;
  }, A.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, A.isForwardRef = function(u) {
    return I(u) === d;
  }, A.isFragment = function(u) {
    return I(u) === r;
  }, A.isLazy = function(u) {
    return I(u) === y;
  }, A.isMemo = function(u) {
    return I(u) === D;
  }, A.isPortal = function(u) {
    return I(u) === n;
  }, A.isProfiler = function(u) {
    return I(u) === a;
  }, A.isStrictMode = function(u) {
    return I(u) === s;
  }, A.isSuspense = function(u) {
    return I(u) === v;
  }, A.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === p || u === a || u === s || u === v || u === w || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === D || u.$$typeof === o || u.$$typeof === c || u.$$typeof === d || u.$$typeof === $ || u.$$typeof === j || u.$$typeof === G || u.$$typeof === x);
  }, A.typeOf = I, A;
}
var C = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function vt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, D = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
    function I(l) {
      return typeof l == "string" || typeof l == "function" || l === r || l === p || l === a || l === s || l === v || l === w || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === D || l.$$typeof === o || l.$$typeof === c || l.$$typeof === d || l.$$typeof === $ || l.$$typeof === j || l.$$typeof === G || l.$$typeof === x);
    }
    function P(l) {
      if (typeof l == "object" && l !== null) {
        var F = l.$$typeof;
        switch (F) {
          case t:
            var ee = l.type;
            switch (ee) {
              case h:
              case p:
              case r:
              case a:
              case s:
              case v:
                return ee;
              default:
                var je = ee && ee.$$typeof;
                switch (je) {
                  case c:
                  case d:
                  case y:
                  case D:
                  case o:
                    return je;
                  default:
                    return F;
                }
            }
          case n:
            return F;
        }
      }
    }
    var u = h, B = p, oe = c, ie = o, ce = t, le = d, Z = r, ue = y, fe = D, U = n, de = a, N = s, z = v, Q = !1;
    function pe(l) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(l) || P(l) === h;
    }
    function i(l) {
      return P(l) === p;
    }
    function f(l) {
      return P(l) === c;
    }
    function T(l) {
      return P(l) === o;
    }
    function _(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function g(l) {
      return P(l) === d;
    }
    function b(l) {
      return P(l) === r;
    }
    function m(l) {
      return P(l) === y;
    }
    function E(l) {
      return P(l) === D;
    }
    function S(l) {
      return P(l) === n;
    }
    function O(l) {
      return P(l) === a;
    }
    function R(l) {
      return P(l) === s;
    }
    function k(l) {
      return P(l) === v;
    }
    C.AsyncMode = u, C.ConcurrentMode = B, C.ContextConsumer = oe, C.ContextProvider = ie, C.Element = ce, C.ForwardRef = le, C.Fragment = Z, C.Lazy = ue, C.Memo = fe, C.Portal = U, C.Profiler = de, C.StrictMode = N, C.Suspense = z, C.isAsyncMode = pe, C.isConcurrentMode = i, C.isContextConsumer = f, C.isContextProvider = T, C.isElement = _, C.isForwardRef = g, C.isFragment = b, C.isLazy = m, C.isMemo = E, C.isPortal = S, C.isProfiler = O, C.isStrictMode = R, C.isSuspense = k, C.isValidElementType = I, C.typeOf = P;
  }()), C;
}
var Fe;
function Qe() {
  return Fe || (Fe = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = yt() : e.exports = vt();
  }(he)), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ye, Ye;
function gt() {
  if (Ye)
    return ye;
  Ye = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, c = 0; c < 10; c++)
        o["_" + String.fromCharCode(c)] = c;
      var h = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        p[d] = d;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ye = s() ? Object.assign : function(a, o) {
    for (var c, h = r(a), p, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var v in c)
        t.call(c, v) && (h[v] = c[v]);
      if (e) {
        p = e(c);
        for (var w = 0; w < p.length; w++)
          n.call(c, p[w]) && (h[p[w]] = c[p[w]]);
      }
    }
    return h;
  }, ye;
}
var ve, We;
function Pe() {
  if (We)
    return ve;
  We = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ve = e, ve;
}
var ge, qe;
function et() {
  return qe || (qe = 1, ge = Function.call.bind(Object.prototype.hasOwnProperty)), ge;
}
var me, Be;
function mt() {
  if (Be)
    return me;
  Be = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Pe(), n = {}, r = et();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(a, o, c, h, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var v;
          try {
            if (typeof a[d] != "function") {
              var w = Error(
                (h || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            v = a[d](o, d, h, c, null, t);
          } catch (y) {
            v = y;
          }
          if (v && !(v instanceof Error) && e(
            (h || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in n)) {
            n[v.message] = !0;
            var D = p ? p() : "";
            e(
              "Failed " + c + " type: " + v.message + (D != null ? D : "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, me = s, me;
}
var _e, ze;
function _t() {
  if (ze)
    return _e;
  ze = 1;
  var e = Qe(), t = gt(), n = Pe(), r = et(), s = mt(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var h = "Warning: " + c;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return _e = function(c, h) {
    var p = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function v(i) {
      var f = i && (p && i[p] || i[d]);
      if (typeof f == "function")
        return f;
    }
    var w = "<<anonymous>>", D = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: G(),
      arrayOf: I,
      element: P(),
      elementType: u(),
      instanceOf: B,
      node: le(),
      objectOf: ie,
      oneOf: oe,
      oneOfType: ce,
      shape: ue,
      exact: fe
    };
    function y(i, f) {
      return i === f ? i !== 0 || 1 / i === 1 / f : i !== i && f !== f;
    }
    function x(i, f) {
      this.message = i, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function $(i) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, T = 0;
      function _(b, m, E, S, O, R, k) {
        if (S = S || w, R = R || E, k !== n) {
          if (h) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw l.name = "Invariant Violation", l;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var F = S + ":" + E;
            !f[F] && T < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[F] = !0, T++);
          }
        }
        return m[E] == null ? b ? m[E] === null ? new x("The " + O + " `" + R + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new x("The " + O + " `" + R + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : i(m, E, S, O, R);
      }
      var g = _.bind(null, !1);
      return g.isRequired = _.bind(null, !0), g;
    }
    function j(i) {
      function f(T, _, g, b, m, E) {
        var S = T[_], O = N(S);
        if (O !== i) {
          var R = z(S);
          return new x(
            "Invalid " + b + " `" + m + "` of type " + ("`" + R + "` supplied to `" + g + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return $(f);
    }
    function G() {
      return $(o);
    }
    function I(i) {
      function f(T, _, g, b, m) {
        if (typeof i != "function")
          return new x("Property `" + m + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var E = T[_];
        if (!Array.isArray(E)) {
          var S = N(E);
          return new x("Invalid " + b + " `" + m + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an array."));
        }
        for (var O = 0; O < E.length; O++) {
          var R = i(E, O, g, b, m + "[" + O + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return $(f);
    }
    function P() {
      function i(f, T, _, g, b) {
        var m = f[T];
        if (!c(m)) {
          var E = N(m);
          return new x("Invalid " + g + " `" + b + "` of type " + ("`" + E + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(i);
    }
    function u() {
      function i(f, T, _, g, b) {
        var m = f[T];
        if (!e.isValidElementType(m)) {
          var E = N(m);
          return new x("Invalid " + g + " `" + b + "` of type " + ("`" + E + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(i);
    }
    function B(i) {
      function f(T, _, g, b, m) {
        if (!(T[_] instanceof i)) {
          var E = i.name || w, S = pe(T[_]);
          return new x("Invalid " + b + " `" + m + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return $(f);
    }
    function oe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function f(T, _, g, b, m) {
        for (var E = T[_], S = 0; S < i.length; S++)
          if (y(E, i[S]))
            return null;
        var O = JSON.stringify(i, function(k, l) {
          var F = z(l);
          return F === "symbol" ? String(l) : l;
        });
        return new x("Invalid " + b + " `" + m + "` of value `" + String(E) + "` " + ("supplied to `" + g + "`, expected one of " + O + "."));
      }
      return $(f);
    }
    function ie(i) {
      function f(T, _, g, b, m) {
        if (typeof i != "function")
          return new x("Property `" + m + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var E = T[_], S = N(E);
        if (S !== "object")
          return new x("Invalid " + b + " `" + m + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an object."));
        for (var O in E)
          if (r(E, O)) {
            var R = i(E, O, g, b, m + "." + O, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return $(f);
    }
    function ce(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < i.length; f++) {
        var T = i[f];
        if (typeof T != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(T) + " at index " + f + "."
          ), o;
      }
      function _(g, b, m, E, S) {
        for (var O = [], R = 0; R < i.length; R++) {
          var k = i[R], l = k(g, b, m, E, S, n);
          if (l == null)
            return null;
          l.data && r(l.data, "expectedType") && O.push(l.data.expectedType);
        }
        var F = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new x("Invalid " + E + " `" + S + "` supplied to " + ("`" + m + "`" + F + "."));
      }
      return $(_);
    }
    function le() {
      function i(f, T, _, g, b) {
        return U(f[T]) ? null : new x("Invalid " + g + " `" + b + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return $(i);
    }
    function Z(i, f, T, _, g) {
      return new x(
        (i || "React class") + ": " + f + " type `" + T + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function ue(i) {
      function f(T, _, g, b, m) {
        var E = T[_], S = N(E);
        if (S !== "object")
          return new x("Invalid " + b + " `" + m + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var O in i) {
          var R = i[O];
          if (typeof R != "function")
            return Z(g, b, m, O, z(R));
          var k = R(E, O, g, b, m + "." + O, n);
          if (k)
            return k;
        }
        return null;
      }
      return $(f);
    }
    function fe(i) {
      function f(T, _, g, b, m) {
        var E = T[_], S = N(E);
        if (S !== "object")
          return new x("Invalid " + b + " `" + m + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        var O = t({}, T[_], i);
        for (var R in O) {
          var k = i[R];
          if (r(i, R) && typeof k != "function")
            return Z(g, b, m, R, z(k));
          if (!k)
            return new x(
              "Invalid " + b + " `" + m + "` key `" + R + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(T[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var l = k(E, R, g, b, m + "." + R, n);
          if (l)
            return l;
        }
        return null;
      }
      return $(f);
    }
    function U(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(U);
          if (i === null || c(i))
            return !0;
          var f = v(i);
          if (f) {
            var T = f.call(i), _;
            if (f !== i.entries) {
              for (; !(_ = T.next()).done; )
                if (!U(_.value))
                  return !1;
            } else
              for (; !(_ = T.next()).done; ) {
                var g = _.value;
                if (g && !U(g[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(i, f) {
      return i === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function N(i) {
      var f = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : de(f, i) ? "symbol" : f;
    }
    function z(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var f = N(i);
      if (f === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function Q(i) {
      var f = z(i);
      switch (f) {
        case "array":
        case "object":
          return "an " + f;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + f;
        default:
          return f;
      }
    }
    function pe(i) {
      return !i.constructor || !i.constructor.name ? w : i.constructor.name;
    }
    return D.checkPropTypes = s, D.resetWarningCache = s.resetWarningCache, D.PropTypes = D, D;
  }, _e;
}
var Ee, He;
function Et() {
  if (He)
    return Ee;
  He = 1;
  var e = Pe();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ee = function() {
    function r(o, c, h, p, d, v) {
      if (v !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ee;
}
if (process.env.NODE_ENV !== "production") {
  var Tt = Qe(), bt = !0;
  M.exports = _t()(Tt.isElement, bt);
} else
  M.exports = Et()();
const St = "yyyy/MM", Rt = "yyyy-yyyy", xt = "yyyy", q = "is-selected", tt = "is-disabled", At = "is-holiday", Ct = "is-current", nt = "is-range-first", rt = "is-range-last", st = "is-range-first-last", at = "is-range-temp", Ue = "is-first-page", Ve = "is-last-page", Ot = "is-weekend", ne = "date-only", Ce = "__prev-button", Oe = "__next-button", Ie = "__title-wrapper", ot = "__item-week", it = "__confirm-button", ct = "__clear-button", lt = "__cancel-button", Ge = "multiple", H = "range", Mt = "single", Me = "date", we = "month", re = "year", Je = {
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
}, wt = ["confirmButton", "cancelButton", "clearButton"], Ke = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function Dt(e = "en", t) {
  const n = Ke[e] || Ke.en, r = wt.reduce((a, o, c) => (a[o] = n[c], a), {}), s = Je[e] || Je.en;
  return r.weeks = t ? s.full : s.abbr, r;
}
function Pt({ lang: e, isFullWeek: t, langPackage: n }) {
  return {
    langPackage: {
      ...Dt(e, t),
      ...n
    }
  };
}
/*!
 * date-utils-2020 v1.1.0
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2023/01/14 14:10:19 GMT+0900
 */
function se(e) {
  return String(e).padStart(2, "0");
}
const It = {
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
function Y(e, t, n) {
  const r = J(e);
  if (!r || !t)
    return String(e);
  if (t === "timestamp")
    return r.getTime().toString();
  if (/(y+)/i.test(t)) {
    const o = RegExp.$1;
    t = t.replace(o, (r.getFullYear() + "").substring(4 - o.length));
  }
  (!n || !Array.isArray(n.weeks)) && (n = It);
  const s = {
    "M+": r.getMonth() + 1,
    "d+": r.getDate(),
    "h+": r.getHours(),
    "m+": r.getMinutes(),
    "s+": r.getSeconds(),
    "a+": r.getHours() < 12 ? "am" : "pm",
    "A+": r.getHours() < 12 ? "AM" : "PM"
  };
  let a;
  for (const o in s)
    if (new RegExp("(" + o + ")").test(t)) {
      a = RegExp.$1;
      const c = s[o] + "";
      t = t.replace(a, a.length === 1 ? c : se(c));
    }
  if (/w+/i.test(t)) {
    const o = r.getDay();
    t = t.replace(/w+/i, /W+/.test(t) ? n.weeks[o] : String(o));
  }
  if (/g/i.test(t)) {
    const o = r.toString().split(/\s+/).slice(5), c = t.includes("g");
    t = t.replace(/g/i, c ? o[0] : o.join(" "));
  }
  return t;
}
function J(e) {
  let t = null;
  if (e instanceof Date)
    t = e;
  else if (typeof e == "number")
    t = new Date(e);
  else if (typeof e == "string") {
    let n = e.trim();
    if (/^\d+$/.test(n)) {
      const r = n.length;
      r === 8 ? t = new Date([n.substring(0, 4), n.substring(4, 6), n.substring(6, 8)].join("/")) : r === 6 ? t = new Date([n.substring(0, 4), n.substring(4, 6), "01"].join("/")) : r === 4 ? t = new Date(n + "/01/01") : t = new Date(parseInt(e));
    } else
      n = n.replace(/[年月日]/g, (r) => r === "\u65E5" ? "" : "/").replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/ig, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(n) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(n) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : t = new Date(n);
  }
  return t && !isNaN(t.getFullYear()) ? t : null;
}
const $t = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function L(e) {
  return e >> 0;
}
function K(e) {
  return typeof e == "string";
}
function Xe(e) {
  return typeof e == "function";
}
function kt({ current: e, currentDate: t }) {
  const n = e.slice(0, 2);
  n.push("01");
  const r = new Date(n.join("/")).getDay();
  let s = t.getFullYear(), a = t.getMonth() + 1;
  a === 12 ? (s += 1, a = 1) : a += 1;
  const o = new Date(
    `${s}/${se(a)}/01`
  ).getTime(), c = new Date(o - 1);
  return {
    firstDayOfWeek: r,
    lastDayOfMonth: c.getDate()
  };
}
function jt(e) {
  const t = L(e.substr(2)), n = t % 20 === 0, r = Math.floor(t / 20);
  let s = (n ? r - 1 : r) * 20 + 1, a = L(e.substr(0, 2));
  r === 0 && t === 0 && (a -= 1, s = 81);
  const o = a * 100 + s, c = o + 19;
  return {
    startFullYear: o,
    endFullYear: c
  };
}
function W(e, t) {
  const n = [];
  if (Array.isArray(e)) {
    const [r, s] = e;
    let a = J(r), o = J(s);
    K(t) && (a = a ? +Y(a, t) : null, o = o ? +Y(o, t) : null), n.push(a), n.push(o);
  }
  return n;
}
function Te({ data: e, options: t }) {
  const n = [];
  return t.mode === H && e.selected.forEach((r) => {
    n.push(r ? r.value : null);
  }), n;
}
function be(e, t, n) {
  return !!t && e < t || !!n && e > n;
}
function ut(e, { type: t, mode: n }) {
  const r = [];
  if (e) {
    Array.isArray(e) || (e = [e]), n === Mt && e.length > 1 && (e = e.slice(0, 1)), n === H && e.length > 2 && (e = e.slice(0, 2));
    const s = $t[t];
    let a;
    e.forEach((o) => {
      a = J(o), a && r.push({
        value: L(Y(a, s)),
        date: a,
        fullText: Y(a, "yyyy/MM/dd")
      });
    }), r.sort((o, c) => o.value - c.value);
  }
  return r;
}
function Se(e, t, n) {
  return t && t > e || n && n < e;
}
function Lt(e, t, n, r) {
  const s = [];
  switch (r) {
    case H: {
      const [a, o] = e;
      a && Se(+a.date, t, n) && s.push(a), o && Se(+o.date, t, n) && s.push(o);
      break;
    }
    default:
      e.forEach((a) => {
        Se(+a.date, t, n) && s.push(a);
      });
  }
  return s.length > 0;
}
function Nt(e) {
  const { options: t } = this;
  let n = null;
  const [r, s] = W(t.dateRange);
  if (r && +r > +n && (n = r), s && +s < +n && (n = s), e.length)
    if (Lt(
      e,
      r,
      s,
      t.type
    )) {
      let a = setTimeout(() => {
        this.emit(
          "error",
          new Error(
            `The default date[${t.defaultDate}] is not within the range[${t.dateRange}].`
          )
        ), clearTimeout(a), a = null;
      }, 0);
    } else
      n = e[0].date;
  return n;
}
function Re(e, { data: t, options: n }) {
  return n.mode === H && t.selected.length === 1 ? e === t.selected[0].value : !1;
}
function V(e) {
  if (typeof e > "u" && (e = "undefined"), e === null && (e = "null"), K(e))
    return document.createTextNode(e);
  const t = document.createElement(e.t || "div"), n = e.a;
  n && typeof n == "object" && Object.keys(n).forEach((s) => {
    t.setAttribute(s, n[s]);
  });
  const r = e.c;
  return Array.isArray(r) && r.length > 0 && r.forEach((s) => {
    t.appendChild(V(s));
  }), t;
}
function $e(e, t = document) {
  if (!e)
    return null;
  let n = null;
  return K(e) ? n = t.querySelector(e) : typeof e == "object" && e.nodeType === 1 && (n = e), n;
}
function Ft(e, t, n) {
  const r = "__item", s = {};
  if (t.includes(r))
    s.el = e, s.className = t;
  else if (e !== n) {
    let a = e.parentElement;
    for (; a && a !== n; ) {
      if (a.className.split(" ").includes(r)) {
        s.el = a, s.className = a.className.split(" ");
        break;
      }
      a = a.parentElement;
    }
  }
  return s.el && (s.index = L(s.el.getAttribute("data-index"))), s;
}
function X(...e) {
  const t = e[0], n = e.slice(1), r = [];
  t.className.split(" ").forEach((s) => {
    n.includes(s) || r.push(s);
  }), t.className = r.join(" ");
}
function ae(...e) {
  const t = e[0], n = t.className.split(" ");
  e.slice(1).forEach((r) => {
    n.includes(r) || n.push(r);
  }), t.className = n.join(" ");
}
const Yt = {
  a: {
    class: "zx-calendar"
  }
}, Wt = {
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
            class: Ce
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [Ce, ne].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: Ie
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
            class: [Oe, ne].join(" ")
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: Oe
          }
        }
      ]
    }
  ]
}, qt = {
  a: {
    class: "zx-calendar-week-wrapper"
  },
  c: []
}, Bt = {
  a: {
    class: "zx-calendar-body-wrapper"
  }
}, zt = {
  a: {
    class: "zx-calender-footer-wrapper"
  },
  c: []
}, Ht = {
  confirm: {
    t: "button",
    a: {
      class: it
    }
  },
  clear: {
    t: "button",
    a: {
      class: ct
    }
  },
  cancel: {
    t: "button",
    a: {
      class: lt
    }
  }
};
function Ut(e, t) {
  if (t.type !== Me)
    return null;
  const n = JSON.parse(JSON.stringify(qt));
  return e.forEach((r, s) => {
    const a = s === 0 || s === 6;
    n.c.push({
      a: {
        class: ot + (a ? " " + Ot : "")
      },
      c: [r]
    });
  }), V(n);
}
function xe(e, t, n, r) {
  const s = e.some((o) => t && o.value && o.value < t), a = e.some((o) => n && o.value && o.value > n);
  s ? ae(r, Ue) : X(r, Ue), a ? ae(r, Ve) : X(r, Ve);
}
function Ae(e, t, { titleFormatter: n, type: r, itemSuffix: s, showHoliday: a }, { header: o, body: c }) {
  const h = t[e] || [];
  let p = null;
  if (r === re) {
    const D = h[0], y = h[h.length - 1];
    let x = 0;
    p = n.replace(/(y+)/g, () => x++ === 0 ? D.text : y.text);
  } else
    p = Y(t.currentDate, n);
  $e("." + Ie, o).innerText = p;
  let d, v, w;
  c.innerHTML = h.reduce((D, y, x) => (d = ["__item"], y.disabled && d.push(tt), y.value > 0 ? (w = "", y.holiday && (d.push(At), w = ` title="${y.holiday}"`), y.selected && d.push(q), y.current && d.push(Ct), y.isRangeFirst && y.isRangeLast ? d.push(st) : (y.isRangeFirst && d.push(nt), y.isRangeLast && d.push(rt)), y.isRangeTemp && d.push(at), v = [
    `<div class="${d.join(" ")}" data-index="${x}"${w}>`
  ], v.push('<div class="__inner">'), v.push(`<p class="__text">${y.text}`), s && v.push(`<span class="__suffix">${s}</span>`), a && y.holiday && v.push(`<span class="__holiday">${y.holiday}</span>`), v.push("</p></div></div>")) : v = [
    `<div class="${d.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], D.push(v.join("")), D), []).join("");
}
function Ze(e, { body: t }, n) {
  const [...r] = t.querySelectorAll("." + q);
  r.forEach((s) => {
    X(s, q), n && X(
      s,
      nt,
      rt,
      st
    );
  }), ae(e, n ? at : q);
}
const ke = "single", ft = "date", Vt = {
  primary: "#f30",
  arrow: "#999",
  holidayDot: "rgba(0, 0, 0, 0.2)",
  currentItemBg: "#eee",
  white: "#fff",
  rangeBg: "#eee"
}, te = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: ft,
  isFullWeek: !1,
  titleFormatter: St,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: ke,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1,
  colors: {}
};
function De(e = {}) {
  const t = {
    ...te,
    ...e,
    colors: {
      ...Vt,
      ...e.colors
    }
  };
  if (e.titleFormatter || (t.type === re ? t.titleFormatter = Rt : t.type === we && (t.titleFormatter = xt)), !t.el || !$e(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: n } = Pt(t);
  this.langPackage = n, this.$els = {};
  const r = new Date(), s = Y(r, "yyyy/MM/dd", n);
  let a = [];
  try {
    a = ut(t.defaultDate, t);
  } catch (h) {
    setTimeout(() => {
      this.emit("error", h);
    }, 0);
  }
  const o = Nt.call(this, a) || r, c = Y(o, "yyyy/MM/dd");
  this.data = {
    today: s,
    currentDate: o,
    currentDay: c,
    current: c.split("/"),
    selected: a,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
De.prototype = {
  constructor: De,
  formatDate(e, t, n) {
    return n || (n = this.langPackage), Y(e, t, n);
  },
  toDate(e) {
    const t = J(e);
    return t || this.emit("error", new Error(`"${e}" is an invalid Date!`)), t;
  },
  emit(...e) {
    const t = e[0];
    this._eventList[t] && this._eventList[t].forEach((n) => {
      n.apply(this, e.slice(1));
    });
  },
  on(e, t) {
    !K(e) || !Xe(t) || (this._eventList[e] || (this._eventList[e] = []), this._eventList[e].push(t));
  },
  off(e) {
    !K(e) || !this._eventList[e] || (this._eventList[e].length = 0);
  },
  _initDom() {
    const e = this.options, t = $e(e.el), n = JSON.parse(JSON.stringify(Yt)), r = [
      n.a.class,
      "type-is-" + e.type,
      "mode-is-" + e.mode
    ];
    n.a.class = r.join(" "), n.a.style = Object.keys(e.colors).map((h) => `--zx-calendar-color-${h}: ${e.colors[h]}`).join(";");
    const s = V(n), a = V(Wt);
    s.appendChild(a);
    const o = Ut(this.langPackage.weeks, e);
    o && s.appendChild(o);
    const c = V(Bt);
    if (s.appendChild(c), !e.hideFooter && (e.mode === Ge || e.mode === H)) {
      const h = JSON.parse(JSON.stringify(zt));
      e.footerButtons.forEach((d) => {
        h.c.push({
          ...Ht[d],
          c: [this.langPackage[d + "Button"]]
        });
      });
      const p = V(h);
      e.footerButtonAlign && (p.style.justifyContent = e.footerButtonAlign), s.appendChild(p);
    }
    t.appendChild(s), this.$els = {
      calendar: s,
      header: a,
      week: o,
      body: c,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(e) {
    e.stopPropagation();
    const t = e.target, n = t.className.split(" "), r = t.innerText;
    if (n.includes(Ce))
      this.prev(!n.includes(ne));
    else if (n.includes(Oe))
      this.next(!n.includes(ne));
    else if (n.includes(it))
      this.emit("change", [...this.data.selected]);
    else if (n.includes(lt))
      this.emit("cancel");
    else if (n.includes(ct))
      this.setDate();
    else if (n.includes(Ie))
      this._onTitleClick({
        innerText: r,
        el: t,
        className: n
      });
    else if (n.includes(ot))
      this._onWeekClick({
        innerText: r,
        el: t,
        className: n
      });
    else {
      const s = Ft(t, n, this.$els.calendar);
      s.el && this._onItemClick(s);
    }
  },
  _onTitleClick(e) {
    this.emit("onTitleClick", e);
  },
  prev(e) {
    let [t, n] = this.data.current;
    switch (this.options.type) {
      case Me:
        if (e) {
          t = L(t) - 1;
          const [r] = W(this.options.dateRange, "yyyy");
          if (r && t <= r) {
            t = r;
            const [s] = W(this.options.dateRange, "MM");
            s && (n = s);
          }
        } else
          n = L(n) - 1, n === 0 && (t = L(t) - 1, n = 12);
        this.setCurrentDate([t, n, "01"].join("/"));
        break;
      case we:
        this.setCurrentDate(t - 1);
        break;
      case re: {
        const r = this.data.years[0] || {};
        this.setCurrentDate(r.value - 1);
        break;
      }
    }
  },
  next(e) {
    let [t, n] = this.data.current;
    switch (this.options.type) {
      case Me:
        if (e) {
          t = L(t) + 1;
          const [, r] = W(this.options.dateRange, "yyyy");
          if (r && t >= r) {
            t = r;
            const [, s] = W(this.options.dateRange, "MM");
            s && (n = s);
          }
        } else
          n = L(n) + 1, n === 13 && (t = L(t) + 1, n = 1);
        this.setCurrentDate([t, n, "01"].join("/"));
        break;
      case we:
        this.setCurrentDate(L(t) + 1);
        break;
      case re: {
        const r = this.data.years, s = r[r.length - 1] || {};
        this.setCurrentDate(s.value + 1);
        break;
      }
    }
  },
  _onWeekClick(e) {
    this.emit("onWeekClick", e);
  },
  _onItemClick({ el: e, className: t, index: n }) {
    if (t.includes(tt))
      return;
    const s = (this.data[this.options.type + "s"] || [])[n] || {};
    if (this.options.mode === H) {
      const a = [...this.data.selected], o = a.length;
      o === 0 || o >= 2 && a.every((c) => !!c) ? (this.data.selected = [s], Ze(e, this.$els, !0)) : o === 1 && (a[0].value < s.value ? this.data.selected.push(s) : this.data.selected.unshift(s), this._updateDom());
    } else if (this.options.mode === Ge)
      if (t.includes(q)) {
        X(e, q);
        const a = this.data.selected.findIndex(
          (o) => o.value === s.value
        );
        this.data.selected.splice(a, 1);
      } else
        ae(e, q), s.selected = !0, this.data.selected.push(s);
    else
      t.includes(q) || (Ze(e, this.$els), s.selected = !0, this.data.selected = [{ ...s }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(e, t) {
    this.options.dateRange = [e, t], this._updateDom();
  },
  setDate(e) {
    try {
      if (this.data.selected = ut(e, this.options), this.data.selected.length === 0) {
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
    const t = this.toDate(String(e));
    if (!t)
      return;
    const n = Y(t, "yyyy/MM/dd");
    this.data.currentDate = t, this.data.currentDay = n, this.data.current = n.split("/"), this._updateDom();
  },
  _updateDom() {
    switch (this.options.type) {
      case "date":
        this.createDays(), Ae("dates", this.data, this.options, this.$els);
        break;
      case "month":
        this.createMonths(), Ae("months", this.data, this.options, this.$els);
        break;
      case "year":
        this.createYears(), Ae("years", this.data, this.options, this.$els);
        break;
    }
  },
  createYears() {
    const [e, t] = W(
      this.options.dateRange,
      "yyyy"
    ), [n, r] = Te(this), s = [], a = this.data.today.substr(0, 4), { startFullYear: o, endFullYear: c } = jt(this.data.current[0]);
    let h;
    for (let p = o; p <= c; p++)
      h = p.toString(), s.push({
        text: h,
        fullText: h,
        value: p,
        disabled: be(p, e, t),
        isRangeFirst: p === n && r,
        isRangeLast: p === r && n,
        isRangeTemp: Re(p, this),
        selected: this._isSelected(p),
        current: a === h,
        date: this.toDate(h)
      });
    this.data.years = s, xe(s, e, t, this.$els.calendar);
  },
  createMonths() {
    const [e, t] = W(
      this.options.dateRange,
      "yyyyMM"
    ), [n, r] = Te(this), s = [], a = this.data.today.substr(0, 7), o = this.data.current[0] + "/", c = L(this.data.current[0]) * 100;
    let h, p, d;
    for (let v = 1; v <= 12; v++)
      h = se(v), p = o + h, d = c + v, s.push({
        text: h,
        fullText: p,
        value: d,
        disabled: be(d, e, t),
        isRangeFirst: d === n && r,
        isRangeLast: d === r && n,
        isRangeTemp: Re(d, this),
        selected: this._isSelected(d),
        current: p.startsWith(a),
        date: this.toDate(p)
      });
    this.data.months = s, xe(
      s,
      e,
      t,
      this.$els.calendar
    );
  },
  createDays() {
    const [e, t] = W(
      this.options.dateRange,
      "yyyyMMdd"
    ), [n, r] = Te(this), { firstDayOfWeek: s, lastDayOfMonth: a } = kt(this.data), o = new Array(s).fill(0);
    for (let y = 1; y <= a; y++)
      o.push(y);
    if (o.length % 7 !== 0)
      for (let y = 0; y < o.length % 7; y++)
        o.push(0);
    let c = 0, h, p, d;
    const v = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: w } = this.options, D = o.map((y) => {
      c > 6 && (c = 0), h = y > 0 ? se(y) : "";
      const x = v + h;
      return d = y > 0 ? +x.replace(/\//g, "") : 0, p = {
        text: h,
        fullText: y > 0 ? x : "",
        value: d,
        week: c++,
        disabled: !y || be(d, e, t),
        holiday: !1,
        isRangeFirst: d === n && r,
        isRangeLast: d === r && n,
        isRangeTemp: Re(d, this),
        selected: this._isSelected(d),
        current: this.data.today === x,
        date: y > 0 ? this.toDate(x) : null
      }, Xe(w) ? w(p) : p;
    });
    this.data.dates = D, xe(D, e, t, this.$els.calendar);
  },
  destroy() {
    this.$els.calendar.removeEventListener("click", this.eventsHandler), this.$els.parent.removeChild(this.$els.calendar);
  },
  _isSelected(e) {
    const t = this.data.selected;
    switch (this.options.mode) {
      case H: {
        const [n, r] = t;
        if (e && n && r)
          return e >= n.value && e <= r.value;
        break;
      }
      default:
        return t.some((n) => n.value === e);
    }
    return !1;
  }
};
function Gt(e, t, n, r) {
  const s = e.map((o) => n ? Y(o.fullText, n, r) : o.fullText);
  return !t || t === ke ? s[0] : s;
}
function Jt(e) {
  const t = {
    ...e.option
  };
  let n;
  return Object.keys(te).forEach((r) => {
    n = e[r], typeof n < "u" && (!Array.isArray(te[r]) || te[r].includes(n)) && (t[r] = n);
  }), e.value && (t.defaultDate = e.value), t;
}
class dt extends pt {
  constructor(t) {
    super(t), this.el = ht(), this.calendar = null, this.options = Jt(t), this.state = {
      date: t.value
    };
  }
  setDate(t) {
    this.calendar.setDate(t);
  }
  toDate(t) {
    return this.calendar.toDate(t);
  }
  formatDate(t, n, r) {
    return this.calendar.formatDate(t, n, r);
  }
  setCurrentDate(t) {
    this.calendar.setCurrentDate(t);
  }
  setDateRange(t, n) {
    this.calendar.setDateRange(t, n);
  }
  prev(t) {
    this.calendar.prev(t);
  }
  next(t) {
    this.calendar.next(t);
  }
  getDate() {
    return this.calendar.getDate();
  }
  fmt() {
    const { format: t } = this.props;
    return t && typeof t == "string" ? t : null;
  }
  componentDidMount() {
    const { instance: t, change: n, cancel: r, error: s } = this.props, a = new De({
      ...this.options,
      el: this.el.current
    });
    a.on("change", (o) => {
      const c = Gt(
        o,
        this.props.mode,
        this.fmt(),
        this.options.langPackage
      );
      this.setState({
        date: c
      }), n == null || n(c, o);
    }), a.on("error", s), a.on("cancel", r), this.calendar = a, t == null || t(a);
  }
  render() {
    return /* @__PURE__ */ React.createElement("section", {
      className: "zx-calendar-wrapper"
    }, this.props.header, /* @__PURE__ */ React.createElement("div", {
      ref: this.el
    }), this.props.footer);
  }
}
dt.propTypes = {
  type: M.exports.string,
  mode: M.exports.string,
  lang: M.exports.string,
  isFullWeek: M.exports.bool,
  titleFormatter: M.exports.string,
  itemSuffix: M.exports.string,
  dateRange: M.exports.array,
  showHoliday: M.exports.bool,
  itemFormatter: M.exports.func,
  langPackage: M.exports.object,
  footerButtons: M.exports.array,
  footerButtonAlign: M.exports.string,
  hideFooter: M.exports.bool,
  value: M.exports.oneOfType([
    M.exports.string,
    M.exports.number,
    M.exports.array
  ]),
  format: M.exports.string,
  change: M.exports.func,
  cancel: M.exports.func,
  error: M.exports.func,
  instance: M.exports.func,
  option: M.exports.object,
  header: M.exports.node,
  footer: M.exports.node,
  colors: M.exports.object
};
dt.defaultProps = {
  type: ft,
  mode: ke,
  option: {}
};
export {
  dt as ZxReactCalendar
};
