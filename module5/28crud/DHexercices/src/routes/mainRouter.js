const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get("/list", controller.list);
router.get("/search", controller.search);
router.get("/register", controller.register);
router.post("/register", controller.create);
router.get("/edit/:idUser", controller.edit);
router.put("/edit", (req, res) => {
  res.send("Send to Put");
});
router.delete("/delete/:idUser", (req, res) => {
  res.send("Send to delete");
});
module.exports = router;
