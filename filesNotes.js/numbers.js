// ValueOf
let a = 2;
let b = 3;

console.log( a + b);

let c = 10;
let d = new Number(5);

console.log(c + d );

console.log(d.valueOf());
console.log(c.valueOf());

let str = new String("Hola, soy un string");

console.log(str);
// tipo: Iterador

/**
 * En JavaScript, un iterador es un objeto que permite recorrer una colección y devolver un valor al terminar.
 */

console.log(str.valueOf());

//NaN = Not a Number - Infinity

let n = Number('Adios')

console.log(n);
console.log(isNaN(n));

// Convertir los string a valores numericos con Number, parseInt y parseFloat

let numero = '5.98'
let numero2 = 15.2;

let num1 = "100.2";
let num2 = "50.8";

console.log(typeof(numero));
console.log(typeof(numero2));

console.log(Number(numero) + numero2);

console.log(parseInt(num1));
console.log(parseFloat(num2));

//Numeros Hexadecimales
let hex = '0x3a5b7';
console.log(parseInt(hex,16));

// Obtener los numeros MAX y MIN en que se pueden trabajar en JavaScript

let min_precision = Number.EPSILON;
let min = Number.MIN_VALUE;
let max = Number.MAX_VALUE;

console.log(max)
console.log(min);
console.log(min_precision);