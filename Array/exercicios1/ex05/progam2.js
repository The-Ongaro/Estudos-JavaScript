import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Informe um número para saber sua respectiva tabuada: ');
let num = Number(ler());

for(let cont = 0; cont < numeros.length; cont ++){
    let mult = numeros[cont] * num;
    console.log(mult);
}