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
  let sum = 0;

  if (copyPrice <= 0) {
    copyPrice = price;
  }
  let input = document.querySelector(".qty");
  let minc = document.querySelector(".qtyminus");
  let plus = document.querySelector(".qtyplus");
  if (localStorage.getItem("sum")) {
    document.querySelector(".price").innerHTML = localStorage.getItem("sum");
    input.value = localStorage.getItem("pAndm");
  }
  input.addEventListener("click", function (e) {});

  let priceOfDollar = 15_000;
  minc.addEventListener("click", function (e) {
    input.value > 1
      ? (input.value -= 1) &&
        (document.querySelector(".price").innerHTML = `${
          (sum = (
            parseFloat(document.querySelector(".price").innerHTML) -
            parseFloat(copyPrice)
          ).toFixed(2)) + "$"
        } `)
      : input.value;
    localStorage.setItem("sum", sum);
    localStorage.setItem("pAndm", input.value);

    console.log(sum);
  });

  plus.addEventListener("click", function (e) {
    input.value < 1000
      ? (input.value = parseFloat(input.value) + 1)
      : input.value;
    sum = document.querySelector(".price").innerHTML = `${(
      parseFloat(price) * input.value
    ).toFixed(2)}$`;
    console.log(sum);
    localStorage.setItem("sum", sum);
    localStorage.setItem("pAndm", input.value);
  });

  button.onclick = function () {
    let num = "+96176795291";
    let link = (document.querySelector(".linkOfIcon").href = image);
    const message = `${encodeURIComponent(link)}%0Aname: ${name1}%0Aprice: ${
      sum || price
    }%0Aquantity: ${input.value || "1"}%0Adescription:${paragraph}`;
    window.location.href = `https://wa.me/${num}?text=${message}`;
  };
}
