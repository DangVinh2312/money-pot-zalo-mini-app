import { getMoneyPots } from '@/apis/money_pot';
import PageContainer from '@/components/page_container';
import { API_ROUTE } from '@/configs/constant';
import { useAtom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { Box, List } from 'zmp-ui';
import CreateMoneyPotButton from './create_button';

const moneyPots = atomWithQuery(() => ({
  queryKey: [API_ROUTE.MONEY_POT],
  queryFn: getMoneyPots,
}));

function MoneyPotPage() {
  const [{ data, isSuccess }] = useAtom(moneyPots);

  return (
    <PageContainer pageTitle='Danh sách hũ' withBottomNavigator withBackIcon>
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
          {isSuccess && data.length === 0 && <List.Item title='Chưa có hũ nào' />}
          <List.Item>
            <CreateMoneyPotButton />
          </List.Item>
        </List>
      </Box>
    </PageContainer>
  );
}

export default MoneyPotPage;
