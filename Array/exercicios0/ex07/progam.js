import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [5.5, 1.5, 3.0, 2.0];
let busca = 2;

let existe = false;
for(let item of numeros){
    if(item == busca)
    existe = true;
}
console.log(existe);