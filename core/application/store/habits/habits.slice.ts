import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHabitsThunk, createHabitThunk } from './habits.thunks';

interface HabitState {
  id: number;
  usuario_id: number;
  nombre: string;
  descripcion: string;
  frecuencia: string;
  hora_programada: string;
  fecha_inicio: string;
  activo: boolean;
  racha_actual: number;
  racha_maxima: number;
}

interface HabitsState {
  list: HabitState[];
  loading: boolean;
  error: string | null;
}

const initialState: HabitsState = {
  list: [],
  loading: false,
  error: null,
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getHabitsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getHabitsThunk.fulfilled, (state, action: PayloadAction<HabitState[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getHabitsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error cargando hábitos';
      })
      .addCase(createHabitThunk.pending, state => {
        state.loading = true;
      })
      .addCase(createHabitThunk.fulfilled, state => {
        state.loading = false;
      })
      .addCase(createHabitThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error creando hábito';
      });
  },
});

export default habitsSlice.reducer;
