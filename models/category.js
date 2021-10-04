const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
