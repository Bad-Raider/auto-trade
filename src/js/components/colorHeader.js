// Отримуємо елемент контейнера
const headerContainer = document.querySelector('.header-container');

// Отримуємо секцію, до якої ви хочете слідкувати при скролі
const targetSection = document.querySelector('.target-section');

// Функція, яка буде виконуватися при прокрутці
function handleScroll() {
    const scrollPosition = window.scrollY;
    const sectionTop = targetSection.offsetTop;

    if (scrollPosition >= sectionTop) {
        headerContainer.classList.add('scroll');
    } else {
        headerContainer.classList.remove('scroll');
    }
}

// Додавання обробника прокрутки
window.addEventListener('scroll', handleScroll);
