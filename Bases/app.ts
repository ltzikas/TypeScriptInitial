(() => {


//* ejercicio 1
/*
    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Luthor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum Fuerza{
      Aquaman = 0,
      Batman = 1,
      Flash = 5,
      Superman = 100
    }

    const fuerzaFlash = Fuerza.Flash;
    const fuerzaSuperman = Fuerza.Superman;
    const fuerzaBatman = Fuerza.Batman;
    const fuerzaAcuaman = Fuerza.Aquaman; 
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }

    const activar_batiseñal2 = ():string => {
      return 'activada';
    };
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  */
 
//* ejercicio 2
// Funciones Básicas
// function sumar( a: number, b: number ): number{
//   return a + b;
// }

// const contar = ( heroes: string[] ): number => {
//   return heroes.length;
// }
// const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
// contar(superHeroes);

// //Parametros por defecto
// const llamarBatman = ( llamar: boolean = true ):void => {
//   if( llamar ){
//     console.log("Batiseñal activada");
//   }
// }

// llamarBatman();

// // Rest?
// const unirheroes = ( ...personas: string[] ): string => {
//   return personas.join(", ");
// }


// // Tipo funcion
// const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] ) => {}

// // Crear el tipo de funcion que acepte la funcion "noHaceNada"
// let noHaceNadaTampoco: ( n: number, t: string, b: boolean, a: string[] ) => void;
// noHaceNadaTampoco = noHaceNada

//* Ejercicio 3
// Objetos
type Vehiculo = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void // El metodo disparar es opcional
};

const batimovil : Vehiculo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee : Vehiculo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

type Villano = {
  nombre: string,
  edad: number | undefined,
  mutante: boolean
}

const villanos : Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string,
  estatura: number
}

type Apocalipsis = {
  lider: boolean,
  miembros: string[]
}

const charles : Charles = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis : Apocalipsis= {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;

mystique = charles;
mystique = apocalipsis;


})();