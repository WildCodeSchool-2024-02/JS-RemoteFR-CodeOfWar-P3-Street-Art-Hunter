const AbstractRepository = require("./AbstractRepository");

class FavoriRepository extends AbstractRepository {
    constructor() {
        // Call the constructor of the parent class (AbstractRepository)
        // and pass the table name "favori" as configuration
        super({ table: "favori" });
    }

    // The C of CRUD - Create operation

    async create(favori) {
        // Execute the SQL INSERT query to add a new favori to the "favori" table
        const [result] = await this.database.query(
            `insert into ${this.table} (user_id, artwork_id ) values (?, ?)`,
            [favori.user_id, favori.artwork_id]
        );

        // Return the ID of the newly inserted favori
        return result.insertId;
    }

    // The Rs of CRUD - Read operations

    async read(id) {
        // Execute the SQL SELECT query to retrieve a specific favori by its ID
        const [rows] = await this.database.query(
            `select * from ${this.table} where id = ?`,
            [id]
        );

        // Return the first row of the result, which represents the favori
        return rows[0];
    }

    async readAll() {
        // Execute the SQL SELECT query to retrieve all favoris from the "favori" table
        const [rows] = await this.database.query(`select * from ${this.table}`);

        // Return the array of favoris
        return rows;
    }

    // The U of CRUD - Update operation
    // TODO: Implement the update operation to modify an existing favori

    // async update(favori) {
    //   ...
    // }

    // The D of CRUD - Delete operation
    // TODO: Implement the delete operation to remove an favori by its ID

    // async delete(id) {
    //   ...
    // }
}

module.exports = FavoriRepository;
