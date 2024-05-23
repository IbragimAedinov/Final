const {
  sendUserCreated,
  sendAllUsers,
  sendUserUpdated,
} = require(" .. /controllers/users");
const {
  findAllUsers,
  createUser,
  updateUser,
} = require(" .. /middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  createUser,
  sendUserCreated,
  checkEmptyNameAndEmail
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
module.exports = usersRouter;
