//* invoicing courses

let coursesOffer = [['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react',7000], ['nodejs', 15000]];
let studentChoose = ['HTML5', 'CSS3', 'REACT'];

function calculation(arr1, arr2) {
  
  let totalToPay = 0;
  
  for (let i = 0; i < arr1.length; i++) {
    (arr2.includes(arr1[i][0].toUpperCase())) ? totalToPay += arr1[i][1] : '' 
  }
  return totalToPay
}
console.log(calculation(coursesOffer, studentChoose)); 

function report (firstName, lastName, arr1, arr2 ) {
  

  return [firstName +' '+ lastName, calculation(arr1,arr2)]

}
let result = report('Diego', 'Rodriguez', coursesOffer, studentChoose);

console.log('Dear student' +' '+result[0] +' '+ 'In base of the choose courses, the total cost to pay is:' +' '+ result[1] )




