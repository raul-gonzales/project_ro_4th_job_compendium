import "./styles.css"; // import css styles file
import { renderAllClasses } from "./classes_page.js"; // import function to create classes page
import { renderAllClassesSkills } from "./skills_page.js"; // import function to create skills page
import { renderAllBuilds } from "./builds_page.js";

renderAllClasses();
document.getElementById("classes-button").style.backgroundColor =
  "white";
document.getElementById("skills-button").style.backgroundColor =
  "var(--oak-brown)";
document.getElementById("builds-button").style.backgroundColor =
  "var(--oak-brown)";
const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "classes-button":
        renderAllClasses();
        document.getElementById("classes-button").style.backgroundColor =
          "var(--marigold)";
        document.getElementById("skills-button").style.backgroundColor =
          "var(--oak-brown)";
        document.getElementById("builds-button").style.backgroundColor =
          "var(--oak-brown)";
        document.getElementById("classes-button").style.color = "black";
        document.getElementById("skills-button").style.color = "white";
        document.getElementById("builds-button").style.color = "white";
        break;
      case "skills-button":
        renderAllClassesSkills();
        document.getElementById("classes-button").style.backgroundColor =
          "var(--oak-brown)";
        document.getElementById("skills-button").style.backgroundColor =
          "var(--marigold)";
        document.getElementById("builds-button").style.backgroundColor =
          "var(--oak-brown)";
        document.getElementById("classes-button").style.color = "white";
        document.getElementById("skills-button").style.color = "black";
        document.getElementById("builds-button").style.color = "white";
        break;
      case "builds-button":
        renderAllBuilds();
        document.getElementById("classes-button").style.backgroundColor =
          "var(--oak-brown)";
        document.getElementById("skills-button").style.backgroundColor =
          "var(--oak-brown)";
        document.getElementById("builds-button").style.backgroundColor =
          "var(--marigold)";
        document.getElementById("classes-button").style.color = "white";
        document.getElementById("skills-button").style.color = "white";
        document.getElementById("builds-button").style.color = "black";
        break;
      default:
        break;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    // Create a modal container
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img id="modal-img" src="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-btn");

    // Add click event to all skill images
    document.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG" && e.target.closest("#content-skills")) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



console.log("Webpack is working!");
