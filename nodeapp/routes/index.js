var express = require('express');
var router = express.Router();

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

module.exports = router;
