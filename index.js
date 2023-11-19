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
};
window.addEventListener("scroll", HamburgerButtonAppears);



// Elements Appear in Scroll
function AppearInScroll() {
    const detailsSection = document.querySelector(".detailsSection");
    const detailsSectionPosition = detailsSection.getBoundingClientRect().top;
    const windowPosition = window.innerHeight / 2.1;

    if(detailsSectionPosition < windowPosition) {
        detailsSection.classList.add("scrollAppeared");
    } else {
        detailsSection.classList.remove("scrollAppeared"); 
    };
};
window.addEventListener("scroll", AppearInScroll);
