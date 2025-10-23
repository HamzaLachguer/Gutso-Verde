

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


let imgIndex = 0;

const toggleContainer = getElement("#img-toggle-container");
const imgSlideContainer = getElement("#img-slide-container");
const nextBtn = getElement("#next-btn");
const prevBtn = getElement("#prev-btn");

// next img
function nextImg() {
  imgIndex = (imgIndex + 1) % imagesList.length;
  updateSlider(imgIndex);
}

// previous img
function prevImg() {
  imgIndex = (imgIndex - 1 + imagesList.length) % imagesList.length;
  updateSlider(imgIndex);
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
function updateSlider(imgIndex) {
  imgSlideContainer.style.transform = `translateX(-${imgIndex * 100}%)`;
  toggleContainer.querySelectorAll("button")
    .forEach(b => {
      b.className = "h-[10px] w-[10px] rounded-full bg-white opacity-50";
    })
    
  toggleContainer.querySelector(`button[data-slide-index="${imgIndex}"]`)
    .className = "h-[10px] w-[10px] rounded-full bg-white opacity-100";
} 


function setActiveConroler(button) {
  toggleContainer.querySelectorAll("button")
    .forEach(b => {
      b.className = "h-[10px] w-[10px] rounded-full bg-white opacity-50";
    })

    button.className = "h-[10px] w-[10px] rounded-full bg-white opacity-100";
}

// toggling btns
imagesList.forEach((_, index) => {
  const button = document.createElement("button");
  button.className = "h-[10px] w-[10px] rounded-full bg-white opacity-50";
  button.setAttribute("data-slide-index", index);

  button.addEventListener('click', () => {
    imgIndex = button.dataset.slideIndex;

    setActiveConroler(button);
    updateSlider(imgIndex);
  })

  toggleContainer.append(button);
})

export function initImageSlider() {
  nextBtn.addEventListener('click', nextImg);
  prevBtn.addEventListener('click', prevImg);
}