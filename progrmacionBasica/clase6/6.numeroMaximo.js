let readlineSync = require("readline-sync");
let conIngreso=false
let num = readlineSync.questionInt("ingrese el numero");
let maxNum = num;
while(num!=0) {
    conIngreso= true;
    if(num > maxNum){
        maxNum=num;
    }
    let num = readlineSync.questionInt("ingrese un numero");
}
if(coningreso) {
    console.log("el maximo es", maxNum);
}