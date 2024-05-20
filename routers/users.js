const sendAllCategories = require("../controllers/categories");
const findAllCategories = require("../middlewars/categories");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllCategories, sendAllCategories);

module.exports = usersRouter;
