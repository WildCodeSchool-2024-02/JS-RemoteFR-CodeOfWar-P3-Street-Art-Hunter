const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async create(artwork) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, lat, lon, image_url, author, style_id, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.description,
        artwork.lat,
        artwork.lon,
        artwork.image_url,
        artwork.author,
        artwork.style_id,
        artwork.user_id,
      ]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT artwork.id, artwork.title, artwork.description, artwork.lat, artwork.lon, artwork.create_date, artwork.image_url, artwork.author, artwork.isValidated, style.name as style, user.pseudo as pseudo
FROM ${this.table}
INNER JOIN style ON style.id= artwork.style_id
INNER JOIN user ON user.id = artwork.user_id 
where ${this.table}.id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByAdmin(id) {
    const [rows] = await this.database.query(
      `SELECT artwork.id, artwork.title, artwork.description, artwork.image_url, artwork.author, artwork.isValidated, style.name as style, city.name as city, user.pseudo as pseudo
  FROM ${this.table}
  INNER JOIN style ON style.id = artwork.style_id
  INNER JOIN city ON city.id = artwork.city_id
  INNER JOIN user ON user.id = artwork.user_id 
  WHERE artwork.isValidated = 0 AND ${this.table}.id = ?
  GROUP BY artwork.id, artwork.title, artwork.description, artwork.image_url, artwork.author, artwork.isValidated, style.name, city.name, user.pseudo`,
      [id]
    );

    return rows;
  }

  async readAllByAdmin() {
    const [rows] = await this.database.query(
      `SELECT artwork.id, artwork.title, artwork.description, artwork.image_url, artwork.author, artwork.isValidated, style.name as style, user.pseudo as pseudo
      FROM ${this.table}
      INNER JOIN style ON style.id = artwork.style_id
      INNER JOIN user ON user.id = artwork.user_id 
      WHERE artwork.isValidated = 0
      GROUP BY artwork.id, artwork.title, artwork.description, artwork.image_url, artwork.author, artwork.isValidated, style.name, user.pseudo
      ORDER BY artwork.create_date DESC`
    );
    return rows;
  }

  async readAll(where) {
    if (!where.q) {
      const [rows] = await this.database.query(`select * from ${this.table}`);
      return rows;
    }
    const [rows] = await this.database.query(
      `SELECT artwork.*, style.name as style FROM artwork JOIN style ON artwork.style_id=style.id where artwork.style_id = ?`,
      [where.q]
    );
    return rows;
  }

  async update(artwork) {
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, description = ?, isValidated = ?, lat = ?, lon = ?, image_url = ?, author = ?, style_id = ?  where id = ?`,
      [
        artwork.title,
        artwork.description,
        artwork.isValidated,
        artwork.lat,
        artwork.lon,
        artwork.image_url,
        artwork.author,
        artwork.style_id,
        artwork.id,
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
}

module.exports = ArtworkRepository;
