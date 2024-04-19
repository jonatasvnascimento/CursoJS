let n1 = prompt("Digite o 1° numero:");
let n2 = prompt("Digite o 2° numero:");
let simboloOperacao = prompt("Escolha uma Operacação: (+, -, *, /)");
let resultado = 0;

resultado = calculo(n1, n2, simboloOperacao);
console.log(resultado);

function calculo(n1, n2, simboloOperacao) {

    let operacao = 0;

    if (simboloOperacao == "+") {
        operacao = Number(n1) + Number(n2);
    } else if (simboloOperacao == "-") {
        operacao = Number(n1) - Number(n2);
    } else if (simboloOperacao == "*") {
        operacao = Number(n1) * Number(n2);
    } else if (simboloOperacao == "/") {
        operacao = Number(n1) / Number(n2);
    }

    if (isNaN(operacao) || operacao == null || operacao == undefined) {
        return "Por favor, digite apenas números";
    }

    return operacao;
}




