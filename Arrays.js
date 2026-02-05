//Funciones de los arrays

// Función push() - Agrega un elemento al final del array
const numeros = [1, 2, 3];
numeros.push(4);    
console.log(numeros); // Salida: [1, 2, 3, 4]

// Función pop() - Elimina el último elemento del array y lo devuelve
const ultimoNumero = numeros.pop(); 
console.log(ultimoNumero); // Salida: 4
console.log(numeros); // Salida: [1, 2, 3]

// Función shift() - Elimina el primer elemento del array y lo devuelve
const primerNumero = numeros.shift(); 
console.log(primerNumero); // Salida: 1
console.log(numeros); // Salida: [2, 3]