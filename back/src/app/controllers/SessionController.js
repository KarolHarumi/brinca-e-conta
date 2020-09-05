class SessionController {
  constructor() {
    // -
  }

  async store(req, res) {
    return res.json({ message: "Ok" });
  }
}

module.exports = new SessionController();
