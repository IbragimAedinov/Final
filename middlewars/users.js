const findAllUsers = async (req, res, next) => {
  req.usersArray = await user.find({});
  next();
};
const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (err) {
    res.status(404).send({ message: "User not found" });
  }
};
const createUser = async (req, res, next) => {
  try {
    req.user = await user.create(req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: "Error creating user" });
  }
};
const checkEmptyNameAndEmail = async (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.status(400).send({ message: "Введите имя и email" });
  } else {
    next();
  }
};
const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).send({ message: "Error deleting user" });
  }
};
module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  checkEmptyNameAndEmail,
  deleteUser,
};
