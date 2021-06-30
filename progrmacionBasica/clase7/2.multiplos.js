let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt("ingrese el valor a verificar");
let numero2 = readlineSync.questionInt("ingrese el numero multiplo");
if (esMultiplo(numero1, numero2)){
    console.log(numero1, "es multiplo de", numero2)
}else{
    console.log(numero1, "no es multiplo de", numero2)
}

function esMultiplo(numero1, numero2) {
    return((numero1 % numero2)==0)
}