//ejercicio integrador
/*Consigna:
En un campo de entrenamiento de Pokemon se necesita evaluar el desempeño de cada 
Pokemon en sus batallas para determinar si estan listos para competir
en la liga.
*Crea un Pokemon en js que calcule el promedio de habilidades de un Pokemon
y determine si esta preparado para la competicion
(promedio mayor o igual a 70 o no (promedio menor a 70)

*Utiliza arrays para almacenar las habilidades de cada Pokemon y sus
nombres.

Pautas y sugerencias:
*Crea un array de nombres de Pokemon y una matriz de habilidades
donde el indice de cada array con los nombres de los Pokemones
represente la fila de habilidades de la matriz.

Ejemplo: si Balbasur es el Pokemon en la posicion 1, la fila 1 de la
matriz tendra sus habilidades.

*Utiliza metodos de arrays para manejar los datos y calcular
el promedio de habilidades.

*La funcion debe mostrar en consola el nombre de Pokemon, sus habilidades
 y si esta listo o no para la competicion.

 *Podes crear mas de una funcion para mas de una tarea si queres
 modularizar mas tu aplicacion.
 */


 //arrays para los nombre
 let pokemones = ["charmander", "pikachu", "bubasur", "squirrel"];

 //matriz de habilidades

 let habilidades = [
    [85, 90, 75], //charmander
    [95, 59, 89], //pikachu
    [90, 80, 70], // bubasur
    [72, 88, 91], //squirrel
 ];

   function calcularHabilidades(habilidades) {

    let promedios = []; 
    for (let i = 0; i < habilidades.length; i++) {

        let fila = habilidades[i];
        let suma = fila.reduce((total, habilidad) => total + habilidad,0) //el acumulador arranca en 0

        //calculamos el promedio
        promedios[i] = suma / fila.length;
   
      }
      return promedios;

   }

   //creamos otra funcion para modlarizar mas la aptitud
   function evaluarAptitud(pokemones, promedios) {

         for (let i = 0; i <promedios.length; i++) {
            if (promedios[i] >= 70) {
                console.log("El pokemon: " + pokemones[i] + " " + "supera el promedio con: "  + promedios[i]);
            } else {
               console.log("El pokemon: " + pokemones[i] + " " + "No supera el promedio con: "  + promedios[i]);
            }
         }
      }

      //el promedio lo guardamos en una variable para luego poder invocar los resultados
       let promedios = calcularHabilidades(habilidades);
       evaluarAptitud(promedios, pokemones);



