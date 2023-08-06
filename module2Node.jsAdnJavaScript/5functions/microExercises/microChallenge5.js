//* Know the age of the dog

let ageDog = 7; 
let realAgeDog = (humanAge, ageDog) => {
  let total = humanAge * ageDog
  let message = 'Your dog is ' + total + ' years old'
  return message
}


console.log(realAgeDog(6,ageDog));

