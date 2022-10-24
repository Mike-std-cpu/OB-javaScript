function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function multipl(a,b){
    return a * b;
}

function division(a,b){
    return a / b;
}

//Exportacion de funciones
module.exports = {
    suma,
    resta,
    multipl,
    division
}

/**
 * Esta es la manera de importar los datos con Common JS, mas imformacion en el sigiente link:
 * https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/
 * o en el blog de notsas personal
 */