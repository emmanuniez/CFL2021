"use strict";
exports.__esModule = true;
function sumar(numeros) {
    var sum = 0;
    for (var i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    return sum;
}
var arregloNumeros = [1, 2, 4, 1];
//let letras:string[]= [1,2,4]esto es un array de cadena de texto por eso el error
console.log(sumar(arregloNumeros));
