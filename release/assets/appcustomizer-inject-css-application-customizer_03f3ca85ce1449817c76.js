define("b461bf4f-1e92-4dc8-87e2-fcbdec53d20b_0.0.1",["@microsoft/sp-application-base","jquery"],function(n,a){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="P6WS")}({GPet:function(e,t){e.exports=n},P6WS:function(e,t,n){"use strict";n.r(t);var a,i=n("GPet"),r=n("xeH2"),o=(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onInit=function(){var e=this.properties.cssurl;if(e){var t=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("link");n.href=e,n.rel="stylesheet",n.type="text/css",t.insertAdjacentElement("beforeEnd",n)}return r(document).ready(function(){setTimeout(function(){},5e3),r('.ms-compositeHeader, div[role="header"], div[data-automationid="SiteHeader"], .ms-HubNav, .sp-App-hubNav:eq(1)').removeClass("ms-HubNav")}),Promise.resolve()},t}(i.BaseApplicationCustomizer);t.default=s},xeH2:function(e,t){e.exports=a}})});