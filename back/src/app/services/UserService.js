const bcrypt = require("bcryptjs");

class UserService {
  constructor() {
    // -
  }

  async _generatePassword(password) {
    return await bcrypt.hash(password, 8);
  }

  async getByEmail(email) {
    const users = database.get("users");

    return users.find((user) => user.email === email);
  }

  async checkPassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }

  async register(newUser) {
    newUser.password_hash = await this._generatePassword(newUser.password);
    delete newUser.password;

    return database.set("users", newUser);
  }
}

module.exports = new UserService();
