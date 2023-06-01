const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usersController");

router.get("/login", controllers.login);
router.get("/register", controllers.register);

module.exports = router;
