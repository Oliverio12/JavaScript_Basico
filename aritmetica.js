let a = 8,
b = 5,
resultado = 0;
//el resultado mostrara una suma
resultado = a + b;
console.log(resultado)


//el resultado mostrara una resta
resultado = a - b;
console.log(resultado)


// el resultado mostrara una multiplicacion
resultado = a * b;
console.log(resultado)


//el resultado mostrara una division
resultado = a / b;
console.log(resultado)  //los resultados o los flotantes en JS se representa por "."
//para definir un decimal en JS solo se usa un "." no como en otros lenguajes que se usa un floatconsole.log(resultado)
// si hay muchos decimales lo redondeara

//-----------------------------------------------------------
//Modulo, el modulo es lo que resta de los numeros
resultado = a % b; 
console.log (resultado)

//---------------------------------------------------------------
//Potencia (a = base y exponente B)
resultado = a ** b;
console.log(resultado)

//-------------------------------------------------------------
//Orden de presedencia
resultado = 2 + 2 * 5 ;
console.log(resultado)

// con parentesis
resultado = ( 2 + 2 ) * 5;
console.log (resultado)


// con proceso
resultado = (2 + 2) * 5 / (2 + 3);
resultado = (4) * 5 / ( 5 );
resultado = ( 20 ) / ( 5 );
console.log ( resultado )


// -----------------------------------------------------------------

a = 10; 

a += 5; // a = a + 5 = 15;
console.log (a)
a -= 5; // a = 15 - 5;
console.log (a)
a *= 5; // a = 10 * 5 = 50;
console.log (a-1)//aca no modifico el valor de "a" pero simplemente muestra que a - 1 es 49, pero el valor sigue siendo 50
// en cuyo caso quiera hacer un cambio seria "a = a - 1"  y eso afecta todo el resto y el valor original de a seria 49
a /= 5; // a = 50 / 5 = 10;
console.log (a)
a %= 5; // a = 10 % 5 = 0 (en esto agarramos lo que sobra);
console.log (a)
a **= 5; // a = 0 ** 5 = 0;
console.log (a)

















