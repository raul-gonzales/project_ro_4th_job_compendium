export { renderAllBuilds };

// Predefined list of build details
const classBuildsData = [
  {
    name: "Dragon Knight",
    buildName: "DcB (Draconic Breath)",
    buildDescription: "The Draconic Breath build is centered around Dragonic Breath, a powerful AoE skill that scales with HP and SP, making it ideal for high burst damage. The primary stat for maximizing damage output is POW, as all 4th-job skills scale with it, while CON provides additional attack power. Optimal gear focuses on ranged attack bonuses, HP/SP scaling, and cast time reduction to enhance performance. Buffs like Dragonic Aura further strengthen breath-based attacks, increasing overall damage potential. Fine-tuning shadow gear and costume stones can amplify critical damage and attack speed, ensuring sustained high DPS.",
  },
  {
    name: "Arch Mage",
    buildName: "SvS (Soul Vulcan Strike)",
    buildDescription: "The Arch Mage build is designed for high burst magic damage, with Soul Vulcan Strike as its core ability, delivering fast-casting AoE attacks. The most crucial trait for maximizing spell power is SPL, which enhances MATK and overall magic effectiveness, while CON provides additional offensive strength. Gear selection prioritizes fixed cast time reduction, magic amplification, and cooldown efficiency, ensuring smooth spell execution. Buffs like Telekinesis Intense and Mystical Amplification significantly boost magic output, making spells more devastating in both PvE and boss encounters. Fine-tuning shadow gear and costume stones further refines spell damage and cast speed, optimizing sustained magical offense.",
  },
  {
    name: "Imperial Guard",
    buildName: "CR (Cross Rain)",
    buildDescription: "The Imperial Guard build centers around Cross Rain, a Holy-element AoE magic attack that delivers consistent damage across multiple enemies. SPL is the primary trait for maximizing S.MATK, while CON provides additional offensive power. Gear selection focuses on reducing fixed cast time, amplifying magic damage, and improving cooldown efficiency to ensure seamless spell execution. Buffs like Holy Shield and Prestige significantly enhance both survivability and offensive capabilities, making farming smoother. Shadow gear plays a crucial role in boosting DPS, while costume stones provide specialized effects that refine spell potency and casting speed, ensuring optimal performance in battle.",
  },
  {
    name: "Cardinal",
    buildName: "FS (Full Support)",
    buildDescription: "The Full Support Cardinal build is designed for party play, offering powerful healing, buffs, and utility to keep allies alive and enhance their performance. The key trait for maximizing healing effectiveness is CRT, which boosts H.Plus, while STA and WIS improve survivability through physical and magical resistance. Gear selection prioritizes cast time reduction, after-cast delay reduction, and tankiness, ensuring smooth execution of support skills. Buffs like Mediale Votum and Dilectio Heal provide strong AoE and targeted healing, while Lex Aeterna and Vituperatum enhance party damage output. Shadow gear focuses on reducing after-cast delay, while costume stones improve healing effectiveness and buff uptime, making this build highly efficient for sustained support",
  },
  {
    name: "Inquisitor",
    buildName: "TFB (Third Flame Bomb)",
    buildDescription: "The Third Flame Bomb build for Inquisitor is a high-damage melee combo that scales with max HP, making it one of the strongest burst options available. The key traits for maximizing damage are POW for P.ATK scaling and CON for additional attack power. Gear selection focuses on HP% bonuses, melee attack amplification, and cooldown reduction to ensure smooth execution of the three-step combo (First Brand → Second Flame → Third Flame Bomb). Buffs like Third Exorcism Flame and Judge are essential for enabling the combo, while Powerful Faith provides additional P.ATK. Shadow gear enhances melee damage scaling, while costume stones refine HP-based damage output, ensuring optimal burst potential",
  },
];

// Function to render basic class build
function renderAllBuilds() {
  const contentContainer = document.getElementById("content-container");
  if (!contentContainer) {
    console.error("Error: #content-container not found!");
    return;
  }

  // Clear previous content
  contentContainer.innerHTML = "";

  // Loop through each class and create a card
  classBuildsData.forEach((classBuildInfo) => {
    const contentCardOuterDiv = document.createElement("div");
    contentCardOuterDiv.className = "content-card-outer";

    const heading = document.createElement("h1");
    heading.textContent = classBuildInfo.name;

    const contentCardInnerDiv = document.createElement("div");
    contentCardInnerDiv.className = "content-card-inner";

    const contentDiv = document.createElement("div");
    contentDiv.className = "content";
    contentDiv.id = "content-builds";

    const buildHeading = document.createElement("h2");
    buildHeading.textContent = classBuildInfo.buildName;

    const buildDescription = document.createElement("p");
    buildDescription.textContent = classBuildInfo.buildDescription;

    contentDiv.appendChild(buildHeading);
    contentDiv.appendChild(buildDescription);
    contentCardOuterDiv.appendChild(heading);
    contentCardInnerDiv.appendChild(contentDiv);
    contentCardOuterDiv.appendChild(contentCardInnerDiv);
    contentContainer.appendChild(contentCardOuterDiv);
  });
}
