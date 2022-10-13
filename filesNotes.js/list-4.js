// Coparar listas con .every()

const arreglo = [1, 5, 25, 60, 2, 14, 93, 78, 98, 20];

const numerico = arreglo.every(valor =>{
    if (typeof valor === "number"){
        return true;
    }else{
        return false;
    }
})

console.log(numerico);


const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

function compararArrays(lista1, lista2){
    if (lista1.length !== lista2.length) return false;
    const res = lista1.every((valor, indice) =>{
        if(valor === lista2[indice]){
            return true;
        }else{
            return false;
        }
        
    })
    return res;
}

console.log(compararArrays(list1,list2));

//.some()

const arregloDos = [1, 5, -9, 25, -9, 60, 2, 14, 93, -55, 78, 98, 20];

const resul = arregloDos.some(valor => valor < -80);

console.log(resul);

const objetos = [
    {name: "Cristhian", age: 26},
    {name: "Tristan",age: 25},
    {name: "Mario", age: 24},
    {name: "Miguel", age: 25},
    {name: "Gerry", age: 31}
]

const miguel = objetos.some(persona => persona.name == "Miguel");
console.log(miguel);


// .from:  El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
const str = "Hello my name is Mike";
const arrayStr = Array.from(str);
console.log(arrayStr);
//Consola: 
// [ 'H',
//   'e',
//   'l',
//   'l',
//   'o',
//   ' ',
//   'm',
//   'y',
//   ' ',
//   'n',
//   'a',
//   'm',
//   'e',
//   ' ',
//   'i',
//   's',
//   ' ',
//   'M',
//   'i',
//   'k',
//   'e' ]