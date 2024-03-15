document.querySelector('#header').innerHTML = "estoy leyendo el documento switch"
var fruta
var mensaje 
var userImput = prompt("Ingrese el sabor de su fruta")

  function JugoDeFresas() {
    document.querySelector ('#header').innerHTML = mensaje;
    document.querySelector ('#header').style.color = "red";
}

  function JugoDeNaranja() {
    mensaje = "batir narajas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector ('#header').style.color = "red";
  }
  
  function servir_vaso_con_agua() {
    mensaje= "Sirveme un vaso con agua"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"
  }
  

fruta = userImput.toLowerCase()
switch(fruta) {
    case "fresa":
        mensaje= "batir fresas"
        JugoDeFresas()
    break
    
    case "naranja":
    case "mandarina":
        JugoDeNaranja()
    break
    default:
        servir_vaso_con_agua()
    break
} 