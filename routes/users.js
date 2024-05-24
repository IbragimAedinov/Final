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
const { hashPassword } = require("../middlewars/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  createUser,
  sendUserCreated,
  checkEmptyNameAndEmail,
  hashPassword
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
module.exports = usersRouter;
