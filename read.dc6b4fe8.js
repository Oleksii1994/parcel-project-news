function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("fKrXO",(function(t,r){var n=o("hl3Cc"),l=o("8iF6T"),i=o("cky31"),a=o("3ILHO"),d=o("335mm");o("eyjy7");const u=document.querySelector("#accordion"),s="read_news";var c=new WeakSet,f=new WeakSet;function g(e){const t=e.target.closest(".gallery__item"),r=t.querySelector(".gallery__title").textContent,n=t.querySelector(".gallery__text").textContent,o=t.querySelector(".thumb__text").textContent,l=t.id,i=t.querySelector(".gallery-thumb__subtitle").textContent,a=t.querySelector(".thumb__link").href,u={img:(()=>{const e=t.querySelector(".gallery-thumb").style.backgroundImage.split("");return e.splice(0,5),e.splice(-2,2),e.join("")})(),title:r,text:n,date:o,id:l,category:i,url:a},c=(0,d.getFromLS)(s)||[];c.find((e=>e.id===l))||(0,d.setToLS)(s,[...c,u])}const y=new class{isHomePage(){return!!a.refs.galleryEl}addListenersToHomePage(){document.querySelectorAll(".thumb__link").forEach((t=>t.addEventListener("click",e(n)(this,c,g))))}renderReadPage(){const e=(0,d.getFromLS)(s),t=i.markup.createGalleryCardMarkup(e);u.innerHTML=t}constructor(){e(l)(this,c),e(l)(this,f)}};y.isHomePage()?a.refs.galleryEl.addEventListener("build",(()=>{y.addListenersToHomePage()})):y.renderReadPage()})),o.register("hl3Cc",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}})),o.register("8iF6T",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){n.default(e,t),t.add(e)};var r,n=(r=o("7K24o"))&&r.__esModule?r:{default:r}}));
//# sourceMappingURL=read.dc6b4fe8.js.map