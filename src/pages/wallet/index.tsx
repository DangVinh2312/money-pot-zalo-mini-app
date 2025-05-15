import { getWallets } from '@/apis/wallet';
import PageContainer from '@/components/page_container';
import { API_ROUTE } from '@/configs/constant';
import { useAtom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { Box, List } from 'zmp-ui';
import CreateWalletButton from './create_button';

const moneyPots = atomWithQuery(() => ({
  queryKey: [API_ROUTE.WALLET],
  queryFn: getWallets,
}));

function WalletPage() {
  const [{ data, isSuccess }] = useAtom(moneyPots);

  return (
    <PageContainer pageTitle='Danh sách ví' withBottomNavigator withBackIcon>
      <Box className='flex-1 overflow-y-auto w-full min-h-0 gap-4 p-4' flex flexDirection='column'>
        <List className='rounded-lg bg-white p-4 shadow' noSpacing>
          {isSuccess &&
            data.length > 0 &&
            data.map((moneyPot) => (
              <List.Item
                key={moneyPot.id}
                title={moneyPot.name}
                onClick={() => {
                  // Handle click event
                }}
              />
            ))}
          {isSuccess && data.length === 0 && <List.Item title='Chưa có ví nào' />}
          <List.Item>
            <CreateWalletButton />
          </List.Item>
        </List>
      </Box>
    </PageContainer>
  );
}

export default WalletPage;
