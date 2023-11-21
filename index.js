// Elements Appear in Scroll
function AppearInScroll() {
    const detailsSection = document.querySelector(".detailsSection");
    const detailsSectionPosition = detailsSection.getBoundingClientRect().top;
    const windowPosition = window.innerHeight / 1.5;

    if(detailsSectionPosition < windowPosition) {
        detailsSection.classList.add("scrollAppeared");
    } else {
        detailsSection.classList.remove("scrollAppeared"); 
    };
};
window.addEventListener("scroll", AppearInScroll);
