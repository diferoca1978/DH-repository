/* Add classes to an element*/

window.addEventListener("load", function () {
  document.querySelector("div").classList.add("container");
});

/* Take out classes to an element*/

window.addEventListener("load", function () {
  document.querySelector("h1").classList.remove("titulo");
});

/* Alternate classes*/

window.addEventListener("load", function () {
  document.querySelector("h1").classList.toggle("titulo-tuneado");
});
