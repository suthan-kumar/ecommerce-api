const Router = require("express").Router();
const SubCategoryController = require("../controllers/sub-category");

Router.route("/").get(SubCategoryController.getSubCategories);

Router.route("/:id").get(SubCategoryController.findSubCategoryById);

Router.route("/").post(SubCategoryController.createSubCategory);

Router.route("/:id").put(SubCategoryController.updateSubCategory);

Router.route("/:id").delete(SubCategoryController.deleteSubCategory);

module.exports = Router;
