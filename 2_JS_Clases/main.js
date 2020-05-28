// var platillo = {
//   nombre: 'Hamburguesa',
//   ingredientes: ['Pan', 'Carne', 'Queso', 'Lechuga', 'Salsa de Tomate', 'Tomate'],
//   tamaño: 'Doble',
//   tocino: true
// };

// // Con el sgte console.log() puedo ver el objeto en la consola de node
// console.log(platillo);
// console.log(platillo.nombre);

// Clases

class Auto {
  constructor(color, marca, baul, turbo) {
    this.color = color,
    this.marca = marca,
    this.llantas = 4,
    this.baul = baul,
    this.turbo = turbo
  }

  encender(){
    return `El ${this.marca} de color ${this.color} se ha encendido.`
  }

  cerrar(){
    return `El ${this.marca} ha sido cerrado.`
  }

  // Este es un método setter. Asigna, actualiza información
  cambiarColor(nuevoColor) {
    this.color = nuevoColor;
    return `El ${this.marca} ahora es de color ${this.color}.`
  }

  // Este es un método setter. Asigna, actualiza información
  agregarBaul(tieneBaul) {
    this.baul = tieneBaul;
    return `El ${this.marca} ahora tiene baúl.`
  }

  // Este es un método getter. Obtiene, muetra información
  descripcion() {
    if (this.baul) {
      return `Este auto es un ${this.marca} de color ${this.color}, tiene ${this.llantas} llantas y tiene baúl.`
    } else {
      return `Este auto es un ${this.marca} de color ${this.color}, tiene ${this.llantas} llantas y no tiene baúl.`
    }
  }
}

var miAuto = new Auto("rojo", "Audi", true, false);
var tuAuto = new Auto("negro", "BMW", false, true);
var suAuto = new Auto(true);

// console.log(miAuto.marca);
// console.log(tuAuto);
// console.log(suAuto);

// console.log(miAuto.encender());
// console.log(tuAuto.encender());

// console.log(miAuto.cerrar());
// console.log(tuAuto.cerrar());

// console.log(miAuto.color);
// console.log(miAuto.cambiarColor('rosa'));
// console.log(miAuto.color);

// console.log(tuAuto.baul);
// console.log(tuAuto.agregarBaul(true));
// console.log(tuAuto.baul);

// console.log(miAuto.descripcion());
// console.log(tuAuto.descripcion());

// Ejercicios en clase:

// Crear una clase llamada Persona que tenga las sgtes condiciones:
// Atributos: nombre, edad, género, peso, altura
// Métodos: obtenerIMC(), esMayorDeEdad()
// Constructor pide nombre, edad, género, peso y altura

class Persona {
  constructor(nombre, edad, genero, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura;
  }

  obtenerIMC() {
    return `El IMC de ${this.nombre} es de ${(this.peso / (this.altura * this.altura)).toFixed(2)}`
  }

  esMayorDeEdad() {
    if (this.edad > 17) {
      return `${this.nombre} es mayor de edad, tiene ${this.edad} años`
    } else {
      return `${this.nombre} es menor de edad, tiene ${this.edad} años`
    }
  }
}

var persona = new Persona('Juan', 23, 'masculino', 70, 1.73);
var otraPersona = new Persona('Jimena', 17, 'femenino', 65, 1.50);

// console.log(persona.obtenerIMC());
// console.log(persona.esMayorDeEdad());
// console.log(otraPersona.obtenerIMC());
// console.log(otraPersona.esMayorDeEdad());

// Crear una clase llamada Cuenta que tenga las sgtes condiciones:
// Titular y cantidad
// ingresar (cantidad)
// retirar (cantidad)
// Como regla de negocio: un titular NO debe tener más de $900 y menos de $10

class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  ingresar(monto) {
    if (monto + this.cantidad > 900) {
      return `Lo siento, ${this.titular}. El saldo máximo en tu cuenta debe ser de 900`
    } else {
      var nuevoSaldo = this.cantidad + monto;
      return `Transacción generada satisfactoriamente. Tu saldo anterior era de ${this.cantidad}, el ingreso fue por ${monto} y tu saldo actual es de ${nuevoSaldo}`
    }
  }

  retirar(monto) {
    if (monto == this.cantidad) {
      return `${this.titular}, recuerda que siempre debes tener un saldo de al menos 10`
    } else if (monto < this.cantidad && this.cantidad - monto >= 10) {
      var nuevoSaldo = this.cantidad - monto;
      return `Transacción generada satisfactoriamente. Tu saldo anterior era de ${this.cantidad}, el retiro fue por ${monto} y tu saldo actual es de ${nuevoSaldo}`
    } else {
      return `Lo siento, ${this.titular}. Saldo suficiente para realizar esta transacción`
    }
  }
}

var cuenta = new Cuenta('Juan', 700);
var otraCuenta = new Cuenta('Stephanie', 120);

// console.log(cuenta.ingresar(100));
// console.log(cuenta.ingresar(201));
// console.log(otraCuenta.retirar(120));
// console.log(otraCuenta.retirar(100));
// console.log(otraCuenta.retirar(130));