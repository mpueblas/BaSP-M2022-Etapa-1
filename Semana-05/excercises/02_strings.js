//2.Strings

//a.
var a = 'Mi nombre es Martin Pueblas';
console.log(a.toUpperCase());

//b.
var a = 'Hipotenusa';
var b = a.substring(0, 5);

console.log(b);


//c.
var a = 'Hipotenusa';
var b = a.substring(7, 10);

console.log(b);

//d.

var a = 'Hipotenusa';
var b = (a.substring(0, 1).toUpperCase()+a.substring(1, 10).toLowerCase());
console.log(b);

//e.
var a = 'Bienvenidos trotamundos';
var b = a.indexOf(' ');
console.log(b);

//f.
var a = 'Bienvenidos trotamundos';
var b = a.substring(0, 1).toUpperCase() + a.substring(1, 11).toLowerCase() + a.substring(11, 13).toUpperCase() + a.substring(13, 22).toLowerCase();
console.log(b);
