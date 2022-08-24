const fontSize = Array.from(document.querySelectorAll('.font-size')),
      bookContent = document.querySelectorAll('.book__content'),
      book = document.querySelector('.book'),
      color = Array.from(document.querySelectorAll('.book__control_color > .color')),
      background = Array.from(document.querySelectorAll('.book__control_background > .color'));

fontSize.forEach(item => item.addEventListener('click', function(e) {
    e.preventDefault();
    fontSize.forEach(item => item.classList.remove('font-size_active'));
    item.classList.add('font-size_active');
    if (item.classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if (item.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');        
    }
}));

color.forEach(item => item.addEventListener('click', function(el) {
    el.preventDefault();
    color.forEach(item => item.classList.remove('color_active'));
    item.classList.add('color_active');
    if (item.classList.contains('text_color_black')) {
        book.classList.remove('book_color-gray');
        book.classList.remove('book_color-whitesmoke');
        book.classList.add('book_color-black');
    } else if (item.classList.contains('text_color_gray')) {
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-whitesmoke');
        book.classList.add('book_color-gray');
    } else if (item.classList.contains('text_color_whitesmoke')) {
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-gray');
        book.classList.add('book_color-whitesmoke');
    }
}));

background.forEach(item => item.addEventListener('click', function(element) {
    element.preventDefault();
    background.forEach(item => item.classList.remove('color_active'));
    item.classList.add('color_active');
    if (item.classList.contains('bg_color_black')) {
        book.classList.remove('book_bg-white');
        book.classList.remove('bg_color_gray');
        book.classList.add('book_bg-black');
    } else if (item.classList.contains('bg_color_gray')) {
        book.classList.remove('book_bg-white');
        book.classList.remove('book_bg-black');
        book.classList.add('book_bg-gray');
    } else if (item.classList.contains('bg_color_white')) {
        book.classList.remove('bg_color_gray');       
        book.classList.remove('book_bg-black');
        book.classList.add('book_bg-white');
    }
}));