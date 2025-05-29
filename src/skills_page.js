import dragonKnightSkills from "./ro_4th_assets/dragon_knight_skills.jpg";
import archMageSkills from "./ro_4th_assets/arch_mage_skills.jpg";
import imperialGuardSkills from "./ro_4th_assets/imperial_guard_skills.jpg";
import cardinalSkills from "./ro_4th_assets/cardinal_skills.jpg";
import inquisitorSkills from "./ro_4th_assets/inquisitor_skills.jpg";

import dragonKnightSkillTree from "./ro_4th_assets/dragon_knight_skill_tree.jpg";
import archMageSkillTree from "./ro_4th_assets/arch_mage_skill_tree.jpg";
import imperialGuardSkillTree from "./ro_4th_assets/imperial_guard_skill_tree.jpg";
import cardinalSkillTree from "./ro_4th_assets/cardinal_skill_tree.jpg";
import inquisitorSkillTree from "./ro_4th_assets/inquisitor_skill_tree.jpg";

export { renderAllClassesSkills };

// Predefined list of class details
const classSkillData = [
  {
    name: "Dragon Knight",
    imageSrc1: dragonKnightSkills,
    imageSrc2: dragonKnightSkillTree,
  },
  {
    name: "Arch Mage",
    imageSrc1: archMageSkills,
    imageSrc2: archMageSkillTree,
  },
  {
    name: "Imperial Guard",
    imageSrc1: imperialGuardSkills,
    imageSrc2: imperialGuardSkillTree,
  },
  {
    name: "Cardinal",
    imageSrc1: cardinalSkills,
    imageSrc2: cardinalSkillTree,
  },
  {
    name: "Inquisitor",
    imageSrc1: inquisitorSkills,
    imageSrc2: inquisitorSkillTree,
  },
];

// Function to render all class cards
function renderAllClassesSkills() {
  const contentContainer = document.getElementById("content-container");
  if (!contentContainer) {
    console.error("Error: #content-container not found!");
    return;
  }

  // Clear previous content
  contentContainer.innerHTML = "";

  // Loop through each class and create a card
  classSkillData.forEach((classSkillInfo) => {
    const contentCardOuterDiv = document.createElement("div");
    contentCardOuterDiv.className = "content-card-outer";

    const heading = document.createElement("h1");
    heading.textContent = classSkillInfo.name;

    const contentCardInnerDiv = document.createElement("div");
    contentCardInnerDiv.className = "content-card-inner";

    const contentDiv = document.createElement("div");
    contentDiv.className = "content";
    contentDiv.id = "content-skills";

    const imgSkills = document.createElement("img");
    imgSkills.src = classSkillInfo.imageSrc1;
    imgSkills.alt = `Image of ${classSkillInfo.name}'s skills`;

    const imgSkillTree = document.createElement("img");
    imgSkillTree.src = classSkillInfo.imageSrc2;
    imgSkillTree.alt = `Image of ${classSkillInfo.name}'s skill tree`;

    // Append elements in correct hierarchy
    contentDiv.appendChild(imgSkillTree);
    contentDiv.appendChild(imgSkills);
    contentCardInnerDiv.appendChild(contentDiv);
    contentCardOuterDiv.appendChild(heading);
    contentCardOuterDiv.appendChild(contentCardInnerDiv);
    contentContainer.appendChild(contentCardOuterDiv);
  });
}
