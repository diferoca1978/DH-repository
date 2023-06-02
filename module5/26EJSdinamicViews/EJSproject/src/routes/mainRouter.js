const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get("/showMovies", controller.showMovies);

module.exports = router;
