import PageContainer from '@/components/page_container';
import { APP_ROUTES } from '@/configs/constant';
import { IconCoin, IconWallet } from '@tabler/icons-react';
import { Box, Icon, Text, useNavigate } from 'zmp-ui';

function AccountPage() {
  const navigate = useNavigate();

  return (
    <PageContainer pageTitle='Tài khoản' withBottomNavigator>
      <Box className='flex-1 overflow-y-auto w-full min-h-0 gap-4 p-4' flex flexDirection='column'>
        <Box
          className='rounded-lg bg-white p-4 shadow'
          flex
          justifyContent='space-between'
          alignItems='center'
          onClick={() => {
            navigate(APP_ROUTES.MONEY_POT);
          }}
        >
          <Box className='gap-2' flex alignItems='center'>
            <IconCoin size={32} />
            <Box flex flexDirection='column'>
              <Text.Title>Khoản chi</Text.Title>
              <Text>Quản lý các khoản chi</Text>
            </Box>
          </Box>
          <Icon icon='zi-chevron-right' />
        </Box>
        <Box
          className='rounded-lg bg-white p-4 shadow'
          flex
          justifyContent='space-between'
          alignItems='center'
          onClick={() => {
            navigate(APP_ROUTES.WALLET);
          }}
        >
          <Box className='gap-2' flex alignItems='center'>
            <IconWallet size={32} />
            <Box flex flexDirection='column'>
              <Text.Title>Ví của tôi</Text.Title>
              <Text>Quản lý danh sách ví</Text>
            </Box>
          </Box>
          <Icon icon='zi-chevron-right' />
        </Box>
      </Box>
    </PageContainer>
  );
}

export default AccountPage;
