// Scroll-to-top button
import './js/components/btnBackToTop.js';
// Show full text in inspection section
import './js/components/inspection.js';

window.addEventListener('load', function () {
    const heroWrapper = document.querySelector('.hero-wraper');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const widthTablet = 744;
    const widthDesktop = 1160;
    const maxHeightDesktopHero = 760;
    const maxHeightTabletHero = 1133;
    const maxHeightMobileHero = 812;
    const totalDesktopElement = 494;
    const totalTabletElement = 561;
    const totalMobileElement = 248;

    if (viewportWidth >= widthDesktop) {
        heroWrapper.style.padding = addDesktopHeroTopAndBottomPadding(
            maxHeightDesktopHero,
            totalDesktopElement
        );
    } else if (viewportWidth >= widthTablet) {
        if (viewportHeight <= maxHeightTabletHero) {
            heroWrapper.style.padding = addHeroTopAndBottomPadding(
                viewportHeight,
                totalTabletElement
            );
        } else {
            heroWrapper.style.padding = addHeroTopAndBottomPadding(
                maxHeightTabletHero,
                totalTabletElement
            );
        }
    } else {
        if (viewportHeight <= maxHeightMobileHero) {
            heroWrapper.style.padding = addHeroTopAndBottomPadding(
                viewportHeight,
                totalMobileElement
            );
        } else {
            heroWrapper.style.padding = addHeroTopAndBottomPadding(
                maxHeightMobileHero,
                totalMobileElement
            );
        }
    }
});

const addHeroTopAndBottomPadding = (viewportHeight, totalElements) => {
    return (
        (viewportHeight - totalElements) / 2 +
        'px 0 ' +
        (viewportHeight - totalElements) / 2 +
        'px'
    );
};

const addDesktopHeroTopAndBottomPadding = (viewportHeight, totalElements) => {
    const remnant = viewportHeight - totalElements;
    const topPadding = (remnant * 61) / 100;
    const bottomPadding = remnant - topPadding;

    return topPadding + 'px 0 ' + bottomPadding + 'px';
};
