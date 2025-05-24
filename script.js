const buttons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab-content");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
    button.classList.add("active");
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const linkDiv = document.querySelector(".linkDiv");

  mobileMenuBtn.addEventListener("click", function () {
    linkDiv.classList.toggle("active");
    mobileMenuBtn.setAttribute(
      "aria-expanded",
      linkDiv.classList.contains("active")
    );
  });
});

// Hide loader after page load
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  if (loader) loader.style.display = "none";
});

// Animate job titles
const jobDisplay = document.getElementById("proffesion");
const jobTitles = ["Front-end Dev", "Back-end Dev", "UI/UX Designer"];
let currentJobIndex = 0;

function animateJobTitles() {
  if (jobDisplay) {
    jobDisplay.textContent = jobTitles[currentJobIndex];
    jobDisplay.classList.remove("fadeIn");
    void jobDisplay.offsetWidth; // Trigger reflow
    jobDisplay.classList.add("fadeIn");
    currentJobIndex = (currentJobIndex + 1) % jobTitles.length;
  }
}

animateJobTitles();
setInterval(animateJobTitles, 2500); // Run every 2.5 seconds

// Animate skill bars on scroll
window.addEventListener("scroll", function () {
  const skillSection = document.querySelector(".skillcntnt");
  const bars = document.querySelectorAll(".bar");
  const windowHeight = window.innerHeight;

  if (skillSection) {
    const distance = skillSection.getBoundingClientRect().top;

    bars.forEach((bar) => {
      const target = bar.getAttribute("data-target");
      if (distance < windowHeight - 70) {
        bar.style.width = target + "%";
      } else {
        bar.style.width = "0%";
      }
    });
  }
});

// Update time dynamically
function timeUpdate() {
  const timeElement = document.getElementById("time");
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
  }
}
setInterval(timeUpdate, 1000);
timeUpdate();
