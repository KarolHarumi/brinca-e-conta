class PopularStoriesController {
  constructor() {
    // -
  }

  async index(req, res) {
    return res.json({ message: "Ok" });
  }
}

module.exports = new PopularStoriesController();
