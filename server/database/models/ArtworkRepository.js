const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async create(artwork) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, location, city, create_date, image_url, author, isValidated) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.description,
        artwork.location,
        artwork.city,
        artwork.create_date,
        artwork.image_url,
        artwork.author,
        artwork.isValidated,
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
