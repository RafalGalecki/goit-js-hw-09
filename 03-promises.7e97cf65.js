!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r,a,u,c=i("iU1Pc"),f=document.querySelector(".form");function l(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}f.addEventListener("submit",(function(n){n.preventDefault(),Array.from(f.elements).forEach((function(e){"delay"===e.name&&(r=parseInt(e.value)),"step"===e.name&&(a=parseInt(e.value)),"amount"===e.name&&(u=parseInt(e.value))})),function(){var n;for(n=0;n<u;n++){l(n+1,r+a*n).then((function(n){var o=n.position,t=n.delay;e(c).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(c).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}()}))}();
//# sourceMappingURL=03-promises.7e97cf65.js.map