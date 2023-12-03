const prevButton = document.querySelector('.section-gallery__btn--prev');
const nextButton = document.querySelector('.section-gallery__btn--next');
const qualitiesList = document.querySelector('.qualities-list');

const width = 322;
let position = 0;

prevButton.onclick = function () {
    if (position === -322) {
        prevButton.style.display = 'none';
    }

    if (position >= 966) {
        nextButton.style.display = 'none';
    }
    if (position < -966) {
        nextButton.style.display = 'block';
    }

    position += width;
    qualitiesList.style.marginLeft = position + 'px';
};

nextButton.onclick = function () {
    if (position <= 0) {
        prevButton.style.display = 'block';
    }
    if (position === -966) {
        nextButton.style.display = 'none';
    }

    position -= width;
    qualitiesList.style.marginLeft = position + 'px';
};
