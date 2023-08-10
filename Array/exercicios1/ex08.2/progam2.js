import prompt from 'prompt-sync';
let ler = prompt();

let nomes = [];
let letra = 'L';
let letra2 = 'H';

console.log('Informe a quatidade de nomes: ');
let qtd = Number(ler());

for(let cont = 0; cont < qtd; cont++){
    console.log(`Digite o ${cont + 1}º nome: `);
    nomes[cont] = ler();
}

console.log('Os nomes após o filtro são: ');
for(let cont = 0; cont < qtd; cont ++){
    nomes[cont];

    for(let pos = 0; pos < 1; pos ++){
        nomes[cont].charAt(pos);

        if(nomes[cont] == letra || nomes[cont] == letra2){
            console.log(nomes[cont])
        }
    }
}