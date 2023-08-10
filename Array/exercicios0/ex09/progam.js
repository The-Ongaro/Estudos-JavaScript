import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [10, 20, 30, 40];
let numeros2 = [];

for(let i = 0; i < numeros.length; i++){
    let item = numeros[i];
    numeros2[i] = item + 1;
}

for(let item of numeros2){
    console.log(item);
}