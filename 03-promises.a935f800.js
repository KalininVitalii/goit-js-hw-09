!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var c=i("iU1Pc"),r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(n){n.preventDefault();for(var o=Number(r.value),t=Number(u.value),i=0;i<l.value;i++)a(1+i,o+i*t).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(c).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(c).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.a935f800.js.map
