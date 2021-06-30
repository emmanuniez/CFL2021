let readlineSync = require("readline-sync");
let numeroUsuario = readlineSync.questionInt("ingrese un numero entero");
if (numeroUsuario %2 == 0){
    console.log("el numero es par");
}else{
    console.log("el numero es impar");
} if (numeroUsuario == 0){
    console.log("debe ingresar otro numero")
}
