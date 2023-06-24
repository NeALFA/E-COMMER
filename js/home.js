const btn = document.querySelector(".nav-hamburger button");
const toggle = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  if (toggle.style.height == "0px") {
    toggle.style.height = "auto";
    toggle.style.paddingTop = "40px";
    toggle.style.paddingBottom = "40px";
  } else {
    toggle.style.height = "0";
    toggle.style.paddingTop = "0";
    toggle.style.paddingBottom = "0";
  }
});

let htmlDiscountProducts = "";
products
  .filter((el) => el.discount > 0)
  .slice(0, 4)
  .map((item) => {
    htmlDiscountProducts += `
    <div class="stock__footer--card">
    <div class="card--img">
      <img src="${item.images[0]}" alt="" />
      <img
        class="card-like-img"
        src="./assets/images/home/icon-like.svg"
        alt=""
      />
      <p class="discount">${item.discount} %</p>
    </div>
    <div class="card--price">
      <div>
        <a href="#"
          >${item.price - (item.price * item.discount) / 100} ₽
          <p>С картой</p>
        </a>
      </div>
      <div>
        <a class="a-two" href="#"
          >${item.price} ₽
          <p>Обычная</p>
        </a>
      </div>
    </div>
    <div class="card--button">
      <p>
        ${item.description}
      </p>
      <div class="card-star">
      ${Array(Math.round(item.rating))
        .fill(0)
        .map((el) => {
          return `<img src="./assets/images/home/star-1.svg" alt="" />`;
        })
        .join("")}${Array(Math.round(5 - item.rating))
      .fill(0)
      .map((el) => {
        return `<img src="./assets/images/home/star-2.svg" alt="" />`;
      })
      .join("")}
      </div>
      <button>В корзину</button>
    </div>
  </div>
    `;
  });
document.querySelector(".stock__footer").innerHTML = htmlDiscountProducts;

let newLastProducts = "";

products.slice(-4).map((item) => {
  newLastProducts += `<div class="stock__footer--card">
  <div class="card--img">
    <img src="${item.images[0]}" alt="" />
    <img
      class="card-like-img"
      src="./assets/images/home/icon-like.svg"
      alt=""
    />
  </div>
  <div class="card--price">
    <div>
      <a href="#">${item.price} ₽ </a>
    </div>
  </div>
  <div class="card--button">
    <p>
      Г/Ц Блинчики с мясом вес, <br />
      Россия
    </p>
    <div class="card-star">
    ${Array(Math.round(item.rating))
      .fill(0)
      .map((el) => {
        return `<img src="./assets/images/home/star-1.svg" alt="" />`;
      })
      .join("")}${Array(Math.round(5 - item.rating))
    .fill(0)
    .map((el) => {
      return `<img src="./assets/images/home/star-2.svg" alt="" />`;
    })
    .join("")}
    </div>
    <button>В корзину</button>
  </div>
</div>`;
});

document.querySelector(".novinki__footer").innerHTML = newLastProducts;

let lastRatingProducts = "";
let productsCopy = [...products];
let RatingProducts = productsCopy
  .sort((a, b) => a.rating - b.rating)
  .slice(-4)
  .map(
    (item) =>
      (lastRatingProducts += `<div class="stock__footer--card">
<div class="card--img">
  <img src="${item.images[0]}" />
  <img
    class="card-like-img"
    src="./assets/images/home/icon-like.svg"
    alt=""
  />
</div>
<div class="card--price">
  <div>
    <a href="#">44,50 ₽ </a>
  </div>
</div>
<div class="card--button">
<h1>${item.name}</h1>
  <p>
    ${item.description}
  </p>
  <div class="card-star">
  ${Array(Math.round(item.rating))
    .fill(0)
    .map((el) => {
      return `<img src="./assets/images/home/star-1.svg" alt="" />`;
    })
    .join("")}${Array(Math.round(5 - item.rating))
        .fill(0)
        .map((el) => {
          return `<img src="./assets/images/home/star-2.svg" alt="" />`;
        })
        .join("")} ${item.rating}
  </div>
  <button>В корзину</button>
</div>
</div>`)
  );

document.querySelector(".bought__footer").innerHTML = lastRatingProducts;

const tabBTN = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

let active = 0;

function btnTAB() {
  tabContent.forEach((el, i) => {
    if (i !== active) {
      el.style.display = "none";
      tabBTN[i].classList.remove("active");
    } else {
      el.style.display = "block";
      tabBTN[i].classList.add("active");
    }
  });
}

btnTAB();

tabBTN.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i;
    btnTAB();
  });
});