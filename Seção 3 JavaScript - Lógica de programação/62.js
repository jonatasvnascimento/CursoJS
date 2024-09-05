function NumeroDivisivel(numero){
    if (typeof numero !== "number")
        return "Não e um numero valido"

    if (numero < 0 || numero > 100)
        return "Numero fora do intervalo permitido"

    let descricao = "";

    if(numero % 3 === 0) descricao = "Fizz";
    if (numero % 5 === 0) descricao += "Buzz";

    if(descricao === "")
        return numero;
    else
        return descricao;
}


for (let i = 0; i < 100; i ++){
    let validacao = NumeroDivisivel(i);
    console.log(i, validacao);
}