let nome = "Eliot"; //Tipo string
let idade = 30; // Tipo number
let altura = 1.80; // Tipo number
let solteiro = true; //Tipo boolean
var semIniciar; //Tipo undefined Não aponta para nenhum valor
let valorNull = null; //Tipo object que não aponta para nenhum valor
let valorUndefined = undefined; //Tipo object que não aponta para nenhum valor
let simbolo = Symbol(); //Tipo symbol
let novoObjeto = {}; //Tipo object
let novoArray = []; //Tipo object

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((n) => {
    if (n == 2) {
        console.log("Aqui e o 2");
        return;
    }
    console.log(n);
});
