let readlineSync = require("readline-sync");
let monto = readlineSync.questionFloat("ingrese el monto");
let montoConDescuento;
let descuento;
let cantidad = readlineSync.questionFloat("ingrese la cantidad");
let precioTotal = monto * cantidad;
let mes = readlineSync.question("ingrese el mes");
if(mes == "Octubre"){
    descuento =(precioTotal*15)/100
    montoConDescuento = precioTotal - descuento;
    console.log("por comprar en el mes de octubre usted tiene un 15 % de descuento");
    console.log("el monto a paga es:", montoConDescuento)
}
else{
    console.log("usted no tiene descuento, el monto a pagar es:", precioTotal)
}