class StoryService {
  constructor() {
    // -
  }

  async getOnboardingStories() {
    const stories = database.get("onboarding");

    return stories;
  }
}

module.exports = new StoryService();
