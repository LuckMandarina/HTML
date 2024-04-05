
var dia;
var mensaje; 
var userImput = prompt("Ingrese el numero del dia de la semana");


  function Lunes() {
    document.querySelector ('#header').innerHTML = mensaje;
    document.querySelector ('#header').style.color = "red";
}

  function Martes() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector ('#header').style.color = "red";
  }
  
  function Miercoles() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"
  }
  
  function Jueves() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"
  }
  
  function Viernes() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"
  }

  function Sabado() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"
  }
  

  function Domingo() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"
  }
  
dia = parseInt(userImput)

switch(dia) {
    case 1:
        mensaje= "Odio los lunes"
        Lunes()
    break
    
    case 2:
       mensaje= "Martes"
       Martes()
       break

    case 3:
        mensaje = "ya es miercoles"
        Miercoles()
    break

    case 4:
        mensaje= "ya es jueves"
        Jueves()
    break

    case 5:
      mensaje = "no se"
      Viernes()
    break

    case 6: 
    mensaje= "vacaciones"
    Sabado()
    break 

    case 7:
      mensaje= "Tristemente domingo"
      Domingo()
    break 
    
    default:
       mensaje = "Solo 7 dias baboso"
    break
} 