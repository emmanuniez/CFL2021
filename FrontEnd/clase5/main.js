function saludar(){
    console.log("hola a todos")
}

/*"use strict"
console.log("declarando funciones")
let contador =0
function clickear(){
    contador ++;
    console.log("hiciste " + contador + " clicks")
}*/

//el contador aparece en la pag y no en la inspeccion
let contador=0;
function clickear (){
    contador++;
document.getElementById("contadorClicks").innerHTML = ("Hiciste "+contador+" Clicks")
}


/*let str = "emmanuel"
let nombre = str.length
console.log(nombre)*/


//modificar el html mediante js
//document.querySelector("h1").innerHTML =("hola")


"use strict";
/*function ActualizarSaludo() { 
    //lee el nombre
    let nodoInput =  document.getElementById("txtNombre");
    let nombre = nodoInput.value;
    console.log(nombre);
    let nodoSaludo = document.getElementById("txtSaludo");
    nodoSaludo.innerHTML = "Hola " + nombre;
}*/


