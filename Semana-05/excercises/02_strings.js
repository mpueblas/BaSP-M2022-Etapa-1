//2.Strings

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('Exercise 2.a');

var a = 'Mi nombre es Martin Pueblas';
console.log(a.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando
//el resultado en una nueva variable (utilizar substring).
console.log('Exercise 2.b');

var a = 'Hipotenusa';
var b = a.substring(0, 5);
console.log(b);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando
//el resultado en una nueva variable (utilizar substring).
console.log('Exercise 2.c');

var a = 'Hipotenusa';
var b = a.substring(7, 10);
console.log(b);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y
//las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('Exercise 2.d');

var a = 'Hipotenusa';
var b = (a.substring(0, 1).toUpperCase()+a.substring(1, 10).toLowerCase());
console.log(b);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco
//y guardarla en una variable (utilizar indexOf).
console.log('Exercise 2.e');

var a = 'Bienvenidos trotamundos';
var b = a.indexOf(' ');
console.log(b);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los
//ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('Exercise 2.f');

var a = 'Bienvenidos trotamundos';
var b = a.substring(0, 1).toUpperCase() + a.substring(1, 11).toLowerCase() + a.substring(11, 13).toUpperCase() + a.substring(13, 22).toLowerCase();
console.log(b);