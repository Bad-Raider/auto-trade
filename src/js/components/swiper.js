import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

const widthDisplay = window.innerWidth >= 768;

if (widthDisplay) {
    var swiperServices = new Swiper('.services-list-wraper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        touchEventsTarget: 'services-list',
    });
} 
