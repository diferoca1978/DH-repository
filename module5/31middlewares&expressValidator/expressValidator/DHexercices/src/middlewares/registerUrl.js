// todo: This is a global middleware, therefore it apply to all pages of our app.

const fs = require("fs");

function registertUrl(req, res, next) {
  fs.appendFileSync("regUrl.txt", "the user visited the page" + req.url); // with this line we are using the fs module to write into a txt file the url visited for the user.

  next(); // next is the callback that have the task of stack all middlewares to apply at the same require.
}

//* then don't forget export the middleware.

module.exports = registertUrl;

//* finally we need to go to our entry point for call the middleware and use it. --> go to app,js.
