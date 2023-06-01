const express = require("express");
const app = express();
const mainRoute = require("./routes/main");
const usersRoute = require("./routes/users");

app.use(express.static("public"));

app.listen(3030, () => console.log("server running in the port 3030"));

app.use("/", mainRoute);
app.use("/", usersRoute);
