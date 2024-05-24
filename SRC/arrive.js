/* console.log(cesta)

cesta[0] = "Uva" //modifica el valor de una posicion
console.log(cesta)

console.log(cesta.length)

cesta.push("mandarina")//agrega un elemento 
console.log(cesta)

cesta.pop() //elimina ultimo elemnto del array
console.log(cesta)

cesta.push("naranja", "piña")
console.log(cesta)

cesta.splice(2, 1)
console.log(cesta)
El segundo parametro(1) indica cuantos numeros seran removidos
apartir del primper parametro(2)
console.log(cesta[2])

var cestaVacia = [] //arrive vacio

document.querySelector('#header').innerHTML = "estoy leyendo el documento arrive";

var cesta = [] //crea el arrive
var inicio = true

function See() {
    console.log(cesta)
}

function Add() {
    var agregar = prompt("Agregue una nueva fruta")
    cesta.push(agregar)
    console.log(cesta)
}

function Del() {
    cesta.pop()
    console.log(cesta)
}

function Del2(){
    var ind = prompt ("Dijiste la fruta que desea borrar")

    while(ind<=cesta.length) {
       cesta.splice(ind, cesta.length)
       console.log(cesta)
    }
}

do {
    var opti = prompt("1.Ver elemento de la cesta\n2.Agregar fruta a la cesta\n3.Quitar una fruta en la cesta\n4.borrar fruta especifica\n5.Cerrar menu")
    switch(parseInt(opti)) {

        case 1:
            See()
            break

        case 2:
            Add()
            break

        case 3:
            Del()
            break

        case 4:
            Del2()
            break
        case 5:
            inicio = false
            break
    }


} while (inicio == true) */

// PRUEBAS
function InvertirArreglo(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError ('El argumento debe ser un arreglo')
    }
   
    return datos.reverse();
}
console.log(arreglo);

console.log();

let resultado = InvertirArreglo(arreglo)
console.log(resultado)