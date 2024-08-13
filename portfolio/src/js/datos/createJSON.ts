import { Proyecto } from "../clases/proyecto";
import { Proyectos } from "../clases/proyectos";

//? 1. Proyectos

let turiTravel = new Proyecto(
    "Turitravel",
    2024,
    "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo2/Tema2",
    ["practica", "front end", "flexbox", "js vanilla"],
    "Agencia de viajes. HTML, CSS(flexbox), JS",
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
    ["práctica", "front end", "flexbox"],
    "Replica de la pagina oficial de Codenotch. HTML, CSS(flexbox)",
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
    ["práctica", "front end", "flexbox"],
    "Galería y Blog básico. HTML, CSS (flexbox)",
    ["/blog-galeria/galeria.png"]
  );
  let simon = new Proyecto(
    "Simón dice",
    2024,
    "./src/proyectos/simon/index.html",
    ["práctica", "front end", "js vanilla"],
    "Juego interactivo. HTML, CSS (flexbo), JS vanilla",
    ["/simonDice/simon1.png", "simonDice/simon2.png"]
  );
  
  let imbd = new Proyecto(
    "IMBD",
    2024,
    "https://github.com/Valden-jta/retosEvaluables/tree/main/modulo1/proyectoFInalModulo1",
    ["práctica", "programación", "typescript", "POO"],
    "Escribe y consulta peliculas en un fichero JSON. Typescript",
    ["/imdb/fichero.png"]
  );
  
//? 2. Array de Proyectos

let listaProyectos = new Proyectos([turiTravel,codenocth,galeria,imbd]);

console.log(listaProyectos);
