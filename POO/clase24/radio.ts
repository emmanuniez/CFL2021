class Radio{
    estaPrendido:boolean
    volumenActual:number
    emisoraActual:number


    constructor(prenderApagar:boolean,  volumen:number, emisora:number){
        this.estaPrendido=prenderApagar;
        this.volumenActual=volumen;
        this.emisoraActual=emisora;
    }

    prenderApagar(): void {
        if (this.estaPrendido)
        this.estaPrendido = false
        else
        this.estaPrendido = true
        }
    subirVolumen(): void {
            this.volumenActual = this.volumenActual + 1
            }
    bajarVolumen(): void {
            this.volumenActual = this.volumenActual - 1
            }
    subirEmisora(): void {
            this.emisoraActual = this.emisoraActual + 1
            }
    bajarEmisora(): void {
            this.emisoraActual = this.emisoraActual - 1
            }
    elegirEmisora(canal: number): void {
            this.emisoraActual = canal;
            }

     mostarRadio(){
             console.log("la radio esta encendida",this.prenderApagar, "en el volumen", this.volumenActual, "en la emisora", this.emisoraActual)
     }    

}

let miRadio = new Radio (true,22,97);
miRadio.mostarRadio();
miRadio.subirEmisora();
miRadio.mostarRadio();
























