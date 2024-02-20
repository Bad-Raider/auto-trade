const faqIconBtn = document.querySelectorAll('.faq-icon');
const faqItemText = document.querySelectorAll('.faq-item__text');
const faqItem = document.querySelectorAll('.faq-item');

for (let i = 0; i < faqIconBtn.length; i++) {
    const iconBtn = faqIconBtn[i];
    iconBtn.addEventListener('click', () => {
        const textElement = faqItemText[i];
        const faqItemElement = faqItem[i];
        const isExpanded = textElement.classList.contains('expanded');

        if (isExpanded) {
            textElement.classList.remove('expanded');
            textElement.style.display = 'none';
            iconBtn.style.transform = 'rotate(0deg)';
        } else {
            textElement.classList.add('expanded');
            textElement.style.display = 'block';
            faqItemElement.style.display = 'block';
            iconBtn.style.transform = 'rotate(180deg)';
        }
    });
}
