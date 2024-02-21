var express = require('express');
var router = express.Router();
const { query, validationResult } = require('express-validator')

/* GET home page. */
router.get('/', function(req, res, next) {

  const now = new Date()
  
  res.locals.esPar = (now.getSeconds() % 2) === 0;
  res.locals.segundoActual = now.getSeconds();
  res.locals.inyeccion = '<script>alert("inyectado!")</script>'

  res.locals.users = [
    {name: 'Smith', age: 34},
    {name: 'Brown', age: 23}
  ]
  
  res.render('index', { otracosa: 'Express' });
});

// GET /parametro_en_ruta/54
// GET /parametro_en_ruta/54?talla=s&color=rojo
router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  const numero = req.params.numero;
  const talla = req.query.talla;
  const color = req.query.color;

  res.send('He recibido el numero ' + numero + ', talla ' + talla + ', color ' + color);
});

// GET /parametro_opcional/:numero? OPCIONAL. Por si hay algo mas despues de la / o no, para que el codigo sepa que tiene que devolver aunque n haya inguna paramaetro.
router.get('/parametro_opcional/:numero?', (req, res, next) => {
  const numero = req.params.numero;

  res.send('He recibido el numero opcional:  ' + numero);
});

//GET expresion regulares
router.get('/producto/:nombre/talla/:talla([0-9]+)/color/:color', (req, res, next) => {
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;
  
  res.send(`Me pediste ${nombre} talla ${talla} color ${color}`);
});

// POST /usuario
// Par crear un usuario. Atiende aun formulario de registro

router.post('/usuario', (req, res, next) => {
  console.log(req.body);

  const apiKey = req.get('api-key')
  console.log(apiKey)

  res.send('ok')
});

//validaciones
//GET /enquerystrin?age=20
router.get('/enquerystring', 
  query('age').isNumeric().withMessage('must be numeric'), 
  (req, res, next) => {
    validationResult(req).throw(); //Lanza excepcion si ve errores de validacion

  res.send('ok')
});



module.exports = router;
