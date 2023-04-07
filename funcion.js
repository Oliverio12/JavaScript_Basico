/**
 * sitaxis - function
 * 
 * function nombre (Parametro, parametro ...) {
 *          //codigo a ejecutar
 *          console.log (algo) // No se toma como un valor retornado
 *          return algo; // si se toma como un valor retornado. Significa que el otro lado alguien recibira un dato
 * 
 * }
 * 
 * Ejemplo

 * function Jaimito (Bolsa, plata){
 *              // Jaimito tiene que traer Pan
 *              Jaimito usa la bolsa y la plata
 *          console.log(Jaimito compro el pan);
 *          return Yo recibo el pan; 
 * 
 * }
 */

         //nombreFunction (parametro1, parametro 2)   
function llamarJaimito(dinero, bolsa, algo){
    //mostrar en consola (la compra fue exitosa);
    console.log('la compra fue exitosa');
    //declara varible leche como string
    let compra = "leche";
    //guardara y retornara la compra
    return compra;

}

// recibo parametros
// paso argumentos

// asignamos la variable = que sea igual al nombre de la function (argumento1, argumento2)
// cuando llamamos la funcion y pasamos un dato, no se llama parametro, se llama argumento             
let reciboAlgo = llamarJaimito ("dinero", "bolsa", "algo");
 console.log(reciboAlgo)




//---------------------------------------------------------------------------------------
//Funciones 2
//ejemplo 1
// funcon, nombre funcion, (parametros)
function sumar(num1, num2) {
    //que hace la funcion
    console.log("estas sumando")
    //valores que retornara o lo que hara
    return num1 + num2;
  }
// declaramos una varibale, decimos que la variable sera igual a la funcion que acabamos de utilizar (llamamos los argurmentos que estaran en la funcion (sumamos 5+ 10))
let resultado = sumar(5, 10); // Llamando a la función y pasando los argumentos 5 y 10
console.log(resultado); // Resultado será 15
  
//ejemplo 2

function compraSuper (product1 , product2){
    console.log ('compra exitosa');
    return `Compro ${product1} y tambien ${product2}`;
}

let Rodrigo = compraSuper ("Pan", "Vino");
console.log (Rodrigo)
// tambien la puede usar otra persona
let Oliverio = compraSuper("Sal", "Queso");
console.log (Oliverio)



// tambien podemos hacer lo siguiente

//alojar una funcion en una variable

let miFuncion = function(product3, product4 ){
    console.log('La compra a sido un exitó - funcion asignada a una variable')
    return `ahora compre ${product3} y tambien ${product4}`;
}
//aca alojamos la funcion en una variale
// tenemos que hacer una variable que regrese el dato de la siguiente manera
let regreseDato = miFuncion ("Gaseosa", "Fruta")
console.log (regreseDato);


//La funcion no servira si la declaramos una variable y anteriormente usamos otra variable con una funcion dentro
// si queremos que una funcion no tenga ese error la funcion no tiene que estar asignada a una variable


































