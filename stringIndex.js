let cadena = "Hola- Mundo desde JavaScript" // el espacio de memoria de un string no puede ser cambiado
console.log (typeof cadena);
console.log (cadena.length);//muestra el largo de la cadena

/** String
 *  cadena   |H|o|l|a|-| |M|u|n|d|o|
    indicie  |0|1|2|3|4|5|6|7|8|9|10|
    largo    |1|2|3|4|5|6|7|8|9|10|11|

    length hace referencia a lo que mide la cadena

    indice siempre empieza desde 0
    se demuestre de la siguiente manera
*/

console.log (cadena [0]);

//al igual que en el resto de caracteres se usa el indice y dependiendo
//de la posicion que queramos agarrar, con eso agarraremos la letra segun el indice
//esto afecta tambien espacio, puntos, comas, guiones y demas cosas con su debido string}
//ejemplo

console.log (cadena[4]);
console.log (cadena[5]);
console.log (cadena[7]);
console.log (cadena[10]);

// la cadena es inmutable, por lo tanto no puedo hacer lo siguiente "cadena [4] = X;"

// Si declaramos un indice mayor al de la cadena, no sera definido por el programa
console.log (cadena [30]);


//Las cadenas pueden cambiar, es decir, asi como el Hola mundo, que tenemos mide 11 caracteres
//en algun futuro puede medir 20, 100 o incluso 500


// de la siguiente forma podemos mostrar la letra final de la cadena, por muchos cambios que esta pueda tener
console.log (cadena[cadena.length -1])
// de esta forma siempre sabremos cual es la ultima letra de la cadena
















