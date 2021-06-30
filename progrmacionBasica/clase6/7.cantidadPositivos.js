let readlineSync = require("readline-sync");
let canTotal = 0;
let cantPositivos = 0;
let porPositivos = 0;

let num = readlineSync.questionInt("ingrese el numero");
while ( num !=0){
    if (num > 0){
        cantPositivos++;
    }
    canTotal++;
    let num = readlineSync.questionInt("ingrese un numero");
}
if(canTotal >0){
    porPositivos=cantPositivos*100/canTotal;
    console.log(cantPositivos, "positivos", porPositivos, "% del total");
}