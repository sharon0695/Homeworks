//Funciones de los arrays

// 1. AGREGAR Y ELIMINAR ELEMENTOS

let numeros = [1, 2, 3];

// push() → agrega al final
numeros.push(4);
console.log(numeros); // Salida: [1, 2, 3, 4]

// pop() → elimina el último
numeros.pop();
console.log(numeros); // Salida: [1, 2, 3]

// unshift() → agrega al inicio
numeros.unshift(0);
console.log(numeros); // Salida: [0, 1, 2, 3]

// shift() → elimina el primero
numeros.shift();
console.log(numeros); // Salida: [1, 2, 3]

//  2. RECORRIDO Y TRANSFORMACIÓN

numeros = [1, 2, 3, 4, 5];

// forEach() → recorre (no modifica)
numeros.forEach(n => console.log(n));
// Salida en consola:
// 1
// 2
// 3
// 4
// 5

// map() → nuevo array transformado
let dobles = numeros.map(n => n * 2);
console.log(dobles); // Salida: [2, 4, 6, 8, 10]

// filter() → filtra por condición
let mayores = numeros.filter(n => n > 2);
console.log(mayores); // Salida: [3, 4, 5]

// reduce() → reduce a un valor
let suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma); // Salida: 15

// reduceRight() → reduce de derecha a izquierda
let resta = numeros.reduceRight((acc, n) => acc - n);
console.log(resta); // Salida: 3 (5 - 4 - 3 - 2 - 1)

// 3. BÚSQUEDA

numeros = [1, 2, 3, 4, 5];

// find() → encuentra el primero que cumple
let encontrado = numeros.find(n => n > 3);
console.log(encontrado); // Salida: 4

// findIndex() → índice del primero que cumple
let indice = numeros.findIndex(n => n > 3);
console.log(indice); // Salida: 3

// findLast() → encuentra el último que cumple
let encontradoUltimo = numeros.findLast(n => n > 3);
console.log(encontradoUltimo); // Salida: 5

// findLastIndex() → índice del último que cumple
let indiceUltimo = numeros.findLastIndex(n => n > 3);
console.log(indiceUltimo); // Salida: 4

// includes() → verifica si existe
let existe = numeros.includes(3);
console.log(existe); // Salida: true

// indexOf() → índice del elemento
let indice2 = numeros.indexOf(3);
console.log(indice2); // Salida: 2

// lastIndexOf() → último índice del elemento
numeros.push(3);
let ultimoIndice = numeros.lastIndexOf(3);
console.log(ultimoIndice); // Salida: 5

//  4. ORDEN

numeros = [5, 2, 8, 1];

// sort() → ordena (alfabéticamente por defecto)
numeros.sort((a, b) => a - b);
console.log(numeros); // Salida: [1, 2, 5, 8]

// reverse() → invierte el orden
numeros.reverse();
console.log(numeros); // Salida: [8, 5, 2, 1]

// 5. MODIFICACIÓN

numeros = [1, 2, 3, 4, 5];

// slice() → copia parte del array
let subArray = numeros.slice(1, 4);
console.log(subArray); // Salida: [2, 3, 4]
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

// splice() → modifica el array (elimina/agrega)
numeros.splice(2, 1); // Elimina 1 elemento en el índice 2
console.log(numeros); // Salida: [1, 2, 4, 5]
numeros.splice(2, 0, 3); // Agrega el número 3 en el índice 2
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

// concat() → concatena arrays
let combinado = numeros.concat([6, 7]);
console.log(combinado); // Salida: [1, 2, 3, 4, 5, 6, 7]

let otroArray = [8, 2, 9];
let combinado2 = numeros.concat(otroArray);
console.log(combinado2); // Salida: [1, 2, 3, 4, 5, 8, 2, 9]

// join() → une elementos en string
let texto = numeros.join("-");
console.log(texto); // Salida: "1-2-3-4-5"

// 6. VALIDACIÓN

numeros = [2, 4, 6];

// every() → verifica si todos cumplen
let todosPares = numeros.every(n => n % 2 === 0);
console.log(todosPares); // Salida: true

console.log(numeros.every(n => n > 3)); // Salida: false

// some() → verifica si alguno cumple
let algunoMultiploDe3 = numeros.some(n => n % 3 === 0);
console.log(algunoMultiploDe3); // Salida: true

console.log(numeros.some(n => n > 5)); // Salida: true

// 7. MODERNOS

// flat() → aplana arrays anidados
let anidado = [1, [2, 3], [4, [5]]];
let plano = anidado.flat(2);
console.log(plano); // Salida: [1, 2, 3, 4, 5]

// flatMap() → mapea y aplana
numeros = [2, 4, 6];
let mapeadoAplanado = numeros.flatMap(n => [n, n * 2]);
console.log(mapeadoAplanado); // Salida: [2, 4, 4, 8, 6, 12]

// fill() → llena con un valor
let llenado = new Array(5).fill(0); 
console.log(llenado); // Salida: [0, 0, 0, 0, 0]

// from() → crea array desde iterable
let desdeString = Array.from("Hola");
console.log(desdeString); // Salida: ["H", "o", "l", "a"]

// of() → crea array desde argumentos
let desdeArgs = Array.of(1, 2, 3);
console.log(desdeArgs); // Salida: [1, 2, 3]

// at() → acceso con índice (incluye negativos)
numeros = [10, 20, 30, 40];
console.log(numeros.at(1)); // Salida: 20
console.log(numeros.at(-1)); // Salida: 40

// 8. OTRAS

// length → longitud del array
numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // Salida: 5

// toString() → convierte a string
let textoArray = numeros.toString();
console.log(textoArray); // Salida: "1,2,3,4,5"

// values() → iterador de valores
let iterador = numeros.values();
for (let valor of iterador) {
    console.log(valor);
}
// Salida en consola:
// 1
// 2
// 3
// 4
// 5

// constructor → referencia al constructor del array
console.log(numeros.constructor); // Salida: [Function: Array]

// copyWithin() → copia parte del array dentro de sí mismo
numeros = [1, 2, 3, 4, 5];
numeros.copyWithin(0, 3);
console.log(numeros); // Salida: [4, 5, 3, 4, 5]

// entries() → iterador de pares [índice, valor]
let entradas = numeros.entries();
for (let [indice, valor] of entradas) {
    console.log(indice, valor);
}                                                                       
// Salida en consola:
// 0 4
// 1 5
// 2 3
// 3 4
// 4 5

// keys() → iterador de índices
let indices = numeros.keys();
for (let indice of indices) {
    console.log(indice);
}
// Salida en consola:
// 0
// 1
// 2
// 3
// 4

// toLocaleString() → convierte a string con formato local
let fecha = new Date();
let fechas = [fecha, new Date(2020, 0, 1)];
console.log(fechas.toLocaleString()); // Salida: "9/6/2024, 12:00:00 AM, 1/1/2020, 12:00:00 AM"
