!function(){window.addEventListener("resize",(function(){var e,t=getdevice,s=window.innerWidth,c=t.find((function(e){return s<=e.width}));e=c?c.useClass:"default";document.body.classList.forEach((function(e){e.startsWith("screen-")&&document.body.classList.remove(e)})),document.body.classList.add("screen-".concat(e))}));var e=document.querySelector("body"),t=document.querySelector("#theme-switch"),s=document.querySelector(".light-theme-box"),c=document.querySelector(".dark-theme-box"),a="light-theme",i="dark-theme";function d(e){localStorage.setItem("theme",e)}t.addEventListener("change",(function(){e.classList.contains(a)?(e.classList.replace(a,i),c.classList.add("active"),s.classList.remove("active"),d(i)):(e.classList.replace(i,a),c.classList.remove("active"),s.classList.add("active"),d(a))})),(localStorage.getItem("theme")||a)===a?(s.classList.add("active"),e.classList.add(a)):(t.checked=!0,c.classList.add("active"),e.classList.add(i))}();
//# sourceMappingURL=index.11f1ab0e.js.map
