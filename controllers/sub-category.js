const createHttpError = require("http-errors");
const SubCategory = require("../models/sub-category");

exports.getSubCategories = async (req, res, next) => {
  try {
    const subCategories = await SubCategory.find();
    if (!subCategories) {
      return next(createHttpError(404, "SubCategories not found."));
    }
    res.status(200).send(subCategories);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.findSubCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findById(id);
    if (!subCategory) {
      return next(createHttpError(404, "SubCategory not found."));
    }
    res.status(200).send(subCategory);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const subCategory = await new SubCategory(data).save();
    if (!subCategory) {
      return next(createHttpError(404, "SubCategory not found."));
    }
    res.status(201).send(subCategory);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.updateSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const subCategory = await SubCategory.findByIdAndUpdate(id, data, { new: true });
    if (!subCategory) {
      return next(createHttpError(404, "SubCategory not found."));
    }
    res.status(200).send(subCategory);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.deleteSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await SubCategory.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    next(createHttpError(400, error));
  }
};
