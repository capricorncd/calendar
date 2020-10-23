/*!
 * zx-calendar v0.6.1
 * git+https://github.com/capricorncd/calendar.git
 * Copyright © 2020-present, Capricorncd
 * Released under the MIT License
 * Released on: 2020-10-23 14:00:53
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}({14:function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],d=n[l]||0,u="".concat(l," ").concat(d);n[l]=d+1;var s=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:u,updater:y(f,t),references:1}),r.push(u)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function y(e,t){var n,r,o;if(t.singleton){var a=g++;n=h||(h=d(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},2:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},30:function(e,t,n){var r=n(14),o=n(31);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},31:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r)()(!1);o.push([e.i,'body{font-family:"Microsoft YaHei",微软雅黑,"Arial";margin:0 20px 20px;padding-top:60px}button{outline:none}header{position:fixed;z-index:10;top:0;left:0;width:100%;height:60px;box-shadow:0 2px 5px rgba(0,0,0,.2);background:#fff}header .l{margin-left:20px}header .l h1{margin:0;padding:0;line-height:1;font-size:24px}header .l a{font-size:12px}header>a{margin-right:20px}header,footer{display:flex;align-items:center;justify-content:space-between}header h1,header div,footer h1,footer div{color:#333}header a,footer a{opacity:.6}header a:hover,footer a:hover{opacity:1}footer{position:relative}.container dl{margin:0 0 30px}.container dl dt{display:flex;align-items:center;height:3rem;line-height:1rem;color:#666}.container dl dd{margin:0;padding:0;display:flex}.container dl dd pre{border-radius:4px;background:rgba(0,0,0,.1);margin:0;padding:20px;flex:1;color:#333;overflow-x:auto}.container .calendar-wrapper{margin-right:20px;width:320px;border:1px solid rgba(0,0,0,.1);border-radius:4px;overflow:hidden;background:#fff;box-sizing:border-box}@media screen and (max-width: 640px){.container dl dd{display:block}.container .calendar-wrapper{width:100%;margin:0 0 10px}}.calendar-wrapper .test-footer{display:flex;justify-content:flex-end;padding:0 15px 20px}.calendar-wrapper .test-footer button{margin:0 5px;border-radius:4px;border:1px solid #ccc;width:70px;height:30px;cursor:pointer;opacity:.7}.calendar-wrapper .test-footer button:hover{opacity:1}.calendar-wrapper .test-footer button:last-child{background:#f30;color:#fff;border-color:#f30}.input{height:40px;border:1px solid #ccc;padding:0 8px;border-radius:4px;width:200px;font-size:1rem}',""]),t.default=o},43:function(e,t,n){"use strict";n.r(t);n(30);var r=n(2),o=n.n(r),a=n(6),i=n.n(a);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(e)}function u(){console.log.apply(null,arguments)}function s(){for(var e=0;e<arguments.length;e++)u(JSON.stringify(arguments[e],null,2))}function f(e){return e.replace(/<(\/?\w+)/g,"&lt;$1").replace(/(\w+)>/g,"$1&gt;")}function p(e,t){var n=t.html,r=t.attrs,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=document.createElement(e);return r&&r.class&&(a.className=r.class),n&&(a.innerHTML=o?h(f('<div class="calendar-wrapper"></div>\n\n'))+'<span class="hljs-keyword">const</span> zxCalendar = <span class="hljs-keyword">new</span> <span class="hljs-name">ZxCalendar</span>('.concat(h(n),")")+"\n\n"+h("zxCalendar.on('change', (arr) => {\n  console.log(arr) \n})"):n),a}function h(e){return e.replace(/(['"])(.+)\1/g,(function(e,t,n){return"".concat(t,'<span class="hljs-string">').concat(n,"</span>").concat(t)})).replace(/function|true|false|return/g,(function(e){return'<span class="hljs-keyword">'.concat(e,"</span>")})).replace(/console/g,(function(e){return'<span class="hljs-built_in">'.concat(e,"</span>")}))}function g(e,t){var n=["["];return e.forEach((function(e){Array.isArray(e)?n.push(g(e)):"function"==typeof e?n.push(m(t)+e.toString()):e&&"object"===i()(e)?n.push(y(e,t+2)):("string"==typeof e&&(e="'".concat(e,"'")),n.push(m(t)+e+","))})),n.push(m(t-2)+"],"),n.join("\n")}function y(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=o?"":m(r-2),c=[a+"{"];return Object.keys(e).forEach((function(o){t=e[o],Array.isArray(t)?c.push(m(r)+o+": "+g(t,r+2)):t&&"object"===i()(t)?c.push(m(r)+o+": "+y(t,r+2,!0)):("function"===(n=i()(t))?t=t.toString():"string"===n&&(t="'".concat(t,"'")),c.push(m(r)+o+": "+t+","))})),c.push(m(r-2)+"}"),c.join("\n")}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return new Array(e).fill(" ").join("")}function b(e,t,n){n=n||d(".container");var r=p("dl",{}),o=p("dt",{html:t});r.appendChild(o);var a=p("dd",{}),i=p("div",{attrs:{class:"calendar-wrapper"}});a.appendChild(i);var c=new ZxCalendar(l(l({},e),{},{el:i})),f=p("pre",{html:y(e)},!0);return a.appendChild(f),r.appendChild(a),n.appendChild(r),c.on("change",(function(e){s("change",e)})),c.on("cancel",(function(){s("cancel button on click")})),c.on("error",(function(e){console.error(e)})),u("[".concat(t,"]"),c),c}var v=new ZxCalendar({el:"#testCalendar .test-wrapper",defaultDate:"2020/02/21",hideFooter:!0});console.log("testCalendar",v),d("#testCalendar .test-footer").addEventListener("click",(function(e){switch(e.target.className){case"hook-cancel":alert("cancel button on click");break;case"hook-clear":0===v.getDate().length?alert("No dates selected"):v.setDate(null);break;case"hook-confirm":0===v.getDate().length?alert("No dates selected"):alert(JSON.stringify(v.getDate(),null,2))}})),v.on("error",(function(e){console.error(e)})),v.on("change",(function(e){console.log(JSON.stringify(e,null,2))})),v.on("onWeekClick",(function(e){console.log("onWeekClick",e)})),v.on("onTitleClick",(function(e){console.log("onTitleClick",e)})),setTimeout((function(){u("setDate"),v.setDate("2020年08月19日（水） 22:12:09 PM"),u("getDate",v.getDate())}),3e3);var x=b({el:".calendar-wrapper",lang:"jp",titleFormatter:"yyyy年MM月",showHoliday:!0,itemFormatter:function(e){return e.holiday=e.value%3==1&&"hello world",e.disabled=e.disabled||e.value%5==0,e}},"Show Holiday, custom options.itemFormatter");console.warn(x.formatDate("2020/08/19 22:12:09","yyyy年MM月dd日（W） hh:mm:ss A a ww")),b({el:".calendar-wrapper",lang:"en",dateRange:["2009/12/09","2019/12/09"],defaultDate:"2019/12/02"},"dateRange, defaultDate"),b({el:".calendar-wrapper",type:"year",dateRange:["2009/12/09","2019/12/09"],itemSuffix:"年"},"type[year], dateRange, itemSuffix[年]"),b({el:".calendar-wrapper",type:"month",itemSuffix:"月",defaultDate:"2020/01",dateRange:["2009/12/09","2021/02/01"]},"type[month], dateRange, defaultDate, itemSuffix[月]"),b({el:".calendar-wrapper",mode:"multiple",defaultDate:["2020/08/01","2020/08/19"]},"mode[multiple],  defaultDate"),b({el:".calendar-wrapper",mode:"range",defaultDate:["2020/08/03","2020/08/19"]},"mode[range],  defaultDate"),b({el:".calendar-wrapper",lang:"en",type:"month",mode:"range",defaultDate:["2010/08/03","2020/08/19"]},"mode[range], type[month],  defaultDate"),b({el:".calendar-wrapper",type:"year",mode:"range",defaultDate:["2010/08/03","2020/08/19"]},"mode[range], type[year],  defaultDate"),b({el:".calendar-wrapper",mode:"range",defaultDate:["2020/08/03","2020/08/19"],dateRange:["2020/08/07"],hideFooter:!0},"mode[range],  hideFooter[true]");t.default=ZxCalendar},6:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},7:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}}})}));