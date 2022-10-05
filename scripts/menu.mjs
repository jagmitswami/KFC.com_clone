import beverageData from "../data/beverages.js";
import biryaniData from "../data/biryanibuckets.js";
import boxmealsData from "../data/boxmeals.js";
import burgerData from "../data/burgers.js";
import chickensData from "../data/chicken.js";
import newlaunchData from "../data/newlaunch.js";
import snackData from "../data/snacks.js";
import stayhomeData from "../data/stayhome.js";

// importing cart function

import { addItemTocart } from "../components/cart.mjs";
import { getCart } from "../components/cart.mjs";
let a = getCart();
let getcartdata = () => {
  document.getElementById("cart_cnt").innerText = a.length;
  let sum = 0;
  a.forEach((ele) => {
    sum += Number(ele.price);
  });

  document.getElementById("cost_of_cart").innerText = Math.floor(sum);
};
getcartdata();

let chickenCards = document.querySelector(".menu_1_cards");
let newLaunchCards = document.querySelector(".menu_2_cards");
let biryaniCards = document.querySelector(".menu_3_cards");
let boxMealsCards = document.querySelector(".menu_4_cards");
let burgersCards = document.querySelector(".menu_5_cards");
let stayHomeCards = document.querySelector(".menu_6_cards");
let snackCards = document.querySelector(".menu_7_cards");
let beverageCards = document.querySelector(".menu_8_cards");
let gridView = document.getElementById("show_grid");
let listView = document.getElementById("show_list");
let cards = document.querySelectorAll(".cards");

window.onload = () => {
  appendNormalCards(chickensData, chickenCards);
  appendViewCards(newlaunchData, newLaunchCards);
  appendViewCards(biryaniData, biryaniCards);
  appendViewCards(boxmealsData, boxMealsCards);
  appendViewCards(burgerData, burgersCards);
  appendViewCards(stayhomeData, stayHomeCards);
  appendViewCards(snackData, snackCards);
  appendViewCards(beverageData, beverageCards);
};

gridView.onclick = () => {
  let subContainerCard = document.querySelectorAll(".sub_container");
  console.log("left to right view");
  cards.forEach((el) => el.classList.add("menu_cards_1_listView"));
  subContainerCard.forEach((el) => el.classList.add("sub_container_listView"));
};
listView.onclick = () => {
  console.log("top to bottom view");
  let subContainerCard = document.querySelectorAll(".sub_container");

  cards.forEach((el) => el.classList.remove("menu_cards_1_listView"));
  subContainerCard.forEach((el) =>
    el.classList.remove("sub_container_listView")
  );
};

/* appending the first chicken data */
function appendNormalCards(data, container) {
  data.forEach((menu) => {
    let {
      image: i,
      title: ti,
      desc: d,
      mrp: m,
      price: p,
      type: t,
      serve: s,
      id,
    } = menu;

    let card = document.createElement("div");
    let poster = document.createElement("img");
    let title = document.createElement("h4");
    let desc = document.createElement("p");
    let mrp = document.createElement("span");

    let price = document.createElement("span");
    let type = document.createElement("span");
    let serve = document.createElement("span");
    let addTocart = document.createElement("button");
    poster.src = i;
    title.innerText = ti;
    desc.innerText = d;

    mrp.innerHTML = m === "" ? "" : ` &#x20b9 ${m}`;
    price.innerHTML = `&#x20b9 ${p} `;
    m === "" ? null : (price.style.color = "red");
    type.innerText = t;
    serve.innerText = s;
    addTocart.innerText = "Add to Cart";
    let btnLogo = document.createElement("img");
    btnLogo.setAttribute("class", "btnLogo");
    btnLogo.src =
      "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg";
    addTocart.append(btnLogo);
    let topContainer = document.createElement("div");
    let btnContainer = document.createElement("div");
    addTocart.onclick = () => addItemTocart(id, menu);
    topContainer.append(title, desc, mrp, price, type, serve);
    btnContainer.append(addTocart);
    card.append(poster, topContainer, btnContainer);
    card.setAttribute("class", "menu_cards");
    container.append(card);
  });
}

/* card sections  starting form NEW LAUNCH */
function appendViewCards(data, container) {
  data.forEach((menu) => {
    let {
      image: i,
      title: ti,
      desc: d,
      mrp: m,
      price: p,
      type: t,
      serve: s,
      id,
    } = menu;
    let card = document.createElement("div");
    let poster = document.createElement("img");
    let title = document.createElement("h4");
    let desc = document.createElement("p");

    let mrp;
    if (m) {
      mrp = document.createElement("span");
      mrp.innerHTML = m === "" ? "" : ` &#x20b9 ${m}`;
    }

    let price = document.createElement("span");
    let type = document.createElement("span");
    let serve = document.createElement("span");
    let addTocart = document.createElement("button");
    poster.src = i;
    title.innerText = ti;
    desc.innerText = d;

    m === "" ? null : (price.style.color = "red");
    price.innerHTML = `&#x20b9 ${p} `;
    type.innerText = t;
    serve.innerText = s;
    addTocart.innerText = "Add to Cart";
    let btnLogo = document.createElement("img");
    btnLogo.setAttribute("class", "btnLogo");
    btnLogo.src =
      "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg";
    addTocart.append(btnLogo);
    let btnContainer = document.createElement("div");
    btnContainer.append(addTocart);
    let posterContainer = document.createElement("div");
    let contentContainer = document.createElement("div");
    let subContainer = document.createElement("div");
    addTocart.onclick = () => addItemTocart(id, menu);

    posterContainer.append(poster);
    if (mrp) {
      //   console.log("mrp");
      contentContainer.append(title, desc, mrp, price, type, serve);
    } else {
      //   console.log(" no mrp");
      contentContainer.append(title, desc, price, type, serve);
    }

    subContainer.append(posterContainer, contentContainer);
    subContainer.setAttribute("class", "sub_container");
    card.append(subContainer, btnContainer);
    card.setAttribute("class", "menu_cards_1");
    container.append(card);
  });
  // console.log("data arrived for appendViewCards");
}
