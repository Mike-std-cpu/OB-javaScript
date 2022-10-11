let otherObj = {id: 07};
let arreglo = [1, "helloworld",false, {name: "Mike"}, null, undefined, otherObj];


//Agregar contenido
arreglo.push("Agregado",{num: 08});
console.log(arreglo);
arreglo.unshift("Agregado al principio");
console.log(arreglo);

//Eliminar contenido
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);

//Método para eliminar, modificar o añadir valores en arreglos

let myArray = ['H','E','L','L','O'];

//delete
myArray.splice(2,1);
console.log(myArray);

// Add 
myArray.splice(4,0,'W','O','R','L','D');
console.log(myArray);

//Update
myArray.splice(2,0,'l');
console.log(myArray);
myArray.splice(2,1,'L');
console.log(myArray);
//Los valores que se añaden se añadiran a la izquierda o antes del valor señalado.