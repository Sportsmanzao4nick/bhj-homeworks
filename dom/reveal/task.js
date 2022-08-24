const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', () => {
    reveal.forEach(el => {
        const viewportHeight = window.innerHeight,
              elementTop= el.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            el.classList.add('reveal_active');
        } else if (elementTop <= 0) {
            el.classList.remove('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
});
