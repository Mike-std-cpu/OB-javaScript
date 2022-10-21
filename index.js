const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


//***
logger.info("Hola, soy un mensaje informativo");
logger.debug("Esto es un mns debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un error");

/**
 * Instalacion de winstone, libreria de node.
 * https://www.npmjs.com/package/winston
 */

/**
 * Existen dentro de winstone niveles de notificaciones segun el estandar RFC5424.
 * 
    const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
 * Se puede modificar los alcances de winstone, esto nos hara un registro completo de nuestros logs
 */