import beverageData from "./data/beverages.js";
import biryaniData from "./data/biryanibuckets.js";
import boxmealsData from "./data/boxmeals.js";
import burgerData from "./data/burgers.js";
import chickensData from "./data/chicken.js";
import newlaunchData from "./data/newlaunch.js";
import snackData from "./data/snacks.js";
import stayhomeData from "./data/stayhome.js";
import { appendNormalCards } from "./menu.mjs";

let data = [
	...beverageData,
	...biryaniData,
	...boxmealsData,
	...burgerData,
	...chickensData,
	...newlaunchData,
	...snackData,
	...stayhomeData,
];

let menuSearch = document.getElementById("menu_search");
let resultDisplay = document.getElementById("display_search_results");
let main = document.getElementById("main");
let clearSearch = document.getElementById("clear_search");



/* Search functionality for menu */
menuSearch.onkeydown = () => {
	let query = menuSearch.value;
	if (event.key === "Enter" && query !== "") {
		// console.log(query);
		let filteredData = data.filter((menu) => {
			let { title, desc } = menu;
			if (
				title.toLowerCase().includes(query.toLowerCase()) ||
				desc.toLowerCase().includes(query.toLowerCase())
			) {
				return menu;
			}
		});
		resultDisplay.innerHTML = null;
		appendNormalCards(filteredData, resultDisplay);
		resultDisplay.classList.add("search_results");
		resultDisplay.classList.remove("hide_menu");

		console.log(main.classList);
		main.classList.add("hide_menu");

		console.log(filteredData);
	}
	// console.log(event.key==="Enter");
};


/* Clear search functionality */
clearSearch.onclick = () => {
	resultDisplay.classList.add("hide_menu");
	main.classList.remove("hide_menu");
	menuSearch.value = "";
};
