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
}finally{ console.log(`Siempre me ejecuto, haya error o no`);}