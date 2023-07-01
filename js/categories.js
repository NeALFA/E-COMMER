let card = "";

categories.map((item) => {
  card += `<div class="catalog__footer--card">
  <img src="./assets/images/categories/img.png" alt="" />
    <a onclick="localStorage.setItem('category', '${item.name}')" href="#">${item.name}</a>
  </div>`;
  document.querySelector(".catalog__footer").innerHTML = card;
});
console.log(localStorage.getItem('category'));