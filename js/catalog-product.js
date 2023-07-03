const categorys = localStorage.getItem("category");
const btn = document.querySelectorAll(".nav-hamburger button img");
const toggle = document.querySelector(".toggle");
const login = document.querySelector(".nav-right-login");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".modal-close-btn");

///// BreadCrupm code start
let breadCrump = "";
breadCrump += `  
    <a href="index.html">Главная</a>
    <img src="./assets/images/categories/next.svg" alt="" />
    <a href="catalog.html">Каталог</a>      
    <img src="./assets/images/categories/next.svg" alt="" />
    <a href="catalog-product.html">${categorys}</a>
     `;
document.querySelector(".item").innerHTML = breadCrump;
// BreadCrupm code end

///// Pagetitle start
let pageTitle = "";
pageTitle += `<h2>${categorys}</h2>`;
document.querySelector(".catalog__header").innerHTML = pageTitle;
///// Pagetitle end

///// Card Product code start
let cardProduct = "";
products
  .filter((el) => el.category === categorys)
  .map((item) => {
    cardProduct += `
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
    document.querySelector(".catalog__footer-product").innerHTML = cardProduct;
  });
///// Card Product code end

///////// Dropdown toggle code start
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
