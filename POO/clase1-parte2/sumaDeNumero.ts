import * as readline from "readline-sync";

function sumar(numeros:number[]): number{
    let sum:number = 0
    for(let i:number=0;i<numeros.length;i++){
        sum += numeros[i];
    }
    return sum;
}   
    let arregloNumeros:number[]= [1,2,4,1];
    //let letras:string[]= [1,2,4]esto es un array de cadena de texto por eso el error
    console.log(sumar(arregloNumeros));
