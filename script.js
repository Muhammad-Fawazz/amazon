
let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Auto slide change every 5 seconds
setInterval(() => changeSlide(1), 5000);
