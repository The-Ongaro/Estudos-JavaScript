import prompt from 'prompt-sync';
let ler = prompt();

let numeros2 = [10, 20, 30, 40];
let numeros = [1, 2, 3, 4];
let numeros3 = [];

for(let i = 0; i < numeros2.length; i++){
    let item2 = numeros2[i];
    let item = numeros[i];

    numeros3[i] = item2 / item;
}

for(let item of numeros3){
    console.log(item);
}