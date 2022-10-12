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
