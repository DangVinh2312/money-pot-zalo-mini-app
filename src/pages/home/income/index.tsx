import { Box, Text } from 'zmp-ui';
import CreateIncomeButton from './create_button';

function Income() {
  return (
    <Box className='bg-white gap-4 pb-6 rounded-lg shadow-lg' flex flexDirection='column'>
      <Box
        className='bg-orange-300 px-6 py-4 rounded-t-lg text-white'
        flex
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Text.Title className='mb-2' size='large'>
            Thu nhập
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
        <CreateIncomeButton />
      </Box>
      <Box className='gap-2 px-6' flex flexDirection='column'>
        <Box className='border-2 border-solid border-gray-300 rounded-lg p-6'>
          <Text className='text-center'>Chưa có nguồn thu nhập nào</Text>
        </Box>
        {/* <Box flex justifyContent='space-between' alignItems='center'>
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
        </Box> */}
      </Box>
    </Box>
  );
}

export default Income;
