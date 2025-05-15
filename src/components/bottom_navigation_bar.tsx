import { APP_ROUTES } from '@/configs/constant';
import { atom, useAtom } from 'jotai';
import React from 'react';
import { BottomNavigation, Icon, useNavigate } from 'zmp-ui';
import { ZMPNavigationOptions } from 'zmp-ui/useNavigate';

type NavigationBarItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  link: string;
  options?: ZMPNavigationOptions;
};

const navigationBarItems: NavigationBarItem[] = [
  {
    key: 'home',
    icon: <Icon icon='zi-home' />,
    label: 'Trang chủ',
    link: APP_ROUTES.HOME,
  },
  {
    key: 'account',
    icon: <Icon icon='zi-user' />,
    label: 'Tài khoản',
    link: APP_ROUTES.ACCOUNT,
  },
];

const activeKeyAtom = atom(navigationBarItems[0].key);

function BottomNavigationBar() {
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useAtom(activeKeyAtom);

  return (
    <BottomNavigation className='sticky' activeKey={activeKey} fixed>
      {navigationBarItems.map((item) => (
        <BottomNavigation.Item
          key={item.key}
          icon={item.icon}
          label={item.label}
          onClick={() => {
            setActiveKey(item.key);
            navigate(item.link, item.options);
          }}
        />
      ))}
    </BottomNavigation>
  );
}

export default BottomNavigationBar;
