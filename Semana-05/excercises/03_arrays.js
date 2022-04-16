//3.Arrays

//a.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses [5] +' '+ meses [11]);

//b.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses.sort());

//c.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses.push('Final');
meses.unshift('Principio');
console.log(meses);

//d.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses.pop();
meses.shift();
console.log(meses);

//e.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses.reverse();
console.log(meses);

//f.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre,' 'Noviembre', 'Diciembre'];
var cadena = meses.join();
console.log(meses);

//g.
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var b = meses.slice(4, 10);
console.log(b);