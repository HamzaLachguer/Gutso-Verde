import { initHeader } from "./modules/header/header.js";
import { initHero } from "./modules/sliders/hero-slider.js";
import { initImageSlider } from "./modules/sliders/hero-slider.js";

import { getElement } from "./modules/utils/dom.js";



const DOM_ELEMENTS = {
  showImgSlider: getElement("#image-slide-btn"),
  imageSlider: getElement("#img-slider"),
}



DOM_ELEMENTS.showImgSlider.addEventListener('click', () => {
  DOM_ELEMENTS.imageSlider.classList.remove("hidden");
  DOM_ELEMENTS.imageSlider.classList.add("grid");
})

DOM_ELEMENTS.imageSlider.addEventListener('click', (e) => {
  if (e.target.closest("#img-slider-container")) return;
  
  DOM_ELEMENTS.imageSlider.classList.remove("grid");
  DOM_ELEMENTS.imageSlider.classList.add("hidden");
})


initHeader();
initImageSlider();
initHero();




// const text = "with global flavors, offering a diverse, seasonal menu. The ambiance balances modern elegance with rustic charm, perfect for a relaxed brunch, sophisticated lunch, or intimate evening."


// text.split(" ").forEach((word, index) => {
//   console.log(`<span>${word}</span>`)
// })
