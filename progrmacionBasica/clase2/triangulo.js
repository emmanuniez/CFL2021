let readlineSync = require("readline-sync");
let base = readlineSync.question("Ingrese la base");
let altura = readlineSync.question("Ingrese la altura");
area = base * altura / 2
console.log("el area es:", area);