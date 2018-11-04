module Tienda{
	export class Ropa{
		constructor(titulo:string){
			alert(titulo);
		}
	}

    export class Informatica{
		constructor(titulo:string){
			alert(titulo);
		}
	}
}	

import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica("Super Tienda"); 

interface DatosCalculadora{
       getSuma():number;
       getMultiplicacion():number;
}

class AnotherOperations {

	 public numero1:number;
     public numero2:number;

     /* constructor() */
    constructor(numero1:number, numero2:number){
        this.numero1= numero1;
        this.numero2= numero2;
    }


	public aleatoryNumber():number{
		return Math.floor(Math.random() * (this.numero1 - this.numero2 + 1)) + this.numero1;

	}
}



class Calculadora extends AnotherOperations implements DatosCalculadora {
   
    public getSuma():number{
          return this.numero1 + this.numero2;
    }


    public getResta():number{
          return this.numero1 - this.numero2;
    }

    public getMultiplicacion():number{
          return this.numero1 * this.numero2;
    }

    public getDivision():number{
          return (this.numero1 / this.numero2);
    }

    public getAllData():string{
        return 'La suma es +"****'+
        this.getSuma()+'*** La Resta ***'+ 
        this.getResta()+'*** La Multiplicacion ***'+
        this.getMultiplicacion()+'*** La Division ***'+
        this.getDivision()+'*** El numero Aleatoreo ***'+
        this.aleatoryNumber();
    }

}


var resultado = [];

function guardar(){
	console.log('se ejecuto');
	let numero1 = (<HTMLInputElement>document.getElementById("numero1")).value;
	let numero2 = (<HTMLInputElement>document.getElementById("numero2")).value;
    var resultado_new = new Calculadora(parseInt(numero1), parseInt(numero2));
    resultado.push(resultado_new.getAllData());

	var list = '';
	for(var i=0; i < resultado.length; i++){
       list = list+"<li>"+resultado[i]+"</li>";
       console.log(list);
	}


	var listado = <HTMLElement>document.getElementById("listado");
	listado.innerHTML = list;

	// console.log(InstanciaObject.getAllData());
}


 var Calculadora_1 = new Calculadora(4, 9);
// Calculadora_1.lanzamiento();


/* Funciones Flecha */

// setInterval((nombre_variable, hola) => {
// console.log('hola');
// }, 1000);


var frutas = ["manzana", "naranja", "platano", "demo"];


/* Donde fruta es el elemento */
var recorrer = frutas.map(fruta => {
	console.log(fruta);
	console.log(fruta.length);
});

// setInterval(() => {
// console.log('hola');
// }, 1000);

// setTimeout(function(){
// console.log('hola');
// }, 1000);












