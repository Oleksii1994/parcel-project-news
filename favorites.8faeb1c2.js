!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("h7ZpV");var r,d,i,a,l=t("gnsaF");l=t("gnsaF");r=document.querySelector(".js-menu-container-favorites"),d=document.querySelector(".js-open-menu-favorites"),i=document.querySelector(".js-close-menu-favorites"),a=function(){var e="true"===d.getAttribute("aria-expanded")||!1;d.setAttribute("aria-expanded",!e),r.classList.toggle("is-open"),e?(0,l.enableBodyScroll)(document.body):(0,l.disableBodyScroll)(document.body)},d.addEventListener("click",a),i.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(r.classList.remove("is-open"),d.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),t("b3EoS"),t("1H2ee")}();
//# sourceMappingURL=favorites.8faeb1c2.js.map
