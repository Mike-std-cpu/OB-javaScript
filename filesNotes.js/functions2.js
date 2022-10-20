function hi(){
    hola();
}

function hola(){
    console.log(`Hola, soy la funcion saludar`);
}

hi();

// 1. global();
// 2. hi(); <-- global();
// 3. hola(); <-- hi(); <-- global();
// 4. hi(); <-- global();
// 5. global();

/**
 * De manera como se explica graficamente, el programa entrara globalmente en el scrip global,
 * posterormente, entrara a la funcion que que manda llamar hi(), esta funcion manda llamar a hola(),
 * posterior de termino se hace el mimso proceso de termino.
 */

// FUNCIONES ASINCRONAS (PROMESAS)
/**
 * Una Promise es un objeto que representa la terminación o el fracaso de una operación asíncrona.
 * Dado que la mayoría de las personas consumen promises ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.
 * Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.
 * ES UNA FORMA DE FILTRAR LOS EXITOS O FRACASOS.
 * -A punto de vista personal, se maneja igual que un try-catch-
 */

const miPromesa = new Promise((resolve,reject) => {
    const numero = 1;
    if(numero !== 0){
        resolve();
    }else{
        reject();
    }
})

miPromesa
    .then(() => console.log("Se a ejecutaod de forma correcta"))
        .catch(() => console.log("ERROR"))
            .finally(() => console.log("¡Termino esto!"));


