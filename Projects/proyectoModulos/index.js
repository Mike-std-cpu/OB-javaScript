import chalk from "chalk";
import {suma, multiplica} from "./controller.js"

const sma1 = suma(1,2);
const sma2 = suma(4,5);
console.log(`La suma 1 es de: ${sma1}`);
console.log(`La suma 2 es de: ${sma2}`);

const multi = multiplica(sma1, sma2);
console.log(chalk.green(`El resultado de la multiplicacion de ${sma1} y ${sma2} es de: ${multi}`));
