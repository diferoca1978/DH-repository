// juego piedra, papel y tijera con switch

let usuario = 'tijera';
let computer = 'piedra';

switch (true)
{
    case usuario == "tijera" && computer == "papel" : 
        console.log("usuario Win");break; 
    case usuario == "papel" && computer == "piedra" :
        console.log("usuario win");break;
    case usuario == "piedra" && computer == "tijera":
        console.log("usuario win");break;
    case usuario === computer :
        console.log("Iguales");break;
    default : console.log('computer win'); 
}

/* If you have multiple inputs with the same output, you can represent them in a switch statement like this: */
//* exercice count cards to bet or hold.
/* Prameters
Count Change	Cards
    +1	       2, 3, 4, 5, 6
     0	       7, 8, 9
    -1	       10, 'J', 'Q', 'K', 'A'*/

let count = 0;

function cc(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count --;
    break;
}

let betHold = 'Hold';
if (count > 0) {
  betHold = 'Bet';
}

console.log(`${count} ${betHold}`);

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

let dia = 'martes';

switch (dia) {
    case "lunes":
      console.log("buena semana")
      break;
    case "viernes":
      console.log("buen finde")
      break;
    default : console.log("buen dia");
  }