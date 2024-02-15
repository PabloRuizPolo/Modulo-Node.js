'use strict';

function creaVehiculo(nombre) {
    //contexto: nombre
    return {
        getNombre: function() {return nombre;},
        setnombre: function(valor) { return nombre = valor;},
        saluda: function() {console.log('Hola soy ', nombre)}
    }
}

const seat = creaVehiculo('Seat')

console.log(seat)

console.log(seat.getNombre());

seat.saluda()

setTimeout(seat.saluda, 20009)