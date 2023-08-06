//* Fastfood system
/* The first step that we can do is declaring a function wich will use as a callback function, and this will calculation the price that the client will have to pay  */
let calcularTotal = (tipo, jamon, queso, salsaTomate, mayo, mostaza, tomate, lechuga, cebolla) => {

  let total = 0

  switch(tipo) {
      case "Carne a la parrilla":
          total += 1800;
          break;
      case "Pollo":
          total += 1500;
          break;
      case "Vegetariana":
          total += 1200;
          break;
  }
  jamon === true ? total+=30 : total += 0
  queso === true ? total+=25 : total += 0
  salsaTomate === true ? total+=5 : total += 0
  mayo === true ? total+=5 : total += 0
  mostaza === true ? total+=5 : total += 0
  tomate === true ? total+=15 : total += 0
  lechuga === true ? total+=10 : total += 0
  cebolla === true ? total+=10 : total += 0
  

  return total
}
/* The second step is declare a function that show to client a message with the cost of his order, notice that the function declared before is used onto the this function as a callback function */


function respuesta(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayo, mostaza, tomate, lechuga, cebolla, callbackCalculoTotal) {
  return "Estimado " + nombre + " " + apellido + " el monto total a pagar es de: " + callbackCalculoTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayo, mostaza, tomate, lechuga, cebolla)
}

console.log(respuesta("Paula", "Raventós", "Carne a la parrilla", true, true, false, false, false, false, true, true, calcularTotal))
