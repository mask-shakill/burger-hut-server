const Products = require("../model/product-model");

const getAllProducts = (req, res) => {
  res.send("Get All Products..");
};

const createAllProducts = async (req, res, next) => {
  try {
    const saveProducts = await Products.create(req.body);
    res.send(saveProducts);
    console.log("Products create successfully....");
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
module.exports = { getAllProducts, createAllProducts };
