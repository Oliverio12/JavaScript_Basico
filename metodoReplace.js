// H o l a - M u n d o --> String o Cadena
// 0 1 2 3 4 5 6 7 8 9 --> Indice

//Metodo Replace

let hola ="Hola-Mundo"

//el metodo sirve para reemplazar la palabra, pero la palabra tiene que ir escrita tal cual esta de primero
//por otra parte el metodo no funcionara
console.log (hola.replace("mundo", "amigos"))

//cuando se hace correctamente la palabra cambia, esto incluira tambien los espacios
console.log (hola.replace("Mundo", "Amigos"))


//para guardar la palabra la alojamos en una variable
hola = hola.replace("Mundo", "Amigos")
console.log (hola)

//----------------------------
//ejemplo :
let mensaje = "El pero fue a morder a otro perro";
mensaje = (mensaje.replace("pero", "perro"));
console.log (mensaje)


//solamente cambiara la primer coincidencia

let mensaje2 = "El perro fueron a morder a otro perro";
mensaje2 = (mensaje2.replace ("perro", "leon"));
console.log (mensaje2)














