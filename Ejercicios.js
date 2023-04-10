//Aritmetica
//Ejercicio 1
let num1 = 1.5,
num2 = 1.5,
num3 = 2,
resultado ;

resultado = num1 + num2 * num3;
console.log (resultado);

//Ejercicio 2
num1 = 10;
num2 = 6;
num3 = 2;
resultado = 0;

resultado = ( num1 % num2 ) ** num3;
console.log (resultado) ;

//Ejercicio 3
num1 = 200;
num2 = 0;
num3 = 0;
resultado = 0;

resultado = num1 + num2 / num3;
console.log( resultado )

//Ejercicio 4
let a = 5, 
b = 7, 
c;

c = a + b;
console.log(c)

c += a;
//sumo C (que vale 12 ahora) + a que vale 5
console.log(c)


//Que error tiene esta linea de codigo
resultado = b + '10';
console.log(resultado) // el error es que no estoy sumando un numero
//sino que estoy sumando un numero Y concatenando un string, es por eso que sale 710 en lugar de 17



// que hacemos en esto?
let covid19 = 'El año de la pandemia ';
let YEAR = 2019;
let resulta2 = covid19 + YEAR;
// estamos concatenando lo que viene siendo el año de la pandemia con el año en si, que es un numero
console.log (resulta2)


//En esta parte estamos solamente sumando 1 año mas (o 1 en numero) para que de 2019 pase a 2020 y todo esto con el valor "++"
console.log ('El año '+ (++YEAR) + ' Seguro estaremos mejor')




























































