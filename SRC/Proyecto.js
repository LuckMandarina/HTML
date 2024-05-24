document.querySelector('#header').innerHTML = "estoy leyendo el proyecto";

let arreglo = []

let largo = parseInt(prompt("digite la cantidad de numeros en su arreglo."))

function construir(largo) {
    arreglo.length = largo
}
construir(largo)


function llenarArreglo() {
   for (i=0; i<arreglo.length; i++) {
    let numeroRandom = Math.floor(Math.random() * 20) + 1 
    arreglo[i] = numeroRandom
   }
   console.log(arreglo)
}

function promedio() {
    let suma=0 
   for (i=0; i<arreglo.length; i++) {
    suma += arreglo[i]
   }
   let respuesta = suma/arreglo.length
   return respuesta
}

function SumaValor() {
    let valor = parseInt(prompt("Digite un numero que se sumara al resto de valores del arreglo"))
    
    for(let i=0; i<arreglo.length; i++) {
        arreglo[i] += valor
    }
    console.log(arreglo)
}

function MayorAlPromedio() {
    let promedio2 = promedio()
    let cantidad = 0;

    for(i=0; i<arreglo.length; i++) {
        if(promedio2 < arreglo[i]) {
            cantidad++
        }
    }
    
    return cantidad
}

function SumaDeImpares() {
    let Impar = []
    let suma = 0;
    for (let i=0; i<arreglo.length; i++) {
        if (arreglo[i] % 2 !== 0) {
            Impar.push(arreglo[i])
            suma += Impar
        }
    }
    console.log (suma)
}

function Sumapares() {
    let pares = []
    let suma = 0;
    for(let i=0; i<arreglo.length; i++) {
        if(arreglo[i] % 2 === 0) {
            pares.push(arreglo[i])
            suma += pares
        }
    }
    console.log(suma) ;
}

function mayornumero() {
   console.log(Math.max(...arreglo))
} 

function Mayordiferencia() {
  let valordiferencia = 0
  let diferencia = 0

  for (let i=0; i<= arreglo.length; i++) {
    diferencia = arreglo[i] - arreglo[i + 1]

    if (diferencia<0) {
        diferencia = diferencia * -1
    }

    if (diferencia>valordiferencia) {
        valordiferencia = diferencia
    }

  }
  console.log ("la mayor diferencia entre los numeros en el arreglo es: ", valordiferencia)
  return valordiferencia
} 

function encontrarElemento() {
    let lupa = parseInt(prompt("que numero desea buscar?"))
    console.log(arreglo.includes(lupa))
}

function PosicionElemento(valorNumero) {
    let encontrarN = false
    let Posicion = -1
    
    for (let i=0; i<arreglo.length; i++) {

        if (valorNumero == arreglo[i]) {
            encontrarN = true
            Posicion = i
            i = arreglo.length
        }
    }
    if(encontrarN) {
        return Posicion
    } else {
        return -1
    }

}

function InvertirArreglo() {
    let arreglo2 = []
    arreglo2.length = arreglo.length
    let posicion1 = 0

    for(let i=0; i<arreglo.length; i++) {
        arreglo2[posicion1] = arreglo[i];
        posicion1++
    }
  arreglo = arreglo2
  console.log(arreglo2.reverse())
}



var inicio = true
do {
    var menu = parseInt(prompt("1.llenarArreglo\n2.Promedio\n3.SumaValor\n4.MayorAlPromedio\n5.SumaImpar\n6.Sumapares\n7.NumeroMásAlto\n8.MayorDiferencia\n9. encontrarElemento\n10.PosicionElemento\n11.InvertirArreglo\n12.Cerrar Menu"))

    switch(menu) {
        case 1:
            llenarArreglo()
        break

        case 2:
            console.log ("el promedio es:", promedio(arreglo))
        break

        case 3: 
            SumaValor()
        break
        
        case 4: 
           console.log("los numeros mayores al promedio son: ", MayorAlPromedio())
        break

        case 5: 
            SumaDeImpares()
        break

        case 6: 
            Sumapares()
        break

        case 7:
            mayornumero()
        break

        case 8:
            Mayordiferencia()
        break

        case 9:
            encontrarElemento()
        break

        case 10:
           let uno = parseInt(prompt("Que numero desea buscar en el arreglo?"))
           console.log(PosicionElemento(uno))
   
        break

        case 11:
            InvertirArreglo()
            console.log ("el arreglo fue invertido")
        break
    

        case 12: 
        inicio = false
    }
} while (inicio==true)