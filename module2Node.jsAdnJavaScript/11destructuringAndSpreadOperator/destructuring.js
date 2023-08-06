//* Syntax with arrays

let fruits = ['🍅', '🍏', '🍊']

let [tomato, apple, tangerine] = fruits // Trough this we can extract the elements onto array in an individual variable with the name that we have choosen.

console.log(tomato);

//* Syntax with objects

let animal = {
  type : '🥚',
  origin : '🐤',
  use : '🍳'
}

let {type: typeOfFood, origin: where, use: howEat} = animal // with out this we can extract onto literal object in an individual variable with the name that we have choosen.
console.log(typeOfFood);
console.log(where);
console.log(howEat);

//* Syntax to extract values at any index

let animals = ['🐕', '🐎', '🐧', '🐂']

let [ , , penguin, ] = animals // we used commas to skip variables at the destructuring array's first, second and last index positions.

console.log(penguin);