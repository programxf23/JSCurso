/*En js, las funciones son bloques de codigo reutilizables que pueden
ejecutar una tarea especifica.
Permiten encapsular una logica particular, recibiendo datos como parametros
y devolviendo un resultado (retorno)
Son elementos fundamentales para orgenizar y modular el codigo*/

function saludar() {

console.log("Hola, te estoy saludando...");
}

saludar();


//ejemplo con parametros

function sumar(num1, num2) {
  let resultado = num1 + num2;
  console.log(resultado);

  return resultado;
}
sumar(15, 20);

