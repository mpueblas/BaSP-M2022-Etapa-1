console.log('--EXERCISE 4: IF ELSE');

//4. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
//mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
console.log('Exercise 2.a');

var a = Math.random()*1;
    if(a >= 0,5){
        console.log('Greater than 0,5');
    }else{
        console.log('Lower than 0,5');
    }

//b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//“Bebe” si la edad es menor a 2 años;
//“Niño” si la edad es entre 2 y 12 años;
//“Adolescente” entre 13 y 19 años;
//“Joven” entre 20 y 30 años;
//“Adulto” entre 31 y 60 años;
//“Adulto mayor” entre 61 y 75 años;
//“Anciano” si es mayor a 75 años.

console.log('Exercise 2.b');

var b = 15;
    if(b<2){
        console.log('Bebe');
    }else if((b>=2) && (b<=12)){
        console.log('Niño');
    }else if ((b>13) && (b<=19)){
        console.log('Adolescente');
    }else if ((b>=20) && (b<=30)){
        console.log('Joven');
    }else if ((b>=31) && (b<=60)){
        console.log('Adulto');
    }else if ((b>=61) && (b<=75)){
        console.log('Adulto mayor');
    }else ('Anciano');