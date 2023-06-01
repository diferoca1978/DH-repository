const path = require("path");

const controller = {
  index: (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
  },
};

module.exports = controller;
