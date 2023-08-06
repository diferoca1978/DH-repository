//* Variables.
/* we can declare a variable through three differents reserved words such as:
Var, let and const */ 

var firstName = 'Diego';// this word isn't recommended because it will can rewrite for error, because it is interpreted by JavaScript like a global variable not matter it is used onto local scope.
//Example
if(true){
  var firstName = 'Juan';// In this case the variable firstName has been rewritten for the value Juan.
}   
console.log(firstName);

let secondName = 'Ferney';// This word is Currently the most used and recommended, because unlike word var, it can't be rewritten.
/*if(true){
  var secondName = 'Martin';// the console will return an error. ¡SyntaxError: Identifier 'secondName' has already been declared!
}*/
console.log(secondName);

const lastName = 'Rodriguez';// this word is usually used to asingne a value that we wont change never. 
/*if(true){
  var lastName = 'Castro';//the console will return an error. ¡Identifier 'lastName' has already been declared!
} */
console.log(lastName);