const express = require("express");
const {
  getAllProducts,
  createAllProducts,
} = require("../controller/control-products");
const router = express.Router();

router.get("/", getAllProducts);

router.post("/", createAllProducts);
module.exports = router;
