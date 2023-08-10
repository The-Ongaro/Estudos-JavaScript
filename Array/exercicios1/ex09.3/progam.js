import prompt from 'prompt-sync';
let ler = prompt();

let notas = [];

console.log('Informe a quantidadede notas: ');
let qtd = Number(ler());

for(let cont = 0; cont < qtd; cont ++){
    console.log(`Digite a ${cont + 1}º nota: `);
    notas[cont] = Number(ler());
}

console.log('Notas digitadas: ');
console.log(notas.join(' - '));

console.log('A menor nota é: ');
let menor = Math.min.apply(null, notas);

console.log(menor);