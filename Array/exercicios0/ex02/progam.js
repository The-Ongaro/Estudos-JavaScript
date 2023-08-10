import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [4, 2, 3];

for(let item of numeros){
    console.log(item);
}

console.log('======')

numeros [2] = 1;
numeros [1] = 2;
numeros [0] = 3;

for(let item of numeros){
    console.log(item);
}