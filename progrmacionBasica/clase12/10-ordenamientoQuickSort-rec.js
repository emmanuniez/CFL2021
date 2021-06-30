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

function intercambiar(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}


// partición del arreglo
function partition(arr, izquierda, derecha) {
    //elemento de la mitad
    let medio   = arr[Math.floor((derecha + izquierda) / 2)];
    // posición del elemento de la izquierda
    let izq     = izquierda; 
    // posición del elemento de la derecha
    let der     = derecha; 

    while (izq <= der) {
        // recorro el sub-arreglo buscando un elemento de la izquierda mayor que el del medio
        while (arr[izq] < medio) {
            izq++;
        }
        // recorro el sub-arreglo buscando un elemento de la derecha menor que el del medio
        while (arr[der] > medio) {
            der--;
        }
        // si encuentro elementos de la izquierda mayor que de la derecha, los intercambio
        if (izq <= der) {
            intercambiar(arr, izq, der); 
            izq++;
            der--;
        }
    }
    return izq;
}

// algoritmo quicksort
function quickSort(arr, izquierda, derecha) {
    let pos;
    if (arr.length > 1) {
        // posición del elemento retornado de partir el arreglo
        pos = partition(arr, izquierda, derecha); 
        // si la posición - 1 es mayor que izquierda, hay más elementos a ordenar desde la izquierda
        if (izquierda < pos - 1) { 
            // llamada recursiva con el arreglo para ordenar desde la izquierda hasta la posición - 1
            quickSort(arr, izquierda, pos - 1);
        }
        // si la posición es menor que derecha, hay más elementos a ordenar hacia la derecha
        if (pos < derecha) { 
            // llamada recursiva con el arreglo para ordenar desde la posición hasta la derecha
            quickSort(arr, pos, derecha);
        }
    }
    return arr;
}

// algoritmo de llamada al quicksort
let longitud = 10; 
let arr = new Array(longitud);
cargar(arr, longitud, 100);
escribirEnUnaLinea(arr, longitud);
quickSort(arr, 0, longitud - 1);
escribirEnUnaLinea(arr, longitud);