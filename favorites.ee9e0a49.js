!function(){var e={newList:document.querySelector(".news-list"),text:document.querySelector(".favorite-notfound")},t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},n="favorite_news";function a(e){if(e.target.closest(".box__btn")){var a=e.target.closest(".gallery__item");!function(e){var a=t(n)||[];a.push(e),saveToLocal(n,a)}({id:a.dataset.id}),a.querySelector(".add-to-favorite-button").classList.add("hidden"),a.querySelector(".remove-from-favorite-button").classList.remove("hidden")}}function r(e){if(e.target.closest(".remove-from-favorite-button")){var a=e.target.closest(".gallery__item");!function(e){var a=(t(n)||[]).filter((function(t){return t.id!==e}));saveToLocal(n,a)}(a.dataset.id),a.remove()}}window.addEventListener("load",(function(){var a=(t(n)||[]).map((function(e){return e.map((function(e){var t=e.img,n=e.title,a=e.text,r=e.date,o=e.id,i=e.category,l=e.url;return'<li id="'.concat(o,'" class="gallery__item">\n  <div class="gallery-thumb" style="background-image: url(\'').concat(t,'\')">\n      <p class="gallery-thumb__subtitle">').concat(i,'</p>\n      <p class="gallery-thumb__already">\n        Already read\n        <svg width="18" height="18">\n          <use href="./images/icon-card.svg#icon-check"></use>\n        </svg>\n      </p>\n    <button type="button" class="gallery-thumb__btn">\n      <p class="gallery-thumb__name add" \n        >Add to favorite\n        <svg width="16" height="16">\n          <use href="./images/icon-card.svg#icon-like-icon"></use>\n        </svg>\n      </p>\n      <p class="gallery-thumb__name remove"\n        >Remove from favorite\n        <svg width="16" height="16">\n          <use href="./images/icon-card.svg#icon-like-icon"></use>\n        </svg>\n      </p>\n    </button>\n  </div>\n    <h3 class="gallery__title">').concat(n,'</h3>\n    <p class="gallery__text">').concat(a,'</p>\n      <div class="thumb">\n        <p class="thumb__text">').concat(r,'</p>\n        <a class="thumb__link" href="').concat(l,'" target="_blank">Read more</a>\n      </div>\n</li>')})).join("")})).join("");e.galleryEl.innerHTML=a})),e.galleryEl.addEventListener("click",(function(e){a(e),r(e)}))}();
//# sourceMappingURL=favorites.ee9e0a49.js.map
