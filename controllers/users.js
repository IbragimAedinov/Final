const sendAllUsers = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.categoriesArray));
};
const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Пользователь обновлен" }));
};
const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
module.exports = {
  sendAllUsers,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
};
