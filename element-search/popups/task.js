const modalMain = document.getElementById('modal_main'),
      modalSuccess = document.querySelector('modal_success'),
      modalClose = Array.from(document.getElementsByClassName('modal__close'));
      showSuccess = document.querySelector('.show_success');

modalMain.classList.add('modal_active');

modalClose.forEach(item => item.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
});

showSuccess.onclick = function() {
    modalSuccess.classList.add('modal_active');
}

