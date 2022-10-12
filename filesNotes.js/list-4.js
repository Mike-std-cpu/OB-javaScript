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