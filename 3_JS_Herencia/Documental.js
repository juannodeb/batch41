var { Largometraje } = require('./Largometraje');

class Documental extends Largometraje {
  constructor(titulo, duracion, patrocinador, lanzamiento) {
    super(titulo, duracion);
    this.patrocinador = patrocinador;
    this.lanzamiento = lanzamiento;
    this.entrada = '$3'
  }
}

var documental = new Documental('The Last Dance', '50 min', 'Netflix', 2020);
var otroDocumental = new Documental('Supersonic', '2:02 hrs', 'Netflix', 2016);
// console.log(documental);
// console.log(otroDocumental);

module.exports = { documental, otroDocumental };