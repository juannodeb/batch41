console.log("Hola desde main.js");

// Variables
console.log("Variables:")

var edad = 24;
console.log(typeof edad); // number
console.log(edad);

var nombre = "Juan";
console.log(typeof nombre); // string
console.log(nombre); // string

var hombre = true;
console.log(typeof hombre); // boolean
console.log(hombre); // boolean

// Operadores Lógicos
console.log("Operadores Lógicos:")

console.log(`5 > 9 : ${5 > 9}`); // false
console.log(`0 < 3 : ${0 < 3}`); // true
console.log(`0 >= -9 : ${0 >= -9}`); // true
console.log(`Juan == Gera : ${name == 'Gera'}`); // false

// Condicionales
console.log("Condicionales");

if (true) {
  console.log('1. Voy a salir en consola');
} else {
  console.log('No voy a salir en consola');
}

if (false) {
  console.log('No voy a salir en consola');
} else {
  console.log('2. Voy a salir en consola');
}

// Funciones
console.log("Funciones");

function mayorDeEdad(n) {
  if (n >= 18) {
    console.log("Tienes " + n + " años. Eres mayor de edad");
  } else {
    console.log(`Tienes ${n} años. Eres menor de edad`);
  }
}

mayorDeEdad(18);
mayorDeEdad(5);
mayorDeEdad(prompt("Escribe tu edad"));

