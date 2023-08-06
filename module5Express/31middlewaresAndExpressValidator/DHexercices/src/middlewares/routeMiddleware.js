const fs = require('fs'); // first we require tha package fs because we need to write a register of only the views that create something onto our page.

//* So this route may be used in the routes folder and, specifically onto the routes that create something.

function routeMiddleware(req, res, next) {
	fs.appendFileSync('recordRoute.txt', 'created a register to enter the page' + req.url);
	next();
}

module.exports = routeMiddleware;
