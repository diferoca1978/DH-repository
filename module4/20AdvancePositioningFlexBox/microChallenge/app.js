const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => "server is running in the 3030 port");

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});
