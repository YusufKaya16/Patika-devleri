const name1 = document.querySelector('#myName');
const clock = document.querySelector('#myClock');

let inputName = prompt('Lütfen isminizi giriniz');
name1.textContent = inputName;
window.addEventListener('load', showTime);

function showTime() {

    let dayName;
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    const currentClock = [hours, minutes, seconds];
    let current = currentClock.join(':');

    switch (day) {
        case 0:
            dayName = "Pazar";
            break;
        case 1:
            dayName = "Pazartesi";
            break;
        case 2:
            dayName = "Salı";
            break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
    }

    clock.textContent = current + ` ${dayName}`;
}

setInterval(showTime, 1000);