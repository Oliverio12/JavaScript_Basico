//declaramos variable = a la funcion (parametros){ parentesis donde ira el codigo a ejecutar}
let nombre = function (parametro){
    //codigo a ejecutar
}

//declaramos variable = parametro (si tiene), usamos una flecha => y {abrimos corchetes y aca ira el codigo a ejecutar}
let funcionFlecha = () => {
    console.log ('esto es desde una funcino flecha');
    return 'Flecha'
}

//una vez usado el valor desaparece
//y si lo queremos volver a mostrar necesitaremos usar un console.log
  console.log (funcionFlecha());
// esta funcion retornara lo mismo, puesto que estamos haciendo que la propia funcion retorne flecha
//sino tiene un return no retornara nada y solamente mostrara el console.log que se puso dentro de dicha funcion (si se puso)
 


//para poder guardar el dato "flecha" necesitamos alojarlo en una variable 
let funcionFlecha2 = () =>{
    console.log ('esta es la segunda funcion flecha');
    return 'flecha dorada';
}
let guardarDato = funcionFlecha2();
console.log (guardarDato);
//de la siguiente manera tendremos alojado el String "Flecha Dorada" en una variable
//de esta manera podemos usar el mismo dato con solo poner el "guardarDato" en  alguna otra cosa

//ejemplo
console.log (`esto es una ${guardarDato}` )

//el orden de la funcion es de arriba para abajo, es decir que por ley tengo que usar primero la funcion

//podemos volver a asignar otro valor para guardar

let guardarDato2 = funcionFlecha2();
console.log(`Esto tambien es una ${guardarDato2}`)




//---------------------------------------------
// en el caso de una constante es algo similar
const funcionFlechazo = () =>{
    console.log('esto es una funcion flecha con constante');
    return 'Flecha de fuego'
}
 //en este caso puedo asignar una variable a la funcionFlechazo
 //pero lo que en realidad esto asignando es el valor retornado, no la propia funcion
 //ya que la funcion es una constante y las constantes no pueden cambiar, sin embargo lo que estamos haciendo
 //es asignarle un espacio de memoria al valor retornado, por eso usamos un let y nos permite
 //esto no seria valido si hicieramos "funcionFlechazo = disparoFlecha"
let disparoFlecha = funcionFlechazo();
console.log (`acabo de disparar una ${disparoFlecha}`)













