// * Variables
let turno;
let ronda = 0;
let marcador1 = 0;
let marcador2 = 0;
let casillas = document.getElementsByClassName("casilla");
let circulos = document.getElementsByClassName("circulo");
let jugador1 = document.getElementById("j1");
let jugador2 = document.getElementById("j2");

//* funciones auxiliares
// Cambia el boton inicial por el tablero de juego en pantalla
const cambiarElemento = (elemSaliente, elemEntrante) => {
  document.getElementById(elemSaliente).style.display = "none";
  document.getElementById(elemEntrante).style.display = "flex";
  document.getElementById(elemEntrante).style.visibility = "visible";
};

// Marcadores
const actualizarMarcadores = () => {
  console.log(marcador1);
  console.log(marcador2);

  document.querySelector(".rondasJ1").innerHTML = marcador1;
  document.querySelector(".rondasJ2").innerHTML = marcador2;
};

//limpiar tablero
const limpiarTablero = (tablero) => {
  Array.from(casillas).forEach(
    (casilla) =>
      casilla.classList.remove("jugador1") ||
      casilla.classList.remove("jugador2")
  );
  Array.from(circulos).forEach(
    (ciruclo) =>
      ciruclo.classList.remove("ficha1") || ciruclo.classList.remove("ficha2")
  );
  jugador1.classList.remove("j1Activo");
  jugador2.classList.remove("j2Activo");
};

//* funciones principales
function creartablero() {
  let tablero = Array.from(casillas).map((casilla) => null);
  console.log("tablero preparado");
  matrizTablero(tablero);
  return tablero;
}

function empieza() {
  // 1 -> true -> jugador1
  // 0 ->false ->jugador2
  turno = Boolean(Math.floor(Math.random() * 2));
  turno
    ? console.log(turno + " :Empieza el jugador 1")
    : console.log(turno + " :Empeieza el jugador 2");

  turno
    ? jugador1.classList.add("j1Activo")
    : jugador2.classList.add("j2Activo");
  return turno;
}

function cambioTurno(turno) {
  if (turno) {
    console.log(`turno del J1`);
    jugador1.classList.add("j1Activo");
    jugador2.classList.remove("j2Activo");
  } else {
    console.log(`turno del J2`);
    jugador1.classList.remove("j1Activo");
    jugador2.classList.add("j2Activo");
  }
  return turno;
}

// 3. Desarrollo del turno
function jugar() {
  let casilla = Array.from(casillas);
  let circulo = Array.from(circulos);
  document
    .getElementById("areaTablero")
    .addEventListener("click", function (event) {
      let casillaPulsada = event.target.id;
      console.log("casilla pulsada " + casillaPulsada);
      if (tablero[casillaPulsada] === null) {
        if (turno) {
          casilla[casillaPulsada].classList.add("jugador1");
          circulo[casillaPulsada].classList.add("ficha1");
          tablero[casillaPulsada] = 1;
        }
        if (turno == false) {
          casilla[casillaPulsada].classList.add("jugador2");
          circulo[casillaPulsada].classList.add("ficha2");
          tablero[casillaPulsada] = 0;
        }
        turno = !turno;
        cambioTurno(turno);
        ronda += 1;

        // Comprobar fin de partida/victoria
        if (!tablero.includes(null)) {
          document.querySelector(".mensajes").innerHTML = "No hay ganador";
          cambiarElemento("pantalla--juego", "pantalla--fin");
        } else {
          let ganador = comprobar(tablero);
          if (ganador !== null) {
            if (ganador === 0) {
              document.querySelector(
                ".mensajes"
              ).innerHTML = `¡¡Ha ganado el <span class="rojo">jugador 2</span>!!`;
              marcador2 += 1;
            } else if (ganador === 1) {
              document.querySelector(
                ".mensajes"
              ).innerHTML = `¡¡Ha ganado el <span class="amarillo">jugador 1</span>!!`;
              marcador1 += 1;
            }
            cambiarElemento("pantalla--juego", "pantalla--fin");
          }
        }
      }
    });
}

// Imprimir una matriz del tablero
function matrizTablero(tablero) {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    let fila = [];
    for (let j = 0; j < 3; j++) {
      fila.push(tablero[i * 3 + j]);
    }
    matriz.push(fila);
  }
  console.log(`Estado actual del tablero:`);
  console.log(matriz);
  return matriz;
}

// Comprobar 3 en raya
function comprobar(tablero) {
  let matriz = matrizTablero(tablero);
  let matrizTranspuesta = transponer(matriz);
  let ganador = null;
  let ganadorFilas = comprobarLineas(matriz);
  let ganadorColumnas = comprobarLineas(matrizTranspuesta);
  let ganadorDiagonales = comprobarDiagonales(matriz);

  ganador = ganadorFilas !== null ? ganadorFilas : ganador;
  ganador = ganadorColumnas !== null ? ganadorColumnas : ganador;
  ganador = ganadorDiagonales !== null ? ganadorDiagonales : ganador;

  // console.log('Depuracion Ganador: ' + ganador);

  return ganador;
}

comprobarLineas = (matriz) => {
  for (fila of matriz) {
    // console.log("Depuracion Fila: " + fila);
    if (fila.every((casilla) => casilla !== null && casilla === 0)) return 0;
    if (fila.every((casilla) => casilla !== null && casilla === 1)) return 1;
  }
  return null;
};

comprobarDiagonales = (matriz) => {
  // let diagonalPrincipal = [];
  // let diagonalSecundaria = [];

  // for (let i = 0; i < matriz.length; i++) {
  //   diagonalPrincipal.push(matriz[i][i]);
  //   diagonalSecundaria.push(matriz[i][matriz.length - 1 - i]);
  // }
  let diagonalPrincipal = matriz.map((fila, i) => fila[i]);
  let diagonalSecundaria = matriz.map((fila, i) => fila[matriz.length - 1 - i]);
  // console.log("Depuracion Diagonal Principal: " + diagonalPrincipal);
  // console.log("Depuracion Diagonal Secundaria: " + diagonalSecundaria);
  if (
    diagonalPrincipal.every((casilla) => casilla !== null && casilla === 0) ||
    diagonalSecundaria.every((casilla) => casilla !== null && casilla === 0)
  )
    return 0;
  if (
    diagonalPrincipal.every((casilla) => casilla !== null && casilla === 1) ||
    diagonalSecundaria.every((casilla) => casilla !== null && casilla === 1)
  )
    return 1;
  return null;
};

// transponer matriz
transponer = (matriz) => {
  return matriz[0].map((col, c) => matriz.map((row, r) => matriz[r][c]));
};

//************* Jugar partida ***************/

const empezarJuego = () => {
  cambiarElemento("pantalla--inicio", "pantalla--juego");
  console.log("Ronda nº: " + ronda);
  partida();
};

const nuevaRonda = () => {
  limpiarTablero(tablero);
  partida();
  cambiarElemento("pantalla--fin", "pantalla--juego");
  console.log("Ronda nº: " + ronda);
};

//************* Lógica del juego ***************/

function partida() {
  ronda += 1;
  // 0. Marcadores
  actualizarMarcadores();
  // 1. asignamos los valores a las casillas del tablero, para poder manipularlos según se desarrolla la partida
  tablero = creartablero();
  // 2. quien empieza
  empieza();
  //   3. Desarrollo de los turnos
  jugar();
}
