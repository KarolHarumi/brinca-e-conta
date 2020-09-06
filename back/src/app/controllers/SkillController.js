class SkillController {
  constructor(SkillService) {
    this.SkillService = SkillService;
  }

  async update(req, res) {
    try {
      const { userId } = req;

      if (userId != req.params.id)
        return res.status(401).json({ error: "Unauthorized" });

      await this.SkillService.updateSkills(userId, req.body);

      return res.status(201).json();
    } catch (err) {
      return res.status(500).json({
        error: `internal error: ${JSON.stringify(err.stack ? err.stack : err)}`,
      });
    }
  }
}

module.exports = SkillController;
