function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("eWCmQ");const l=document.querySelector(".form");let a,u,f;function s(n,t){setTimeout((()=>{Math.random()>.3?e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`):e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}),t)}l.addEventListener("submit",(function(e){e.preventDefault(),Array.from(l.elements).forEach((e=>{"delay"===e.name&&(a=parseInt(e.value)),"step"===e.name&&(u=parseInt(e.value)),"amount"===e.name&&(f=parseInt(e.value))})),function(){let e,n;for(e=0;e<f;e++){n=a+u*e,s(e+1,n)}}()}));
//# sourceMappingURL=03-promises.d86097c8.js.map