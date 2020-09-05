class StoriesController {
  constructor() {
    // -
  }

  async index(req, res) {
    return res.json({ message: "Ok" });
  }

  async show(req, res) {
    return res.json({ message: "Ok" });
  }
}

module.exports = new StoriesController();
