import prompt from 'prompt-sync';
let ler = prompt();

let doacoes = [];
let soma = 0;

console.log('Informe o projeto que deseja fazer doações: ');
let doacao = ler();

console.log('Informe a quantidade de doações: ');
let qtd = Number(ler());

console.log('Informe a meta que deseja atingir: ');
let meta = Number(ler());

for(let cont = 0; cont < qtd; cont ++){
    console.log(`Digite o ${cont + 1}º valor: `);
    doacoes[cont] = Number(ler());
}

for(let item of doacoes){
    soma += item;
}

let maior = doacoes[0];
for(let pos = doacoes -1; pos >= 0; pos ++){
    if(maior < doacoes[pos]){
        maior = doacoes[pos];
    }
}

console.log(`O projeto ${doacao} recebeu ${qtd} de doações, totalizando ${soma} reais.`);
console.log();

console.log('Doações:');
console.log(doacoes.join(' - '));
console.log();

console.log(`A maior doação foi ${maior} reais.`);
if(soma >= meta){
    console.log('A meta foi atingida!');
}
else{
    console.log('Não foi possível atingir a meta...');
}