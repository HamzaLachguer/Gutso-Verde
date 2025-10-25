import { getElement } from "../utils/dom.js";

const imagesList = [
  {
    id: "01",
    imgSrc: "https://framerusercontent.com/images/xzoruV6iJbwSqrs77CL1lSL7I18.jpg?scale-down-to=1024"
  },
  {
    id: "02",
    imgSrc: "https://framerusercontent.com/images/c2brEmpf5kdjtkc1J6jyXee8.jpg?scale-down-to=512"
  },
  {
    id: "03",
    imgSrc: "https://framerusercontent.com/images/MpW2Z4PEQds1b98vtLA7jztmMz8.jpg?scale-down-to=1024"
  },
  {
    id: "04",
    imgSrc: "https://framerusercontent.com/images/jjMWRKpcEoFszcYUdJLQIXGCo.jpg?scale-down-to=1024"
  },
  {
    id: "05",
    imgSrc: "https://framerusercontent.com/images/6FtnWtZODFrb48fJe84KIFew4.jpg?scale-down-to=1024"
  },
  {
    id: "06",
    imgSrc: "https://framerusercontent.com/images/OXlbkrZQnZjBzGwdopJ14EvB8s.jpg?scale-down-to=1024"
  },
]



export function initImgSlider() {
  let slideIndex = 0;
  
  const toggleContainer = getElement("#img-toggle-container");
  const imgSlideContainer = getElement("#img-slide-container");
  const nextBtn = getElement("#next-btn");
  const prevBtn = getElement("#prev-btn");
  
  // next img
  function nextImg() {
    slideIndex = (slideIndex + 1) % imagesList.length;
    updateSlider(slideIndex);
  }
  
  // previous img
  function prevImg() {
    slideIndex = (slideIndex - 1 + imagesList.length) % imagesList.length;
    updateSlider(slideIndex);
  }
  
  // generate img
  imgSlideContainer.innerHTML = imagesList.map(img => {
    // const {id, imgSrc} = img;
    return `
      <li class="flex-none w-full h-full">
        <img class="aspect-square w-full object-cover object-center" src=${img.imgSrc} alt=${img.id}>
      </li>
    `;
  }).join("");
  
  // update slider
  const baseClass = "h-[10px] w-[10px] rounded-full bg-white"
  function updateSlider(slideIndex) {
    imgSlideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    toggleContainer.querySelectorAll("button")
      .forEach(b => {
        b.className = `${baseClass}  opacity-50`;
      })
      
    toggleContainer.querySelector(`button[data-slide-index="${slideIndex}"]`)
      .className = `${baseClass}  opacity-100` ;
  } 
  
  
  function setActiveConroler(button) {
    toggleContainer.querySelectorAll("button")
      .forEach(b => {
        b.className = `${baseClass} opacity-50`;
      })
  
      button.className = `${baseClass} opacity-100`;
  }
  
  // toggling btns
  imagesList.forEach((_, index) => {
    const button = document.createElement("button");
    const isActive = index === 0;
    button.className = `${baseClass} ${isActive? "opacity-100" : "opacity-50"}`;
    button.setAttribute("data-slide-index", index);
  
    button.addEventListener('click', () => {
      slideIndex = button.dataset.slideIndex;
  
      setActiveConroler(button);
      updateSlider(slideIndex);
    })
  
    toggleContainer.append(button);
  })

  function displayPhotoSlider() {
    nextBtn.addEventListener('click', nextImg);
    prevBtn.addEventListener('click', prevImg);
  }

  return displayPhotoSlider();
}
