let bar = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let accept = document.querySelectorAll(".accept");
let all = document.querySelectorAll("section");
let linksOfNav = document.querySelectorAll(".menu a");
let container = document.querySelector(".container");
bar.onclick = function () {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    bar.classList.replace("fa-bars", "fa-bars-staggered");
  } else {
    bar.classList.replace("fa-bars-staggered", "fa-bars");
  }
};
document.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.target.classList.contains("accept"));
  if (e.target.classList.contains("accept")) {
    let name = e.target.parentNode.childNodes[3];
    let price = e.target.parentNode.childNodes[5];
    let image = e.target.parentNode.childNodes[1];
    let num = "+96176795291";
    const message = `image: ${encodeURIComponent(image.src)}%0Aprice: ${
      price.innerHTML
    }%0Aname: ${name.innerHTML}`;
    window.location.href = `https://wa.me/${num}?text=${message}`;
  }
});
let sreachIcon = document.querySelector("#sreach-icon");
let searchInput = document.querySelector(".sreach");
let nameContents = document.querySelector(".title-content");
// console.log(sreachIcon);
// console.log(sreachInput);

sreachIcon.addEventListener("click", function () {
  if (this.classList.contains("resreach")) {
    searchInput.style.cssText = `display:flex;
    `;
    this.classList.remove("resreach");
  } else {
    searchInput.style.cssText = `display:none;
    `;
    this.classList.add("resreach");
  }
});
