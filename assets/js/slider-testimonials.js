const prevButton = document.querySelector('#arrow-prev');
const nextButton = document.querySelector('#arrow-next');
const slider = document.querySelector('.testimonial-slider');
let currentSlide = 0;
const totalSlides = slider.children.length;
const slideWidth = slider.children[0].offsetWidth;
const visibleSlides = 2; // Adjust this to change how many are visible at once

nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

function updateSlider() {
    const offset = -(slideWidth + 20) * currentSlide; // 20 is the gap between cards
    slider.style.transform = `translateX(${offset}px)`;
}