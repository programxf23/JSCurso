/*En js los arrays tienen una variedad de metodos incorporados que permiten diversas operaciones
 en los elementos contenidos en el array.
 Los metodos de arrays en js pertenecen a la clase Array
 La clase Array es una clase propia de js que tiene tantos metodos como propiedades
 para trabajar co arrays de manera eficiente.
 Hay distintos tipos de metodos: para agregar y eliminar, para modificar, buscar
 y filtrar, transformar y ordenar, informacion sobre el array, reducir, acumular valores.
*/

 //metodo agregar

 let frutas = ["manzana", "banana", "mandarina"];
 frutas.push("uva");

 console.log(frutas);


 //elimina el ultimo item agregado

 frutas.pop();
 console.log(frutas);


 //eliminar el primer elemente del array
 frutas.shift();
 console.log(frutas);




 //elemento que queremos agregar al principio del array
 frutas.unshift("uva");
 console.log(frutas);


 //filtramos la busqueda
 let frutasConA = frutas.filter(frutas => frutas.includes("v"));
 console.log(frutasConA);



//concatenar

 let frutas1 = ["manzana", "banana", "mandarina"];
 let frutas2 = ["naranja", "mango"];

let todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas);


//cambiar el orden

todasLasFrutas.reverse();
console.log(todasLasFrutas);


//ordena alfabeticamente

todasLasFrutas.sort();
console.log(todasLasFrutas);



