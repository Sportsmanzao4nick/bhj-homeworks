let timerId = null,
    count = document.getElementById('timer'),
    countVar = count.textContent;
const currentDate = new Date (0000, 0, 0, 0, 0, 0, 0),
      hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`,
      minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`,
      currentTime = `${hours}:${minutes}:`; 

function countdown () {       
    if (countVar > 0) {               
        countVar--;
        if (countVar < 10) {
            countVar = '0' + countVar;
        }
        let sumTime = currentTime + countVar.toString();               
        count.textContent = sumTime;        
    } else {
        clearTimeout(timerId);
        alert('Вы победили в конкурсе!')
    }
}
timerId = setInterval(countdown, 1000);