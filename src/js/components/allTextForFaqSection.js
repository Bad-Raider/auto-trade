const faqIconBtn = document.querySelectorAll('.faq-icon');
console.log(faqIconBtn);
const faqItemText = document.querySelectorAll('.faq-item__text');
const faqItem = document.querySelectorAll('.faq-item');


faqIconBtn.forEach((iconBtn, index) => {
    iconBtn.addEventListener('click', () => {
        textElement = faqItemText[index];
        faqItemElement = faqItem[index];
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
});
