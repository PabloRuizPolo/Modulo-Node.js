'use strictr'


//voy a crearme una funcion que devuelve una promesa

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
            reject('error fatal')
        }, ms)
    })
}

//Espera a que se ejecute la funcion sleep y luego muestra el siguiente codigo
/*
async function main() {
    await sleep(2000);
    console.log('Han pasado 2 segunddos')
}
*/

//Se puede repetir de forma smás sencilla que con .then
/*
async function main() {
    const result = await sleep(2000);
    console.log('Han pasado 2 segunddos' , result)
    await sleep(2000);
    console.log('Han pasado 2 segunddos' , result)
    await sleep(2000);
    console.log('Han pasado 2 segunddos' , result)
}
*/

//Para hacer bucles
async function main() {
    for (let i = 0; i<= 4; i++) {
        try {
            const result = await sleep(2000);
            console.log('Han pasado 2 segunddos' , result)
        } catch (err) {
            console.log('Fallo una interaccion pero no me importa')
        }
    }
    throw new Error('que mal')
}

main().catch(err => {console.log('Hubo un error: ', err)})
//console.log(main())