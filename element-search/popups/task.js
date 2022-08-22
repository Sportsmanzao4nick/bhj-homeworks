const modalMain = document.getElementById('modal_main'),
      modalClose = Array.from(document.getElementsByClassName('modal__close')),
      modalSuccess = document.getElementById('modal_success'),
      showSuccess = document.querySelector('.show-success');

modalMain.classList.toggle('modal_active');

modalClose.forEach(item => item.onclick = function() {  
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.remove('modal_active');
});

showSuccess.onclick = function() {
  modalSuccess.classList.toggle('modal_active');
  modalMain.style.display = "none";
};