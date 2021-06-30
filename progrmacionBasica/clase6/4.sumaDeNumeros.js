let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("ingrese el primer numero");
let segundoNumero = readlineSync.questionInt("ingrese el segundo numero");
let actual, suma;
actual = primerNumero;
suma= 0;
for(actual = primerNumero; actual<=segundoNumero; actual++){
    suma = suma + actual;
}
console.log("el resultado es:", suma)