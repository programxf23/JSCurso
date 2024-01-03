//ejercicio integrador

/*Ingresar dos numeros mediante un promt y almacenar sus valores
en dos variables distintas.
Realizar una resta entre los dos valores en js
Almacenar el resultado en una variable
Importar el archivo js desde una pag html
Si el resultado de la resta es mayor a 0, mostrar mediante un console.log
o un alert el mensaje "es mayor a 0"
Si es mayor a 0, comprarar si el numero es par, en caso de que lo
sea, mostrar un mensaje "es par y en caso de que no, uno que diga
"es impar"
En caso de que sea menor a 0, mostrar un mensaje que diga
es menor o igual a 0.
*/

var numero1 = prompt("ingrese un numero");
var numero2 = prompt("ingrese otro numero");

var resta = numero1 - numero2;

if (resta > 0) {
  console.log("es mayor a 0");
    let impar = resta % 2;

 if (impar == 0) {
  console.log("es par");
 

} 
else {
  console.log("es impar");
} 
}
else {
    console.log("es menor a 0");
}

