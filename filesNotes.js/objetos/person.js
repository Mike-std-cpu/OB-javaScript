class Person{
    // # = Private | Solo de pueden acceder dentro de la clase
    // _ = Protected | Solo se puede acceder dentro de la clase y desde clases decendientes
    constructor(name, age, isDeveloper){
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hello 🌚, my name is ${this.name} and I'm ${this.age} years old`);
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