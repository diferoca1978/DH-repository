//* the next then numbers

let nextTenNumbers = (num) => {
    let result = []
   for(let i = num; i <= num+10; i++){
      result.push(i) ;
}
return result
}
console.log(nextTenNumbers(10));



//*print numbers

for (let i = 1; i <= 57; i += 3) {
  console.log(i);
}

//* String text

let text = (string) => {
  let newArray = string.split('')
  for (let i = 0; i < newArray.length; i++) {
    let upper = '';
    console.log(upper += newArray[i].toUpperCase()); 
  }
}
text('I am a string wroten in lowercase'); 

//* even munbers

let evenNumbers = (arr) => {

  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0) && (arr[i] !== 0) ? newArray.push(arr[i]) : '';
  }
  return newArray
}
console.log(evenNumbers([5, 4, 9, 14, 11, 8, 7, 15, 55, 39, 0, 46]));