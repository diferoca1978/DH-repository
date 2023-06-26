const fs = require("fs");

module.exports = {
  index: (req, res) => {
    res.render("index");
  },

  /*------------------------
  -----PROCESS WITH GET-----
  ------------------------*/

  list: (req, res) => {
    let jsonFile = fs.readFileSync("users.json", "utf-8");

    let users = JSON.parse(jsonFile);

    res.render("userList", { users: users });
  },
  search: (req, res) => {
    let searching = req.query.search; //* The most important thing in this line is the possibility of catch the information that have the query string through the property (req.query), the value after correspond to the name we've given to the input field onto form.

    let jsonFile = fs.readFileSync("users.json", "utf-8");

    let users = JSON.parse(jsonFile);

    let usersResult = [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].nombre.includes(searching)) {
        usersResult.push(users[i]);
      }
    }
    res.render("usersResults", { usersResult: usersResult });
  },

  /*------------------------
  -----PROCESS WITH POST-----
  ------------------------*/

  register: (req, res) => {
    res.render("register");
  },
  create: (req, res) => {
    let user = {
      nombre: req.body.nombre, //* Through req.body we can store the information that give us the user.
      email: req.body.email,
      edad: req.body.edad,
    };

    /*----------------------
  -------STORE DATA-------
  ------------------------*/

    //* First: we must read the data already exist onto the file users.json!!
    let fileUser = fs.readFileSync("users.json", "utf-8");
    //* Second: we need to indicate if fileUser is empy, the array jsonUsers continue empy.
    let jsonUsers;
    if (fileUser == "") {
      jsonUsers = [];
    } //* otherwise unzip fileUser.
    else {
      jsonUsers = JSON.parse(fileUser);
    }
    //* Next we need to indicate add the new user at the final of jsonUsers array.
    jsonUsers.push(user);

    //* Finally: we need to write onto user.json the new data, through transform
    //* the data again in JSON.
    let userJSON = JSON.stringify(jsonUsers);
    fs.writeFileSync("users.json", userJSON);

    res.redirect("/list"); //* with this line we are redirecting to list view
  },

  /*------------------------
  -----PROCESS WITH PUT-----
  ------------------------*/

  // todo Need to solve how put id onto object without a fiel onto create method.

  edit: (req, res) => {
    let idUser = req.params.idUser;

    let jsonFile = fs.readFileSync("users.json", "utf-8");

    let users = JSON.parse(jsonFile);

    let userToEdit = users[idUser];
    res.render("userEdit", { userToEdit: userToEdit });
  },
};
