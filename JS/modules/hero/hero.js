import { getElement } from "../utils/dom.js";


const heroSlides = [
  {
    key: "0001",
    imgSrc: "https://framerusercontent.com/images/SQcm6ainaKFCXG0M3Lfpp29Jdg.jpg"
  },  {
    key: "002",
    imgSrc: "https://framerusercontent.com/images/CVN3IJ7F82GBDbcAr9blmIfmql8.jpg"
  },  {
    key: "003",
    imgSrc: "https://framerusercontent.com/images/VisDXtOqjIAF4MVLmx5IPB6DE.jpg"
  },
];

const slider = getElement("#slider");

let slideIndex = 0;

function updateSlide(slideIndex) {
  const slide = heroSlides[slideIndex];
  slider.innerHTML = `
    <img class="h-full w-full object-cover object-center" src=${slide.imgSrc} loading="lazy" alt="hero img ${slide.key}">
  `
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % heroSlides.length;
  updateSlide(slideIndex);
}


export function initHero() {
  updateSlide(slideIndex);
  setInterval(nextSlide, 4000);
}
