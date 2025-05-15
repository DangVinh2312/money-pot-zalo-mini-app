import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import { Box, Input, Sheet } from 'zmp-ui';
import Button from 'zmp-ui/button';

function CreateWalletButton() {
  const [visible, setVisible] = useState(false);

  const incomeForm = useForm({
    defaultValues: {
      name: '',
    },
  });

  return (
    <Box>
      <Button
        className='w-full rounded-none bg-white border-indigo-400 border-solid text-indigo-400'
        prefixIcon={<IconPlus />}
        variant='secondary'
        onClick={() => setVisible(true)}
      >
        Thêm ví mới
      </Button>
      {createPortal(
        <Sheet
          className='bg-white text-black'
          visible={visible}
          title='Tạo ví mới'
          onClose={() => setVisible(false)}
          swipeToClose
          mask
          handler
          autoHeight
        >
          <Box className='gap-2' flex flexDirection='column' alignItems='center' p={4}>
            <Controller
              name='name'
              control={incomeForm.control}
              render={({ field }) => (
                <Input {...field} className='w-full' type='text' label='Tên ví' placeholder='Nhập tên ví' />
              )}
            />

            <Box className='gap-4' flex>
              <Button
                variant='tertiary'
                onClick={() => {
                  setVisible(false);
                  incomeForm.reset();
                }}
              >
                Từ chối
              </Button>
              <Button>Tạo</Button>
            </Box>
          </Box>
        </Sheet>,
        document.body,
      )}
    </Box>
  );
}

export default CreateWalletButton;
