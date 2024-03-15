var hayFresas, hayPeras, haymangos;
var mensaje;

/*** Describe this function...*/
function servir_vaso_con_agua() {
  window.alert('Sirveme un vaso con agua');
  document.querySelector('#header').innerHTML = mensaje;
}

/**
 * Describe this function...
 */
function JugoDeFresas() {
  window.alert('batir fresas');
  document.querySelector('#header').innerHTML = mensaje;
}

function JugoDeMango() {
  window.alert('Jugo de Mango');
  document.querySelector('#header').innerHTML = mensaje;
}

/*** Describe this function... */
function JugoDePeras() {
  window.alert('Jugo de Peras');
  document.querySelector('#header').innerHTML = mensaje;
}


hayFresas = true;
hayPeras = false;
haymangos = false;
if (hayFresas) {
  mensaje = "Jugo de fresas"
  JugoDeFresas();
} else if (hayPeras) {
  mensaje = "Jugo de Pera"
  JugoDePeras();
} 
  else if (haymangos) {
   mensaje = "Jugo de Mango"
   JugoDeMango();
  }
else {
  mensaje = "Sirveme un vaso con agua"
  servir_vaso_con_agua();
  
}






