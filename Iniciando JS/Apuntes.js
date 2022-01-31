// Con esto lo que hago es declarar que tipo de dato es la variable y después le asigno un valor
// Algún matao puede usar var pero es let (en caso de que quieras que tu variable cambie a lo largo del código) y con const, tu variable es fija, no puede ser cambiada
// Declaración de variables
let studlyCapVar;
let properCamelCase;
let titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Con esto hago sumas
const sum = 10 + 10;

//Con esto hago una cuenta y le doy un valor al resultado
const product = 8 * 10;
let myName = 0;
/*En la programación, es común utilizar asignaciones para modificar el contenido de una variable. Recuerda que todo lo que está a la derecha del signo de igualdad se evalúa primero, así que podemos decir:

myVar = myVar + 5;
para sumar 5 a myVar. Dado que se trata de un patrón tan común, hay operadores que hacen tanto la operación matemática como la asignación en un solo paso.

Uno de estos operadores es el operador +=. */

let myVar = 1;
myVar += 5;
console.log(myVar);

let a = 3;
let b = 17;
let c = 12;

// Cambia solo el código debajo de esta línea
a+= 12;
b+= 9;
c+= 7;

let a = 11;
let b = 9;
let c = 3;

// Cambia solo el código debajo de esta línea
a-=6;
b-=15;
c-=1;

// Inserto comillas dentro de comillas
const myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

/* 
\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\r	retorno de carro
\t	tabulación
\b	límite de palabra
\f	fuente de formulario
 */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

