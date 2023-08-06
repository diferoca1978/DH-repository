//* How view bitwise operators

function bitwiseAND(n1, n2) {
	return (n1 & n2);
}
console.log(bitwiseAND(3,2)); 

function bitwiseOR(n1, n2) {
	return (n1 | n2)
}
console.log(bitwiseOR(8,2));

function bitwiseXOR(n1, n2) {
	return ( n1 ^ n2)
}
console.log(bitwiseXOR(4,2));

//* how to view a binari expression of a number through Number.tostring() Method

let num = 215

console.log(`the result of this: ${num.toString(32)}`)


//* follow these recurses to undertand this concept 

// https://www.youtube.com/watch?v=mesu75PTDC8
// https://www.geeksforgeeks.org/javascript-number-tostring-method/
