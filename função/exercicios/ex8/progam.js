/// 8. Implemente um programa para verificar se uma cor é primária.

import { corPrimaria } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite uma cor para saber se ela é prímaria ou não: ');
let cor = ler();

let resultado = corPrimaria(cor);

console.log(resultado);
