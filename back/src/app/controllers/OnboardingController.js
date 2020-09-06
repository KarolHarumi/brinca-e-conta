class OnboardingController {
  constructor() {
    // -
  }

  async index(req, res) {
    return res.json({ message: "Ok" });
  }
}

module.exports = new OnboardingController();
