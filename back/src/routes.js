const { Router } = require("express");

const UserService = require("./app/services/UserService");
const UserController = require("./app/controllers/UserController");
const userController = new UserController(UserService);
const SessionController = require("./app/controllers/SessionController");
const StoriesController = require("./app/controllers/StoriesController");
const PopularStoriesController = require("./app/controllers/PopularStoriesController");
const AnswersController = require("./app/controllers/AnswersController");
const ChallengesController = require("./app/controllers/ChallengesController");

const routes = new Router();

routes.post("/users", (req, res) => userController.store(req, res));
routes.post("/login", (req, res) => SessionController.store(req, res));
routes.get("/popular-stories/:age", (req, res) =>
  PopularStoriesController.index(req, res)
);

// Authenticated

routes.post("/answers", (req, res) => AnswersController.store(req, res));
routes.get("/stories", (req, res) => StoriesController.index(req, res));
routes.get("/stories/:id", (req, res) => StoriesController.show(req, res));
routes.get("/stories/:id/challenges", (req, res) =>
  ChallengesController.index(req, res)
);

module.exports = routes;
