// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const me = {
    name: "Miguel",
    lastName: "Andrade",
    age: 25,
    hight: 1.80,
    areuDeveloper: true
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const ageObj = me.age;
console.log(ageObj);
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const bros = [
    {
    name: "Miguel",
    lastName: "Andrade",
    age: 25,
    hight: 1.80,
    areuDeveloper: true
    },
    {
    name: "Cristhian",
    lastName: "Martinez",
    age: 26,
    hight: 1.60,
    isDeveloper: true
    },
    {
    name: "Tristran",
    lastName: "Orta",
    age: 24,
    hight: 1.74,
    areuDeveloper: true
    }
]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

bros.sort((a, b) =>{ a.age - b.age});
console.log(bros);