export interface HabitRepository {
    createHabit(habitData: {
      usuario_id: number;
      nombre: string;
      descripcion: string;
      frecuencia: string;
      hora_programada: string;
      fecha_inicio: string;
      activo: boolean;
      racha_actual: number;
      racha_maxima: number;
    }): Promise<void>;
  
    getHabits(usuario_id: number): Promise<any[]>;
  }
  