import prompt from 'prompt-sync';
let ler = prompt();

let notas = [];

console.log('Informe a quantidade de notas: ');
let qtd = Number(ler());

for(let cont = 0; cont < qtd; cont ++){
    console.log(`Digite a ${cont + 1}º nota: `);
    notas[cont] = Number(ler());
}

console.log('Notas digitadas: ');
console.log(notas.join(' - '));

console.log('A média é: ');
let soma = 0;
for(let cont = 0; cont < notas.length; cont ++){
    soma = soma + notas[cont];
}

let media = soma / notas.length;

console.log(media);