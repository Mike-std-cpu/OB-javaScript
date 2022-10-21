//Errores con funciones
const  myFunction = (val) =>{
    if(typeof val === "number"){
    return val * 2;
    }
    throw new Error ("Solo se pueden realizar con numeros :)")
}

console.log(myFunction(12));
// console.log(myFunction("Hola"));

//Errores con try catch
const numero = 8;
const cadena = `string`

try {
    const doble = myFunction(numero);
    //const doble = myFunction(cadena);
    console.log(doble);
    console.log(`Ejecutando de manera correcta`);
} catch(e){
    console.log(`¡Fatal! No se eejecuto correctamente.`);
    console.log(`"e" tiene como contenido lo siguiente: ${e}`);
}finally{ console.log(`Siempre me ejecuto, haya error o no`);}

/** Existen tipos de errores ya predeterminados por el lenguaje
 * 
 * INTERNAL ERROR
 * SYNTAX ERROR
 * TYPE ERROR
 * RANGE ERROR
 * REFERENCE ERROR
 */