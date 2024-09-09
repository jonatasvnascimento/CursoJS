const displayTimer = document.querySelector('.DisplayTimer')
const btnInicar = document.querySelector('.btnInicar')
const btnPausar = document.querySelector('.btnPausar')
const btnZerar  = document.querySelector('.btnZerar')
const slider = document.querySelector('.slider')
const demo = document.querySelector('#demo')
let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;
let timerId = null ;
let sliderValue = 0;

window.onload = function(){
    resetSlider();
}


slider.addEventListener('input', (event) => {
    demo.innerHTML = event.target.value;
    sliderValue = event.target.value;
})

slider.addEventListener('change', (event) => {
    PausarTimer();
    IniciarTimer();
})

btnInicar.addEventListener('click', () => {
    IniciarTimer();
    AddStileOnDisplayTime('active');
})

btnPausar.addEventListener('click', () => {
    PausarTimer();
    AddStileOnDisplayTime('desactive');
})

btnZerar.addEventListener('click', () => {
    ZerarTimer();
    AddStileOnDisplayTime('active');
})

function IniciarTimer(){
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

        FormatTime()
    }, sliderValue);
}


function PausarTimer(){
    clearInterval(timerId);
    timerId = null;
}

function ZerarTimer(){
    PausarTimer();
    ResetTime()
    FormatTime()
}

function FormatTime(){
    segundos = String(segundos).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    horas = String(horas).padStart(2, '0');
    dias = String(dias).padStart(2, '0');
    displayTimer.innerHTML = `${dias}:${horas}:${minutos}:${segundos}`
}


function ResetTime(){
    segundos = 0;
    minutos = 0;
    horas = 0;
    dias = 0;
    resetSlider();
}

function AddStileOnDisplayTime(stile){
    if (stile === 'active'){
        displayTimer.style.color = 'black';
    }else if (stile === 'desactive'){
        displayTimer.style.color = 'red';
    }
}

function resetSlider(){
    slider.setAttribute('min', 0);
    slider.setAttribute('max', 2000);
    slider.value = 1000;
    demo.innerHTML = 1000;
}


