import { refs } from '../js/refs/fav-refs';


// function generateHTML(data) {
    //     let html = "";
    //     data.forEach(function(item) {
    //       html += `
    //         <div class="card">
    //           <img src="images/asia.png" alt="">
    //           <div class="description__card">
    //             <h2 class="title__card"></h2>
    //             <p class="subtitle__card"></p>
    //           </div>
    //         </div>
    //       `;
    //     });
    //     return html;
    //   }

document.getElementById("click-btn").addEventListener("click", function() {
    container = document.createElement("div");
    const readContainer = document.querySelector('.read-container')
    const { newList, text } = refs;
    container.classList.add("item__position");
    container.innerHTML = `
  <div class="card">
    <img src="images/asia.png" alt="">
    <div class="description__card">
      <h2 class="title__card">
        ${refs[0]}
      </h2>
      <p class="subtitle__card">
        ${refs[0]}
      </p>
    </div>
  </div>
  <div class="card">
    <img src="images/asia.png" alt="">
    <div class="description__card">
      <h2 class="title__card">
        ${refs[0]}
      </h2>
      <p class="subtitle__card">
        ${refs[0]}
      </p>
    </div>
  </div>
  <div class="card">
    <img src="images/asia.png" alt="">
    <div class="description__card">
      <h2 class="title__card">
        ${refs[0]}
      </h2>
      <p class="subtitle__card">
        ${refs[0]}
      </p>
    </div>
  </div>
`;
    readContainer.appendChild(container);
  });