const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const gamesRouter = require("./routes/games");

const PORT = 3000;

const app = express();

app.use(
  bodyParser.json(),
  express.static(path.join(_dirname, "public")),
  usersRouter,
  categoriesRouter,
  gamesRouter
);
app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});