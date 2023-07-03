const card = localStorage.getItem("category");
function stcokHeader() {
  return `    <div class="stock__header" style="padding-top: 80px">
    <h2>${card}</h2>
  </div>
  <div class="stock__footer">
 
  </div>`;
}
document.querySelector(".ctock").innerHTML = stcokHeader();

if ("Акции" === card) {
  let htmlDiscountProducts = "";
  products
    .filter((el) => el.discount > 0)
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
} else if ("Новинки" === card) {
  let newLastProducts = "";

  products.map((item) => {
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
  document.querySelector(".stock__footer").innerHTML = newLastProducts;
} else if ("Покупали раньше" === card) {
  let lastRatingProducts = "";
  let productsCopy = [...products];
  let RatingProducts = productsCopy
    .sort((a, b) => b.rating - a.rating)
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

  document.querySelector(".stock__footer").innerHTML = lastRatingProducts;
}
