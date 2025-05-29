import aiImageDragonKnight from "./ro_4th_assets/dragon_knight.jpg";
import aiImageArchMage from "./ro_4th_assets/arch_mage.jpg";
import aiImageImperialGuard from "./ro_4th_assets/imperial_guard.jpg";
import aiImageCardinal from "./ro_4th_assets/cardinal.jpg";
import aiImageInquisitor from "./ro_4th_assets/inquisitor.jpg";

export { renderAllClasses };

// Predefined list of class details
const classData = [
  {
    name: "Dragon Knight",
    imageSrc: aiImageDragonKnight,
    description:
      "Dragon Knights represent the pinnacle of the Rune Knight lineage, evolving into formidable warriors with unmatched resilience and the ability to harness the power of ancient magic. They excel at close combat, using their martial prowess to take down even the most formidable foes. Their unwavering loyalty and commitment to justice earn them the respect of their peers and the admiration of the people. Their legendary tales are recounted in the halls of the brave.",
  },
  {
    name: "Royal Guard",
    imageSrc: aiImageImperialGuard,
    description:
      "Royal Guards are elite warriors who embody loyalty, strategy, and brute force. They are trained to be the ultimate protectors of the realm, possessing the strength and skill to defend against any threat. Royal Guards are masters of combat, using their martial prowess and cunning tactics to outmaneuver their foes. Stories of their valor are told across the kingdom.",
  },
  {
    name: "Arch Mage",
    imageSrc: aiImageArchMage,
    description:
      "Arch Mages harness immense magical energy, mastering elemental spells that can devastate their foes. They are the ultimate masters of the arcane arts, able to weave powerful magic to achieve their goals. Arch Mages are also skilled in the art of alchemy, able to craft powerful potions and elixirs to aid them in battle. Their magical feats are spoken of in awe by the wise.",
  },
  {
    name: "Cardinal",
    imageSrc: aiImageCardinal,
    description:
      "Cardinals are masters of the arcane arts, harnessing the power of the gods to protect their allies. They are skilled in the art of healing, able to channel powerful holy energy to restore the health of their comrades. Cardinals are also skilled in the art of blessing, able to imbue their allies with powerful holy energy to enhance their abilities. Their divine intervention is revered by all who witness it.",
  },
  {
    name: "Inquisitor",
    imageSrc: aiImageInquisitor,
    description:
      "Inquisitors are sentinels of justice, wielding the power of the gods to bring justice to the world. They are skilled in the art of divine magic, able to channel powerful holy energy to smite their foes. Inquisitors are also skilled in the art of judgement, able to discern the guilt or innocence of those they encounter. Their unwavering sense of justice is legendary among the devout.",
  },
];

// Function to render all class cards
function renderAllClasses() {
  const contentContainer = document.getElementById("content-container");
  if (!contentContainer) {
    console.error("Error: #content-container not found!");
    return;
  }

  // Clear previous content
  contentContainer.innerHTML = "";

  // Loop through each class and create a card
  classData.forEach((classInfo) => {
    const contentCardOuterDiv = document.createElement("div");
    contentCardOuterDiv.className = "content-card-outer";

    const heading = document.createElement("h1");
    heading.textContent = classInfo.name;

    const contentCardInnerDiv = document.createElement("div");
    contentCardInnerDiv.className = "content-card-inner";

    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    const img = document.createElement("img");
    img.src = classInfo.imageSrc;
    img.alt = `AI-generated image of ${classInfo.name}`;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    descriptionDiv.textContent = classInfo.description;

    // Append elements in correct hierarchy
    contentDiv.appendChild(img);
    contentDiv.appendChild(descriptionDiv);
    contentCardInnerDiv.appendChild(contentDiv);
    contentCardOuterDiv.appendChild(heading);
    contentCardOuterDiv.appendChild(contentCardInnerDiv);
    contentContainer.appendChild(contentCardOuterDiv);
  });
}
