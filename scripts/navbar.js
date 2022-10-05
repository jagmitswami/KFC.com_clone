let isLoggedIn = localStorage.getItem("isLoggedIn") || false;

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

window.onresize = () => {
  if (window.innerWidth > 1023) {
    document.getElementById("mySidebar").style.display = "none";
  }
};

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.display = "none";
}

let getcartdata = () => {
  let currentdata = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart_cnt").innerText = currentdata.length;
  let sum = 0;
  currentdata.forEach((ele) => {
    sum += Number(ele.price * ele.count);
  });

  document.getElementById("cost_of_cart").innerText = Math.floor(sum);
};

let tocartpage = () => {
  window.location.href = "cart.html";
};
let toindex = () => {
  let tocart = document.getElementById("signin_svg");
  let navbarLogo = document.getElementById("nav_logo");
  navbarLogo.onclick = () => (window.location.href = "index.html");
  tocart.onclick = () => (window.location.href = "index.html");
};
let signinto = () => {
  if (isLoggedIn == "true") {
    window.location.href = "account.html";
  } else {
    window.location.href = "signin.html";
  }
};
let tomenu = () => {
  window.location.href = "menu.html";
};

let todeal = () => {
  window.location.href = "deals.html";
};

if (isLoggedIn == "true") {
  document.getElementById("signin_page").innerText = "Account";
} else {
  document.getElementById("signin_page").innerText = "Sign In";
}

getcartdata();
