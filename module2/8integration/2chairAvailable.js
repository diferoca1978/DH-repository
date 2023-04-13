

let chairAvailable = (seat, num) => {

  let message = '';
  let seatAvailable = seat.length;
  num == undefined ? message = '' : (seat.includes(num)) == true ? message = 'Luckily the seat number ' + num + ' is available': (seat.includes(num)) == false ? message = 'Unfortunately The seat ' + num + ' does not available, but there are ' + seatAvailable + ' seats available yet ' + seat : ''
  
  
return message
}
console.log(chairAvailable([8, 12, 13, 18], 8));
 