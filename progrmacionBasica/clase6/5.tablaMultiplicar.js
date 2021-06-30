let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("ingrese el numero de la tabla");
let segundoNumero = readlineSync.questionInt("ingrese el multiplicador");
let contador,resultado;
for(contador=1;contador<=segundoNumero;contador++){
    resultado= primerNumero*contador;
    console.log(primerNumero, "X",contador,"=",resultado);
}