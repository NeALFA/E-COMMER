const like = JSON.parse(localStorage.getItem("like"));

let cardProduct = "";
like.map((item) => {
  cardProduct += `

    <div class="stock__footer--card card">
    <div class="card--img">
      <img src="${item.images[0]}" alt="" />
      <img onclick="likeProduct(${item.id})"
        class="card-like-img"
        src="./assets/images/home/icon-like.svg"
        alt=""
      />
      <p class="discount">${item.discount} %</p>
    </div>
    <div class="card--price">
      <div>
        <a class="a-one" href="#"
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
    <a href="product.html">
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
    </a>
      <button>В корзину</button>
    </div>
  </div>
    `;
  document.querySelector(".favorite__footer-product").innerHTML = cardProduct;
});
