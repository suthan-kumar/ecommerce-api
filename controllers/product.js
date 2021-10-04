const createHttpError = require("http-errors");
const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
  try {
    const { page, size } = req.page;
    const skip = Math.abs((page - 1) * size);
    const products = await Product.find().skip(skip).limit(size);
    if (!products) {
      return next(createHttpError(404, "Products not found."));
    }
    res.status(200).send(products);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return next(createHttpError(404, "Product not found."));
    }
    res.status(200).send(product);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.searchProducts = async (req, res, next) => {
  try {
    const { query } = req.params;
    const products = await Product.find({
      name: { $regex: query, $options: "i" },
    });
    if (!products) {
      return next(createHttpError(404, "Products not found."));
    }
    res.status(200).send(products);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await new Product(data).save();
    if (!product) {
      return next(createHttpError(404, "Product not found."));
    }
    res.status(201).send(product);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    if (!product) {
      return next(createHttpError(404, "Product not found."));
    }
    res.status(200).send(product);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    next(createHttpError(400, error));
  }
};
