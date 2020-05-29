var { Largometraje } = require('./Largometraje');

class Pelicula extends Largometraje {
  constructor(titulo, duracion, genero, director) {
    super(titulo, duracion);
    this.genero = genero;
    this.director = director;
    this.entrada = '$5';
  }
}

var pelicula = new Pelicula('Star Wars: Episodio I', '2:16 hrs', 'Ciencia Ficción', 'George Lucas');
var otraPelicula = new Pelicula('Avengers: Endgame', '3:02 hrs', 'Ciencia Ficción', 'Hermanos Russo');
// console.log(pelicula);
// console.log(otraPelicula);

module.exports = { pelicula, otraPelicula };