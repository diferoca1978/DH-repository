//* training

let deportista = {
  
	  energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (num) {
        this.energia -= num * 5,
        this.experiencia += num * 2
    }
}

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);