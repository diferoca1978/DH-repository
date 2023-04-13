/*if (false === !true) { console.log(false == true) } 
else { console.log(true === !false) }*/

// Tablas de la verdad

//Operador OR: este operador arroja falso cuando los dos valores a evaluar son false, de lo contrario sera true en todos los otros casos.

( true || true );   // true
( false || true );  // true
( true || false );  // true
( false || false ); // false

//Operador && (and): este operador arroja true cuando los dos valores a evaluar son true, de lo contrario sera false en todos los otros casos.

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false