import prompt from 'prompt-sync';
let ler = prompt();

let n = 5;
let numeros = [];

for(let i = 0; i < 5; i++){
    numeros[i] = ler();
} 

for(let item of numeros){
    console.log(n);
}