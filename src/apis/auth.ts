import { API_ROUTE, ZALO_ACCESS_TOKEN_HEADER } from '@/configs/constant';
import httpClient from '@/configs/http_client';
import { AccessToken } from '@/types/auth.type';
import { Response } from '@/types/response.type';

const AUTH_PATH = `${API_ROUTE.AUTH}`;

export async function login(accessToken: string): Promise<AccessToken> {
  const response = await httpClient.post<Response<AccessToken>>(
    `${AUTH_PATH}/login`,
    {},
    {
      headers: {
        [ZALO_ACCESS_TOKEN_HEADER]: accessToken,
      },
    },
  );

  return response.data.data;
}
