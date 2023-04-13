let firstName = 'Diego';
let lastName = 'Rodriguez';
let currentSalary = 35000;
let nSalary = '';
let percentage = '';
let finalMessage = '';
 
function cPercentage() {
  if(currentSalary < 33000){
    percentage = 20;
  }else{
    percentage = 15;
  }
}

function showResults(){
  cPercentage();
  nSalary = currentSalary + (currentSalary * percentage)/100
  finalMessage = `${firstName} ${lastName}
  Current salay: ${currentSalary}, 
  Your salary increase ${percentage}%, 
  Your new salary is: ${nSalary}`;
  return(finalMessage);
}
console.log(showResults());
