const { getDB } = require("./getDB");

async function createTable() {
  let connection;

  try {
    // Abrimos la conexion a la bbdd
    connection = await getDB();

    console.log("Eliminando tabla en caso que exista...");

    await connection.query(`DROP TABLE IF EXISTS contacto`);

    console.log("Tabla eliminada");

    console.log("Creando tabla...");

    await connection.query(
      `CREATE TABLE IF NOT EXISTS contacto (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL,
                address VARCHAR(50) NOT NULL,
                subject VARCHAR(25) NOT NULL,
                message VARCHAR(1000) NOT NULL
            )`
    );

    console.log("Tabla creada");
  } catch (error) {
    console.error(error.message);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

createTable();
