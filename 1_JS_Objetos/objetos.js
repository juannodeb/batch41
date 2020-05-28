/*
// Objetos Literales
// JSON => JavaScript Object Notation
// Carece de orden en los elementos
// Accedo por la llave o el valor a una propiedad
var perro = {
  nombre: "Ayudante de Santa",
  edad: 30,
  color: "Café",
  vive: true,
  juguetes: ["Pelota", "Peluche", "Hueso"],
  familia: {
    padre: "Homero",
    madre: "Marge",
    hermana: "Lisa",
    hermano: "Bart",
  },
  juega: function(){
    return "Estoy jugando";
  },
  come: function(comida){
    var comidaMinuscula = comida.toLowerCase();
    if (comidaMinuscula == 'croquetas') {
      return "Dame esas "+ comidaMinuscula +", humano"
    } else {
      return `${comidaMinuscula} no es comida, respete`
    }
  }
};

console.log(perro);
console.log(perro.nombre); // Ayudante de Santa
console.log(perro.peso); // undefined
console.log(perro.juguetes[1]); // Peluche
console.log(perro.familia.hermana); // Lisa
console.log(perro.juega()); // Estoy jugando
console.log(perro.come('CROQUETAS')); // Dame esas croquetas, humano
console.log(perro.come('pasto')); // ${comida} no es comida, respete


// Arreglos
// Determina el orden de los elementos
// Accedo por el índice o posición en el arreglo a una posición
var paises = ['Colombia', 'México', 'Argentina'];

console.log(paises);
console.log(paises[0]); // Colombia
console.log(paises[3]); // undefined



// Ejercicio en clase:
// Crear un objeto basándome en un ave famosa
  // 5 atributos
  // 2 métodos

  // ave.edad = 3;
  // ave.casa = "Playa";

  */
  var ave = {
    nombre: 'Sam',
    edad: 5,
    vuela: true,
    colores: ['Azul', 'Blanco', 'Rojo', 'Amarillo', 'Rosa'],
    filogenia: {
      nombreCientifico: 'Ramphastidae',
      clase: 'Ave',
      filo: 'Chordata',
      genero: 'Macho'
    },
    ronronear: function ronronear() {
      return 'Ronroneo, ronroneo'
    },
    volar: function volar() {
      return "Yo, ya me voy, chao"
    }
  };

  console.log(ave);

  ave.edad = 8;
  ave.nombre = 'Paco';

  console.log(ave);