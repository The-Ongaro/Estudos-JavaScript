/// 1. Implemente um programa para calcular o dobro de um número.

import { dobro } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número para saber o dobro dele mesmo:');
let num = Number(ler());

let resultado = dobro(num);

console.log(resultado);