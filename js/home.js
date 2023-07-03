///////// Dropdown toggle code start
const btn = document.querySelectorAll(".nav-hamburger button img");
const toggle = document.querySelector(".toggle");

btn.forEach((el) =>
  el.addEventListener("click", () => {
    if (toggle.style.height == "0px") {
      toggle.style.height = "auto";
      toggle.style.paddingTop = "40px";
      toggle.style.paddingBottom = "40px";
    } else {
      toggle.style.height = "0";
      toggle.style.paddingTop = "0";
      toggle.style.paddingBottom = "0";
    }
  })
);
// Dropdown toggle code end

///////// Discount card code start
let htmlDiscountProducts = "";
products
  .filter((el) => el.discount > 0)
  .slice(0, 4)
  .map((item) => {
    htmlDiscountProducts += `
    <div class="stock__footer--card card">
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
// Discoun card code end

///////// NewCard code start
let newLastProducts = "";

products.slice(-4).map((item) => {
  newLastProducts += `<div class="stock__footer--card card">
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
// NewCard code end

///////// Rating card code start
let lastRatingProducts = "";
let productsCopy = [...products];
let RatingProducts = productsCopy
  .sort((a, b) => a.rating - b.rating)
  .slice(-4)
  .map(
    (item) =>
      (lastRatingProducts += `<div class="stock__footer--card card">
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
        .join("")}
  </div>
  <button>В корзину</button>
</div>
</div>`)
  );

document.querySelector(".bought__footer").innerHTML = lastRatingProducts;
// Rating card code  end

///////// Ap-Tab code start
const tabBTN = document.querySelectorAll(".tab-button button");
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
// Ap-Tab code end

///////// Search code start
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => {
  let searchInputProducts = "";
  let a = products.filter((el) =>
    el.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  if (searchInput.value.length > 0) {
    document.querySelector(".search__input2").style.display = "block";
  } else {
    document.querySelector(".search__input2").style.display = "none";
  }
  a.map((item) => {
    searchInputProducts += `        
      <div class="search__input-box">
        <div class="search__input-card">
        <img src="${item.images[0]}" alt="Error" />
          <h3>${item.name}</h3>
          <p>${item.price} ₽</p>
        </div>
      </div>`;
  });
  document.querySelector(".search__input2").innerHTML = searchInputProducts;
});
// Search code end

///////// Modal code start

const login = document.querySelector(".nav-right-login");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".modal-close-btn");
login.addEventListener("click", function () {
  if (modal.style.marginTop <= "0px") {
    modal.style.marginTop = "0px";
    modal.style.opacity = "1";
    modal.style.zIndex = "999";
  }
});
closeBtn.addEventListener("click", function () {
  if (modal.style.marginTop == "0px") {
    modal.style.marginTop = "-1500px";
    modal.style.opacity = "0";
    modal.style.zIndex = "-999999";
  }
});
// Modal code end