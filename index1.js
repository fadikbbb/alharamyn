if (localStorage.getItem("ele1")) {
  let image = (document.getElementById("ele-img").src =
    localStorage.getItem("ele1"));
  let name1 = (document.getElementById("ele-title").innerHTML =
    localStorage.getItem("ele2"));
  let price = (document.getElementById("ele-price").innerHTML =
    localStorage.getItem("ele3"));
  let button = document.querySelector(".accept");
  button.onclick = function () {
    let num = "+96176795291";
    const message = `image: ${encodeURIComponent(
      image
    )}%0Aprice: ${price}%0Aname: ${name1}`;
    window.location.href = `https://wa.me/${num}?text=${message}`;
  };
}
