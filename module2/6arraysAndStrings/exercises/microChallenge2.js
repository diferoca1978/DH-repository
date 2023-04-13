//* Dh movies

let movies = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno']

let toUpper = (film) => {
  
  let upper = film.toUpperCase();
  movies.pop();
  movies.unshift(upper);

  return movies; 
}

let newString = 'Counter-Strike NOP Vértigo Nick Avatar'
let newArray = newString.split(' ');
newArray.shift();
console.log(newArray);

let allMovies = (array1,array2) => {
  let result = array1.concat(array2); 
  return result;
}
console.log(allMovies(toUpper(movies[6]), newArray));