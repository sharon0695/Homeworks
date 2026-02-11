/* La diferencia entre una función regular y una función flecha radica principalmente
 en cómo manejan el contexto (this) y en su sintaxis. Una función regular se define 
 con la palabra function, tiene su propio this, permite usar el objeto arguments 
 y puede utilizarse como constructor con new. En cambio,una función flecha se escribe 
 con una sintaxis más corta usando =>, no tiene su propio this sino que hereda el del 
 contexto donde fue creada, no dispone del objeto arguments y no puede utilizarse como 
 constructor. Por ello, las funciones flecha suelen emplearse en callbacks o funciones 
 pequeñas donde se quiere mantener el contexto externo, mientras que las funciones 
 regulares son más apropiadas cuando se necesita control sobre this o crear instancias.
*/

// Ejemplo de las funciones para determinar si un número es par o impar:
//LA funcion debe en consola si el numero es par o impar
// Función regular
function esPar(num) {
    if (num % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

// Función flecha
const esParFlecha = (num) => {
    return num % 2 === 0 ? console.log("El número es par.") : console.log("El número es impar.");
}

