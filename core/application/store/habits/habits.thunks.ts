import { createAsyncThunk } from '@reduxjs/toolkit';
import { HabitRepositoryImpl } from '../../../infrastructure/habitos/HabitRepositoryImpl';

const habitRepo = new HabitRepositoryImpl();

export const getHabitsThunk = createAsyncThunk(
  'habits/getHabits',
  async (usuario_id: number) => {
    const habits = await habitRepo.getHabits(usuario_id);
    return habits; // array
  }
);

export const createHabitThunk = createAsyncThunk(
  'habits/createHabit',
  async (habitData: {
    usuario_id: number;
    nombre: string;
    descripcion: string;
    frecuencia: string;
    hora_programada: string;
    fecha_inicio: string;
    activo: boolean;
    racha_actual: number;
    racha_maxima: number;
  }, { dispatch }) => {
    await habitRepo.createHabit(habitData);
    // actualizar la lista
    dispatch(getHabitsThunk(habitData.usuario_id));
  }
);
