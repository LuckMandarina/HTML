document.querySelector('#header').innerHTML = "estoy leyendo el documento for";
/*while (2=2) {
var numero = parseInt(prompt("inserte el numero que desee multiplicar"))

for(let index = 0; index <= 10; index++) {
    var respuesta = (numero*index)
    console.log(numero, " x ",index, " = ", respuesta);
} 


for(let index = 1; index <= 10; index++) {

    for(let index2 = 1; index2 <=10; index2++) {
        
        console.log(index*index2) 

    }
}


var arreglo = new Array(10)

for(let i=0; i < arreglo.length ; i++) {
    arreglo[i] = i
}

console.log(arreglo)
*/

var arreglo = []

for(let i = 0; i < 10; i++){
    let numeroRandom = Math.floor(Math.random() * 20) + 1
    arreglo[i] = numeroRandom
}

console.log(arreglo)



