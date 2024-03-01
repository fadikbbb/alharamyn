// Function to toggle the sidebar and change menu icon
function toggleSidebar() {
  const bar = document.querySelector("#menu-bar");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  if (bar.innerHTML.trim() == "menu") {
    bar.innerHTML = "close";
  } else {
    bar.innerHTML = "menu";
  }
}
//transtion between cards
function listT(section) {
  let counter = 0;
  let countProduct = document.querySelector(`${section} .countProduct`);
  let left = document.querySelector(`${section} .fa-arrow-left`);
  let right = document.querySelector(`${section} .fa-arrow-right`);
  let offer = document.querySelectorAll(`${section} .cho .content`);
  document.querySelector(`${section} .nbOfProduct`).innerHTML = offer.length;

  right.onclick = function () {
    if (counter < offer.length - 1) {
      counter++;
      countProduct.innerHTML = counter + 1;
      offer[counter].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      updateOfferStyles();
    }
  };
  left.onclick = function () {
    if (counter > 0) {
      counter--;
      countProduct.innerHTML = counter + 1;
      offer[counter].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      updateOfferStyles();
    }
  };
  function updateOfferStyles() {
    offer.forEach((element, index) => {
      if (index === counter) {
        element.style.transform = "scale(1.2)";
      } else {
        element.style.transform = "scale(1)";
      }
    });
  }
}
let typeOfProduct = [
  ".offer",
  ".raha",
  ".choclate",
  ".candy",
  ".Nuts",
  ".mawalih",
  ".Crisps",
];
typeOfProduct.forEach((e) => {
  listT(e);
});
// Function to handle sending WhatsApp message
function sendWhatsAppMessage(target) {
  const name = target.parentNode.childNodes[3].innerHTML;
  const price = target.parentNode.childNodes[5].innerHTML;
  const image = encodeURIComponent(
    target.parentNode.childNodes[1].childNodes[1].src
  );
  const num = "+96176795291";
  const message = `image: ${image}%0Aprice: ${price}%0Aname: ${name}`;
  window.location.href = `https://wa.me/${num}?text=${message}`;
}
// Function to handle search functionality
const searchInput = document.querySelector(".search");
const nameContents = document.querySelectorAll(".title-content");
const obj = document.querySelector(".object");
document.querySelector(".search").addEventListener("input", function search() {
  const val1 = searchInput.value.toUpperCase();
  obj.innerHTML = "";
  nameContents.forEach((nameContent, i) => {
    const content = nameContent.parentNode;
    const contentClone = content.cloneNode(true);
    contentClone.childNodes[1].style.cssText = `width:30px; height:30px;`;
    contentClone.childNodes[3].style.cssText = `font-Size: 20px; margin:0;text-align: center;color:#a86500;`;
    contentClone.childNodes[5].style.cssText = `display: flex; font-size: 10px; color:#a86500; margin:0px 21px 0px 0px; flex-direction: column;`;
    contentClone.childNodes[7].style.display = "none";
    contentClone.childNodes[9].style.display = "none";
    contentClone.style.cssText = `display:flex; flex-direction: row;algin-item:cnter;width:100%; justify-content: space-between;border-radius:0; background-color: rgb(251 208 142); margin:0; `;
    if (nameContent.innerHTML.toUpperCase().includes(val1)) {
      obj.appendChild(contentClone);
    } else {
      contentClone.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for toggling sidebar
  document.querySelector("#menu-bar").addEventListener("click", toggleSidebar);
  // Event listener for accepting in WhatsApp
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("accept")) {
      sendWhatsAppMessage(e.target);
    }
  });
  // Event listener for search icon
  const searchInput = document.querySelector(".search");
  const searchSign = document.querySelector(".fa-caret-down");
  const obj = document.querySelector(".object");
  const iconSearch = document.querySelector("#search-icon");
  iconSearch.addEventListener("click", () => {
    searchInput.classList.toggle("research");
    searchInput.style.display = searchInput.classList.contains("research")
      ? "flex"
      : "none";
    searchInput.style.display = searchInput.classList.contains("research")
      ? "flex"
      : "none";
    searchSign.style.cssText = searchInput.classList.contains("research")
      ? `display:flex;
      color:#ff7300;`
      : "none";
    obj.style.display = searchInput.classList.contains("research")
      ? "flex"
      : "none";
    obj.style.height = searchInput.classList.contains("research")
      ? "170px"
      : "0px";
    obj.style.flexDirection = searchInput.classList.contains("research")
      ? "column"
      : "";
    iconSearch.style.cssText = searchInput.classList.contains("research")
      ? `color:#ff7300`
      : "";
  });
});
// Event delegation for clicking on product items
document.addEventListener("click", (e) => {
  const targetClasses = [
    "image-content",
    "paragraph-content",
    "content",
    "title-content",
    "price",
    "container-img",
  ];
  if (targetClasses.some((cls) => e.target.classList.contains(cls))) {
    const target = e.target.classList.contains("content")
      ? e.target
      : e.target.classList.contains("image-content")
      ? e.target.parentNode.parentNode
      : e.target.parentNode;
    const ele1 = target.childNodes[1].childNodes[1].src;
    const ele2 = target.childNodes[3].innerHTML;
    const ele3 = target.childNodes[5].innerHTML;
    const ele4 = target.childNodes[7].innerHTML;
    console.log(
      target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML
    );
    const ele5 =
      target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
    localStorage.clear();
    localStorage.setItem("ele1", ele1);
    localStorage.setItem("ele2", ele2);
    localStorage.setItem("ele3", ele3);
    localStorage.setItem("ele4", ele4);
    localStorage.setItem("ele5", ele5);
    location.href = `index1.html?name=product-${ele5}`;
  }
});
