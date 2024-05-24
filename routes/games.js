const {
  sendAllGames,
  sendGameCreated,
  sendGameDeleted,
} = require("../controllers/games");
const { deleteGame } = require("../middlewars/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
module.exports = gamesRouter;
