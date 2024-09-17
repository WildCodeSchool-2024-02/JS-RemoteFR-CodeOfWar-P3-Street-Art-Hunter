const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname,lastname, pseudo, mail, hashed_password, avatar) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.mail,
        user.hashed_password,
        user.avatar,
      ]
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

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, pseudo = ?, mail =?, hashed_password = ?, avatar = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.mail,
        user.hashed_password,
        user.avatar,
        user.id,
      ]
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

  async readByEmailWithPassword(mail) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where mail = ?`,
      [mail]
    );
    return rows[0];
  }

  async readAllScoreByOrder(where) {
    if (!where) {
      const [rows] = await this.database.query(
        `SELECT u.pseudo, u.score, ROW_NUMBER() OVER (ORDER BY u.score DESC) AS ranking
            FROM user u ORDER BY u.score DESC`
      );
      return rows;
    }
    const [rows] = await this.database.query(
      `SELECT pseudo, score FROM ${this.table} WHERE pseudo LIKE ? ORDER BY score DESC`,
      [`${where}%`]
    );
    return rows;
  }
}

module.exports = UserRepository;
