import { IconPlus } from '@tabler/icons-react';
import { atom, useAtom } from 'jotai';
import { createPortal } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Input, Select, Sheet } from 'zmp-ui';

const visibleAtom = atom(false);

function CreateIncomeButton() {
  const [visible, setVisible] = useAtom(visibleAtom);

  const incomeForm = useForm({
    defaultValues: {
      name: '',
      otherName: '',
      amount: 0,
      date: new Date(),
    },
  });

  return (
    <Box>
      <Button variant='secondary' icon={<IconPlus />} onClick={() => setVisible(true)} />
      {createPortal(
        <Sheet
          className='bg-white text-black'
          visible={visible}
          title='Tạo thu nhập'
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
                <Select {...field} className='w-full' label='Thu nhập' placeholder='Chọn nguồn thu nhập'>
                  <Select.Option title='Thu nhập' value='income' />
                  <Select.Option title='Chi tiêu' value='expense' />
                </Select>
              )}
            />
            <Controller
              name='amount'
              control={incomeForm.control}
              render={({ field }) => (
                <Input
                  {...field}
                  className='w-full'
                  type='text'
                  label='Số tiền'
                  placeholder='Nhập số tiền'
                  inputMode='numeric'
                />
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

export default CreateIncomeButton;
