import * as random from "randomstring";
import * as read from "readline-sync";

let cantidadDeDigitos:number = read.questionInt("ingrese la cantidad de numeros")

let password:string = random.generate ({
    length: cantidadDeDigitos,
    charset:"alphabetic"
});

console.log("la contraseña es "+ password);
