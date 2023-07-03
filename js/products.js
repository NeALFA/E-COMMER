const searching = document.querySelector(".search-input");
const btn = document.querySelectorAll(".nav-hamburger button img");
const toggle = document.querySelector(".toggle");
const productsRow = document.querySelector(".product__footer");
const searchInput = document.querySelector(".search-input");
const pagination = document.querySelector(".pagination");
const login = document.querySelector(".nav-right-login");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".modal-close-btn");

/////Dropdown start
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
/////Dropdown end

///// Pagination start
function allProducts() {
  let productsAll = "";
  products.map((item) => {
    productsAll += `
    <div class="product__footer--card card">
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
    </div>`;
  });
  // document.querySelector(".product__footer").innerHTML = productsAll;
}

allProducts();

let search = "";

let page = 1;

const LIMIT = 8;

let pages;

function getProductCard(item) {
  return `
    <div class="product__footer--card card">
    <div class="card--img">
      <img src="${item.images[0]}" alt="" />
      <img
        class="card-like-img"
        src="./assets/images/home/icon-like.svg"
        alt=""
      />
      ${item.discount > 0 ? `<p class="discount">${item.discount} %</p>` : ""}
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
    </div>`;
}

function getProducts() {
  var resultsProducts = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  productsRow.innerHTML = ``;

  pages = Math.ceil(resultsProducts.length / LIMIT);

  getPagination();

  let start = (page - 1) * LIMIT;
  let end = start + LIMIT;

  resultsProducts.slice(start, end).map((pr) => {
    productsRow.innerHTML += getProductCard(pr);
  });
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPagination() {
  if (pages > 1) {
    pagination.innerHTML = `<li class="page-item ${
      page === 1 ? "disabled" : ""
    }"><button onClick="getPage('-')" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-239 239-480l241-241 42 42-168 169h526v60H354l169 169-43 42Zm-400-1v-480h60v480H80Z"/></svg></button></li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item ${
        page === i ? "active" : ""
      }"><button onClick="getPage(${i})" class="page-link">${i}</button></li>`;
    }

    pagination.innerHTML += `<li class="page-item ${
      page === pages ? "disabled" : ""
    }"><button onClick="getPage('+')" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m480-239-43-42 169-169H80v-60h526L438-679l42-42 241 241-241 241Zm340-1v-480h60v480h-60Z"/></svg></button></li>`;
  } else {
    pagination.innerHTML = "";
  }
}

function getPage(p) {
  if (p === "-") {
    page--;
  } else if (p === "+") {
    page++;
  } else {
    page = p;
  }
  productsRow.innerHTML = ``;
  getProducts();
}
///// Pagination end

///// Modal start

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
///// Modal end
