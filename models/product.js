const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "SubCategory",
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
