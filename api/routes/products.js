const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const ProductController = require('../controllers/products')

const checkAuth = require("../middleware/check-auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") +
        "-" +
        file.originalname.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9.-]/g, "")
    );
  },
});

const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const Product = require("../models/product");

router.get("/", ProductController.products_get_all );

router.post("/", checkAuth,  upload.single("productImage"),ProductController.products_create_product );

router.get("/:productId", checkAuth,ProductController.products_get_one);

router.patch("/:productId",checkAuth, ProductController.products_get_update);

router.delete("/:productId",checkAuth,ProductController.products_get_delete);

module.exports = router;
