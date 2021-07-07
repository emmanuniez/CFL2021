import * as art from "ascii-art";
import * as read from "readline-sync";

let frase:string = read.question("ingrese la frase");

art.font(frase, "Doom", (Err,renderer) =>{
    console.log (Err || renderer);
})
