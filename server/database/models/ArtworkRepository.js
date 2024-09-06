const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    super({ table: "artwork" });
  }

  async create(artwork) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, lat, lon, image_url, author, style_id, city_id, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.description,
        artwork.lat,
        artwork.lon,
        artwork.image_url,
        artwork.author,
        artwork.style_id,
        artwork.city_id,
        artwork.user_id,
      ]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT artwork.id, artwork.title, artwork.description, artwork.lat, artwork.lon, artwork.create_date, artwork.image_url, artwork.author, artwork.isValidated, style.name as style, city.name as city, user.pseudo as pseudo
FROM ${this.table}
INNER JOIN style ON style.id= artwork.style_id
INNER JOIN city ON city_id = artwork.city_id
INNER JOIN user ON user.id = artwork.user_id 
where ${this.table}.id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(artwork) {
    const [result] = await this.database.query(
      `update ${this.table}      set title = ?, description = ?, lat = ?, lon =?, image_url = ?, author = ?, style_id = ?, city_id = ?, user_id = ? where id = ?`,
      [
        artwork.title,
        artwork.description,
        artwork.lat,
        artwork.lon,
        artwork.image_url,
        artwork.author,
        artwork.style_id,
        artwork.city_id,
        artwork.user_id,
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
