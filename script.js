// Mostrar sección según botón clickeado
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.section');
  secciones.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Mostrar u ocultar contenido de detalle en la caja virtual
function mostrarDetalle(elemento) {
  const contenido = elemento.querySelector('.contenido');
  if (contenido.style.display === 'flex') {
    contenido.style.display = 'none';
  } else {
    contenido.style.display = 'flex';
    contenido.style.flexDirection = 'column';
    contenido.style.justifyContent = 'center';
    contenido.style.alignItems = 'center';
  }
}

// Variables para el minijuego
let respuestasCorrectas = 0;
const respuestas = {
  1: 'Azul y Rojo',          
  2: '14 de Julio',   
  3: '8 de agosto',
  4: 'One piece'       
};

// Función para manejar las respuestas del minijuego
function responder(preguntaId) {
  let respuestaUsuario = prompt("Tu respuesta:");
  if (respuestaUsuario) {
    if (respuestaUsuario.trim().toLowerCase() === respuestas[preguntaId]) {
      respuestasCorrectas++;
      alert("¡Correcto!");
    } else {
      alert("No es la respuesta correcta, pero sigue intentando.");
    }
    verificarResultado();
  }
}

// Verificar si el minijuego está completo
function verificarResultado() {
  if (respuestasCorrectas >= 4) {
    document.getElementById('resultado').innerText = "¡Felicidades! Has demostrado cuánto me conoces. Aquí va un mensaje especial: 'Cada día a tu lado es una nueva aventura, te amo!'";
  }
}
