const obj = {
    id: 4,
    name: "Miguel",
    lastName : "Andrade",
    isDeveloper: "true",
    favoriteBooks: ["Harry Potter saga", "Looking for Alaska"]
}

//Añadir atributos

obj.lenguage = "Javascript";
console.log(obj.lenguage);

/**
 * Algo importante que debemos tener en cuenta es que en el caso curiso de que queramos dplicar un obj en especifico,
 * por lo regular y en como es normalmente duplicar con numeros primitivos es crear una nueva variabe y pasrle el,
 * contenido del objetoi que nosortrs le queramos pasar
 * cont obj2 = obj_;
 * 
 * Esto en datos primitivos, funcionara y podremos controlar y modficar estos datos de manera distinta cada una
 * pero en objetos no, ya que en el ejemplo anterior no duplicamos el valor si no que le traspasamos el contenido,
 * entonces en el caso de que en el obj2 le queria cambiar la propiedad nombre, se le cambiara a todo en general.
 */

const obj2 = obj;
obj2.name = "Jose"
console.log(obj.name);

const movies = [
    {name: 'Back to the Future', director: 'Robert Zemeckis', date: new Date("Jul 03 1985")},
    {name: 'Harry Potter the half-blood prince', director: 'David Yates', date: new Date("Jul 07 2009")},
    {name: 'John Wick', director: 'Chad Tahelski', date: new Date("Oct 24 2014")}
]

//Ordenadas de primer estreno al ultimo
movies.sort((a, b) =>{ a.date.getFullYear - b.date.getFullYear});
console.log(movies);

// Date

/**
 * Las fechas debemos tenerlas en cuenta en todo momento, ya que nos ayudan a deterinar la fecha actual.
 * o cualquier fecha que nosotros quermos. Un dato importante es que las fechas se miden en miliseguundos
 * es por eso que al comparar fechas a secas nos saldra que es falso
 */

const date1 = new Date(2015,9,9);
console.log(date1);
const date2 = new Date(2015,9,9);
console.log(date2);
console.log(date1 === date2);

/**
 * Para poder comparar dates, es necesario com´pararlos en su forma base, en milisegundos, esto es posible con,
 * el metodo getTime(). De esta manera sera mas facil comparar fechas
 */

console.log(date1.getTime === date2.getTime);

const date3 = new Date();
const meDate = date3.toLocaleDateString('es-MX');
console.log(meDate);