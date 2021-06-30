function Azar(numero) {
    return Math.floor((Math.random() * numero) + 1);
}

function cargar(arreglo, cantidad, numAzar) {
    let i;
    for (i = 0 ; i<cantidad; i++ ) {
        arreglo[i] = Azar(numAzar);
    }
}

function escribirEnUnaLinea(arreglo, cantidad) { 
    let i;
    let vector = "";
    for (i = 0 ; i<cantidad; i++) {
        vector = vector + arreglo[i] + " " ;
    }
    console.log (vector); 
}

function intercambiar(arreglo, i, j) { 
    let aux; 
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

function seleccion(arreglo, cantidad) {
    let i, j, posicion; 
    for (i = 0; i < (cantidad-1); i++) {
        posicion = i; 
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == 1) {
                posicion = j; 
            } 
        }
        intercambiar(arreglo, i, posicion); 
    }
}

//Algoritmo Orden 
let lim = 10;
let a = new Array(lim);  
cargar(a, lim, 100); 
console.log(a); 
//seleccion 
seleccion(a, lim); 
console.log(a);