let rl = require("readline-sync");
let elem, arr, nro, ocu;
elem= rl.questionInt("ingrese tamalo:");
arr= new Array(elem);
cargar(arr, elem);
nro = rl.questionInt("ingrese numero");
ocu = metodo(arr, elem, nro);
console.log("el numero" + nro +" ... " +ocu);
mostrar(arr, elem);

function cargar(v, l){
    for(let i = 0;i<l ;i++){
        v[i]=Math.floor(Math.random()*100);
    }
}


function mostrar(v, l){
    let c = "";
    for(let i=0; i<l;i++){
        c+= v[i]+" ";
        console.log(c)
    }
}

function metodo(v,l,n){
    let ocu;
    for(let i=0;i<l; i++){
        if(v[i]==n)
            ocu++
        }
}
