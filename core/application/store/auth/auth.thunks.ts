import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthRepositoryImpl } from 'src/app/infra/auth/AuthRepositoryImpl';

const authRepo = new AuthRepositoryImpl();

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const result = await authRepo.login(email, password);
    return result; // { userId, accessToken }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async ({ nombre, email, password }: { nombre: string; email: string; password: string }) => {
    const result = await authRepo.register(nombre, email, password);
    return result; // { message, userId, ...}
  }
);

export const loadTokensThunk = createAsyncThunk('auth/loadTokens', async () => {
  const tokens = await authRepo.getCurrentUserTokens();
  return tokens;
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authRepo.logout();
});
