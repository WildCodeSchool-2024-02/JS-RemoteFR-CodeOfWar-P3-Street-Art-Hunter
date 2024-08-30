const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async create(artwork) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, location, image_url, author, isValidated, style_id, city_id, user_id) values (?, ?, ?, ?, ?, ?,?, ?, ?)`,
      [
        artwork.title,
        artwork.description,
        artwork.location,
        artwork.image_url,
        artwork.author,
        artwork.isValidated,
        artwork.style_id,
        artwork.city_id,
        artwork.user_id,
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
}

module.exports = ArtworkRepository;
