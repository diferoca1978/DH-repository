const fs = require('fs')

let movies = require('./movies')

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

let content = 'These are the most incredible list of movies that the users have been watching recently.'

fs.writeFileSync('message.txt', content)

 
let message = fs.readFileSync('./message.txt', 'utf-8')

console.log(message);




