let num = 10;
let fact = 1;
let con = 1

while(true){
    if(fact <= num){
        con = con * fact;
        fact++;
    }
    if(fact == 10){
        break;
    }
}

console.log(`El factorial de 10 es: ${con}`);