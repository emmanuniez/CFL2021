let readlineSync = require('readline-sync');
let usuario = readlineSync.question("Ingrese su nombre de usuario: ");
let contrasenia = readlineSync.question("Ingrese su contraseña: ");
let usuarioInicial = 'Juan';
let contraseñaInicial = 'claveJuan';

if (usuario == usuarioInicial && contrasenia == contraseñaInicial){
    console.log ('Bienvenido!');
} else {
    console.log('usuario o contraseña incorrecta ');
}