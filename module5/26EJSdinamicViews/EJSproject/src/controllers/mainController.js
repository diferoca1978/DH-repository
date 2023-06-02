//* The first view

/*If we're use EJS we don't need use the command (res.send or res.sendFile) 
because with EJS we can use the command ( res.render) it already doesn't 
need the hole path, only need the name of the view instead.  

const controller = {
  index: (req, res) => {
    res.render("home");
  },
};*/
/*--------------------------------------------------------------------------*/

//* Sharing parameters

/* Well EJS even afford us using a second parameter onto the res.render 
and it can be an object literal that have the task to send the data 
that we can show in the view */

let movies = ["The king speech", "Untouchable", "American underdog"];

const controller = {
  index: (req, res) => {
    res.render("index");
  },
  showMovies: (req, res) => {
    res.render("movies", {
      list: movies,
      gender: "Biographical",
    });
  },
};

module.exports = controller;
