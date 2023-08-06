//* Iterate with do while loop: this loop executes at least one time the code before that the condition onto the while will executed!.

let ourArray = [];
let i = 0;

do {
ourArray.push(i);
i++
} while(i < 10);

console.log(ourArray);

//* In this exercise we pass only a value to our array, then run the while loop, so (i) takes the value of 11 to the first iteration.

const myArray = [];
let j = 10;

do {
  myArray.push(j);
  j++;
}
while (j < 11);
console.log(myArray);
console.log(j);


