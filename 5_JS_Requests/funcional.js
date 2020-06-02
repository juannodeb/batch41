// for y forEach

const arr = [10, 21, 33, 46, 52]

// Código imperativo
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// console.log('');

// Código declarativo
// JS Vanilla
// arr.forEach(function(element){
//   console.log(element);
// });

// console.log('');

// ES6
// arr.forEach((element) => console.log(element) );

// map - genera un nuevo arreglo general
// const newArr = arr.map((element) => console.log(`${element} * 2 = ${element * 2}`));

// filter - genera un nuevo arreglo que cumple una condición
const filteredArr = arr.filter((element) => element % 2 === 0);
// console.log(filteredArr);


// Ejercicio en clase
  // Utilizando filter, devolver los paises que contengan 5 caractéres o menos
const countries = ['México', 'Perú', 'Colombia', 'Costa Rica'];
const countryFilter = countries.filter((country) => country.length <= 6 );
// console.log(countryFilter);