//* average graduated students

let FromHTML5 = '30 45 25 34 18 23 16 50 72 70'
let FromCSS3 = '50 45 71 34 23 45 65 75 63 43 74 70'
let FromJAVASCRIPT = '70 65 58 45 23 57 34 17 72'
let FromNODEJS = '45 56 73 34 65 72 70 32'

let HTML5 = FromHTML5.split(' ');
let CSS3 = FromCSS3.split(' ');
let JAVASCRIPT = FromJAVASCRIPT.split(' ');
let NODEJS = FromNODEJS.split(' ');

function report(arr1, arr2, arr3, arr4, num) {

  let selection = ''
  let result = ''
  if (num == undefined) result = ''
  else if (num === 1)  selection = arr1
  else if (num === 2) selection = arr2
  else if (num === 3) selection = arr3
  else if (num === 4) selection = arr4
  else {result = 'Dear user, the values for select each course are: \n'+ 
    '1'+' '+'='+' '+'HTML5 \n'+
    '2'+' '+'='+' '+'CSS3 \n'+  
    '3'+' '+'='+' '+'JAVASCRIPT \n'+  
    '4'+' '+'='+' '+'NODEJS \n'  
  }
  
  let average = 0
  
  for (let i = 0; i < selection.length; i++) {
    result = Math.floor(average += (selection[i] / selection.length)) 
  }
  return result 
}
console.log(report(HTML5,CSS3,JAVASCRIPT,NODEJS, 5))