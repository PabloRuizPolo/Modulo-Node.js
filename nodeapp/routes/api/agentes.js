var express = require('express');
var router = express.Router();
const Agente = require('../../models/Agente')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const agentes = await Agente.find();
        res.json({ result: agentes});
        
    } catch (error) {
        next(error)
    }
});

module.exports = router;