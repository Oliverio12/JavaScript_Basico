// H o l a - M u n d o --> String o Cadena
// 0 1 2 3 4 5 6 7 8 9 --> Indice

/**
 * '
 * "
 * n
 * t
 * \
 * 
 */

//dentro de una cadena no podemos tener un mismo tipo de comillas
// por ejemplo para usar comillas simples, al principio tenemos que usar comillas dobles
//para usar comillas dobles debemos usar comillas simples
let nombre = "Rodrigo 'Oliverio' ";
let apellido = 'Fernandez "Zavaleta"';
let nombreCompleto;

nombreCompleto = nombre + apellido; 
console.log (nombreCompleto)
// aca podemos apreciar que usamos comillas simples y comillas dobles
// siempre concatenando el uso de comillas correctos al definir las variables
 

//----------------------------------
// Si por alguna razon no queremos hacer eso podemos usar un caracter de escape
// usaremos el sigueite caracter: "\" para sacar la diagonal invertida usamos alt + 92

let nombreComillasDobles = "Rodrigo Oliverio \"Fernandez\" Zavaleta"
console.log (nombreComillasDobles)
//con este caracter de escape podemos usar comillas dobles aunque al declara la variable usemos comillas dobles tambien

let nombreComillasSimples ='Rodrigo \'Oliverio\' Fernandez Zavaleta'
console.log (nombreComillasSimples)
// de la misma forma podemos usarlo en comillas simples


//------------------------------------------------------------------
//caracter de escape "n" es un salto de linea
 let msj = "El perro \n salto en otro perro"
 console.log (msj)


// caracter de escape "t" es para tabular
let msj2 = "El perro se \t separo del otro perro"
console.log (msj2)

// caracter barra invertida  \
//tenemos que usar 2 veces la barra invertida  para poder mostrar la barra invertida
let rutaDeArchivo =  "c:\\windows\\carpeta\\archivo.html"
console.log (rutaDeArchivo)

