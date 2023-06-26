// todo: This is a route middleware, therefore it apply only the route/s that we indicated.

const fs = require("fs");

function registerOnlyRoute(req, res, next) {
  fs.appendFileSync(
    "onlyRoute.txt",
    "created a new register through the page" + req.url
  ); // with this line we are using the fs module to write into a txt file the url visited for the user.

  next(); // next is the callback that have the task of stack all middlewares to apply at the same require.
}

//* then don't forget export the middleware.

module.exports = registerOnlyRoute;

//* finally we need to go to the route and use it. --> go to route with method post.
