var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("jGhRw");var r=n("jQ7WT");r=n("jQ7WT");(()=>{const e=document.querySelector(".js-menu-container-favorites"),o=document.querySelector(".js-open-menu-favorites"),t=document.querySelector(".js-close-menu-favorites"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),t?(0,r.enableBodyScroll)(document.body):(0,r.disableBodyScroll)(document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),n("gyeM6"),n("9kEpo");
//# sourceMappingURL=favorites.c0bb785e.js.map