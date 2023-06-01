const express = require("express");
const app = express();
const routeMain = require("./routes/main");
const routeUser = require("./routes/users");

app.listen(3030, () => console.log("server running in the port 3030"));

app.use(express.static("public"));
app.use("/", routeMain);
/*app.use("/users", routeUser);*/
