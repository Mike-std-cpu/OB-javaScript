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