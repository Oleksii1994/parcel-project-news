var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("jJkRO"),n("jGhRw"),n("4MqUU");var r=n("jQ7WT");r=n("jQ7WT");(()=>{const e=document.querySelector(".js-menu-container-favorites"),t=document.querySelector(".js-open-menu-favorites"),o=document.querySelector(".js-close-menu-favorites"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),o?(0,r.enableBodyScroll)(document.body):(0,r.disableBodyScroll)(document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),(0,r.enableBodyScroll)(document.body))}))})(),n("1BWOC"),n("gyeM6"),n("itdW6"),n("9kEpo");
//# sourceMappingURL=favorites.4c3f6fbc.js.map
