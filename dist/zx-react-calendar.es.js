/*!
 * zx-calendar version 0.7.0
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/calendar#readme
 * Released on: 2022-11-27 17:48:55 (GMT+0900)
 */
import { Component as ht, createRef as yt } from "react";
var D = { exports: {} }, ye = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function vt() {
  if (je)
    return A;
  je = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, J = e ? Symbol.for("react.scope") : 60119;
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
                case l:
                case d:
                case y:
                case w:
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
  return A.AsyncMode = h, A.ConcurrentMode = p, A.ContextConsumer = l, A.ContextProvider = o, A.Element = t, A.ForwardRef = d, A.Fragment = r, A.Lazy = y, A.Memo = w, A.Portal = n, A.Profiler = a, A.StrictMode = s, A.Suspense = v, A.isAsyncMode = function(u) {
    return P(u) || I(u) === h;
  }, A.isConcurrentMode = P, A.isContextConsumer = function(u) {
    return I(u) === l;
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
    return I(u) === w;
  }, A.isPortal = function(u) {
    return I(u) === n;
  }, A.isProfiler = function(u) {
    return I(u) === a;
  }, A.isStrictMode = function(u) {
    return I(u) === s;
  }, A.isSuspense = function(u) {
    return I(u) === v;
  }, A.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === p || u === a || u === s || u === v || u === M || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === w || u.$$typeof === o || u.$$typeof === l || u.$$typeof === d || u.$$typeof === $ || u.$$typeof === L || u.$$typeof === J || u.$$typeof === x);
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
function mt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, J = e ? Symbol.for("react.scope") : 60119;
    function I(c) {
      return typeof c == "string" || typeof c == "function" || c === r || c === p || c === a || c === s || c === v || c === M || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === w || c.$$typeof === o || c.$$typeof === l || c.$$typeof === d || c.$$typeof === $ || c.$$typeof === L || c.$$typeof === J || c.$$typeof === x);
    }
    function P(c) {
      if (typeof c == "object" && c !== null) {
        var F = c.$$typeof;
        switch (F) {
          case t:
            var ee = c.type;
            switch (ee) {
              case h:
              case p:
              case r:
              case a:
              case s:
              case v:
                return ee;
              default:
                var Le = ee && ee.$$typeof;
                switch (Le) {
                  case l:
                  case d:
                  case y:
                  case w:
                  case o:
                    return Le;
                  default:
                    return F;
                }
            }
          case n:
            return F;
        }
      }
    }
    var u = h, B = p, oe = l, ce = o, le = t, ue = d, Z = r, fe = y, de = w, V = n, pe = a, N = s, z = v, Q = !1;
    function he(c) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(c) || P(c) === h;
    }
    function i(c) {
      return P(c) === p;
    }
    function f(c) {
      return P(c) === l;
    }
    function T(c) {
      return P(c) === o;
    }
    function _(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function m(c) {
      return P(c) === d;
    }
    function b(c) {
      return P(c) === r;
    }
    function g(c) {
      return P(c) === y;
    }
    function E(c) {
      return P(c) === w;
    }
    function S(c) {
      return P(c) === n;
    }
    function O(c) {
      return P(c) === a;
    }
    function R(c) {
      return P(c) === s;
    }
    function k(c) {
      return P(c) === v;
    }
    C.AsyncMode = u, C.ConcurrentMode = B, C.ContextConsumer = oe, C.ContextProvider = ce, C.Element = le, C.ForwardRef = ue, C.Fragment = Z, C.Lazy = fe, C.Memo = de, C.Portal = V, C.Profiler = pe, C.StrictMode = N, C.Suspense = z, C.isAsyncMode = he, C.isConcurrentMode = i, C.isContextConsumer = f, C.isContextProvider = T, C.isElement = _, C.isForwardRef = m, C.isFragment = b, C.isLazy = g, C.isMemo = E, C.isPortal = S, C.isProfiler = O, C.isStrictMode = R, C.isSuspense = k, C.isValidElementType = I, C.typeOf = P;
  }()), C;
}
var Fe;
function Qe() {
  return Fe || (Fe = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = vt() : e.exports = mt();
  }(ye)), ye.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ve, Ye;
function gt() {
  if (Ye)
    return ve;
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
      for (var o = {}, l = 0; l < 10; l++)
        o["_" + String.fromCharCode(l)] = l;
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
  return ve = s() ? Object.assign : function(a, o) {
    for (var l, h = r(a), p, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var v in l)
        t.call(l, v) && (h[v] = l[v]);
      if (e) {
        p = e(l);
        for (var M = 0; M < p.length; M++)
          n.call(l, p[M]) && (h[p[M]] = l[p[M]]);
      }
    }
    return h;
  }, ve;
}
var me, We;
function Ie() {
  if (We)
    return me;
  We = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return me = e, me;
}
var ge, qe;
function et() {
  return qe || (qe = 1, ge = Function.call.bind(Object.prototype.hasOwnProperty)), ge;
}
var _e, Be;
function _t() {
  if (Be)
    return _e;
  Be = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ie(), n = {}, r = et();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(a, o, l, h, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var v;
          try {
            if (typeof a[d] != "function") {
              var M = Error(
                (h || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw M.name = "Invariant Violation", M;
            }
            v = a[d](o, d, h, l, null, t);
          } catch (y) {
            v = y;
          }
          if (v && !(v instanceof Error) && e(
            (h || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in n)) {
            n[v.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + l + " type: " + v.message + (w != null ? w : "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, _e = s, _e;
}
var Ee, ze;
function Et() {
  if (ze)
    return Ee;
  ze = 1;
  var e = Qe(), t = gt(), n = Ie(), r = et(), s = _t(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var h = "Warning: " + l;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Ee = function(l, h) {
    var p = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function v(i) {
      var f = i && (p && i[p] || i[d]);
      if (typeof f == "function")
        return f;
    }
    var M = "<<anonymous>>", w = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: J(),
      arrayOf: I,
      element: P(),
      elementType: u(),
      instanceOf: B,
      node: ue(),
      objectOf: ce,
      oneOf: oe,
      oneOfType: le,
      shape: fe,
      exact: de
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
      function _(b, g, E, S, O, R, k) {
        if (S = S || M, R = R || E, k !== n) {
          if (h) {
            var c = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw c.name = "Invariant Violation", c;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var F = S + ":" + E;
            !f[F] && T < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[F] = !0, T++);
          }
        }
        return g[E] == null ? b ? g[E] === null ? new x("The " + O + " `" + R + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new x("The " + O + " `" + R + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : i(g, E, S, O, R);
      }
      var m = _.bind(null, !1);
      return m.isRequired = _.bind(null, !0), m;
    }
    function L(i) {
      function f(T, _, m, b, g, E) {
        var S = T[_], O = N(S);
        if (O !== i) {
          var R = z(S);
          return new x(
            "Invalid " + b + " `" + g + "` of type " + ("`" + R + "` supplied to `" + m + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return $(f);
    }
    function J() {
      return $(o);
    }
    function I(i) {
      function f(T, _, m, b, g) {
        if (typeof i != "function")
          return new x("Property `" + g + "` of component `" + m + "` has invalid PropType notation inside arrayOf.");
        var E = T[_];
        if (!Array.isArray(E)) {
          var S = N(E);
          return new x("Invalid " + b + " `" + g + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected an array."));
        }
        for (var O = 0; O < E.length; O++) {
          var R = i(E, O, m, b, g + "[" + O + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return $(f);
    }
    function P() {
      function i(f, T, _, m, b) {
        var g = f[T];
        if (!l(g)) {
          var E = N(g);
          return new x("Invalid " + m + " `" + b + "` of type " + ("`" + E + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(i);
    }
    function u() {
      function i(f, T, _, m, b) {
        var g = f[T];
        if (!e.isValidElementType(g)) {
          var E = N(g);
          return new x("Invalid " + m + " `" + b + "` of type " + ("`" + E + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(i);
    }
    function B(i) {
      function f(T, _, m, b, g) {
        if (!(T[_] instanceof i)) {
          var E = i.name || M, S = he(T[_]);
          return new x("Invalid " + b + " `" + g + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected ") + ("instance of `" + E + "`."));
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
      function f(T, _, m, b, g) {
        for (var E = T[_], S = 0; S < i.length; S++)
          if (y(E, i[S]))
            return null;
        var O = JSON.stringify(i, function(k, c) {
          var F = z(c);
          return F === "symbol" ? String(c) : c;
        });
        return new x("Invalid " + b + " `" + g + "` of value `" + String(E) + "` " + ("supplied to `" + m + "`, expected one of " + O + "."));
      }
      return $(f);
    }
    function ce(i) {
      function f(T, _, m, b, g) {
        if (typeof i != "function")
          return new x("Property `" + g + "` of component `" + m + "` has invalid PropType notation inside objectOf.");
        var E = T[_], S = N(E);
        if (S !== "object")
          return new x("Invalid " + b + " `" + g + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected an object."));
        for (var O in E)
          if (r(E, O)) {
            var R = i(E, O, m, b, g + "." + O, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return $(f);
    }
    function le(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < i.length; f++) {
        var T = i[f];
        if (typeof T != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(T) + " at index " + f + "."
          ), o;
      }
      function _(m, b, g, E, S) {
        for (var O = [], R = 0; R < i.length; R++) {
          var k = i[R], c = k(m, b, g, E, S, n);
          if (c == null)
            return null;
          c.data && r(c.data, "expectedType") && O.push(c.data.expectedType);
        }
        var F = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new x("Invalid " + E + " `" + S + "` supplied to " + ("`" + g + "`" + F + "."));
      }
      return $(_);
    }
    function ue() {
      function i(f, T, _, m, b) {
        return V(f[T]) ? null : new x("Invalid " + m + " `" + b + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return $(i);
    }
    function Z(i, f, T, _, m) {
      return new x(
        (i || "React class") + ": " + f + " type `" + T + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + m + "`."
      );
    }
    function fe(i) {
      function f(T, _, m, b, g) {
        var E = T[_], S = N(E);
        if (S !== "object")
          return new x("Invalid " + b + " `" + g + "` of type `" + S + "` " + ("supplied to `" + m + "`, expected `object`."));
        for (var O in i) {
          var R = i[O];
          if (typeof R != "function")
            return Z(m, b, g, O, z(R));
          var k = R(E, O, m, b, g + "." + O, n);
          if (k)
            return k;
        }
        return null;
      }
      return $(f);
    }
    function de(i) {
      function f(T, _, m, b, g) {
        var E = T[_], S = N(E);
        if (S !== "object")
          return new x("Invalid " + b + " `" + g + "` of type `" + S + "` " + ("supplied to `" + m + "`, expected `object`."));
        var O = t({}, T[_], i);
        for (var R in O) {
          var k = i[R];
          if (r(i, R) && typeof k != "function")
            return Z(m, b, g, R, z(k));
          if (!k)
            return new x(
              "Invalid " + b + " `" + g + "` key `" + R + "` supplied to `" + m + "`.\nBad object: " + JSON.stringify(T[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var c = k(E, R, m, b, g + "." + R, n);
          if (c)
            return c;
        }
        return null;
      }
      return $(f);
    }
    function V(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(V);
          if (i === null || l(i))
            return !0;
          var f = v(i);
          if (f) {
            var T = f.call(i), _;
            if (f !== i.entries) {
              for (; !(_ = T.next()).done; )
                if (!V(_.value))
                  return !1;
            } else
              for (; !(_ = T.next()).done; ) {
                var m = _.value;
                if (m && !V(m[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(i, f) {
      return i === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function N(i) {
      var f = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : pe(f, i) ? "symbol" : f;
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
    function he(i) {
      return !i.constructor || !i.constructor.name ? M : i.constructor.name;
    }
    return w.checkPropTypes = s, w.resetWarningCache = s.resetWarningCache, w.PropTypes = w, w;
  }, Ee;
}
var Te, He;
function Tt() {
  if (He)
    return Te;
  He = 1;
  var e = Ie();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Te = function() {
    function r(o, l, h, p, d, v) {
      if (v !== e) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
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
  }, Te;
}
if (process.env.NODE_ENV !== "production") {
  var bt = Qe(), St = !0;
  D.exports = Et()(bt.isElement, St);
} else
  D.exports = Tt()();
const Rt = "yyyy/MM", xt = "yyyy-yyyy", At = "yyyy", q = "is-selected", tt = "is-disabled", Ct = "is-holiday", Ot = "is-current", nt = "is-range-first", rt = "is-range-last", st = "is-range-first-last", at = "is-range-temp", Ue = "is-first-page", Ve = "is-last-page", Dt = "is-weekend", ne = "date-only", De = "__prev-button", Me = "__next-button", $e = "__title-wrapper", it = "__item-week", ot = "__confirm-button", ct = "__clear-button", lt = "__cancel-button", Ge = "multiple", H = "range", ut = "single", re = "date", we = "month", se = "year", Je = {
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
}, Mt = ["confirmButton", "cancelButton", "clearButton"], Ke = {
  en: ["ok", "cancel", "clear"],
  jp: ["\u9078\u629E", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30AF\u30EA\u30A2\u30FC"],
  zh: ["\u786E\u5B9A", "\u53D6\u6D88", "\u6E05\u9664"]
};
function wt(e = "en", t) {
  const n = Ke[e] || Ke.en, r = Mt.reduce((a, o, l) => (a[o] = n[l], a), {}), s = Je[e] || Je.en;
  return r.weeks = t ? s.full : s.abbr, r;
}
function Pt({ lang: e, isFullWeek: t, langPackage: n }) {
  return {
    langPackage: {
      ...wt(e, t),
      ...n
    }
  };
}
const It = {
  date: "yyyyMMdd",
  month: "yyyyMM",
  year: "yyyy"
};
function j(e) {
  return e >> 0;
}
function $t(e) {
  return /^-?\d+\.?\d+$/.test(e);
}
function U(e) {
  return typeof e == "string";
}
function Xe(e) {
  return typeof e == "function";
}
function ae(e) {
  return e += "", e[1] ? e : "0" + e;
}
function Y(e, t, n) {
  const r = K(e);
  if (!r || !t)
    return U(e) ? e : e + "";
  if (t === "timestamp")
    return +r;
  let s;
  /(y+)/i.test(t) && (s = RegExp.$1, t = t.replace(s, (r.getFullYear() + "").substr(4 - s.length)));
  const a = {
    "M+": r.getMonth() + 1,
    "d+": r.getDate(),
    "h+": r.getHours(),
    "m+": r.getMinutes(),
    "s+": r.getSeconds(),
    "w+": r.getDay(),
    "W+": r.getDay(),
    "a+": r.getHours() < 12 ? "am" : "pm",
    "A+": r.getHours() < 12 ? "AM" : "PM"
  };
  n && Array.isArray(n.weeks) && (a["W+"] = n.weeks[r.getDay()]);
  for (const o in a)
    if (new RegExp("(" + o + ")").test(t)) {
      s = RegExp.$1;
      const l = a[o] + "";
      t = t.replace(s, s.length === 1 ? l : ae(l));
    }
  return t;
}
function K(e) {
  if (!e)
    return null;
  if (e instanceof Date)
    return e;
  let t = null;
  if ($t(e)) {
    const n = e + "", r = n.length;
    r === 8 ? t = new Date(
      [n.substr(0, 4), n.substr(4, 2), n.substr(6, 2)].join("/")
    ) : r === 6 ? t = new Date([n.substr(0, 4), n.substr(4, 2), "01"].join("/")) : r === 4 ? t = new Date(n + "/01/01") : t = new Date(e);
  } else
    U(e) && (e = e.replace(/[年月日]/g, (n) => n === "\u65E5" ? "" : "/"), e = e.replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/gi, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/")) : /^(\d{4})[-/](\d{1,2})$/.test(e) ? t = new Date([RegExp.$1, RegExp.$2, "01"].join("/")) : (t = new Date(e), isNaN(t.getFullYear()) && (t = null)));
  return t;
}
function kt({ current: e, currentDate: t }) {
  const n = e.slice(0, 2);
  n.push("01");
  const r = new Date(n.join("/")).getDay();
  let s = t.getFullYear(), a = t.getMonth() + 1;
  a === 12 ? (s += 1, a = 1) : a += 1;
  const o = new Date(
    `${s}/${ae(a)}/01`
  ).getTime(), l = new Date(o - 1);
  return {
    firstDayOfWeek: r,
    lastDayOfMonth: l.getDate()
  };
}
function Lt(e) {
  const t = j(e.substr(2)), n = t % 20 === 0, r = Math.floor(t / 20);
  let s = (n ? r - 1 : r) * 20 + 1, a = j(e.substr(0, 2));
  r === 0 && t === 0 && (a -= 1, s = 81);
  const o = a * 100 + s, l = o + 19;
  return {
    startFullYear: o,
    endFullYear: l
  };
}
function W(e, t) {
  const n = [];
  if (Array.isArray(e)) {
    const [r, s] = e;
    let a = K(r), o = K(s);
    U(t) && (a = a ? +Y(a, t) : null, o = o ? +Y(o, t) : null), n.push(a), n.push(o);
  }
  return n;
}
function be({ data: e, options: t }) {
  const n = [];
  return t.mode === H && e.selected.forEach((r) => {
    n.push(r ? r.value : null);
  }), n;
}
function Se(e, t, n) {
  return !!t && e < t || !!n && e > n;
}
function ft(e, { type: t, mode: n }) {
  const r = [];
  if (e) {
    Array.isArray(e) || (e = [e]), n === ut && e.length > 1 && (e = e.slice(0, 1)), n === H && e.length > 2 && (e = e.slice(0, 2));
    const s = It[t];
    let a;
    e.forEach((o) => {
      a = K(o), a && r.push({
        value: j(Y(a, s)),
        date: a,
        fullText: Y(a, "yyyy/MM/dd")
      });
    }), r.sort((o, l) => o.value - l.value);
  }
  return r;
}
function Re(e, t, n) {
  return t && t > e || n && n < e;
}
function jt(e, t, n, r) {
  const s = [];
  switch (r) {
    case H: {
      const [a, o] = e;
      a && Re(+a.date, t, n) && s.push(a), o && Re(+o.date, t, n) && s.push(o);
      break;
    }
    default:
      e.forEach((a) => {
        Re(+a.date, t, n) && s.push(a);
      });
  }
  return s.length > 0;
}
function Nt(e) {
  const { options: t } = this;
  let n = null;
  const [r, s] = W(t.dateRange);
  if (r && +r > +n && (n = r), s && +s < +n && (n = s), e.length)
    if (jt(
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
function xe(e, { data: t, options: n }) {
  return n.mode === H && t.selected.length === 1 ? e === t.selected[0].value : !1;
}
function G(e) {
  if (typeof e > "u" && (e = "undefined"), e === null && (e = "null"), U(e))
    return document.createTextNode(e);
  const t = document.createElement(e.t || "div"), n = e.a;
  n && typeof n == "object" && Object.keys(n).forEach((s) => {
    t.setAttribute(s, n[s]);
  });
  const r = e.c;
  return Array.isArray(r) && r.length > 0 && r.forEach((s) => {
    t.appendChild(G(s));
  }), t;
}
function ke(e, t = document) {
  if (!e)
    return null;
  let n = null;
  return U(e) ? n = t.querySelector(e) : typeof e == "object" && e.nodeType === 1 && (n = e), n;
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
  return s.el && (s.index = j(s.el.getAttribute("data-index"))), s;
}
function X(...e) {
  const t = e[0], n = e.slice(1), r = [];
  t.className.split(" ").forEach((s) => {
    n.includes(s) || r.push(s);
  }), t.className = r.join(" ");
}
function ie(...e) {
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
            class: De
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: [De, ne].join(" ")
          }
        }
      ]
    },
    {
      a: {
        class: $e
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
            class: [Me, ne].join(" ")
          }
        },
        {
          t: "button",
          a: {
            type: "button",
            class: Me
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
      class: ot
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
  if (t.type !== re)
    return null;
  const n = JSON.parse(JSON.stringify(qt));
  return e.forEach((r, s) => {
    const a = s === 0 || s === 6;
    n.c.push({
      a: {
        class: it + (a ? " " + Dt : "")
      },
      c: [r]
    });
  }), G(n);
}
function Ae(e, t, n, r) {
  const s = e.some((o) => t && o.value && o.value < t), a = e.some((o) => n && o.value && o.value > n);
  s ? ie(r, Ue) : X(r, Ue), a ? ie(r, Ve) : X(r, Ve);
}
function Ce(e, t, { titleFormatter: n, type: r, itemSuffix: s, showHoliday: a }, { header: o, body: l }) {
  const h = t[e] || [];
  let p = null;
  if (r === se) {
    const w = h[0], y = h[h.length - 1];
    let x = 0;
    p = n.replace(/(y+)/g, () => x++ === 0 ? w.text : y.text);
  } else
    p = Y(t.currentDate, n);
  ke("." + $e, o).innerText = p;
  let d, v, M;
  l.innerHTML = h.reduce((w, y, x) => (d = ["__item"], y.disabled && d.push(tt), y.value > 0 ? (M = "", y.holiday && (d.push(Ct), M = ` title="${y.holiday}"`), y.selected && d.push(q), y.current && d.push(Ot), y.isRangeFirst && y.isRangeLast ? d.push(st) : (y.isRangeFirst && d.push(nt), y.isRangeLast && d.push(rt)), y.isRangeTemp && d.push(at), v = [
    `<div class="${d.join(" ")}" data-index="${x}"${M}>`
  ], v.push('<div class="__inner">'), v.push(`<p class="__text">${y.text}`), s && v.push(`<span class="__suffix">${s}</span>`), a && y.holiday && v.push(`<span class="__holiday">${y.holiday}</span>`), v.push("</p></div></div>")) : v = [
    `<div class="${d.join(
      " "
    )}"><div class="__inner"></div></div>`
  ], w.push(v.join("")), w), []).join("");
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
  }), ie(e, n ? at : q);
}
const dt = "single", Vt = "date", Oe = {
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
}, Gt = {
  el: null,
  dateRange: [],
  lang: "zh",
  showHoliday: !1,
  type: re,
  isFullWeek: !1,
  titleFormatter: Rt,
  itemSuffix: null,
  defaultDate: [],
  itemFormatter: null,
  mode: ut,
  langPackage: null,
  footerButtons: ["clear", "cancel", "confirm"],
  footerButtonAlign: "flex-end",
  hideFooter: !1
};
function Pe(e = {}) {
  const t = {
    ...Gt,
    ...e
  };
  if (e.titleFormatter || (t.type === se ? t.titleFormatter = xt : t.type === we && (t.titleFormatter = At)), !t.el || !ke(t.el))
    throw new Error(`Initial parameter el[${t.el}] is invalid.`);
  this.options = t, this._eventList = {};
  const { langPackage: n } = Pt(t);
  this.langPackage = n, this.$els = {};
  const r = new Date(), s = Y(r, "yyyy/MM/dd", n);
  let a = [];
  try {
    a = ft(t.defaultDate, t);
  } catch (h) {
    setTimeout(() => {
      this.emit("error", h);
    }, 0);
  }
  const o = Nt.call(this, a) || r, l = Y(o, "yyyy/MM/dd");
  this.data = {
    today: s,
    currentDate: o,
    currentDay: l,
    current: l.split("/"),
    selected: a,
    dates: [],
    months: [],
    years: []
  }, this._initDom();
}
Pe.prototype = {
  constructor: Pe,
  formatDate(e, t, n) {
    return n || (n = this.langPackage), Y(e, t, n);
  },
  toDate(e) {
    const t = K(e);
    return t || this.emit("error", new Error(`"${e}" is an invalid Date!`)), t;
  },
  emit(...e) {
    const t = e[0];
    this._eventList[t] && this._eventList[t].forEach((n) => {
      n.apply(this, e.slice(1));
    });
  },
  on(e, t) {
    !U(e) || !Xe(t) || (this._eventList[e] || (this._eventList[e] = []), this._eventList[e].push(t));
  },
  off(e) {
    !U(e) || !this._eventList[e] || (this._eventList[e].length = 0);
  },
  _initDom() {
    const e = this.options, t = ke(e.el), n = JSON.parse(JSON.stringify(Yt)), r = [
      n.a.class,
      "type-is-" + e.type,
      "mode-is-" + e.mode
    ];
    n.a.class = r.join(" ");
    const s = G(n), a = G(Wt);
    s.appendChild(a);
    const o = Ut(this.langPackage.weeks, e);
    o && s.appendChild(o);
    const l = G(Bt);
    if (s.appendChild(l), !e.hideFooter && (e.mode === Ge || e.mode === H)) {
      const h = JSON.parse(JSON.stringify(zt));
      e.footerButtons.forEach((d) => {
        h.c.push({
          ...Ht[d],
          c: [this.langPackage[d + "Button"]]
        });
      });
      const p = G(h);
      e.footerButtonAlign && (p.style.justifyContent = e.footerButtonAlign), s.appendChild(p);
    }
    t.appendChild(s), this.$els = {
      calendar: s,
      header: a,
      week: o,
      body: l,
      parent: t
    }, this._updateDom(), this.eventsHandler = this._eventsHandler.bind(this), this.$els.calendar.addEventListener("click", this.eventsHandler);
  },
  _eventsHandler(e) {
    e.stopPropagation();
    const t = e.target, n = t.className.split(" "), r = t.innerText;
    if (n.includes(De))
      this.prev(!n.includes(ne));
    else if (n.includes(Me))
      this.next(!n.includes(ne));
    else if (n.includes(ot))
      this.emit("change", [...this.data.selected]);
    else if (n.includes(lt))
      this.emit("cancel");
    else if (n.includes(ct))
      this.setDate();
    else if (n.includes($e))
      this._onTitleClick({
        innerText: r,
        el: t,
        className: n
      });
    else if (n.includes(it))
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
      case re:
        if (e) {
          t = j(t) - 1;
          const [r] = W(this.options.dateRange, "yyyy");
          if (r && t <= r) {
            t = r;
            const [s] = W(this.options.dateRange, "MM");
            s && (n = s);
          }
        } else
          n = j(n) - 1, n === 0 && (t = j(t) - 1, n = 12);
        this.setCurrentDate([t, n, "01"].join("/"));
        break;
      case we:
        this.setCurrentDate(t - 1);
        break;
      case se: {
        const r = this.data.years[0] || {};
        this.setCurrentDate(r.value - 1);
        break;
      }
    }
  },
  next(e) {
    let [t, n] = this.data.current;
    switch (this.options.type) {
      case re:
        if (e) {
          t = j(t) + 1;
          const [, r] = W(this.options.dateRange, "yyyy");
          if (r && t >= r) {
            t = r;
            const [, s] = W(this.options.dateRange, "MM");
            s && (n = s);
          }
        } else
          n = j(n) + 1, n === 13 && (t = j(t) + 1, n = 1);
        this.setCurrentDate([t, n, "01"].join("/"));
        break;
      case we:
        this.setCurrentDate(j(t) + 1);
        break;
      case se: {
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
      o === 0 || o >= 2 && a.every((l) => !!l) ? (this.data.selected = [s], Ze(e, this.$els, !0)) : o === 1 && (a[0].value < s.value ? this.data.selected.push(s) : this.data.selected.unshift(s), this._updateDom());
    } else if (this.options.mode === Ge)
      if (t.includes(q)) {
        X(e, q);
        const a = this.data.selected.findIndex(
          (o) => o.value === s.value
        );
        this.data.selected.splice(a, 1);
      } else
        ie(e, q), s.selected = !0, this.data.selected.push(s);
    else
      t.includes(q) || (Ze(e, this.$els), s.selected = !0, this.data.selected = [{ ...s }], this.emit("change", [...this.data.selected]));
  },
  setDateRange(e, t) {
    this.options.dateRange = [e, t], this._updateDom();
  },
  setDate(e) {
    try {
      if (this.data.selected = ft(e, this.options), this.data.selected.length === 0) {
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
    const n = Y(t, "yyyy/MM/dd");
    this.data.currentDate = t, this.data.currentDay = n, this.data.current = n.split("/"), this._updateDom();
  },
  _updateDom() {
    switch (this.options.type) {
      case "date":
        this.createDays(), Ce("dates", this.data, this.options, this.$els);
        break;
      case "month":
        this.createMonths(), Ce("months", this.data, this.options, this.$els);
        break;
      case "year":
        this.createYears(), Ce("years", this.data, this.options, this.$els);
        break;
    }
  },
  createYears() {
    const [e, t] = W(
      this.options.dateRange,
      "yyyy"
    ), [n, r] = be(this), s = [], a = this.data.today.substr(0, 4), { startFullYear: o, endFullYear: l } = Lt(this.data.current[0]);
    let h;
    for (let p = o; p <= l; p++)
      h = p.toString(), s.push({
        text: h,
        fullText: h,
        value: p,
        disabled: Se(p, e, t),
        isRangeFirst: p === n && r,
        isRangeLast: p === r && n,
        isRangeTemp: xe(p, this),
        selected: this._isSelected(p),
        current: a === h,
        date: this.toDate(h)
      });
    this.data.years = s, Ae(s, e, t, this.$els.calendar);
  },
  createMonths() {
    const [e, t] = W(
      this.options.dateRange,
      "yyyyMM"
    ), [n, r] = be(this), s = [], a = this.data.today.substr(0, 7), o = this.data.current[0] + "/", l = j(this.data.current[0]) * 100;
    let h, p, d;
    for (let v = 1; v <= 12; v++)
      h = ae(v), p = o + h, d = l + v, s.push({
        text: h,
        fullText: p,
        value: d,
        disabled: Se(d, e, t),
        isRangeFirst: d === n && r,
        isRangeLast: d === r && n,
        isRangeTemp: xe(d, this),
        selected: this._isSelected(d),
        current: p.startsWith(a),
        date: this.toDate(p)
      });
    this.data.months = s, Ae(
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
    ), [n, r] = be(this), { firstDayOfWeek: s, lastDayOfMonth: a } = kt(this.data), o = new Array(s).fill(0);
    for (let y = 1; y <= a; y++)
      o.push(y);
    if (o.length % 7 !== 0)
      for (let y = 0; y < o.length % 7; y++)
        o.push(0);
    let l = 0, h, p, d;
    const v = this.data.current.slice(0, 2).join("/") + "/", { itemFormatter: M } = this.options, w = o.map((y) => {
      l > 6 && (l = 0), h = y > 0 ? ae(y) : "";
      const x = v + h;
      return d = y > 0 ? +x.replace(/\//g, "") : 0, p = {
        text: h,
        fullText: y > 0 ? x : "",
        value: d,
        week: l++,
        disabled: !y || Se(d, e, t),
        holiday: !1,
        isRangeFirst: d === n && r,
        isRangeLast: d === r && n,
        isRangeTemp: xe(d, this),
        selected: this._isSelected(d),
        current: this.data.today === x,
        date: y > 0 ? this.toDate(x) : null
      }, Xe(M) ? M(p) : p;
    });
    this.data.dates = w, Ae(w, e, t, this.$els.calendar);
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
function te(e) {
  return typeof e == "function";
}
class pt extends ht {
  constructor(t) {
    super(t), this.el = yt(), this.calendar = null, this.options = this._initOptions(), this.state = {
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
  _fmtValue(t) {
    const n = this.fmt(), r = t.map((s) => n ? this.calendar.formatDate(s.fullText, n) : s.fullText);
    return this.props.mode === dt ? r[0] : r;
  }
  _initOptions() {
    const t = {
      ...this.props.option
    };
    let n;
    return Object.keys(Oe).forEach((r) => {
      n = this.props[r], n && (!Array.isArray(Oe[r]) || Oe[r].includes(n)) && (t[r] = n);
    }), this.props.value && (t.defaultDate = this.props.value), t;
  }
  fmt() {
    const { format: t } = this.props;
    return t && typeof t == "string" ? t : null;
  }
  componentDidMount() {
    const { instance: t, change: n, cancel: r, error: s } = this.props, a = new Pe({
      ...this.options,
      el: this.el.current
    });
    a.on("change", (o) => {
      const l = this._fmtValue(o);
      this.setState({
        date: l
      }), te(n) && n(l, o);
    }), a.on("error", (o) => {
      te(s) && s(o);
    }), a.on("cancel", () => {
      te(r) && r();
    }), this.calendar = a, te(t) && t(a);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "zx-react-calendar"
    }, this.props.header, /* @__PURE__ */ React.createElement("div", {
      ref: this.el,
      className: "zx-calendar-wrapper"
    }), this.props.footer);
  }
}
pt.propTypes = {
  type: D.exports.string,
  mode: D.exports.string,
  lang: D.exports.string,
  isFullWeek: D.exports.bool,
  titleFormatter: D.exports.string,
  itemSuffix: D.exports.string,
  dateRange: D.exports.array,
  showHoliday: D.exports.bool,
  itemFormatter: D.exports.func,
  langPackage: D.exports.object,
  footerButtons: D.exports.array,
  footerButtonAlign: D.exports.string,
  hideFooter: D.exports.bool,
  value: D.exports.oneOfType([
    D.exports.string,
    D.exports.number,
    D.exports.array
  ]),
  format: D.exports.string,
  change: D.exports.func,
  cancel: D.exports.func,
  error: D.exports.func,
  instance: D.exports.func,
  option: D.exports.object,
  header: D.exports.node,
  footer: D.exports.node
};
pt.defaultProps = {
  type: Vt,
  mode: dt,
  option: {}
};
export {
  pt as default
};
