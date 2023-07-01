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

let card = "";

categories.map((item) => {
  card += `<div class="catalog__footer--card">
  <img src="${item.image}" alt="" />
    <a onclick="localStorage.setItem('category', '${item.name}')" href="#">${item.name}</a>
  </div>`;
  document.querySelector(".catalog__footer").innerHTML = card;
});
console.log(localStorage.getItem("category"));
