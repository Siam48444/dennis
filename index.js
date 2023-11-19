// Hamburger Button Appears
function HamburgerButtonAppears() {
    const hamburgerMenuButton = document.querySelector(".hamburgerMenuButton");
    const heroSection = document.querySelector(".heroSection");
    const heroSectionPosition = heroSection.getBoundingClientRect().bottom; 
    const windowPosition = window.innerHeight / 1.2;

    if(heroSectionPosition < windowPosition) {
        hamburgerMenuButton.classList.add("hamburgerMenuButtonAppeared");
    } else {
        hamburgerMenuButton.classList.remove("hamburgerMenuButtonAppeared");
    };

    console.log(windowPosition);
};

window.addEventListener("scroll", HamburgerButtonAppears);
