let readlineSync = require('readline-sync');
let length = readlineSync.questionInt("Ingrese la cantidad de alumnos: ")
let students = new Array(length);
let firstTrim = new Array(length);
let secondTrim = new Array(length);
let thirdTrim = new Array(length);
let average = new Array(length);
//let seeker;
function loadStudents(students, length){
    let index;
    for(index=0; index<length; index++){
        students[index] = readlineSync.question("Ingrese el nombre del alumno " + (index+1) + ":");
    }
    loadNotes(firstTrim, secondTrim, thirdTrim, length, students);
    calculateAverage(average,length);
}
function loadNotes(firstTrim, secondTrim, thirdTrim, length, students){
    let index;
    for(index = 0;index<length;index++){
        firstTrim[index] = readlineSync.questionFloat("indique nota del primer trimestre " + students[index])
        secondTrim[index] = readlineSync.questionFloat("ingrese nota del segundo trimestre " + students[index])
        thirdTrim[index] = readlineSync.questionFloat("ingrese la nota del tercer trimestre " + students[index])
    }
}
function calculateAverage(average,length){
    let index;
    for(index=0; index<length; index++){
        average[index] = (firstTrim[index] + secondTrim[index] + thirdTrim[index]) / 3;
    }
}
/*function searchEstudents(search, students, average, length) {
    let index;
    let comprobar;
    let alumnoEncontrado =0 ;
     search = readlineSync.question("ingrese el nombre del alumno");
    /*for(index = 0;index<length;index++){
       if(search== students[index]){
        comprobar = true;
        alumnoEncontrado = students[index]
       }else{
           
       }
    }
}*/  
/*if(comprobar == true){
    console.log(average[index+1])
}else{
    console.log("el alumno no se encontro");
    
}  */

//let search = " ";
loadStudents(students,length);
//searchEstudents(search, students, average, length);
console.log(students);
console.log(average);
