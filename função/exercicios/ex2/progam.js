/// 2. Implemente um programa para calcular o triplo de um número.

import { triplo } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número para saber o triplo dele mesmo:');
let num = Number(ler());

let resultado = triplo(num);

console.log(resultado);