import { getElement } from "../utils/dom.js";

const reviewsList = [
  {
    name: "Emily J.",
    review: "A fantastic dining experience! The food was fresh, flavorful, and beautifully presented. Can’t wait to return!",
    rate: "4.2",
  },
  {
    name: "Olivia M.",
    review: "An absolute gem! From the starters to dessert, everything was delicious. The staff made us feel right at home.",
    rate: "5",
  },
  {
    name: "James T.",
    review: "The atmosphere is warm and inviting, and the service is top-notch. Every dish we tried was exceptional.",
    rate: "3.2",
  },
]


let reviewIndex = 0;

const nextReview = getElement("#next-review");
const prevReview = getElement("#previous-review");
const reviewListContainer = getElement("#review-list");

export function initReviewSlider() {
  reviewsList.map(review => {
    const li = document.createElement("li");
    li.className = "flex-none flex flex-col items-start gap-3 w-full";
    li.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="font-serif text-xl">${review.rate}</span>
        <div class="h-6 w-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-27c75f3e-cf4f-4b04-b601-7a6e72286e84, rgb(0, 0, 0))"><g color="var(--token-27c75f3e-cf4f-4b04-b601-7a6e72286e84, rgb(0, 0, 0))" weight="fill"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></g></svg>
        </div>
      </div>

      <p class="font-serif text-2xl md:text-[28px] lg:text-[32px] leading-none font-light">${review.review}</p>

      <div class="flex items-center gap-3">
        <span class="bg-black h-[1.5px] w-6"></span>
        <p class="text-xl leading-none md:text-[22px] lg:text-2xl">${review.name}</p>
      </div>
    `;

    reviewListContainer.append(li);
  })

  function updateReviewSlider(reviewIndex) {
    reviewListContainer.style.transform = `translateX(-${ reviewIndex * 100}%)`;
  }

  function nextReviewSlide() {
    reviewIndex = (reviewIndex + 1) % reviewsList.length;
    updateReviewSlider(reviewIndex);
  }

  function prevReviewSlide() {
    reviewIndex = (reviewsList.length + reviewIndex - 1) % reviewsList.length;
    updateReviewSlider(reviewIndex);
  }

  nextReview.addEventListener('click', nextReviewSlide);
  prevReview.addEventListener('click', prevReviewSlide);
}