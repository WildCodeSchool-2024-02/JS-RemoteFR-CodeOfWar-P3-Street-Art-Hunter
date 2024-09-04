const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, artwork_id ) values (?, ?)`,
      [favorite.user_id, favorite.artwork_id]
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

  async update(favorite) {
    const [result] = await this.database.query(
      `update ${this.table} set user_id = ?, artwork_id = ?`,
      [favorite.user_id, favorite.artwork_id]
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

module.exports = FavoriteRepository;
