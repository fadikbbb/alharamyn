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
  console.log(e.target)
  console.log(e.target.classList.contains("accept"))
  if (e.target.classList.contains("accept")) {
  let name =e.target.parentNode.childNodes[3]
    let price=e.target.parentNode.childNodes[5]
   let image= e.target.parentNode.childNodes[1]
   location.href=`whatsapp://send?text=name ${name.innerHTML} \n price ${price.innerHTML} \n image ${this.location.pathname=image.src}`
  }
});
