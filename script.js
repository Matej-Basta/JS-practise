const productAddedToCartAlert = () => {
  alert("Product added to cart.");
};

const changingButtonLabel = () => {
  buyButton.textContent = "In cart.";
};

const buyButton = document.getElementById("buy-button");

buyButton.onclick = function () {
  changingButtonLabel();
};
