let readlineSync = require("readline-sync");
let posicionLlegada = readlineSync.questionInt("indicar la posicion de llegada");
switch (posicionLlegada) {
    case 1:
        console.log("entregar medalla de oro");
        break;
    case 2:
        console.log("entregar medalla de plata");
        break;
    case 3:
        console.log("entregar medalla de bronce");
        break;
    default:
        console.log("entregar diploma de participacion")
}