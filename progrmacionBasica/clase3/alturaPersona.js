let readlineSync = require("readline-sync");
let alturaUsuario = readlineSync.questionFloat("ingrese la altura");
let alturaPermitida = 1.30;
    if (alturaUsuario<= 1.30){
        console.log("No puede entrar");
    }
    else console.log("puede entrar")
    
  
