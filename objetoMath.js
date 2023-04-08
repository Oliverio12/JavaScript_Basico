// OBJECT MATH
//obtener el numero PI
console.log (Math.PI)

//Mostrar solo 2 decimales
//pero tambien podemos asignar la cantidad de decimales que queremos ver
console.log (Math.PI.toFixed(2))

//Quita los decimales
console.log (Math.floor(Math.PI))


//Redondear un Numero
console.log (Math.round(4.50))
console.log (Math.round(4.49))
console.log (Math.round(Math.PI))


//pasar un numero negativo a su valor absoluto o positivo
console.log (Math.abs(-535))

//calcular la potencia
console.log (Math.pow(2,3))
//es lo mismo que
console.log(2**3)

//crear un numero aleatorio entre 0 y 1 (nunca llega a 1)
console.log (Math.random())
//siempre que se actualiza el numero cambiara


//para crear un numero aleatorio entre 0 y 10
//multilpicar  Math.random() * 10 + 1 (el +1 es para que llegue a 10)
//asi podemos hacer si queremos entre 0 y 20, 0 y 30 y mas

console.log (Math.random() * 10 + 1);

//para crear un numero aleatorio entre 0 y 10 y que sean enteros sin decimales
console.log (Math.floor(Math.random() * 10 + 1));
//de esta manera tendremos numeros aleatorios entre 0 y 10 de manera aleatorio y sin tantos decimales
console.log (Math.floor(Math.random() * 100 + 1));







