module.exports = {
  index: (req, res) => {
    res.render("index");
  },

  /*------------------------
  -----PROCESS WITH GET-----
  ------------------------*/

  list: (req, res) => {
    let users = [
      { id: 1, name: "John" },
      { id: 2, name: "Emily" },
      { id: 3, name: "Michael" },
      { id: 4, name: "Sophia" },
      { id: 5, name: "William" },
    ];
    res.render("userList", { users: users });
  },
  search: (req, res) => {
    let searching = req.query.search; //* The most important thing in this line is the possibility of catch the information that have the query string through the property (req.query), the value after correspond to the name we've given to the input field onto form.

    let users = [
      { id: 1, name: "John" },
      { id: 2, name: "Emily" },
      { id: 3, name: "Michael" },
      { id: 4, name: "Sophia" },
      { id: 5, name: "William" },
    ];

    let usersResult = [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].name.includes(searching)) {
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
    res.redirect("/list"); //* with this line we are redirecting to list view
  },

  /*------------------------
  -----PROCESS WITH PUT-----
  ------------------------*/

  edit: (req, res) => {
    let idUser = req.params.idUser;

    let users = [
      { id: 1, name: "John" },
      { id: 2, name: "Emily" },
      { id: 3, name: "Michael" },
      { id: 4, name: "Sophia" },
      { id: 5, name: "William" },
    ];
    let userToEdit = users[idUser];
    res.render("userEdit", { userToEdit: userToEdit });
  },
};
