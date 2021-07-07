"use strict";
//let conGetElemenById = document.conGetElemenById("miDiv")

let miDiv = document.querySelector("#miDiv");

let boton = document.querySelector("button")
boton.addEventListener("click", crearLista)

//let TareaNueva = document.createElement("p");
const max =100;
let resultado = "0"

 //let arreglo = new Array(100);


function crearLista() {
    for (let i = 1; i <= max; i++) {
        resultado = resultado + " " + i;
       // document.createElement()
    //    arreglo[i] = i;
      //  console.log(arreglo[i]);  
    }
    miDiv.innerHTML = resultado;
}

