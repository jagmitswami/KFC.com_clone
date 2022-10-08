/* Getting items in the cart */
export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

/* Adding items to the cart */

export function setCart(value) {
  return localStorage.setItem("cart", JSON.stringify(value));
}

/* Add to cart functionality */

export function addItemTocart(id, el) {
  let cart = getCart();
  let itemExist = cart.filter((menu) => menu.id === id);
  // console.log(itemExist);

  itemExist.length > 0
    ? (cart = cart.map((menu) => {
        menu = menu.id === id ? { ...menu, count: menu.count + 1 } : menu;
        return menu;
      }))
    : (cart = [...cart, { ...el, count: 1 }]);

  // console.log(cart);
  setCart(cart);
  getcartdata();
}
