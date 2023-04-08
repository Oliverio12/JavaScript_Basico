// H o l a - M u n d o --> String o Cadena
// 0 1 2 3 4 5 6 7 8 9 --> Indice

//Metodo Slice
let saludo ="Hola-Mundo"
//si en el metodo slice() no hay nada entre parentesis colocara toda la cadena
console.log (saludo.slice());
//es un metodo que permite recortar el pedazo de un string

console.log (saludo.slice(5));
//La cadena se cortara desde la posicion del indice que agarremos, en este caso desde 5 empieza mundo
//por lo tanto empezara a leer desde el 5 hasta el final, esto si solo tiene 1 parametro

console.log (saludo.slice(5,8));
// cuando agarramos parametros tenemos que poner una "coma" al siguiente numero
//pero tenemos que poner un numero siguiente a la palabra que queremos cortar
//en este caso si queremos mostrar "Mun" tenemos que poner 8 que es "d", y el metodo slice cortara la "d" y solo mostrar "Mun" 


//---------------------------------------------------
// si colocamos numeros negativos luego de la "coma" empezaremos de atras hacia adelante
console.log (saludo.slice(2, -2));

//siempre para guardar este tipo de resultados necesitamos crear un lugar para guardarlos (una variable)

let mundoCortado = saludo.slice (5, 8);
console.log (mundoCortado);


//--------------------------------------------
//ejemplo de su uso
let ingresadoPorUsuario = "$ 550.25";
//en este caso queremos sacar el signo de dolar y el espacio
// de esta manera decimos que queremos que nos muestre desdde el 2 hasta el final

//pero como queremos un numero, no un string pordemos convertirlo de la siguiente forma
let peso = Number (ingresadoPorUsuario.slice(2));
//y ahora la variable pesos lo podemos usar para operar la variable pesos
console.log (typeof peso);
console.log (peso);



//De una forma mas sencilla
let ingresadoPorUsuario2 = "$ 670.21"
//solamente le tenemos que poner el signo de un operador aritmetico
let peso2 = +(ingresadoPorUsuario2.slice(2));
//si dejamos vacio esto, no lo leera como numero, puesto que "$" y el espacio no son considerados como numeros
//asi que se usa en caso de conversion y recorte
console.log (typeof peso2);
console.log (peso)



























