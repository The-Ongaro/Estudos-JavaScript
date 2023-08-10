import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [];

console.log('Informe a quantidade de números: ');
let qtd = Number(ler());

console.log('Digite os números: ');
for(let cont = 0; cont < qtd; cont ++){
    numeros[cont] = Number(ler());
}
console.log('Você digitou os números: ');
console.log(numeros.reverse().join(', '));