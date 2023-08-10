/// 7. Implemente um programa para calcular a média de 5 notas e verificar se ela está aprovada com nota maior que 5.

import { media } from './funcao.js';
import { resultado } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe as cinco notas: ');
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());
let n4 = Number(ler());
let n5 = Number(ler());

let x = media(n1,n2,n3,n4,n5);
let y = resultado();

console.log('A média foi ' + x + '\nE você está ' + y);