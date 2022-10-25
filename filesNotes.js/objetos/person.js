class Person{
    // # = Private | Solo de pueden acceder dentro de la clase
    // _ = Protected | Solo se puede acceder dentro de la clase y desde clases decendientes
    _name
    _age
    constructor(name, age,){
        this._name = name;
        this._age = age;
    }

    saludo() {
        console.log(`Hello 🌚, my name is ${this._name} and I'm ${this._age} years old`);
    }

    get nombre(){
        return this._name;
    }

    get edad(){
        return this._age;
    }

    set newNombre(nname){
        this._name = nname;
    }

    set newEdad(aage){
        this._age = aage;
    }
}

//Herencia
class Developer extends Person{
    _lenguage
    constructor(name, age, lenguage){
        super(name, age); //SUPER es una palabra reservada para ls llamada el cosntructo de la clase padre
        this._lenguage = lenguage;
    }

    get lenguaje(){
        return this._lenguage;
    }

    set newLenguage(lenguajeDev){
        this._lenguage = lenguajeDev;
    }
}


// Se instancio la clase person con nuevas objetos
const mike = new Person("Mike",25);
console.log(mike);
mike.saludo();
// Otra instancia
const sara = new Person("Sarai", 24);
console.log(sara);
sara.saludo();

//Es como typeOf
console.log(sara instanceof Person);

// Getters: Los getters son metodos que nos permiten obtener los atributos/metodos de las clases, no es necesario,
// agregar los () POR QUE NO ES UNA FUNCION
console.log(`Propiedades por getters 🙂`);
const edadd = mike.edad;
console.log(edadd);
const nom = sara.nombre;
console.log(nom);

// Setters: Son metodos que nos sirven en cambiar los valores de los atributos/metodos de las clases.
console.log(`Propiedades cambiados con setters 🙂`);
console.log(`La vieja edad de ${mike.nombre} es ${edadd}`);
mike.newEdad = 26;
console.log(`La nueva edad de ${mike.nombre} es: ${mike.edad}`);

// INstanciasion de objeto de la clase developer
const dev1 = new Developer("Miguel", 25, "JavaScript");
console.log(dev1);

console.log(dev1.lenguaje);
dev1.newLenguage = "Python";
console.log(dev1);