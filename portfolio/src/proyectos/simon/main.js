// * Variables y funciones auxiliares
let ronda = 1;
let respuestas = [];
let secuenciaActual = [];
let colores = ["rojo", "azul", "amarillo", "verde", "morado"];
let mensaje = document.getElementById("pantalla");

const cambiarElemento = (elemSaliente, elemEntrante) => {
  document.getElementById(elemSaliente).style.display = "none";
  document.getElementById(elemEntrante).style.display = "block";
};

//* Jugar partida */

const empezarJuego = () => {
  cambiarElemento("pantalla--inicio", "pantalla--juego");
  secuencia(ronda);
};

// mostrar secuencia en container instrucciones
const secuencia = () => {
  console.log("Numero de ronda: " + ronda);
  secuenciaActual = [];
  for (let i = 0; i < ronda; i++) {
    secuenciaActual.push(colores[Math.floor(Math.random() * colores.length)]);
  }
  console.log("Secuencia: " + secuenciaActual);
  return (mensaje.innerHTML += ` <p> Repite esta secuencia</p>
    <p class="instrucciones">${secuenciaActual.join(", ")}</p>`);
};

// Empezar la ronda
const empezarRonda = () => {
  mensaje.innerHTML = `<p>Haz click en los colores en el mismo orden, y comprueba cuando estes listo</p>`;
  cambiarElemento("empezarRonda", "comprobar");
  respuestas = [];
};

//Introducir la secuencia. Iluminamos los botones seleccionados y guardamos los valores
const seleccionar = () => {
  let color_buttons = Array.from(document.getElementsByClassName("color"));
  color_buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add(`color--${button.id}--selected`);
      respuestas.push(button.id);
      console.log(respuestas);
    });
  });
};
//comprobar el resultado
const comprobar = () => {
  let comprobacion = true;
  respuestas.forEach((respuesta, indice) => {
    if (respuesta !== secuenciaActual[indice]) {
      comprobacion = false;
      mensaje.innerHTML = `<p>Has fallado, tendrás que empezar de nuevo.</p>`;
    }
  });
  if (comprobacion == true) {
    cambiarElemento("comprobar", "continuar");
    mensaje.innerHTML = `<p>Felicidades!! Has acertado, haz click en continuar.</p>`;
  } else {
    cambiarElemento("comprobar", "reset");
  }
  // apagar los botones
  let apagarBotones = Array.from(document.getElementsByClassName("color"));
  apagarBotones.forEach((button) =>
    button.classList.remove(`color--${button.id}--selected`)
  );
};

// Continuar la partida
const continuar = () => {
  ronda++;
  secuencia();
  cambiarElemento("continuar", "empezarRonda");
};

// Reiniciar la partida
const reset = () => {
  ronda = 1;
  cambiarElemento("pantalla--juego", "pantalla--inicio");
};

//* Listeners

document.addEventListener("DOMContentLoaded", () => {
  seleccionar();
});
