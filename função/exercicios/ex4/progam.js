/// 4. Implemente um programa para calcular a área do quadrado.


import { area } from './funca.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe medida de um dos lado do quadrado: ');
let lado = Number(ler());

let resultado =area(lado);

console.log(resultado);
