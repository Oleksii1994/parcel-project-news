function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=r.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},r.parcelRequired7c6=s),s.register("jJkRO",(function(t,r){e(t.exports,"onLoadHomePage",(function(){return u})),e(t.exports,"checkPresentArticle",(function(){return c})),s("4MqUU"),s("1BWOC");var a=s("cky31"),n=s("335mm");const i=document.querySelector(".not-found"),o=document.querySelector("#news-list"),l="favorite_news";function u(){const e="favorite_news";({galleryEl:document.querySelector("#news-gallery")}).galleryEl.addEventListener("click",(function(t){const r=t.target.closest(".gallery-thumb__btn");if(!r)return;const a=t.target.closest(".gallery__item"),s=a.querySelector(".gallery__title").textContent,i=a.querySelector(".gallery__text").textContent,o=a.querySelector(".thumb__text").textContent,l=a.id,u=a.querySelector(".gallery-thumb__subtitle").textContent,c=a.querySelector(".thumb__link").href,d={img:(()=>{const e=a.querySelector(".gallery-thumb").style.backgroundImage.split("");return e.splice(0,5),e.splice(-2,2),e.join("")})(),title:s,text:i,date:o,id:l,category:u,url:c},g=(0,n.getFromLS)(e);if(g.find((e=>e.id===l))){const t=g.filter((e=>e.id!==l));return(0,n.setToLS)(e,t),void(r.innerHTML='<p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p>')}const h=[...g,{...d}];(0,n.setToLS)(e,h),r.innerHTML='<p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p>'}))}function c(e){return(0,n.getFromLS)(l).find((t=>t.id===e))}function d(e){if(!e.target.closest(".gallery-thumb__btn"))return;const t=e.target.closest(".gallery__item").id,r=(0,n.getFromLS)(l);if(r.find((e=>e.id===t))){const e=r.filter((e=>e.id!==t));(0,n.setToLS)(l,e);const s=a.markup.createGalleryCardMarkup(e);o.innerHTML=s}else;}!function(){const e=(0,n.getFromLS)(l);if(!e.length&&null!==i)return void(i.innerHTML='<h2 class="not-found-title hidden">You haven\'t added anything to favorite!</h2><img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">');const t=a.markup.createGalleryCardMarkup(e);null!==o&&(o.innerHTML=t,o.addEventListener("click",d))}()})),s.register("4MqUU",(function(r,a){e(r.exports,"newsApi",(function(){return f}));var n=s("jkMrE"),i=s("g6yUq"),o=s("gMe87"),l=s("1BWOC"),u=new WeakMap,c=new WeakMap,d=new WeakMap,g=new WeakMap,h=new WeakMap;const f=new class{async fetchSearchArticles(){this.updateParams();const e=`${t(n)(this,u)}${t(n)(this,c)}${new URLSearchParams(t(n)(this,g))}`,r=await fetch(e);this.errorHandle(r),this.incrementPage();const{response:{docs:a,meta:s}}=await r.json();return t(o)(this,h,l.NormalizeData.searchData(a)),{docs:a,meta:s}}async fetchPopularArticles(){const e=`${t(n)(this,u)}mostpopular/v2/viewed/30.json?api-key=${t(n)(this,d)}`,r=await fetch(e);this.errorHandle(r,r.statusText);const{results:a,num_results:s}=await r.json();return{results:a,num_results:s}}async fetchArticlesByCategory(){const e=`news/v3/content/nyt/${this.category}.json?`,r=`${t(n)(this,u)}${e}api-key=${t(n)(this,d)}`,a=await fetch(r);this.errorHandle(a,a.statusText);const{results:s}=await a.json();return s}errorHandle(e,t){if(!e.ok)throw new Error(`Sorry, an error occurred: ${t}`)}incrementPage(){this.currentPage+=1}resetPage(){this.currentPage=1}updateParams(){""!==this.beginDate?Object.assign(t(n)(this,g),{q:this.searchQuery,page:this.currentPage,begin_date:this.beginDate,end_date:this.endDate}):Object.assign(t(n)(this,g),{q:this.searchQuery,page:this.currentPage})}set query(e){this.searchQuery=e}get query(){return this.searchQuery}get page(){return this.currentPage}set page(e){this.currentPage=e}get startDate(){return this.beginDate}set startDate(e){this.beginDate=e}get finishDate(){return this.endDate}set finishDate(e){this.endDate=e}get newsDataArr(){return t(n)(this,h)}set newsDataArr(e){t(o)(this,h,e)}get currentCategory(){return this.category}set currentCategory(e){this.category=e}constructor(){t(i)(this,u,{writable:!0,value:"https://api.nytimes.com/svc/"}),t(i)(this,c,{writable:!0,value:"search/v2/articlesearch.json?"}),t(i)(this,d,{writable:!0,value:"kkEdLmiWAben4vvAV9iKuhykdEAlksXW"}),t(i)(this,g,{writable:!0,value:{q:this.searchQuery,"api-key":t(n)(this,d),page:this.currentPage}}),t(i)(this,h,{writable:!0,value:[]}),this.searchQuery="",this.category="all",this.currentPage=0,this.beginDate="",this.endDate="",this.updateSearchParams=!0}}})),s.register("jkMrE",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var n=r.default(e,t,"get");return a.default(e,n)};var r=n(s("fExtF")),a=n(s("iaRLo"));function n(e){return e&&e.__esModule?e:{default:e}}})),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("g6yUq",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){a.default(e,t),t.set(e,r)};var r,a=(r=s("7K24o"))&&r.__esModule?r:{default:r}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("gMe87",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){var s=r.default(e,t,"set");return a.default(e,s,n),n};var r=n(s("fExtF")),a=n(s("3LGG3"));function n(e){return e&&e.__esModule?e:{default:e}}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),s.register("1BWOC",(function(t,r){e(t.exports,"NormalizeData",(function(){return a}));class a{static formatDate(e){const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}static convertDates(e){if(10===e.length){let t=e.split("-");return[t[0]+t[1]+t[2],""]}if(null!==e.match(/^\d{4}-\d{2}-\d{2}\b to \d{4}-\d{2}-\d{2}\b/)){let t=e.split(" to "),r=t[0].split("-"),a=t[1].split("-");return[r[0]+r[1]+r[2],a[0]+a[1]+a[2]]}}static formatDateToString(e){const[t,r,a]=e.split("/");return`${a}${r.padStart(2,"0")}${t.padStart(2,"0")}`}static searchData(e){return e.map((({abstract:e,headline:t,pub_date:r,uri:a,multimedia:n,section_name:s,web_url:i})=>{let o="";return o=0!==n.length?`https://www.nytimes.com/${n[0].url}`:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:t.print_headline?t.print_headline:t.main,text:e,date:this.formatDate(r),img:o,category:s,id:a,url:i}}))}static popularData(e){return e.map((({abstract:e,title:t,published_date:r,uri:a,media:n,section:s,url:i})=>{let o="";return o=0!==n.length?n[0]["media-metadata"][2].url:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:t,text:e,date:this.formatDate(r),img:o,category:s,id:a,url:i}}))}static categoryData(e){return e.map((({abstract:e,title:t,published_date:r,uri:a,multimedia:n,section:s,url:i})=>{let o="";return o=null!==n&&0!==n.length?n[2].url:"https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif",{title:t,text:e,date:this.formatDate(r),img:o,category:s,id:a,url:i}}))}}})),s.register("cky31",(function(t,r){e(t.exports,"markup",(function(){return n}));var a=s("jJkRO");s("335mm");const n={createGalleryCardMarkup:e=>e.map((({img:e,title:t,text:r,date:n,id:s,category:i,url:o})=>`<li id="${s}" class="gallery__item">\n  <div class="gallery-thumb" style="background-image: url('${e}')">\n      <p class="gallery-thumb__subtitle">${i}</p>\n      <p class="gallery-thumb__already">\n        Already read\n      </p>\n    ${(0,a.checkPresentArticle)(s)?'<button type="button" class="gallery-thumb__btn"><p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p></button>':'<button type="button" class="gallery-thumb__btn"><p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p></button>'}\n  </div>\n    <h3 class="gallery__title">${t}</h3>\n    <p class="gallery__text">${r}</p>\n      <div class="thumb">\n        <p class="thumb__text">${n}</p>\n        <a class="thumb__link" href="${o}" target="_blank">Read more</a>\n      </div>\n</li>`)).join(""),clearMarkup(e){e.innerHTML=""},renderMarkup(e,t){e.insertAdjacentHTML("beforeend",t)}}})),s.register("335mm",(function(t,r){function a(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}function n(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch(e){console.error("Get state error: ",e.message)}}e(t.exports,"setToLS",(function(){return a})),e(t.exports,"getFromLS",(function(){return n}))})),s("jJkRO");
//# sourceMappingURL=favorites.77d50755.js.map
