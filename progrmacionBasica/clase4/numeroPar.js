let readlineSync = require("readline-Sync");
let numeroUsuario = readlineSync.questionInt("ingrese un numero");
    if (numeroUsuario % 2 == 0){
        console.log("el numero es PAR")
    }else
    console.log("el numero es IMPAR")
    if (numeroUsuario == 0){
        console.log("el numero es 0")
    }