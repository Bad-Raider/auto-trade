const menu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerCross = document.querySelector('.header-burger-menu-icon-cross');
const burgerIcon = document.querySelector('.header-burger-menu-icon');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    // cheking class on element
    if (burgerMenu.classList.contains('active')) {
        burgerCross.style = 'opacity: 1';
        burgerIcon.style = 'opacity: 0';
        menu.style = '    transform: translateY(0%)';
    } else {
        burgerCross.style = 'opacity: 0';
        burgerIcon.style = 'opacity: 1';
        menu.style = '    transform: translateY(-150%)';
    }
});
