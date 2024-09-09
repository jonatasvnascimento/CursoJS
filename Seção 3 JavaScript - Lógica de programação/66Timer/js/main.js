const displayTimer = document.querySelector('.DisplayTimer')
const btnInicar = document.querySelector('.btnInicar')
const btnPausar = document.querySelector('.btnPausar')
const btnZerar  = document.querySelector('.btnZerar')
let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;
let timerId = null ;

btnInicar.addEventListener('click', () => {
    iniciarTimer();
})

btnPausar.addEventListener('click', () => {
    pausarTimer();
})

btnZerar.addEventListener('click', () => {
    zerarTimer();
})

function iniciarTimer(){
    if(timerId !== null) return;

    timerId = setInterval(() => {

        segundos++;
        if(segundos === 60){
            segundos = 0;
            minutos++;
        }

        if (minutos === 60){
            minutos = 0;
            horas++;
        }

        if (horas === 24){
            horas = 0;
            dias++;
        }

        formatTime()
    }, 1000);
}


function pausarTimer(){
    clearInterval(timerId);
    timerId = null;
}

function zerarTimer(){
    pausarTimer();
    resetTime()
    formatTime()
}

function formatTime(){
    segundos = String(segundos).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    horas = String(horas).padStart(2, '0');
    dias = String(dias).padStart(2, '0');
    displayTimer.innerHTML = `${dias}:${horas}:${minutos}:${segundos}`
}

function resetTime(){
    segundos = 0;
    minutos = 0;
    horas = 0;
    dias = 0;
}
