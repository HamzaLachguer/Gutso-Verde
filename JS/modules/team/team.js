import { getElement } from "../utils/dom.js"

const teamMembers = [
  {
    name: "Lucas Martin",
    role: "Executive Chef",
    description: "Lucas brings a passion for seasonal flavors, crafting innovative dishes inspired by farm-to-table ingredients.",
    portrait: "https://framerusercontent.com/images/HIGw8PLMKHiI1yNcbj4VB5uV4I.jpg"
  },
  {
    name: "Isabella Torres",
    role: "Sous Chef",
    description: "Isabella supports our kitchen’s rhythm, skillfully managing every detail and ensuring perfection in each dish.",
    portrait: "https://framerusercontent.com/images/YXmkm5tYbIJK4vktFtFhYxfQcw.jpg"
  },
  {
    name: "Sophia Torres",
    role: "General Manager",
    description: "With a dedication to hospitality, Sophia ensures every guest feels welcomed and taken care of.",
    portrait: "https://framerusercontent.com/images/04g1DlTgtWZkRGdPhAws9aVY.jpg"
  },
  {
    name: "Noah Reynolds",
    role: "Pastry Chef",
    description: "Noah creates dessert masterpieces, blending tradition and creativity to end every meal on a sweet note.",
    portrait: "https://framerusercontent.com/images/XuFr4Ex8J9IikrVoIpmZLhs4cOM.jpg"
  },
]


export function renderTeamMembers() {
  const container = getElement("#team-members-grid");
  container.innerHTML = teamMembers.map(member => {
    return `
      <li class="flex flex-col gap-4">
        <div class="h-5/6 md:h-2/3 lg:h-[254px] w-full overflow-hidden rounded-md">
          <img src=${member.portrait} alt=${member.name} class="h-full w-full object-center object-cover">
        </div>

        <div class="flex flex-col gap-[6px]">
          <h4 class="uppercase tracking-widest text-xs font-medium">${member.role}</h4>
          <h3 class="font-serif text-xl md:text-[22px] lg:text-2xl leading-tight">${member.name}</h3>
          <p class="leading-none tracking-tight md:text-lg lg:text-xl">${member.description}</p>
        </div>

        <div class="h-6 w-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-27c75f3e-cf4f-4b04-b601-7a6e72286e84, rgb(0, 0, 0))"><g color="var(--token-27c75f3e-cf4f-4b04-b601-7a6e72286e84, rgb(0, 0, 0))" weight="regular"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></g></svg>
        </div>
      </li>
    `;
  }).join("")
}