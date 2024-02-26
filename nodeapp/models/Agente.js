const mongoose = require('mongoose')

//Vamos a definir el schema de los agentes
const agenteSchema = mongoose.Schema({
    name: { type: String, uninque: true },
    age: { type: Number, required: true, index: true }
});

// método para listar(estático, porque esta en el modelo)
agenteSchema.statics.listar = function(filtro, skip, limit, sort, fields) {
    const query = Agente.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);

    return query.exec();
}


// crear el modelo de los agente. Es loque no sinteresa y lo que vamos a utilizar.
const Agente = mongoose.model('Agente', agenteSchema);

//(opcional) exportar el modelo
module.exports = Agente;