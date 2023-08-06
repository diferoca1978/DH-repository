const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running in the 3000 port");
});

/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/position.html"));
});*/
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/test.html"));
});
