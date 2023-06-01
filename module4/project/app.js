const express = require("express");
const app = express();
app.use(express.static("public"));
const routeMain = require("./routes/main.js");

app.listen(3030, () => {
  console.log("server running in the port 3030");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
