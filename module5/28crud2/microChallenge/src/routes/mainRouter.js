const path = require("path");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const controller = require("../controllers/mainController");

const multerDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images"));
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
router.get("/", controller.index);
router.get("/detalle/:id", controller.detalle);
// FORM CREATE
router.get("/products/create", controller.create);
router.post("/products", fileUpload.single("image"), controller.processCreate);

// FORM EDIT
router.get("/products/edit/:id", controller.edit);
router.put("/products/:id", controller.editProcess);

// DELETE
router.delete("/products/:id", controller.deleteProcess);

module.exports = router;
