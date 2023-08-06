//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations. JavaScript arrays are resizable and can contain a mix of different data types.

//* example:

let newArray = ['cake','bread','cupcake','brownie'] // here we build an array.

newArray.push('flour'); // Method to add any element at the final of the array. 
console.log( newArray);

newArray.pop();  // Method to remove any element at the final of the array. This method don't need any value because always remove the last index of our array.
console.log( newArray);

let indexOfBegin = newArray.indexOf('bread'); // Method to know the number of index of some data into our array.
console.log(indexOfBegin);

let indexOfEnd = newArray.lastIndexOf('brownie'); // Method to know the number of index but backwards.
console.log(indexOfEnd)

newArray.shift(); // Method to remove the first element at the begin of the our array.
console.log(newArray);

newArray.unshift('cake'); // Method to insert an element at the begin of our array.
console.log(newArray);

let separatedByComma = newArray.join(); // Method to join all elements onto array.If we don't give a parameter for separate the elements, it for defect separate them by a comma.
let separatedBySpace = newArray.join(' ') 
console.log(separatedBySpace)

let find = newArray.includes('cake'); // Method to Determine whether an array includes a certain element, returning true or false as appropriate.
console.log(find)

newArray [3] = 'Flour'; // modify array data with indexes: so in this case the value with the index number 3 into our array     ('brownie') was changed to the new value ('flour'). 
console.log(newArray); 

let myArray = [['cake', 'bread'], ['cupcake', 'brownie'], ['flour', 'oats', 'butter']]// Access Multidimentional arrays with indexes: Well, in this case we access to nested index 3, and at the same time we access to sub index 1 of the nested index 3.
let myData = myArray [2][1];
console.log(myData);

let merge = newArray.concat(myArray); // this method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(merge);
