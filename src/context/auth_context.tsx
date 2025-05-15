import { accessTokenAtom } from '@/store';
import { useAtom } from 'jotai';

function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  useAtom(accessTokenAtom);

  return children;
}

export default AuthProvider;
