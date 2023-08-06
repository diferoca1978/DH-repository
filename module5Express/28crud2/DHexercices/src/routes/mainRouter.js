const path = require("path");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const controller = require("../controllers/mainController");

const multerDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images"));
  },
  filename: function (req, file, cb) {
    let imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

const fileUpload = multer({ storage: multerDiskStorage });

router.get("/", controller.index);
router.get("/list", controller.list);
router.get("/search", controller.search);
router.get("/register", controller.register);
router.post("/register", fileUpload.single("photo"), controller.create);
router.get("/edit/:idUser", controller.edit);
router.put("/edit", (req, res) => {
  res.send("Send to Put");
});
router.delete("/delete/:idUser", (req, res) => {
  res.send("Send to delete");
});
module.exports = router;
