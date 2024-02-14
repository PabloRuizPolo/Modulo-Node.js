'use strict';

function suma(a, b, instrucciones) {
    const resultado = a+ b;
    instrucciones(resultado);
}

suma(2, 5, function(resultado) {
    conole.log(resultado);
})