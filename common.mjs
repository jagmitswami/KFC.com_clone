/* Getting items in the cart */
export function getCart() {
	return JSON.parse(localStorage.getItem("cart")) || [];
}

/* Adding items to the cart */

export function setCart(value) {
	return localStorage.setItem("cart", JSON.stringify(value));
}
