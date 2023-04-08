// estas 2 funciones nos sirven para convertir una cadena a un numero

let cadena1 = "28";
let cadena2 = "28.33";
let cadena3 = "28.77 dias tiene febrero";
let cadena4 = "28*3";
let cadena5 = "Marcos tiene 50";
let cadena6 = "$50";


//ParseInt para convertir numeros enteros
let resultado = parseInt(cadena2);
//si la cadena lleva decimales no los mostrara
console.log (resultado);
console.log (typeof resultado)

//ParseFloat para convertir en numeros de punto flotante o con decimales

let resultado2 = parseFloat(cadena2);
console.log( resultado2)
console.log (typeof resultado2)

//Es normal que a la hora de recupera datos de un formulario vengan en forma de string
// pero nostros queremos operar aritmeticamente estos numeros
//no nos servirar estos numeros en forma de sting


//---------------------------------------------------
//como empieza como un numero funcionara y reconocera tanto con parseInt como parseFloat
let resultado3 = parseInt(cadena3);
console.log( resultado3)
console.log (typeof resultado3)

let resultado3_2 = parseFloat(cadena3);
console.log( resultado3_2)
console.log (typeof resultado3_2)



//------------------------
//como empieza con un numero lo reconoce, pero no lo multiplica porque lo reconoce como un string
//no lo reconoce como un valor aritmetico
let resultado4 = parseInt(cadena4);
console.log( resultado4)
console.log (typeof resultado4)

let resultado4_2 = parseFloat(cadena4);
console.log( resultado4_2)
console.log (typeof resultado4_2)


//----------------------------------------
//como no es un numero no lo reconoce

 let resultado5 = parseInt(cadena5);
 console.log( resultado5)
 console.log (typeof resultado5)

let resultado5_2 = parseFloat(cadena5);
console.log( resultado5_2)
console.log (typeof resultado5_2)

//Necesitamos recortar la cadena para mostrar el numero
//traduccion de lo que estamos haciendo:
//resultado5 = convertir a entero (cadena5.recortar(cadena5.largo de la cadena -2))
  resultado5 = parseInt(cadena5.slice(cadena5.length-2));
console.log( resultado5)
console.log (typeof resultado5)

//----------------------------------------------------
//Tampoco lo reconoce porque no empieza con un numero, empieza con un simbolo
let resultado6 = parseInt(cadena6);
console.log( resultado6)
console.log (typeof resultado6)

let resultado6_2 = parseFloat(cadena6);
console.log( resultado6_2)
console.log (typeof resultado6_2)



//todo esto aplica como en parseInt como en parseFloat
//pero siempre que reconozca decimales, parse float los pondra, pero sino lleva lo reconocera como entero

//--------------------------------------------------------
//de forma mas sencilla
let cadena7 = "50"
let cadena8 = "77.36"
let cadena9 = "90"
let cadena10 = "44.88"


//primera forma
let resultado7 = Number (cadena7);
console.log (resultado7);
console.log(typeof resultado7);


let resultado8 = Number (cadena8);
console.log (resultado8);
console.log(typeof resultado8);

//de esta forma reconocera tanto si es flotante como si es entero
//pero de esta forma no podremos especificar que un flotante (o decimal) se convierta en entero

//segunda forma

let resultado9 = + (cadena9);
console.log (resultado9);
console.log(typeof resultado9);


let resultado10 = + (cadena10);
console.log (resultado10);
console.log(typeof resultado10);

//de esta forma reconocera tanto si es flotante como si es entero con tan solo un "+" o un "-" 
//pero de esta forma no podremos especificar que un flotante (o decimal) se convierta en entero

