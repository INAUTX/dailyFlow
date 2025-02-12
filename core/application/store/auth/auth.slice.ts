import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, loadTokensThunk, logoutThunk } from './auth.thunks';

interface AuthState {
  userId: number | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userId: null,
  accessToken: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al iniciar sesión';
      })
      // register
      .addCase(registerThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al registrarse';
      })
      // load tokens
      .addCase(loadTokensThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.userId = action.payload.userId;
          state.accessToken = action.payload.accessToken;
        }
      })
      // logout
      .addCase(logoutThunk.fulfilled, state => {
        state.userId = null;
        state.accessToken = null;
      });
  },
});

export default authSlice.reducer;
