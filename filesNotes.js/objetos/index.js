const person = {
    name: "Miguel",
    age: 25,
    isDeveloper: true,
    saludo: function() {
        console.log('Hello 🌚');
    }
}

console.log(person);

// instancias

const crearPerson = (name,age, isDeveloper) =>{
    return {
        name,
        age,
        isDeveloper,
        saludo: function(){
            console.log("Hello ✨");
        }
    }
}

const newPerson = crearPerson("Cristhian", 26, true);
console.log(newPerson);