/*!
 * zx-calendar v0.4.1
 * git+https://github.com/capricorncd/calendar.git
 * Copyright © 2020-present, Capricorncd
 * Released under the MIT License
 * Released on: 2020-08-14 00:33:13
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ZxCalendar",[],t):"object"==typeof exports?exports.ZxCalendar=t():e.ZxCalendar=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([,function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},,,function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,d="".concat(l," ").concat(u);n[l]=u+1;var f=c(d),s={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(s)):i.push({identifier:d,updater:m(s,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,f=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function s(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,y=0;function m(e,t){var n,r,o;if(t.singleton){var a=y++;n=h||(h=u(t)),r=s.bind(null,n,a,!1),o=s.bind(null,n,a,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var d=c(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},,,,,,,,,,,function(e,t,n){var r=n(6),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r)()(!1);o.push([e.i,'body{font-family:"Microsoft YaHei",微软雅黑,"Arial";margin:20px}button{outline:none}header,footer{position:relative;display:flex;align-items:center;justify-content:space-between}header h1,header div,footer h1,footer div{color:#333}header a,footer a{opacity:.6}header a:hover,footer a:hover{opacity:1}.container dl{margin:0 0 30px}.container dl dt{display:flex;align-items:center;height:3rem;line-height:1rem;color:#666}.container dl dd{margin:0;padding:0;display:flex}.container dl dd pre{border-radius:4px;background:rgba(0,0,0,.1);margin:0;padding:20px;flex:1;color:#333;overflow-x:auto}.container .calendar-wrapper{margin-right:20px;width:320px;border:1px solid rgba(0,0,0,.1);border-radius:4px;overflow:hidden;background:#fff}@media screen and (max-width: 640px){.container dl dd{display:block}.container .zx-calendar{width:100%;margin:0 0 10px}}.calendar-wrapper .test-footer{display:flex;justify-content:flex-end;padding:0 15px 20px}.calendar-wrapper .test-footer button{margin:0 5px;border-radius:4px;border:1px solid #ccc;width:70px;height:30px;cursor:pointer;opacity:.7}.calendar-wrapper .test-footer button:hover{opacity:1}.calendar-wrapper .test-footer button:last-child{background:#f30;color:#fff;border-color:#f30}',""]),t.default=o},,function(e,t,n){"use strict";n.r(t);n(17);var r=n(2),o=n.n(r),a=n(1),i=n.n(a);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(){console.log.apply(null,arguments)}function d(){for(var e=0;e<arguments.length;e++)u(JSON.stringify(arguments[e],null,2))}function f(e,t){var n=t.html,r=t.attrs,o=document.createElement(e);return r&&r.class&&(o.className=r.class),n&&(o.innerHTML=n),o}function s(e,t){var n=["["];return e.forEach((function(e){Array.isArray(e)?n.push(s(e)):"function"==typeof e?n.push(h(t)+e.toString()):e&&"object"===i()(e)?n.push(p(e,t+2)):("string"==typeof e&&(e="'".concat(e,"'")),n.push(h(t)+e+","))})),n.push(h(t-2)+"],"),n.join("\n")}function p(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=o?"":h(r-2),c=[a+"{"];return Object.keys(e).forEach((function(o){t=e[o],Array.isArray(t)?c.push(h(r)+o+": "+s(t,r+2)):t&&"object"===i()(t)?c.push(h(r)+o+": "+p(t,r+2,!0)):("function"===(n=i()(t))?t=t.toString():"string"===n&&(t="'".concat(t,"'")),c.push(h(r)+o+": "+t+","))})),c.push(h(r-2)+"}"),c.join("\n")}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return new Array(e).fill(" ").join("")}function y(e,t,n){n=n||document.querySelector(".container");var r=f("dl",{}),o=f("dt",{html:t});r.appendChild(o);var a=f("dd",{}),i=f("div",{attrs:{class:"calendar-wrapper"}});a.appendChild(i);var c=new ZxCalendar(l(l({},e),{},{el:i})),s=f("pre",{html:p(e)});return a.appendChild(s),r.appendChild(a),n.appendChild(r),c.on("change",(function(e){d(e)})),c.on("cancel",(function(){d("cancel button on click")})),c.on("error",(function(e){console.error(e)})),u("[".concat(t,"]"),c),c}var m=new ZxCalendar({el:"#testCalendar .test-wrapper",defaultDate:"2020/02/21",hideFooter:!0});console.log("testCalendar",m),document.querySelector("#testCalendar .test-footer").addEventListener("click",(function(e){switch(e.target.className){case"hook-cancel":alert("cancel button on click");break;case"hook-clear":0===m.getDate().length?alert("No dates selected"):m.setDate(null);break;case"hook-confirm":0===m.getDate().length?alert("No dates selected"):alert(JSON.stringify(m.getDate(),null,2))}})),m.on("change",(function(e){console.log(JSON.stringify(e,null,2))})),y({el:".container",lang:"jp",titleFormatter:"yyyy年MM月",showHoliday:!0,itemFormatter:function(e){return e.holiday=e.value%3==1&&"hello world",e.disabled=e.disabled||e.value%5==0,e}},"Show Holiday, custom options.itemFormatter"),y({el:".container",lang:"en",dateRange:["2009/12/09","2019/12/09"],defaultDate:"2019/12/02"},"dateRange, defaultDate"),y({el:".container",type:"year",dateRange:["2009/12/09","2019/12/09"],itemSuffix:"年"},"type[year], dateRange, itemSuffix[年]"),y({el:".container",type:"month",itemSuffix:"月",defaultDate:"2020/01",dateRange:["2009/12/09","2021/02/01"]},"type[month], dateRange, defaultDate, itemSuffix[月]"),y({el:".container",mode:"multiple",defaultDate:["2020/08/01","2020/08/19"]},"mode[multiple],  defaultDate"),y({el:".container",mode:"range",defaultDate:["2020/08/03","2020/08/19"]},"mode[range],  defaultDate"),y({el:".container",lang:"en",type:"month",mode:"range",defaultDate:["2010/08/03","2020/08/19"]},"mode[range], type[month],  defaultDate"),y({el:".container",type:"year",mode:"range",defaultDate:["2010/08/03","2020/08/19"]},"mode[range], type[year],  defaultDate"),y({el:".container",mode:"range",defaultDate:["2020/08/03","2020/08/19"],dateRange:["2020/08/07"],hideFooter:!0},"mode[range],  hideFooter[true]")}]).default}));