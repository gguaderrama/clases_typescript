/* Contrato metodo o propiedades OBLIGATORIO interface */
/* Clase Hija Hereda de Clase Padre HERENCIA  Hereda todas las propiedades y metodos*/
var Coche = /** @class */ (function () {
    /* Dentro de una clase en POO se puede definir publico , protegido o provado */
    function Coche(modelo) {
        this.velocidad = 0; /* Inicializa las variables de una clase */
        this.color = "VERDE";
        if (modelo == null) {
            this.modelo = "GENERICO BMW";
        }
        else {
            this.modelo = modelo;
        }
    }
    /* PROTECTED SOLO SE PUEDE ACCEDER DESDE LA CLASE QUE LOS DEFINE O DESDE CUALQUIER CLASE DE ESTA
    DENTRO DE LA CLASE O HERENCIA
       PRIVATE SOLO A LA CLASE QUE LOS DEFINO NI DE CLASE QUE LA HEREDEN NI DE OTRA CLASE NI DE SUBCLASE */
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche(null); /* Creamos el Objeto */
console.log(coche);
/* Pasado un parametro al objeto el constructor lo recoge */
var coche_dos = new Coche("GRAN AUTO"); /* parametro por defecto */
var coche_tres = new Coche(null);
coche.setColor("ROJO");
coche_dos.setColor("AZUL");
coche_tres.setColor("VERDE");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log("El color del coche 1 es: " + coche.getColor());
console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
console.log("La velocidad del coche es  : " + coche.getVelocidad());
console.log("El modelo del coche uno  : " + coche.getModelo());
// coche_dos.setModelo("AVEO 2018");
console.log("El modelo del coche dos  : " + coche_dos.getModelo());
coche_tres.setModelo("VENTO");
console.log("El modelo del coche tres  : " + coche_tres.getModelo());
