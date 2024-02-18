import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

const widthDisplay = window.innerWidth >= 768;
const widthMobilDisplay = window.innerWidth <= 768;

if (widthDisplay) {
    const swiperServices = new Swiper('.services-list-wraper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        slideClass: 'services-slide',
        touchEventsTarget: 'services-list',
    });
}

if (widthMobilDisplay) {
    const swiperQualities = new Swiper('.section-gallery', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        slideClass: 'qualities-slide',
        touchEventsTarget: 'qualities-list',
    });
}

const swiperInspection = new Swiper('.inspection-gallery', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    allowTouchMove: true,
    slideClass: 'inspection-slide',
    touchEventsTarget: 'inspection-list',
});

