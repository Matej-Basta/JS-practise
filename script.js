const productAddedToCartAlert = () => {
  alert("Product added to cart.");
};

const buyButton = document.getElementById("buy-button");

buyButton.onclick = function () {
  productAddedToCartAlert();
};
