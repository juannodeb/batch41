// Función de orden superior
function miPrimerCallback(operacion, a, b) {
  return operacion(a, b);
}

function suma(c, d) {
  return c + d;
}

function resta(e, f) {
  return e - f;
}

function multiplicacion(g, h) {
  return g * h;
}

function division(i, j) {
  return i / j;
}

// console.log(miPrimerCallback(suma, 1, 2));
// console.log(miPrimerCallback(resta, 8, 7));
// console.log(miPrimerCallback(multiplicacion, 3, 5));
// console.log(miPrimerCallback(division, 10, 2));

// Ejercicio en clase
  // Mostrar un mensaje en consola mediante un callback.
  // La función de orden superior debe poder mostrar el mensaje como console.warn, console.log o console.info

function mostrarConsola(consola, mensaje){
  return consola(mensaje);
}

function warn(mensaje){
  console.warn(mensaje);
}

function log(mensaje){
  console.log(mensaje);
}

function info(mensaje){
  console.info(mensaje);
}

function error(mensaje){
  console.error(mensaje);
}

// mostrarConsola(warn, 'Soy un warn');
// mostrarConsola(log, 'Soy un log');
// mostrarConsola(info, 'Soy un info');
// mostrarConsola(error, 'Soy un error');


  // Escribe una función de orden superior que recibe una cadena de caractéres.
  // Debe devolver la cadena de caractéres en mayúsuclas o minúsculas

function modificadorDeCaracteres(funcionParaFormatear, string) {
  return funcionParaFormatear(string);
}

function may(string){
  return string.toUpperCase();
}

function min(string){
  return string.toLowerCase();
}

// console.log(modificadorDeCaracteres(may, 'mayúsculas'));
// console.log(modificadorDeCaracteres(min, 'MINÚSCULAS'));