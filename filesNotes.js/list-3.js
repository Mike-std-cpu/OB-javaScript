//Metodos .map() | .filter() | .reduce()

const mexico = ['CDMX','CHIHUAHUA','GUADALAJARA','AGUASCALIENTES','BAJA CALIFORNIA', 'MONTERREY'];

mexico.forEach(c =>{
    console.log(c);
})

const mapArray = mexico.map((est, i) => `${i + 1}.- ${est.toLowerCase(est)}`);
console.log(mapArray);


//FILTER
const objetos = [
    {name: "Cristhian", age: 26},
    {name: "Tristan",age: 25},
    {name: "Mario", age: 24},
    {name: "Miguel", age: 25},
    {name: "Gerry", age: 31}
]

let oldPeople = objetos.filter(person =>{
    if(person.age >= 30){
        return true;
        //console.log(person);
    }else{
        return false;
        //console.log(person)
    }
})
/**
 * El codigo de arriba se puede simplificiar, ya que no es necesario retornar lo que es true o false, el mismo,
 * metodo lo retornara por ti, como en el caso siguiente:
 */

let oldPeopleRemaster = objetos.filter(person => person.age >= 30);


console.log(oldPeople);
console.log(oldPeopleRemaster);


// REDUCE: Obtener un objeto o algo apartir de una lista
let arrayNumbers = [15, 20, 100, 50, 28, 69, 48];

const suma = arrayNumbers.reduce((acumulado, actual, indice, original) => {
console.log(acumulado);
console.log(actual);
console.log(indice);
console.log(original);

return acumulado + actual;
})

console.log(suma);


// Sort(): Metodo que modifica el arreglo original

const arrayS = [2, 5, 9, 15, 1, 2, 0, 4];
const arraySS = [5, 10, 2, 96, 69, 200, 87, 44, 500, 1, 50]

console.log(arrayS);

arrayS.sort((anterior, despues) =>{
    if(anterior < despues){
        return 1; //Se retornara un numero postivo cuando el # anteror sea menor al que sigue
    }else if (anterior > despues){
        return -1; // Se retornara un numero negativo cuando el # anteriro dea mayor al que sigue
    }else{
        return 0;
    }
})
console.log(arrayS);


arraySS.sort((a, b) => a - b );
console.log(arraySS);

/**
Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. 
Siendo a y b dos elementos comparados, entonces:
 * Si compareFunction(a, b) es menor que 0 (numero negativo), se sitúa a en un indice menor que b. Es decir, a viene primero.
 * Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. 
   Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores 
   (p.ej. Mozilla en versiones que datan hasta el 2003) respetan esto.
 * Si compareFunction(a, b) es mayor que 0 (es decir, 1 o más), se sitúa b en un indice menor que a.
compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. 
   Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
 */

objetos.sort((a, b) => {
    if(a.age < b.age){
        return -1;
    }else if (a.age > b.age){
        return 1;
    }else{
        return 0;
    }
})

// objetos.sort((a,b) => a.age - b.age);


console.log(objetos);

/**RESUTLAOD EN TERMINAL
 * [ { name: 'Mario', age: 24 },
  { name: 'Tristan', age: 25 },
  { name: 'Miguel', age: 25 },
  { name: 'Cristhian', age: 26 },
  { name: 'Gerry', age: 31 } ]
  ​​​​​at ​​​​​​​​objetos​​​ ​filesNotes.js/list-3.js:102:1

Otra manera mas sencilla de resolverlo podria ser de la siguiente manera:

objetos.sort((a,b) => a.age - b.age);

 */
