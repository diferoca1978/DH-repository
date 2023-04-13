let earnings = [0, 300, 200, 500, 800, 1000, 1200, 3000, 1200]

function addUpLowEarnings(arr) {
  
  let total = 0;

  for (let i = 0; i < arr.length; i ++) {
    
    (arr[i] > 0) && (arr[i] <= 1000) ? total += arr[i] : ''; 

  }
  return total
}
console.log(addUpLowEarnings(earnings));
