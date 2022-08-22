const dropdown = document.querySelector('.dropdown'),
      dropdownList = document.querySelector('.dropdown__list'),
      dropdownItem = Array.from(dropdownList.querySelectorAll('.dropdown__item')),
      dropdownValue = document.querySelector('.dropdown__value');

dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItem.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownValue.textContent = item.textContent;
}));