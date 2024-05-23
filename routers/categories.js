const {
  sendCategoryCreated,
  sendAllCategories,
} = require(" .. /controllers/categories");
const {
  findAllCategories,
  createCategory,
} = require(" .. /middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated,
  checkEmptyName
);
categoriesRouter.put(
  "/categories/:id",
  updateCategory,
  sendCategoryUpdated,
  checkEmptyName
);
module.exports = categoriesRouter;
