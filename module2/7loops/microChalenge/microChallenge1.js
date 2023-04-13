let balanceActivity = [5000, -4000, 4900, -4500, 5000, -4000, 5200, -4500, 5000, -3900, 5300, -4600]

let checkActivity = (arr) => {
  
  let positiveBalance = 0;
  let negativeBalance = 0;
  
   for (let i = 0; i < arr.length; i ++) {
    
    (arr[i] > 0) ? positiveBalance += arr[i] : (arr[i] < 0) ? negativeBalance += arr[i] : ''; 
    
    }
  let currentlyBalance = ((positiveBalance) + (negativeBalance));

  return [positiveBalance, negativeBalance, currentlyBalance]

}

let report = (firstName, lastName, arr, callback) => {
 let activity = callback(arr)
 return [firstName + ' ' + lastName, activity[0], activity[1], activity[2]]
}

let finalResult = report('Diego', 'Ferney ', balanceActivity, checkActivity); 

console.log('Dear ' + finalResult[0] + ':');
console.log('The total amount of deposit is: ' + finalResult[1] + ':');
console.log('The total amount of whitdraw is: ' + finalResult[2] + ':');
console.log('The current amount of account is: ' + finalResult[3] + ':');
