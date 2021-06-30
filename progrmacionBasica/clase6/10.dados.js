let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("cuantas veces va a tirar");
let probCara = 1/6;
let probFinal = 1;
let contador;
for(contador=1;contador<=n;contador++){
    probFinal = probFinal* probCara;
}
console.log("la probabilidad es", probFinal)