const { Router } = require("express");

const UserService = require("./app/services/UserService");
const SkillService = require("./app/services/SkillService");
const StoryService = require("./app/services/StoryService");

const UserController = require("./app/controllers/UserController");
const userController = new UserController(UserService, SkillService);
const SessionController = require("./app/controllers/SessionController");
const sessionController = new SessionController(UserService);
const StoryController = require("./app/controllers/StoryController");
const OnboardingController = require("./app/controllers/OnboardingController");
const onboardingController = new OnboardingController(StoryService);
const SkillController = require("./app/controllers/SkillController");
const skillController = new SkillController(SkillService);
const ChallengeController = require("./app/controllers/ChallengeController");

const authMiddleware = require("./app/middlewares/auth");

const routes = new Router();

routes.post("/users", (req, res) => userController.store(req, res));
routes.post("/login", (req, res) => sessionController.store(req, res));
routes.get("/onboarding/:age", (req, res) =>
  onboardingController.index(req, res)
);

routes.use(authMiddleware);

routes.put("/users/:id/skills", (req, res) => skillController.update(req, res));
routes.get("/stories", (req, res) => StoryController.index(req, res));
routes.get("/stories/:id", (req, res) => StoryController.show(req, res));
routes.get("/stories/:id/challenges", (req, res) =>
  ChallengeController.index(req, res)
);

module.exports = routes;
