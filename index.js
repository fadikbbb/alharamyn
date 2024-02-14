//whatsapp and side bar
let bar = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let accept = document.querySelectorAll(".accept");
let all = document.querySelectorAll("section");
let linksOfNav = document.querySelectorAll(".menu a");
bar.onclick = function () {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    bar.classList.replace("fa-bars", "fa-x");
  } else {
    bar.classList.replace("fa-x", "fa-bars");
  }
};
document.addEventListener("click", function (e) {
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
//search
let val1;
let searchIcon = document.querySelector("#search-icon");
let searchInput = document.querySelector(".search");
let content = document.querySelectorAll(".content");
let nameContents = document.querySelectorAll(".title-content");
let obj = document.querySelector(".object");
let searchSign = document.querySelector(".fa-caret-down");
let contentClone;
searchInput.addEventListener("input", function () {
  val1 = searchInput.value.toUpperCase();
});
function search() {
  obj.innerHTML = "";
  for (let i = 0; i < nameContents.length; i++) {
    contentClone = content[i].cloneNode(true);
    contentClone.childNodes[1].style.cssText = `width:30px;
                                                height:30px;`;
    contentClone.childNodes[3].style.cssText = `font-size: 10px`;
    contentClone.childNodes[5].style.cssText = `display: flex;
                                                font-size: 10px;
                                                flex-direction: column;
                                                `;
    contentClone.childNodes[7].style.cssText = `display: none`;
    contentClone.childNodes[9].style.cssText = `display: none`;
    contentClone.style.cssText = `display:flex;
                                  flex-direction: row;
                                  justify-content: space-between;
                                  background-color: gold;
                                  margin-left: 10px;
                                  margin-right: 10px;
                                  margin-top: 0px;
                                  `;

    if (nameContents[i].innerHTML.toUpperCase().indexOf(val1) >= 0) {
      obj.append(contentClone);
    } else {
      contentClone.style.cssText = `display: none;`;
    }
  }
}

searchIcon.addEventListener("click", function () {
  if (this.classList.contains("research")) {
    searchInput.style.cssText = `
    display:flex;
    `;
    searchSign.style.cssText = `
    display: block;`;
    obj.style.cssText = `
    display: flex;
    flex-direction:column;
    gap: 10px;
    height: 170px;
    text-align: center;
     outline: 1px solid black;`;
    this.classList.remove("research");
  } else {
    searchSign.style.cssText = `
    display: none;`;
    searchInput.style.cssText = `
    display:none;`;
    obj.style.cssText = `
    display:none;`;
    obj.style.cssText = `
    height: 0px;`;
    this.classList.add("research");
  }
});
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("image-content") ||
    e.target.classList.contains("paragraph-content") ||
    e.target.classList.contains("content") ||
    e.target.classList.contains("title-content") ||
    e.target.classList.contains("price")
  ) {
    let ele1 = document.createElement("img");
    ele1.className = "ele-img";
    let ele2 = document.createElement("div");
    ele2.className = "ele-title";
    let ele3 = document.createElement("div");
    ele3.className = "ele-price";
    let  targetName;

    if (e.target.classList.contains("content")) {
      console.log(e.target.childNodes);
      ele1.src = e.target.childNodes[1].src;
      ele2.innerHTML = e.target.childNodes[3].innerHTML;
      ele3.innerHTML = e.target.childNodes[5].innerHTML;
      targetName = e.target.childNodes[3].innerHTML;
    } else {
      ele1.src = e.target.parentNode.childNodes[1].src;
      ele2.innerHTML = e.target.parentNode.childNodes[3].innerHTML;
      ele3.innerHTML = e.target.parentNode.childNodes[5].innerHTML;
      targetName = e.target.parentNode.childNodes[3].innerHTML;
    }
    location.href = `index1.html?name=product-${targetName}`;
    localStorage.setItem("ele1", ele1.src);
    localStorage.setItem("ele2", ele2.innerHTML);
    localStorage.setItem("ele3", ele3.innerHTML);
  }
});
// localStorage.clear()
