//Creacion de vectores

//creamos un vector de 3 positions:

let vector = new Array(3);
vector[0] = "Fernando";
vector[1] = "Luis";
vector[2] = "Mariano";
vector[3] = "Raul";

console.log(vector);

//ahora vamos a recorrer todas las posiciones de una matriz con un nuevo arreglo

let matriz = new Array(3);

for (let i = 0; i < 3; i++) {
  matriz[i] = new Array(3);
} 
console.log(matriz);

//creo una matriz a partir de varios vectores:

let persona0 = ["Fernando", "Mario", "Jorge"];
let persona1 = ["Jose", "Julio", "Alberto"];
let persona2 = ["Cesar", "Juan", "Pablo"];

let matriz2 = [persona0, persona1, persona2];

console.log(matriz2);