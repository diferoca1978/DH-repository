
let numbers = [1,2,3,4,5,6,7,8,9,10]

let [num0, pos1 , num2, pos3, num4, ...others ] = numbers
console.log(num0);
console.log(num2);
console.log(num4);
let rest = [pos1, pos3, ...others]
console.log(rest);


let pet = {
  firstName : 'Mateo',
  typeOfPet : 'Dog',
  color : 'Black',
  breed : 'Labrador'
}

let {firstName, typeOfPet, color, breed} = pet

console.log(`Hi, this is my pet his name is: ${firstName}, it is a ${typeOfPet}, his color is: ${color} and his breed is: ${breed}`);

