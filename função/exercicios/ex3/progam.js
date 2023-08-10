/// 3. Implemente um programa calcular a área do retângulo.

import { area } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a base e a altura do retângulo para saber a sua área:')
let base = Number(ler());
let altura = Number(ler());

let resultado = area(base,altura);

console.log(resultado);

