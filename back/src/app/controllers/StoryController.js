class StoryController {
  constructor(StoryService) {
    this.StoryService = StoryService;
  }

  async index(req, res) {
    try {
      const stories = await this.StoryService.getStories();

      return res.json(stories);
    } catch (err) {
      return res.status(500).json({
        error: `internal error: ${JSON.stringify(err.stack ? err.stack : err)}`,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const story = await this.StoryService.getStoryById(id);

      return res.json(story);
    } catch (err) {
      return res.status(500).json({
        error: `internal error: ${JSON.stringify(err.stack ? err.stack : err)}`,
      });
    }
  }
}

module.exports = StoryController;
