const images = {
  0: "watch-1.jpg",
  1: "watch-2.png",
};

const product_image = document.querySelector("img#product-image");

const buy_button = document.getElementsByClassName("buy-now");

for (let i = 0; i < buy_button.length; i++) {
  buy_button[i].addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("image", images[i]);
    location.href = "Product.html";
  });
}

console.log(localStorage.getItem("image"));
product_image.setAttribute("src", "images/" + localStorage.getItem("image"));
