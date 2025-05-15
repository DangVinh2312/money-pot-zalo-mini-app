import { API_ROUTE } from '@/configs/constant';
import httpClient from '@/configs/http_client';

export async function getWallets() {
  const response = await httpClient.get(API_ROUTE.WALLET);
  return response.data;
}
