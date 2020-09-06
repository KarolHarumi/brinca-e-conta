const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

class SessionController {
  constructor(UserService) {
    this.UserService = UserService;
  }

  async store(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.UserService.getByEmail(email);

      if (!user) return res.status(401).json({ error: "User not found" });

      if (!(await this.UserService.checkPassword(password, user.password_hash)))
        return res.status(401).json({ error: "Password does not match" });

      const { id, name } = user;

      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (err) {
      return res.status(500).json({
        error: `internal error: ${JSON.stringify(err.stack ? err.stack : err)}`,
      });
    }
  }
}

module.exports = SessionController;
