import * as fs from "fs" ;

let texto:string = fs.readFileSync ("archivoDeTexto.txt", "utf8");

let palabras:string [] = texto.split (" ") ;

console.log(palabras);