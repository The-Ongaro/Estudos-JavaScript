import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [];
let dobro = [];

console.log('Informe a quatidade de números: ');
let qtd = Number(ler());

console.log('Informe os números: ');
for(let cont = 0; cont < qtd; cont ++){
    numeros[cont] = Number(ler());
}

console.log('Você digitou os números: ');
for(let item of numeros){
    console.log(item);
}

console.log('O dobro desses números são: ');
for(let item of numeros){
    dobro = item * 2;
    console.log(dobro);
}