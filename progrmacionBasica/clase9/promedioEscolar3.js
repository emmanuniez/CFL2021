let readlineSync = require('readline-sync');
let length = readlineSync.questionInt("Ingrese la cantidad de alumnos: ")
let students = new Array(length);
let firstTrim = new Array(length);
let secondTrim = new Array(length);
let thirdTrim = new Array(length);
let average = new Array(length);
function loadStudents(students, length){
    let index;
    for(index=0; index<length; index++){
        students[index] = readlineSync.question("Ingrese el nombre del alumno " + (index+1) + ":");
    }
    loadNotes(firstTrim,secondTrim,thirdTrim, length,students);
    calculateAverage(average,length);
}
function loadNotes(firstTrim,secondTrim,thirdTrim, length,students){
    let index;
    for(index=0; index<length; index++){
        firstTrim[index] = readlineSync.questionFloat("Ingrese la nota del trimestre 1 de " + students[index] + ": ");
        secondTrim[index] = readlineSync.questionFloat("Ingrese la nota del trimestre 2 de " + students[index] + ": ");
        thirdTrim[index] = readlineSync.questionFloat("Ingrese la nota del trimestre 3 de " + students[index] + ": ");
    }
}
function calculateAverage(average,length){
    let index;
    for(index=0; index<length; index++){
        average[index] = (firstTrim[index] + secondTrim[index] + thirdTrim[index]) / 3;
    }
}
loadStudents(students,length);
console.log(students);
console.log(average);