const path = require("path");

const controller = {
  index: (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
  },
  about: (req, res) => {
    res.sendFile(path.resolve("./views/about.html"));
  },
};

module.exports = controller;
