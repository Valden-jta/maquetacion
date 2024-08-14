import { Proyecto, Proyectos } from "./clases";

//? 1. Proyectos

let turiTravel = new Proyecto(
  "Turitravel",
  2024,
  "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo2/Tema2",
  ["practica", "front end"],
  "Agencia de viajes. HTML, CSS y JS.",
  ["flexbox", "JavaSsript vanilla"],
  [
    "/turitravel/turitravel1.png",
    "/turitravel/turitravel2.png",
    "/turitravel/turitravel3.png",
    "/turitravel/turitravel4.png",
    "/turitravel/turitravel5.png",
  ]
);
let codenocth = new Proyecto(
  "CodenotCH",
  2024,
  "https://github.com/Valden-jta/maquetacion/tree/main/codenocht_web",
  ["práctica", "front end"],
  "Replica de la pagina oficial de Codenotch. HTML, CSS y JS.",
  ["flexbox", "JavaSsript vanilla"],
  [
    "/codenotch/codenotch1.png",
    "/codenotch/codenotch2.png",
    "/codenotch/codenotch3.png",
  ]
);
let galeria = new Proyecto(
  "Galería",
  2024,
  "https://github.com/Valden-jta/maquetacion/tree/main/maquetacion_basica",
  ["práctica", "front end"],
  "Galería y Blog básico. HTML y CSS.",
  ["flexbox"],
  ["/blog-galeria/galeria.png"]
);
let simon = new Proyecto(
  "Simón dice",
  2024,
  "./src/proyectos/simon/index.html",
  ["práctica", "front end", "js vanilla"],
  "Juego interactivo. HTML, CSS y JS.",
  ["flexbox", "js vanilla"],
  ["/simonDice/simon1.png", "simonDice/simon2.png"]
);

let imbd = new Proyecto(
  "IMBD",
  2024,
  "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo1/proyectoFInalModulo1",
  ["práctica", "programación"],
  "Escribe y consulta peliculas en un fichero JSON. Typescript.",
  ["TypeScript", "POO"],
  ["/imdb/fichero.png"]
);

//? 2. Array de Proyectos

let listaProyectos = new Proyectos([
  turiTravel,
  codenocth,
  galeria,
  imbd,
  simon,
]);
export default listaProyectos;

//?   Creacion fichero JSON
listaProyectos.escribirEnFicheroJSON("proyectos.json");

console.log(listaProyectos);
