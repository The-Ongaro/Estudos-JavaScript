import prompt from 'prompt-sync';
let ler = prompt();

let nomes = [];
let letra = '';

console.log('Informe a quantidade de nomes: ');
let qtd = Number(ler());

for(let cont = 0; cont < qtd; cont ++){
    console.log(`Digite o ${cont + 1}º nome: `);
    nomes[cont] = ler();
}

console.log('Os nomes após o filtro são: ');
for(let cont = 0; cont < qtd; cont ++){
    nomes[nomes];

    for(let pos = 0; pos < 1; pos ++){
        letra = nomes[cont].charAt(pos);

        if(letra == 'L' || letra == 'H'){
            console.log(nomes[cont])
        }
    }
}