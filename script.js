document.addEventListener("contextmenu", (e) => e.preventDefault());
document.onkeydown = function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        return false;
    }
};
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const linkDiv = document.querySelector('.linkDiv');

    mobileMenuBtn.addEventListener('click', function () {
        linkDiv.classList.toggle('active');
    });
});

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader')
    loader.style.display = 'none'
})



const jobDisplay = document.getElementById('proffesion');

const jobTitles = [
    { text: "Front end Dev" },
    { text: "Backend Dev" },
    { text: "UI/UX Designer" }
];

let currentJobIndex = 0;

function animateJobTitles() {
    // Update the text
    jobDisplay.textContent = jobTitles[currentJobIndex].text;

    // Restart the CSS animation by forcing reflow
    jobDisplay.classList.remove('fadeIn');
    void jobDisplay.offsetWidth; // triggers reflow
    jobDisplay.classList.add('fadeIn');

    // Move to next index
    currentJobIndex = (currentJobIndex + 1) % jobTitles.length;
}

// Start immediately
animateJobTitles();

// Run every 2.5 seconds
setInterval(animateJobTitles, 1500);



const skill = document.querySelector('.skill')
const distance = skill.getBoundingClientRect().top;
let bars = document.querySelectorAll('.bar');
const height = window.innerHeight
for (i = 0; i < length; i++) {
    if (distance < height - 100) {
        let bar = bars[i];
        let target = bar.getAttribute('data-target')
        setTimeout(function () {
            bar.style.width = target + "%"
        }, 300)
    } else {
        for (i = 0; 1 < length; i++);
        let bar = bars[i]
        bar.style.width = target + '%'
    }
}
window.addEventListener('scroll', function () {
    const skill = document.querySelector('.skillcntnt');
    const distance = skill.getBoundingClientRect().top;
    const bars = document.querySelectorAll('.bar');
    const height = window.innerHeight;

    bars.forEach(bar => {
        const target = bar.getAttribute('data-target');
        if (distance < height - 70) {
            setTimeout(() => {
                bar.style.width = target + "%";
            }, 300);
        } else {
            bar.style.width = "0%";
        }
    });
});



function timeUpdate() {
    const time = document.getElementById('time')
    const now = new Date()
    const timeString = now.toLocaleString();
    time.textContent = timeString
}
setInterval(timeUpdate, 1000);
timeUpdate

