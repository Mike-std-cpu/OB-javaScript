//FUNCIONES GENERADORAS
/**
 * 
 * La declaración function* (la palabra clave function seguida de un asterisco) define una función generadora, 
 * que devuelve un objeto Generator.
 */

function* genrarID() {
    let id = 0;
    while(true){
        id++;
        if(id === 10){
            return id;
        }
        yield id;//esperando a que se vuelva a invocar
    }
}

const gen = genrarID();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/**
 * Los generadores son funciones de las que se puede salir y volver a entrar. Su contexto (asociación de variables) será conservado entre las 
 * reentradas.
 * La llamada a una función generadora no ejecuta su cuerpo inmediatamente; se devuelve un objeto iterador para la función en su lugar. 
 * Cuando el metodo next() del iterador es llamado , el cuerpo de la función generadora es ejecutado hasta la primera expresión yield, 
 * la cual especifica el valor que será retornado por el iterador o con, yield*, delega a otra función generadora. 
 * 
 * El método next() retorna un objeto con una propiedad value que contiene el valor bajo el operador yield y una propiedad done que indica, 
 * con un booleano, si la función generadora ha hecho yield al último valor.
 * 
 * 
 * Link de referencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*#:~:text=de%20la%20funci%C3%B3n.-,Descripci%C3%B3n,la%20funci%C3%B3n%20en%20su%20lugar.
 */