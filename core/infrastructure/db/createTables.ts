import { getDBConnection } from './database';

export const createTables = async () => {
  try {
    const db = await getDBConnection();

    // Activar llaves foráneas en SQLite
    await db.executeSql('PRAGMA foreign_keys = ON;');

    // // Tabla usuarios
    // await db.executeSql(`
    //   CREATE TABLE IF NOT EXISTS usuarios (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     nombre TEXT,
    //     email TEXT UNIQUE,
    //     password TEXT
    //   );
    // `);

    // Tabla habitos
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS habitos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER,
        nombre TEXT,
        descripcion TEXT,
        frecuencia TEXT,
        hora_programada TEXT,
        fecha_inicio DATE,
        activo BOOLEAN,
        racha_actual INTEGER,
        racha_maxima INTEGER,
      );
    `);

    // Tabla registros_cumplimiento
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS registros_cumplimiento (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        habito_id INTEGER,
        usuario_id INTEGER,
        fecha DATE,
        cumplido BOOLEAN,
        nota TEXT,
        adjunto TEXT,
        FOREIGN KEY(habito_id) REFERENCES habitos(id) ON DELETE CASCADE
      );
    `);

    // Tabla notificaciones
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS notificaciones (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        habito_id INTEGER,
        usuario_id INTEGER,
        hora_notificacion TEXT,
        tipo_repeticion TEXT,
        mensaje TEXT,
        FOREIGN KEY(habito_id) REFERENCES habitos(id) ON DELETE CASCADE
      );
    `);

    // para cerrar la conexión para evitar overhead -->
    // await db.close();
    console.log('Tablas creadas/verificadas con éxito');
  } catch (error) {
    console.error('Error al crear tablas SQLite', error);
  }
};
