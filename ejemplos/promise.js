'use strictr'


//voy a crearme una funcion que devuelve una promesa

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(42);
            reject('error fatal')
        }, ms)
    })
}

const promesa = sleep(2000);
console.log(promesa)

//puedo opner el .catch al final de todos lo posiboes casos correctos, para que me coja el error si todos faala, o poner un catch para cada caso.
promesa.then((resultado) => {
    console.log('han pasado 2 segundos, y el resultado es' , resultado);
}).catch(err => {
    console.log('Fallo el primer sleep, pero no me importa')
}).then(() => {
    return sleep(2000);
}).then((resultado) => {
    console.log('han pasado 2 segundos, y el resultado es' , resultado);
    return sleep(2000)
}).then((resultado) => {
    console.log('terminado');
}).catch(err => {
    console.log('Hubo un error: ', err)
});