import { Box, Text } from 'zmp-ui';

function Balance() {
  return (
    <Box
      className='bg-red-300 text-white px-6 py-4 rounded-lg shadow-lg'
      flex
      justifyContent='space-between'
      alignItems='center'
    >
      <Text.Title>Số dư</Text.Title>
      <Text bold size='large'>
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(0)}
      </Text>
    </Box>
  );
}

export default Balance;
