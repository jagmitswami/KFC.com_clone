import { getCart } from "./common.mjs";
let backBtn = document.getElementsByClassName("backBtn");
let helpBtn = document.getElementById("need_help");
let signinBtn = document.getElementsByClassName("signin_btn");
let handDelivery = document.getElementById("hand_delivery");
let instructions = document.getElementById("instructions");
let name = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let cartItemsLength = document.getElementById("cart_items_length");
let subtotal = document.getElementById("subtotal");
let gst = document.getElementById("gst");
let paymentTotal = document.getElementById("total");
let checkoutBtn = document.getElementById("checkout_btn");
let logoBtn = document.getElementById("logo_largescreen");
let rupeeIcon = "&#x20b9";

/* Displaying subtotal , gst and Total */
window.onload = () => {
  checkInput();
  let cart = getCart();

  let subTotalPrice = cart.reduce((a, c) => {
    return a + c.count * c.price;
  }, 0);
  subTotalPrice = fixedPoint(subTotalPrice);
  console.log(subTotalPrice);

  let totalTax = subTotalPrice * 0.05;
  totalTax = fixedPoint(totalTax);

  let totalAmount = 35 + subTotalPrice + totalTax;
  totalAmount = fixedPoint(totalAmount);

  cartItemsLength.innerText =
    cart.length > 1 ? `${cart.length} ITEMS ` : `${cart.length} ITEM `;

  console.log(subTotalPrice, subtotal);
  subtotal.innerHTML = `${rupeeIcon} ${subTotalPrice}`;
  gst.innerHTML = totalTax;
  paymentTotal.innerHTML = `${rupeeIcon} ${totalAmount}`;
};

function fixedPoint(num) {
  num = Number(num).toFixed(2);
  num = Number(num);
  return num;
}

/* Back btn functionality */

for (let btn of backBtn) {
  btn.onclick = () => (window.location.href = "cart.html");
}

/* Signin btn functionality */
for (let btn of signinBtn) {
  btn.onclick = () => (window.location.href = "signin.html");
}

/* Checking input fields to update the status of checkout btn */

name.oninput = checkInput;
email.oninput = checkInput;
contact.oninput = checkInput;

function checkInput() {
  if (name.value === "" || email.value === "" || contact.value === "") {
    checkoutBtn.disabled = true;
    return;
  }
  checkoutBtn.disabled = false;
}

/* Checkout btn functionality */

let orderedItems = JSON.parse(localStorage.getItem('orderedItems')) || [];
checkoutBtn.onclick = () => {
  alert("Payment Successful.!");
  window.location.href = "index.html";
  let obj_cart = JSON.parse(localStorage.getItem('cart'));
  orderedItems.push(...obj_cart)
  localStorage.setItem('orderedItems',JSON.stringify(orderedItems))
  localStorage.removeItem('cart');
};

/* logoclick redirect */

logoBtn.onclick = () => (window.location.href = "index.html");
