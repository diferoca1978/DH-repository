/*window.addEventListener("load", function () {
  document.querySelector("h3").innerText += +" " + "usando código";
});*/

/*window.addEventListener("load", function () {
  document.querySelector("body").innerHTML += "<mark>Javascript ROCKS</mark>";
});*/

/*----------------
-modifying styles-
----------------*/

/*window.addEventListener("load", function () {
  document.querySelector("body").style.backgroundColor = "lightskyblue";
  document.querySelector("h2").style.textAlign = "center";
  document.querySelector("h4").style.fontStyle = "italic";
});*/

/*---------------------------------
-modifying styles at the same time-
---------------------------------*/

window.addEventListener("load", function () {
  let libros = document.querySelectorAll("li");

  for (let libro of libros) {
    libro.style.color = "orange";
  }
});
