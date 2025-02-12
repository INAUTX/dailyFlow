import { AuthRepository } from 'src/app/domain/auth/repositories/AuthRepository';
import { AuthAPI } from './AuthAPI';
import { storeTokens, getTokens, clearTokens } from 'src/app/infra/storage/secureStorage';

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string) {
    const data = await AuthAPI.login(email, password);
    /*
      data = {
        access_token: string,
        refresh_token?: string,
        userId: number
      }
    */
    await storeTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      userId: data.userId,
    });
    return {
      userId: data.userId,
      accessToken: data.access_token,
    };
  }

  async register(nombre: string, email: string, password: string) {
    const data = await AuthAPI.register(nombre, email, password);
    // { message, userId }
    return data;
  }

  async logout() {
    await clearTokens();
  }

  async getCurrentUserTokens() {
    return await getTokens(); // { accessToken, refreshToken, userId } | null
  }

  async refreshToken(userId: number, refreshToken: string) {
    const data = await AuthAPI.refreshToken(userId, refreshToken);
    await storeTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      userId,
    });
    return data;
  }
}
