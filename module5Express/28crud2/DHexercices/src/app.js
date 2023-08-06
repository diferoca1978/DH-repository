const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");

const mainRouter = require("./routes/mainRouter");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views", path.resolve(__dirname, "../views")); //*with this line we are indicating the whole path to the views folder.
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("server running in the 3000 port");
});

app.use("/", mainRouter);
