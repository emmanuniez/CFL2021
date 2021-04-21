let readlineSync = require("readline-sync");
let base = readlineSync.question("Ingrese la base");
let altura = readlineSync.question("Ingrese la altura");
let area = base * altura
console.log("el area es:", area);