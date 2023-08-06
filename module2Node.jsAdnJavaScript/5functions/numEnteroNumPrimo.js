//* Codigo para saber si un numero es entero.
// Con esta funcion validamos si un numero es entero cuando verificamos que el numero dividido por cualquier otro no tenga decimales y esto lo hacemos con el operador modulo (%) y le indicamos que debe ser estrictamente igual a cero(0).

function esEntero (num){
    if (num % 1 ===0){
        return true;
    }else{
        return false
    }
} console.log(esEntero(1.3));

//TODO: Refactor this method ES5 with ternary operator

function esNtero(numero) {
    let resultado = (numero % 1 === 0) ? true : false
    return resultado;
}console.log(esNtero (2.1));

//TODO: Refactor this method ES6 using Number.isInterger()

function esnTero(nume) {
    return (Number.isInteger(nume));
 }console.log(esnTero(1.3)); 

//* codigo para saber si eun numero es primo.
//! [Nota] 1]: un número primo sólo es divisible por sí mismo y por 1.
//! [Nota 2]: Debemos utilizar un `bucle for`.
//! [Nota 3]: los números negativos, 0 y 1 NO son números primos.
// entonces mediante el bucle for le indicamos al metodo que la variable i inicie por defecto en 2 ya que los numeros 0 y 1 no son primos, segundo con el metodo if validamos si el numero es divisible por si mismo o por 1 con el operador Modulo(%) e indicandole que el sobrante debe ser extrictamente igual a cero(0).     

function esPrimo(num) {
   
    if (num <= 1){
        return false
    }
    for (let i = 2; i < num; i ++){
       if (num % i === 0){
          return false;
       }
    } return true;
 }console.log(esPrimo (3.2));

