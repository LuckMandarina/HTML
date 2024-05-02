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

var cestaVacia = [] //arrive vacio */

document.querySelector('#header').innerHTML = "estoy leyendo el PORTAFOLIO";

var cesta = [] //crea el arrive
var inicio = true


function Add() { 
    var agregar = prompt("Agregue una nueva fruta")
    cesta.push(agregar)
    console.log(cesta)
}

function Modificar() {
    var modd = prompt("Tarea que reemplazara la actual")
    var numero = prompt("Numero de la tarea que desea reemplazar")
    cesta[numero] = modd
}

function Del() {
    var borrar = prompt("Ingrese a partir de que numero desea borrar (desde el 0)")
    var borrar2 = prompt("Ingrese la cantidad de tareas que desee borrar")
    cesta.splice(borrar, borrar2)
}

function See() {
    console.log(cesta)
}

do {
    var opti = prompt("1.Agregar tarea\n2.Modificar tarea\n3.Eliminar tarea\n4.Ver tareas\n5.Salir del menu")
    switch(parseInt(opti)) {

        case 1:
            Add()
            break

        case 2:
            Modificar()
            break

        case 3:
            Del()
            break

        case 4:
            See()
            break
        case 5:
            inicio = false
            break
    }


} while (inicio == true)
