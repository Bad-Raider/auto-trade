const icon = document.querySelector('.stages-list__icon use');

if (window.innerWidth <= 744) {
    icon.setAttribute('href', './images/small-symbol-defs.svg#icon-vector-mobile');
} else {
    icon.setAttribute('href', './images/large-symbol-defs.svg#icon-vector-tablet');
}
