
// H o l a - M u n d o --> STRING o CADENA
// 0 1 2 3 4 5 6 7 8 9 --> INDICE
//funciona a traves del indice


// Metodo indexOF, nos dicia la posicion de la cadena o sub-string que pasemos
let saludo = 'Hola-Mundo'

//si queremos saber si la cadena tiene en algun lado "Mundo" hacemos lo siguiente
console.log (saludo.indexOf('Mundo'));
//Nos idica que la encontro y nos dice en que posicion arranca la palabra
//si se pone en minuscula no funcionara y en su lugar pondra "-1" y nos indicara que no encontro una coincidencia

//solo leera la primer coincidencia (letra), es decir que si pongo la letra "o" encontrar solo la primera, sin importar si hay 2, 3 o 10 "o" en la palabra
//ejemplo:
console.log (saludo.indexOf('o'));

//podemos hacer que se coloque una segunda variante

//colocamos una "coma" y decirle, apartir de que lugar o posicion de indice nosotros queremos empezar a rastrear si encontramos una coincidencia antes
//como podemos ver encontro otra "o" en el indice 9
console.log (saludo.indexOf('o', 2))
















