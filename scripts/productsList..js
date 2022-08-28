// let dataProducts = JSON.parse(localStorage.getItem("productsData"))

function display(data) {
  document.querySelector(".rowData").innerHTML = null;

  data.forEach(function (el) {

    let product = document.createElement("div");
    product.className = "columnData";

    let save = document.createElement("div")
    let icon = document.createElement("img");
    icon.src = "images/lightning-bolt.png";
    icon.className = "icon";
    save.innerText = el.save;
    save.setAttribute("class", "save");
    save.append(icon);

    let image = document.createElement("img");
    image.src = el.image;
    let image2 = document.createElement("img");
    image2.src = el.image2;
    image2.className = "hover-img";
    image2.addEventListener("click", function () {
      onclick(ele);
    });

    let firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "innerData");
    firstDiv.style.cursor = "pointer"

    let h4 = document.createElement("h4");
    h4.innerText = el.name;

    let img1 = document.createElement("img");
    img1.src =
      "https://t4.ftcdn.net/jpg/01/07/90/75/240_F_107907549_nGPdxVXnDgHqQ1lSJlYKidLLfWb6PuN2.jpg";

    let divR = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = "4.8 | 915 reviews";
    divR.append(p);

    let hr = document.createElement("hr");

    firstDiv.append(h4, img1, divR);

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "row2");

    let discount = document.createElement("div");
    discount.innerText = "₹" + el.discountPrice;

    let price = document.createElement("div");
    price.innerText = "₹" + el.price;

    priceDiv.append(discount, price);

    let youSave = document.createElement("div");
    youSave.innerText = "You Save :₹ " + el.yousave;
    youSave.setAttribute("class", "yousave");

    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.style.cursor = "pointer";
    btn.setAttribute("id", "cartbutton")
    btn.addEventListener("click", function () {
      addtoCart(el);
      mainCartFun()
    });

    firstDiv.append(hr, priceDiv, youSave, btn);
    product.append(image, image2, save, firstDiv);
    document.querySelector(".rowData").append(product);

  });
}
display(dataProducts);

// ADD TO CART

//COUNTER
let cartCounter = (counterText, count) => {

  let cartsData = JSON.parse(localStorage.getItem("cartsData"))
  if(cartsData){
      cartsData.forEach((el) => {
          count++
      });
      counterText.innerText = count
  }
  else{
      counterText.innerText = "0"
  }

}
////////

let mainCartFun = () => {

  let count = 0
  let counterText = document.getElementById("cart_counter")
  counterText.innerText = null
  cartCounter(counterText, count)
}

function addtoCart(ele) {
  let cartdata = JSON.parse(localStorage.getItem("cartsData"))||[]
  if (cartdata!=false){
    var check =false;

    for (var i=0;i<cartdata.length;i++){
      if(ele.name==cartdata[i].name){
        check=true;
        break;

      }
     
    }
    if (check){
      alert("This product is already added..!")
    }
    else{
      cartdata.push(ele);
      localStorage.setItem("cartsData", JSON.stringify(cartdata));
      alert("Product added successfully.")
    }
  }
  else{

  cartdata.push(ele);

  localStorage.setItem("cartsData", JSON.stringify(cartdata));
  alert("Product added successfully.");
  
  }
}
