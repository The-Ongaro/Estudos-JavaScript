import prompt from 'prompt-sync';
let ler = prompt();

let compras = [
    'Arroz',
    'Feijao',
    'Carne',
    'Batata',
];

console.log('Digite o nome de algum produto para saber se ele está presente na lista:');
let produto = ler();

function encontrar(produto){
    let resultado = 'Produto não encontrado.';
    compras.forEach((item) => {
        if(item === produto){
            resultado = 'Produto encontrado.';
        }
    });

    return resultado;
}

console.log(encontrar(produto));