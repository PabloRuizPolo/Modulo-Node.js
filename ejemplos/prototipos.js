'use strict';

function Persona(nombre) {
    this.nombre = nombre;
    //this.saluda = function() {console.log('Hola soy', this.nombre)}
}

const pepe = new Persona('Pepe');
const Luis = new Persona('Luis')

Persona.prototype.saluda = function() {console.log('Hola soy', this.nombre)}


pepe.saluda()
Luis.saluda()

// Herencia simple
// Quiero hacer un tipo de obejtos llamado Agente que herede de Persona

function Agente(nombre) {
    // heredar el constructor de las personas
    // ejecutar el constructor de las personas con mi this
    Persona.call(this, nombre);
}


// heredar las propiedades y métodos de las personas
Object.setPrototypeOf(Agente.prototype, Persona.prototype);

const smith = new Agente('Smith');
smith.saluda()

// herencia multiple = hereda de varias ancestros ------------------

// quiero que los agentes hereden tanto de las peronas como de los superheroes

function Superheroe() {
    this.vuela = function() { console.log(this.nombre, 'vuela')}
}

// copiar todas las propiedades de los superheroes al prototipo de los agentes
Object.assign(Agente.prototype, new Superheroe); // en el parentesisi primero pongo el destino en este paco el prototipo de los agente, y de donde quiero que lo cojan

smith.vuela()

console.log(smith)
console.log(Agente.prototype)
