let readlineSync = require("readline-Sync");
let numero = readlineSync.questionInt("ingrese un numero");
let numeroDivisores = cantidadDeDivisores(numero);
console.log("el numero", numero, "tiene", numeroDivisores, "divisores");

function cantidadDeDivisores(numero){
    let cantidad = 0
    let divisor;
    for(divisor = 0; divisor< numero; divisor++){
        if (esMultiplo(numero, divisor)){
            cantidad ++
        }
    }
    return cantidad
}

function esMultiplo(numero,divisores) {
    return((numero % divisores)== 0)
    
}