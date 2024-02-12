let bar = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let accept = document.querySelectorAll(".accept");
let all = document.querySelectorAll("section");
let linksOfNav = document.querySelectorAll(".menu a");
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

let val1;
let sreachIcon = document.querySelector("#sreach-icon");
let searchInput = document.querySelector(".sreach");
let content = document.querySelectorAll(".content");
let nameContents = document.querySelectorAll(".title-content");
let obj = document.querySelector(".object");
let contentClone;
searchInput.addEventListener("input", function () {
  val1 = searchInput.value.toUpperCase();
});
console.log(content[0].childNodes[3]);
function search() {
  obj.innerHTML = "";
  for (let i = 0; i < nameContents.length; i++) {
    contentClone = content[i].cloneNode(true);
    console.log(contentClone.childNodes)
    contentClone.childNodes[7].style.cssText = `display:none`;
    contentClone.childNodes[5].style.cssText = `font-size:10px`;
    contentClone.childNodes[3].style.cssText = `font-size:20px`;
    contentClone.childNodes[1].style.cssText = `width:30px;
    height:30px`;
    contentClone.style.cssText = `display:flex;
    flex-direction: row-reverse;`;
    if (nameContents[i].innerHTML.toUpperCase().indexOf(val1) >= 0) {
      console.log("test");
      obj.append(contentClone);
    } else {
    }
  }
}
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
  let allContent = document.querySelectorAll(".content");
});
