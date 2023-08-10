import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [5.5, 1.5, 3.0, 2.0];

let busca = 3;
let pos = -1;

for(let i = 0; i < numeros.length; i++){
    let item = numeros[i];

    if(item == busca)
        pos = i;
}
console.log(pos);