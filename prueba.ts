function HolaMundo(nombre){
     return 'Hola Mundo !! Soy' + nombre;
}

var nombre = 'GloriaG';

var resultado = HolaMundo(nombre);


/* LET LIMITA SU USO A LA CLASE BLOQUE O DECLARACION DE DONDE SE ESTA USANDO */



var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML= resultado;

/* Variable y tipos */

// colorone = 'red';


/* Declaración de Booleano */

var programador:boolean = true;
let isDone: boolean = false;


/* Declaración de Numerico */
let age: number = 37;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
var edad:number = 29;
/* Declaración de String */
var nombre:string = "Gloria Guaderrama";
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;


/* Declaración de Arreglos */

var langs: Array<string> = ["PHP", "JAVASCRIPT", "CSS"];
let list:number[] = [1, 2, 3];
// Declare a tuple type
let x: [string, number];
let ejemplo: any[] = [1, true, "free"];

list[1] = 100;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let unusable: void = undefined;


// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}




/* LINK

https://www.typescriptlang.org/docs/handbook/basic-types.html


A note about let
You may’ve noticed that so far, we’ve been using the let keyword instead of JavaScript’s var keyword which you might be more familiar with. The let keyword is actually a newer JavaScript construct that TypeScript makes available. We’ll discuss the details later, but many common problems in JavaScript are alleviated by using let, so you should use it instead of var whenever possible.


 */



etiqueta.innerHTML= nombre + "-" + edad;


var a = 7;
var b = 12;


if(a === 7 ){
	let a = 4;
	let b = 1;

	console.log("DENTRO DEL IF"+a+"-"+b);
}

console.log("FUERA DEL IF"+a+"-"+b);





/* DEFINIR A LA FUNCION QUE TIPO DE DATO VA A DEVOLVER */


function devuelveNumero(num:number):string{
   return "Numero Devuelto" + num;
}

function devuelveString(texto:string):number{
	if(texto == 'hola'){
		var num = 66;
	}else{
		var num = 90;
	}

	return num;
}


function devuelveBoolean(texto:string):boolean{
	if(texto == 'hola'){
		var num = true;
	}else{
		var num = false;
	}

	return num;
}

function devuelveAny(texto:string):any{
	if(texto == 'hola'){
		var num = true;
	}else{
		var num = false;
	}

	return num;
}



console.log(devuelveNumero(34));
console.log(devuelveString("hola"));
console.log(devuelveBoolean("demo"));
console.log('ESTO ES UNA PRUEBA DE ANY'+ devuelveAny("demo"));


// alert(devuelveNumero(34));





