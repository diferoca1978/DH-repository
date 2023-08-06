const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const mainRouter = require("./routes/mainRouter");

// REQUIRE MIDDLEWARE LEVEL APP
const appMiddleware = require("./middlewares/appMiddleware");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({ secret: "secret message", resave: false, saveUninitialized: true })
); // Session receive an object with a property secret wich afford us that the information stay only in our app.

// USE MIDDLEWARE LEVEL APP
app.use(appMiddleware);

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.use(mainRouter);
