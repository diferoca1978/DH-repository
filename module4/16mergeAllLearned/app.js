//* first step: we have to start a project with Node.js through the terminal and writing the command (npm init -y).
//* second step: we have to install the framework (express) through the terminal and writing the command (npm install express --save)
//* third step: we have to require the object express, if we want use the different functions or modules of express we need to cerate a new variable to store the execution of express.
//* fourth step: we have to call the module (path) through a variable. It provide us utilities for working with file and directory paths.
/* optional: we can use (nodemon) is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. Through these command we can install it aS a global (npm install -g nodemon) or as a development dependency (npm install --save-dev nodemon) onto our terminal. If we use the last method we need to write a script onto package.json file like this /*( "scripts": {
    "start": "nodemon app.js"
  })*/

const express = require("express");
const app = express();
const path = require("path");

//* fifth step: we need to start to run the server

app.listen(3000, () => {
  console.log("server running");
});

app.get("/", (req, res) => {
  let htmlpath = path.join(__dirname, "/views/index.html");
  res.sendFile(htmlpath);
});

app.get("/404", (req, res) => {
  let errorMessage = "connection not found";
  res.send(errorMessage);
});

const product = {
  name: "Smartphone",
  brand: "Apple",
  model: "iPhone 13",
  color: "Midnight",
  price: 999.99,
  inStock: true,
  features: ["5G", "A15 Bionic chip", "Super Retina XDR display"],
};

app.get("/product", (req, res) => {
  res.send(product);
});
