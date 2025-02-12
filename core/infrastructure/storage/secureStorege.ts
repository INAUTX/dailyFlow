import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crypto from 'crypto';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || Buffer; 

// ORGANIZAR EN .env
const SECRET_KEY = 'abcdefghijklmnopabcdefghijklmnop'; 
const IV = '1234567890123456';

function encrypt(text: string): string {
  const cipher = crypto.createCipheriv('aes-256-cbc', SECRET_KEY, IV);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

function decrypt(encryptedText: string): string {
  const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, IV);
  let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Almacenar tokens y userId
export async function storeTokens(data: {
  accessToken: string;
  refreshToken?: string;
  userId: number;
}) {
  const plainText = JSON.stringify(data);
  const encryptedText = encrypt(plainText);
  await AsyncStorage.setItem('APP_TOKENS', encryptedText);
}

// Obtener tokens y userId
export async function getTokens() {
  const encryptedText = await AsyncStorage.getItem('APP_TOKENS');
  if (!encryptedText) return null;
  try {
    const decryptedText = decrypt(encryptedText);
    return JSON.parse(decryptedText);
  } catch (error) {
    console.error('Error al desencriptar tokens', error);
    return null;
  }
}

// Borrar tokens
export async function clearTokens() {
  await AsyncStorage.removeItem('APP_TOKENS');
}
