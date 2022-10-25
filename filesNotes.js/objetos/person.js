class Person{
    // # = Private | Solo de pueden acceder dentro de la clase
    // _ = Protected | Solo se puede acceder dentro de la clase y desde clases decendientes
    constructor(name, age, isDeveloper){
        this._name = name;
        this._age = age;
        this._isDeveloper = isDeveloper;
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

// Se instancio la clase person con nuevas objetos
const mike = new Person("Mike",25,true);
console.log(mike);
mike.saludo();
// Otra instancia
const sara = new Person("Sarai", 24, false);
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