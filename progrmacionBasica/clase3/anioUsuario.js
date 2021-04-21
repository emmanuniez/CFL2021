let readlineSync = require("readline-sync");
let añoDeNacimiento = readlineSync.questionInt("Ingrese el año en que nacio");
let anioEnTranscurso = 2021;
let edadUsuario = anioEnTranscurso - añoDeNacimiento;
console.log("Usted tiene:", edadUsuario);