//* Replace() method
/* this method replace a part of string with other
1. it receive tho parameters: 
a. the string that we want look up.
b. the string that we'll use to repace */

function domain (string){
  return string.replace('', 'http://www.');
}
console.log(domain('digitalhouse.com.ar'))

function replaceFastFast(string, word1, word2) {
  return console.log(string.replace(word1, word2));
}
replaceFastFast('Hi, I have a dog', 'dog', 'cat' )

//* Method includes
/* Method to Determine whether an array includes a certain element, returning true or false as appropriate. */

function menciona(string, word1) {
  return console.log(string.includes(word1))
}
menciona('this method also run with arrays', 'computer')

//* Method slice()
/* Method to cut the string and return a slice of our string
It receive two parameters:
a. the index from where start the cut.
b. the index till where finish the cut.
returnig the part that corresponding to the cut */ 

let sentence = 'Hi!, I am Carli';
let bachelor = sentence.slice(-5);
console.log(bachelor)

//* Method length.
/* It's a property that return the number of characters onto our array.
As it's a property doesn't need parameters.  */

let sentence2 = 'Hi, do you know how many characters is there here?';
console.log(sentence2.length)

//* method indexof().
/* Search onto our string, the string that we pass as parameter.
return the first index that it find, otherwise it return -1 */

let sentence3 = 'Hi, do you know how many characters is there here?'
console.log(sentence3.indexOf('know'))

//* method trim().
/* It remove all spaces that be at the begin and at the end of our string,
it doesn't receive parameters and it doesn't remove the spaces between the words */

let sentence4 = ' Hi, do you know how many characters is there here? ';
console.log(sentence4.length)
let newSentence = sentence4.trim()
console.log(newSentence.length)

//* Method split()
/* The split() method takes a pattern and divides a String into an ordered list of substrings by 
searching for the pattern, puts these substrings into an array, and returns the array. */

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words)
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars)
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]