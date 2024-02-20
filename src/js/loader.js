document.onreadystatechange = function () {
    if (document.readyState !== 'complete') {
        document.querySelector('#loader').style.visibility = 'visible';
        document.querySelector('.loader-wrapper').style.visibility = 'visible';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    }
};
