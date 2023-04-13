                                        //* Spread oparator with arrays

let appliance = ['fridge', 'microwave', 'stove', 'mixer', 'blender', 'dishwasher' ]
let furniture = ['sofa', 'desk', 'dinnertable', 'nightstand']

let merge = [...appliance, ...furniture] // through this we can merge all the elements of any arry in only one.

console.log(merge); 

// Also we can add all data of any array in other array like for instance:

let pieceOne = ['happy', 'new year']
let sentence = ['Have a,', ...pieceOne, 'ok']

console.log(sentence)

//* Spread oparator with literal objects

let myCar = {mark:'Honda', model:'acura', year:2019,};
let driver1 = {firstName : 'Diego', experience : '2 years', ...myCar}
let driver2 = {firstName : 'Alonso', experience : '4 years', ... myCar}

//todo: now the drivers have inside all properties of myCar object without we have to define these by hand one to one. 

console.log(driver1);

//* Spread operator with functions

let grades = [2.1, 5.0, 3.5, 4.5, 1.0, 4.8]

let maxGrade = Math.max(...grades) // For this example we use the function Math.Max so the spread operator expanding the data so that the function receive each data with separated argument and return the highest value.  

console.log(maxGrade)


//* Rest parameter.

function myFunction (param1, param2, ...others) {
  return others
} // The parameter rest will generate an array with all the additional arguments that were passed to the function.
console.log(myFunction(5,6,7,8,9,10));


// Rest parameter with function that receive any quantity if numbers

function addition (...numbers) { // through this the function can receive any number as a parameter.

  return numbers.reduce((acum, current) => acum += current)

}
console.log(addition(2, 4, 6));
console.log(addition(2, 4, 6, 8 , 9, 100, -30, 200));

