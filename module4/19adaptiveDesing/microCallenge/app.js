const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => {
  console.log("server running in the 3030 port");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
