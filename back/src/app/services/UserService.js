const bcrypt = require("bcryptjs");

class UserService {
  constructor() {
    // -
  }

  async getByEmail(email) {
    const users = database.get("users");

    return users.find((user) => user.email === email);
  }

  async register(newUser) {
    newUser.password_hash = await bcrypt.hash(newUser.password, 8);
    delete newUser.password;

    return database.set("users", newUser);
  }
}

module.exports = new UserService();
