import prompt from 'prompt-sync';
let ler = prompt();

let numeros = [18, 2, 4];

for(let pos = numeros.length -1; pos >= 0; pos--){
    let item = numeros[pos];
    let x = item * 2;
    console.log(x);
}