function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("jJkRO",(function(n,r){e(n.exports,"onLoadHomePage",(function(){return y})),e(n.exports,"checkPresentArticle",(function(){return w}));var a=i("cky31"),o=i("335mm"),s=i("3ILHO");i("b6yhC");var u=i("lL5zp");i("7Y9D8");var c=i("gKkQl"),l=i("jAzyG"),d=i("eyjy7"),f=i("k4kaw");t(u).init();const p=(0,c.initializeApp)({apiKey:"AIzaSyDD_Eh4tyvM30ivpTHWqfHo7r2h0gDev4Y",authDomain:"project-goit2023-js.firebaseapp.com",databaseURL:"https://project-goit2023-js-default-rtdb.firebaseio.com",projectId:"project-goit2023-js",storageBucket:"project-goit2023-js.appspot.com",messagingSenderId:"407142734195",appId:"1:407142734195:web:6d45ec3cdde16415370d06",measurementId:"G-VMY0EQ75TG"}),h=(0,l.getDatabase)(p),m=(0,d.getAuth)(),g=((0,l.ref)(h,"users"),document.querySelector(".favorite"),document.querySelector(".not-found-box")),b=document.querySelector("#news-list"),v="favorite_news";function y(){const e="favorite_news",t=new URL(i("DnHGg"));s.refs.galleryEl.addEventListener("click",(function(n){const r=n.target.closest(".gallery-thumb__btn");if(!r)return;const a=n.target.closest(".gallery__item"),i=a.querySelector(".gallery__title").textContent,s=a.querySelector(".gallery__text").textContent,u=a.querySelector(".thumb__text").textContent,c=a.id,l=a.querySelector(".gallery-thumb__subtitle").textContent,d=a.querySelector(".thumb__link").href,p={img:(()=>{const e=a.querySelector(".gallery-thumb").style.backgroundImage.split("");return e.splice(0,5),e.splice(-2,2),e.join("")})(),title:i,text:s,date:u,id:c,category:l,url:d},h=(0,o.getFromLS)(e),g=h.find((e=>e.id===c)),b=m.currentUser;if(b){const e=b.uid;(0,f.addOrDeleteFavoriteNews)(p,e,r)}if(g){const n=h.filter((e=>e.id!==c));(0,o.setToLS)(e,n);const a=m.currentUser;if(a){const e=a.uid;(0,f.addOrDeleteFavoriteNews)(p,e,r)}return void(r.innerHTML=`<p class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="${t}#icon-like-icon"></use></svg></p>`)}const v=[...h,{...p}];(0,o.setToLS)(e,v),r.innerHTML=`<p class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="${t}#icon-like"></svg></p>`}))}function w(e){return(0,o.getFromLS)(v).find((t=>t.id===e))}function _(e){if(!e.target.closest(".gallery-thumb__btn"))return;const t=e.target.closest(".gallery__item").id,n=(0,o.getFromLS)(v);if(n.find((e=>e.id===t))){const e=n.filter((e=>e.id!==t));(0,o.setToLS)(v,e),e.length||setTimeout((()=>{(0,o.getFromLS)(v).length||g.classList.remove("not-found-box-hidden")}),100);const r=a.markupForFavoritesAndRead.createGalleryCardMarkup(e);b.innerHTML=r}else;}"Favorite"===document.title&&function(){const e=(0,o.getFromLS)(v);e.length?(g.classList.add("not-found-box-hidden"),null!==b&&(b.innerHTML=a.markupForFavoritesAndRead.createGalleryCardMarkup(e),b.addEventListener("click",_))):g.classList.remove("not-found-box-hidden")}()})),i.register("cky31",(function(t,n){e(t.exports,"markup",(function(){return a})),e(t.exports,"markupForFavoritesAndRead",(function(){return o})),e(t.exports,"addWeatherMarkup",(function(){return s}));var r=i("jJkRO");i("335mm");const a={createGalleryCardMarkup(e){const t=new URL(i("DnHGg"));return e.map((({img:e,title:n,text:a,date:i,id:o,category:s,url:u},c)=>`\n      <li id="${o}" \n      class="gallery__item" data-aos="fade-up"\n     data-aos-duration="1000"\n     >\n        <div class="gallery-thumb" style="background-image: url('${e}')">\n          <p class="gallery-thumb__subtitle">${s}</p>\n          <p class="gallery-thumb__already">\n            Already read\n            <svg width="18" height="18"><use href="${t}#icon-check"></use></svg>\n          </p>\n          ${(0,r.checkPresentArticle)(o)?`<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="${t}#icon-like"></use></svg></span></button>`:`<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="${t}#icon-like-icon"></use></svg></span></button>`}\n        </div>\n        <h3 class="gallery__title">${n}</h3>\n        <p class="gallery__text">${a}</p>\n          <div class="thumb">\n            <p class="thumb__text">${i}</p>\n            <a class="thumb__link" href="${u}" target="_blank">Read more</a>\n          </div>\n      </li>`))},clearMarkup(e){e.innerHTML=""},renderMarkup(e,t){e.insertAdjacentHTML("beforeend",t)}},o={createGalleryCardMarkup(e){const t=new URL(i("DnHGg"));return e.map((({img:e,title:n,text:a,date:i,id:o,category:s,url:u})=>`<li id="${o}" class="gallery__item" \n   data-aos="fade-up"\n     data-aos-duration="1000"\n     \n     >\n  <div class="gallery-thumb" style="background-image: url('${e}')">\n      <p class="gallery-thumb__subtitle">${s}</p>\n      <p class="gallery-thumb__already">\n          Already read\n        <svg width="18" height="18"><use href="${t}#icon-check"></use></svg>\n      </p>\n    ${(0,r.checkPresentArticle)(o)?`<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Remove from favorite<svg class="gallery-thumb__icon" width="16" height="16"><use href="${t}#icon-like"></use></svg></span></button>`:`<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Add to favorite<svg class="gallery-thumb__icon" width="16" height="16"><use href="${t}#icon-like-icon"></use></svg></span></button>`}\n  </div>\n    <h3 class="gallery__title">${n}</h3>\n    <p class="gallery__text">${a}</p>\n      <div class="thumb">\n        <p class="thumb__text">${i}</p>\n        <a class="thumb__link" href="${u}" target="_blank">Read more</a>\n      </div>\n</li>`)).join("")},getHtmlListItemsArr:e=>e.split("</li>").filter((e=>""!==e)).map((e=>e+"</li>")),clearMarkup(e){e.innerHTML=""},renderMarkup(e,t){e.insertAdjacentHTML("beforeend",t)},renderMarkupBefore(e,t){e.insertAdjacentHTML("beforebegin",t)}};function s(e){const t='<li class="weather" data-aos="fade-left"\n     data-aos-duration="1000">\n  <div class="weather-box"></div>\n  <button class="weather-button">Weather for Week</button>\n</li>';return window.matchMedia("(min-width: 320px)").matches&&window.matchMedia("(max-width: 767px)").matches?e.splice(0,0,t):window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1279px)").matches?e.splice(1,0,t):window.matchMedia("(min-width: 1280px)").matches?e.splice(2,0,t):void 0}})),i.register("335mm",(function(t,n){function r(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}function a(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch(e){console.error("Get state error: ",e.message)}}e(t.exports,"setToLS",(function(){return r})),e(t.exports,"getFromLS",(function(){return a}))})),i.register("DnHGg",(function(e,t){e.exports=new URL(i("kyEFX").resolve("bwyUR"),import.meta.url).toString()})),i.register("b6yhC",(function(e,t){function n(e,t,n){var r,a,i,o,s;function u(){var c=Date.now()-o;c<t&&c>=0?r=setTimeout(u,t-c):(r=null,n||(s=e.apply(i,a),i=a=null))}null==t&&(t=100);var c=function(){i=this,a=arguments,o=Date.now();var c=n&&!r;return r||(r=setTimeout(u,t)),c&&(s=e.apply(i,a),i=a=null),s};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(s=e.apply(i,a),i=a=null,clearTimeout(r),r=null)},c}n.debounce=n,e.exports=n})),i.register("lL5zp",(function(e,t){e.exports,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(r(n(1)),n(6)),o=r(i),s=r(n(7)),u=r(n(8)),c=r(n(9)),l=r(n(10)),d=r(n(11)),f=r(n(14)),p=[],h=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(h=!0),h)return p=(0,d.default)(p,m),(0,l.default)(p,m.once),p},b=function(){p=(0,f.default)(),g()},v=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){m=a(m,e),p=(0,f.default)();var t=document.all&&!window.atob;return y(m.disable)||t?v():(m.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){g(!0)})):document.addEventListener(m.startEvent,(function(){g(!0)})),window.addEventListener("resize",(0,s.default)(g,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(g,m.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)((function(){(0,l.default)(p,m.once)}),m.throttleDelay)),m.disableMutationObserver||u.default.ready("[data-aos]",b),p)};e.exports={init:w,refresh:g,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){function n(e,t,n){function r(t){var n=m,r=g;return m=g=void 0,j=t,v=e.apply(r,n)}function i(e){return j=e,y=setTimeout(l,t),M?r(e):v}function o(e){var n=t-(e-w);return D?k(n,b-(e-j)):n}function u(e){var n=e-w;return void 0===w||n>=t||n<0||D&&e-j>=b}function l(){var e=x();return u(e)?d(e):void(y=setTimeout(l,o(e)))}function d(e){return y=void 0,S&&m?r(e):(m=g=void 0,v)}function f(){void 0!==y&&clearTimeout(y),j=0,m=w=g=y=void 0}function p(){return void 0===y?v:d(x())}function h(){var e=x(),n=u(e);if(m=arguments,g=this,w=e,n){if(void 0===y)return i(w);if(D)return y=setTimeout(l,t),r(w)}return void 0===y&&(y=setTimeout(l,t)),v}var m,g,b,v,y,w,j=0,M=!1,D=!1,S=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,a(n)&&(M=!!n.leading,b=(D="maxWait"in n)?_(s(n.maxWait)||0,t):b,S="trailing"in n?!!n.trailing:S),h.cancel=f,h.flush=p,h}function r(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return a(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),n(e,t,{leading:i,maxWait:t,trailing:o})}function a(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function o(e){return"symbol"==(void 0===e?"undefined":u(e))||i(e)&&w.call(e)==d}function s(e){if("number"==typeof e)return e;if(o(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=h.test(e);return n||m.test(e)?g(e.slice(2),n?2:8):p.test(e)?l:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,b="object"==(void 0===t?"undefined":u(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,y=b||v||Function("return this")(),w=Object.prototype.toString,_=Math.max,k=Math.min,x=function(){return y.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){function n(e,t,n){function a(t){var n=m,r=g;return m=g=void 0,j=t,v=e.apply(r,n)}function i(e){return j=e,y=setTimeout(l,t),M?a(e):v}function s(e){var n=t-(e-x);return D?_(n,b-(e-j)):n}function c(e){var n=e-x;return void 0===x||n>=t||n<0||D&&e-j>=b}function l(){var e=k();return c(e)?d(e):void(y=setTimeout(l,s(e)))}function d(e){return y=void 0,S&&m?a(e):(m=g=void 0,v)}function f(){void 0!==y&&clearTimeout(y),j=0,m=x=g=y=void 0}function p(){return void 0===y?v:d(k())}function h(){var e=k(),n=c(e);if(m=arguments,g=this,x=e,n){if(void 0===y)return i(x);if(D)return y=setTimeout(l,t),a(x)}return void 0===y&&(y=setTimeout(l,t)),v}var m,g,b,v,y,x,j=0,M=!1,D=!1,S=!0;if("function"!=typeof e)throw new TypeError(u);return t=o(t)||0,r(n)&&(M=!!n.leading,b=(D="maxWait"in n)?w(o(n.maxWait)||0,t):b,S="trailing"in n?!!n.trailing:S),h.cancel=f,h.flush=p,h}function r(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function i(e){return"symbol"==(void 0===e?"undefined":s(e))||a(e)&&y.call(e)==l}function o(e){if("number"==typeof e)return e;if(i(e))return c;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||h.test(e)?m(e.slice(2),n?2:8):f.test(e)?c:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",c=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,g="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,v=g||b||Function("return this")(),y=Object.prototype.toString,w=Math.max,_=Math.min,k=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1){if((r=e[t]).dataset&&r.dataset.aos)return!0;if(r.children&&n(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!r()}function i(e,t){var n=window.document,a=new(r())(o);s=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(r)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:a,ready:i}},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=r();return!(!i.test(e)&&!o.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!s.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==r&&("false"===r||!n&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,i){n(e,a+r,t)}))};t.default=r},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(12)),i=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=i},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(13)),i=function(e,t){var n=0,r=0,i=window.innerHeight,o={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(r=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,a.default)(e).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return o.anchorPlacement||o.offset||isNaN(t)||(r=t),n+r};t.default=i},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])})),i.register("k4kaw",(function(n,r){e(n.exports,"addOrDeleteFavoriteNews",(function(){return p}));var a=i("7Y9D8"),o=i("gKkQl"),s=i("jAzyG"),u=i("eyjy7");const c=(0,o.initializeApp)({apiKey:"AIzaSyDD_Eh4tyvM30ivpTHWqfHo7r2h0gDev4Y",authDomain:"project-goit2023-js.firebaseapp.com",databaseURL:"https://project-goit2023-js-default-rtdb.firebaseio.com",projectId:"project-goit2023-js",storageBucket:"project-goit2023-js.appspot.com",messagingSenderId:"407142734195",appId:"1:407142734195:web:6d45ec3cdde16415370d06",measurementId:"G-VMY0EQ75TG"}),l=(0,s.getDatabase)(c),d=(0,u.getAuth)(),f=(0,s.ref)(l,"users");function p(e,n,r){const i=d.currentUser;(0,s.get)(f).then((o=>{const u=[];let c=!1;if(o.forEach((t=>{const n=t.val();n.email===i.email&&n.newsFavouriteData.forEach((t=>{t.id===e.id&&(c=!0),u.push(t)}))})),c){console.log("Article already exists");const i=u.filter((t=>t.id!==e.id)).filter(Boolean);return 0===i.length&&i.push(""),(0,s.update)((0,s.ref)(l,`users/${n}`),{newsFavouriteData:i}).then((()=>{t(a).Notify.success("News removed from favorites"),r.innerHTML='<p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p>'})).catch((e=>{t(a).Notify.failure("Something went wrong, please try again"),console.error(e)}))}{u.push(e);const i=u.filter(Boolean).filter(Boolean);return(0,s.update)((0,s.ref)(l,`users/${n}`),{newsFavouriteData:i}).then((()=>{t(a).Notify.success("News added to favorites"),u.splice(0,u.length),r.innerHTML='<p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p>'})).catch((e=>{t(a).Notify.failure("Something went wrong, please try again"),console.error(e)}))}})).catch((e=>{t(a).Notify.failure("Something went wrong, please try again"),console.error(e)}))}})),i.register("jGhRw",(function(e,t){const n=[{width:768,useClass:"mobile"},{width:1279,useClass:"tablet"}];function r(){const e=n,t=window.innerWidth,r=e.find((e=>t<=e.width));let a;a=r?r.useClass:"desktop",document.body.classList.forEach((e=>{e.startsWith("screen-")&&document.body.classList.remove(e)})),document.body.classList.add(`screen-${a}`)}window.addEventListener("resize",r),window.addEventListener("DOMContentLoaded",r)})),i.register("4MqUU",(function(n,r){e(n.exports,"newsApi",(function(){return y}));var a=i("jkMrE"),o=i("g6yUq"),s=i("gMe87"),u=i("1BWOC"),c=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,h=new WeakMap,m=new WeakMap,g=new WeakMap,b=new WeakMap,v=new WeakMap;const y=new class{async fetchSearchArticles(){this.updateParams();const e=`${t(a)(this,c)}${t(a)(this,l)}${new URLSearchParams(t(a)(this,f))}`,n=await fetch(e);this.errorHandle(n);const{response:{docs:r,meta:i}}=await n.json();return this.incrementPage(),t(s)(this,h,i.hits),t(s)(this,g,this.setTotalHits()),t(s)(this,p,u.NormalizeData.searchData(r)),{docs:r,meta:i}}async fetchPopularArticles(){const e=`${t(a)(this,c)}mostpopular/v2/viewed/30.json?api-key=${t(a)(this,d)}`,n=await fetch(e);this.errorHandle(n,n.statusText);const{results:r,num_results:i}=await n.json();return{results:r,num_results:i}}async fetchArticlesByCategory(){this.setPerCategoryPage();const e=new URLSearchParams({offset:this.catCurrentPage,limit:t(a)(this,m)}),n=`news/v3/content/nyt/${this.category}.json?`,r=`${t(a)(this,c)}${n}api-key=${t(a)(this,d)}&${e}`,i=await fetch(r);this.errorHandle(i,i.statusText);const{results:o,num_results:l}=await i.json();return t(s)(this,v,l),t(s)(this,b,this.setTotalButtons()),t(s)(this,p,u.NormalizeData.categoryData(o)),o}errorHandle(e,t){if(!e.ok)throw new Error(`Sorry, an error occurred: ${t}`)}incrementPage(){this.currentPage+=1}resetCatPage(){this.catCurrentPage=0}resetPage(){this.currentPage=0}updateParams(){""!==this.beginDate&&""!==this.endDate?Object.assign(t(a)(this,f),{q:this.searchQuery,page:this.currentPage,begin_date:this.beginDate,end_date:this.endDate}):""!==this.beginDate&&""===this.endDate?Object.assign(t(a)(this,f),{q:this.searchQuery,page:this.currentPage,begin_date:this.beginDate}):Object.assign(t(a)(this,f),{q:this.searchQuery,page:this.currentPage})}resetHits(){t(s)(this,h,0)}setTotalHits(){let e=Math.ceil(t(a)(this,h)/10);return e>200?(e=200,e):e}setTotalButtons(){let e=Math.floor(t(a)(this,v));return e>200?(e=200,e):e}encodeCategory(e){return e.includes(" ")?encodeURIComponent(e):e}setPerCategoryPage(){return window.matchMedia("(min-width: 320px)").matches&&window.matchMedia("(max-width: 767px)").matches?t(s)(this,m,5):window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1279px)").matches?t(s)(this,m,8):window.matchMedia("(min-width: 1280px)").matches?t(s)(this,m,9):void 0}set query(e){this.searchQuery=e}get query(){return this.searchQuery}get page(){return this.currentPage}set page(e){this.currentPage=e}get startDate(){return this.beginDate}set startDate(e){this.beginDate=e}get finishDate(){return this.endDate}set finishDate(e){this.endDate=e}get newsDataArr(){return t(a)(this,p)}set newsDataArr(e){t(s)(this,p,e)}get currentCategory(){return this.category}set currentCategory(e){this.category=e}get hits(){return t(a)(this,h)}set hits(e){t(s)(this,h,e)}get totalHits(){return t(a)(this,g)}get totalButtons(){return t(a)(this,b)}get catPerPage(){return t(a)(this,m)}get numResults(){return t(a)(this,v)}constructor(){t(o)(this,c,{writable:!0,value:"https://api.nytimes.com/svc/"}),t(o)(this,l,{writable:!0,value:"search/v2/articlesearch.json?"}),t(o)(this,d,{writable:!0,value:"kkEdLmiWAben4vvAV9iKuhykdEAlksXW"}),t(o)(this,f,{writable:!0,value:{q:this.searchQuery,"api-key":t(a)(this,d),page:this.currentPage,sort:"newest"}}),t(o)(this,p,{writable:!0,value:[]}),t(o)(this,h,{writable:!0,value:void 0}),t(o)(this,m,{writable:!0,value:5}),t(o)(this,g,{writable:!0,value:0}),t(o)(this,b,{writable:!0,value:0}),t(o)(this,v,{writable:!0,value:0}),this.searchQuery="",this.category="all",this.currentPage=0,this.beginDate="",this.endDate="",this.updateSearchParams=!0,this.catCurrentPage=0}}})),i.register("jkMrE",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var a=n.default(e,t,"get");return r.default(e,a)};var n=a(i("fExtF")),r=a(i("iaRLo"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),i.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("g6yUq",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){r.default(e,t),t.set(e,n)};var n,r=(n=i("7K24o"))&&n.__esModule?n:{default:n}})),i.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("gMe87",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){var i=n.default(e,t,"set");return r.default(e,i,a),a};var n=a(i("fExtF")),r=a(i("3LGG3"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),i.register("1BWOC",(function(t,n){e(t.exports,"NormalizeData",(function(){return r}));class r{static formatDate(e){const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}static convertDates(e){if(10===e.length){let t=e.split("-");return[t[0]+t[1]+t[2],""]}if(null!==e.match(/^\d{4}-\d{2}-\d{2}\b to \d{4}-\d{2}-\d{2}\b/)){let t=e.split(" to "),n=t[0].split("-"),r=t[1].split("-");return[n[0]+n[1]+n[2],r[0]+r[1]+r[2]]}}static formatDateToString(e){const[t,n,r]=e.split("/");return`${r}${n.padStart(2,"0")}${t.padStart(2,"0")}`}static searchData(e){return e.map((({abstract:e,headline:t,pub_date:n,uri:r,multimedia:a,section_name:i,web_url:o})=>{let s="";return s=0!==a.length?`https://www.nytimes.com/${a[0].url}`:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:t.print_headline?t.print_headline:t.main,text:e,date:this.formatDate(n),img:s,category:i,id:r,url:o}}))}static popularData(e){return e.map((({abstract:e,title:t,published_date:n,uri:r,media:a,section:i,url:o})=>{let s="";return s=0!==a.length?a[0]["media-metadata"][2].url:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:t,text:e,date:this.formatDate(n),img:s,category:i,id:r,url:o}}))}static categoryData(e){return e.map((({abstract:e,title:t,published_date:n,uri:r,multimedia:a,section:i,url:o})=>{let s="";return s=null!==a&&0!==a.length?a[2].url:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:t,text:e,date:this.formatDate(n),img:s,category:i,id:r,url:o}}))}}})),i.register("cecBV",(function(e,t){({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>600?this.show():this.hide()})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()})),i("kyEFX").register(JSON.parse('{"4uJZR":"read.0aa49e42.js","bwyUR":"icon-card.42ade37b.svg","ilJtq":"read.983afc32.css"}'));
//# sourceMappingURL=read.0aa49e42.js.map
