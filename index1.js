if (localStorage.getItem("ele1")) {
  let image = (document.getElementById("ele-img").src =
    localStorage.getItem("ele1"));
  let name1 = (document.getElementById("ele-title").innerHTML =
    localStorage.getItem("ele2"));
  let price = (document.querySelector(".price").innerHTML =
    localStorage.getItem("ele3"));
  let paragraph = (document.querySelector(".ele-paragraph").innerHTML =
    localStorage.getItem("ele4"));
  let button = document.querySelector(".accept");
  let copyPrice = 0;
  if (copyPrice <= 0) {
    copyPrice = price;
  }
  let input = document.querySelector(".qty");
  let minc = document.querySelector(".qtyminus");
  minc.addEventListener("click", function () {
    input.value > 1
      ? (input.value -= 1) &&
        (document.querySelector(".price").innerHTML = `${
          parseFloat(document.querySelector(".price").innerHTML) -
          parseFloat(copyPrice)
        }$`)
      : input.value;
  });
  let plus = document.querySelector(".qtyplus");
  plus.addEventListener("click", function () {
    input.value < 20
      ? (input.value = parseFloat(input.value) + 1)
      : input.value;
    // console.log(parseFloat(price)*input.value)
    document.querySelector(".price").innerHTML = `${
      parseFloat(price) * input.value
    }$`;
  });
  button.onclick = function () {
    let num = "+96176795291";
    const message = `image: ${encodeURIComponent(
      image
    )}%0Aname: ${name1}%0Aprice: ${price}quantity:${input.value}%0description:${paragraph}`;
    window.location.href = `https://wa.me/${num}?text=${message}`;
  };
}
