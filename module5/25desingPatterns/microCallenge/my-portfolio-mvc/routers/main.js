const express = require("express");
const router = express.Router();
const controllers = require("../controllers/mainController");

router.get("/", controllers.index);

router.get("/about", controllers.about);

module.exports = router;
