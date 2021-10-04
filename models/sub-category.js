const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubCategorySchema = Schema({
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
});

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
module.exports = SubCategory;
