const logger = require('./logger');
const {moduloMates} = require('./modulos/matematicas.js');

//***
logger.info("Hola, soy un mensaje informativo");
logger.debug("Esto es un mns debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un error");

/**
 * Instalacion de winstone, libreria de node.
 * https://www.npmjs.com/package/winston
 */

// Seccion de Matematicas

const moduloSuma = moduloMates.suma(5,5);
const moduloResta = moduloMates.resta( 10, 5);
const moduloMultipli = moduloMates.multipl(5, 5);
const moduloDiv = moduloMates.division(10, 10);

console.log(moduloSuma);
console.log(moduloResta);
console.log(moduloMultipli);
console.log(moduloDiv);

