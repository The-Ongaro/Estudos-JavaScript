import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [];

console.log('Digite cinco números: ');
for(let cont = 0; cont < 5; cont ++){
    numeros[cont] = Number(ler());
}

console.log('Você digitou os números: ');
for(let item of numeros){
    console.log(item);
}