//Podemos unir el contenido de dos listas

const list1 = ["hello", 5, true, null];
const list2 = ["world", 10, false, undefined];

console.log(list1.concat(list2));
//Ese metodo no nos modificara los valores de la listas.
// Si nosotros deseamos guardar la lista ya concatenada seria guardarla desde una variable.
const list3 = list1.concat(list2)
console.log(list3);

//FACTOR DE PROPAGACION

//¿Como puedo propagar los valores de una lista?
console.log(...list1);
/**
 * Podemos observar que los elementos se propagaron, ya no conforman parte de una lista. SI usamos nuetra logica podemos entender que
 * si soltamos los valores de dos arreglos en una variable de un arreglo Seria lo mismo que el concat, es simple logica.
 * Un erro tipico es que metan las listas en una nueva lista, pero debemos entender que la propagacion nos ayudaran tener el contenido suelto.
 */

const listaSuelta = [...list1, ...list2];
console.log(listaSuelta);
console.log(listaSuelta.length);

//SLICE

const arraySlice = ['Hello',1, 2, 3, true, null, 'bye'];

/**
 * Debemos tener en cuenta que Slice no modificara al array original, pasa igual que con concat, si se desea conservar los cambios
 * realizados, se debera de asinar a una nueva arrelo o variable.
 * Se debe de declarar de la siguiente manera: array.slice('PosicionComienzo' , 'PosicionFinal')
 */
console.log(arraySlice.slice(0,3));
const newArray = arraySlice.slice(0,3);
console.log(newArray);


