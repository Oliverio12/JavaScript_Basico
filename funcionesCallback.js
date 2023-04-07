
//La funcion callback es la funcion que recibe como parametro otra funcion

// Es una funcion callback porque recibe como parametro una funcion

function comprar (art1, art2, funcion){
    art1 = 65; // en art1 y art2 le damos sus valores
    art2 = 70;
    let gastado = art1 + art2;
    //generamos una variable que es la suma de art 1 y 2 y guardamos lo gastado
    funcion (gastado);
    // llama a la funcion "Imprimir" y le pasa 135 que es el resultado de art 1 y 2
    //recibe los 135 
}

function imprimir (mensaje){
    //entra a la funcion y muestra en la consola
    //y reemplaza lo q tiene el valor de mensaje por lo gastado
    console.log (`compramos leche y pan - gastamos ${mensaje}`)
}


// llamamos la funcion comprar
//pasamos los parametros (art1, art2, funcion)
//el tercer parametro al ser una funcion le pasamos el nombre de una funcion que queremos que llame
// en este caso es Imprimir y lo sustituye
comprar ('leche', 'pan', imprimir)




//es otras palabras, el tercer parametro queda como una variable que podemos utilizar en otras funciones
//solamente tenemos que asignar el tercer parametro como el nombre de una nueva funcion
//de esta forma podemos usar la funcion con 3 parametros en muchas otras funcions 
// por ejemplo 
function imprimir2 (mensaje2){
    console.log (`compramos queso y crema - gastamos ${mensaje2}`)
}
comprar ('queso', 'crema', imprimir2)


//en este caso usamos practicamente la misma funcion con diferente variable
//solamente cambiamos el tercer parametro por el nombre de una funcion que querramos que haga eso
//en este caso estamos imprimiento un mensaje similar con diferente nombre de funcion
//pero con el mismo proposito

//----------------------------------------------------------
//tambien lo podemos hacer de una forma diferente


function comprar2 (artc1, artc2, funcion2){
    let gastado2 = artc1 + artc2;
    funcion2 (gastado2);
}

function imprimir3 (mensaje3){
    console.log (`compramos gaseosa y jugos - gastamos ${mensaje3}`)
}
comprar2 (70, 75, imprimir3)

//de esta forma podemos alterar los datos de compra.
// en cuyo caso no declaremos valores en el artc1 y artc2
//pero como en la funcion declaramos  que gastado2 = artic1 + artic2
//entonces la funcion reconoce que los numeros que podamos llamar a la funcion comprar va vinculado a gastados2 y no es necesario hacer mas cosas


















