const paragrafos = document.querySelectorAll('p');

const estiloBody = window.getComputedStyle(document.body);
const corDeFundo = estiloBody.backgroundColor;

for (let p of paragrafos){
    p.style.backgroundColor = corDeFundo;
    p.style.color = 'white';
    p.style.borderRadius = '10px';
}



