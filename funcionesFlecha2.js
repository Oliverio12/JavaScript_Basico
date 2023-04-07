

//reducir el codigo cuando la funcion en el cuerpo solo usa una linea
const funcionSimple = () => console.log('Esto es posible porque solo tiene una linea de codigo');
funcionSimple();
//Nos ahorramos el poder colocar las llaves


//si la funcion solo va a recibir un unico parametro no es necesario usar los ()
const funcionEsperaParam = texto => console.log (texto);
funcionEsperaParam('Pasamos un argumento a la funcion flecha. ');
//cuando es asi nos podemos ahorrar el console.log


//al tener mas de un parametro tenemos que usar los ()
//cuando es inplicito y es una sola linea, no es necesario usar el return
const funcionSumar = ( Num1, Num2) => Num1 + Num2;
console.log (funcionSumar(10,5))


//Funcion flecha con varios parametros, si necesitamos hacer calculos complejos o usar mas de una
//linea se recomiendo hacerlo entre {} y usar return
const funcionSumarMultiplicarElevar = (Dato1, Dato2, Dato3, Dato4) =>{
    let resultado = (Dato1 + Dato2) * Dato3 **Dato4;
    return resultado;
}
 console.log (funcionSumarMultiplicarElevar(10,5,2,3))
                                //(10 + 5) * 2 ** 3


//reducir el codigo cuando la funcion tiene una sola linea y retorna un valor
const funcionRetornarValor = () => 'Esto es posible porque solo contiene una linea de codigo, no es necesario usar return. '
console.log (funcionRetornarValor());



//regresar un objeto
//un objeto es una entidad que guarda informacion de a par
//guarda una clave y un valor
// en este caso el key (llave) es nombre y nombre tiene aparejado apellido
//esto es un cliente 1
const regresarObjeto = () => ({nombre: "Juan", apellido: "Perez"});
console.log (regresarObjeto())

// a la hora de usar una funcion flecha con objetos es necesario usar los parentesis
//ya que para usar objetos se necesitan las llaves, entonces para no generar problemas 
//lo que se hace es que en lugar de las flechas usamos los parentesis