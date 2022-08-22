const links = Array.from(document.getElementsByClassName('menu__link'));

links.forEach(item => item.addEventListener('click', function(event) {
    if ((item.parentElement.getElementsByClassName('menu_sub')).length == 1) {
        event.preventDefault();
        const menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
        menuSub.forEach(sub => sub.classList.toggle('menu_active'));
    }
}));