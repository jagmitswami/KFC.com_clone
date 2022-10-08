import { getCart, setCart } from "./common.mjs";

let displayCart = document.getElementById("display_cart");
let subtotal = document.getElementById("sub_total");
let gst = document.getElementById("gst");
let total = document.getElementById("total");
let donate = document.getElementById("donate");
let cartItemsTotal = document.getElementById("cart_items");
let removeAll = document.getElementById("remove_all");
let addMore = document.getElementById("add_more");
let checkoutBtn = document.getElementById("checkout_btn");
let cartContainer = document.querySelector(".items_container_grid");
let emptyCartBanner = document.querySelector(".empty-cart-container");

let rupeeIcon = "&#x20b9";
let donateAmount = 0;

window.onload = () => {
  renderpage();
};

donate.onchange = () => {
  donate.checked ? (donateAmount = 5) : (donateAmount = 0);
  renderpage();
};
removeAll.onclick = () => {
  setCart([]);
  renderpage();
};

addMore.onclick = () => (window.location.href = "menu.html");
checkoutBtn.onclick = () => (window.location.href = "checkout.html");

/* Render all the elements in cart to page */
function renderpage() {
  let cart = getCart();
  if (!cart.length) {
    cartContainer.style.display = "none";
    emptyCartBanner.style.display = "flex";
  } else {
    emptyCartBanner.style.display = "none";
  }

  displayCartItems(cart);
  displayTotal(cart, donateAmount);
}

/* Display all the elements in page */
function displayCartItems(data) {
  displayCart.innerHTML = null;

  //   console.log(data);

  data.forEach((menu) => {
    let { title: ti, image, count, price, id } = menu;
    let container = document.createElement("div");
    let posterContainer = document.createElement("div");
    let detailsContainer = document.createElement("div");
    let contentContainer = document.createElement("div");
    let priceContainer = document.createElement("div");
    let poster = document.createElement("img");
    let title = document.createElement("p");
    let removeBtn = document.createElement("button");
    let expandArrow = document.createElement("span");
    let seperator = document.createElement("div");
    let modifyBtn = getButtonSet(id, count);
    let totalPrice = document.createElement("div");
    poster.src = image;
    title.innerText = ti;
    removeBtn.innerText = "Remove";
    removeBtn.onclick = () => removeItem(id);
    expandArrow.innerHTML = `<i class="bi bi-chevron-right"></i>`;
    let itemTotal = fixedPoint(count * price);
    totalPrice.innerHTML = `${rupeeIcon} ${itemTotal} `;

    /* Appending all elements to sub containers*/
    posterContainer.append(poster);
    title.append(expandArrow);
    detailsContainer.append(title, removeBtn);
    contentContainer.append(posterContainer, detailsContainer);
    priceContainer.append(modifyBtn, totalPrice);

    /* Appending all sub containers to main container*/
    container.append(contentContainer, seperator, priceContainer);
    container.setAttribute("class", "menu_card");
    displayCart.append(container);
  });
}

/* Function to create buttons for increase and decrease count */
function getButtonSet(id, count) {
  let modifyBtnContainer = document.createElement("div");
  let decreaseBtn = document.createElement("button");
  let increaseBtn = document.createElement("button");
  let totalCount = document.createElement("span");
  decreaseBtn.innerText = "-";
  increaseBtn.innerText = "+";
  totalCount.innerText = count;
  decreaseBtn.onclick = () => modifyMenu("decrease", id);
  increaseBtn.onclick = () => modifyMenu("increase", id);
  modifyBtnContainer.setAttribute("class", "modify_btn_container");
  modifyBtnContainer.append(decreaseBtn, totalCount, increaseBtn);
  return modifyBtnContainer;
}

/* Display total price,gst and  handling charges */
function displayTotal(cart, donate = 0) {
  cartItemsTotal.innerText = null;
  subtotal.innerHTML = null;
  gst.innerHTML = null;
  total.innerHTML = null;

  let subTotalPrice = cart.reduce((a, c) => {
    return a + c.count * c.price;
  }, 0);
  subTotalPrice = fixedPoint(subTotalPrice);
  // console.log(subTotalPrice);

  let totalTax = subTotalPrice * 0.05;
  totalTax = fixedPoint(totalTax);

  let totalAmount = donate + 35 + subTotalPrice + totalTax;
  totalAmount = fixedPoint(totalAmount);

  cartItemsTotal.innerText =
    cart.length > 1 ? `${cart.length} ITEMS ` : `${cart.length} ITEM `;

  // console.log(subTotalPrice, subtotal);
  subtotal.innerHTML = `${rupeeIcon} ${subTotalPrice}`;
  gst.innerHTML = totalTax;
  total.innerHTML = `${rupeeIcon} ${totalAmount}`;
}

/* Restrict the places after decimal for amount */

function fixedPoint(num) {
  num = Number(num).toFixed(2);
  num = Number(num);
  return num;
}

/* Increse or decrease the quantity */

function modifyMenu(type, id) {
  let cart = getCart();
  if (type === "increase") {
    cart = cart.map((menu) =>
      menu.id === id ? { ...menu, count: menu.count + 1 } : menu
    );
  } else if (type === "decrease") {
    cart = cart.map((menu) =>
      menu.id === id && menu.count > 1
        ? { ...menu, count: menu.count - 1 }
        : menu
    );
  }
  // console.log(cart);
  setCart(cart);
  renderpage();
}

/* Remove an item from cart */

function removeItem(id) {
  let cart = getCart();
  cart = cart.filter((menu) => menu.id !== id);
  // console.log(cart);
  setCart(cart);
  renderpage();
}
