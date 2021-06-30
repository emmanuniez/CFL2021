let readlineSync = require("readline-sync");
let nombreAlumno = readlineSync.question("ingrese el nombre del alumno(vacio para cortar)");
let notaPractica, notaProblemas, notaTeorica, notaFinal;
while(nombreAlumno){
    notaPractica = readlineSync.questionFloat("nota practica");
    notaProblemas = readlineSync.questionFloat("nota problemas");
    notaTeorica = readlineSync.questionFloat("nota teorica");
    if ((notaPractica<=10 && notaPractica>=0)&&(notaProblemas<=10 && notaProblemas >=0)&&
        (notaTeorica<=10 && notaTeorica>=0)){
            notaFinal = notaPractica * 0.1 + notaProblemas *0.5 + notaTeorica *0.4;
            console.log("la nota final de", nombreAlumno, "es", notaFinal);
    } else{
            console.log("error en las notas ingresadas");

    }
}