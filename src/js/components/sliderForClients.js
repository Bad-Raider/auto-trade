document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.clients-item');
    const prevButton = document.querySelector('.clients-btn-prev');
    const nextButton = document.querySelector('.clients-btn-next');

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    }

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'flex' : 'none';
        });
        updateButtons();
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    updateSlides();
});
