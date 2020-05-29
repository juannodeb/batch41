// Herencia

// Superclase o clase padre
class Mascota {
  constructor(nombre, patas) {
    this.reino = 'Animal';
    this.nombre = nombre;
    this.cerebro = true;
    this.patas = patas;
  }

  alimentarse() {
    return `${this.nombre} se está alimentando`;
  }
}

// var mascota = new Mascota('Paco', 4);
// console.log(mascota);

// Perro hereda de Mascota
class Perro extends Mascota {
  constructor(nombre, patas, ladra, cola){
    // Super ejecuta el constructor de la clase de la cual hereda
    super(nombre, patas);
    this.ladra = ladra;
    this.cola = cola;
  }

  truco() {
    return `${this.nombre} está haciendo un truco`
  }
}

var perro = new Perro('Firulais', 4, true, false);
// console.log(perro);
// console.log(perro.alimentarse());
// console.log(perro.truco());

class Serpiente extends Mascota {
  constructor(nombre, patas, color) {
    super(nombre, patas);
    this.color = color;
    this.venenosa = false;
  }

  enrroscarse() {
    return `${this.nombre} se está enrroscando`
  }
}

// var serpiente = new Serpiente('Liz', 0, 'verde con café');
// console.log(serpiente);
// console.log(serpiente.alimentarse());
// console.log(serpiente.enrroscarse());
