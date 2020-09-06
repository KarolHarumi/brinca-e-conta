class SkillService {
  constructor() {
    // -
  }

  _calculateNewLevel(levelId, answers) {
    levelId += -answers.errors + (answers.hitted ? 1 : -1);

    if (levelId < 1) levelId = 1;
    else if (levelId > 6) levelId = 6;

    return levelId;
  }

  async registerInitialSkillLevel(userId, age) {
    const skills = database.get("skills");
    const ageLevel = database.get("age_level");
    const { level_id } = ageLevel.find((item) => item.age == age);

    for (let key in skills) {
      let current = skills[key];

      database.set("user_skill_level", {
        user_id: userId,
        skill_id: current.id,
        level_id,
      });
    }

    return;
  }

  async updateSkills(userId, skills) {
    const userSkills = database
      .get("user_skill_level")
      .filter((item) => item.user_id === userId);

    for (let key in userSkills) {
      let current = userSkills[key];
      const { answers } = skills.find(
        (item) => item.skill_id === current.skill_id
      );

      current.level_id = this._calculateNewLevel(current.level_id, answers);

      database.set("user_skill_level", current);
    }

    return;
  }
}

module.exports = new SkillService();
