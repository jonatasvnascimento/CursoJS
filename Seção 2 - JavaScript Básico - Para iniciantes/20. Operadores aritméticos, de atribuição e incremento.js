let n1 = 10;
let n2 = 10;

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;

let moduloResto = n1 % n2;
let aoQuadrado = n1 ** n2;

let incrementoDepois = n1++;
let decremento = n1--;
let incrementoAntes = ++n1;
let decrementoAntes = --n1;

let multiplicacaoIncremento = n1 *= 2;
let multiplicacaoDecremento = n1 /= 2;
let multiplicadorQuadratico = n1 **= n2;

let parceInteiro = parseInt("10") + 10;

console.log(`
    soma: ${soma}
    subtracao: ${subtracao}
    multiplicacao: ${multiplicacao}
    divisao: ${divisao}
    moduloResto: ${moduloResto}
    aoQuadrado: ${aoQuadrado}
    incrementoDepois: ${incrementoDepois}
    decremento: ${decremento}
    incrementoAntes: ${incrementoAntes}
    decrementoAntes: ${decrementoAntes}
    multiplicacaoIncremento: ${multiplicacaoIncremento}
    multiplicacaoDecremento: ${multiplicacaoDecremento}
    multiplicadorQuadratico: ${multiplicadorQuadratico}
    parceInteiro: ${parceInteiro}`
);

//precedencia de operadores
/**
 * ()
 * **
 * * / %
 * + -
 * /
 */


