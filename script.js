const productAddedToCartAlert = () => {
  alert("Product added to cart.");
};

const changingButtonLabel = () => {
  buyButton.className += " button2";
  const quantity = document.getElementById("quantity").value;
  buyButton.textContent = quantity + " pieces in cart.";
};

const buyButton = document.getElementById("buy-button");

buyButton.onclick = function () {
  changingButtonLabel();
};
