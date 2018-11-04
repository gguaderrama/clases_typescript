var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            alert(titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var cargar_informatica = new Informatica("Super Tienda");
var AnotherOperations = /** @class */ (function () {
    /* constructor() */
    function AnotherOperations(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    AnotherOperations.prototype.aleatoryNumber = function () {
        return Math.floor(Math.random() * (this.numero1 - this.numero2 + 1)) + this.numero1;
    };
    return AnotherOperations;
}());
var Calculadora = /** @class */ (function (_super) {
    __extends(Calculadora, _super);
    function Calculadora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calculadora.prototype.getSuma = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.getResta = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.getMultiplicacion = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.getDivision = function () {
        return (this.numero1 / this.numero2);
    };
    Calculadora.prototype.getAllData = function () {
        return 'La suma es +"****' +
            this.getSuma() + '*** La Resta ***' +
            this.getResta() + '*** La Multiplicacion ***' +
            this.getMultiplicacion() + '*** La Division ***' +
            this.getDivision() + '*** El numero Aleatoreo ***' +
            this.aleatoryNumber();
    };
    return Calculadora;
}(AnotherOperations));
var resultado = [];
function guardar() {
    console.log('se ejecuto');
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado_new = new Calculadora(parseInt(numero1), parseInt(numero2));
    resultado.push(resultado_new.getAllData());
    var list = '';
    for (var i = 0; i < resultado.length; i++) {
        list = list + "<li>" + resultado[i] + "</li>";
        console.log(list);
    }
    var listado = document.getElementById("listado");
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
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
    console.log(fruta.length);
});
// setInterval(() => {
// console.log('hola');
// }, 1000);
// setTimeout(function(){
// console.log('hola');
// }, 1000);
