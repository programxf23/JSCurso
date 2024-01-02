//ejercicio
/*Un restaurante esta a punto de calcular la cuenta de un comensal, al cual se le suma por separado; 
$2800 + $1300 de comida y 900 + $650 de bebida. Crear un programa en js que calcule el total de comida,
 el total de bebida
 y el total completo de la cena. Informar el resultado por consola o por un cartel de alerta*/


var comida = 1300;
var aparte_comida = 2800;
var total_comida;
var bebida = 900;
var aparte_bebida = 650;
var total_bebida;
var resultado_total;

total_comida = comida + aparte_comida;
console.log("El total de la comida es: ", total_comida);

total_bebida = bebida + aparte_bebida;
console.log("El total de la bebida es: ", total_bebida);

resultado_total = total_comida + total_bebida;
console.log("El total de la comida con bebida es: ", resultado_total);
