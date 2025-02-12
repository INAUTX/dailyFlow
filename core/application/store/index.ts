import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import habitsReducer from './habits/habits.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    habits: habitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
