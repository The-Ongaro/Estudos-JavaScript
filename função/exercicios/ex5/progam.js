/// 5. Implemente um programa para verificar se uma pessoa está com febre.

import { febre } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();


console.log('=== PROGAMA DA FEBRE === \n Informe a sua temperatura: ');
let temp = Number(ler());

let resultado = febre(temp);

console.log(resultado);