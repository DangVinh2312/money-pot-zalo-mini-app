import { IconPlus, IconWallet } from '@tabler/icons-react';
import { Box, Button, Text } from 'zmp-ui';

function Expense() {
  return (
    <Box className='bg-white gap-4 pb-6 rounded-lg shadow-lg' flex flexDirection='column'>
      <Box
        className='bg-indigo-400 px-6 py-4 rounded-t-lg text-white'
        flex
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Text.Title className='mb-2' size='large'>
            Khoản chi
          </Text.Title>
          <Text bold size='large'>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(0)}
          </Text>
        </Box>
        <Button variant='secondary' icon={<IconPlus />} />
      </Box>
      <Box className='gap-4 px-6' flex flexDirection='column'>
        {/* <Box className='border-2 border-solid border-gray-300 rounded-lg p-6'>
          <Text className='text-center'>Chưa có khoản chi nào</Text>
        </Box> */}
        <Box flex justifyContent='space-between' alignItems='center'>
          <Box flex alignItems='center'>
            <IconWallet />
            <Text className='ml-2'>Nguồn thu nhập</Text>
          </Box>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(0)}
        </Box>
        <Box flex justifyContent='space-between' alignItems='center'>
          <Box flex alignItems='center'>
            <IconWallet />
            <Text className='ml-2'>Nguồn thu nhập</Text>
          </Box>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(0)}
        </Box>
        <Box flex justifyContent='space-between' alignItems='center'>
          <Box flex alignItems='center'>
            <IconWallet />
            <Text className='ml-2'>Nguồn thu nhập</Text>
          </Box>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(0)}
        </Box>
      </Box>
    </Box>
  );
}

export default Expense;
