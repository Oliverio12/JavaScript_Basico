console.log( 'Hola mundo' ); 
/*mostrar en la consola el mensaje*/
let numero = 10;
/*Crear en memoria un lugar para contener el numero 10 andentro
y cuando quiera hacer referencia al lugar poderlo hacer con el nombre
*/ 
numero = true;
numero = 'texto';

let casa123 = 'lopez';
casa123 = 'perez';

console.log( casa123 );

casa123 = 10;

console.log ( casa123);

/* Los Let son una constante y se puede jugar con su valor
es decir que puedo decir que un Let fruta sea = 'Piña'
y luego decir que un Let fruta sea = 'Pera'
*/

/** con let no se puede volver a declara una variable
es decir que si tengo LET casa 123 = 10
no puedo volver a poner casa 123 = 10
si anteriormente use alguna otra variable con diferente nombre
 */


const MESES_DEL_ANIO = 12;
console.log( MESES_DEL_ANIO)
/* un constante no puede cambiar*/
/* Usar siempre minuscula de primero y la segunda oracion  en mayuscula sin espacio 
ejemplo: diaSemana
ejemplo: dia_Semana o dia_semana
no se puede empezar con un numero pero si puede empezar con guion bajo

consejo: se recomiendo usar la parte de la constante a mayuscula 
ejemplo: DIA_SEMANA
*/


var casa124 = 'Castell';
var casa124 = 'Roberto';
var casa124 = 'Felipe';

console.log (casa124);

/* el problema con var es que puede redefinir una variable asi que no es recomendado usarla */


/** puedo definir variables sin ningun valor para mas tarde porde asignarle uno 
 * ejemplo:
*/

let casa1, casa2, casa3, casa4;
/**una vez asignada las memorias sin valor, podemos agregarle un valor despues a las variables
 *  pero no debemos usar el LET porque dara un error, sin embargo podemos usar solamente la varible mas el = 'valor de variables'
 */

casa1 = 'Rodrigo';
casa2 = 'Oliverio';
casa3 = 'Fernandez';
casa4 = 'Zavaleta';

/** y para representar lo que hemos hecho haremos lo siguiente */
console.log( casa1, casa2, casa3, casa4);

/** sin embargo esto no se puede hacer una constante, siempre se le tiene que asignar un valor */




/**Tipos de datos primitivos
 * 1. Numericos 
 * 2. Cadenas de tecto
 * booleanos
 * bigInt (gran entero)
 * symbol 
 * undefined (valor no definido)
 */

let num3;
console.log(num3)
/** La propia maquina reconocera si lo que esta en algun identificador es un texto, numero, booleano, etc*/
let num = 10;
let cadena = 'Esto es una cadena';
let cadena2 = 'Esto tambien es una cadena';
let cadena3 = 'Este texto "tiene" comillas'; 
let cadena4 = "Este texto 'tiene' comillas simples"

/**Podemos reconocer que tipo de variable estamos usando 
 * ejemplo
 */
console.log(typeof num);
console.log(typeof cadena);

console.log ( cadena3, cadena4 ); 

/** True = 1, false 0
 * positivo 1
 * negativo 0
 * Cuando hacemos una busqueda en JS si encuentra algo es un numero positiv y cuando no es -1
 */
let booolean = true;
let boolean = false;
console.log(typeof boolean)
/** podemos saber que tipo de datos usamos, pero tambien dependera de lo que haya despues del = de la variable 
 * por ejemplo, un tipo booleano puede pasar a ser string con solo comillas simples o dobles
*/
booolean = 'Booleano'
console.log (typeof booolean)

/**Datos que se usaran practicamente siempre, Let, Boolean, Const */
 // doble barra es un comentario en una sola linea
 /** barra asterisco es un comentario
  * que podemos hacerlo en varias lineas
  */










