class UserController {
  constructor(UserService) {
    this.UserService = UserService;
  }

  async store(req, res) {
    try {
      const userExists = await this.UserService.getByEmail(req.body.email);

      if (userExists)
        return res.status(400).json({ error: "User already exists" });

      const { id, name, email } = await this.UserService.register(req.body);

      return res.json({ id, name, email });
    } catch (err) {
      return res
        .status(500)
        .json({ error: JSON.stringify(err.stack ? err.stack : err) });
    }
  }
}

module.exports = UserController;
