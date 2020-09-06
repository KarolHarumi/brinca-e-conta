const path = require("path");
const fs = require("fs");

class Database {
  constructor() {
    // -
  }

  get(section) {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json")));

    return section ? db[section] : db;
  }

  set(section, data) {
    const db = this.get();
    let response;

    if (data.id) {
      const index = db[section].findIndex((item) => item.id === data.id);

      response = data;

      db[section][index] = data;
    } else {
      response = { id: db[section].length + 1, ...data };

      db[section].push(response);
    }

    fs.writeFileSync(path.resolve(__dirname, "db.json"), JSON.stringify(db));

    return response;
  }
}

module.exports = new Database();
