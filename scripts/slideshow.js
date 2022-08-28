let images = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_2000x.png?v=1661416668",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Desktop-Banner-boat-Days-_SHOP-NOW_1_2000x.jpg?v=1661453036",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_2000x.gif?v=1661324429",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A121-website-banner_3_2000x.jpg?v=1659936537",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2000x.png?v=1661408994"
];


let container = document.getElementById("Slideshow");

function startSlideshow() {
    var counter = 0;
    let img = document.createElement("img");
    img.src = images[0];

    container.append(img);

    counter = counter + 1;

    setInterval(function () {

        container.innerHTML = null;

        if (counter === images.length) {
            counter = 0;
        }

        let img = document.createElement("img");
        img.src = images[counter];

        container.append(img);

        counter = counter + 1;

    }, 5000)


}
startSlideshow();