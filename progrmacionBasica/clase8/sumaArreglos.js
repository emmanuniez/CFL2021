let readlineSync = require("readline-sync");
let numeroUsuario = readlineSync.question("ingrese el numero")
let num = new Array(numeroUsuario)
let resultado =0
for(i = 0;i<numeroUsuario;i++){
    num[i] = readlineSync.questionInt("ingrese un numero")
    resultado += num[i]
}
console.log(num);
console.log(resultado);
