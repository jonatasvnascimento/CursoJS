const displayTimer = document.querySelector('.DisplayTimer')
const btnInicar = document.querySelector('.btnInicar')
const btnPausar = document.querySelector('.btnPausar')
const btnZerar  = document.querySelector('.btnZerar')
const slider = document.querySelector('.slider')
const demo = document.querySelector('#demo')
let segundos = 0;
let timerId = null ;
let sliderValue = 1000;

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

function CreateHouresOfSeconds(secounds){
    const data = new Date(secounds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function IniciarTimer(){
    if(timerId !== null) return;
    timerId = setInterval(() => {
        segundos++;
        displayTimer.innerHTML = CreateHouresOfSeconds(segundos);
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
    segundos = 0;
    displayTimer.innerHTML = CreateHouresOfSeconds(0);
}


function ResetTime(){
    segundos = 0;
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
    sliderValue = 1000;
    demo.innerHTML = 1000;
}


