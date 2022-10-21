// - Una función sin parámetros que devuelva siempre "true"
function alwaysTrue(){
    if(true){
        console.log(`Siempre sera true`);
    }else{
        console.log(`False :( )`);
    }
}
alwaysTrue();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

let promesa = new Promise((resolver) => {
    setTimeout(() => {
        resolver('Hola soy una promesa'), 5000
        console.log('Adios..')
    })
});

promesa.then(resolver => console.log(resolver));// Esto se vera mediante consola :)

// - Una función generadora de índices pares automáticos

function* genrarIDpares() {
    let id = 0;
    while(true){
        id++;
        if(id%2 == 0){
            //return id;
            yield id;
        }
        if (id === 20){
            return id;
        }
    }
}

const pares = genrarIDpares();

console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());

