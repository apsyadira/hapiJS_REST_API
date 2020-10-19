const express = require("express");
const router = express.Router();
const ProductController = require("../app/controller/ProductController");

router.get("/product", ProductController);

module.exports = router;
