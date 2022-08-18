const cookieSize = document.getElementById('cookie'),
      normalSize = () => {
        cookieSize.width = 200;
      }
let count = document.getElementById('clicker__counter').textContent;

function countClicks() {
    cookieSize.width = 500;
    count ++;
    clicker__counter.textContent = count;
    setTimeout(normalSize, 100);
}

cookieSize.onclick = countClicks;