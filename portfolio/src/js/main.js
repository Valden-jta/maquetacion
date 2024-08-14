// * -------------- Menú --------------

// Scroll del menú
let nav = document.querySelector(".nav");

navScroll = () => {
  if (window.scrollY >= 100) {
    nav.classList.add("nav--scroll");
  } else if (this.window.scrollY < 100) {
    nav.classList.remove("nav--scroll");
  }
};

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
  } else if (boton.innerHTML === "Cerrar") {
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
let slides = Array.from(document.getElementsByClassName("card"));
let slideVista = 0;
console.log(slides);
// ffw
// ffw
derecha.addEventListener("click", function () {
  if (slideVista < slides.length - 1) {
    slides[slideVista].classList.toggle("card__visible");
    slides[slideVista].classList.toggle("ffw-animation");
    slideVista++;
    slides[slideVista].classList.toggle("card__visible");
    slides[slideVista].classList.toggle("ffw-animation");
    console.log(slideVista);
  }
});

// rwd
izquierda.addEventListener("click", function () {
  if (slideVista > 0) {
    slides[slideVista].classList.toggle("card__visible");
    slides[slideVista].classList.toggle("rwd-animation");
    slideVista--;
    slides[slideVista].classList.toggle("card__visible");
    slides[slideVista].classList.toggle("rwd-animation");
    console.log(slideVista);
  }
});

// * -------------- Proyectos --------------
async function importarJSON() {
  try {
    const response = await fetch("./proyectos.json");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    const proyectos = await response.json();
    return proyectos; // Devolver los datos cargados
  } catch (error) {
    console.error("Error:", error);
  }
}

async function usarProyectos() {
  const proyectos = await importarJSON();
  if (proyectos) {
    // LLAMARA A LAS FUNCIONES QUE USEN EL JSON PROYECTOS
    filtrarProyectos(proyectos);
  }
}

/*<div class="card">
    <div class="card__icon-wrapper">
      <div class="card__icon card__icon--practica" data-text="Práctica">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1em" viewBox="0 0 1696 1536">
              <path fill="currentColor" d="M1671 350q40 57 18 129l-275 906q-19 64-76.5 107.5T1215 1536H292q-77 0-148.5-53.5T44 1351q-24-67-2-127q0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T84 1051q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T372 283q1-8-3-25.5t-2-26.5q2-8 9-18t18-23t17-21q8-12 16.5-30.5t15-35t16-36t19.5-32T504.5 12t36-11.5T588 6l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1057 1280H188q-27 0-38 15q-11 16-1 43q24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57q38 15 59 43m-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1279 352l21-64q4-13-2-22.5t-20-9.5H670q-13 0-25.5 9.5T628 288zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1196 608l21-64q4-13-2-22.5t-20-9.5H587q-13 0-25.5 9.5T545 544z"/>
          </svg>
      </div>
      <div class="card__icon card__icon--programacion" data-text="Programación">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.3">
              <path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"/>
              <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/>
              </g>
          </svg>
      </div>
      <div class="card__icon card__icon--front-end" data-text="Front end">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 16 16">
              <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
          </svg>
      </div>
      <div class="card__icon card__icon--back-end" data-text="Back end">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 16 16">
              <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
      </div>
    </div>
    <div class="card__content">
      <h3 class="card__title">${this._nombre}</h3>
      <p class="card__text">${this._descripcion} Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</div>
*/
filtrarProyectos = () => {};

renderizarCard = () => {
  let cardContainer = document.querySelector(".card__container");
  cardContainer = "";

  proyectos.forEach((proyecto) => {
    //Datos
    cardContainer.innerHTML += `
                    <div class="card style="--background-image: url(${
                      proyecto._imagenes[0]
                    })">
                      <div class="card__background"><d
                        <div class="card__icon-wrapper">
                          ${badge(proyecto)}
                        </div>
                        <div class="card__content">
                          <h3 class="card__title">${proyecto._nombre}</h3>
                          <p class="card__text">${proyecto._descripcion}</p>
                          <p class="card__text--tag">${proyecto._tags.join(
                            " | "
                          )}</p>
                        </div>
                    </div>`;
    // imagenes de fondo
    imagenCarrusel(proyecto);
  });
};

// determinar las badge que apareceran en el card
function badge(proyecto) {
  let badge = "";
  let practicaHTML = `<div class="card__icon card__icon--practica" data-text="Práctica">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1em" viewBox="0 0 1696 1536">
                <path fill="currentColor" d="M1671 350q40 57 18 129l-275 906q-19 64-76.5 107.5T1215 1536H292q-77 0-148.5-53.5T44 1351q-24-67-2-127q0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T84 1051q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T372 283q1-8-3-25.5t-2-26.5q2-8 9-18t18-23t17-21q8-12 16.5-30.5t15-35t16-36t19.5-32T504.5 12t36-11.5T588 6l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1057 1280H188q-27 0-38 15q-11 16-1 43q24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57q38 15 59 43m-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1279 352l21-64q4-13-2-22.5t-20-9.5H670q-13 0-25.5 9.5T628 288zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1196 608l21-64q4-13-2-22.5t-20-9.5H587q-13 0-25.5 9.5T545 544z"/>
            </svg>
        </div>`;
  let programacionHTML = `<div class="card__icon card__icon--programacion" data-text="Programación">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.3">
                <path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"/>
                <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/>
                </g>
            </svg>`;
  let frontEndHTML = ` <div class="card__icon card__icon--front-end" data-text="Front end">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 16 16">
                <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
            </svg>
        </div>`;
  let backEndHTML = `<div class="card__icon card__icon--back-end" data-text="Back end">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 16 16">
                <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
            </svg>
        </div>`;

  proyecto._categoria.forEach((categoria) => {
    switch (categoria) {
      case "practica":
        badge += practicaHTML;
        break;
      case "programacion":
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
}

// Animacion imagenes de fondo
function imagenCarrusel(proyecto) {
  let indice = 0;
  let cards = document.getElementsByClassName("card");

  setInterval(() => {
    Array.from(cards).forEach((card) => {
      // Añadir clase fade-out
      card.classList.add("fade-out");

      // Esperar a que termine la animación de fade-out
      setTimeout(() => {
        // Cambiar la imagen de fondo usando el pseudo-elemento ::after
        card.style.setProperty(
          "--background-image",
          `url(${proyecto._imagenes[indice]})`
        );

        // Eliminar clase fade-out y añadir clase fade-in
        card.classList.remove("fade-out");
        card.classList.add("fade-in");

        // Eliminar clase fade-in después de la animación
        setTimeout(() => {
          card.classList.remove("fade-in");
        }, 500); // Duración de la animación fade-in
      }, 500); // Duración de la animación fade-out
    });

    indice = (indice + 1) % proyecto._imagenes.length;
  }, 10000); //10s
}

//* lISTENERS --------------------------------------------------------------

window.addEventListener("scroll", navScroll);

document.addEventListener("DOMContentLoaded", function () {
  usarProyectos();
});
