function concatenation(noun, adjetive, verb, adverb){
  let result = '';
    // result += 'The ' + adjetive + ' ' + noun  + ' ' + verb  + ' ' + 'to the hause' + ' ' + adverb;
//* the best way to do the same thing is through Template literals.
    result += `The ${adjetive} ${noun} ${verb} to the house ${adverb}`;
  return result;
}

console.log(concatenation('dog', 'big', 'ran', 'slowly'));

/* This is the other way to do the same thing above ¡But more longer! */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";


const wordBlanks = "When my " + myNoun + " " + "that is " + " " + myAdjective + ", " + "is scared it " + " " + myVerb + " " + "very " + myAdverb + " " + "to the house"; 

console.log(wordBlanks)