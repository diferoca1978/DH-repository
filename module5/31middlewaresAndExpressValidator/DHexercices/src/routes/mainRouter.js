const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');

//* VALIDATION
// Through this line we require express-validator but, we don't need the complete module only the property body.
const { body } = require('express-validator');

//* VALIDATION PROCESS
// This process works as a middleware to. So the array can be use on the route that have the task of create something. (Check the route by post.)
const validateCreate = [
	body('name').notEmpty().withMessage('Required'),
	body('desc').notEmpty().withMessage('Required'),
	body('price').notEmpty().withMessage('Required'),
];

//* REQUIRE MIDDLEWARE LEVEL SPECIFIC ROUTE
// So this middleware must be used on the route that have the task of create something, just between the route and the controller. (Check the route by post.)

const routeMiddleware = require('../middlewares/routeMiddleware');

const controller = require('../controllers/mainController');

const multerDiskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../../public/images'));
	},
	filename: function (req, file, cb) {
		let imageName = Date.now() + path.extname(file.originalname);
		cb(null, imageName);
	},
});

const fileUpload = multer({
	storage: multerDiskStorage,
});

//
router.get('/', controller.index);
router.get('/detalle/:id', controller.detalle);

// FORM CREATE
router.get('/products/create', controller.create);
router.post(
	'/products',
	fileUpload.single('image'),
	routeMiddleware,
	validateCreate,
	controller.processCreate
);

// FORM EDIT
router.get('/products/edit/:id', controller.edit);
router.put('/products/:id', controller.editProcess);

// DELETE
router.delete('/products/:id', controller.deleteProcess);

module.exports = router;
