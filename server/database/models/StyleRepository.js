const AbstractRepository = require("./AbstractRepository");

class StyleRepository extends AbstractRepository {
  constructor() {
    super({ table: "style" });
  }

  async create(style) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description) values (?, ?)`,
      [style.name, style.description]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = StyleRepository;
