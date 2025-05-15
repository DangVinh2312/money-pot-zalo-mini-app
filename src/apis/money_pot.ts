import { API_ROUTE } from '@/configs/constant';
import httpClient from '@/configs/http_client';

export async function getMoneyPots() {
  const response = await httpClient.get(API_ROUTE.MONEY_POT);
  return response.data;
}
