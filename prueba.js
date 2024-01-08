//fechas
var fecha = new Date();

alert("La fecha de hoy es: " + fecha);

console.log(fecha);

//funciones especiales
//enero lo toma como 0 por que comienza a contar a partir de 0

var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

console.log(dia, mes, anio);

alert("Hoy es el dia: " + dia + " " + mes + 1 + " " + anio);