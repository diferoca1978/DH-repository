//operador ternario que cumple la funcion como si fuera un (if - else)
let edad = 35
//             Condicion (if)                   Condicion (else-if)                Condicion (else)  
let validacion = (edad > 40) ? 'eres mayor de 40' : (edad < 40) ? 'eres menor de 40' : 'tienes 40';
console.log(validacion);
