//* challenge rent a Car

/*let compactCar = 14000;
let suvCar = 17000;
let subUrban = 28000;
let additionalCostBabyChair = 1200;
let car1 = 'compact';
let car2 = 'suv';
let car3 = 'subUrban';


function carRent (vehicleType, daysOfRent, babyChair) {

  let calculation = vehicleType * daysOfRent;
  let plusBabychair = ((vehicleType + 1200) * daysOfRent);
  let message = ''; 

  if ((vehicleType == compactCar ) && (babyChair === 'yes')) {
    message = `Dear customer, based on the type of car ${car1} rented, considering the ${daysOfRent} days of use,and the use of additional Baby chair which have an additional cost of ${additionalCostBabyChair} per day, the total cost to pay is: ${plusBabychair}.`;
    } 
    else if ((vehicleType == suvCar ) && (babyChair === 'yes')) {
      message = `Dear customer, based on the type of car ${car2} rented, considering the ${daysOfRent} days of use,and the use of additional Baby chair which have an additional cost of ${additionalCostBabyChair} per day, the total cost to pay is: ${plusBabychair}.`;
    } 
    else if ((vehicleType == subUrban ) && (babyChair === 'yes')) {
      message = `Dear customer, based on the type of car ${car3} rented, considering the ${daysOfRent} days of use,and the use of additional Baby chair which have an additional cost of ${additionalCostBabyChair} per day, the total cost to pay is: ${plusBabychair}.`;
    } else {
      if ((vehicleType == compactCar ) && (babyChair !== 'yes')){message = `Dear customer, based on the type of car ${car1} rented, considering the ${daysOfRent} days of use, the total cost to pay is: ${calculation}.`;
    }
      if ((vehicleType == suvCar ) && (babyChair !== 'yes')){message = `Dear customer, based on the type of car ${car2} rented, considering the ${daysOfRent} days of use, the total cost to pay is: ${calculation}.`;
    }
      if ((vehicleType == subUrban ) && (babyChair !== 'yes')){message = `Dear customer, based on the type of car ${car3} rented, considering the ${daysOfRent} days of use, the total cost to pay is: ${calculation}.`;
    }
  }
  return message
}
console.log(carRent(subUrban , 5, 'no'))*/

/*// todo: refactoring code before wrote through conditional switch.

let rentcar = (vehicleType, daysOfRent, babyChair) => {
  
  let cost = 0;
  let message = '';
  switch (vehicleType) {
    case 'compact':
      cost = 14000
      break;
    case 'suv':
      cost = 17000
      break;
    case 'subUrban':
      cost = 28000
      break;
  }
  babyChair === 'yes' ? message = 'Dear customer, based on the type of car ' + vehicleType + ' rented, considering the ' + daysOfRent + ' days of use,and the use of additional Baby chair which have an additional cost of 1200 per day, the total cost to pay is: ' + (cost += 1200) * daysOfRent : message = 'Dear customer, based on the type of car ' + vehicleType + ' rented, considering the ' + daysOfRent + ' days of use, the total cost to pay is: ' + cost * daysOfRent

  return message

}
console.log(rentcar('compact', 5, 'yes'));*/


let rentcar = (vehicleType, daysOfRent, babyChair) => {
  cost = 0;
  let message = '';
  vehicleType == 'compact' ? cost = 14000 : ''
  vehicleType == 'suv' ? cost = 17000 : ''
  vehicleType == 'subUrban' ? cost = 28000 : ''
  
  babyChair == 'yes' ? message = 'Dear customer, based on the type of car ' + vehicleType + ' rented, considering the ' + daysOfRent + ' days of use,and the use of additional Baby chair which have an additional cost of 1200 per day, the total cost to pay is: ' + (cost += 1200) * daysOfRent : message = 'Dear customer, based on the type of car ' + vehicleType + ' rented, considering the ' + daysOfRent + ' days of use, the total cost to pay is: ' + cost * daysOfRent

  return message

}
console.log(rentcar('compact', 5, 'yes'));



