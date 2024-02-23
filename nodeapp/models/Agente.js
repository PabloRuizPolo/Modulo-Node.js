const mongoose = require('mongoose')

//Vamos a definir el schema de los agentes
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

// crear el modelo de los agente. Es loque no sinteresa y lo que vamos a utilizar.
const Agente = mongoose.model('Agente', agenteSchema);

//(opcional) exportar el modelo
module.exports = Agente;