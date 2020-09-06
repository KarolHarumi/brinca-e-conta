class AnswerController {
  constructor() {
    // -
  }

  async store(req, res) {
    return res.json({ message: "Ok" });
  }
}

module.exports = new AnswerController();
