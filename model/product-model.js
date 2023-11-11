const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "please enter your price"],
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Products = mongoose.model("products", productsSchema);
module.exports = Products;
