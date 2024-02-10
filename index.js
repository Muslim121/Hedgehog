const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

revealBtn.style.cursor = "pointer";

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
    revealBtn.innerText = "Reveal more";
  } else {
    hiddenContent.classList.add("reveal-btn");
    revealBtn.innerText = "Hide";
  }
}

revealBtn.addEventListener("click", revealContent);
