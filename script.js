//first exercise

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

//second exercise

const checkingCredentials = () => {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password === login) {
    message.textContent = "Hey " + login + ", welcome to your profile.";
  } else {
    message.textContent = "Hey " + login + ", you forgot the password again.";
  }
};

const submit = document.getElementById("submit");

submit.onclick = function () {
  checkingCredentials();
};
