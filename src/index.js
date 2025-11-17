import './style.css';
const buttons = document.querySelectorAll('.carousel-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slide = button.closest('[data-carousel]').querySelector('[data-slides]');
        const current = slide.querySelector('[data-active]');
        let newIndex = [...slide.children].indexOf(current) + offset;
        if (newIndex < 0) newIndex = slide.children.length - 1;
        if (newIndex >= slide.children.length) newIndex = 0;
        slide.children[newIndex].dataset.active = true;
        delete current.dataset.active;
    });
});
