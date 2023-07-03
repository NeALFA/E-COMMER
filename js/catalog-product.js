const categorys = localStorage.getItem("category");

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
