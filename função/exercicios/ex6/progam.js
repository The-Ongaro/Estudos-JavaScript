///6. Implemente um programa para calcular a média de 5 notas.

import { media } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe as cinco notas para calcular a média: ');
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());
let n4 = Number(ler());
let n5 = Number(ler());

let resultado = media(n1,n2,n3,n4,n5);

console.log(resultado);