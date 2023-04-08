//esto genera un literal de forma primitivo (en este caso un string)
let cadena = 'texto';

console.log (typeof cadena);

//--------------------------------------------------------------------------------------
//si quiero crear un objeto string que tambien aloja una cadena

//siempre que usamos un new creamos o instanciamos un objeto
//siempre la primera ira a mayusculas y creamos un molde para crear un tipo de objeto de un cierto tipo, en este caso string
// creamoe un objeto nuevo basado en la clase String, usar los parentesis de esta manera ('') y de esta manera colocamos lo que queremos que contenga 
let cadena2 = new String ('TEXTO 2')


// como se que es un objeto?
//pues a diferencia del primer console.log que queremos saber que tipo es la cadena y su resultado es un string
//de la misma forma podemos saber si lo que acabamos de crear es un objeto
console.log (typeof cadena2);

//siempre que pongamos un punto ya sea en "cadena" o "cadena2" siempre nos da acceso a metodos y propiedades del objeto o del metodo primitivo

console.log (cadena2.length) ;


//los metodos que tiene un objeto estan basado en lo que definio un programador dentro de la clase
// los metodos son funciones, pero si estan declaradas dentro de una clase, se les llama metodos
// cuando decimos que invocamos el metodo tal, estamos diciendo "llamar a la funcion de cada objeto" pero no se les dice funcion, sino metodos

//----------------------------
//si queremos invocar un metodo (funcion) tenemos que hacer referencia al objeto "punto" el metodo

console.log (cadena2.charAt(1));
//charAt es un metodo que espera un numero y regresara un string


//hay metodos que requieren que nosotros pasemos argumento y otros que no lo requieren

//toLowerCase() lo que hace es devolverme la cadena totalmente en minuscula
console.log (cadena2.toLocaleLowerCase());

//toUpperCase() hara el texto a mayuscula
console.log (cadena.toUpperCase());

// JS es case sensitive, osea que distingue entre mayusculas y minusculas
//Estas lineas no son iguales: texto, TEXTO, TEXto, texTO

console.log (cadena2);
//                                          como es un objeto obtiene key - valor, en este caso 0: (key) 'T' (valor)


//Todo esto se crea y se destruye, siempre para que no pase eso y guardemos los valores tenemos que guardarlos en una variable

//ejemplo
console.log (cadena.toUpperCase());
//en este caso la cadena se destruye y no se guarda que el texto se convirtio en mayuscula
//si lo hacemos asi, guardaremos eso
let textoMayuscula = (cadena.toUpperCase());
console.log (cadena.toUpperCase());
console.log (textoMayuscula) //aca esta el texto guardado








