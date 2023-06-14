const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get("/detalle/:id", controller.detail);

module.exports = router;
