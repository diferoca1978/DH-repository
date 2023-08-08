let main = document.querySelector("main");
console.log(main);
let subTitle = document.querySelector(".subtitulo");
let a = document.querySelector("a");
let p = document.querySelectorAll("p");
let body = document.querySelector("body");
console.log(p);

let ingresarNombre = prompt("Ingresa tu nombre");

if (ingresarNombre == "") {
  subTitle.innerHTML += "invitado";
} else {
  subTitle.innerHTML += ingresarNombre;
}

subTitle.style.textTransform = "uppercase";

a.style.color = "#E51B3E";

let response = confirm("¿Desea colocar un fondo de pantalla?");

if (response) {
  body.classList.add("fondo");
}
for (let i = 0; i < p.length; i++) {
  let paragraph = p[i];
  if (i % 2 == 0) {
    paragraph.classList.add("destacadoPar");
  } else {
    paragraph.classList.add("destacadoImpar");
  }
}

main.style.display = "block";
