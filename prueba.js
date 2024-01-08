//ejercicio
/*ingresar una fecha mediante un prompt , mostrar luego mediante un alert a que dia de la semana corresponde*/

var fechaIngreso = prompt("ingrese una fecha", "mm/dd/yyyy");

var fecha = new Date(fechaIngreso);

var dia = fecha.getDay();


var diaSemana;

switch (dia) {
    case 0:
    diaSemana = "Domingo";
    break;

    case 1:
    diaSemana = "Lunes";
    break;

    case 2:
    diaSemana = "Martes";
    break;

    case 3:
    diaSemana = "Miercoles";
    break;

    case 4:
    diaSemana = "Jueves";
    break;

    case 5:
    diaSemana = "Viernes";
    break;

    case 6:
    diaSemana = "Sabado";
    break;
   
}
alert(diaSemana);