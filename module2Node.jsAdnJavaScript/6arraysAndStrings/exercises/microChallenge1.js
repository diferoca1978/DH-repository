//* Working with Arrays and strings

// Access ramdom values of our array.
let myArray = ['fridge', 'microwave', 'stove', 'mixer', 'blender', 'dishwasher' ];
console.log(myArray[4]);

// Extarct the first element of our array, and add it at the end of our array,
let extract = myArray.shift();
myArray.push(extract);
console.log(myArray);

// Add to the end of our array two elements
myArray.push('oven', 'extractor hood');
console.log(myArray);

// show by console how many elements are onto our array
console.log(myArray.length);

// Search an element of our array, and create a condition in charge of establish if the element exist or no onto our array
let find = myArray.includes('mixer');
let result = find == true ? 'Product found' : 'The product searched does not exist';
console.log(result);

// Merge all ellements of our array in a hole text String separating the elements by blanc spaces
let allThogether = myArray.join(' '); 
console.log(allThogether);

// Determine the cuantiti of values there are onto our text string
 console.log(allThogether.length);

// Change the name of some product onto our text string by other.
console.log(allThogether.replace('extractor hood', 'grinding machine'));

// generate a array with each word contain onto text string separated by comma.
let newArray = allThogether.split(' ');
console.log(newArray);




