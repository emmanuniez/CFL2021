let readlyneSync = require("readline-sync");
let base, exponente, resultado;
resultado = potenciaDeUnNro(base, exponente);
function potenciaDeUnNro(base, exponente){
    base = readlyneSync.questionInt("ingrese un numero base")
    exponente = readlyneSync.questionInt("ingrese un numero exponente, mayor o igual a 0")
if(exponente >=0){
    resultado = base**exponente;
}else{
    console.log("vuelva a intentarlo")
}
return resultado
}
console.log("el resultado es:", resultado)