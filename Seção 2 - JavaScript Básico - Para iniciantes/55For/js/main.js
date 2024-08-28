const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const tagPrincipal = document.createElement('div');
container.appendChild(tagPrincipal);


function criarElemento(tag, texto) {
    const novoElemento = document.createElement(tag);
    novoElemento.innerHTML = texto;
    tagPrincipal.appendChild(novoElemento)
}

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    criarElemento(tag, texto)
}