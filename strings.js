// con un string se concatena, no se suma

let nombre,
    apellido,
    nombreCompleto,
    espacio

nombre = 'Rodrigo';
apellido = 'Fernandez';
espacio = " ";
//para separa hacemos una variable vacia con un string vacio usando solamente comillas dobles con un espacio " "
nombreCompleto = nombre + espacio + apellido;

// contanenando cuando lo sumamos y lo asignamos a una variable
console.log (nombreCompleto)

//estamos concatenando por eso sale junto
console.log (nombre + apellido)

//para separa se hace de la siguiente forma si se quiere hacer sin alguna otra variable
console.log (nombre + " " + apellido)
console.log (nombre, apellido)
//tambien si tenemos la variable espacio podemos usarlo de la siguiente manera
console.log (nombre, espacio, apellido)

//------------------------------------------------------------------------
// podemos asignar un texto para poderlo representar con una cadena
let nombre1, nombre2, nombreCompleto2, espacio2;
nombre1 = 'Oliverio'
nombre2 = 'Zavaleta'
espacio = ' ';

nombreCompleto2 = nombre1 + espacio + nombre2;
 console.log ('El nombre registrado por usted es: ', nombreCompleto2)
//----------------------------------------------------------------------------------
// si se quieren mostrar comillas es importante saber cuales usaremos
//si queremos comillas dobles debemos hacer esto = 'lo "siguiente" en el texto'
// si queremos comillas simples haremos esto = "lo 'siguiente' en el texto"
//demostrado en un ejemplo:

console.log ('Rodrigo Oliverio "Fernandez" Zavaleta')
console.log ("Rodrigo Oliverio 'Fernandez' Zavaleta")

//---------------------------------------------------------------------------------------------
// Si queremos traer parte del codigo dentro de una cadena de texto haremos lo siguiente
console.log (`El nombre del:${nombre1} y su apellido es es: ${nombre2}`)
// no usamos comillas simples, para sacar los backticks usamos "Alt Gr" + "]" en el teclado, o tambie usando "Alt" + "96" 
//con eso podemos mezclar codigo con una cadena de texto























