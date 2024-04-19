let umaString = "isso e @lum \"texto\" de teste para estados de string usando metodos."

console.log(umaString[0]);
console.log(umaString.charAt(1)); //mesma coisa que o de cima
console.log(umaString.charCodeAt(0)); //codigo unicode
console.log(umaString.concat(' em um lindo dia')); // concatenar strings
console.log(umaString.indexOf('ss')); // retorna o indice do primeiro valor
console.log(umaString.indexOf('o', 3)); // retornar o valor a partir do indice 3
console.log(umaString.lastIndexOf('o')); // retorna o indice do ultimo valor
console.log(umaString.match(/[@]/)); // retorna um array com os valores encontrados
console.log(umaString.search(/o/)); // retorna o indice do valor encontrado
console.log(umaString.replace("@", "#")); // substitui o valor por outro
console.log(umaString.replace(/e/g, '*')) // substitui o valor por outro com regex
console.log(umaString.length); // retorna o tamanho da string
console.log(umaString.slice(0, 4)) // retorna um pedaço da string
console.log(umaString.slice(-10, -1)) // retorna um pedaço da string de traz para frente falando onde ela começa
console.log(umaString.substring(umaString.length - 10, umaString.length - 1)) // corta como o slice com e mais dificio usar valores negativo, use o slice
console.log(umaString.split(" ")); // divide a string em pedaços
console.log(umaString.toUpperCase()); // transforma todas as letras em maiusculas
console.log(umaString.toLowerCase()); // transforma todas as letras em minusculas
