
console.log('inicializo la calculadora')
module.exports = {
    suma: function(a, b) {
    return a+b
    },
    resta: function(a, b) {
        return a-b
    }
}
/*
module.exports.suma = function(a, b) {
    return a+b
};

 module.exports.resta = function(a, b) {
        return a-b
}
esto es lo mismoq ue lo de arriba, al final module.exports es un objeto vacio, y le
puedo ir añadiendo propiedades o crear diferntes instancias por separado
*/