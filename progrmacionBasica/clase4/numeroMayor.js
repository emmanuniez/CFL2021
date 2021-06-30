let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("Ingrese el primer Numero");
let segundoNumero = readlineSync.questionInt("ingrese el segundo numero");
let tercerNumero = readlineSync.question("ingrese el tercer numero");
    if (primerNumero > segundoNumero){
        console.log("primer Numero es el mas grande")
    }else{
        console.log("segundo numero es el mas grande")
    }if (tercerNumero > segundoNumero)
        console.log("tercer numero es mayor")
    