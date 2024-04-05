/* console.log(cesta)

cesta[0] = "Uva" //modifica el valor de una posicion
console.log(cesta)

console.log(cesta.length)

cesta.push("mandarina")//agrega un elemento 
console.log(cesta)

cesta.pop(cesta) //elimina ultimo elemnto del array
console.log(cesta)

cesta.push("naranja", "piña")
console.log(cesta)

cesta.splice(2, 1)
console.log(cesta)
El segundo parametro(1) indica cuantos numeros seran removidos
apartir del primper parametro(2)
console.log(cesta[2])

var cestaVacia = [] //arrive vacio */

document.querySelector('#header').innerHTML = "estoy leyendo el documento arrive";

var cesta = ["Fresa", "Pera", "Cereza"] //crea el arrive


var opti = prompt("1.Ver elemento de la cesta\n2.Agregar fruta a la cesta\n3.Quitar una fruta en la cesta\n4.Cerrar menu")

function See() {
    console.log(cesta)
}

function Add() {
    var agregar = prompt("Agregue una nueva fruta")
    cesta.push(agregar)
    console.log (cesta)
}

function Del() {

}

do {

    if (opti == 1) {
        See()
    }

    if (opti == 2) {
        Add()
    }

    if (opti == 3) {
        Del()
    }


} while (cesta == true)
