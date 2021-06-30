function Azar(numero) {
    return Math.floor((Math.random() * numero) + 1);
}

function cargar(matriz, f, c, numAzar) {
    let fil, col;
    for (fil = 0; fil < f; fil++) {
        for (col = 0; col < c; col++) {
            matriz[fil][col] = Azar(numAzar); 
        }
    } 
}

function inicializar(a, n) {
    let i;
    for (i = 0; i < n; i++) {
        a[i] = i; 
    }
}


function calcularSumaFila(matriz, f, c) {

    let suma = 0; // variable para sumar los elementos de las columnas
    let col; //indice para recorrer las columnas
    for (col=0;col<c;col++) {
        suma = suma + matriz[f][col]  // acumulo en suma las columnas por el indice "col"
    }
    return suma; // devuelvo la suma de los elementos de la fila
}


function mostrarMatriz(matriz, f, c) { 
    let fil, col, cadena;
    for (fil = 0; fil < f; fil++) {
        cadena = " ";
        for (col = 0; col < c; col++) {
            cadena = cadena + " [" + String(matriz[fil][col]) + "]";
        }
        //console.log(cadena);
        console.log(cadena + " = " + calcularSumaFila(matriz, fil, c));
    }
}

function escribirEnUnaLinea(a, f) {
    let i;
    let cadena = " ";
    for (i = 0; i < f; i++) {
        cadena = cadena + String(a[i]) + " ";
    }
    console.log ("ArregloSuma = " + cadena);
}

function calcularArregloSuma(matriz, f, c, arregloSuma) { 
    let fil;
    for (fil = 0; fil < f; fil++) {
        arregloSuma[fil] = calcularSumaFila(matriz, fil, c); 
    }
}

function comparar(arregloSuma, aux, i, j) { 
    let comparacion;
    if (arregloSuma[aux[i]] == arregloSuma[aux[j]]) { 
        comparacion = 0;
    } else if (arregloSuma[aux[i]] < arregloSuma[aux[j]]) { 
        comparacion = -1;
    } else { 
        comparacion = 1;
    }
    return comparacion;
}

function intercambiar(arreglo, i, j) { 
    let aux; 
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function burbuja(arregloSuma, aux, f, cambio) {
    let i;
    let j;
    for (i=0;i<f;i++) {                                     // recorro todos las filas de la matriz
        for(j=0; j < (f-i-1);j++) {                          // recorro todos los elementos que no están ordenados desde 0 hasta i (desde i hasta el final están ordenados)
            if (comparar(arregloSuma, aux, j, j+1) == cambio) { //comparación de los elementos inicial y siguiente
                intercambiar(aux, j, j+1);                  // intercambio el elemento que está desordenado con el siguiente
             }
        }
    }
}

let readlineSync = require('readline-sync'); // acá habilito paquete para pedir datos por consola
let f = 4; //acá defino la cantidad de filas de la matriz
let c = 2; // acá defino la cantidad de columnas de la matriz
let indice; //indice para recorrer las filas

let matriz = new Array(f);                      // defino un array de filas en "matriz"
for (indice = 0; indice < f; indice++) {
    matriz[indice] = new Array(c);              // defino el array de columnas por cada elemento "matriz[indice]"
};

cargar(matriz, f, c, 100);
mostrarMatriz(matriz, f, c);

let  arregloSuma = new Array(f); 
calcularArregloSuma(matriz, f, c, arregloSuma); 
let aux = new Array(f);                         // un auxiliar que va a tener los indices de las sumas
inicializar(aux, f);
escribirEnUnaLinea(aux, f);


console.log("----------------------------------------------");

let cambio = readlineSync.question("asncendente (1) o descendente (-1)?");

burbuja(arregloSuma, aux, f, cambio);

mostrarMatriz(matriz, f, c);
escribirEnUnaLinea(arregloSuma, f);
escribirEnUnaLinea(aux, f);