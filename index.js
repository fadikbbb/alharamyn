let bar = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");
bar.onclick = function () {
  nav.classList.toggle("active");

  if(nav.classList.contains("active")){
      bar.classList.replace("fa-bars", "fa-bars-staggered");
}else{
      bar.classList.replace("fa-bars-staggered", "fa-bars");

  }
};
