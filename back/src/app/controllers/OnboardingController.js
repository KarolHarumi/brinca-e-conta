class OnboardingController {
  constructor(StoryService) {
    this.StoryService = StoryService;
  }

  async index(req, res) {
    try {
      const { age } = req.params;
      const list = await this.StoryService.getOnboardingStories();
      const response = list.filter((story) =>
        story.age.find((item) => item == age)
      );

      return res.json(
        response.map((item) => {
          const { story_id, title, cover_img_path } = item;

          return { story_id, title, cover_img_path };
        })
      );
    } catch (err) {
      return res.status(500).json({
        error: `internal error: ${JSON.stringify(err.stack ? err.stack : err)}`,
      });
    }
  }
}

module.exports = OnboardingController;
