const Router = require("express").Router();
const CategoryController = require("../controllers/category");

Router.route("/").get(CategoryController.getCategories);

Router.route("/:id").get(CategoryController.findCategoryById);

Router.route("/").post(CategoryController.createCategory);

Router.route("/:id").put(CategoryController.updateCategory);

Router.route("/:id").delete(CategoryController.deleteCategory);

module.exports = Router;
