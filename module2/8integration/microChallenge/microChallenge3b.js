//* game tops

function game (arr,num) {

 let result = ''

 num < 2 && num > 6 ? result = 'Insert a number from 2 to 6' : ''
  
 let random = Math.floor(Math.random() * num)

  for (let i = 0; i < arr.length; i++) {

    i == random ? result = arr[i] : ''
  }                                      
 return result
 }
console.log(game(['Toma 1' ,'Toma 2','Pon 1', 'Pon 2', 'Todos ponen', 'Toma todo'], )); 
