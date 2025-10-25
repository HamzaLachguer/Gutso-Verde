import { initHeader } from "./modules/header/header.js";
import { initHero } from "./modules/sliders/hero-slider.js";
import { initImgSlider } from "./modules/sliders/photo-slider.js";

import { getElement } from "./modules/utils/dom.js";



const DOM_ELEMENTS = {
  showImgSlider: getElement("#image-slide-btn"),
  imageSlider: getElement("#img-slider"),
}



DOM_ELEMENTS.showImgSlider.addEventListener('click', () => {
  DOM_ELEMENTS.imageSlider.classList.remove("hidden");
  DOM_ELEMENTS.imageSlider.classList.add("grid");

  DOM_ELEMENTS.showImgSlider.setAttribute("aria-expanded", true);
  DOM_ELEMENTS.imageSlider.setAttribute("aria-hidden", false);
})

DOM_ELEMENTS.imageSlider.addEventListener('click', (e) => {
  if (e.target.closest("#img-slider-container")) return;
  
  DOM_ELEMENTS.imageSlider.classList.remove("grid");
  DOM_ELEMENTS.imageSlider.classList.add("hidden");

  DOM_ELEMENTS.showImgSlider.setAttribute("aria-expanded", false);
  DOM_ELEMENTS.imageSlider.setAttribute("aria-hidden", true);
})


initHeader();

document.addEventListener('DOMContentLoaded', () => {
  // const hero = initHero();
  // hero.displayHeroSlider();
  initHero();

  // const photoSlider = initImgSlider();
  // photoSlider.displayPhotoSlider();
  initImgSlider();
})

