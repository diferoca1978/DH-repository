/* Loop for to make an array with Odd numbers */

for (i = 1; i < 20; i += 2) {
  
  console.log(i);
   
}

/* Loop for to create an array with Odd numbers backwards*/

let contBackwards = [];
let total = 0;

for (let i = 11; i > 0; i -= 2) {
  contBackwards.push(i);  
}
console.log(contBackwards);

/* Lopp for to add up each number with the next number that contain our array */

for (let i = 0; i < contBackwards.length; i++) {
  total += contBackwards[i];
}
console.log(total)

/* Loop for to create an array with decrease values */

let decrease = [];

for (let i = 10; i >= 0; i--) {
  decrease.push(i);
}
console.log(decrease);

/* sometimes we can find Multi-dimensional arrays and we need to use nesting (for) loops */

function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {//We check the length of the main arr in the [i] for loop, and then we check arr[i] length in the [j] for loop.  
   for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product
}
console.log(multiply([1, 2, 3, 4, 5, 6, 7], 5));

function imprimirAzul4() {
  for (let i = 0; i < 4 ; i ++) {
      console.log('Azul'); 
  }
}(imprimirAzul4())

function pasandoPorI() {
  for (let i = 0; i < 5; i++){
      console.log("acá i tiene el valor de " + i)
  }
}pasandoPorI()

function noParesDeContarImparesHasta(num) {
  let quantity = 0
  
  for (let i = 0; i < num; i ++) {

      (i % 2 !== 0)  ? quantity ++: '';
      
    }
    return quantity
  }
console.log(noParesDeContarImparesHasta(10)); 

// count first 10 prime numbers 

let num = 1
for (let i = 0; i < 10;) {
	if (num%2!=0) {
    	console.log(num);
    	i++;
	}
	num++
}

