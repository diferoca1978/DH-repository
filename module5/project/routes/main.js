const express = require("express");
const router = express.Router();
const controllers = require("../controllers/mainController");

router.get("/", controllers.index);

module.exports = router;
