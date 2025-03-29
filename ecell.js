const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open');
});
});