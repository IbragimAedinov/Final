const category = require("../models/category");

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await category.find({});
  next();
};

const findCategoryById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (err) {
    res.status(404).send({ message: "User not found" });
  }
};
const createCategory = async (req, res, next) => {
  try {
    req.category = await categories.create(req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: "Error creating category" });
  }
};

const checkEmptyName = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Введите название категории" });
  } else {
    next();
  }
};
const deleteCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).send({ message: "Error deleting category" });
  }
};
module.exports = {
  findAllCategories,
  findCategoryById,
  createCategory,
  checkEmptyName,
  deleteCategory,
};
