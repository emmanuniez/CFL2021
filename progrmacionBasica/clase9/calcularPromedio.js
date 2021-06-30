let cantidad = readlineSync.questionInt("ingrese la cantidad de chicos");



function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
    let chicos = new Array(cantidad);