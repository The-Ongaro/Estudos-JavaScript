import prompt from 'prompt-sync';
let ler = prompt();

let itens = [
    'Caderno',
    'Bolsa',
    'Borracha',
    'Papel',
];

console.log('Deseja ver o itens presentes na lista?');
let resposta = ler();

if(resposta === 'sim'){
    console.log('Os itens são:');
    for(let item of itens){
        console.log(item);
    }
}
else if(resposta === 'nao'){
    console.log('OK!')
}
else{
    console.log('RESPOSTA INVÁLIDA.');
}

console.log('Gostaria de ver os itens da lista invertidos?');
let resposta2 = ler();

let itensInv = [];
let contagem = 0;
if(resposta2 === 'sim'){
    for(let cont = itens.length - 1; cont >= 0 ; cont --){
        itensInv[contagem] = itens[cont];
        contagem ++;
    }
    
    console.log('Os itens invertidos são:');
    for(let item of itensInv){
        console.log(item);
    }
}
else if(resposta2 === 'nao'){
    console.log('OK!')
}
else{
    console.log('RESPOSTA INVÁLIDA.')
}