let readlineSync = require("readline-sync");
let alturaUsuario = readlineSync.question ("cual es su altura");
let pesoUsuario = readlineSync.question ("cual es su peso");
let IMCusuario = pesoUsuario / (alturaUsuario * alturaUsuario);
console.log ( "Su IMC es", IMCusuario);