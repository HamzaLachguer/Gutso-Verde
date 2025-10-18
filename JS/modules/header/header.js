import { getElement } from "../utils/dom.js";

const DOM_ELEMENTS = {
  menuBtn: getElement("#nav-menu-btn"),
  navMenu: getElement("#nav-menu"),
}

let isMenuOpen = false;

export function initHeader() {

  const { menuBtn, navMenu } = DOM_ELEMENTS
  menuBtn.addEventListener('click', () => {

    // UPDATE STATE
    isMenuOpen = !isMenuOpen;

    // UPDATE CLASSES
    navMenu.classList.toggle("open-nav-menu");
    navMenu.classList.toggle("pt-6");
    menuBtn.classList.toggle("close-nav-menu");

    // UPDATE ARIA ATTRIBUTES
    menuBtn.setAttribute("aria-expanded", isMenuOpen);
    navMenu.setAttribute("aria-hidden", !isMenuOpen);
  })
}