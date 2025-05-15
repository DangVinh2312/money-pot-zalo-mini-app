import { atom } from 'jotai';
import { getAccessToken, nativeStorage } from 'zmp-sdk/apis';
import { login } from './apis/auth';
import { NATIVE_STORAGE_KEY } from './configs/constant';

export const accessTokenAtom = atom(async () => {
  const accessToken = nativeStorage.getItem(NATIVE_STORAGE_KEY.ACCESS_TOKEN);
  if (accessToken) {
    return accessToken;
  }

  const zaloAccessToken = await getAccessToken();
  const auth = await login(zaloAccessToken);

  nativeStorage.setItem(NATIVE_STORAGE_KEY.ACCESS_TOKEN, auth.accessToken);

  return auth.accessToken;
});
