!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("cQoPk",(function(n,r){e(n.exports,"onLoadHomePage",(function(){return _})),e(n.exports,"checkPresentArticle",(function(){return x}));var a=o("dDDEV"),i=o("8nrFW"),c=o("5118m"),u=o("4LQlN"),s=o("cqmI4");o("01B3o");var l=o("iXDbJ");o("6JpON");var d=o("fkNhc"),f=o("cokon"),p=o("gQOBw"),m=o("6voDO");t(l).init();var h,v=(0,d.initializeApp)({apiKey:"AIzaSyDD_Eh4tyvM30ivpTHWqfHo7r2h0gDev4Y",authDomain:"project-goit2023-js.firebaseapp.com",databaseURL:"https://project-goit2023-js-default-rtdb.firebaseio.com",projectId:"project-goit2023-js",storageBucket:"project-goit2023-js.appspot.com",messagingSenderId:"407142734195",appId:"1:407142734195:web:6d45ec3cdde16415370d06",measurementId:"G-VMY0EQ75TG"}),g=(0,f.getDatabase)(v),b=(0,p.getAuth)(),y=((0,f.ref)(g,"users"),document.querySelector(".favorite"),document.querySelector(".not-found-box")),w=document.querySelector("#news-list"),k="favorite_news";function _(){var e="favorite_news",n=new URL(o("1JyRv"));s.refs.galleryEl.addEventListener("click",(function(r){var o=r.target.closest(".gallery-thumb__btn");if(!o)return;var c=r.target.closest(".gallery__item"),s=c.querySelector(".gallery__title").textContent,l=c.querySelector(".gallery__text").textContent,d=c.querySelector(".thumb__text").textContent,f=c.id,p=c.querySelector(".gallery-thumb__subtitle").textContent,h=c.querySelector(".thumb__link").href,v={img:(k=c.querySelector(".gallery-thumb").style.backgroundImage.split(""),k.splice(0,5),k.splice(-2,2),k.join("")),title:s,text:l,date:d,id:f,category:p,url:h},g=(0,u.getFromLS)(e),y=g.find((function(e){return e.id===f})),w=b.currentUser;var k;if(w){var _=w.uid;(0,m.addOrDeleteFavoriteNews)(v,_,o)}if(y){var x=g.filter((function(e){return e.id!==f}));(0,u.setToLS)(e,x);var M=b.currentUser;if(M){var j=M.uid;(0,m.addOrDeleteFavoriteNews)(v,j,o)}return void(o.innerHTML='<p class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="'.concat(n,"#").concat("icon-like-icon",'"></use></svg></p>'))}var O=t(i)(g).concat([t(a)({},v)]);(0,u.setToLS)(e,O),o.innerHTML='<p class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="'.concat(n,"#").concat("icon-like",'"></svg></p>')}))}function x(e){return(0,u.getFromLS)(k).find((function(t){return t.id===e}))}function M(e){if(e.target.closest(".gallery-thumb__btn")){var t=e.target.closest(".gallery__item").id,n=(0,u.getFromLS)(k);if(n.find((function(e){return e.id===t}))){var r=n.filter((function(e){return e.id!==t}));(0,u.setToLS)(k,r),r.length||setTimeout((function(){(0,u.getFromLS)(k).length||y.classList.remove("not-found-box-hidden")}),100);var a=c.markupForFavoritesAndRead.createGalleryCardMarkup(r);w.innerHTML=a}else;}}"Favorite"===document.title&&((h=(0,u.getFromLS)(k)).length?(y.classList.add("not-found-box-hidden"),null!==w&&(w.innerHTML=c.markupForFavoritesAndRead.createGalleryCardMarkup(h),w.addEventListener("click",M))):y.classList.remove("not-found-box-hidden"))})),o.register("5118m",(function(t,n){e(t.exports,"markup",(function(){return a})),e(t.exports,"markupForFavoritesAndRead",(function(){return i})),e(t.exports,"addWeatherMarkup",(function(){return c}));var r=o("cQoPk");o("4LQlN");var a={createGalleryCardMarkup:function(e){var t=new URL(o("1JyRv"));return e.map((function(e,n){var a=e.img,o=e.title,i=e.text,c=e.date,u=e.id,s=e.category,l=e.url;return'\n      <li id="'.concat(u,'" \n      class="gallery__item" data-aos="fade-up"\n     data-aos-duration="1000"\n     >\n        <div class="gallery-thumb" style="background-image: url(\'').concat(a,'\')">\n          <p class="gallery-thumb__subtitle">').concat(s,'</p>\n          <p class="gallery-thumb__already">\n            Already read\n            <svg width="18" height="18"><use href="').concat(t,"#").concat("icon-check",'"></use></svg>\n          </p>\n          ').concat((0,r.checkPresentArticle)(u)?'<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="'.concat(t,"#").concat("icon-like",'"></use></svg></span></button>'):'<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="'.concat(t,"#").concat("icon-like-icon",'"></use></svg></span></button>'),'\n        </div>\n        <h3 class="gallery__title">').concat(o,'</h3>\n        <p class="gallery__text">').concat(i,'</p>\n          <div class="thumb">\n            <p class="thumb__text">').concat(c,'</p>\n            <a class="thumb__link" href="').concat(l,'" target="_blank">Read more</a>\n          </div>\n      </li>')}))},clearMarkup:function(e){e.innerHTML=""},renderMarkup:function(e,t){e.insertAdjacentHTML("beforeend",t)}},i={createGalleryCardMarkup:function(e){var t=new URL(o("1JyRv"));return e.map((function(e){var n=e.img,a=e.title,o=e.text,i=e.date,c=e.id,u=e.category,s=e.url;return'<li id="'.concat(c,'" class="gallery__item" \n   data-aos="fade-up"\n     data-aos-duration="1000"\n     \n     >\n  <div class="gallery-thumb" style="background-image: url(\'').concat(n,'\')">\n      <p class="gallery-thumb__subtitle">').concat(u,'</p>\n      <p class="gallery-thumb__already">\n        Already read\n      </p>\n    ').concat((0,r.checkPresentArticle)(c)?'<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Remove from favorite<svg class="gallery-thumb__icon" width="16" height="16"><use href="'.concat(t,"#").concat("icon-like",'"></use></svg></span></button>'):'<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Add to favorite<svg class="gallery-thumb__icon" width="16" height="16"><use href="'.concat(t,"#").concat("icon-like-icon",'"></use></svg></span></button>'),'\n  </div>\n    <h3 class="gallery__title">').concat(a,'</h3>\n    <p class="gallery__text">').concat(o,'</p>\n      <div class="thumb">\n        <p class="thumb__text">').concat(i,'</p>\n        <a class="thumb__link" href="').concat(s,'" target="_blank">Read more</a>\n      </div>\n</li>')})).join("")},clearMarkup:function(e){e.innerHTML=""},renderMarkup:function(e,t){e.insertAdjacentHTML("beforeend",t)},renderMarkupBefore:function(e,t){e.insertAdjacentHTML("beforebegin",t)}};function c(e){var t='<li class="weather" data-aos="fade-left"\n     data-aos-duration="1000">\n  <div class="weather-box"></div>\n  <button class="weather-button">Weather for Week</button>\n</li>';return window.matchMedia("(min-width: 320px)").matches&&window.matchMedia("(max-width: 767px)").matches?e.splice(0,0,t):window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1279px)").matches?e.splice(1,0,t):window.matchMedia("(min-width: 1280px)").matches?e.splice(2,0,t):void 0}})),o.register("4LQlN",(function(t,n){function r(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}function a(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch(e){console.error("Get state error: ",e.message)}}e(t.exports,"setToLS",(function(){return r})),e(t.exports,"getFromLS",(function(){return a}))})),o.register("1JyRv",(function(e,t){e.exports=o("aNJCr").getBundleURL("1tBIC")+o("iE7OH").resolve("6u7XD")})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o.register("01B3o",(function(e,t){function n(e,t,n){var r,a,o,i,c;function u(){var s=Date.now()-i;s<t&&s>=0?r=setTimeout(u,t-s):(r=null,n||(c=e.apply(o,a),o=a=null))}null==t&&(t=100);var s=function(){o=this,a=arguments,i=Date.now();var s=n&&!r;return r||(r=setTimeout(u,t)),s&&(c=e.apply(o,a),o=a=null),c};return s.clear=function(){r&&(clearTimeout(r),r=null)},s.flush=function(){r&&(c=e.apply(o,a),o=a=null,clearTimeout(r),r=null)},s}n.debounce=n,e.exports=n})),o.register("iXDbJ",(function(e,n){var r=o("l5bVx");e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(r(n(1)),n(6)),i=r(o),c=r(n(7)),u=r(n(8)),s=r(n(9)),l=r(n(10)),d=r(n(11)),f=r(n(14)),p=[],m=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(m=!0),m)return p=(0,d.default)(p,h),(0,l.default)(p,h.once),p},g=function(){p=(0,f.default)(),v()},b=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&s.default.mobile()||"phone"===e&&s.default.phone()||"tablet"===e&&s.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){h=a(h,e),p=(0,f.default)();var t=document.all&&!window.atob;return y(h.disable)||t?b():(h.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,(function(){v(!0)})):document.addEventListener(h.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,h.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)((function(){(0,l.default)(p,h.once)}),h.throttleDelay)),h.disableMutationObserver||u.default.ready("[data-aos]",g),p)};e.exports={init:w,refresh:v,refreshHard:g}},function(e,t){},,,,,function(e,n){(function(n){"use strict";function a(e,t,n){function r(t){var n=h,r=v;return h=v=void 0,k=t,b=e.apply(r,n)}function a(e){return k=e,y=setTimeout(u,t),_?r(e):b}function o(e){var n=t-(e-w);return O?M(n,g-(e-k)):n}function c(e){var n=e-w;return void 0===w||n>=t||n<0||O&&e-k>=g}function u(){var e=j();return c(e)?l(e):void(y=setTimeout(u,o(e)))}function l(e){return y=void 0,S&&h?r(e):(h=v=void 0,b)}function f(){void 0!==y&&clearTimeout(y),k=0,h=w=v=y=void 0}function p(){return void 0===y?b:l(j())}function m(){var e=j(),n=c(e);if(h=arguments,v=this,w=e,n){if(void 0===y)return a(w);if(O)return y=setTimeout(u,t),r(w)}return void 0===y&&(y=setTimeout(u,t)),b}var h,v,g,b,y,w,k=0,_=!1,O=!1,S=!0;if("function"!=typeof e)throw new TypeError(d);return t=s(t)||0,i(n)&&(_=!!n.leading,g=(O="maxWait"in n)?x(s(n.maxWait)||0,t):g,S="trailing"in n?!!n.trailing:S),m.cancel=f,m.flush=p,m}function o(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return i(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),a(e,t,{leading:r,maxWait:t,trailing:o})}function i(e){var t=void 0===e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function c(e){return!!e&&"object"==(void 0===e?"undefined":l(e))}function u(e){return"symbol"==(void 0===e?"undefined":l(e))||c(e)&&_.call(e)==p}function s(e){if("number"==typeof e)return e;if(u(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=v.test(e);return n||g.test(e)?b(e.slice(2),n?2:8):h.test(e)?f:+e}var l="function"==typeof Symbol&&"symbol"==t(r)(Symbol.iterator)?function(e){return void 0===e?"undefined":t(r)(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(r)(e)},d="Expected a function",f=NaN,p="[object Symbol]",m=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,y="object"==(void 0===n?"undefined":l(n))&&n&&n.Object===Object&&n,w="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,k=y||w||Function("return this")(),_=Object.prototype.toString,x=Math.max,M=Math.min,j=function(){return k.Date.now()};e.exports=o}).call(n,function(){return this}())},function(e,n){(function(n){"use strict";function a(e,t,n){function r(t){var n=h,r=v;return h=v=void 0,k=t,b=e.apply(r,n)}function a(e){return k=e,y=setTimeout(s,t),j?r(e):b}function i(e){var n=t-(e-w);return O?x(n,g-(e-k)):n}function c(e){var n=e-w;return void 0===w||n>=t||n<0||O&&e-k>=g}function s(){var e=M();return c(e)?d(e):void(y=setTimeout(s,i(e)))}function d(e){return y=void 0,S&&h?r(e):(h=v=void 0,b)}function f(){void 0!==y&&clearTimeout(y),k=0,h=w=v=y=void 0}function p(){return void 0===y?b:d(M())}function m(){var e=M(),n=c(e);if(h=arguments,v=this,w=e,n){if(void 0===y)return a(w);if(O)return y=setTimeout(s,t),r(w)}return void 0===y&&(y=setTimeout(s,t)),b}var h,v,g,b,y,w,k=0,j=!1,O=!1,S=!0;if("function"!=typeof e)throw new TypeError(l);return t=u(t)||0,o(n)&&(j=!!n.leading,g=(O="maxWait"in n)?_(u(n.maxWait)||0,t):g,S="trailing"in n?!!n.trailing:S),m.cancel=f,m.flush=p,m}function o(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function c(e){return"symbol"==(void 0===e?"undefined":s(e))||i(e)&&k.call(e)==f}function u(e){if("number"==typeof e)return e;if(c(e))return d;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=h.test(e);return n||v.test(e)?g(e.slice(2),n?2:8):m.test(e)?d:+e}var s="function"==typeof Symbol&&"symbol"==t(r)(Symbol.iterator)?function(e){return void 0===e?"undefined":t(r)(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(r)(e)},l="Expected a function",d=NaN,f="[object Symbol]",p=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt,b="object"==(void 0===n?"undefined":s(n))&&n&&n.Object===Object&&n,y="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,w=b||y||Function("return this")(),k=Object.prototype.toString,_=Math.max,x=Math.min,M=function(){return w.Date.now()};e.exports=a}).call(n,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1){if((r=e[t]).dataset&&r.dataset.aos)return!0;if(r.children&&n(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!r()}function o(e,t){var n=window.document,a=new(r())(i);c=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(r)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:a,ready:o}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=r();return!(!o.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!c.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==r&&("false"===r||!n&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,o){n(e,a+r,t)}))};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(12)),o=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(13)),o=function(e,t){var n=0,r=0,o=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(r=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),n=(0,a.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return i.anchorPlacement||i.offset||isNaN(t)||(r=t),n+r};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])})),o.register("6voDO",(function(n,r){e(n.exports,"addOrDeleteFavoriteNews",(function(){return p}));o("bpxeT"),o("8nrFW"),o("2TvXO");var a=o("6JpON"),i=o("fkNhc"),c=o("cokon"),u=o("gQOBw"),s=(0,i.initializeApp)({apiKey:"AIzaSyDD_Eh4tyvM30ivpTHWqfHo7r2h0gDev4Y",authDomain:"project-goit2023-js.firebaseapp.com",databaseURL:"https://project-goit2023-js-default-rtdb.firebaseio.com",projectId:"project-goit2023-js",storageBucket:"project-goit2023-js.appspot.com",messagingSenderId:"407142734195",appId:"1:407142734195:web:6d45ec3cdde16415370d06",measurementId:"G-VMY0EQ75TG"}),l=(0,c.getDatabase)(s),d=(0,u.getAuth)(),f=(0,c.ref)(l,"users");function p(e,n,r){var o=d.currentUser;(0,c.get)(f).then((function(i){var u=[],s=!1;if(i.forEach((function(t){var n=t.val();n.email===o.email&&n.newsFavouriteData.forEach((function(t){t.id===e.id&&(s=!0),u.push(t)}))})),s){console.log("Article already exists");var d=u.filter((function(t){return t.id!==e.id})).filter(Boolean);return 0===d.length&&d.push(""),(0,c.update)((0,c.ref)(l,"users/".concat(n)),{newsFavouriteData:d}).then((function(){t(a).Notify.success("News removed from favorites"),r.innerHTML='<p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p>'})).catch((function(e){t(a).Notify.failure("Something went wrong, please try again"),console.error(e)}))}u.push(e);var f=u.filter(Boolean).filter(Boolean);return(0,c.update)((0,c.ref)(l,"users/".concat(n)),{newsFavouriteData:f}).then((function(){t(a).Notify.success("News added to favorites"),u.splice(0,u.length),r.innerHTML='<p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p>'})).catch((function(e){t(a).Notify.failure("Something went wrong, please try again"),console.error(e)}))})).catch((function(e){t(a).Notify.failure("Something went wrong, please try again"),console.error(e)}))}})),o.register("h7ZpV",(function(e,t){var n=[{width:768,useClass:"mobile"},{width:1279,useClass:"tablet"}];function r(){var e,t=n,r=window.innerWidth,a=t.find((function(e){return r<=e.width}));e=a?a.useClass:"desktop",document.body.classList.forEach((function(e){e.startsWith("screen-")&&document.body.classList.remove(e)})),document.body.classList.add("screen-".concat(e))}window.addEventListener("resize",r),window.addEventListener("DOMContentLoaded",r)})),o.register("1PU0k",(function(n,r){e(n.exports,"newsApi",(function(){return x}));var a=o("bpxeT"),i=o("8MBJY"),c=o("4KMWL"),u=o("8MQK7"),s=o("dPxxm"),l=o("a2hTj"),d=o("2TvXO"),f=o("lQuyK"),p=new WeakMap,m=new WeakMap,h=new WeakMap,v=new WeakMap,g=new WeakMap,b=new WeakMap,y=new WeakMap,w=new WeakMap,k=new WeakMap,_=new WeakMap,x=new(function(){"use strict";function e(){t(i)(this,e),t(u)(this,p,{writable:!0,value:"https://api.nytimes.com/svc/"}),t(u)(this,m,{writable:!0,value:"search/v2/articlesearch.json?"}),t(u)(this,h,{writable:!0,value:"kkEdLmiWAben4vvAV9iKuhykdEAlksXW"}),t(u)(this,v,{writable:!0,value:{q:this.searchQuery,"api-key":t(c)(this,h),page:this.currentPage,sort:"newest"}}),t(u)(this,g,{writable:!0,value:[]}),t(u)(this,b,{writable:!0,value:void 0}),t(u)(this,y,{writable:!0,value:5}),t(u)(this,w,{writable:!0,value:0}),t(u)(this,k,{writable:!0,value:0}),t(u)(this,_,{writable:!0,value:0}),this.searchQuery="",this.category="all",this.currentPage=0,this.beginDate="",this.endDate="",this.updateSearchParams=!0,this.catCurrentPage=0}return t(l)(e,[{key:"fetchSearchArticles",value:function(){var e=this;return t(a)(t(d).mark((function n(){var r,a,o,i,u,l;return t(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.updateParams(),r="".concat(t(c)(e,p)).concat(t(c)(e,m)).concat(new URLSearchParams(t(c)(e,v))),n.next=4,fetch(r);case 4:return a=n.sent,e.errorHandle(a),n.next=8,a.json();case 8:return o=n.sent,i=o.response,u=i.docs,l=i.meta,e.incrementPage(),t(s)(e,b,l.hits),t(s)(e,w,e.setTotalHits()),t(s)(e,g,f.NormalizeData.searchData(u)),n.abrupt("return",{docs:u,meta:l});case 17:case"end":return n.stop()}}),n)})))()}},{key:"fetchPopularArticles",value:function(){var e=this;return t(a)(t(d).mark((function n(){var r,a,o,i,u;return t(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(t(c)(e,p),"mostpopular/v2/viewed/1.json?api-key=").concat(t(c)(e,h)),n.next=3,fetch(r);case 3:return a=n.sent,e.errorHandle(a,a.statusText),n.next=7,a.json();case 7:return o=n.sent,i=o.results,u=o.num_results,n.abrupt("return",{results:i,num_results:u});case 11:case"end":return n.stop()}}),n)})))()}},{key:"fetchArticlesByCategory",value:function(){var e=this;return t(a)(t(d).mark((function n(){var r,a,o,i,u,l,m;return t(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.setPerCategoryPage(),r=new URLSearchParams({offset:e.catCurrentPage,limit:t(c)(e,y)}),a="news/v3/content/nyt/".concat(e.category,".json?"),o="".concat(t(c)(e,p)).concat(a,"api-key=").concat(t(c)(e,h),"&").concat(r),console.log(o),n.next=7,fetch(o);case 7:return i=n.sent,e.incrementCatPage(),e.errorHandle(i,i.statusText),n.next=12,i.json();case 12:return u=n.sent,l=u.results,m=u.num_results,t(s)(e,_,m),t(s)(e,k,e.setTotalButtons()),console.log(f.NormalizeData.categoryData(l)),n.abrupt("return",l);case 19:case"end":return n.stop()}}),n)})))()}},{key:"errorHandle",value:function(e,t){if(!e.ok)throw new Error("Sorry, an error occurred: ".concat(t))}},{key:"incrementPage",value:function(){this.currentPage+=1}},{key:"incrementCatPage",value:function(){this.catCurrentPage+=1}},{key:"resetCatPage",value:function(){this.catCurrentPage=0}},{key:"resetPage",value:function(){this.currentPage=0}},{key:"updateParams",value:function(){""!==this.beginDate?Object.assign(t(c)(this,v),{q:this.searchQuery,page:this.currentPage,begin_date:this.beginDate,end_date:this.endDate}):Object.assign(t(c)(this,v),{q:this.searchQuery,page:this.currentPage})}},{key:"resetHits",value:function(){t(s)(this,b,0)}},{key:"setTotalHits",value:function(){var e=Math.ceil(t(c)(this,b)/10);return e>200?e=200:e}},{key:"setTotalButtons",value:function(){var e=Math.ceil(t(c)(this,_)/t(c)(this,y));return e>200?e=200:e}},{key:"encodeCategory",value:function(e){return e.includes(" ")?encodeURIComponent(e):e}},{key:"setPerCategoryPage",value:function(){return window.matchMedia("(min-width: 320px)").matches&&window.matchMedia("(max-width: 767px)").matches?t(s)(this,y,5):window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1279px)").matches?t(s)(this,y,8):window.matchMedia("(min-width: 1280px)").matches?t(s)(this,y,9):void 0}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"page",get:function(){return this.currentPage},set:function(e){this.currentPage=e}},{key:"startDate",get:function(){return this.beginDate},set:function(e){this.beginDate=e}},{key:"finishDate",get:function(){return this.endDate},set:function(e){this.endDate=e}},{key:"newsDataArr",get:function(){return t(c)(this,g)},set:function(e){t(s)(this,g,e)}},{key:"currentCategory",get:function(){return this.category},set:function(e){this.category=e}},{key:"hits",get:function(){return t(c)(this,b)},set:function(e){t(s)(this,b,e)}},{key:"totalHits",get:function(){return t(c)(this,w)}},{key:"totalButtons",get:function(){return t(c)(this,k)}}]),e}())})),o.register("4KMWL",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var a=n.default(e,t,"get");return r.default(e,a)};var n=a(o("1UHsN")),r=a(o("ffZzF"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("8MQK7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){r.default(e,t),t.set(e,n)};var n,r=(n=o("5k7tO"))&&n.__esModule?n:{default:n}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("dPxxm",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){var o=n.default(e,t,"set");return r.default(e,o,a),a};var n=a(o("1UHsN")),r=a(o("jdVyQ"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),o.register("lQuyK",(function(n,r){e(n.exports,"NormalizeData",(function(){return u}));var a=o("8MBJY"),i=o("a2hTj"),c=o("1t1Wn"),u=function(){"use strict";function e(){t(a)(this,e)}return t(i)(e,null,[{key:"formatDate",value:function(e){var t=new Date(e),n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return"".concat(n,"/").concat(r,"/").concat(a)}},{key:"convertDates",value:function(e){if(10===e.length){var t=e.split("-");return[t[0]+t[1]+t[2],""]}if(null!==e.match(/^\d{4}-\d{2}-\d{2}\b to \d{4}-\d{2}-\d{2}\b/)){var n=e.split(" to "),r=n[0].split("-"),a=n[1].split("-");return[r[0]+r[1]+r[2],a[0]+a[1]+a[2]]}}},{key:"formatDateToString",value:function(e){var n=t(c)(e.split("/"),3),r=n[0],a=n[1],o=n[2];return"".concat(o).concat(a.padStart(2,"0")).concat(r.padStart(2,"0"))}},{key:"searchData",value:function(e){var t=this;return e.map((function(e){var n=e.abstract,r=e.headline,a=e.pub_date,o=e.uri,i=e.multimedia,c=e.section_name,u=e.web_url,s="";return s=0!==i.length?"https://www.nytimes.com/".concat(i[0].url):"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:r.print_headline?r.print_headline:r.main,text:n,date:t.formatDate(a),img:s,category:c,id:o,url:u}}))}},{key:"popularData",value:function(e){var t=this;return e.map((function(e){var n=e.abstract,r=e.title,a=e.published_date,o=e.uri,i=e.media,c=e.section,u=e.url,s="";return s=0!==i.length?i[0]["media-metadata"][2].url:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:r,text:n,date:t.formatDate(a),img:s,category:c,id:o,url:u}}))}},{key:"categoryData",value:function(e){var t=this;return e.map((function(e){var n=e.abstract,r=e.title,a=e.published_date,o=e.uri,i=e.multimedia,c=e.section,u=e.url,s="";return s=null!==i&&0!==i.length?i[2].url:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:r,text:n,date:t.formatDate(a),img:s,category:c,id:o,url:u}}))}}]),e}()})),o.register("1GnK6",(function(e,t){({el:document.querySelector(".btn-up"),show:function(){this.el.classList.remove("btn-up_hide")},hide:function(){this.el.classList.add("btn-up_hide")},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>600?e.show():e.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()})),o("iE7OH").register(JSON.parse('{"1tBIC":"read.f6bae65e.js","6u7XD":"icon-card.42ade37b.svg","ilJtq":"read.983afc32.css"}'))}();
//# sourceMappingURL=read.f6bae65e.js.map
