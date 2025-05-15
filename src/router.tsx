import AccountPage from '@/pages/account';
import HomePage from '@/pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { Provider } from 'jotai/react';
import { useHydrateAtoms } from 'jotai/react/utils';
import { Suspense } from 'react';
import { getSystemInfo } from 'zmp-sdk/apis';
import { AnimationRoutes, App, Route, SnackbarProvider, ZMPRouter } from 'zmp-ui';
import { AppProps } from 'zmp-ui/app';
import { APP_ROUTES } from './configs/constant';
import AuthProvider from './context/auth_context';
import MoneyPotPage from './pages/money_pot';
import WalletPage from './pages/wallet';

const queryClient = new QueryClient();

const HydrateAtoms = ({ children }) => {
  useHydrateAtoms(new Map([[queryClientAtom, queryClient]]));
  return children;
};

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthProvider>
              <App theme={getSystemInfo().zaloTheme as AppProps['theme']}>
                <SnackbarProvider>
                  <ZMPRouter>
                    <AnimationRoutes>
                      <Route path={APP_ROUTES.HOME} element={<HomePage />} />
                      <Route path={APP_ROUTES.ACCOUNT} element={<AccountPage />} />
                      <Route path={APP_ROUTES.MONEY_POT} element={<MoneyPotPage />} />
                      <Route path={APP_ROUTES.WALLET} element={<WalletPage />} />
                    </AnimationRoutes>
                  </ZMPRouter>
                </SnackbarProvider>
              </App>
            </AuthProvider>
          </Suspense>
        </HydrateAtoms>
      </Provider>
    </QueryClientProvider>
  );
}
export default Router;
