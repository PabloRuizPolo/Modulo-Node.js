var express = require('express');
var router = express.Router();
const Agente = require('../../models/Agente')

/* GET /api/agentes
devuelve una lista de agentes */
router.get('/', async function(req, res, next) {
    try {
        const filterByName = req.query.name;
        const filterByAge = req.query.age;

        const filter = {}

        //filtros ?name=nombre
        if (filterByName) {
            filter.name = filterByName;
        }

        //filtros ?age=nombre
        if (filterByAge) {
            filter.age = filterByAge;
        }

        const agentes = await Agente.find(filter);
        res.json({ results: agentes});
        
    } catch (error) {
        next(error)
    }
});

// GET /api/agentes/<_id>
//Devuelve un agente
router.get('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        
        //Busco el agente en la base de datos
        const agente = await Agente.findById(id);

        res.json({ result: agente})
    } catch (error) {
        next(error);
    }
});

// PUT /api/agentes/<_id> (body)
// Actualzia un agente
router.put('/:id', async(req, res, next) => {
    try {
        //paso los datos que recibo a variables
        const id = req.params.id;
        const data = req.body;

        // Busca el agente y lo actualiza
        const agenteActualizado = await Agente.findByIdAndUpdate(id, data, {new: true});

        res.json({result: agenteActualizado})

    } catch (error) {
        next(error);
    }
});


//POST /api/agentes (body)
// Crea un agente
router.post('/', async(req, res, next) => {
    //paso los datos que recibo a variables
    try {
        const data = req.body;

        // creamos una instancia  de agente en memoria
        const agente = new Agente(data);

        // Lo persistimos (guardamos) en la BD
        const agenteGuardado = await agente.save();

        res.json({result: agenteGuardado});

    } catch (error) {
        next(error)
    }
});

// DELETE /api/agentes/<_id>
// Este metodfo elimina un agente
router.delete('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;

        // Busco el agente que quiero eliminar, concretamente el que tenga el elemento id igual a nuestra variable id
        await Agente.deleteOne({ _id: id});

        res.json();
    } catch (error) {
        next(error)
    }

})

module.exports = router;