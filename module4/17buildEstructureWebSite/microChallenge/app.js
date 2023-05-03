const express = require("express");
const app = express();
const path = require("path");

const publicpath = path.resolve(__dirname, "./public");
app.use(express.static(publicpath));

app.listen(3000, () => {
  console.log("server running in the 3000 port");
});

app.get("/", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/home.html");
  res.sendFile(htmlPath);
});
