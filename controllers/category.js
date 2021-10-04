const createHttpError = require("http-errors");
const Category = require("../models/category");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return next(createHttpError(404, "Categories not found."));
    }
    res.status(200).send(categories);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.findCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return next(createHttpError(404, "Category not found."));
    }
    res.status(200).send(category);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const category = await new Category(data).save();
    if (!category) {
      return next(createHttpError(404, "Category not found."));
    }
    res.status(201).send(category);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await Category.findByIdAndUpdate(id, data, { new: true });
    if (!category) {
      return next(createHttpError(404, "Category not found."));
    }
    res.status(200).send(category);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    next(createHttpError(400, error));
  }
};
