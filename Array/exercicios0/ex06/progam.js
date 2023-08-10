import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [5.5, 1.5, 3.0];

let soma = 0;
for(let item of numeros){
    soma += item;
}
console.log(soma);