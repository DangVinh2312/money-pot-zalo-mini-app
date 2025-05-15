import { atom, useAtom } from 'jotai';
import { getUserInfo } from 'zmp-sdk/apis';
import { Avatar, Box, Text } from 'zmp-ui';

const getUserInfoAtom = atom(async () => {
  const { userInfo } = await getUserInfo({
    autoRequestPermission: true,
  });
  return userInfo;
});

function UserInfor() {
  const [userInfo] = useAtom(getUserInfoAtom);

  return (
    <Box className='gap-2' flex flexDirection='column' alignItems='center'>
      <Avatar src={userInfo.avatar} />
      <Text.Title>{userInfo.name}</Text.Title>
    </Box>
  );
}

export default UserInfor;
