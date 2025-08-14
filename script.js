import { data } from "./data.js";

const bodyEl = document.querySelector("body");
const imgEl = document.querySelectorAll(".img");
const screenEl = document.querySelector(".screen");
const ctaBtn = [...document.querySelectorAll(".cta-btn")];
const modeBtn = document.querySelector(".mode-btn");
let html;

modeBtn.addEventListener("click", function () {
  imgEl[0].classList.contains("active")
    ? (imgEl[0].classList.remove("active"), imgEl[1].classList.add("active"))
    : (imgEl[0].classList.add("active"), imgEl[1].classList.remove("active"));
  bodyEl.classList.toggle("dark-mode");
});
//
function defaultAppending() {
  screenEl.innerHTML = "";
  html = data
    .map((dta) => {
      return `
        <div class="card">
  <div class="card__top">
    <div class="card__top__logo">
      <img src=${dta.logo} />
    </div>
    <div class="card__top__text">
      <h3 class="card__top__text--name">${dta.name}</h3>
      <p class="card__top__text--desc">${dta.description}</p>
    </div>
  </div>
  <div class="card__bottom">
  <div class="card__bottom__remove">
  <button class="remove btn">Remove</button>
  </div>
<div class="card__bottom__toggle">
<button class="toggle-btn btn ${dta.isActive ? "active" : ""}"><span class=${
        dta.isActive ? "active" : ""
      }></span></button>
</div>
  </div>
</div>
        `;
    })
    .join("");

  screenEl.insertAdjacentHTML("beforeend", html);
}
defaultAppending();

// adding event listener to call to action buttons in etension list

ctaBtn[0].addEventListener("click", function () {
  defaultAppending();
  console.log("all");
});
ctaBtn[1].addEventListener("click", function () {
  let fitlerArray = data.filter((d) => {
    return d.isActive === true;
  });
  console.log(fitlerArray);
  html = fitlerArray
    .map((dta) => {
      return `
        <div class="card">
  <div class="card__top">
    <div class="card__top__logo">
      <img src=${dta.logo} />
    </div>
    <div class="card__top__text">
      <h3 class="card__top__text--name">${dta.name}</h3>
      <p class="card__top__text--desc">${dta.description}</p>
    </div>
  </div>
  <div class="card__bottom">
  <div class="card__bottom__remove">
  <button class="remove btn">Remove</button>
  </div>
<div class="card__bottom__toggle">
<button class="toggle-btn btn ${dta.isActive ? "active" : ""}"><span class=${
        dta.isActive ? "active" : ""
      }></span></button>
</div>
  </div>
</div>
        `;
    })
    .join("");
  screenEl.innerHTML = "";
  screenEl.insertAdjacentHTML("beforeend", html);
  console.log("active");
});
ctaBtn[2].addEventListener("click", function () {
  let fitlerArray = data.filter((d) => {
    return d.isActive === false;
  });
  html = fitlerArray
    .map((dta) => {
      return `
        <div class="card">
  <div class="card__top">
    <div class="card__top__logo">
      <img src=${dta.logo} />
    </div>
    <div class="card__top__text">
      <h3 class="card__top__text--name">${dta.name}</h3>
      <p class="card__top__text--desc">${dta.description}</p>
    </div>
  </div>
  <div class="card__bottom">
  <div class="card__bottom__remove">
  <button class="remove btn">Remove</button>
  </div>
<div class="card__bottom__toggle">
<button class="toggle-btn btn ${dta.isActive ? "active" : ""}"><span class=${
        dta.isActive ? "active" : ""
      }></span></button>
</div>
  </div>
</div>
        `;
    })
    .join("");
  screenEl.innerHTML = "";
  screenEl.insertAdjacentHTML("beforeend", html);
});
