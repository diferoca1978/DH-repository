//* Add even numbers and odd numbers

function plus(arr) {

  let plusEven = 0
  let plusOdd = 0
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    
    arr[i] % 2 === 0 ? plusEven += arr[i] : plusOdd += arr[i] 
    result = plusEven + plusOdd
  }
  return `The total plus of both is: ${result}`
}
console.log(plus([30, 45, 25, 34, 18, 23, 16, 50, 72, 70])); 
