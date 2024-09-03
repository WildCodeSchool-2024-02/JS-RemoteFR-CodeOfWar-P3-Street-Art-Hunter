const AbstractRepository = require("./AbstractRepository");

class cityRepository extends AbstractRepository {
  constructor() {
    super({ table: "city" });
  }

  async create(city) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [city.name]
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

  async update(city) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [city.name, city.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = cityRepository;
