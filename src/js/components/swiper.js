import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

const widthDisplay = window.innerWidth >= 768;

if (widthDisplay) {
    var swiperServices = new Swiper('.services-list-wraper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        slideClass: 'services-slide',
        touchEventsTarget: 'services-list',
    });
}

const widthMobilDisplay = window.innerWidth <= 768;

if (widthMobilDisplay) {
    const swiperQualities = new Swiper('.section-gallery', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        slideClass: 'qualities-slide',
        touchEventsTarget: 'qualities-list',
    });
}
