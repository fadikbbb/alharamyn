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
  if (localStorage.getItem("sum")) {
    document.querySelector(".price").innerHTML = localStorage.getItem("sum");
  }
  if (copyPrice <= 0) {
    copyPrice = price;
  }
  let input = document.querySelector(".qty");
  let minc = document.querySelector(".qtyminus");
  let plus = document.querySelector(".qtyplus");
  input.addEventListener("click",function(e){
e.preventDefault()
  })
  minc.addEventListener("click", function (e) {
    e.preventDefault()
    input.value > 1
    ? (input.value -= 1) &&
        (document.querySelector(".price").innerHTML = `${(sum =
          parseFloat(document.querySelector(".price").innerHTML) -
          parseFloat(copyPrice))+"$"} `)
      : input.value;
    localStorage.setItem("sum", sum);
    console.log(sum);
  });
  

  plus.addEventListener("click", function (e) {
    e.preventDefault()
    input.value < 1000
      ? (input.value = parseFloat(input.value) + 1)
      : input.value;
    sum = document.querySelector(".price").innerHTML = `${
      parseFloat(price) * input.value
    }$`;
    console.log(sum);
    localStorage.setItem("sum", sum);
  });
  button.onclick = function () {
    let num = "+96176795291";
    const message = `image: ${encodeURIComponent(
      image
    )}%0Aname: ${name1}%0Aprice: ${sum||price}%0Aquantity: ${
      input.value || "1"
    }%0Adescription: ${paragraph}`;
    window.location.href = `https://wa.me/${num}?text=${message}`;
  };
}
