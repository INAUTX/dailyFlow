import { getDBConnection } from '../db/database';

export async function insertHabito(habito: {
  usuario_id: number;
  nombre: string;
  descripcion: string;
  frecuencia: string;
  hora_programada: string;
  fecha_inicio: string; 
  activo: boolean;
  racha_actual: number;
  racha_maxima: number;
}): Promise<void> {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO habitos
    (usuario_id, nombre, descripcion, frecuencia, hora_programada, fecha_inicio, activo, racha_actual, racha_maxima)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      habito.usuario_id,
      habito.nombre,
      habito.descripcion,
      habito.frecuencia,
      habito.hora_programada,
      habito.fecha_inicio,
      habito.activo ? 1 : 0,
      habito.racha_actual,
      habito.racha_maxima,
    ]
  );
}

export async function getHabitosByUser(usuario_id: number) {
  const db = await getDBConnection();
  const results = await db.executeSql(
    `SELECT * FROM habitos WHERE usuario_id = ?`,
    [usuario_id]
  );
  const rows = results[0].rows;
  const items = [];
  for (let i = 0; i < rows.length; i++) {
    items.push(rows.item(i));
  }
  return items;
}
