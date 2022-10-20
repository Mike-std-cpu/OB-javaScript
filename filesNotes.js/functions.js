/**
 * Las fucniones son bloques de codidigo con funciones q ue nosotros le demos al momento de declararlas.
 * Las funciones son bloques de codigo que al declarar variables o hacer acciones interinas, no se podrna usar fuera de ese bloque de codigo.
 * Es importnate saber esta informacion ya que hay muchos errores de este tipo.
 */

function saludar (name){
    console.log(`Hello ${name}, how are u? :)`);
}

// Funcion flecha; Las funciones flecha se deben usar mediante se declaran todas las lineas de codigo, ya que si se declara desuies de que,
// manda a llamar, mandara error.
const bye = (nickname) =>{console.log(`Good bye ${nickname}, ¡see you around!`);}

saludar("Miguel");
bye("Mike");

//Funcion tipo expresion
let suma = function(a,b){return a+b};

let resultado = suma (1,2);
console.log(resultado);

//Funcion tipo self invoking
(function (a,b){
    console.log(" Ejecutando esta funcion -->  " + ( a + b ));
})(3,4);//fncion anonima que se puede auto llamar
//Solo se puede llamar una vez


//Funciones con parametros por defecto

function printNumber(num = 0){
    console.log(num);
}
printNumber(9); // En estos casos, si no se manda nada por parametro, tomara el valor definido en el parametro

function propagacion(...cadena){
    console.log(cadena);
}

propagacion(1, 2, 3, 4, 5);

//Funciones anonimas

const array = [1, 2, 3, 4, 5];

const array2 = array.map((valor) => valor * 2); // Ya QUE LA FUNCION INTERNA NO TIENE NOMBRE
console.log(array2);