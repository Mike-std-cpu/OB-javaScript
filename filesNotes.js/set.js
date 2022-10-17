// Metodos set

const array = [1,2,3,4,5,6,1,2];
const miSet = new Set(array);

console.log(array);
console.log(miSet);

/**
 * Las ventajas que conlleva usar metodos set, como se comento en la documentación es que los valores jamas,
 * se repeturan. En el caso de arriba, vemos que aunque el arreglo inicial tiene repetidos 2 digitos
 * el metodo set no los repitio. por que ya existen.
 */

//Existen metodos set que pueden complementar esta accion

miSet.add(9);
console.log(miSet);
miSet.delete(1);
console.log(miSet);
miSet.clear();
console.log(miSet);
//.has
//includes verifica que si se encuentras x cantidad de elementos en el arrreglo.
console.log(array.includes(2));
console.log(miSet.has(2));
miSet.add({id : 5});
console.log(miSet.has());
