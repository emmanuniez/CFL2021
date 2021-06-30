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

// algoritmo de mergesort iterativo (recorre el arreglo y lo divide para luego mergear)
function mergeSort(arr, longitud) { 
          
	// De acuerdo al tamaño del sub-array que se va a mergear, For current size of subarrays to 
	// tamaño_actual varía desde 1 a longitud/2 
	let tamaño_actual;  
				  
	// Para seleccionar el elemento de inicio del sub-arreglo de la izquierda a ser mergeado
	let inicio_izq;  
	// Para seleccionar el elemento del inicio del sub-arreglo de la derecha a ser mergeado	
	let inicio_derecha; // fin_derecha;
    // elemento de la mitad del sub-arreglo a dividir
    let mitad;

	  
	// Se realiza el Merge de los sub-arreglos en la manera "bottom-up"
	// Primero mergear sub-arreglos de tamaño 1 para crear sub-arreglos de tamaño 2 y ordenarlos  
	// luego mergear sub-arreglos de tamaño 2 para crear sub-arreglos de tamaño 4 y ordenarlos
	// y así sucesivamente 
	for (tamaño_actual = 1; tamaño_actual <= longitud-1; tamaño_actual = 2*tamaño_actual) { 
		  
		// Buscar el elemento inicial de los diferentes sub-arrelgos de tamaño_actual 
		for (inicio_izq = 0; inicio_izq < longitud-1; inicio_izq += 2*tamaño_actual) { 

			// Buscar el elemento final del sub-arreglo de la Izquierda = mitad
			mitad = Math.floor(Math.min(inicio_izq + tamaño_actual - 1, longitud-1)); 

			// inicio_derecha es el elemento inicial del sub-arreglo de la derecha 
			inicio_derecha =Math.floor(Math.min(inicio_izq + 2*tamaño_actual - 1, longitud-1)); 

			// Merge sub-arreglos arr[inicio_izq...mitad] & arr[mitad+1...inicio_derecha] 
			merge(arr, inicio_izq, mitad, inicio_derecha); 

            // para entender el algotirmo
            // console.log("inicio_izq: ", inicio_izq, " - mitad: ", mitad, " - inicio_derecha: ", inicio_derecha, " - tamaño_actual: ", tamaño_actual);         
            // escribirEnUnaLinea(arr, longitud);
		} 
	} 
} 

//Algoritmo Merge  
let longitud = 10; 
let a = new Array(longitud);
cargar(a, longitud, 100);
escribirEnUnaLinea(a, longitud);
mergeSort(a, longitud);
escribirEnUnaLinea(a, longitud);