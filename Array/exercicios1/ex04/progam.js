import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [];
let numInv = [];
let contInicial = 0;

console.log('Informe a quantidade de números: ');
let qtd = Number(ler());

console.log('Informe os números: ')
for(let cont = 0; cont < qtd; cont ++){
    numeros[cont] = Number(ler());
}

for(let cont = numeros.length-1; cont >= 0; cont --){
    numInv[contInicial] = numeros[cont];
    contInicial ++;
}

console.log('Você digitou os números: ');
for(let item of numInv){
    console.log(item);
}