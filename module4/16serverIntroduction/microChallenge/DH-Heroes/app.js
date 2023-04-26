const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3030, () => {
  console.log("Server running in the 3030 port");
});

app.get("/", (req, res) => {
  let indexPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(indexPath);
});

app.get("/", (req, res) => {
  let babbagePath = path.resolve(__dirname, "./views/babbage.html");
  res.sendFile(babbagePath);
});

app.get("/berners-lee", (req, res) => {
  let bernersPath = path.resolve(__dirname, "./views/berners-lee.html");
  res.sendFile(bernersPath);
});

app.get("/clarke", (req, res) => {
  let clarkePath = path.resolve(__dirname, "./views/clarke.html");
  res.sendFile(clarkePath);
});

app.get("/hamilton", (req, res) => {
  let hamiltonPath = path.resolve(__dirname, "./views/hamilton.html");
  res.sendFile(hamiltonPath);
});

app.get("/hopper", (req, res) => {
  let hooperPath = path.resolve(__dirname, "./views/hopper.html");
  res.sendFile(hooperPath);
});

app.get("/lovelace", (req, res) => {
  let lovelacePath = path.resolve(__dirname, "./views/lovelace.html");
  res.sendFile(lovelacePath);
});

app.get("/turing", (req, res) => {
  let turingPath = path.resolve(__dirname, "./views/turing.html");
  res.sendFile(turingPath);
});
