console.log('--EXERCISE 6: FUNCTIONS');
//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en
//una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('Exercise 6.a');

function sumar (a, b){
    return a+b;
}var c = sumar;
 
console.log(c);
//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una
//alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('Exercise 6.b');

function sumar (a, b){
    if (isNaN(a)){
        window.alert('Error:'+ a +'is not a number');
        return NaN;
    }else if (isNaN(b)){
        window.alert('Error'+ b +'is not a number');
        return NaN;
    }else {
        return a+b;
    }
}
console.log(sumar(5,'perro'));
//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('Exercise 6.c');

function isInteger(a){
    if (a % 1 === 0){
        return true;
    }else {
        return false;
    }
} 
console.log(isInteger(6,5));
//d.A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
//decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log('Exercise 6.d');

function sumar (a, b){
    if (isNaN(a)){
        window.alert('Error:'+ a +'is not a number');
        return NaN;
    }else if (isNaN(b)){
        window.alert('Error'+ b +'is not a number');
        return NaN;
    }else if (isInteger(a) && isInteger(b)){
        return a + b;
    } else {
        window.alert('One of the values is not a number');
        return Math.round(a) + Math.round(b);
    }
}
console.log(sumar(5,6.7));
//e.  Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo
//siga funcionando igual.
console.log('Exercise 6.e');

function integerNumber (x){
    if (isInteger(x)){
        return x;
    }else {
        window.alert('One of the values is not an integer number');
        return Math.round(x);
    }
}

function sumarE (a, b){
    if (isNaN(a)){
        window.alert('Error:'+ a +'is not a number');
        return NaN;
    }else if (isNaN(b)){
        window.alert('Error'+ b +'is not a number');
        return NaN;
    }else {
        return integerNumber(a) + integerNumber(b);
    }
}
console.log(sumarE(5, 6.7));