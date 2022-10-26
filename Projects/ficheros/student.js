class Student {
    constructor(name, subjects = []){
        this._name = name;
        this._subject = subjects;
    }

    get nombre(){
        return this._name;
    }

    get asignatura(){
        return this._subject;
    }

    set newNombre(name){
        this._name = name;
    }

    set newAsignatura(asignatura){
        this._subject = asignatura;
    }

    obtenerDatos(){
        return (`El nombre del alumno es: ${this._name} y sus materias son: ${this._subject}`);
    }
}

const studen1 = new Student("Miguel",['HTML','CSS','Javascript']);
console.log(studen1.obtenerDatos());
