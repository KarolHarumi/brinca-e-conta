class StoryService {
  constructor() {
    // -
  }

  async getOnboardingStories() {
    const stories = database.get("onboarding");

    return stories;
  }

  async getStories() {
    const stories = database.get("stories");

    return stories;
  }
}

module.exports = new StoryService();
