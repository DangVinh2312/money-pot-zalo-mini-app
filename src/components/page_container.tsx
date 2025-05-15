import { Header, Page } from 'zmp-ui';
import BottomNavigationBar from './bottom_navigation_bar';

function PageContainer({
  pageTitle,
  children,
  withBottomNavigator = false,
  withBackIcon = false,
}: Readonly<{ children: React.ReactNode; withBottomNavigator?: boolean; pageTitle: string; withBackIcon?: boolean }>) {
  return (
    <Page className='flex flex-col gap-2'>
      <Header className='sticky' title={pageTitle} showBackIcon={withBackIcon} />
      {children}
      {withBottomNavigator && <BottomNavigationBar />}
    </Page>
  );
}

export default PageContainer;
