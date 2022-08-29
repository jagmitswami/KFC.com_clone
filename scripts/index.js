//loading
//https://online.kfc.co.in/KFC_Loader_Gif.gif

//deals buttons
let properties = [
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
    heading: "1 PC FREE CHICKEN...",
    des: "1 Pc free Chicken Zinger on a cart value of 399 or above on first...",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
    heading: "1 PC FREE VEG...",
    des: "1 Pc free Veg Zinger on a cart value of 399 or above on first...",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg",
    heading: "UPTO RS 100 OFF...",
    des: "Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on...",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
    heading: "ADD 2 PC HOT...",
    des: " Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499...",
  },
];

let a = document.querySelector("#proleft");
a.addEventListener("click", proleftSliding);
a.disabled = true;
let b = document.querySelector("#proright");
b.addEventListener("click", prorightSliding);

let prostart = 0;
let prolast = 2;
display(prostart, prolast);

function proleftSliding() {
  b.disabled = false;
  if (prostart >= 1 && prolast >= 3) {
    prostart--;
    prolast--;
    display(prostart, prolast);
  } else {
    prostart = 0;
    prolast = 2;
    display(prostart, prolast);
  }
  a.disabled = true;
}

function prorightSliding() {
  a.disabled = false;
  if (prolast < properties.length - 2) {
    prostart++;
    prolast++;
    display(prostart, prolast);
  } else {
    prostart = 1;
    prolast = 3;
    display(prostart, prolast);
  }
  b.disabled = true;
}

function display(start, last) {
  document.querySelector("#deals_sub").innerHTML = "";
  for (start; start <= last; start++) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = properties[start].img;

    let h2 = document.createElement("h2");
    h2.innerText = properties[start].heading;

    let h4 = document.createElement("h4");
    h4.innerText = properties[start].des;

    let div2 = document.createElement("div");
    div2.setAttribute("class", "deals_opt");

    let h5 = document.createElement("h5");
    h5.innerText = "view details";

    let button = document.createElement("button");
    button.innerText = "Redeem";
    button.addEventListener("click", function () {
      alert("Copied coupon code.");
    });

    div2.append(h5, button);
    div.append(image, h2, h4, div2);

    document.querySelector("#deals_sub").append(div);
  }
}

var x = window.matchMedia("(max-width: 720px)");
if (x.matches) {
    display(0,3);
}


// view all deals
document.getElementById('view_all_deals').addEventListener('click',function(){
    window.location.href = './deals.html';
});

let forOrder = document.getElementById('for_order');
forOrder.addEventListener('click',function(){
  window.location.href = 'menu.html';
});

let catProd = document.querySelectorAll('.cat_prod');
catProd.forEach((e) => {
  e.addEventListener('click',function(){
    window.location.href = 'menu.html';
  });
});

// let orderBtn = document.querySelector('.order>div');
// orderBtn.addEventListener('click',function(){
//   window.location.href = 'menu.html';
// });

