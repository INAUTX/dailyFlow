import { HabitRepository } from '../repositories/HabitRepository';

export class CreateHabitUseCase {
  constructor(private habitRepo: HabitRepository) {}

  async execute(habitData: {
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
    await this.habitRepo.createHabit(habitData);
  }
}
