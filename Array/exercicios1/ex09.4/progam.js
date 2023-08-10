import prompt from 'prompt-sync';
let ler = prompt();

let notas = [];
let soma = 0;

console.log('Informe a quantidade de notas: ');
let qtd = Number(ler());

for(let cont = 0; cont < qtd; cont ++){
    console.log(`Digite a ${cont + 1 }º nota: `);
    notas[cont] = Number(ler());
}

console.log('Notas digitadas: ');
console.log(notas.join(' - '));

for(let cont = 0; cont < notas.length; cont ++){
    soma = soma + notas[cont];
}

let media = soma / notas.length;
let maior = Math.max.apply(null, notas);
let menor = Math.min.apply(null, notas);

console.log(`A média é ${media}`);
console.log(`A maior nota é ${maior}`);
console.log(`A menor nota é ${menor}`);