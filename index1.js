let image, name1, price, paragraph, sum, copyPrice, button;
let input = document.querySelector(".qty");
let minc = document.querySelector(".qtyminus");
let plus = document.querySelector(".qtyplus");
if (localStorage.getItem("ele1")) {
  image = document.getElementById("ele-img").src = localStorage.getItem("ele1");
  name1 = document.getElementById("ele-title").innerHTML =
    localStorage.getItem("ele2");
  price = document.querySelector(".price").innerHTML =
    localStorage.getItem("ele3");
  paragraph = document.querySelector(".ele-paragraph").innerHTML =
    localStorage.getItem("ele4");
  button = document.querySelector(".accept");
  sum = 0;
}

if (localStorage.getItem("sum")) {
  document.querySelector(".price").innerHTML = localStorage.getItem("sum");
  input.value = localStorage.getItem("pAndm");
}
let ElementPrice = document.querySelector(".price");
let currencySelector = document.getElementById("currencySelector");
let currencyS = "SYP";
copyPrice = price;
currencySelector.addEventListener("change", function () {
  input.value = 1;
  function updatePrice() {
    let exchangeRate = 15000;
    let selectedCurrency = currencySelector.value;
    if (selectedCurrency === "USD") {
      currencyS = "USD";
      ElementPrice.innerHTML = `${(parseInt(price) / exchangeRate).toFixed(
        2
      )} USD`;
      copyPrice = ElementPrice.innerHTML;
    } else if (selectedCurrency === "SYP") {
      currencyS = "SYP";
      ElementPrice.innerHTML = `${parseInt(price)}SYP`;
      copyPrice = ElementPrice.innerHTML;
    }
  }
  updatePrice();
});
plus.addEventListener("click", function () {
  if (input.value < 10) {
    (input.value = parseInt(input.value || 1) + 1) &&
      (ElementPrice.innerHTML = `${(
        parseFloat(copyPrice) * input.value
      ).toFixed(2)} ${currencyS}`);
  }
});
minc.addEventListener("click", function () {
  if (input.value > 1) {
    (input.value -= 1) &&
      (ElementPrice.innerHTML = `${(
        parseFloat(copyPrice) * input.value
      ).toFixed(2)} ${currencyS}`);
  }
});

document.querySelector("#search-icon").remove();
button.onclick = function () {
  let num = "+96176795291";
  let link = (document.querySelector(".linkOfIcon").href = image);
  const message = `${encodeURIComponent(link)}%0Aname: ${name1}%0Aprice: ${
    ElementPrice.innerHTML || price
  }%0Aquantity: ${input.value || "1"}%0Adescription:${paragraph}`;
  window.location.href = `https://wa.me/${num}?text=${message}`;
};
// localStorage.clear()
