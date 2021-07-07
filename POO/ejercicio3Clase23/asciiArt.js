"use strict";
exports.__esModule = true;
var art = require("ascii-art");
var read = require("readline-sync");
var frase = read.question("ingrese la frase");
art.font(frase, "Doom", function (Err, renderer) {
    console.log(Err || renderer);
});
