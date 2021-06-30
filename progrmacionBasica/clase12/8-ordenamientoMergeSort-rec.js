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

// algoritmo de mezcla (merge) de 2 arrays
function merge(arr, izq, med, der) 
{ 
    // definir los tamaños de los 2 subarrays a ser mezclados y combinados
    let n1 = med - izq + 1; // n1 es la cantidad de elementos del arreglo de la izquierda
    let n2 = der - med;     // n2 es la cantidad de elementos del arreglo de la derecha

    /* arreglos temporales de trabajo */
    let IZQUIERDA = new Array(n1); 
    let DERECHA = new Array(n2); 

    let i, j;
    /* copiar los datos del arreglo a mezclar en los temporales*/
    for (i=0; i<n1; ++i) 
        IZQUIERDA[i] = arr[izq + i]; 
    for (j=0; j<n2; ++j) 
        DERECHA[j] = arr[med + 1 + j]; 

    /* Merge los arreglos temporales */

    // índices iniciales para recorrer los sub arreglos temporales  
    i = 0, j = 0; 

    // k es el índice del arreglo a mezclar que combina los arreglos temporales
    let k = izq; 
    while (i < n1 && j < n2)  { 
        if (IZQUIERDA[i] <= DERECHA[j]) { 
            arr[k] = IZQUIERDA[i]; 
            i++; 
        } else { 
            arr[k] = DERECHA[j]; 
            j++; 
        } 
        k++; 
    } 

    /* copiar elementos restantes de IZQUIERDA[] si quedan */
    while (i < n1) { 
        arr[k] = IZQUIERDA[i]; 
        i++; 
        k++; 
    } 

    /* copiar elementos restantes de DERECHA[] si quedan */
    while (j < n2) { 
        arr[k] = DERECHA[j]; 
        j++; 
        k++; 
    } 
} 

// algoritmo de mergesort recursivo (recorre el arreglo y lo divide para luego mergear)
function mergesort(arr, izq, der) { 
    if (izq < der)  { 
        // encontrar el elemento del medio dal arreglo 
        let med = Math.floor((izq+der)/2); 
        // partir el arreglo y llamar recursivamente con cada mitad 
        // enviar recursivamente la parte izquierda del arreglo 
        mergesort(arr, izq, med); 
        // enviar recusrivamente la parte derecha del arreglo
        mergesort(arr , med+1, der); 

        // Mezclar las dos mitades y ordenarlas 
        return merge(arr, izq, med, der); 
    } 
} 


//Algoritmo Merge  
let longitud = 10; 
let a = new Array(longitud);
let izquierda = 0;
let derecha = longitud - 1;
cargar(a, longitud, 100);
escribirEnUnaLinea(a, longitud);
mergesort(a, izquierda, derecha);
escribirEnUnaLinea(a, longitud);