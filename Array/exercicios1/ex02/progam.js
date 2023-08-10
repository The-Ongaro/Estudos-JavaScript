import prompt from 'prompt-sync';
let ler = prompt();

let nomes = [];

console.log('Digite cinco nomes: ');
for(let cont = 0; cont < 5; cont ++){
    nomes[cont] = ler();
}

console.log('Você digitou os nomes: ');
for(let item of nomes){
    console.log(item);
}