let varA = "A"; // valor de A sera B
let varB = "B"; // valor de B sera C
let varC = "C"; // valor de C será A

// let aux = varA;
// varA = varB;
// varB = varC;
// varC = aux;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);