# clases_typescript
Desarrollo Básico de TypeScript


TypeScript


Es un lenguaje de programacion de código abierto desarrollado por microsoft hace unos cuantos años desde el 2012 
Básicamente es un superconjunto de java script añadir mas funcionalides de programacion orientado a objetos , 
añade cosas como tipado estatico , tipado fuerte , objeto basado en clases. 


Extender la sintaxis de Java script por medio de este lenguaje propio , se compila se traduce 

NOS PERMITE EL STANDAR ENMASCRIPT 6 SINTAXIS Y CARACTERISTICAS NUEVAS QUE VAN A SALIR EN JAVA SCRIPTS


Es un lenguaje de programacion orientado a objetos desarrollado por microsoft , básicamente extiende la sintaxis por medio de lenguaje propio y añade un typado fuerte , tambien permite el stamdar de smmascript 6
Este lenguaje de programación , es el lunguaje oficial de angular. Se transpila a JS

TypeScript is unique because it is written as a superset of JavaScript—in other words, all JavaScript is already TypeScript
The language and compiler are open source and written in JavaScript, and the TypeScript team have taken great care to align the language’s extra features as closely as possible with what’s available in ES6 and later, so it also provides developers with an easy path to start using many of these newer language features.


INSTALACION 
npm install -g typescript
tsc -v
tsc -w *.ts Compilar continuamente

// Para Compilar
tsc prueba.ts

let permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. Lo anterior diferencia la expresión let de la palabra reservada var , la cual define una variable global o local en una función sin importar el ámbito del bloque.

let vs var
Cuando usamos let dentro de un bloque, podemos limitar el alcance de la variable a dicho bloque. Notemos la diferencia a con var, cuyo alcance reside dentro de la función donde ha sido declarada la variable.

var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1


Prgramación orientada a Objetos 

Paradigma de programación que lo que va a hacer es mejorar nuestra forma de programar y hacer que nosotros programemos de una forma mas limpia. 


Usuario Objeto - propiedades , atributos metodos

Nos hace concebir la forma de programar como si cualquier cosa fuese un objeto , POO nos permite tener varias ventajas y varias caracteristicas como la abstraccion de codigo, encapsulamiento , acoplamiento, herencia , polimorfismo.


POO 

Consebir la programacion como si cualquier cosa fuese un objeto , definiendo entidades y objetos concretos para definir un objeto hay que utilizar clase , es un molde con el cual podemos con caracteristicas definidas


CLASE TIENE ATRIBUTOS O PROPIEDADES , METODOS




METODOS ACCION QUE ES CAPAZ DE HACER EL COCHE, INTERACTUA CON ATEIBUTO Y PROPIEDADES



Indicar TYPESCRIPT SINTAXIS EN EL EDITOR DE SUBLIME 

VIEW SINTAX TYPESCRIPT SINTAX 



