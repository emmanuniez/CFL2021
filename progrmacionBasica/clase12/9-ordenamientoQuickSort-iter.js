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

// algoritmo que hace el intercambio de elementos en el arreglo
function partition(arr, izquierda, derecha) { 
    // tomo el último elemento del arreglo en pivot
	let pivot = arr[derecha]; 
    // variable para almacenar temporalmente un elemento del arreglo
	let temp;

	// Posición del primer elemento del arreglo
	let pos = (izquierda - 1); 
	for (j = izquierda; j <= derecha - 1; j++) { 
		// Si el elemento en j es menor o igual al pivot, intercambiarlos 
		if (arr[j] <= pivot) { 
			pos++; 

            // intercambiar arr[pos] y arr[j] 
            intercambiar(arr, pos, j);
		} 
	} 

	// intercambiar arr[pos+1] y arr[derecha] (o pivot) 
	temp = arr[pos + 1]; 
	arr[pos + 1] = arr[derecha]; 
	arr[derecha] = temp; 

	return pos + 1; 
} 

// algoritmo de quicksort iterativo
function quickSortIterative(arr, izquierda, derecha)  { 
    // Crear un arreglo auxiiar del mismo tamaño que el original
    let auxiliar = new Array(derecha - izquierda + 1); 

    // initializar la posición en el arreglo auxiliar
    let pos = -1;
    let pivot

    // almacenar los elementos de izquierda y derecha en el arreglo auxiliar
    auxiliar[++pos] = izquierda; 
    auxiliar[++pos] = derecha; 

    // recorrer el arreglo auxiliar mientra tengoa elementos  
    while (pos >= 0) { 
        // asignar los elementos del arreglo auxiliar de la derecha y izquierda 
        derecha = auxiliar[pos--]; 
        izquierda = auxiliar[pos--]; 

        // Definir el elemento pivot en su posición correcta en el arreglo ordenado 
        pivot = partition(arr, izquierda, derecha); 

        // Si hay elementos en el lado izquierdo del pivot mayores, los agrego al arreglo auxiliar  
        if (pivot - 1 > izquierda) { 
            auxiliar[++pos] = izquierda; 
            auxiliar[++pos] = pivot - 1; 
        } 

        // Si hay elementos en el lado derecho del pivot menores, los agrego al arreglo auxiliar
        if (pivot + 1 < derecha) { 
            auxiliar[++pos] = pivot + 1; 
            auxiliar[++pos] = derecha; 
        } 
    } 
} 

// algoritmo de llamada al quicksort
let longitud = 10; 
let arr = new Array(longitud);
cargar(arr, longitud, 100);
escribirEnUnaLinea(arr, longitud);
quickSortIterative(arr, 0, longitud - 1);
escribirEnUnaLinea(arr, longitud);