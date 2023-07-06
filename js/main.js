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

////// Like code start
const likedProds = [];

const likeProduct = (id) => {
  if (localStorage.getItem("like")) {
    likedProds.concat(JSON.parse(localStorage.getItem("like")));
    if (!likedProds.includes(products.find((prod) => prod.id === id))) {
      likedProds.push(products.find((prod) => prod.id === id));
      localStorage.setItem("like", JSON.stringify(likedProds));
    } else {
      likedProds.splice(likedProds.indexOf(products.find((prod) => prod.id === id)), 1);
      localStorage.setItem("like", JSON.stringify(likedProds));
    }
  } else {
    likedProds.push(products.find((prod) => prod.id === id));
    localStorage.setItem("like", JSON.stringify(likedProds));
  }
};
// Like code end
