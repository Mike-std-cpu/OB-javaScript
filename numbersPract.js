
// - Una variable que contenga tu altura en centímetros (entero)

const myHight = 180;

// - Una variable que contenga tu altura en metros (número de coma flotante)

let myHightFloat = 1.805;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let myWeight = 95.30

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let myHightRounding = Math.round(myHightFloat);
console.log(myHightRounding);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let myWeightRounding = myWeight.toPrecision(2);
console.log(myWeightRounding);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max = Number.MAX_VALUE;
if ((max + 1) == max){
    console.log("Si es")
}else{
    console.log("No es");
}
