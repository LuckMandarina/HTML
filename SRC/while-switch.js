var mensaje;
mensaje = "WELCOME TO AMERICA"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje

var inicio = true

function suma() {
    var numero1 = prompt("ingrese un numero");
    var numero2 = prompt("ingrese otro numero");
    alert(parseInt(numero1) + parseInt(numero2));
}

function resta() {
    var numero1 = prompt("ingrese un numero");
    var numero2 = prompt("ingrese otro numero");
    alert(parseInt(numero1) - parseInt(numero2))

}

function multiplicacion() {
    var numero1 = prompt("ingrese un numero");
    var numero2 = prompt("ingrese otro numero");
    alert(parseInt(numero1) * parseInt(numero2))
}

function division() {
    var numero1 = prompt("ingrese un numero");
    var numero2 = prompt("ingrese otro numero");
    alert(parseInt(numero1) / parseInt(numero2))
}

while (inicio == true) {

    var respuesta = prompt("1. suma\n2 para resta\n3 para multiplicar\n4 para dividir\n5 para Cerrar")

    switch (parseInt(respuesta)) {

        case 1:
            suma()
            break

        case 2:
            resta()
            break

        case 3:
            multiplicacion()
            break

        case 4:
            division()
            break

        case 5:
            inicio = false
            break

        default:
            alert(mensaje = "Respuesta no Valida")


    } // fin switch 
}//fin while
