(function(W,V){typeof exports=="object"&&typeof module<"u"?V(exports,require("react"),require("zx-calendar")):typeof define=="function"&&define.amd?define(["exports","react","zx-calendar"],V):(W=typeof globalThis<"u"?globalThis:W||self,V(W.ZxReactCalendar={},W.React,W.zxCalendar))})(this,function(W,V,ce){"use strict";var M={exports:{}},le={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function yt(){if(Ne)return A;Ne=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,D=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,x=e?Symbol.for("react.block"):60121,$=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,Q=e?Symbol.for("react.scope"):60119;function I(u){if(typeof u=="object"&&u!==null){var H=u.$$typeof;switch(H){case t:switch(u=u.type,u){case h:case p:case r:case a:case s:case v:return u;default:switch(u=u&&u.$$typeof,u){case c:case d:case y:case D:case i:return u;default:return H}}case n:return H}}}function P(u){return I(u)===p}return A.AsyncMode=h,A.ConcurrentMode=p,A.ContextConsumer=c,A.ContextProvider=i,A.Element=t,A.ForwardRef=d,A.Fragment=r,A.Lazy=y,A.Memo=D,A.Portal=n,A.Profiler=a,A.StrictMode=s,A.Suspense=v,A.isAsyncMode=function(u){return P(u)||I(u)===h},A.isConcurrentMode=P,A.isContextConsumer=function(u){return I(u)===c},A.isContextProvider=function(u){return I(u)===i},A.isElement=function(u){return typeof u=="object"&&u!==null&&u.$$typeof===t},A.isForwardRef=function(u){return I(u)===d},A.isFragment=function(u){return I(u)===r},A.isLazy=function(u){return I(u)===y},A.isMemo=function(u){return I(u)===D},A.isPortal=function(u){return I(u)===n},A.isProfiler=function(u){return I(u)===a},A.isStrictMode=function(u){return I(u)===s},A.isSuspense=function(u){return I(u)===v},A.isValidElementType=function(u){return typeof u=="string"||typeof u=="function"||u===r||u===p||u===a||u===s||u===v||u===w||typeof u=="object"&&u!==null&&(u.$$typeof===y||u.$$typeof===D||u.$$typeof===i||u.$$typeof===c||u.$$typeof===d||u.$$typeof===$||u.$$typeof===L||u.$$typeof===Q||u.$$typeof===x)},A.typeOf=I,A}var C={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe;function vt(){return Fe||(Fe=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,D=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,x=e?Symbol.for("react.block"):60121,$=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,Q=e?Symbol.for("react.scope"):60119;function I(l){return typeof l=="string"||typeof l=="function"||l===r||l===p||l===a||l===s||l===v||l===w||typeof l=="object"&&l!==null&&(l.$$typeof===y||l.$$typeof===D||l.$$typeof===i||l.$$typeof===c||l.$$typeof===d||l.$$typeof===$||l.$$typeof===L||l.$$typeof===Q||l.$$typeof===x)}function P(l){if(typeof l=="object"&&l!==null){var Y=l.$$typeof;switch(Y){case t:var oe=l.type;switch(oe){case h:case p:case r:case a:case s:case v:return oe;default:var ht=oe&&oe.$$typeof;switch(ht){case c:case d:case y:case D:case i:return ht;default:return Y}}case n:return Y}}}var u=h,H=p,we=c,De=i,Pe=t,Ie=d,ae=r,$e=y,je=D,J=n,ke=a,F=s,U=v,ie=!1;function Le(l){return ie||(ie=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(l)||P(l)===h}function o(l){return P(l)===p}function f(l){return P(l)===c}function T(l){return P(l)===i}function _(l){return typeof l=="object"&&l!==null&&l.$$typeof===t}function g(l){return P(l)===d}function b(l){return P(l)===r}function m(l){return P(l)===y}function E(l){return P(l)===D}function S(l){return P(l)===n}function O(l){return P(l)===a}function R(l){return P(l)===s}function j(l){return P(l)===v}C.AsyncMode=u,C.ConcurrentMode=H,C.ContextConsumer=we,C.ContextProvider=De,C.Element=Pe,C.ForwardRef=Ie,C.Fragment=ae,C.Lazy=$e,C.Memo=je,C.Portal=J,C.Profiler=ke,C.StrictMode=F,C.Suspense=U,C.isAsyncMode=Le,C.isConcurrentMode=o,C.isContextConsumer=f,C.isContextProvider=T,C.isElement=_,C.isForwardRef=g,C.isFragment=b,C.isLazy=m,C.isMemo=E,C.isPortal=S,C.isProfiler=O,C.isStrictMode=R,C.isSuspense=j,C.isValidElementType=I,C.typeOf=P}()),C}var Ye;function We(){return Ye||(Ye=1,function(e){process.env.NODE_ENV==="production"?e.exports=yt():e.exports=vt()}(le)),le.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ue,qe;function gt(){if(qe)return ue;qe=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function s(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var i={},c=0;c<10;c++)i["_"+String.fromCharCode(c)]=c;var h=Object.getOwnPropertyNames(i).map(function(d){return i[d]});if(h.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(d){p[d]=d}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return ue=s()?Object.assign:function(a,i){for(var c,h=r(a),p,d=1;d<arguments.length;d++){c=Object(arguments[d]);for(var v in c)t.call(c,v)&&(h[v]=c[v]);if(e){p=e(c);for(var w=0;w<p.length;w++)n.call(c,p[w])&&(h[p[w]]=c[p[w]])}}return h},ue}var fe,Be;function de(){if(Be)return fe;Be=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fe=e,fe}var pe,ze;function He(){return ze||(ze=1,pe=Function.call.bind(Object.prototype.hasOwnProperty)),pe}var he,Ue;function mt(){if(Ue)return he;Ue=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=de(),n={},r=He();e=function(a){var i="Warning: "+a;typeof console<"u"&&console.error(i);try{throw new Error(i)}catch{}}}function s(a,i,c,h,p){if(process.env.NODE_ENV!=="production"){for(var d in a)if(r(a,d)){var v;try{if(typeof a[d]!="function"){var w=Error((h||"React class")+": "+c+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw w.name="Invariant Violation",w}v=a[d](i,d,h,c,null,t)}catch(y){v=y}if(v&&!(v instanceof Error)&&e((h||"React class")+": type specification of "+c+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof v+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),v instanceof Error&&!(v.message in n)){n[v.message]=!0;var D=p?p():"";e("Failed "+c+" type: "+v.message+(D!=null?D:""))}}}}return s.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(n={})},he=s,he}var ye,Ve;function _t(){if(Ve)return ye;Ve=1;var e=We(),t=gt(),n=de(),r=He(),s=mt(),a=function(){};process.env.NODE_ENV!=="production"&&(a=function(c){var h="Warning: "+c;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}});function i(){return null}return ye=function(c,h){var p=typeof Symbol=="function"&&Symbol.iterator,d="@@iterator";function v(o){var f=o&&(p&&o[p]||o[d]);if(typeof f=="function")return f}var w="<<anonymous>>",D={array:L("array"),bigint:L("bigint"),bool:L("boolean"),func:L("function"),number:L("number"),object:L("object"),string:L("string"),symbol:L("symbol"),any:Q(),arrayOf:I,element:P(),elementType:u(),instanceOf:H,node:Ie(),objectOf:De,oneOf:we,oneOfType:Pe,shape:$e,exact:je};function y(o,f){return o===f?o!==0||1/o===1/f:o!==o&&f!==f}function x(o,f){this.message=o,this.data=f&&typeof f=="object"?f:{},this.stack=""}x.prototype=Error.prototype;function $(o){if(process.env.NODE_ENV!=="production")var f={},T=0;function _(b,m,E,S,O,R,j){if(S=S||w,R=R||E,j!==n){if(h){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Y=S+":"+E;!f[Y]&&T<3&&(a("You are manually calling a React.PropTypes validation function for the `"+R+"` prop on `"+S+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),f[Y]=!0,T++)}}return m[E]==null?b?m[E]===null?new x("The "+O+" `"+R+"` is marked as required "+("in `"+S+"`, but its value is `null`.")):new x("The "+O+" `"+R+"` is marked as required in "+("`"+S+"`, but its value is `undefined`.")):null:o(m,E,S,O,R)}var g=_.bind(null,!1);return g.isRequired=_.bind(null,!0),g}function L(o){function f(T,_,g,b,m,E){var S=T[_],O=F(S);if(O!==o){var R=U(S);return new x("Invalid "+b+" `"+m+"` of type "+("`"+R+"` supplied to `"+g+"`, expected ")+("`"+o+"`."),{expectedType:o})}return null}return $(f)}function Q(){return $(i)}function I(o){function f(T,_,g,b,m){if(typeof o!="function")return new x("Property `"+m+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var E=T[_];if(!Array.isArray(E)){var S=F(E);return new x("Invalid "+b+" `"+m+"` of type "+("`"+S+"` supplied to `"+g+"`, expected an array."))}for(var O=0;O<E.length;O++){var R=o(E,O,g,b,m+"["+O+"]",n);if(R instanceof Error)return R}return null}return $(f)}function P(){function o(f,T,_,g,b){var m=f[T];if(!c(m)){var E=F(m);return new x("Invalid "+g+" `"+b+"` of type "+("`"+E+"` supplied to `"+_+"`, expected a single ReactElement."))}return null}return $(o)}function u(){function o(f,T,_,g,b){var m=f[T];if(!e.isValidElementType(m)){var E=F(m);return new x("Invalid "+g+" `"+b+"` of type "+("`"+E+"` supplied to `"+_+"`, expected a single ReactElement type."))}return null}return $(o)}function H(o){function f(T,_,g,b,m){if(!(T[_]instanceof o)){var E=o.name||w,S=Le(T[_]);return new x("Invalid "+b+" `"+m+"` of type "+("`"+S+"` supplied to `"+g+"`, expected ")+("instance of `"+E+"`."))}return null}return $(f)}function we(o){if(!Array.isArray(o))return process.env.NODE_ENV!=="production"&&(arguments.length>1?a("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):a("Invalid argument supplied to oneOf, expected an array.")),i;function f(T,_,g,b,m){for(var E=T[_],S=0;S<o.length;S++)if(y(E,o[S]))return null;var O=JSON.stringify(o,function(j,l){var Y=U(l);return Y==="symbol"?String(l):l});return new x("Invalid "+b+" `"+m+"` of value `"+String(E)+"` "+("supplied to `"+g+"`, expected one of "+O+"."))}return $(f)}function De(o){function f(T,_,g,b,m){if(typeof o!="function")return new x("Property `"+m+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var E=T[_],S=F(E);if(S!=="object")return new x("Invalid "+b+" `"+m+"` of type "+("`"+S+"` supplied to `"+g+"`, expected an object."));for(var O in E)if(r(E,O)){var R=o(E,O,g,b,m+"."+O,n);if(R instanceof Error)return R}return null}return $(f)}function Pe(o){if(!Array.isArray(o))return process.env.NODE_ENV!=="production"&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var f=0;f<o.length;f++){var T=o[f];if(typeof T!="function")return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ie(T)+" at index "+f+"."),i}function _(g,b,m,E,S){for(var O=[],R=0;R<o.length;R++){var j=o[R],l=j(g,b,m,E,S,n);if(l==null)return null;l.data&&r(l.data,"expectedType")&&O.push(l.data.expectedType)}var Y=O.length>0?", expected one of type ["+O.join(", ")+"]":"";return new x("Invalid "+E+" `"+S+"` supplied to "+("`"+m+"`"+Y+"."))}return $(_)}function Ie(){function o(f,T,_,g,b){return J(f[T])?null:new x("Invalid "+g+" `"+b+"` supplied to "+("`"+_+"`, expected a ReactNode."))}return $(o)}function ae(o,f,T,_,g){return new x((o||"React class")+": "+f+" type `"+T+"."+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+g+"`.")}function $e(o){function f(T,_,g,b,m){var E=T[_],S=F(E);if(S!=="object")return new x("Invalid "+b+" `"+m+"` of type `"+S+"` "+("supplied to `"+g+"`, expected `object`."));for(var O in o){var R=o[O];if(typeof R!="function")return ae(g,b,m,O,U(R));var j=R(E,O,g,b,m+"."+O,n);if(j)return j}return null}return $(f)}function je(o){function f(T,_,g,b,m){var E=T[_],S=F(E);if(S!=="object")return new x("Invalid "+b+" `"+m+"` of type `"+S+"` "+("supplied to `"+g+"`, expected `object`."));var O=t({},T[_],o);for(var R in O){var j=o[R];if(r(o,R)&&typeof j!="function")return ae(g,b,m,R,U(j));if(!j)return new x("Invalid "+b+" `"+m+"` key `"+R+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(T[_],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(o),null,"  "));var l=j(E,R,g,b,m+"."+R,n);if(l)return l}return null}return $(f)}function J(o){switch(typeof o){case"number":case"string":case"undefined":return!0;case"boolean":return!o;case"object":if(Array.isArray(o))return o.every(J);if(o===null||c(o))return!0;var f=v(o);if(f){var T=f.call(o),_;if(f!==o.entries){for(;!(_=T.next()).done;)if(!J(_.value))return!1}else for(;!(_=T.next()).done;){var g=_.value;if(g&&!J(g[1]))return!1}}else return!1;return!0;default:return!1}}function ke(o,f){return o==="symbol"?!0:f?f["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&f instanceof Symbol:!1}function F(o){var f=typeof o;return Array.isArray(o)?"array":o instanceof RegExp?"object":ke(f,o)?"symbol":f}function U(o){if(typeof o>"u"||o===null)return""+o;var f=F(o);if(f==="object"){if(o instanceof Date)return"date";if(o instanceof RegExp)return"regexp"}return f}function ie(o){var f=U(o);switch(f){case"array":case"object":return"an "+f;case"boolean":case"date":case"regexp":return"a "+f;default:return f}}function Le(o){return!o.constructor||!o.constructor.name?w:o.constructor.name}return D.checkPropTypes=s,D.resetWarningCache=s.resetWarningCache,D.PropTypes=D,D},ye}var ve,Ge;function Et(){if(Ge)return ve;Ge=1;var e=de();function t(){}function n(){}return n.resetWarningCache=t,ve=function(){function r(i,c,h,p,d,v){if(v!==e){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function s(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},ve}if(process.env.NODE_ENV!=="production"){var Tt=We(),bt=!0;M.exports=_t()(Tt.isElement,bt)}else M.exports=Et()();/*!
 * date-utils-2020 v1.1.0
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2023/01/14 14:10:19 GMT+0900
 */function ee(e){return String(e).padStart(2,"0")}const St={weeks:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};function N(e,t,n){const r=Z(e);if(!r||!t)return String(e);if(t==="timestamp")return r.getTime().toString();if(/(y+)/i.test(t)){const i=RegExp.$1;t=t.replace(i,(r.getFullYear()+"").substring(4-i.length))}(!n||!Array.isArray(n.weeks))&&(n=St);const s={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"a+":r.getHours()<12?"am":"pm","A+":r.getHours()<12?"AM":"PM"};let a;for(const i in s)if(new RegExp("("+i+")").test(t)){a=RegExp.$1;const c=s[i]+"";t=t.replace(a,a.length===1?c:ee(c))}if(/w+/i.test(t)){const i=r.getDay();t=t.replace(/w+/i,/W+/.test(t)?n.weeks[i]:String(i))}if(/g/i.test(t)){const i=r.toString().split(/\s+/).slice(5),c=t.includes("g");t=t.replace(/g/i,c?i[0]:i.join(" "))}return t}function Z(e){let t=null;if(e instanceof Date)t=e;else if(typeof e=="number")t=new Date(e);else if(typeof e=="string"){let n=e.trim();if(/^\d+$/.test(n)){const r=n.length;r===8?t=new Date([n.substring(0,4),n.substring(4,6),n.substring(6,8)].join("/")):r===6?t=new Date([n.substring(0,4),n.substring(4,6),"01"].join("/")):r===4?t=new Date(n+"/01/01"):t=new Date(parseInt(e))}else n=n.replace(/[年月日]/g,r=>r==="\u65E5"?"":"/").replace(/[(（（].*?[)））]/g," ").replace(/\bam|pm\b/ig," ").replace(/\s+/g," "),/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(n)?t=new Date([RegExp.$1,RegExp.$2,RegExp.$3].join("/")):/^(\d{4})[-/](\d{1,2})$/.test(n)?t=new Date([RegExp.$1,RegExp.$2,"01"].join("/")):t=new Date(n)}return t&&!isNaN(t.getFullYear())?t:null}const Rt="yyyy/MM",xt="yyyy-yyyy",At="yyyy",q="is-selected",Je="is-disabled",Ct="is-holiday",Ot="is-current",Ze="is-range-first",Ke="is-range-last",Xe="is-range-first-last",Qe="is-range-temp",et="is-first-page",tt="is-last-page",Mt="is-weekend",te="date-only",ge="__prev-button",me="__next-button",_e="__title-wrapper",nt="__item-week",rt="__confirm-button",st="__clear-button",at="__cancel-button",it="multiple",z="range",wt="single",Ee="date",Te="month",ne="year",ot={en:{full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},jp:{full:["\u65E5\u66DC\u65E5","\u6708\u66DC\u65E5","\u706B\u66DC\u65E5","\u6C34\u66DC\u65E5","\u6728\u66DC\u65E5","\u91D1\u66DC\u65E5","\u571F\u66DC\u65E5"],abbr:["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"]},zh:{full:["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],abbr:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"]}},Dt=["confirmButton","cancelButton","clearButton"],ct={en:["ok","cancel","clear"],jp:["\u9078\u629E","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30AF\u30EA\u30A2\u30FC"],zh:["\u786E\u5B9A","\u53D6\u6D88","\u6E05\u9664"]};function Pt(e="en",t){const n=ct[e]||ct.en,r=Dt.reduce((a,i,c)=>(a[i]=n[c],a),{}),s=ot[e]||ot.en;return r.weeks=t?s.full:s.abbr,r}function It({lang:e,isFullWeek:t,langPackage:n}){return{langPackage:{...Pt(e,t),...n}}}const $t={date:"yyyyMMdd",month:"yyyyMM",year:"yyyy"};function k(e){return e>>0}function K(e){return typeof e=="string"}function lt(e){return typeof e=="function"}function jt({current:e,currentDate:t}){const n=e.slice(0,2);n.push("01");const r=new Date(n.join("/")).getDay();let s=t.getFullYear(),a=t.getMonth()+1;a===12?(s+=1,a=1):a+=1;const i=new Date(`${s}/${ee(a)}/01`).getTime(),c=new Date(i-1);return{firstDayOfWeek:r,lastDayOfMonth:c.getDate()}}function kt(e){const t=k(e.substr(2)),n=t%20===0,r=Math.floor(t/20);let s=(n?r-1:r)*20+1,a=k(e.substr(0,2));r===0&&t===0&&(a-=1,s=81);const i=a*100+s,c=i+19;return{startFullYear:i,endFullYear:c}}function B(e,t){const n=[];if(Array.isArray(e)){const[r,s]=e;let a=Z(r),i=Z(s);K(t)&&(a=a?+N(a,t):null,i=i?+N(i,t):null),n.push(a),n.push(i)}return n}function be({data:e,options:t}){const n=[];return t.mode===z&&e.selected.forEach(r=>{n.push(r?r.value:null)}),n}function Se(e,t,n){return!!t&&e<t||!!n&&e>n}function ut(e,{type:t,mode:n}){const r=[];if(e){Array.isArray(e)||(e=[e]),n===wt&&e.length>1&&(e=e.slice(0,1)),n===z&&e.length>2&&(e=e.slice(0,2));const s=$t[t];let a;e.forEach(i=>{a=Z(i),a&&r.push({value:k(N(a,s)),date:a,fullText:N(a,"yyyy/MM/dd")})}),r.sort((i,c)=>i.value-c.value)}return r}function Re(e,t,n){return t&&t>e||n&&n<e}function Lt(e,t,n,r){const s=[];switch(r){case z:{const[a,i]=e;a&&Re(+a.date,t,n)&&s.push(a),i&&Re(+i.date,t,n)&&s.push(i);break}default:e.forEach(a=>{Re(+a.date,t,n)&&s.push(a)})}return s.length>0}function Nt(e){const{options:t}=this;let n=null;const[r,s]=B(t.dateRange);if(r&&+r>+n&&(n=r),s&&+s<+n&&(n=s),e.length)if(Lt(e,r,s,t.type)){let a=setTimeout(()=>{this.emit("error",new Error(`The default date[${t.defaultDate}] is not within the range[${t.dateRange}].`)),clearTimeout(a),a=null},0)}else n=e[0].date;return n}function xe(e,{data:t,options:n}){return n.mode===z&&t.selected.length===1?e===t.selected[0].value:!1}function G(e){if(typeof e>"u"&&(e="undefined"),e===null&&(e="null"),K(e))return document.createTextNode(e);const t=document.createElement(e.t||"div"),n=e.a;n&&typeof n=="object"&&Object.keys(n).forEach(s=>{t.setAttribute(s,n[s])});const r=e.c;return Array.isArray(r)&&r.length>0&&r.forEach(s=>{t.appendChild(G(s))}),t}function Ae(e,t=document){if(!e)return null;let n=null;return K(e)?n=t.querySelector(e):typeof e=="object"&&e.nodeType===1&&(n=e),n}function Ft(e,t,n){const r="__item",s={};if(t.includes(r))s.el=e,s.className=t;else if(e!==n){let a=e.parentElement;for(;a&&a!==n;){if(a.className.split(" ").includes(r)){s.el=a,s.className=a.className.split(" ");break}a=a.parentElement}}return s.el&&(s.index=k(s.el.getAttribute("data-index"))),s}function X(...e){const t=e[0],n=e.slice(1),r=[];t.className.split(" ").forEach(s=>{n.includes(s)||r.push(s)}),t.className=r.join(" ")}function re(...e){const t=e[0],n=t.className.split(" ");e.slice(1).forEach(r=>{n.includes(r)||n.push(r)}),t.className=n.join(" ")}const Yt={a:{class:"zx-calendar"}},Wt={a:{class:"zx-calendar-header-wrapper"},c:[{a:{class:"__l"},c:[{t:"button",a:{type:"button",class:ge}},{t:"button",a:{type:"button",class:[ge,te].join(" ")}}]},{a:{class:_e}},{a:{class:"__r"},c:[{t:"button",a:{type:"button",class:[me,te].join(" ")}},{t:"button",a:{type:"button",class:me}}]}]},qt={a:{class:"zx-calendar-week-wrapper"},c:[]},Bt={a:{class:"zx-calendar-body-wrapper"}},zt={a:{class:"zx-calender-footer-wrapper"},c:[]},Ht={confirm:{t:"button",a:{class:rt}},clear:{t:"button",a:{class:st}},cancel:{t:"button",a:{class:at}}};function Ut(e,t){if(t.type!==Ee)return null;const n=JSON.parse(JSON.stringify(qt));return e.forEach((r,s)=>{const a=s===0||s===6;n.c.push({a:{class:nt+(a?" "+Mt:"")},c:[r]})}),G(n)}function Ce(e,t,n,r){const s=e.some(i=>t&&i.value&&i.value<t),a=e.some(i=>n&&i.value&&i.value>n);s?re(r,et):X(r,et),a?re(r,tt):X(r,tt)}function Oe(e,t,{titleFormatter:n,type:r,itemSuffix:s,showHoliday:a},{header:i,body:c}){const h=t[e]||[];let p=null;if(r===ne){const D=h[0],y=h[h.length-1];let x=0;p=n.replace(/(y+)/g,()=>x++===0?D.text:y.text)}else p=N(t.currentDate,n);Ae("."+_e,i).innerText=p;let d,v,w;c.innerHTML=h.reduce((D,y,x)=>(d=["__item"],y.disabled&&d.push(Je),y.value>0?(w="",y.holiday&&(d.push(Ct),w=` title="${y.holiday}"`),y.selected&&d.push(q),y.current&&d.push(Ot),y.isRangeFirst&&y.isRangeLast?d.push(Xe):(y.isRangeFirst&&d.push(Ze),y.isRangeLast&&d.push(Ke)),y.isRangeTemp&&d.push(Qe),v=[`<div class="${d.join(" ")}" data-index="${x}"${w}>`],v.push('<div class="__inner">'),v.push(`<p class="__text">${y.text}`),s&&v.push(`<span class="__suffix">${s}</span>`),a&&y.holiday&&v.push(`<span class="__holiday">${y.holiday}</span>`),v.push("</p></div></div>")):v=[`<div class="${d.join(" ")}"><div class="__inner"></div></div>`],D.push(v.join("")),D),[]).join("")}function ft(e,{body:t},n){const[...r]=t.querySelectorAll("."+q);r.forEach(s=>{X(s,q),n&&X(s,Ze,Ke,Xe)}),re(e,n?Qe:q)}const dt="single",Vt="date",Gt={primary:"#f30",arrow:"#999",holidayDot:"rgba(0, 0, 0, 0.2)",currentItemBg:"#eee",white:"#fff",rangeBg:"#eee"},se={el:null,dateRange:[],lang:"zh",showHoliday:!1,type:Vt,isFullWeek:!1,titleFormatter:Rt,itemSuffix:null,defaultDate:[],itemFormatter:null,mode:dt,langPackage:null,footerButtons:["clear","cancel","confirm"],footerButtonAlign:"flex-end",hideFooter:!1,colors:{}},Kt="";function pt(e={}){const t={...se,...e,colors:{...Gt,...e.colors}};if(e.titleFormatter||(t.type===ne?t.titleFormatter=xt:t.type===Te&&(t.titleFormatter=At)),!t.el||!Ae(t.el))throw new Error(`Initial parameter el[${t.el}] is invalid.`);this.options=t,this._eventList={};const{langPackage:n}=It(t);this.langPackage=n,this.$els={};const r=new Date,s=N(r,"yyyy/MM/dd",n);let a=[];try{a=ut(t.defaultDate,t)}catch(h){setTimeout(()=>{this.emit("error",h)},0)}const i=Nt.call(this,a)||r,c=N(i,"yyyy/MM/dd");this.data={today:s,currentDate:i,currentDay:c,current:c.split("/"),selected:a,dates:[],months:[],years:[]},this._initDom()}pt.prototype={constructor:pt,formatDate(e,t,n){return n||(n=this.langPackage),N(e,t,n)},toDate(e){const t=Z(e);return t||this.emit("error",new Error(`"${e}" is an invalid Date!`)),t},emit(...e){const t=e[0];this._eventList[t]&&this._eventList[t].forEach(n=>{n.apply(this,e.slice(1))})},on(e,t){!K(e)||!lt(t)||(this._eventList[e]||(this._eventList[e]=[]),this._eventList[e].push(t))},off(e){!K(e)||!this._eventList[e]||(this._eventList[e].length=0)},_initDom(){const e=this.options,t=Ae(e.el),n=JSON.parse(JSON.stringify(Yt)),r=[n.a.class,"type-is-"+e.type,"mode-is-"+e.mode];n.a.class=r.join(" "),n.a.style=Object.keys(e.colors).map(h=>`--zx-calendar-color-${h}: ${e.colors[h]}`).join(";");const s=G(n),a=G(Wt);s.appendChild(a);const i=Ut(this.langPackage.weeks,e);i&&s.appendChild(i);const c=G(Bt);if(s.appendChild(c),!e.hideFooter&&(e.mode===it||e.mode===z)){const h=JSON.parse(JSON.stringify(zt));e.footerButtons.forEach(d=>{h.c.push({...Ht[d],c:[this.langPackage[d+"Button"]]})});const p=G(h);e.footerButtonAlign&&(p.style.justifyContent=e.footerButtonAlign),s.appendChild(p)}t.appendChild(s),this.$els={calendar:s,header:a,week:i,body:c,parent:t},this._updateDom(),this.eventsHandler=this._eventsHandler.bind(this),this.$els.calendar.addEventListener("click",this.eventsHandler)},_eventsHandler(e){e.stopPropagation();const t=e.target,n=t.className.split(" "),r=t.innerText;if(n.includes(ge))this.prev(!n.includes(te));else if(n.includes(me))this.next(!n.includes(te));else if(n.includes(rt))this.emit("change",[...this.data.selected]);else if(n.includes(at))this.emit("cancel");else if(n.includes(st))this.setDate();else if(n.includes(_e))this._onTitleClick({innerText:r,el:t,className:n});else if(n.includes(nt))this._onWeekClick({innerText:r,el:t,className:n});else{const s=Ft(t,n,this.$els.calendar);s.el&&this._onItemClick(s)}},_onTitleClick(e){this.emit("onTitleClick",e)},prev(e){let[t,n]=this.data.current;switch(this.options.type){case Ee:if(e){t=k(t)-1;const[r]=B(this.options.dateRange,"yyyy");if(r&&t<=r){t=r;const[s]=B(this.options.dateRange,"MM");s&&(n=s)}}else n=k(n)-1,n===0&&(t=k(t)-1,n=12);this.setCurrentDate([t,n,"01"].join("/"));break;case Te:this.setCurrentDate(t-1);break;case ne:{const r=this.data.years[0]||{};this.setCurrentDate(r.value-1);break}}},next(e){let[t,n]=this.data.current;switch(this.options.type){case Ee:if(e){t=k(t)+1;const[,r]=B(this.options.dateRange,"yyyy");if(r&&t>=r){t=r;const[,s]=B(this.options.dateRange,"MM");s&&(n=s)}}else n=k(n)+1,n===13&&(t=k(t)+1,n=1);this.setCurrentDate([t,n,"01"].join("/"));break;case Te:this.setCurrentDate(k(t)+1);break;case ne:{const r=this.data.years,s=r[r.length-1]||{};this.setCurrentDate(s.value+1);break}}},_onWeekClick(e){this.emit("onWeekClick",e)},_onItemClick({el:e,className:t,index:n}){if(t.includes(Je))return;const s=(this.data[this.options.type+"s"]||[])[n]||{};if(this.options.mode===z){const a=[...this.data.selected],i=a.length;i===0||i>=2&&a.every(c=>!!c)?(this.data.selected=[s],ft(e,this.$els,!0)):i===1&&(a[0].value<s.value?this.data.selected.push(s):this.data.selected.unshift(s),this._updateDom())}else if(this.options.mode===it)if(t.includes(q)){X(e,q);const a=this.data.selected.findIndex(i=>i.value===s.value);this.data.selected.splice(a,1)}else re(e,q),s.selected=!0,this.data.selected.push(s);else t.includes(q)||(ft(e,this.$els),s.selected=!0,this.data.selected=[{...s}],this.emit("change",[...this.data.selected]))},setDateRange(e,t){this.options.dateRange=[e,t],this._updateDom()},setDate(e){try{if(this.data.selected=ut(e,this.options),this.data.selected.length===0){this._updateDom();return}const t=this.data.selected[0];this.setCurrentDate(t.fullText)}catch(t){this.emit("error",t)}},getDate(){return this.data.selected.slice(0)},setCurrentDate(e){const t=this.toDate(String(e));if(!t)return;const n=N(t,"yyyy/MM/dd");this.data.currentDate=t,this.data.currentDay=n,this.data.current=n.split("/"),this._updateDom()},_updateDom(){switch(this.options.type){case"date":this.createDays(),Oe("dates",this.data,this.options,this.$els);break;case"month":this.createMonths(),Oe("months",this.data,this.options,this.$els);break;case"year":this.createYears(),Oe("years",this.data,this.options,this.$els);break}},createYears(){const[e,t]=B(this.options.dateRange,"yyyy"),[n,r]=be(this),s=[],a=this.data.today.substr(0,4),{startFullYear:i,endFullYear:c}=kt(this.data.current[0]);let h;for(let p=i;p<=c;p++)h=p.toString(),s.push({text:h,fullText:h,value:p,disabled:Se(p,e,t),isRangeFirst:p===n&&r,isRangeLast:p===r&&n,isRangeTemp:xe(p,this),selected:this._isSelected(p),current:a===h,date:this.toDate(h)});this.data.years=s,Ce(s,e,t,this.$els.calendar)},createMonths(){const[e,t]=B(this.options.dateRange,"yyyyMM"),[n,r]=be(this),s=[],a=this.data.today.substr(0,7),i=this.data.current[0]+"/",c=k(this.data.current[0])*100;let h,p,d;for(let v=1;v<=12;v++)h=ee(v),p=i+h,d=c+v,s.push({text:h,fullText:p,value:d,disabled:Se(d,e,t),isRangeFirst:d===n&&r,isRangeLast:d===r&&n,isRangeTemp:xe(d,this),selected:this._isSelected(d),current:p.startsWith(a),date:this.toDate(p)});this.data.months=s,Ce(s,e,t,this.$els.calendar)},createDays(){const[e,t]=B(this.options.dateRange,"yyyyMMdd"),[n,r]=be(this),{firstDayOfWeek:s,lastDayOfMonth:a}=jt(this.data),i=new Array(s).fill(0);for(let y=1;y<=a;y++)i.push(y);if(i.length%7!==0)for(let y=0;y<i.length%7;y++)i.push(0);let c=0,h,p,d;const v=this.data.current.slice(0,2).join("/")+"/",{itemFormatter:w}=this.options,D=i.map(y=>{c>6&&(c=0),h=y>0?ee(y):"";const x=v+h;return d=y>0?+x.replace(/\//g,""):0,p={text:h,fullText:y>0?x:"",value:d,week:c++,disabled:!y||Se(d,e,t),holiday:!1,isRangeFirst:d===n&&r,isRangeLast:d===r&&n,isRangeTemp:xe(d,this),selected:this._isSelected(d),current:this.data.today===x,date:y>0?this.toDate(x):null},lt(w)?w(p):p});this.data.dates=D,Ce(D,e,t,this.$els.calendar)},destroy(){this.$els.calendar.removeEventListener("click",this.eventsHandler),this.$els.parent.removeChild(this.$els.calendar)},_isSelected(e){const t=this.data.selected;switch(this.options.mode){case z:{const[n,r]=t;if(e&&n&&r)return e>=n.value&&e<=r.value;break}default:return t.some(n=>n.value===e)}return!1}};function Jt(e,t,n,r){const s=e.map(i=>n?N(i.fullText,n,r):i.fullText);return!t||t===dt?s[0]:s}function Zt(e){const t={...e.option};let n;return Object.keys(se).forEach(r=>{n=e[r],typeof n<"u"&&(!Array.isArray(se[r])||se[r].includes(n))&&(t[r]=n)}),e.value&&(t.defaultDate=e.value),t}class Me extends V.Component{constructor(t){super(t),this.el=V.createRef(),this.calendar=null,this.options=Zt(t),this.state={date:t.value}}setDate(t){this.calendar.setDate(t)}toDate(t){return this.calendar.toDate(t)}formatDate(t,n,r){return this.calendar.formatDate(t,n,r)}setCurrentDate(t){this.calendar.setCurrentDate(t)}setDateRange(t,n){this.calendar.setDateRange(t,n)}prev(t){this.calendar.prev(t)}next(t){this.calendar.next(t)}getDate(){return this.calendar.getDate()}fmt(){const{format:t}=this.props;return t&&typeof t=="string"?t:null}componentDidMount(){const{instance:t,change:n,cancel:r,error:s}=this.props,a=new ce.ZxCalendar({...this.options,el:this.el.current});a.on("change",i=>{const c=Jt(i,this.props.mode,this.fmt(),this.options.langPackage);this.setState({date:c}),n==null||n(c,i)}),a.on("error",s),a.on("cancel",r),this.calendar=a,t==null||t(a)}render(){return React.createElement("section",{className:"zx-calendar-wrapper"},this.props.header,React.createElement("div",{ref:this.el}),this.props.footer)}}Me.propTypes={type:M.exports.string,mode:M.exports.string,lang:M.exports.string,isFullWeek:M.exports.bool,titleFormatter:M.exports.string,itemSuffix:M.exports.string,dateRange:M.exports.array,showHoliday:M.exports.bool,itemFormatter:M.exports.func,langPackage:M.exports.object,footerButtons:M.exports.array,footerButtonAlign:M.exports.string,hideFooter:M.exports.bool,value:M.exports.oneOfType([M.exports.string,M.exports.number,M.exports.array]),format:M.exports.string,change:M.exports.func,cancel:M.exports.func,error:M.exports.func,instance:M.exports.func,option:M.exports.object,header:M.exports.node,footer:M.exports.node,colors:M.exports.object},Me.defaultProps={type:ce.TYPE_DATE,mode:ce.MODE_SINGLE,option:{}},W.ZxReactCalendar=Me,Object.defineProperties(W,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
