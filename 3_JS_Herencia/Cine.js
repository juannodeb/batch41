var { pelicula, otraPelicula } = require('./Pelicula');
var { documental, otraDocumental } = require('./Documental');

class Cine {
  constructor(cadena, sillas, pantallas) {
    this.cadena = cadena;
    this.sillas = sillas;
    this.pantallas = pantallas;
  }

  reproducirLargometraje(largometraje) {
    if (largometraje.entrada == '$3') {
      return `Estás viendo el documental ${largometraje.titulo}`
    } else {
      return `Estás viendo la pelicula ${largometraje.titulo}`
    }
  }
}

var cine = new Cine('CineColombia', 480, 6);
console.log(cine.reproducirLargometraje(pelicula));
console.log(cine.reproducirLargometraje(documental));
