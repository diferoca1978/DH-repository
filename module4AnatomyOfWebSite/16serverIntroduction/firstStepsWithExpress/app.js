//* Requesting the express function

const express = require("express"); // for portocol we use the name express for the variable.
const path = require("path");

// then for protocol we need to use a variable called app, through of it we can have all methods that contain the function express
const app = express();

app.listen(3000, () => {
  console.log("Server running"); // ! If we use only the module (listen) it does not return anything in our browser because the server only be listening, because of we do not have provided a path.
});

/*app.get('/', (req, res) => { // Through the method (get) we can give the path and pass a callback thah receive two parameters one called (req) that means require, and the other called (res) thant means response.

  res.send ('Hi, first server running') // Then using the method (send) over the paramater (res) to show in our browser the message ('Hi, first server running')
})*/

//* Routing and response.

let greeting = "wellcome, now we are in your profile"; // Now we know that we can use a different route to redirection the user and use variables to send response.

/*app.get('/profile', (req, res) => {
  res.send(greeting) 
})*/

//* another example

let product = {
  typeProduct: null,
  price: null,
  quantiti: null,
};

/*app.get("/product/add", (req, res) => {
  res.send(product);
});*/

//* Folder structures and how to send a file to the server

//the first step is require the module .path. we doing this in the line number 4.

app.get("/", (req, res) => {
  let htmlPath = path.join(__dirname, "/htmlViews/index.html"); // in this line we use a variable to store the path:
  // first we use the method join, that it has given us the (path object). This method receive two parameters, the first parameter is (__dirname) it is a constant variable that provided us a reference to the folder of the file that is execute.
  // The second parameter is the relative path to the file we need to send.
  res.sendFile(htmlPath);
});
