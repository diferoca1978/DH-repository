//* calculator

let num1 = 10;
let num2 = 5;
let operation = 'plus';

switch (operation) {
  case 'plus':
    let plus = num1 + num2;
    console.log(`The result of ${operation} ${num1} + ${num2} is: ${plus}`);    
    break;
  case 'subtract':
    let subtract = num1 - num2;
    console.log(`The result of ${operation} ${num1} - ${num2} is: ${subtract}`);    
    break;
  case 'times':
    let times = num1 * num2;
    console.log(`The result of ${operation} ${num1} * ${num2} is: ${times}`); 
    break;
  case 'division':
    let division = num1 / num2; 
    console.log(`The result of ${operation} ${num1} / ${num2} is: ${division}`);  
    break;
    
  default:
    console.log('Las operaciones aceptadas son: sumar - restar - multiplicar - dividir.');
}