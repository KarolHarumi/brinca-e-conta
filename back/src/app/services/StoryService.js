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

  async getStoryById(id) {
    const story = database.get("stories").find((item) => item.id == id);

    story.content = database
      .get("stories_content")
      .filter((item) => item.story_id == id)
      .map((item) => {
        const { text_content, background_img_path, sort_order } = item;

        return { text_content, background_img_path, sort_order };
      })
      .sort((a, b) =>
        a.sort_order < b.sort_order ? -1 : a.sort_order > b.sort_order ? 1 : 0
      );

    return story;
  }
}

module.exports = new StoryService();
