!function(){var e=!1;if("undefined"!=typeof window){var t={get passive(){e=!0}};window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}var o,n,i,d,r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],c=!1,s=-1,a=void 0,u=void 0,v=void 0,m=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},y=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},f=function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},p=function(){if(void 0!==u){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=u.position,document.body.style.top=u.top,document.body.style.left=u.left,window.scrollTo(t,e),u=void 0}},g=function(t,o){if(t){if(!l.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:o||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[n]),r?window.requestAnimationFrame((function(){if(void 0===u){u={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===v){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);v=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(o),r&&(t.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-s;!m(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?y(e):e.stopPropagation())}(e,t)},c||(document.addEventListener("touchmove",y,e?{passive:!1}:void 0),c=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")};o=document.querySelector(".js-menu-container-favorites"),n=document.querySelector(".js-open-menu-favorites"),i=document.querySelector(".js-close-menu-favorites"),d=function(){var t,i="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!i),o.classList.toggle("is-open"),i?(t=document.body)?(l=l.filter((function(e){return e.targetElement!==t})),r&&(t.ontouchstart=null,t.ontouchmove=null,c&&0===l.length&&(document.removeEventListener("touchmove",y,e?{passive:!1}:void 0),c=!1)),r?p():f()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."):g(document.body)},n.addEventListener("click",d),i.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=favorites.3c5ed822.js.map
