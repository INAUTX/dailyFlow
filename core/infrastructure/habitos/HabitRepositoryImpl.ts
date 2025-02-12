import { HabitRepository } from 'src/app/domain/habitos/repositories/HabitRepository';
import { insertHabito, getHabitosByUser } from './HabitosSQLite';

export class HabitRepositoryImpl implements HabitRepository {
  async createHabit(habitData: {
    usuario_id: number;
    nombre: string;
    descripcion: string;
    frecuencia: string;
    hora_programada: string;
    fecha_inicio: string;
    activo: boolean;
    racha_actual: number;
    racha_maxima: number;
  }) {
    await insertHabito(habitData);
  }

  async getHabits(usuario_id: number) {
    return await getHabitosByUser(usuario_id);
  }
}
