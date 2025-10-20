import { initHeader } from "./modules/header/header.js";
import { initHero } from "./modules/hero/hero.js";




initHeader();
initHero();


const text = "with global flavors, offering a diverse, seasonal menu. The ambiance balances modern elegance with rustic charm, perfect for a relaxed brunch, sophisticated lunch, or intimate evening."


text.split(" ").forEach((word, index) => {
  console.log(`<span>${word}</span>`)
})