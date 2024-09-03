// * ------------------------- DATOS ---------------------------
let trayectoria = [
  {
    nombre: "Mis inicios",
    año: "2020",
    descripcion:
      "Empecé a interesarme en el desarrollo web cuando decidí involucrarme en la creación y mantenimiento de la pagina web de mi antigua empresa. En ese momento comencé a familiarizarme con Wordpress y con el front end, sentando las bases de lo que vendría después.",
  },
  {
    nombre: "Grado Superior Desarrollo de Aplicaciones Web",
    año: "2022",
    descripcion:
      "Tras estar varios años a caballo entre mi anterior trabajo y el desarrollo web, decidí dar el salto y empezar a formarme, con el objetivo de dedicarme profesionalmente al Desarrollo Web. Tras dos años estudiando, recalé en la empresa Webenplan para mis prácticas.",
  },
  {
    nombre: "Bootcamp Full Stack Codenocth",
    año: "2024",
    descripcion:
      "Una vez terminé el grado superior, quise ampliar mi formación mediante este Bootcamp. Así pude ampliar mi base de conocimiento para ampliar y afianzar mis habilidades laborales",
  },
];

let proyectos = [
  {
    nombre: "Turitravel",
    año: 2024,
    url: "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo2/Tema2",
    categoria: ["práctica", "front end"],
    descripcion: "Agencia de viajes.",
    tags: ["flexbox", "JavaSsript vanilla"],
    imagenes: [
      "../imagenes/turitravel/turitravel1.png",
      "../imagenes/turitravel/turitravel2.png",
      "../imagenes/turitravel/turitravel3.png",
      "../imagenes/turitravel/turitravel4.png",
      "../imagenes/turitravel/turitravel5.png",
    ],
  },
  {
    nombre: "Codenotch",
    año: 2024,
    url: "https://github.com/Valden-jta/maquetacion/tree/main/codenocht_web",
    categoria: ["práctica", "front end"],
    descripcion: "Replica de la web de Codenotch.",
    tags: ["flexbox", "JS vanilla"],
    imagenes: [
      "../imagenes/codenotch/codenotch1.png",
      "../imagenes/codenotch/codenotch2.png",
      "../imagenes/codenotch/codenotch3.png",
    ],
  },
  {
    nombre: "Galería",
    año: 2024,
    url: "https://github.com/Valden-jta/maquetacion/tree/main/maquetacion_basica",
    categoria: ["práctica", "front end"],
    descripcion: "Galería y Blog básico.",
    tags: ["flexbox", "responsive"],
    imagenes: ["../imagenes/blog-galeria/galeria.png"],
  },
  {
    nombre: "IMBD",
    año: 2024,
    url: "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo1/proyectoFInalModulo1",
    categoria: ["práctica", "programación"],
    descripcion: "Escribe y consulta peliculas en un JSON.",
    tags: ["TypeScript", "POO"],
    imagenes: ["../imagenes/imdb/fichero.png"],
  },
  {
    nombre: "Simón dice",
    año: 2024,
    url: "https://github.com/Valden-jta/maquetacion/tree/main/dia3/reto2",
    categoria: ["práctica", "front end", "programación"],
    descripcion: "Juego interactivo.",
    tags: ["flexbox", "JS vanilla"],
    imagenes: [
      "../imagenes/simonDice/simon1.png",
      "../imagenes/simonDice/simon2.png",
    ],
  },
  {
    nombre: "3 en raya",
    año: 2024,
    url: "https://github.com/Valden-jta/maquetacion/tree/main/dia6/retoOp",
    categoria: ["práctica", "front end", "programación"],
    descripcion: "Juego interactivo.",
    tags: ["flexbox", "grid", "JS vanilla"],
    imagenes: [
      "../imagenes/tresEnRaya/tres_en_raya1.png",
      "../imagenes/tresEnRaya/tres_en_raya2.png",
      "../imagenes/tresEnRaya/tres_en_raya3.png",
    ],
  },
];

console.log("Lista de proyectos", proyectos);
console.log("timeline", trayectoria);

// * -------------- Menú --------------

//! Scroll del menú
let nav = document.querySelector(".nav");

function navScroll() {
  if (window.scrollY >= 100) {
    nav.classList.add("nav--scroll");
  } else if (this.window.scrollY < 100) {
    nav.classList.remove("nav--scroll");
  }
}

// Hamburguesa responsive
document.addEventListener("DOMContentLoaded", function () {
  let mobileMenuIcon = document.querySelector(".nav__icon");
  let mobileMenuTabs = document.querySelector(".nav__tabs");
  let wideScreen = 850;

  function comprobarAncho() {
    if (window.innerWidth <= wideScreen) {
      mobileMenuIcon.style.display = 'block';
    } else {
      mobileMenuIcon.style.display = 'none';
    }
    console.log(window.innerWidth);
  }

  function desplegarMenu() {
    mobileMenuIcon.addEventListener('click', ()=>{
      mobileMenuTabs.classList.toggle("desplegado");
    });

  }
  comprobarAncho();
  window.addEventListener("resize", comprobarAncho);
  mobileMenuIcon.addEventListener("click", desplegarMenu);
  window.addEventListener("scroll", navScroll);
});

// * -------------- SobreMi --------------
//! animar el retrato y mostrar las demas secciones
let retrato = document.querySelector(".about__picture");
let seccion = document.querySelector(".about__content");
let conoceme = document.querySelector(".section__title");

retrato.addEventListener("click", () => {
  retrato.classList.add("animacion-retrato");
  seccion.classList.add("animacion-contenido");
  seccion.classList.add("visible");
});

//! TIMELINE
let timeLine = document.getElementById("timeLine");
let html = "";
trayectoria.forEach((evento) => {
  html += `
  <div class="timeLine__child">
              <div class="timeLine__content">
                <p class="--year">${evento.año} 
                <h4 class="--title">${evento.nombre}</h4>
                <p class="--text">${evento.descripcion}</p>
              </div>
            </div>`;
});
timeLine.innerHTML = html;

//Animacion timeline
// Variables
let timeLineItems = document.querySelectorAll(".timeLine__child");
let timeLineWrapper = document.querySelector(".timeLine__wrapper");
let timeLineIcons = document.querySelectorAll(".timeLine__icons");
let indiceActual = 0;
// Función para mostrar el siguiente elemento
function mostrarSiguienteElemento(deltaY) {
  // Si el desplazamiento es hacia abajo y no estamos en el último elemento
  if (deltaY > 0 && indiceActual < timeLineItems.length - 1) {
    timeLineIcons[1].classList.add("timeLine_vibrar");
    indiceActual++;
  }
  // Si el desplazamiento es hacia arriba y no estamos en el primer elemento
  else if (deltaY < 0 && indiceActual > 0) {
    indiceActual--;
    timeLineIcons[0].classList.add("timeLine_vibrar");
  }
  // quitar la animación después(permite volver a activarla)
  setTimeout(() => {
    timeLineIcons.forEach((icon) => {
      icon.classList.remove("timeLine_vibrar");
    });
  }, 500);

  // Mostrar el elemento actual y ocultar los demás
  timeLineItems.forEach((item, indice) => {
    if (indice === indiceActual) {
      item.classList.add("timeLine__mostrar");
      item.classList.remove("timeLine__ocultar");
    } else {
      item.classList.add("timeLine__ocultar");
      item.classList.remove("timeLine__mostrar");
    }
  });
}
function bloquearScroll(event) {
  event.preventDefault();
}

//! Acordeon
// Variables
let acordeonWrapper = document.querySelectorAll(".acordeon__wrapper");

function acordeon() {
  let acordeonContainer = document.querySelectorAll(".acordeon__container");
  let acordeonTitle = document.querySelectorAll(".acordeon__title");

  acordeonTitle.forEach((titulo, indice) => {
    titulo.addEventListener("click", () => {
      // desactiva el container actual, si esta activo, al hacer clic
      if (titulo.classList.contains("activo")) {
        acordeonContainer[indice].classList.remove("activo");
        titulo.classList.remove("activo");
      } else {
        // desactiva otros container
        acordeonContainer.forEach((container) => {
          container.classList.remove("activo");
        });
        acordeonTitle.forEach((title) => {
          title.classList.remove("activo");
        });
        // activa el container clicado
        acordeonContainer[indice].classList.add("activo");
        titulo.classList.add("activo");
      }
    });
  });
}

// * -------------- Proyectos --------------

function filtrarProyectos(proyectos) {
  let seleccion = document.getElementById("tipoProyecto").value;
  console.log(`renderizando card de ${seleccion}`);

  let proyectosFiltrados;
  // sin seleccion ----> mostrar todo
  if (seleccion === "todo") {
    proyectosFiltrados = proyectos;
  } else {
    // renderizar seleccion
    proyectosFiltrados = proyectos.filter((proyecto) =>
      proyecto.categoria.includes(seleccion)
    );
  }
  renderizarCard(proyectosFiltrados);
  imagenCarrusel(proyectosFiltrados);
  console.log(proyectosFiltrados);
}


function renderizarCard(proyectos) {
  let cardContainer = document.querySelector(".card__container");
  cardContainer.innerHTML = ""; // el div inicial está vacío
 
  let practicaHTML = `<li class="card__icon-wrapper">
<div class="card__icon" data-text="Práctica">
<div class="filled"></div>
<svg xmlns="http://www.w3.org/2000/svg" width="1.11em" height="1em" viewBox="0 0 1696 1536">
	<path fill="currentColor" d="M1671 350q40 57 18 129l-275 906q-19 64-76.5 107.5T1215 1536H292q-77 0-148.5-53.5T44 1351q-24-67-2-127q0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T84 1051q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T372 283q1-8-3-25.5t-2-26.5q2-8 9-18t18-23t17-21q8-12 16.5-30.5t15-35t16-36t19.5-32T504.5 12t36-11.5T588 6l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1057 1280H188q-27 0-38 15q-11 16-1 43q24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57q38 15 59 43m-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1279 352l21-64q4-13-2-22.5t-20-9.5H670q-13 0-25.5 9.5T628 288zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1196 608l21-64q4-13-2-22.5t-20-9.5H587q-13 0-25.5 9.5T545 544z" />
</svg>
</div>
<div class="card__icon-tooltip">Práctica</div>
</li>`;
let programacionHTML = `<li class="card__icon-wrapper">
<div class="card__icon" data-text="Programación">
<div class="filled"></div>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.009m3.986 0h.01m3.986 0H16m2 9c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3" color="currentColor" />
</svg>
</div>
<div class="card__icon-tooltip">Programación</div>
</li>`;
let frontEndHTML = `<li class="card__icon-wrapper">
<div class="card__icon" data-text="Front end">
<div class="filled"></div>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z" />
</svg>
</div>
<div class="card__icon-tooltip">Front end</div>
</li>`;
let backEndHTML = `<li class="card__icon-wrapper">
<div class="card__icon" data-text="Back end">
<div class="filled"></div>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
</svg>
</div>
<div class="card__icon-tooltip">Back end</div>
</li>`;

  proyectos.forEach((proyecto) => {
     // render de la tarjeta
    let card = document.createElement('div');
    card.classList.add('card',);

  // render contenedor de iconos (badges)
  let badgeContainer = document.createElement('ul');
  badgeContainer.classList.add('card__icon-container');

  // Generar badge según la categoría
  proyecto.categoria.forEach((categoria) => {
    let badge;
    switch (categoria) {
      case "práctica":
        badge = practicaHTML;
        break;
      case "programación":
        badge = programacionHTML;
        break;
      case "front end":
        badge = frontEndHTML;
        break;
      case "back end":
        badge = backEndHTML;
        break;
      default:
        badge = '';
        break;
    }
    badgeContainer.innerHTML += badge;
  });

    // Render de datos
    card.innerHTML += `
      <div class="card--background">
      ${badgeContainer.outerHTML}
        <div class="card__content">
          <h3 class="card__title">${proyecto.nombre}</h3>
            <div class="card__content-text">
              <p class="card__text">${proyecto.descripcion}</p>
              <p class="card__text card__text--tag">${proyecto.tags.join(
                " | "
              )}</p>
              <a class="card__text card__text--link" target="_blank" href="${
                proyecto.url
              }"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });
}

function imagenCarrusel(proyectos) {
  // Imagenes de fondo
  let cards = document.querySelectorAll(".card--background");

  cards.forEach((card, cardIndex) => {
    let proyecto = proyectos[cardIndex];
    let imagenes = proyecto.imagenes;
    let indice = 0;

    card.style.setProperty("--background-image", `url("${imagenes[indice]}")`);

    setInterval(() => {
      // Añadir clase fade-out
      card.classList.add("fade-out");

      // Esperar a que termine la animación de fade-out
      setTimeout(() => {
        // Cambiar la imagen de fondo usando el pseudo-elemento ::after
        let imagenURL = imagenes[indice];
        card.style.setProperty("--background-image", `url("${imagenURL}")`);

        // Eliminar clase fade-out y añadir clase fade-in
        card.classList.remove("fade-out");
        card.classList.add("fade-in");

        // Actualizar el índice
        indice = (indice + 1) % imagenes.length;
      }, 500); // animacion 0.5s
    }, 5000); // intervalo 5s
  });
}

// * -------------- Contacto --------------

//! Side Panel

abrirSidePanel = () => {
  
  if (window.innerWidth > 850) {
    document.getElementById("sidePanel").style.left = "75%";
    document.getElementById("sidePanel").style.boxShadow = "-7px -1px 32px 7px rgba(24, 13, 13, 0.75)";
    console.log('abrir');
  } else if (window.innerWidth <= 850 && window.innerWidth > 450) {
    document.getElementById('sidePanel').style.left= "50%";
    document.getElementById('sidePanel').style.boxShadow = "-7px -1px 32px 7px rgba(24, 13, 13, 0.75)";
    console.log('abrir');
  } else {
    document.getElementById('sidePanel').style.width = '100%';
    document.getElementById('sidePanel').style.boxShadow = "-7px -1px 32px 7px rgba(24, 13, 13, 0.75)";
    document.getElementById('sidePanel').style.left = '0';
    console.log('abrir');
  }

}

cerrarSidePanel = () => {
  document.getElementById("sidePanel").style.left = "100%";
  document.getElementById('sidePanel').style.boxShadow = "";
  console.log('cerrar');
}

//! fecha copyright
let date = new Date();
document.getElementById('copyrightDate').innerHTML ='© ' + date.getFullYear();
document.getElementById('copyrightDate').style.color = 'var(--negro-texto)';


//* LlAMADAS A LAS FUNCIONES --------------------------------------------------------------

// Inicialmente mostrar el primer elemento de la timline
mostrarSiguienteElemento(0);
// acordeon
acordeon();
// Mostrar todas las cards de inicio
renderizarCard(proyectos);
imagenCarrusel(proyectos);

//* lISTENERS --------------------------------------------------------------

// document
//   .getElementById("desplegarInfo")
//   .addEventListener("click", desplegarDiv);

document.addEventListener("DOMContentLoaded", function () {
  console.log("Preparado para renderizar cards");
  document.getElementById("proyectos").addEventListener("click", function () {
    filtrarProyectos(proyectos);
  });
});

//  timeline
timeLineWrapper.addEventListener(
  "wheel",
  (event) => {
    mostrarSiguienteElemento(event.deltaY);
    bloquearScroll(event);
  },
  { passive: false }
);
