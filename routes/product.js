const Router = require("express").Router();
const ProductController = require("../controllers/product");

Router.route("/").get(ProductController.getProducts);

Router.route("/:id").get(ProductController.findProductById);

Router.route("/").post(ProductController.createProduct);

Router.route("/:id").put(ProductController.updateProduct);

Router.route("/:id").delete(ProductController.deleteProduct);

module.exports = Router;
