const { Router } = require("express");

const UserService = require("./app/services/UserService");
const StoryService = require("./app/services/StoryService");

const UserController = require("./app/controllers/UserController");
const userController = new UserController(UserService);
const SessionController = require("./app/controllers/SessionController");
const sessionController = new SessionController(UserService);
const StoryController = require("./app/controllers/StoryController");
const OnboardingController = require("./app/controllers/OnboardingController");
const onboardingController = new OnboardingController(StoryService);
const AnswerController = require("./app/controllers/AnswerController");
const ChallengeController = require("./app/controllers/ChallengeController");

const routes = new Router();

routes.post("/users", (req, res) => userController.store(req, res));
routes.post("/login", (req, res) => sessionController.store(req, res));
routes.get("/onboarding/:age", (req, res) =>
  onboardingController.index(req, res)
);

// Authenticated

routes.post("/answers", (req, res) => AnswerController.store(req, res));
routes.get("/stories", (req, res) => StoryController.index(req, res));
routes.get("/stories/:id", (req, res) => StoryController.show(req, res));
routes.get("/stories/:id/challenges", (req, res) =>
  ChallengeController.index(req, res)
);

module.exports = routes;
