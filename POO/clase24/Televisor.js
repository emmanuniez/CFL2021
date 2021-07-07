var Televisor = /** @class */ (function () {
    function Televisor(volumen, canal) {
        this.volumenActual = volumen;
        this.canal = canal;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false; //SIEMPRE USAR THIS.
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canal = this.canal + 1;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canal = this.canal - 1;
    };
    Televisor.prototype.elegirCanal = function (canal) {
        this.canal = canal;
    };
    Televisor.prototype.mostrarTele = function () {
        console.log("el tele esta encendido en", this.canal, "con el volumen en ", this.volumenActual);
    };
    return Televisor;
}());
var miTele = new Televisor(10, 612);
miTele.mostrarTele();
miTele.subirVolumen();
miTele.mostrarTele();
