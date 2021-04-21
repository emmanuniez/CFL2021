let readlineSync = require("readline-Sync");
let precioProducto = readlineSync.questionInt("ingrese Precio Producto");
let descuentoProducto = readlineSync.questionInt("ingrese Descuento Producto");
console.log("Precio Final", precioProducto*(100-descuentoProducto)/100);