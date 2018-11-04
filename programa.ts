/* Decorador Estandar EnmaScript DEFINIR ANTES DE UNA CLASE UNA INSTRUCCION */

function arranque (lanzar: string){
	return function(target:Function){
		/* Añadir un nuevo metodo llamado lanzamiento donde utilizemos el decorador */
		target.prototype.lanzamiento = function(): void{ /* void valor vacio */
			console.log(lanzar);
		}
	}
}


@arranque('Lanzamiento del curso de node JS y angular 2');


class Programa{
	public nombre:string;
	public version:number;

	public setNombre(nombre:string){
         this.nombre = nombre;
	}

	public getNombre(){
		return this.nombre;
	}

	public getVersion(){
		return this.version;
	}

	public setVersion(version:number){
		this.version = version;
	}
}


class editorVideo extends Programa{
        public timeline:number;

        public setTimeline(timeline:number){
            this.timeline = timeline;
        }

        public getTimeline(){
        	return this.timeline; 
        }

        public getAllData():string{
        	return this.getNombre()+"-"+this.getVersion()+"-"+this.getTimeline();
        }
}


// var programa = new Programa();

// programa.lanzamiento();



var editor= new editorVideo();
editor.setVersion(1);
editor.setNombre("Estudio");
editor.setTimeline(4000);


console.log(editor.getAllData());

var programas:Array<string> = [];

function nombre(){
	var numero1 = (<HTMLInputElement>document.getElementById("nombre"));
}



