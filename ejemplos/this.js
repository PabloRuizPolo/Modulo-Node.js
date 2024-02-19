'use strict';

// crear funcion para usarlo como constructor de objetos,
function Fruta(nombre) {
    this.nombre = nombre;
    this.saluda = function(saludo) {console.log(saludo, ', soy ' + this.nombre)}
}

const limon = new Fruta('Limon')

//JS busca el primer punto a la izq de los parentesis de ejecucion
// y loque haya a la izq de ese punto es thi
//limon.saluda('Hello')


setTimeout(limon.saluda.bind(limon, 'Halo'), 2000); 
//Aqui no hay parentesis de ejecucion por tanto this será undefined. pero si le pongo el bind, se me pega el this que yo quiera

//setTimeout(limon.saluda.bind(limon), 2000)

const coche = {
    nombre: 'Renault'
};

limon.saluda.call(coche, 'Salut')

