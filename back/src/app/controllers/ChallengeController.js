class ChallengeController {
  constructor() {
    // -
  }

  async index(req, res) {
    // get user skills
    // get story questions
    // build challenges based on skill levels

    return res.json({
      challenges: [
        {
          question: "Qual personagem que virou a Lua?",
          answer: "Indiozinho",
          alternative: "Naiá",
        },
        {
          question: "Qual é a flor preferida da Naiá?",
          answer: "Rosas",
          alternative: "Margaridas",
        },
      ],
    });
  }
}

module.exports = new ChallengeController();
