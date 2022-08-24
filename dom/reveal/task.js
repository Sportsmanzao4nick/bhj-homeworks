const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', () => {
    reveal.forEach(el => {
        const viewportHeight = window.innerHeight,
              elementBottom = el.getBoundingClientRect().bottom;
        if (elementBottom < viewportHeight) {
            el.classList.add('reveal_active');
        }
    });
});
