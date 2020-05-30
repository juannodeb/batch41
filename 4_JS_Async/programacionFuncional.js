// Para asignar algo que no debe cambiar uso CONST

const pi = 3.1416;

// Para asignar algo que puede cambiar uso LET

let edad = 23;

// Para asignar algo que puedo cambiar de forma global uso VAR (aunque es una mala práctica)

// ES6
// Arrow functions

// No es necesario las llaves (si lo hago en una sola línea) ni colocar return con esta sintaxis
const myFunction = () => 'Hola, esta es una función';

// Con esta otra sintaxis debo usar llaves y return
function suma(a, b){
  return a + b;
}

const otraSuma = (a, b) => a + b;

// console.log(myFunction());
// console.log(suma(8,2));
// console.log(otraSuma(10, 10));

const array = ['México', 'Perú', 'Colombia']

// Iteración imperativa (Sí genero lógica, lo hace gracias a mi código)
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Iteración declarativa (No genero lógica, lo hace 'por sí solo')
// forEach se usa SOLO con arrays
// array.forEach((pais) => console.log(pais));

// map se usa para generar un NUEVO array
// Quiero un nuevo array de la sgte forma: ['País 0: México', 'País 1: Perú', 'País 2: Colombia']
const newArray = array.map((elemento, posicion) => `País ${posicion}: ${elemento}`);
console.log(newArray);