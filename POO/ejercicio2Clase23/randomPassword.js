"use strict";
exports.__esModule = true;
var random = require("randomstring");
var read = require("readline-sync");
var cantidadDeDigitos = read.questionInt("ingrese la cantidad de numeros");
var password = random.generate({
    length: cantidadDeDigitos,
    charset: "alphabetic"
});
console.log("la contraseña es " + password);
