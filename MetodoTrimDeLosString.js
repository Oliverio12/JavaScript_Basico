
// el metodo TRIM remueve los espacios en blanco que hay al principio o al final de una cadena

let cadena = '      esto es     una cadena con              problemas de espacio.           '

console.log (cadena.trim());

// el resultado de aplicar a cadena.trim() se lo aplique a cadena
cadena = (cadena.trim());
console.log(cadena);

//en el primer console.log mostro un mensaje en consola y luego desaparecio
//en el segundo console.log guardamos la cadena de (cadena.trim()) y podemos volver a utilizar esa variable en cualquier otra cosa

//-----------------------------------------------
//podemos juntar metodos, no solamente 1 por variable
//ejemplo

console.log(cadena.trim().toUpperCase());
//de esta forma tenemos la cadena sin los espacios en blanco al inicio y final y tambien la tenemos mayuscula

//el mensaje sino se guarda en una variable (en este caso cadena) solo sera momentane
console.log (cadena);

//si volvemos a guardar lo anterior con el toUpperCase() si se guardara

cadena = cadena.trim().toUpperCase();
console.log (cadena)
























