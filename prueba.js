function HolaMundo(nombre) {
    return 'Hola Mundo !! Soy' + nombre;
}
var nombre = 'GloriaG';
var resultado = HolaMundo(nombre);
/* LET LIMITA SU USO A LA CLASE BLOQUE O DECLARACION DE DONDE SE ESTA USANDO */
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
/* Variable y tipos */
// colorone = 'red';
/* Declaración de Booleano */
var programador = true;
var isDone = false;
/* Declaración de Numerico */
var age = 37;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var edad = 29;
/* Declaración de String */
var nombre = "Gloria Guaderrama";
var color = "blue";
var fullName = "Bob Bobbington";
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
/* Declaración de Arreglos */
var langs = ["PHP", "JAVASCRIPT", "CSS"];
var list = [1, 2, 3];
// Declare a tuple type
var x;
var ejemplo = [1, true, "free"];
list[1] = 100;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var unusable = undefined;
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
/* LINK

https://www.typescriptlang.org/docs/handbook/basic-types.html


A note about let
You may’ve noticed that so far, we’ve been using the let keyword instead of JavaScript’s var keyword which you might be more familiar with. The let keyword is actually a newer JavaScript construct that TypeScript makes available. We’ll discuss the details later, but many common problems in JavaScript are alleviated by using let, so you should use it instead of var whenever possible.


 */
etiqueta.innerHTML = nombre + "-" + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b_1 = 1;
    console.log("DENTRO DEL IF" + a_1 + "-" + b_1);
}
console.log("FUERA DEL IF" + a + "-" + b);
/* DEFINIR A LA FUNCION QUE TIPO DE DATO VA A DEVOLVER */
function devuelveNumero(num) {
    return "Numero Devuelto" + num;
}
function devuelveString(texto) {
    if (texto == 'hola') {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
function devuelveBoolean(texto) {
    if (texto == 'hola') {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
function devuelveAny(texto) {
    if (texto == 'hola') {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
console.log(devuelveNumero(34));
console.log(devuelveString("hola"));
console.log(devuelveBoolean("demo"));
console.log('ESTO ES UNA PRUEBA DE ANY' + devuelveAny("demo"));
// alert(devuelveNumero(34));
