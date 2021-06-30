let readlineSync = require("readline-sync");
let sueldoActual = readlineSync.questionFloat("Ingrese el sueldo que tiene");
let nuevoSueldo;
if ( 0 < sueldoActual && sueldoActual <= 15000){
    nuevoSueldo = sueldoActual *1.2;
    console.log("usted tiene un aumento del 20%")
}else if (15001 < sueldoActual && sueldoActual <=20000){
    nuevoSueldo = sueldoActual * 1.1;
    console.log("usted tiene un aumento del 10%");
}else if (20001 < sueldoActual && sueldoActual <=25000){
    nuevoSueldo = sueldoActual * 1.05;
    console.log("usted tiene un aumento del 5 %")
}else{
    nuevoSueldo = sueldoActual;
    console.log("Usted no tiene aumento")
}


 
        

