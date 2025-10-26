import { getElement } from "../utils/dom.js";

function renderDishCard(dish) {
  const { id, name, price, description, image, badges } = dish;
  const li = document.createElement("li");
  li.className = "flex gap-4 items-start w-full";
  li.setAttribute("data-dish-id", id);
  li.innerHTML = `
      <div class="h-16 w-16 overflow-hidden rounded-lg shrink-0">
        <img class="h-full w-full object-cover object-center" src=${image} alt="">
      </div>

      <div class="flex flex-col gap-1 w-full">
        <div class="flex items-end gap-2 w-full">
          <div class="grid gap-2 grid-cols-2 items-end w-full">
            <h3 class="font-serif text-xl capitalize">${name}</h3>
            <div class="bg-black-1a w-full h-[1px]"></div>
          </div>

          <h4 class="flex-none w-fit md:text-lg lg:text-xl">${price}</h4>
        </div>

        <div class="flex flex-col gap-2 md:pr-16">
          <p class="md:text-lg lg:text-xl">${description}</p>
          <div class="flex gap-[2px]">
            ${badges.map(badge => {
              return `<span class="bg-black-1a py-1 px-2 rounded leading-none">${badge}</span>`
            }).join("")}
          </div>
        </div>
      </div>
  `;

  return li;
}


export function renderDishesGrid(selector, dishesArray, length = 4) {
  const container = getElement(selector);
  if (!container) return;

  const fragment = document.createDocumentFragment();

  dishesArray.slice(0, length).forEach(dish => {
    fragment.appendChild(renderDishCard(dish));
  });

  container.innerHTML = '';
  container.appendChild(fragment);
}