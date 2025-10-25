import { getElement } from "../utils/dom.js";


const SlidesList = [
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

export function initHero() {
  const sliderContainer = getElement("#slider-container");
  if (!sliderContainer || !SlidesList.length) return;

  let timer = null;
  let slideIndex = 0;
  
  const img = document.createElement("img");
  img.className = "h-full w-full object-cover object-center fadeIn";
  img.loading = "lazy";
  sliderContainer.append(img);

  function updateSlide(slideIndex) {
    const slide = SlidesList[slideIndex];
    if (!slide) return;

    img.src = slide.imgSrc;
    img.alt = `Hero image key: ${slide.key}`;

    img.classList.remove("fadeIn");
    void img.offsetWidth;
    img.classList.add("fadeIn");
  }
  
  function nextSlide() {
    slideIndex = (slideIndex + 1) % SlidesList.length;
    updateSlide(slideIndex);
  }

  function displayHeroSlider() {
    updateSlide(slideIndex);
    timer = setInterval(nextSlide, 4000);
  }

  return displayHeroSlider();
}
