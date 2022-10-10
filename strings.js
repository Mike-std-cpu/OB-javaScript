// - Una cadena de texto con tu Nombre

const name = "Miguel";

// - Otra cadena de texto con tu Apellido

const lastName = "Andrade";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

const student = `${name} - ${lastName}`;
console.log(student);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

const estudianteMayus = student.toUpperCase(); 
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

const estudianteMinus = student.toLocaleLowerCase(); 
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let numWords = student.length;
console.log(numWords)

// - Una variable que contenga la primera letra del Nombre

let firstWord = name.charAt(0);
console.log(firstWord);

// - Otra variable que contenga la última letra del Apellido

let lastWord = lastName.charAt(6);
console.log(lastWord);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let noSpace = student.split(' ').join(''); //¡trim no me funciono!
console.log(student);
console.log(noSpace);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let thereAre = student.includes("Miguel");
let thereArent = student.includes("Carlo");
console.log(thereAre);
console.log(thereArent);
