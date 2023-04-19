//operador ternario que cumple la funcion como si fuera un (if - else) But this kind of indentation is very confuse
let edad = 35
//             Condicion (if)                   Condicion (else-if)                Condicion (else)  
let validacion = (edad > 40) ? 'eres mayor de 40' : (edad < 40) ? 'eres menor de 40' : 'tienes 40';
console.log(validacion);

//* this is the correct form to do that when we need to use nested conditions ( nested if)

function checkSign(num) {

  return (num > 0) ? 'positive'
  : (num < 0) ? 'negative'
  : 'zero';
  
  }
  checkSign(10);