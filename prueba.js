//arrays 3
//recorridos

let paises = ["Argentina", "Brasil", "Mexico", "Colombia"];

for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);

  //nos olvidamo de saber el contenido total del vector y solo colocamos el metodo length

  //busco un pais en especial:

  if (paises[i] == "Argentina") {
    console.log("Vamos bien");
  } 
}

//matriz que voy a recorrer de manera secuancial mediante dos for, uno para el recorrido de la filas y otro
//para el recorrida de las columnas

let paisesEuropa = [["España", "Portugal"],
                    ["Italia", "Rusia"],
                    ["Francia", "Alemania"]];

for (let f = 0; f < paisesEuropa.length; f++) {
    for (let c = 0; c < paisesEuropa[f].length; c++) {

        console.log(paisesEuropa[f][c]);
    }
}
