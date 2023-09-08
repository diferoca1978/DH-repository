window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  let inputTitulo = document.querySelector("#titulo");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "#219EBC";
  });

  inputTitulo.addEventListener("keydown", (e) => {
    let estadoSecreto = 0;
  });
};
