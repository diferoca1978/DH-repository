const fs = require("fs");
const { validationResult } = require("express-validator"); // in this line we require the property validation result of express-validator, so it can us use the errors to continue the validation process onto method createProcess below.
const path = require("path");
const rutaArchivo = path.resolve("./src/database/products.json");
const platos = JSON.parse(fs.readFileSync(rutaArchivo));
const rutaUsersjson = path.resolve("./src/dataBase/users.json");
const users = JSON.parse(fs.readFileSync(rutaUsersjson));

module.exports = {
  index: (req, res) => {
    const sinBorrados = platos.filter((plato) => plato.borrado != true);
    return res.render("index", { menu: sinBorrados });
  },
  detalle: (req, res) => {
    const platoEncontrado = platos.find((row) => row.id == req.params.id);
    if (platoEncontrado && platoEncontrado.borrado != true)
      return res.render("detalleMenu", { plato: platoEncontrado });
    else return res.send("ERROR 404 NOT FOUND");
  },
  create: (req, res) => {
    return res.render("formCreate");
  },
  processCreate: (req, res) => {
    let errors = validationResult(req); // with the variable errors we store the property validationResult passing the parameter req.
    if (errors.isEmpty()) {
      // here we are passing a conditional to create a product if there isn't errors.
      let productoNuevo = {
        id: platos.length + 1,
        nombre: req.body.name,
        detalle: req.body.desc,
        precio: req.body.price,
        img: req.file.filename,
        borrado: false,
      };
      fs.writeFileSync(
        rutaArchivo,
        JSON.stringify([...platos, productoNuevo], null, 2),
        "utf-8"
      );
      return res.redirect("/");
    } else {
      return res.render(
        "formCreate", // otherwise come back to the form,
        {
          error: errors.array(), //also we need to pass to the view what error is? and, we can do this passing an object literal whit the error property, so it will use the variable errors with the method array(). Continue in the formCreate.ejs.
          old: req.body, // Whit this line we can keep the data onto the field although the other fiels haven't filled yet. Continue in the formCreate.ejs.
        }
      );
    }
  },
  edit: (req, res) => {
    const platoEncontrado = platos.find((row) => row.id == req.params.id);
    if (platoEncontrado)
      return res.render("formEdit", { plato: platoEncontrado });
    else return res.send("ERROR 404 NOT FOUND");
  },
  editProcess: (req, res) => {
    const platoEncontrado = platos.find((row) => row.id == req.params.id);
    platoEncontrado.nombre = req.body.name;
    platoEncontrado.detalle = req.body.desc;
    platoEncontrado.precio = req.body.price;
    fs.writeFileSync(rutaArchivo, JSON.stringify(platos, null, 2), "utf-8");
    return res.redirect("/");
  },
  login: (req, res) => {
    res.render("login");
  },
  loginProcess: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      for (let i = 0; i < users.length; i++) {
        if (users[i] == req.body.email) {
          if (bcryp.compareSync(req.body.pass, users[i].pass)) {
            let userToLogged = users[i];
            break;
          }
        }
      }
      if (userToLogged == undefined) {
        return res.render("login", { error: [{ msg: "Invalid data" }] });
      }
      req.session.userLogged = userToLogged;
    } else {
      return res.render("login", { error: errors.errors });
    }
  },
  deleteProcess: (req, res) => {
    const platoEncontrado = platos.find((row) => row.id == req.params.id);
    platoEncontrado.borrado = true;
    fs.writeFileSync(rutaArchivo, JSON.stringify(platos, null, 2), "utf-8");
    return res.redirect("/");
  },
};

console.log(new Date());
