import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

// habilitar depuración
SQLite.enablePromise(true);

export const getDBConnection = async () : Promise<SQLiteDatabase> => {
  try {
    const db = await SQLite.openDatabase({
      name: 'dailyFlow.db',
      location: 'default',
    });
    console.log('base de datos abierta');
    return db;
  } catch (error) {
    console.error('erro al abrir la base de datos', error);
    throw error;
  }
};
