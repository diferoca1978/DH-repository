//* Requesting the express function

let express = require ('express') // for portocol we use the name express for the variable.

// then for protocol we need to use a variable called app, through of it we can have all methods that contain the function express 
let app = express()

app.listen(3000, () => {
  console.log('Server running'); // ! If we use only the module (listen) it does not return anything in our browser because the server only be listening, because of we do not have provided a path.
})

/*app.get('/', (req, res) => { // Through the method (get) we can give the path and pass a callback thah receive two parameters one called (req) that means require, and the other called (res) thant means response.

  res.send ('Hi, first server running') // Then using the method (send) over the paramater (res) to show in our browser the message ('Hi, first server running')
})*/

//* Routing and response.

let greeting = 'wellcome, now we are in your profile' // Now we know that we can use a different route to redirection the user and use variables to send response.

app.get('/profile', (req, res) => {
  res.send(greeting) 
})
