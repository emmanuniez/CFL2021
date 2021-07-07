class Televisor {
     estaPrendido: boolean
     volumenActual: number
     canal: number

     constructor(volumen: number, canal: number) {
        this.volumenActual=volumen;
        this.canal=canal;
        }
       
   
    prenderApagar(): void {
    if (this.estaPrendido)
    this.estaPrendido = false//SIEMPRE USAR THIS.
    else
    this.estaPrendido = true
    }
    subirVolumen(): void {
    this.volumenActual = this.volumenActual + 1
    }
    bajarVolumen(): void {
    this.volumenActual = this.volumenActual - 1
    }
    subirCanal(): void {
    this.canal = this.canal + 1
    }
    bajarCanal(): void {
    this.canal = this.canal - 1
    }
    elegirCanal(canal: number): void {
    this.canal = canal;
    }
    mostrarTele(){
        console.log("el tele esta encendido en", this.canal, "con el volumen en ", this.volumenActual  )
    }
   }

let miTele= new Televisor(10,612)
miTele.mostrarTele()
miTele.subirVolumen()
miTele.mostrarTele()
