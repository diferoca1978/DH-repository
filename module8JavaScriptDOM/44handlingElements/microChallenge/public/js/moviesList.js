let body = document.querySelector("body");
let h1 = document.querySelector(".moviesListTitulo");

let ask = prompt("¿Desea modo oscuro?");

if (ask == "si") {
  body.style.background = "#7f7f7f";
  body.classList.add("fondoMoviesList");
} else {
}
h1.innerHTML += "LISTADO DE PELÍCULAS";
h1.style.color = "white";
h1.style.background = "teal";
h1.style.padding = "20px";
