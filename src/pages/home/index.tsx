import PageContainer from '@/components/page_container';
import dayjs from 'dayjs';
import { Box, Text } from 'zmp-ui';
import Balance from './balance';
import Expense from './expense';
import Income from './income';

function HomePage() {
  return (
    <PageContainer pageTitle='Hũ tiêu dùng' withBottomNavigator>
      <Box className='flex-1 overflow-y-auto w-full min-h-0 gap-4 p-4' flex flexDirection='column'>
        <Box className='mb-2' flex flexWrap={false} justifyContent='space-between' alignItems='center'>
          <Text.Title size='large'>{dayjs().format('MM/YYYY')}</Text.Title>
        </Box>
        <Balance />
        <Income />
        <Expense />
      </Box>
    </PageContainer>
  );
}

export default HomePage;
