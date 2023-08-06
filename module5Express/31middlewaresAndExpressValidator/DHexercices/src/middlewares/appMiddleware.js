const fs = require('fs'); // first we require tha package fs because we need to write a register of each view visited.

function appMiddleware(req, res, next) {
	fs.appendFileSync('record.txt', 'created a register by the page' + req.url);
	next();
}

module.exports = appMiddleware;
