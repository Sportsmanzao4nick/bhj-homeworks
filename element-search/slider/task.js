const arrows = Array.from(document.querySelectorAll('.slider__arrow')),
      slides = Array.from(document.querySelectorAll('.slider__item')),
      dots = Array.from(document.querySelectorAll('.slider__dot'));

let itemIndex;

const findItemIndex = () => {
    return slides.findIndex((slide) =>
        slide.classList.contains("slider__item_active")
    );
};

arrows.forEach((arrow) => {
    let itemIndex;
    if (arrow.classList.contains("slider__arrow_prev")) {
        arrow.onclick = () => {
            itemIndex = findItemIndex();
            if (itemIndex > 0) {
                itemIndex--;
            } else {
                itemIndex = slides.length - 1;
            }
            showSlide(itemIndex);
        };
    } else if (arrow.classList.contains("slider__arrow_next")) {
        arrow.onclick = () => {
            itemIndex = findItemIndex();
            if (itemIndex < slides.length - 1) {
                itemIndex++;
            } else {
                itemIndex = 0;
            }
            showSlide(itemIndex);
        };
    }
});

dots.forEach((dot) => {
    dot.onclick = () => {
        dot.classList.toggle("slider__dot_active");
        const dotIndex = dots.indexOf(dot);
        showSlide(dotIndex);
    };
});

const showSlide = (index) => {
    resetslide();
    slides[index].classList.toggle("slider__item_active");
    dots[index].classList.toggle("slider__dot_active");
};

const resetslide = () => {
    slides.forEach((slide) => {
        slide.classList.remove("slider__item_active");
    });
    dots.forEach((dot) => {
        dot.classList.remove("slider__dot_active");
    });
};

