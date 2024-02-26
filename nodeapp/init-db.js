'use strict';

const readline = require('node:readline')
//conexion a la base de datos
const conection = require('./lib/connectMongoose')
// Me traigo el modelo de Agente
const Agente = require('./models/Agente');
const { resolve } = require('node:path');


main().catch(err => console-log('hubo un error', err));

async function main() {

    //esperar a que se conecte a la base de datos
    await new Promise((resolve) => conection.once('open', resolve))

    const borrar = await pregunta('Estas seguro de que quieres borrar el contenido de la base de datos?(no)')
    if (!borrar) {
        process.exit();
    }

    await initAgents();

    conection.close();

}

async function initAgents() {
    // borrar todos los agentes
    const deleted = await Agente.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} agentes`)
    
    // crear agentes
    const inserted = await Agente.insertMany([
        { name: 'Smith', age:34 },
        { name: 'Brown', age:43 },
        { name: 'Jones', age:25 }
    ]);
    console.log(`Creados ${inserted.length}`);
};

//Función para que me pregunte si quiero ejecutar esta pagina, ya que nos borraria toda la database
function pregunta(texto) {
    return new Promise((resolve, reject) => {
      // conectar readline con la consola
      const ifc = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      ifc.question(texto, respuesta => {
        ifc.close();
        resolve(respuesta.toLowerCase() === 'si');
      })
    });
  }