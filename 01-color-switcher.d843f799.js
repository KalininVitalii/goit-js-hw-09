!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,timer=setInterval((function(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(timer),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.d843f799.js.map