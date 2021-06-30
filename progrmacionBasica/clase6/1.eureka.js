let readlineSync = require("readline-sync");
let ingreseClave = readlineSync.question("ingrese la contraseña")
let clave = "eureka";
let intento = 1 ;
while((ingreseClave != clave) && (intento <= 2 )){
    intento ++;
    ingreseClave = readlineSync.question("ingrese la contraseña" + intento);
}
    if (ingreseClave == clave){
        console.log("usted ingreso con exito")
    }
    else{
        console.log("se acabaron las posibilidades")
    }