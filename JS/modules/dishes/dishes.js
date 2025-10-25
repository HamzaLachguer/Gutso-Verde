import { fetchDishes } from "../utils/fetch-data.js";
import { renderDishesGrid } from "./dishes-grid.js";
import { getElement } from "../utils/dom.js";


const categories = [
  "starters", "soups", "pastas", "desserts"
]


const showAllDishesBtn = getElement("#show-all-dishes");
let categoryId = "starters";

categories.map((categ, index) => {
  const li = document.createElement("li");

  const button = document.createElement("button");
  button.className = "capitalize";
  button.setAttribute("data-dish", categ);
  button.textContent = categ;
  li.appendChild(button);

  button.addEventListener('click', () => {
    categoryId = button.dataset.dish;
    renderDishesGrid("#dishes-list", data[categoryId]);
    showAllDishesBtn.className = "flex items-center justify-center gap-[10px] py-3 px-5 rounded-md md:w-fit text-xs uppercase font-medium border border-black-1a transition-300 hover:border-black-66 text-black tracking-widest";
    showAllDishesBtn.setAttribute("aria-hidden", false);
  })

  getElement("#dishes-categories").append(li);
}).join("")

const {data, error} = await fetchDishes("data.json");

renderDishesGrid("#dishes-list", data[categoryId]);

showAllDishesBtn.addEventListener('click', () => {
  renderDishesGrid("#dishes-list", data[categoryId], data[categoryId].length);
  showAllDishesBtn.className = "hidden";
  showAllDishesBtn.setAttribute("aria-hidden", true)
})