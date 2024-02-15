'use strict';

const EventEmitter = require('node:events');

const emisor = new EventEmitter();

emisor.on('llamada de teléfono', function(quienLlama) {
    if (quienLlama === 'hermana') {
        return
    }
    console.log('ring ring');
}) // para cuando se llame a la accion, cada vez que se llame

emisor.once('llamada de teléfono', function() {
    console.log('brr brr')
}) //solo para la prmera vez que se llame

emisor.emit('llamada de teléfono', 'hermana');
emisor.emit('llamada de teléfono', 'hermana');