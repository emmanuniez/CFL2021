var Radio = /** @class */ (function () {
    function Radio(prenderApagar, volumen, emisora) {
        this.estaPrendido = prenderApagar;
        this.volumenActual = volumen;
        this.emisoraActual = emisora;
    }
    Radio.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Radio.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Radio.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Radio.prototype.subirEmisora = function () {
        this.emisoraActual = this.emisoraActual + 1;
    };
    Radio.prototype.bajarEmisora = function () {
        this.emisoraActual = this.emisoraActual - 1;
    };
    Radio.prototype.elegirEmisora = function (canal) {
        this.emisoraActual = canal;
    };
    Radio.prototype.mostarRadio = function () {
        console.log("la radio esta encendida", this.prenderApagar, "en el volumen", this.volumenActual, "en la emisora", this.emisoraActual);
    };
    return Radio;
}());
var miRadio = new Radio(true, 22, 97);
miRadio.mostarRadio();
miRadio.subirEmisora();
miRadio.mostarRadio();
