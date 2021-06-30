let i
for(i=1;i<=80; i++){
    console.log("el area es:", calcularAreaTriangulo(i,i*2));
}

function calcularAreaTriangulo(base,altura){
    return(base* altura)/2;
}