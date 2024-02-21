if (window.innerWidth >= 768) {
    let lastScrollTop = 0;

    window.addEventListener(
        'scroll',
        function () {
            let currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop) {
                // прокручуємо вниз
                document.querySelector('.header-wraper').style =
                    'transform: translateY(-150%)';
                // ховаємо заголовок
            } else {
                // прокручуємо догори
                document.querySelector('.header-wraper').style =
                    'transform: translateY(0%)';
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для Мобільних пристроїв
        },
        false
    );
}
