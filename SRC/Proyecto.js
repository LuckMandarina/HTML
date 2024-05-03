document.querySelector('#header').innerHTML = "estoy leyendo el proyecto";

let arreglo = []

var largo = parseInt(promp("1. Digite la cantidad de elemenyos del arreglo"))

function construir(largo) {
    Arreglo.length = largo
}

function llenarArreglo() {
    for (let i = 0; i<largo; i++) {
         let numeroRandom = Math.floor(Math.random() * 20) + 1 
         arreglo[i] = numeroRandom
    }

}

//llamar función 
construir(largo)


do {

    var opcion = parseInt(promp("1.Llenar arreglo"))

    Switch(opcion) 

} while (i = i)


Console.log(arreglo)