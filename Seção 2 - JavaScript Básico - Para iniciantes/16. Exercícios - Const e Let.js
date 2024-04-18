const nome = "Eliot";
const anos = new Date().getFullYear() - 1999;
const peso = 84;
const alturaEmMetros = 1.80;

const imc = peso / alturaEmMetros ** 2;

console.log(`${nome} tem ${anos}, pesa ${peso} \ntem ${alturaEmMetros} de altura e seu IMC e de ${imc.toFixed(2)}`);

