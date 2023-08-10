import prompt from 'prompt-sync';
let ler = prompt();

console.log('Qual seu nome?');
let resposta = ler();

console.log(`Olá, ${resposta}`);