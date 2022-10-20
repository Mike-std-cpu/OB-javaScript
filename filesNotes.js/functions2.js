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