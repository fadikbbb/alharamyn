// Function to toggle the sidebar and change menu icon
  function toggleSidebar() {
    const bar = document.querySelector("#menu-bar");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
    bar.classList.toggle("fa-bars");
    bar.classList.toggle("fa-x");
  }
  
  // Function to handle sending WhatsApp message
  function sendWhatsAppMessage(target) {
    const name = target.parentNode.childNodes[3].innerHTML;
    const price = target.parentNode.childNodes[5].innerHTML;
    const image = encodeURIComponent(target.parentNode.childNodes[1].src);
    const num = "+96176795291";
    const message = `image: ${image}%0Aprice: ${price}%0Aname: ${name}`;
    window.location.href = `https://wa.me/${num}?text=${message}`;
  }

  // Function to handle search functionality
  function search() {
    const searchInput = document.querySelector(".search");
    const nameContents = document.querySelectorAll(".title-content");
    const obj = document.querySelector(".object");
    const val1 = searchInput.value.toUpperCase();
    obj.innerHTML = "";
    nameContents.forEach((nameContent, i) => {
      const content = nameContent.parentNode;
      const contentClone = content.cloneNode(true);
      //styles to cloned content
      contentClone.childNodes[1].style.cssText = `
 width:30px;
 height:30px;`;
      contentClone.childNodes[3].style.cssText = `
 font-size: 10px`;
      contentClone.childNodes[5].style.cssText = `
 display: flex;
 font-size: 10px;
 flex-direction: column;
 `;
      contentClone.childNodes[7].style.cssText = `
 display: none`;
      contentClone.childNodes[9].style.cssText = `
 display: none`;
      contentClone.style.cssText = `
 display:flex;
 flex-direction: row;
 justify-content: space-between;
background-color: gold;
margin-left: 10px;
margin-right: 10px;
margin-top: 0px;
margin-bottom: 10px;

`;

      if (nameContent.innerHTML.toUpperCase().includes(val1)) {
        obj.appendChild(contentClone);
      } else {
        contentClone.style.display = "none";
      }
    });
  }

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
  document.querySelector("#search-icon").addEventListener("click", () => {
    const searchInput = document.querySelector(".search");
    const searchSign = document.querySelector(".fa-caret-down");
    const obj = document.querySelector(".object");
    searchInput.classList.toggle("research");
    searchInput.style.display = searchInput.classList.contains("research")
      ? "flex"
      : "none";
    searchInput.style.display = searchInput.classList.contains("research")
      ? "flex"
      : "none";
    searchSign.style.display = searchInput.classList.contains("research")
      ? "flex"
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
  });

  // Event listener for searching
  document.querySelector(".search").addEventListener("input", search);
});

// Event delegation for clicking on product items
document.addEventListener("click", (e) => {
  const targetClasses = [
    "image-content",
    "paragraph-content",
    "content",
    "title-content",
    "price",
  ];
  if (targetClasses.some((cls) => e.target.classList.contains(cls))) {
    const target = e.target.classList.contains("content")
      ? e.target
      : e.target.parentNode;
    const ele1 = target.childNodes[1].src;
    const ele2 = target.childNodes[3].innerHTML;
    const ele3 = target.childNodes[5].innerHTML;
    const ele4 = target.childNodes[7].innerHTML;
    localStorage.setItem("ele1", ele1);
    localStorage.setItem("ele2", ele2);
    localStorage.setItem("ele3", ele3);
    localStorage.setItem("ele4", ele4);
    console.log(e.target.id);
    location.href = `index1.html?name=product-${
      e.target.classList.contains("content")
        ? e.target.id
        : e.target.parentNode.id
    }`;
  }
});
