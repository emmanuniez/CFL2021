let readlineSync = require("readline-sync");


let num = readlineSync.questionFloat("ingrese un numemero(0 para cortar)");
let contador = 0;
let sum = 0;
let avg= 0;

let min=num
let max=num;

while(num!=0){
    if(num < min){
        min = num;
    }else if (num > max){
                max = num
        }
}
    sum += num;
    contador++
    let num = readlineSync.questionFloat("ingrese un numero(0 para cortar)");

if(contador > 0){
    avg =sum/contador;
    console.log("el minimo es", min)
    console.log("el maximo es", max)
    console.log("el promedio es", avg)
}else{
    console.log("no ingreso ningun numero")
}
