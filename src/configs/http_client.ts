import axios from 'axios';
import { nativeStorage } from 'zmp-sdk/apis';
import { NATIVE_STORAGE_KEY } from './constant';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  const accessToken = nativeStorage.getItem(NATIVE_STORAGE_KEY.ACCESS_TOKEN);

  if (accessToken) {
    config.headers.Authorization = 'Bearer ' + accessToken;
  }

  return config;
}, undefined);

export default httpClient;
