// * ------------------------- DATOS ---------------------------

let proyectos = [
  {
    nombre: "Turitravel",
    año: 2024,
    url: "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo2/Tema2",
    categoria: ["práctica", "front end"],
    descripcion: "Agencia de viajes. HTML, CSS y JS.",
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
    descripcion: "Replica de la pagina oficial de Codenotch. HTML, CSS y JS.",
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
    descripcion: "Galería y Blog básico. HTML y CSS.",
    tags: ["flexbox", "responsive"],
    imagenes: ["../imagenes/blog-galeria/galeria.png"],
  },
  {
    nombre: "IMBD",
    año: 2024,
    url: "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo1/proyectoFInalModulo1",
    categoria: ["práctica", "programación"],
    descripcion: "Escribe y consulta peliculas en un fichero JSON. Typescript.",
    tags: ["TypeScript", "POO"],
    imagenes: ["../imagenes/imdb/fichero.png"],
  },
  {
    nombre: "Simón dice",
    año: 2024,
    url: "../proyectos/simon/index.html",
    categoria: ["práctica", "front end", "programación"],
    descripcion: "Juego interactivo. HTML, CSS y JS.",
    tags: ["flexbox", "JS vanilla"],
    imagenes: [
      "../imagenes/simonDice/simon1.png",
      "../imagenes/simonDice/simon2.png",
    ],
  },
];

console.log("Lista de proyectos", proyectos);

// * -------------- Menú --------------

// Scroll del menú
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
      mobileMenuIcon.classList.add("visible");
    } else {
      mobileMenuIcon.classList.remove("visible");
    }
    console.log(window.innerWidth);
  }

  function desplegarMenu() {
    if (window.innerWidth <= wideScreen) {
      if (mobileMenuIcon.classList.contains("fa-bars")) {
        mobileMenuIcon.classList.replace("fa-bars", "fa-x");
        mobileMenuIcon.style.cssText = "color: var(--amarillo);";
        mobileMenuTabs.classList.toggle("desplegado");
      } else {
        mobileMenuIcon.classList.replace("fa-x", "fa-bars");
        mobileMenuIcon.style.cssText = "color: var(--blanco);";
        mobileMenuTabs.classList.toggle("desplegado");
      }
    }
  }
  comprobarAncho();
  window.addEventListener("resize", comprobarAncho);
  mobileMenuIcon.addEventListener("click", desplegarMenu);
  window.addEventListener("scroll", navScroll);
});

// * -------------- SobreMi --------------
// MOSTRAR Y OCULTAR EL DIV
function desplegarDiv() {
  let consola = document.querySelector(".console");
  let desplegable = document.querySelector(".model3D__container");
  let boton = document.getElementById("desplegarInfo");

  if (boton.innerText === "Ejecutar") {
    console.log(boton.id);

    consola.classList.remove("cerrar-animation");
    consola.classList.add("ejecutar-animation");
    desplegable.classList.remove("ocultar-animation");
    desplegable.classList.add("desplegar-animation");
    boton.innerText = "Cerrar";
  } else if (boton.innerText === "Cerrar") {
    console.log(boton.id);

    consola.classList.remove("ejecutar-animation");
    consola.classList.add("cerrar-animation");
    desplegable.classList.remove("desplegar-animation");
    desplegable.classList.add("ocultar-animation");
    boton.innerText = "Ejecutar";
  }
}

// PASAR DIAPOSITIVAS
let izquierda = document.querySelector(".fa-chevron-left");
let derecha = document.querySelector(".fa-chevron-right");
let slides = Array.from(document.getElementsByClassName("slider"));
let slideVista = 0;
console.log("Lista de slides" + slides);
// ffw
derecha.addEventListener("click", function () {
  if (slideVista < slides.length - 1) {
    slides[slideVista].classList.toggle("slider__visible");
    slides[slideVista].classList.toggle("ffw-animation");
    slideVista++;
    slides[slideVista].classList.toggle("slider__visible");
    slides[slideVista].classList.toggle("ffw-animation");
    console.log(slideVista);
  }
});

// rwd
izquierda.addEventListener("click", function () {
  if (slideVista > 0) {
    slides[slideVista].classList.toggle("slider__visible");
    slides[slideVista].classList.toggle("rwd-animation");
    slideVista--;
    slides[slideVista].classList.toggle("slider__visible");
    slides[slideVista].classList.toggle("rwd-animation");
    console.log(slideVista);
  }
});

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

let practicaHTML = `<div class="card__icon-wrapper"><div class="card__icon card__icon--practica" data-text="Práctica">
<svg xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1em" viewBox="0 0 1696 1536">
    <path fill="currentColor" d="M1671 350q40 57 18 129l-275 906q-19 64-76.5 107.5T1215 1536H292q-77 0-148.5-53.5T44 1351q-24-67-2-127q0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T84 1051q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T372 283q1-8-3-25.5t-2-26.5q2-8 9-18t18-23t17-21q8-12 16.5-30.5t15-35t16-36t19.5-32T504.5 12t36-11.5T588 6l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1057 1280H188q-27 0-38 15q-11 16-1 43q24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57q38 15 59 43m-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1279 352l21-64q4-13-2-22.5t-20-9.5H670q-13 0-25.5 9.5T628 288zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1196 608l21-64q4-13-2-22.5t-20-9.5H587q-13 0-25.5 9.5T545 544z"/>
</svg>
</div></div>`;
let programacionHTML = `<div class="card__icon-wrapper"><div class="card__icon card__icon--programacion" data-text="Programación">
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.3">
    <path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"/>
    <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/>
    </g>
</svg>
</div></div>`;
let frontEndHTML = `<div class="card__icon-wrapper"><div class="card__icon card__icon--front-end" data-text="Front end">
<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 16 16">
    <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
</svg>
</div></div>`;
let backEndHTML = `<div class="card__icon-wrapper"><div class="card__icon card__icon--back-end" data-text="Back end">
<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 16 16">
    <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
</div></div>`;

function renderizarCard(proyectos) {
  let cardContainer = document.querySelector(".card__container");
  cardContainer.innerHTML = ""; // el div inicial está vacío

  proyectos.forEach((proyecto) => {
    let badge = "";

    // Generar badge según la categoría
    proyecto.categoria.forEach((categoria) => {
      switch (categoria) {
        case "práctica":
          badge += practicaHTML;
          break;
        case "programación":
          badge += programacionHTML;
          break;
        case "front end":
          badge += frontEndHTML;
          break;
        case "back end":
          badge += backEndHTML;
          break;
        default:
          break;
      }
    });

    // Datos
    cardContainer.innerHTML += `
    <div class="card fade-in">
      <div class="card--background">
          ${badge}
        <div class="card__content">
          <h3 class="card__title">${proyecto.nombre}</h3>
            <div class="card__content-text">
              <p class="card__text">${proyecto.descripcion}</p>
              <p class="card__text card__text--tag">${proyecto.tags.join(
                " | "
              )}</p>
              <a class="card__text card__text--link" href="${
                proyecto.url
              }"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
      </div>
    </div>
    `;
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

//* lISTENERS --------------------------------------------------------------

document
  .getElementById("desplegarInfo")
  .addEventListener("click", desplegarDiv);

document.addEventListener("DOMContentLoaded", function () {
  console.log("Preparado para renderizar cards");
  document.getElementById("proyectos").addEventListener("click", function () {
    filtrarProyectos(proyectos);
  });
});
