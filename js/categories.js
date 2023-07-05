///// Card mapping code start
let card = "";
categories.map((item) => {
  card += `<div class="catalog__footer--card">
  <img src="${item.image}" alt="" />
    <a onclick="localStorage.setItem('category', '${item.name}')" href="./catalog-product.html">${item.name}</a>
  </div>`;
  document.querySelector(".catalog__footer").innerHTML = card;
});
///// Card mapping code end
