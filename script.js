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
  } else {
    bulb.className += " bulb-container--on";
  }
};

bulb.onclick = function () {
  changingBackground();
};

//fourth exericse

const par = document.getElementById("salary");
const payButton = document.querySelector(".pay-button");

const computingSalary = () => {
  const hourlyPay = Number(document.getElementById("hourlyPay").value);
  const hoursADay = Number(document.getElementById("hoursADay").value);
  const daysAMonth = Number(document.getElementById("daysAMonth").value);
  const salary = hourlyPay * hoursADay * daysAMonth;

  par.textContent = `Your monthly salary is ${salary} euros.`;
};

payButton.onclick = function () {
  computingSalary();
};
