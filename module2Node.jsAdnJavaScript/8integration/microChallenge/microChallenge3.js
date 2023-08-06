//* find a number

let find = (arr,num) => {
  
  let message = ''

  num == undefined ? message = '' : arr.includes(num) == true ? message = 'The number ' + num +' '+ ' exist onto the array' : message = 'The vaule requested does not exist'   
  
  return message
}
console.log(find([30, 45, 25, 34, 18, 23, 16, 50, 72, 70], 2)); 