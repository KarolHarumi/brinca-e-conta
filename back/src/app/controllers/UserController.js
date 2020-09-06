class UserController {
  constructor(UserService, SkillService) {
    this.UserService = UserService;
    this.SkillService = SkillService;
  }

  async store(req, res) {
    try {
      const userExists = await this.UserService.getUserByEmail(req.body.email);

      if (userExists)
        return res.status(400).json({ error: "User already exists" });

      const { id, name, email, age } = await this.UserService.registerUser(
        req.body
      );

      await this.SkillService.registerInitialSkillLevel(id, age);

      return res.json({ id, name, email, age });
    } catch (err) {
      return res.status(500).json({
        error: `internal error: ${JSON.stringify(err.stack ? err.stack : err)}`,
      });
    }
  }
}

module.exports = UserController;
