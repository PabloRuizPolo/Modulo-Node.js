'use strict';

// cargar la libreria de express
const express = require('express');

// crear la aplicacion
const app = express();

// añadir una ruta
app.get('/', (request, response, next) => {
    response.send('Wake up Neo')
})

// arrancamos el servidor
app.listen(8080, () => {
    console.log('Servidor HTTP arrancado en http://127.0.0.1:8080')
})