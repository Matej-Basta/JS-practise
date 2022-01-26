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
  let message = document.getElementById("message");

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

//third exercise
let bulb = document.getElementById("bulb-container");

const changingBackground = () => {
  if (bulb.className === "bulb-container bulb-container--on") {
    bulb.className = "bulb-container";
    console.log("both");
  } else {
    bulb.className += " bulb-container--on";
    console.log("one");
  }
};

bulb.onclick = function () {
  changingBackground();
};
