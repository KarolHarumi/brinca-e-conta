const moment = require("moment");
const bcrypt = require("bcryptjs");

class UserService {
  constructor() {
    // -
  }

  _calculateAge(birthDate) {
    return moment().diff(birthDate, "years");
  }

  async _generatePassword(password) {
    return await bcrypt.hash(password, 8);
  }

  async getUserByEmail(email) {
    const users = database.get("users");

    return users.find((user) => user.email === email);
  }

  async checkPassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }

  async registerUser(newUser) {
    newUser.password_hash = await this._generatePassword(newUser.password);
    delete newUser.password;

    const response = database.set("users", newUser);

    return { ...response, age: this._calculateAge(newUser.birth_date) };
  }
}

module.exports = new UserService();
